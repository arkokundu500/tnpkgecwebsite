export default function StudentsPage() {
    return (
        <div>
            {/* Hero Banner */}
            <section className="gradient-primary py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                        For Students
                    </h1>
                    <p className="text-blue-200 text-lg">
                        Everything you need to prepare for your placement journey.
                    </p>
                </div>
            </section>

            {/* Student Resources */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title mb-12">Student Resources</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Placement Policy */}
                        <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 card-hover text-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 mx-auto mb-6 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-blue-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Placement Policy
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                Read the official guidelines regarding eligibility, registration,
                                and code of conduct for the recruitment drive.
                            </p>
                            <a
                                href="/documents/placement-policy.pdf"
                                className="btn-primary inline-flex"
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
                                Download PDF
                            </a>
                        </div>

                        {/* Standard CV Format */}
                        <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 card-hover text-center">
                            <div className="w-16 h-16 rounded-2xl bg-orange-100 mx-auto mb-6 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Standard CV Format
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                The standardized Curriculum Vitae template approved by the T&amp;P
                                Cell for all upcoming interviews.
                            </p>
                            <a
                                href="/documents/cv-template.docx"
                                className="btn-orange inline-flex"
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
                                Download Template
                            </a>
                        </div>
                    </div>

                    {/* Note to Students */}
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Note to Students
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Ensure your placement registration is complete on the college portal.",
                                "Carry 3 hard copies of your CV and 2 passport size photos to every interview.",
                                "Strict formal attire is mandatory for all placement activities.",
                                "Students must maintain a minimum of 60% aggregate to be eligible for placements.",
                                "Any form of malpractice during the placement process will lead to debarment.",
                            ].map((note, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700 leading-relaxed">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Preparation Tips */}
                    <div className="mt-16">
                        <h2 className="section-title mb-8">Preparation Tips</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Technical Skills",
                                    desc: "Practice DSA, system design, and language-specific concepts regularly on platforms like LeetCode and HackerRank.",
                                    icon: "💻",
                                },
                                {
                                    title: "Soft Skills",
                                    desc: "Work on communication, teamwork, and leadership abilities. Participate in group discussions and mock interviews.",
                                    icon: "🗣️",
                                },
                                {
                                    title: "Aptitude & Reasoning",
                                    desc: "Sharpen quantitative aptitude, logical reasoning, and verbal skills for online assessments.",
                                    icon: "🧠",
                                },
                            ].map((tip) => (
                                <div
                                    key={tip.title}
                                    className="rounded-2xl p-6 bg-white border border-gray-100 card-hover shadow-sm"
                                >
                                    <span className="text-3xl mb-4 block">{tip.icon}</span>
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                                        {tip.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {tip.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
