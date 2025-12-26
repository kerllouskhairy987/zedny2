import TextType from "@/components/reactBits/TypingText"
import Image from "next/image"

const data = [
    {
        title: "1. Learning Management System (LMS)",
        desc: "At its core, Zedny operates as an LMS, offering a centralized platform for managing, delivering, and tracking learning content and experiences. Here's how Zedny's LMS enhances learning experiences:",
        list: [
            "Personalized Learning Paths: Zedny's LMS tailors learning journeys to individual needs, preferences, and progress, ensuring that each learner's experience is engaging and efficient.",
            "Microlearning and Gamification: Zedny employs bite-sized lessons and gamified elements to make learning both enjoyable and memorable, keeping learners motivated and involved.",
            "Progress Tracking: Learners can easily monitor their progress, track completed courses, and receive feedback, fostering a sense of achievement.",
        ]
    },
    {
        title: "2. Learning Record Store (LRS)",
        desc: "Zedny's incorporation of an LRS elevates the learning experience by seamlessly capturing, storing, and analyzing learner data. Here's how Zedny's LRS benefits learners:",
        list: [
            "Individual Progress Tracking: Users can view their learning history, access certificates, and see how their skills have evolved over time, empowering them to take charge of their development.",
            "Personalized Recommendations: The LRS leverages data to recommend relevant courses and materials, ensuring a tailored learning experience.",
        ]
    },
    {
        title: "3. Learning Experience Platform (LXP)",
        desc: "An LXP takes learning beyond the traditional by focusing on enhancing the overall learning journey. Zedny's LXP capabilities transform learning into an enjoyable and enriching experience:",
        list: [
            "Content Discovery: Learners can explore a wide range of learning materials, including courses, articles, videos, and more, fostering curiosity and self-driven learning.",
            "Social Learning: Zedny's LXP encourages collaboration, allowing learners to connect, share insights, and learn from peers and mentors.",
            "User-Generated Content: Users can contribute to the platform by sharing their expertise, creating a vibrant and interactive learning community.",
        ]
    },
]

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4 order-2 lg:order-1">
                        <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                            <TextType text={[`Elevating Learning Management`, `Elevating Learning Management`]} typingSpeed={100} />
                        </h1>
                        <p className="mb-1 text-xl text-white/60">How Zedny&apos;s LMS, LRS, and LXP Revolutionize Your Experience</p>
                        <p className="mb-1 text-lg text-white/90">In today&apos;s ever-evolving landscape of education and professional development, an effective Learning Management System (LMS) is pivotal. However, Zedny goes above and beyond the traditional LMS by integrating Learning Record Store (LRS) and Learning Experience Platform (LXP) functionalities, creating a comprehensive ecosystem that enriches the learning experience.</p>
                    </div>
                    <div className="relative w-full h-75 order-1 lg:order-2">
                        <Image
                            src={'https://zedny.com/assets/images/miscallenousPages/products-services/IMAGE.svg'}
                            alt="image hero business page"
                            fill
                            className="object-contain animate-bounce hover:animate-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-5">
                    <h2 className="text-2xl font-bold pb-4">Zedny: A Multi-Faceted Learning Solution</h2>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className="relative parent-line-animate overflow-hidden border-b p-4 rounded-md flex flex-col gap-3 hover:-translate-y-2 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                                <span className="line-animate"></span>
                                <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                                <p className="text-xl">{item.desc}</p>
                                <ul className="text-sm font-bold">
                                    {
                                        item.list && item.list.map((item, idx) => (
                                            <li key={idx} className="
                                                    text-lg text-white/80
                                                    relative pl-5
                                                    before:content-['']
                                                    before:absolute
                                                    before:left-0 before:top-2
                                                    before:w-3 before:h-3
                                                    before:bg-linear-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:animate-pulse
                                                    before:rounded-full
                                                    block
                                                ">
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <p className="font-semibold text-lg text-white/80">Zedny provides a centralized and efficient way to manage and measure learning, helping to improve training outcomes and stay compliant with industry regulations. Our LRS is uniquely built and managed in-house by our data experts, ensuring you have everything you need for learning analytics without adding any extra systems.</p>
            </div>


            <div className="
                w-full h-175 md:w-150 md:h-150
                rounded-[21%_79%_57%_43%/19%_74%_26%_81%]
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                -z-10
                bg-linear-to-r from-pink-200/20 to-purple-500/20
                blur-3xl
            " />
        </main>
    )
}

export default Hero