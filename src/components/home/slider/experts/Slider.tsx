"use client";

import Image from "next/image";
import "./slider.css";

const data = [
    {
        name: "Sherif Salah",
        title: "CEO",
        desc: "The level of details and dedication from Zedny and its Customer Success Manager for our success and development is exemplary engaging all of the employees in an unprecedented way.",
        url: "https://zedny.com/assets/home/DrOetker-Logo.svg"
    },
    {
        name: "Ahmed Madkour",
        title: "HR Director",
        desc: "Zedny is raising the bar and in all my career and experience with elearning, I have never seen such content quality from any provider whether local or international.",
        url: "https://zedny.com/assets/home/EFG_A_Logo-copy.svg"
    },
    {
        name: "Rania Abdullah",
        title: "CEO",
        desc: "The comprehensive e-learning solutions provided by Zedny have exceeded our expectations, enhancing our team's productivity and knowledge with exceptional precision.",
        url: "https://zedny.com/assets/home/Quantum.svg"
    },
    {
        name: "Yasser Sery",
        title: "Chairman",
        desc: "We have found the right partner to tackle all the needed demand with a complete solution representing great value.",
        url: "https://zedny.com/assets/home/OGS.svg"
    },
    {
        name: "Karim Zein",
        title: "CEO",
        desc: "We were able to enhance our teams’ capabilities through the simple, comprehensive and exciting training content provided by Zedny. Great investment in your human capital that pays off tremendously",
        url: "https://zedny.com/assets/home/global-secure-technologies-homepage-logo.svg"
    },
    {
        name: "Jacquline Mourad",
        title: "CEO",
        desc: "Partnering with Zedny has been a game-changer. Their tailored learning tracks and detailed analytics help us nurture talent effectively across all levels.",
        url: "https://zedny.com/assets/home/TV-Logo-Color-NoTag.svg"
    },
    {
        name: "Yasser Sery",
        title: "Chairman",
        desc: "We have found the right partner to tackle all the needed demand with a complete solution representing great value.",
        url: "https://zedny.com/assets/home/OGS.svg"
    },
]

interface IData {
    className?: string
}
export function VerticalInfiniteSliderToTop({ className }: IData) {
    return (
        <div className={`vertical-slider h-175 md:h-145 w-125 ${className}`}>
            <div className="slider-track-to-top">
                {
                    data.map((item, idx) => (
                        <div key={idx} className="parent-line-animate relative overflow-hidden flex flex-col gap-2 hover:-translate-y-2 rounded-md p-5 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                            <span className="line-animate"></span>
                            <div className="w-20 h-10 overflow-hidden relative">
                                <Image src={item.url} alt={item.name} fill className="object-contain" />
                            </div>
                            <p className="text-white/70 line-clamp-4" title={item.desc}>{item.desc}</p>
                            <div className="flex gap-3 items-start">
                                <span className="bg-[#dd4292]/60 rounded-full p-3 w-12 h-12 text-black flex justify-center items-center font-bold text-xl">
                                    {item.name[0]}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold line-clamp-1 text-shadow-xs text-shadow-[#dd4292]">{item.name}</h3>
                                    <p className="text-sm text-white/70 line-clamp-1">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    data.map((item, idx) => (
                        <div key={idx} className="relative parent-line-animate overflow-hidden flex flex-col gap-5 hover:-translate-y-2 rounded-md p-5 duration-300 shadow-lg shadow-pink-500/10 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291]">
                            <span className="line-animate"></span>
                            <div className="w-20 h-10 overflow-hidden relative">
                                <Image src={item.url} alt={item.name} fill className="object-contain" />
                            </div>
                            <p className="text-white/70 line-clamp-4" title={item.desc}>{item.desc}</p>
                            <div className="flex gap-3 items-start">
                                <span className="bg-[#dd4292]/60 rounded-full p-3 w-12 h-12 text-black flex justify-center items-center font-bold text-xl">
                                    {item.name[0]}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold line-clamp-1 text-shadow-xs text-shadow-[#dd4292]">{item.name}</h3>
                                    <p className="text-sm text-white/70 line-clamp-1">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export function VerticalInfiniteSliderToBottom({ className }: IData) {
    return (
        <div className={`vertical-slider h-175 md:h-145 w-125 ${className}`}>
            <div className="slider-track-to-bottom">
                {
                    data.map((item, idx) => (
                        <div key={idx} className="relative parent-line-animate overflow-hidden flex flex-col gap-5 hover:-translate-y-2 rounded-md p-5 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                            <span className="line-animate"></span>
                            <div className="w-20 h-10 overflow-hidden relative">
                                <Image src={item.url} alt={item.name} fill className="object-contain" />
                            </div>
                            <p className="text-white/70 line-clamp-4" title={item.desc}>{item.desc}</p>
                            <div className="flex gap-3 items-start">
                                <span className="bg-[#dd4292]/60 rounded-full p-3 w-12 h-12 text-black flex justify-center items-center font-bold text-xl">
                                    {item.name[0]}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold line-clamp-1 text-shadow-xs text-shadow-[#dd4292]">{item.name}</h3>
                                    <p className="text-sm text-white/70 line-clamp-1">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    data.map((item, idx) => (
                        <div key={idx} className="relative parent-line-animate overflow-hidden flex flex-col gap-5 hover:-translate-y-2 rounded-md p-5 duration-300 shadow-lg shadow-pink-500/10 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291]">
                            <span className="line-animate"></span>
                            <div className="w-20 h-10 overflow-hidden relative">
                                <Image src={item.url} alt={item.name} fill className="object-contain" />
                            </div>
                            <p className="text-white/70 line-clamp-4" title={item.desc}>{item.desc}</p>
                            <div className="flex gap-3 items-start">
                                <span className="bg-[#dd4292]/60 rounded-full p-3 w-12 h-12 text-black flex justify-center items-center font-bold text-xl">
                                    {item.name[0]}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold line-clamp-1 text-shadow-xs text-shadow-[#dd4292]">{item.name}</h3>
                                    <p className="text-sm text-white/70 line-clamp-1">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

