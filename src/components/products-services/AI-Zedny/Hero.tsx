import TextType from "@/components/reactBits/TypingText"

const data = [
    {
        title: "1. AI-Powered Course Generation",
        desc: "Ever wondered how Zedny manages to offer such a diverse and relevant course catalog? The answer lies in AI. Our platform leverages AI algorithms to generate courses that are not only up-to-date but also tailored to your unique learning needs. It's like having a personal course curator working tirelessly behind the scenes.",
    },
    {
        title: "2. Assessments That Adapt",
        desc: "Zedny's assessments and questionnaires are not mere static exercises. They're living entities shaped by AI. These assessments adapt to your progress, providing questions that challenge and stimulate your growth. With AI, your learning experience is always dynamic and responsive.",
    },
    {
        title: "3. The Intricate Dance of Analytics",
        desc: "Analytics is the heart of Zedny's intelligence. AI algorithms crunch vast amounts of data to provide you with insights that are nothing short of remarkable. From tracking your learning progress to recommending the next steps in your journey, AI ensures that your learning is not just personalized but also optimized.",
    },
    {
        title: "4. Content Creation Reinvented",
        desc: "Behind every piece of content on Zedny lies the subtle touch of AI. It's not just about delivering information; it's about creating content that speaks to you. AI helps us craft content that's engaging, relevant, and memorable, making your learning experience all the more enriching.",
    },
    {
        title: "The AI Enigma: What's Next?",
        desc: "As AI continues to evolve and weave its magic at Zedny, the possibilities are boundless. What mysteries will AI unravel next? How will it further enhance your learning journey? These questions, shrouded in intrigue, remind us that the AI journey is an ongoing adventure.",
    },
]
const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`Unveiling the AI Mystique:`, `Unveiling the AI Mystique:`]} typingSpeed={100} />
                    </h1>
                    <p className="mb-1 text-xl text-white/60">How Zedny Harnesses Artificial Intelligence to Transform Learning</p>
                    <p className="mb-1 text-lg text-white/90">Behind the scenes at Zedny, a silent revolution is taking place, and it&apos;s all thanks to the power of Artificial Intelligence (AI). In the realm of eLearning, AI is the enigmatic force that propels us forward, shaping the future of education in ways that are both awe-inspiring and mysterious.</p>
                    <h2 className="mb-1 text-lg text-white/90">The AI Behind the Curtain</h2>
                    <p className="mb-1 text-lg text-white/90">AI isn&apos;t just a buzzword at Zedny; it&apos;s a core element woven into the very fabric of our platform. But what exactly does this entail, and how does AI work its magic?</p>
                </div>


                <div className="flex flex-col gap-3 pt-5">
                    <h2 className="text-2xl font-bold pb-4">Zedny: A Multi-Faceted Learning Solution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {
                            data.map((item, idx) => (
                                <div key={idx}
                                    className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden 
                                        p-3 border-b 
                                        hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                                        hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                                        flex flex-col gap-2 bg-black/50
                                        ">
                                    <span className="line-animate"></span>
                                    <span className="line-animate"></span>
                                    <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                                    <p className="text-xl">{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-lg text-white/80">At Zedny, AI isn&apos;t just a tool; it&apos;s an enigma that constantly challenges us to push the boundaries of learning. As you embark on your learning adventure, know that AI is your silent companion, working tirelessly to make your journey not only personalized but also extraordinary.</p>
                    <p className="text-lg text-white/80">So, the next time you delve into a Zedny course or assessment, remember that behind every click and recommendation lies the enigmatic world of AI, shaping your learning experience in ways that are both implicit and intriguing.</p>
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