"use client";

import Image from "next/image";
import styles from "./RecruitersMarquee.module.css";

const defaultRecruiters = [
    "TCS", "Wipro", "Cognizant", "larsenandtoubro", "IBM","Haldia", "mndastur", "Siemens", "DCPL","Adani","prismforce","TDK","ARC"
];

function LogoCard({ name }: { name: string }) {
    return (
        <div className={styles.logoCard}>
            <div className={styles.logoInner}>
                <Image
                    src={`/recruiters/${name.toLowerCase().replace(/[&\s]/g, "")}.png`}
                    alt={name}
                    width={120}
                    height={50}
                    className={styles.logoImg}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector("span")) {
                            const span = document.createElement("span");
                            span.className = styles.logoText;
                            span.textContent = name;
                            parent.appendChild(span);
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default function RecruitersMarquee() {
    const row2 = [...defaultRecruiters].reverse();

    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Top Recruiters</h2>
                    <p className="section-subtitle">
                        Leading companies across industries trust KGEC for quality talent.
                    </p>
                </div>

                {/* Row 1 — scrolls left */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {defaultRecruiters.map((name, i) => (
                            <LogoCard key={`a-${i}`} name={name} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {defaultRecruiters.map((name, i) => (
                            <LogoCard key={`b-${i}`} name={name} />
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className={styles.marqueeWrapper} style={{ marginTop: "1.5rem" }}>
                    <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
                        {row2.map((name, i) => (
                            <LogoCard key={`c-${i}`} name={name} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {row2.map((name, i) => (
                            <LogoCard key={`d-${i}`} name={name} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
