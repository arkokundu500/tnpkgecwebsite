"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/placements", label: "Placement Stats" },
    { href: "/students", label: "Students Section" },
    { href: "/recruiters", label: "Recruiters Section" },
    { href: "/alumni", label: "Notable Alumni" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg"
                : "bg-white/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="KGEC Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-extrabold text-blue-900 leading-tight tracking-tight">
                                KGEC
                            </h1>
                            <p className="text-xs font-semibold text-blue-600 leading-tight">
                                Training &amp; Placement Cell
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${pathname === link.href
                                    ? "bg-blue-900 text-white shadow-md"
                                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-blue-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-3 bg-white/95 backdrop-blur-md border-t border-blue-100 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${pathname === link.href
                                ? "bg-blue-900 text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
