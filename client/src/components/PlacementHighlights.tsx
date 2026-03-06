"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const counted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    let start = 0;
                    const step = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div ref={ref} className="text-4xl sm:text-5xl font-extrabold text-white">
            {count}
            {suffix}
        </div>
    );
}

export default function PlacementHighlights() {
    const highlights = [
        { value: 70, suffix: "%", label: "Placement Rate", color: "from-blue-500 to-blue-700" },
        { value: 150, suffix: "+", label: "Recruiting Companies", color: "from-cyan-500 to-blue-600" },
        { value: 90, suffix: " LPA", label: "Highest Package(2025)", color: "from-blue-600 to-indigo-700" },
        { value: 6.5, suffix: " LPA", label: "Average Package", color: "from-indigo-500 to-blue-700" },
    ];

    return (
        <section className="section-padding gradient-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Placement Highlights[2025]
                    </h2>
                    <p className="text-blue-200 text-lg max-w-xl mx-auto">
                        Our consistent placement record speaks volumes about the quality of
                        our graduates.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="text-center p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                        >
                            <AnimatedCounter end={item.value} suffix={item.suffix} />
                            <p className="text-blue-200 mt-3 font-medium text-sm sm:text-base">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
