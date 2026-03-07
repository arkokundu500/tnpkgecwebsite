"use client";

import { useState, useEffect, FormEvent } from "react";

interface Alumni {
    _id: string;
    name: string;
    year: number;
    role: string;
    company: string;
    linkedin: string;
    photo: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://tnpkgecwebsite.onrender.com";

export default function AlumniAdminPage() {
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginForm, setLoginForm] = useState({ username: "", password: "" });
    const [loginError, setLoginError] = useState("");

    const [alumni, setAlumni] = useState<Alumni[]>([]);
    const [loading, setLoading] = useState(false);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: "",
        year: "",
        role: "",
        company: "",
        linkedin: "",
        photo: "",
    });
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    // Check for stored token on mount
    useEffect(() => {
        const stored = localStorage.getItem("alumni_admin_token");
        if (stored) {
            setToken(stored);
            setIsLoggedIn(true);
        }
    }, []);

    // Fetch alumni when logged in
    useEffect(() => {
        if (isLoggedIn) fetchAlumni();
    }, [isLoggedIn]);

    async function fetchAlumni() {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/alumni`);
            const data = await res.json();
            setAlumni(data);
        } catch {
            console.error("Failed to fetch alumni");
        } finally {
            setLoading(false);
        }
    }

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        setLoginError("");
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginForm),
            });
            const data = await res.json();
            if (!res.ok) {
                setLoginError(data.error || "Login failed");
                return;
            }
            setToken(data.token);
            setIsLoggedIn(true);
            localStorage.setItem("alumni_admin_token", data.token);
        } catch {
            setLoginError("Unable to connect to server");
        }
    }

    function handleLogout() {
        setToken("");
        setIsLoggedIn(false);
        localStorage.removeItem("alumni_admin_token");
    }

    function resetForm() {
        setForm({ name: "", year: "", role: "", company: "", linkedin: "", photo: "" });
        setEditingId(null);
        setFormError("");
        setFormSuccess("");
    }

    function startEdit(a: Alumni) {
        setEditingId(a._id);
        setForm({
            name: a.name,
            year: String(a.year),
            role: a.role,
            company: a.company,
            linkedin: a.linkedin,
            photo: a.photo,
        });
        setFormSuccess("");
        setFormError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setFormError("");
        setFormSuccess("");

        if (!form.name || !form.year || !form.role || !form.company || !form.linkedin) {
            setFormError("All fields are required");
            return;
        }

        try {
            const url = editingId
                ? `${API_URL}/api/alumni/${editingId}`
                : `${API_URL}/api/alumni`;

            const res = await fetch(url, {
                method: editingId ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...form, year: Number(form.year) }),
            });

            const data = await res.json();

            if (!res.ok) {
                setFormError(data.error || "Operation failed");
                return;
            }

            setFormSuccess(editingId ? "Alumni updated successfully!" : "Alumni added successfully!");
            resetForm();
            fetchAlumni();
        } catch {
            setFormError("Failed to save. Is the server running?");
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this alumni?")) return;

        try {
            const res = await fetch(`${API_URL}/api/alumni/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!res.ok) {
                const data = await res.json();
                alert(data.error || "Delete failed");
                return;
            }

            fetchAlumni();
        } catch {
            alert("Failed to delete");
        }
    }

    // ─── LOGIN SCREEN ───────────────────────────────────────
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen gradient-primary flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg">
                            🔐
                        </div>
                        <h1 className="text-2xl font-extrabold text-blue-900">
                            Alumni Admin
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            KGEC T&amp;P Cell — Restricted Access
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={loginForm.username}
                                onChange={(e) =>
                                    setLoginForm({ ...loginForm, username: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={loginForm.password}
                                onChange={(e) =>
                                    setLoginForm({ ...loginForm, password: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        {loginError && (
                            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                                {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full btn-primary justify-center py-3 rounded-xl text-base"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ─── ADMIN DASHBOARD ────────────────────────────────────
    return (
        <div>
            {/* Header */}
            <section className="gradient-primary py-8 px-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-extrabold text-white">
                            Alumni Dashboard
                        </h1>
                        <p className="text-blue-200 text-sm">
                            Manage alumni records — {alumni.length} entries
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all text-sm font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Add / Edit Form */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 mb-10 shadow-sm">
                        <h2 className="text-xl font-bold text-blue-900 mb-6">
                            {editingId ? "✏️ Edit Alumni" : "➕ Add New Alumni"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="e.g. Pravash Ranjan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Batch Year *
                                    </label>
                                    <input
                                        type="number"
                                        value={form.year}
                                        onChange={(e) => setForm({ ...form, year: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="e.g. 2020"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Role / Designation *
                                    </label>
                                    <input
                                        type="text"
                                        value={form.role}
                                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="e.g. Software Engineer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="e.g. Microsoft"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        LinkedIn URL *
                                    </label>
                                    <input
                                        type="url"
                                        value={form.linkedin}
                                        onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Photo Filename (optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={form.photo}
                                        onChange={(e) => setForm({ ...form, photo: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 text-sm"
                                        placeholder="e.g. Pravash Ranjan (without .jpg)"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">
                                        Place the photo as <code>public/alumni/NAME.jpg</code>
                                    </p>
                                </div>
                            </div>

                            {formError && (
                                <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                                    {formError}
                                </div>
                            )}
                            {formSuccess && (
                                <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                                    {formSuccess}
                                </div>
                            )}

                            <div className="flex gap-3 mt-6">
                                <button
                                    type="submit"
                                    className="btn-primary px-6 py-2.5 rounded-xl text-sm"
                                >
                                    {editingId ? "Update Alumni" : "Add Alumni"}
                                </button>
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all text-sm font-semibold"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Alumni Table */}
                    <h2 className="text-xl font-bold text-blue-900 mb-6">
                        All Alumni ({alumni.length})
                    </h2>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
                        </div>
                    ) : alumni.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-gray-500">
                                No alumni records yet. Use the form above to add one.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-2xl border border-blue-100">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="gradient-primary text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                                        <th className="px-4 py-3 text-left font-semibold">Year</th>
                                        <th className="px-4 py-3 text-left font-semibold">Role</th>
                                        <th className="px-4 py-3 text-left font-semibold">
                                            Company
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold">
                                            LinkedIn
                                        </th>
                                        <th className="px-4 py-3 text-center font-semibold">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alumni.map((a, i) => (
                                        <tr
                                            key={a._id}
                                            className={`border-b border-blue-50 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                                                }`}
                                        >
                                            <td className="px-4 py-3 font-semibold text-gray-900">
                                                {a.name}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">{a.year}</td>
                                            <td className="px-4 py-3 text-gray-600">{a.role}</td>
                                            <td className="px-4 py-3 font-semibold text-blue-800">
                                                {a.company}
                                            </td>
                                            <td className="px-4 py-3">
                                                <a
                                                    href={a.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline text-xs"
                                                >
                                                    Profile ↗
                                                </a>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => startEdit(a)}
                                                        className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-all text-xs font-semibold"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(a._id)}
                                                        className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-xs font-semibold"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
