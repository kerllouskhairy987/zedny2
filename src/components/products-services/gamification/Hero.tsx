import TextType from "@/components/reactBits/TypingText"
import Image from "next/image"

const data = [
    {
        title: "Gamification Unveiled",
        desc: "Imagine turning the engaging elements of games into a powerful learning tool. That's gamification! Zedny leverages game mechanics and principles to make learning an exciting adventure."
    },
    {
        title: "Gamification knows no boundaries",
        desc: "Zedny brings gamification into diverse contexts, from employee training, recruitment, and performance evaluation to enhancing organizational productivity. But that's not all! It extends its magic to realms like physical activity, voter engagement, and customer loyalty programs."
    },
    {
        title: "Gamification's Mission",
        desc: "At its core, gamification aims to motivate users to dive into content that might not be thrilling on its own, like in-depth safety training or compliance drills."
    },
    {
        title: "Leveling Up with Game Mechanics",
        desc: "In Zedny's gamified world, you'll encounter game mechanics that turn learning into a rewarding experience:",
        list: [
            "Goals: Complete tasks and earn rewards like badges and points.",
            "Status: Climb the ranks on leaderboards, inspiring friendly competition.",
            "Community: Collaborate in groups to tackle challenges and achieve objectives.",
            "Education: Gain knowledge through tips, tricks, and quizzes.",
            "Rewards: Accumulate points, badges, or even practical rewards like discounts or gift cards. These incentives fuel motivation and maintain engagement."
        ]
    },
    {
        title: "Unleashing the Power of Gamification",
        desc: "Zedny's gamification taps into both intrinsic and extrinsic motivations. You'll develop essential skills while enjoying rewards, points, and badges."
    },
    {
        title: "Elevate Your Organization",
        desc: "Zedny's gamification offers more than just user engagement. It aligns with your business objectives, fostering a vibrant learning culture and:",
        list: [
            "Identifying and bridging knowledge gaps.",
            "Injecting energy into mundane training programs.",
            "Streamlining training processes for efficiency.",
            "Creating dynamic employee onboarding.",
            "Keeping staff updated on policies, products, and software.",
            "Making product knowledge acquisition enjoyable.",
            "Building a positive employer brand.",
            "Fostering employee connections and teamwork.",
            "Mastering new technologies.",
            "Enhancing compliance policies.",
        ]
    },
    {
        title: "Revolutionize Corporate Training with Zedny",
        desc: "Zedny's gamification supercharges corporate training in three crucial ways:",
        list: [
            "Seamless Onboarding: Bid farewell to dull onboarding materials. Zedny's gamified approach engages employees from day one.",
            "Enhanced Training Outcomes: Engaged learners remember more. Zedny transforms training into an enjoyable experience, facilitating better understanding of roles, behavior expectations, and organizational standards.",
            "Transform Routine Training: Zedny turns dry, routine training into an exciting journey. Say goodbye to boredom and hello to safer, better-informed employees who'll never forget vital information.",
        ]
    },
]

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4 order-2 lg:order-1">
                        <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                            <TextType text={[`Discover the Power of Gamified Learning .. only with Zedny`, `Discover the Power of Gamified Learning .. only with Zedny`]} typingSpeed={100} />
                        </h1>
                        <p className="mb-1 text-xl text-white/60">Unlock the Secrets to Implementing Gamification in Learning and Revolutionize Your Training and Development Programs with Zedny.</p>
                    </div>
                    <div className="relative w-full h-75 order-1 lg:order-2">
                        <Image
                            src={'/gamification.png'}
                            alt="image hero business page"
                            fill
                            className="object-contain animate-bounce hover:animate-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-30">
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