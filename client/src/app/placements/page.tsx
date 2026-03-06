"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";

const packageTrends = [
    { year: "2022-23", highest: 47, average: 5.7 },
    { year: "2023-24", highest: 86, average: 7.0 },
    { year: "2024-25", highest: 90, average: 6.5 },
];

const placementRate = [
    { year: "2020-21", rate: 75, placed: 197 },
    { year: "2021-22", rate: 82, placed: 255 },
    { year: "2022-23", rate: 79, placed: 215 },
    { year: "2023-24", rate: 73, placed: 195 },
    { year: "2024-25", rate: 65, placed: 165 },
];

const batchData = [
    {
        batch: "2025–2026",
        highlight: "100+ Placements achieved and still counting...",
        color: "from-blue-600 to-blue-800",
        content: (
            <>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <strong>Offers achieved:</strong> TCS - 40+, Cognizant - 5, Haldia Petrochemicals - 4, DCPL - 4, M.N Dastur - 3+, Kross Limited - 2 and more.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Students from the 2025–2026 batch have demonstrated outstanding
                    performance, securing prestigious internship opportunities at leading
                    national and multinational organizations:
                </p>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Google",
                        "Siemens",
                        "Heizen",
                        "Fenrir Security Pvt. Ltd.",
                        "Imagined",
                        "C&S Electric Ltd.",
                        "MindWebs Ventures",
                    ].map((c) => (
                        <span
                            key={c}
                            className="px-3 py-1.5 bg-blue-50 text-blue-800 text-sm font-semibold rounded-lg border border-blue-200"
                        >
                            {c}
                        </span>
                    ))}
                    <span className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg border border-gray-200">
                        and others
                    </span>
                </div>
            </>
        ),
    },
    {
        batch: "2024–2025",
        highlight: "165 Students Placed",
        color: "from-indigo-600 to-blue-700",
        content: (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <p className="text-2xl font-extrabold text-yellow-700">₹90 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">
                            Highest (Avalanche - Int&apos;l)
                        </p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹52 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Microsoft</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹48 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Amazon</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
                        <p className="text-2xl font-extrabold text-green-700">₹6.5 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Average Package</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <strong>Other top offers:</strong> Alchemyst AI (₹18 LPA), TagMango
                    (₹12 LPA), and more.
                </p>
                
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                    <h5 className="font-bold text-indigo-900 text-sm mb-2">
                        GATE 2025 Ranks
                    </h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                            → <strong>AIR 5</strong> — ME (Satyaki Dutta)
                        </li>
                        <li>
                            → <strong>AIR 123</strong> — CSE (Santanu Panda)
                        </li>
                        <li>
                            → <strong>AIR 450</strong> — EE &amp; <strong>AIR 76</strong> — IN
                            (Avijit Garai)
                        </li>
                        <li>
                            → <strong>AIR 475</strong> — CSE (Riddhankur Sarkar)
                        </li>
                        <li>
                            → <strong>AIR 528</strong> — ECE (Swarnadip Chatterjee)
                        </li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2">
                        <strong>CAT:</strong> Gaurav Dasgupta achieved a remarkable{" "}
                        <strong>99.71 percentile</strong>
                    </p>
                </div>
            </>
        ),
    },
    {
        batch: "2023–2024",
        highlight: "195 Students Placed",
        color: "from-cyan-600 to-blue-700",
        content: (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <p className="text-2xl font-extrabold text-yellow-700">₹86 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">
                            Highest (JP Morgan - Int&apos;l)
                        </p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹52 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Microsoft</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹48 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Amazon</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
                        <p className="text-2xl font-extrabold text-green-700">₹7 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Average Package</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <strong>Other top offers:</strong> ServiceNow (₹43.2 LPA), Groww (₹22
                    LPA), and more.
                </p>
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                    <h5 className="font-bold text-indigo-900 text-sm mb-2">
                        Higher Studies Achievements
                    </h5>
                    <p className="text-sm text-gray-700">
                        <strong>GATE:</strong> AIR 7, AIR 113, AIR 189, AIR 360, AIR 557 and
                        others.
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>CAT:</strong> 99.59 percentile
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>GRE:</strong> 317 among other outstanding scores
                    </p>
                </div>
            </>
        ),
    },
    {
        batch: "2022–2023",
        highlight: "215 Students Placed",
        color: "from-teal-600 to-blue-700",
        content: (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <p className="text-2xl font-extrabold text-yellow-700">₹47 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Highest (ShareChat)</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹26 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">Google</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-2xl font-extrabold text-blue-700">₹21 LPA</p>
                        <p className="text-xs text-gray-600 mt-1">BNY Mellon</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
                        <p className="text-2xl font-extrabold text-green-700">
                            ₹5.7 LPA
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Average Package</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <strong>Other top offers:</strong> Capillary Tech (₹16 LPA), Urban
                    Ladder (₹12 LPA)
                </p>
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                    <h5 className="font-bold text-indigo-900 text-sm mb-2">
                        Higher Studies Achievements
                    </h5>
                    <p className="text-sm text-gray-700">
                        <strong>GATE:</strong> AIR 64, AIR 271, AIR 403, AIR 405 and others.
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>CAT:</strong> Exceptional scores up to 99.96 percentile.
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>GRE:</strong> Scores recorded up to 330.
                    </p>
                </div>
            </>
        ),
    },
];

const gateAchievements = [
    {
        year: "GATE 2025",
        entries: [
            { rank: "AIR 5", name: "Satyaki Dutta", branch: "ME" },
            { rank: "AIR 76", name: "Avijit Garai", branch: "IN" },
            { rank: "AIR 123", name: "Santanu Panda", branch: "CSE" },
            { rank: "AIR 450", name: "Avijit Garai", branch: "EE" },
            { rank: "AIR 475", name: "Riddhankur Sarkar", branch: "CSE" },
            { rank: "AIR 528", name: "Swarnadip Chatterjee", branch: "ECE" },
        ],
    },
    {
        year: "GATE 2024",
        entries: [
            { rank: "AIR 7", name: "—", branch: "—" },
            { rank: "AIR 113", name: "—", branch: "—" },
            { rank: "AIR 189", name: "—", branch: "—" },
            { rank: "AIR 360", name: "—", branch: "—" },
            { rank: "AIR 557", name: "—", branch: "—" },
        ],
    },
    {
        year: "GATE 2023",
        entries: [
            { rank: "AIR 64", name: "—", branch: "—" },
            { rank: "AIR 271", name: "—", branch: "—" },
            { rank: "AIR 403", name: "—", branch: "—" },
            { rank: "AIR 405", name: "—", branch: "—" },
        ],
    },
];

export default function PlacementsPage() {
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
                        Placement Statistics
                    </h1>
                    <p className="text-blue-200 text-lg leading-relaxed">
                        A track record of excellence in campus placements and higher
                        education outcomes.
                    </p>
                </div>
            </section>

            {/* Key Stats */}
            <section className="section-padding bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                value: "70%",
                                label: "Overall Placement Rate",
                                color: "from-blue-600 to-blue-800",
                                icon: "📊",
                            },
                            {
                                value: "₹90 LPA",
                                label: "Highest Package (2024-25)",
                                color: "from-yellow-500 to-orange-600",
                                icon: "💰",
                            },
                            {
                                value: "580+",
                                label: "Total Offers (Last 3 Years)",
                                color: "from-green-500 to-green-700",
                                icon: "🎯",
                            },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="relative rounded-2xl overflow-hidden card-hover shadow-sm"
                            >
                                <div
                                    className={`bg-gradient-to-br ${stat.color} p-8 text-center text-white`}
                                >
                                    <span className="text-4xl block mb-3">{stat.icon}</span>
                                    <p className="text-4xl font-extrabold mb-2">{stat.value}</p>
                                    <p className="text-sm text-white/80">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts */}
                    <h2 className="section-title text-center mb-4">Placement Trends</h2>
                    <p className="section-subtitle text-center">
                        Visualizing our growth over the years.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Package Trends */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-6">
                                Package Trends (LPA)
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={packageTrends}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="highest"
                                        name="Highest (LPA)"
                                        fill="#1e3a8a"
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Bar
                                        dataKey="average"
                                        name="Average (LPA)"
                                        fill="#3b82f6"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Placement Rate */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-6">
                                Placement Rate Progression (%)
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={placementRate}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis yAxisId="left" domain={[75, 100]} />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        yAxisId="left"
                                        type="monotone"
                                        dataKey="rate"
                                        stroke="#1e3a8a"
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: "#1e3a8a" }}
                                        name="Placement Rate (%)"
                                    />
                                    <Line
                                        yAxisId="right"
                                        type="monotone"
                                        dataKey="placed"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: "#10b981" }}
                                        name="No. of Students Placed"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Batch-Wise Achievements */}
            <section className="section-padding gradient-blue-subtle">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4">
                        Recent Batch Achievements
                    </h2>
                    <p className="section-subtitle text-center">
                        Detailed placement and higher studies outcomes for recent batches.
                    </p>

                    <div className="space-y-8">
                        {batchData.map((batch) => (
                            <div
                                key={batch.batch}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-blue-100"
                            >
                                <div
                                    className={`bg-gradient-to-r ${batch.color} px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2`}
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        {batch.batch} Batch
                                    </h3>
                                    <span className="px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                                        {batch.highlight}
                                    </span>
                                </div>
                                <div className="p-8">{batch.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GATE Achievements Hero */}
            <section className="gradient-primary py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            🎓 GATE Achievements
                        </h2>
                        <p className="text-blue-200 text-lg">
                            Our students consistently secure top All India Ranks in GATE.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {gateAchievements.map((yearGroup) => (
                            <div
                                key={yearGroup.year}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                            >
                                <h3 className="text-xl font-bold text-white mb-5 text-center">
                                    {yearGroup.year}
                                </h3>
                                <div className="space-y-3">
                                    {yearGroup.entries.map((entry, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
                                        >
                                            <div>
                                                <span className="text-white font-bold text-sm">
                                                    {entry.rank}
                                                </span>
                                                {entry.name !== "—" && (
                                                    <span className="text-blue-200 text-xs ml-2">
                                                        ({entry.name})
                                                    </span>
                                                )}
                                            </div>
                                            {entry.branch !== "—" && (
                                                <span className="px-2 py-0.5 bg-white/20 text-white text-xs font-semibold rounded-full">
                                                    {entry.branch}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CAT & GRE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                            <h4 className="text-lg font-bold text-white mb-2">
                                CAT Highlights
                            </h4>
                            <p className="text-3xl font-extrabold text-yellow-300 mb-1">
                                99.96 %ile
                            </p>
                            <p className="text-blue-200 text-sm">
                                Best recorded across batches
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                            <h4 className="text-lg font-bold text-white mb-2">
                                GRE Highlights
                            </h4>
                            <p className="text-3xl font-extrabold text-yellow-300 mb-1">
                                330
                            </p>
                            <p className="text-blue-200 text-sm">
                                Highest score recorded
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
