"use client";

import TextType from "@/components/reactBits/TypingText"
import { useState } from "react";
import AboutSection from "./AboutSection";
import MissionSection from "./MissionSection";
import WhySection from "./WhySection";

const links = [
    {
        name: "About Zedny",
        key: "about",
    },
    {
        name: "Mission, Vision, and Values",
        key: "mission",
    },
    {
        name: "Why Zedny",
        key: "why",
    },
]
const Hero = () => {
    const [showSection, setShowSection] = useState("about")

    return (
        <main className="section-gap relative z-100">
            <div className="flex flex-col gap-10">
                <div className="container flex flex-col gap-4">
                    <p data-aos="fade-right" className="mb-1 text-2xl text-white">Our Story</p>
                    <p data-aos="fade-right" className="mb-1 text-xl text-white/70">Personalized Learning, Limitless Possibilities</p>
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`Zedny Leads the Way`, `Zedny Leads the Way`]} typingSpeed={100} />
                    </h1>
                </div>

                <div className="mt-10">
                    <ul className="container flex items-center gap-5 text-xl">
                        {
                            links.map((link) => (
                                <li
                                    key={link.key}
                                    className={`border-b-3 cursor-pointer rounded-2xl p-3
                                            ${showSection === link.key ? "border-pink-600 gradient-text-color shadow-lg shadow-[#dd4292b0]" : "border-transparent"}
                                        `}
                                    onClick={() => setShowSection(link.key)}
                                >
                                    {link.name}
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        {
                            showSection === "about"
                                ? <AboutSection />
                                : showSection === "mission"
                                    ? <MissionSection />
                                    : showSection === "why"
                                        ? <WhySection />
                                        : null
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero