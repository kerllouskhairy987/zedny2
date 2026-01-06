"use client";

import { BookCheck, Lock } from "lucide-react"

const data = [
    {
        title: "Ethics statement",
        desc: "Explore Zedny's ethical framework for AI utilization, which emphasizes responsible use and transparency. Discover how we incorporate ethics into our technology.",
    },
    {
        title: "Robust Security Measures",
        desc: "Understand the measures Zedny takes to secure our AI technology and safeguard your data. Our security protocols are designed to prevent unauthorized access and ensure data integrity.",
    },
    {
        title: "Rigorous Privacy Standards",
        desc: "Review how Zedny respects and protects your personal and professional data, adhering to established industry best practices and privacy standards.",
    },
    {
        title: "Proactive Content Moderation",
        desc: "Learn about Zedny's proactive approach to content moderation, promoting a safe and respectful online learning environment.",
    }
]
const Safety = () => {
    return (
        <section className="container pb-10 md:pb-20">
            <div id="border_animation" className="rounded-xl overflow-hidden shadow-xl shadow-[#dd4292b0] py-10!">
                <div className="flex flex-col items-center justify-center gap-5 mx-auto p-5 max-w-[500] text-center">
                    <Lock data-aos="zoom-in-down" className="w-10 h-10 text-[#2cd4f8]" />
                    <h2 data-aos="fade-right" className="text-2xl font-bold flex-1">Safety at the core of our technology</h2>
                    <p data-aos="fade-left" className="text-white/90 ">Zedny is committed to maintaining high standards of data protection. Our platform prioritizes privacy and security, ensuring that your data is always safeguarded with the latest and most reliable safety measures.</p>
                </div>

                <div className="w-full h-px bg-white my-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {
                        data.map((item, idx) => (
                            <div key={idx} data-aos="fade-right" className="flex gap-3 items-start">
                                <BookCheck className="w-40 h-10 text-2xl text-[#2cd4f8] font-bold" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-white/90">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Safety