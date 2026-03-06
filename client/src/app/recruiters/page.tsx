"use client";

import { useState } from "react";

const hiringSteps = [
    {
        step: 1,
        title: "Registration",
        description:
            "Companies register on portal and share JNF (Job Notification Form) with role details, compensation, and eligibility criteria.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
        ),
        color: "from-blue-600 to-blue-800",
    },
    {
        step: 2,
        title: "Pre-Placement Talk",
        description:
            "Interaction with students regarding roles, company culture, and expectations to help candidates make informed decisions.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        color: "from-cyan-600 to-blue-700",
    },
    {
        step: 3,
        title: "Online Assessment",
        description:
            "Technical and Aptitude tests conducted to evaluate fundamental knowledge and problem-solving abilities.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "from-indigo-600 to-blue-700",
    },
    {
        step: 4,
        title: "Technical Interview",
        description:
            "In-depth evaluation of technical skills, project experience, and domain knowledge through one-on-one interviews.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: "from-blue-700 to-indigo-800",
    },
    {
        step: 5,
        title: "HR Interview",
        description:
            "Cultural fit and behavioral assessment to understand the candidate's values, aspirations, and interpersonal skills.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: "from-purple-600 to-blue-700",
    },
    {
        step: 6,
        title: "Final Selection",
        description:
            "Offer letters rolled out to selected candidates. The T&P Cell coordinates the entire onboarding process.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        color: "from-green-600 to-emerald-700",
    },
];

export default function RecruitersPage() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div>
            {/* Hero Banner */}
            <section className="gradient-primary py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                        For Recruiters
                    </h1>
                    <p className="text-blue-200 text-lg">
                        Partner with us to find the best engineering talent for your organization.
                    </p>
                </div>
            </section>

            {/* Hiring Flow */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4">
                        Our Hiring Process
                    </h2>
                    <p className="section-subtitle text-center">
                        A streamlined recruitment process designed for efficiency and transparency.
                    </p>

                    {/* Interactive Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Step Selector */}
                        <div className="space-y-4">
                            {hiringSteps.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 ${activeStep === index
                                            ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg shadow-blue-900/20 scale-[1.02]"
                                            : "bg-gray-50 hover:bg-blue-50 text-gray-700 border border-gray-100"
                                        }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeStep === index
                                                ? "bg-white/20"
                                                : "bg-blue-100 text-blue-700"
                                            }`}
                                    >
                                        <span className="font-bold text-lg">{step.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">{step.title}</h3>
                                        {activeStep === index && (
                                            <p className="text-blue-100 text-sm mt-1 leading-relaxed">
                                                {step.description}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Active step detail */}
                        <div className="hidden lg:block">
                            <div
                                className={`bg-gradient-to-br ${hiringSteps[activeStep].color} rounded-3xl p-12 text-white transition-all duration-500 shadow-xl`}
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                                    {hiringSteps[activeStep].icon}
                                </div>
                                <div className="text-sm font-semibold text-blue-200 mb-2">
                                    Step {hiringSteps[activeStep].step} of 6
                                </div>
                                <h3 className="text-3xl font-extrabold mb-4">
                                    {hiringSteps[activeStep].title}
                                </h3>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    {hiringSteps[activeStep].description}
                                </p>
                                <div className="mt-8 flex gap-2">
                                    {hiringSteps.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep
                                                    ? "bg-white w-8"
                                                    : i < activeStep
                                                        ? "bg-white/60 w-4"
                                                        : "bg-white/20 w-4"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why KGEC */}
            <section className="section-padding gradient-blue-subtle">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="section-title mb-6">Industry-Ready Talent</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        Our curriculum is constantly evolved with industry inputs. Students
                        are trained in latest technologies, soft skills, and aptitude to hit
                        the ground running from Day 1. We ensure that every graduate is
                        equipped with the practical knowledge needed to excel in real-world scenarios.
                    </p>
                    <a
                        href="/documents/brochure.pdf"
                        className="btn-primary inline-flex text-base px-8 py-4 rounded-xl"
                        download
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
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download Brochure
                    </a>
                </div>
            </section>

            {/* Support Facilities & Important Documents */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4">
                        Support Facilities
                    </h2>
                    <p className="section-subtitle text-center">
                        We provide comprehensive infrastructure and documentation support for a smooth recruitment experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            {
                                title: "Dedicated T&P Infrastructure",
                                desc: "Well-equipped seminar halls, video conferencing rooms, and computer labs for assessments.",
                                icon: "🏢",
                            },
                            {
                                title: "Accommodation & Travel",
                                desc: "Assistance with travel and accommodation arrangements for visiting recruitment teams.",
                                icon: "🏨",
                            },
                            {
                                title: "IT Support",
                                desc: "High-speed internet, projectors, and technical support for online/offline assessments.",
                                icon: "💻",
                            },
                            {
                                title: "Coordination Team",
                                desc: "Dedicated student coordinators and faculty for seamless event management.",
                                icon: "👥",
                            },
                        ].map((facility) => (
                            <div
                                key={facility.title}
                                className="rounded-2xl p-6 bg-white border border-gray-100 card-hover shadow-sm flex gap-4"
                            >
                                <span className="text-3xl shrink-0">{facility.icon}</span>
                                <div>
                                    <h3 className="font-bold text-blue-900 mb-2">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Important Documents */}
                    <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
                        Important Documents
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a
                            href="/documents/placement-policy.pdf"
                            className="group rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                            download
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-100 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="font-bold text-blue-900">Placement Policy</p>
                            <p className="text-sm text-gray-500 mt-1">Download PDF</p>
                        </a>
                        <a
                            href="/documents/college-profile.pdf"
                            className="group rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                            download
                        >
                            <div className="w-14 h-14 rounded-xl bg-indigo-100 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <p className="font-bold text-blue-900">College Profile</p>
                            <p className="text-sm text-gray-500 mt-1">Download PDF</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
