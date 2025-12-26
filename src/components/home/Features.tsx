import { GetAllProjects } from "@/server/admin/project-list/get/action"
import Image from "next/image"

// const dataFeatures = [
//     {
//         src: "https://zedny.com/assets/About-Progress.webp",
//         alt: "image",
//         title: "Dynamic Cognitive AI-Driven Learning",
//         desc: "Adapts in real-time, ensuring personalized and effective educational experiences."
//     },
//     {
//         src: "https://zedny.com/assets/About-Dashboard.webp",
//         alt: "image",
//         title: "AI-Powered Virtual Assistants",
//         desc: "Provides 24/7 human-like assistance and personalized tutoring through text, audio, and video."
//     },
//     {
//         src: "https://zedny.com/assets/About-contant.webp",
//         alt: "image",
//         title: "Interactive Microlearning Modules",
//         desc: "Facilitate cross-functional skills development and continuous learning with interactive modules."
//     },
//     {
//         src: "https://zedny.com/assets/About-numbers.webp",
//         alt: "image",
//         title: "Industry Compliance Training",
//         desc: "Keep employees up-to-date with targeted skill-based training and compliance tracking."
//     },
// ]
const Features = async () => {
    const dataFeatures = await GetAllProjects()
    return (
        <section className="pt-10 md:pt-20">
            <div className="container">
                <div className="max-w-125 text-center mx-auto flex flex-col items-center justify-center gap-3">
                    <h2 className="text-3xl font-bold"><span className="gradient-text-color">4 Power Features Every User</span> Needs to Experience</h2>
                    <p className="text-lg text-white/60">Optimize learning and career growth with Zedny&apos;s personalized e-learning platform.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
                    {
                        dataFeatures.length === 0
                            ? <p className="text-lg font-semibold gradient-text-color">No Power Features Found</p>
                            : (
                                dataFeatures.map((item, idx) => (
                            <div key={idx}
                                className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden 
                            p-3 border-b 
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                            hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                            flex flex-col gap-2 bg-black/50
                            ">
                                <span className="line-animate"></span>

                                <div className="relative w-full h-50 overflow-hidden rounded-[71%_29%_80%_20%/21%_84%_16%_79%] group-hover:rounded-md duration-300 bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))
                            )
                    }

                </div>
            </div>
        </section>
    )
}

export default Features