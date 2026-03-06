import Link from "next/link";

export default function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Ready to Hire{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                        Top Talent?
                    </span>
                </h2>
                <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Partner with KGEC's Training &amp; Placement Cell and gain access to a
                    pool of highly skilled, industry-ready engineers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="btn-primary bg-white text-blue-900 hover:bg-blue-50 text-base px-8 py-4 rounded-xl font-bold shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                    </Link>
                    <Link
                        href="/recruiters"
                        className="btn-secondary border-white/30 text-white hover:bg-white hover:text-blue-900 text-base px-8 py-4 rounded-xl"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
