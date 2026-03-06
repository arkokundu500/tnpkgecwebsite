"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 parallax-bg"
                style={{
                    backgroundImage: "url('/college.jpg')",
                }}
            />

            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-950/90" />

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-blue-100 text-sm font-medium">
                            Placements 2026 is Going On!
                        </span>
                    </div>
                </div>

                <h1
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    Training & Placement Cell
                    <br />
                    <span className=" text-2xl bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                        Kalyani Government Engineering College
                    </span>
                </h1>

                <p
                    className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    Welcome to the Training &amp; Placement Cell of Kalyani Government
                    Engineering College — connecting talent with opportunity since 1995.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    <Link
                        href="/recruiters"
                        className="btn-primary text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-900/30"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M12 12V4m0 8l-3-3m3 3l3-3" />
                        </svg>
                        Recruit From Us
                    </Link>
                    <Link
                        href="/placements"
                        className="btn-secondary border-white/30 text-white hover:bg-white hover:text-blue-900 text-base px-8 py-4 rounded-xl"
                    >
                        View Placement Stats
                    </Link>
                </div>

                {/* Quick Stats */}
                <div
                    className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                >
                    {[
                        { value: "70%", label: "Placement Rate" },
                        { value: "150+", label: "Companies Visited" },
                        { value: "90 LPA", label: "Highest Package(2025)" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all duration-300"
                        >
                            <p className="text-2xl sm:text-3xl font-extrabold text-white">
                                {stat.value}
                            </p>
                            <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
