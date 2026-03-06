"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"coding" | "research">("coding");

  const programs = [
    {
      level: "B.Tech",
      departments: [
        "Computer Science & Engineering",
        "Information Technology",
        "Electronics & Communication Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
      ],
      color: "from-blue-600 to-blue-800",
    },
    {
      level: "M.Tech",
      departments: [
        "Computer Science & Engineering",
        "Information Technology",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Electronics & Communication Engineering",
      ],
      color: "from-indigo-600 to-blue-700",
    },
    {
      level: "M.C.A",
      departments: ["Master of Computer Applications"],
      color: "from-cyan-600 to-blue-700",
    },
  ];

  const labs = [
    {
      name: "CSE & IT Lab",
      description:
        "The Computer Science and IT departments feature modern computer labs with high-speed internet, servers, and programming tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "ECE Lab",
      description:
        "Electronics & Communication Engineering departments have advanced labs like Digital Electronics, Communication Systems, Power Systems, and Control Systems, complete with oscilloscopes, trainer kits, and simulation software such as MATLAB.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      name: "EE Lab",
      description:
        "The Electrical Engineering Lab at KGEC offers hands-on learning with modern setups for power systems, circuits, and control experiments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: "ME Lab",
      description:
        "The Mechanical Engineering department provides access to labs in thermal engineering, fluid mechanics, and CAD/CAM, helping students gain real-world experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "Chemistry Lab",
      description:
        "The chemistry lab facilitates hands-on learning in organic, inorganic, analytical, and physical chemistry experiments by providing state-of-the-art equipment and safety precautions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      name: "Physics Lab",
      description:
        "The physics lab provides cutting-edge apparatus for experiments, permitting practical learning in electronics, optics, mechanics, and contemporary physics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  const events = [
    {
      name: "Techtix",
      logo: "/events/techtix.png",
      description:
        "Techtix is the flagship tech fest of KGEC, uniting tech enthusiasts from across the state. The event features coding marathons, hackathons, robotics contests, and tech quizzes. With expert talks, hands-on workshops, and networking opportunities, Techtix fuels innovation, creativity, and skill development among students passionate about technology and real-world problem-solving.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-200",
    },
    {
      name: "Exotica",
      logo: "/events/exotica.png",
      description:
        "Exotica, the annual cultural fest of KGEC, showcases college and Bollywood bands, creating an exhilarating atmosphere through diverse music and performances. The night climaxes with energetic DJ sets, turning the venue into a vibrant dance floor. Blending creativity and entertainment, Exotica captures the youthful spirit and cultural diversity of every enthusiastic participant.",
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-200",
    },
    {
      name: "E-Summit",
      logo: "/events/esummit.png",
      description:
        "E-Summit, hosted by E-Cell KGEC, is a premier entrepreneurship event featuring multiple business related events and competitions like Chase the Case, Biz Quiz, Insignation, Cipher, Stock Wars, and Pitchathon. It also includes talks from industry experts on business ideas and guidance, fostering innovation, networking, and entrepreneurial spirit in a dynamic environment of enthusiastic entrepreneurs.",
      gradient: "from-orange-500/10 to-yellow-500/10",
      border: "border-orange-200",
    },
    {
      name: "Binary",
      logo: "/events/binary.png",
      description:
        "Binary is the annual hackathon of Kalyani Government Engineering College. It aims to be a stage for college students to showcase their creativity and resolve societal issues using technology. We hope to employ the current generation of innovators to think out of the box and bring transformative solutions to the forefront.",
      gradient: "from-green-500/10 to-blue-500/10",
      border: "border-green-200",
    },
    {
      name: "Al-Hambra",
      logo: "/events/sportix.png",
      description:
        "Al-Hambra is the vibrant epicenter of annual sports events at KGEC, hosting competitions in cricket, football, badminton, and more. Its impressive architecture blends cultural heritage with sportsmanship. Enthusiasts and spectators gather to witness thrilling matches, making Al-Hambra a unique venue where history and modern sports harmoniously unite.",
      gradient: "from-red-500/10 to-orange-500/10",
      border: "border-red-200",
    },
  ];

  const codingAchievements = [
    {
      title: "Smart India Hackathon (SIH)",
      details: [
        '3 teams selected as finalists for SIH-2023: "Sleepless Knights", "Braincells", and "Taksha Shakti".',
        '"Braincells" from KGEC secured 1st position in SIH-2022 at JK Lakshmipat University, Jaipur.',
        '"Jobless Coders" from KGEC secured 1st position in SIH-2019 at Noida Institute of Engineering and Technology, Greater Noida.',
      ],
    },
    {
      title: "TCS Codevita",
      details: [
        "AIR-44 and 6 more among the Top 200 in 2024.",
        "AIR-10 in 2022.",
        "AIR-1 (Round I) and AIR-11 (Final Round) in 2016.",
      ],
    },
    {
      title: "ACM ICPC",
      details: [
        "1 team selected for Regionals in 2024.",
        "2 teams qualified for Regionals, 1 team for India finals in 2016.",
        "Secured AIR-37 at India Finals in 2016.",
      ],
    },
    {
      title: "Google Code Jam 2017",
      details: ["7 students qualified."],
    },
    {
      title: "Facebook Hacker Cup 2017",
      details: ["3 students qualified."],
    },
    {
      title: "MLH Diversion '25",
      details: ['Team "Ready Player Two" secured the first prize.'],
    },
    {
      title: "Status Code 1",
      details: ['Team "Bug Slayers" secured the first runners-up prize.'],
    },
    {
      title: "Hacker House Bengaluru",
      details: ["Our team secured the first prize."],
    },
    {
      title: "EthIndia Hackathon 2024",
      details: [
        'Team "Athena Wallet" secured Coinbase Developer Platform pool prize.',
      ],
    },
  ];

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
            About Us
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            Learn more about Kalyani Government Engineering College and its
            commitment to excellence.
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-xl shrink-0">
                🏛️
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  Kalyani Government Engineering College
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    Est. 1995
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    AICTE Approved
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                    MAKAUT Affiliated
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Established in 1995 by the Government of West Bengal, KGEC is a
              premier technical institution located in Kalyani, Nadia, offering
              Undergraduate (B.Tech) courses in five disciplines, Postgraduate
              (M.Tech and MCA) programs in six disciplines, along with
              state-of-the-art infrastructure and over 25 years of placement
              history.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding gradient-blue-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Our Vision &amp; Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                👁️
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The vision of Kalyani Government Engineering College is to
                produce high quality, globally competitive technical manpower and
                to become a centre of excellence in a few select areas of
                high-end technologies. It also envisages to act as an incubation
                cell for entrepreneurship activities in the region in association
                with the industry houses of the locality and outside. Keeping
                pace with the global through continuing technological
                developments education programmes is its another cherished
                ambition.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                🎯
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The mission of Kalyani Government Engineering College is to
                impart quality technical education to the students at the
                undergraduate and at the postgraduate levels of engineering with
                the aim to make them complete human beings possessing depth of
                knowledge not only in their own discipline but also in the
                kindred areas, which shall necessarily be accompanied by a wide
                mental horizon making them capable of sifting the grain from the
                chaff, the honesty from the chicanery, the truth from the
                untruth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Programs Offered</h2>
          <p className="section-subtitle text-center">
            Comprehensive engineering programs designed to build future-ready
            professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.level}
                className="card-hover rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${program.color} px-6 py-4`}>
                  <h3 className="text-xl font-bold text-white">
                    {program.level}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {program.departments.map((dept) => (
                      <li
                        key={dept}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-sm">{dept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Facilities */}
      <section className="section-padding gradient-blue-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Lab Facilities</h2>
          <p className="section-subtitle text-center">
            State-of-the-art laboratories supporting hands-on learning across all departments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <div
                key={lab.name}
                className={`bg-white rounded-2xl p-8 shadow-sm card-hover border border-blue-100 relative overflow-hidden ${index % 2 === 1 ? "md:translate-y-6" : ""
                  }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800" />
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-700 mb-5">
                  {lab.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {lab.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {lab.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Annual Events</h2>
          <p className="section-subtitle text-center">
            Beyond academics, KGEC offers a vibrant campus life with flagship
            events that inspire innovation, creativity, and sportsmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.name}
                className={`rounded-2xl p-8 bg-gradient-to-br ${event.gradient} border ${event.border} card-hover`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                    <Image
                      src={event.logo}
                      alt={event.name}
                      width={48}
                      height={48}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector("span")) {
                          const span = document.createElement("span");
                          span.className =
                            "text-blue-900 font-extrabold text-lg";
                          span.textContent = event.name[0];
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {event.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding gradient-blue-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Achievements</h2>
          <p className="section-subtitle text-center">
            Our students consistently excel in national and international
            competitions, research, and higher studies.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm border border-blue-100">
              <button
                onClick={() => setActiveTab("coding")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === "coding"
                    ? "gradient-primary text-white shadow-md"
                    : "text-gray-600 hover:text-blue-900 hover:bg-blue-50"
                  }`}
              >
                🏆 Competitive Coding &amp; Hackathons
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === "research"
                    ? "gradient-primary text-white shadow-md"
                    : "text-gray-600 hover:text-blue-900 hover:bg-blue-50"
                  }`}
              >
                🔬 Research &amp; Higher Education
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "coding" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingAchievements.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-blue-100"
                >
                  <h4 className="text-base font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 shrink-0" />
                    {item.title}
                  </h4>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1 shrink-0">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "research" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-blue-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl shadow-md">
                    🔬
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">
                    Research Internships
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our students have completed research internships at some of
                  India&apos;s most reputed institutes:
                </p>
                <ul className="space-y-2">
                  {[
                    "Bhabha Atomic Research Centre (BARC)",
                    "Indian Statistical Institute (ISI), Kolkata",
                    "Central Drug Research Institute (CSIR-CDRI)",
                    "Information Technology Research Academy (ITRA)",
                  ].map((inst) => (
                    <li
                      key={inst}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      {inst}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-blue-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white text-xl shadow-md">
                    🎓
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">
                    Higher Education
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Students from the institute are also pursuing postgraduate
                  degrees from renowned international universities, including{" "}
                  <strong>
                    Rochester Institute of Technology (RIT), USA
                  </strong>
                  , demonstrating the calibre and global readiness of KGEC
                  graduates.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
