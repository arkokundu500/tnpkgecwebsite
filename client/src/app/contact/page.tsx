"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Prof. Mrinal Kanti Kumar",
        role: "Training & Placement Officer",
        email: "tnp_kgec@kgec.edu.in",
        phone: "+91-9876543210",
        image: "/team/tpo.jpg",
        isPrimary: true,
    },
    {
        name: "Syamantak Pyne",
        role: "CSE",
        email: "sctp@kgec.edu.in",
        phone: "+91-79801 24815",
        image: "/team/coordinator1.jpg",
        isPrimary: false,
    },
    {
        name: "Arko Kundu",
        role: "ECE",
        email: "sctp@kgec.edu.in",
        phone: "+91-74398 17750",
        image: "/team/coordinator2.jpg",
        isPrimary: false,
    },
    {
        name: "Arkadeep Mukherjee",
        role: "EE",
        email: "sctp@kgec.edu.in",
        phone: "+91-94774 04977",
        image: "/team/coordinator3.jpg",
        isPrimary: false,
    },
    {
        name: "Afzal Hossain Mullick",
        role: "ME",
        email: "sctp@kgec.edu.in",
        phone: "+91-98327 66191",
        image: "/team/coordinator4.jpg",
        isPrimary: false,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setStatusMessage("Message sent successfully! We will get back to you soon.");
                setFormData({ name: "", email: "", purpose: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(data.error || "Failed to send message. Please try again.");
            }
        } catch {
            setStatus("error");
            setStatusMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div>
            {/* Hero Banner */}
            <section className="gradient-primary py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                        Contact Us
                    </h1>
                    <p className="text-blue-200 text-lg">
                        Get in touch with the Training &amp; Placement Cell team.
                    </p>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4">Meet the Team</h2>
                    <p className="section-subtitle text-center">
                        Our dedicated team ensuring a seamless placement experience.
                    </p>

                    {/* TPO Card - Featured */}
                    <div className="mb-12">
                        <div className="max-w-lg mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg border border-blue-100 card-hover">
                            <div className="gradient-primary p-1" />
                            <div className="p-8 text-center">
                                <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-200 shadow-lg bg-gray-200">
                                    <Image
                                        src={teamMembers[0].image}
                                        alt={teamMembers[0].name}
                                        width={112}
                                        height={112}
                                        className="object-cover w-full h-full"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `data:image/svg+xml,${encodeURIComponent(
                                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112"><rect fill="#dbeafe" width="112" height="112"/><text x="56" y="62" text-anchor="middle" fill="#1e3a8a" font-size="36" font-weight="bold">TPO</text></svg>'
                                            )}`;
                                        }}
                                    />
                                </div>
                                <span className="px-3 py-1 bg-blue-900 text-white text-xs font-bold rounded-full">
                                    {teamMembers[0].role}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-4">
                                    {teamMembers[0].name}
                                </h3>
                                <div className="space-y-2">
                                    <a
                                        href={`mailto:${teamMembers[0].email}`}
                                        className="flex items-center justify-center gap-2 text-blue-700 hover:text-blue-900 transition-colors text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {teamMembers[0].email}
                                    </a>
                                    <a
                                        href={`tel:${teamMembers[0].phone}`}
                                        className="flex items-center justify-center gap-2 text-blue-700 hover:text-blue-900 transition-colors text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {teamMembers[0].phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinators Section */}
                    <h3 className="text-xl font-bold text-blue-900 text-center mb-8">
                        Placement Coordinators
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.slice(1).map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover"
                            >
                                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800" />
                                <div className="p-6 text-center">
                                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-3 border-blue-100 bg-gray-200">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `data:image/svg+xml,${encodeURIComponent(
                                                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect fill="#dbeafe" width="80" height="80"/><text x="40" y="46" text-anchor="middle" fill="#1e3a8a" font-size="24" font-weight="bold">C${index + 1}</text></svg>`
                                                )}`;
                                            }}
                                        />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-xs text-blue-600 font-semibold mb-3">
                                        {member.role}
                                    </p>
                                    <div className="space-y-1.5 text-xs">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center justify-center gap-1.5 text-gray-600 hover:text-blue-700 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {member.email}
                                        </a>
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="flex items-center justify-center gap-1.5 text-gray-600 hover:text-blue-700 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {member.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form + Map */}
            <section className="section-padding gradient-blue-subtle">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4">Get In Touch</h2>
                    <p className="section-subtitle text-center">
                        Have questions? Fill out the form and we&apos;ll get back to you promptly.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="purpose"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Purpose *
                                    </label>
                                    <select
                                        id="purpose"
                                        required
                                        value={formData.purpose}
                                        onChange={(e) =>
                                            setFormData({ ...formData, purpose: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900 bg-white"
                                    >
                                        <option value="">Select Purpose</option>
                                        <option value="recruitment">Recruitment Enquiry</option>
                                        <option value="placement">Placement Enquiry</option>
                                        <option value="internship">Internship Enquiry</option>
                                        <option value="collaboration">Industry Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900 resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full btn-primary justify-center py-4 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <svg
                                                className="w-5 h-5 animate-spin"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
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
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {status === "success" && (
                                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {statusMessage}
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {statusMessage}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-blue-100 h-full min-h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.249767812908!2d88.44855231496624!3d22.99105498496898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8952d71094a7f%3A0x868c68a49dc97146!2sKalyani%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1627726543210!5m2!1sen!2sin" 
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "500px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KGEC Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
