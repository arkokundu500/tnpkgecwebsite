"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function AlumniPage() {
    const [alumni, setAlumni] = useState<Alumni[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchAlumni() {
            try {
                const res = await fetch(`${API_URL}/api/alumni`);
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setAlumni(data);
            } catch (err) {
                console.error("Error fetching alumni:", err);
                setError("Unable to load alumni data. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchAlumni();
    }, []);

    // Filter alumni based on search query
    const filtered = useMemo(() => {
        if (!search.trim()) return alumni;
        const q = search.toLowerCase().trim();
        return alumni.filter(
            (a) =>
                a.name.toLowerCase().includes(q) ||
                a.company.toLowerCase().includes(q) ||
                a.role.toLowerCase().includes(q) ||
                String(a.year).includes(q)
        );
    }, [alumni, search]);

    // Group filtered alumni by year (descending)
    const grouped = useMemo(() => {
        return filtered.reduce<Record<number, Alumni[]>>((acc, a) => {
            if (!acc[a.year]) acc[a.year] = [];
            acc[a.year].push(a);
            return acc;
        }, {});
    }, [filtered]);

    const sortedYears = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div>
            {/* Hero Banner */}
            <section className="gradient-primary py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                        Notable Alumni
                    </h1>
                    <p className="text-blue-200 text-lg leading-relaxed mb-8">
                        Our graduates are making a mark across the globe — in leading tech
                        companies, research institutions, and academia.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <svg
                                className="w-5 h-5 text-blue-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, company, role or batch year..."
                            className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white placeholder-blue-200/70 outline-none focus:bg-white/20 focus:border-white/50 transition-all text-sm"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute inset-y-0 right-4 flex items-center text-blue-200 hover:text-white transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Alumni Grid by Year */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Result count when searching */}
                    {search.trim() && !loading && !error && (
                        <div className="mb-8 flex items-center gap-3">
                            <span className="px-4 py-2 rounded-xl bg-blue-50 text-blue-800 text-sm font-semibold border border-blue-100">
                                {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
                                &ldquo;{search.trim()}&rdquo;
                            </span>
                            <button
                                onClick={() => setSearch("")}
                                className="text-sm text-gray-500 hover:text-blue-700 transition-colors"
                            >
                                Clear search
                            </button>
                        </div>
                    )}

                    {loading && (
                        <div className="text-center py-20">
                            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">Loading alumni data...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚠️</span>
                            </div>
                            <p className="text-red-600 text-lg font-medium">{error}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                The server may be starting up. Please refresh in a moment.
                            </p>
                        </div>
                    )}

                    {!loading && !error && alumni.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
                                No alumni data available yet. Add alumni through the admin
                                dashboard.
                            </p>
                        </div>
                    )}

                    {!loading && !error && alumni.length > 0 && filtered.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg font-medium">
                                No alumni found matching &ldquo;{search.trim()}&rdquo;
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Try a different name, company, or batch year.
                            </p>
                        </div>
                    )}

                    {sortedYears.map((year) => (
                        <div key={year} className="mb-16 last:mb-0">
                            {/* Year Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="px-5 py-2 rounded-xl gradient-primary text-white font-bold text-lg shadow-md">
                                    Batch of {year}
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
                                <span className="text-sm text-gray-400 font-medium">
                                    {grouped[year].length} alumni
                                </span>
                            </div>

                            {/* Alumni Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {grouped[year].map((a) => (
                                    <div
                                        key={a._id}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover text-center p-6 group"
                                    >
                                        {/* Photo */}
                                        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3 border-blue-100 bg-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
                                            <Image
                                                src={
                                                    a.photo
                                                        ? `/alumni/${a.photo}.jpg`
                                                        : `data:image/svg+xml,${encodeURIComponent(
                                                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="#dbeafe" width="96" height="96"/><text x="48" y="54" text-anchor="middle" fill="#1e3a8a" font-size="28" font-weight="bold">${a.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}</text></svg>`
                                                        )}`
                                                }
                                                alt={a.name}
                                                width={96}
                                                height={96}
                                                className="object-cover w-full h-full"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    const initials = a.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("");
                                                    target.src = `data:image/svg+xml,${encodeURIComponent(
                                                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="#dbeafe" width="96" height="96"/><text x="48" y="54" text-anchor="middle" fill="#1e3a8a" font-size="28" font-weight="bold">${initials}</text></svg>`
                                                    )}`;
                                                }}
                                            />
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-base font-bold text-gray-900 mb-1 uppercase tracking-wide">
                                            {a.name}
                                        </h3>

                                        {/* Role */}
                                        <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                                            {a.role}
                                        </p>

                                        {/* Company */}
                                        <p className="text-sm font-bold text-blue-900 mb-3">
                                            {a.company}
                                        </p>

                                        {/* LinkedIn */}
                                        <Link
                                            href={a.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 transition-colors font-medium"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            {a.name.toLowerCase().replace(/\s+/g, "-")}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
