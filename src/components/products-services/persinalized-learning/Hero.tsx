import TextType from "@/components/reactBits/TypingText"

const data = [
    {
        title: "Time-Efficiency",
        desc: "Personalized learning streamlines the learning process, reducing the time required for learners to grasp new subjects. Irrelevant or redundant content is omitted based on the learner's experience level, preventing wasted time on unnecessary concepts."
    },
    {
        title: "Heightened Motivation",
        desc: "Learning connected to the learner's job, interests, or hobbies boosts motivation. Particularly when the content offers actionable tips or valuable insights for immediate application."
    },
    {
        title: "Elevated Engagement",
        desc: "Relevance and personalization amplify learner engagement. Learners are more likely to interact with and remember content tailored to their current role, projects, or work area."
    },
    {
        title: "Enhanced Learning Outcomes",
        desc: "Research demonstrates that personalized learning consistently delivers superior learning outcomes. This approach elevates learning by offering relevant, engaging, actionable, and memorable content. The end result is a satisfied learner who excels in their role."
    },
    {
        title: "Improved Knowledge Retention",
        desc: "Content aligned with a learner's prior experiences enhances knowledge retention. Personalized learning paths interconnect puzzle pieces of information, facilitating better recall by linking it to existing knowledge."
    },
    {
        title: "Enhanced Adaptability",
        desc: "Personalized learning cultivates adaptability by tailoring learning experiences to individual needs. Learners develop the flexibility to tackle new challenges and adapt to changing circumstances effectively."
    },
]
const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container">
                <div className="flex flex-col gap-4">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`YOUR JOURNEY, YOUR WAY`, `ZEDNY'S PERSONALIZED LEARNING EXPERIENCE`]} typingSpeed={100} />
                    </h1>
                    <p data-aos="fade-right" className="mb-1 text-xl text-white/60">Onboard, train, and reinforce—in only 10-15 minutes a day—with proven microlearning and AI-powered reinforcement in the flow of work.</p>
                    <p data-aos="fade-right" className="text-xl">Zedny takes personalized learning to the next level by tailoring educational methods and strategies to suit the unique attributes of each individual learner. This approach considers factors such as the learner&apos;s distinct style, background, requirements, and past learning encounters.</p>
                    <p data-aos="fade-right" className="text-lg">Learning, in the world of Zedny, is not confined to a single format or setting. It can occur in a multitude of locations, activities, modalities, and timeframes. Whether it&apos;s a bustling lecture hall with numerous attendees or an intimate one-on-one mentorship program, from interactive online games to intricate technical textbooks, the avenues for learning are diverse. Within the realm of personalized learning, an array of learning techniques and teaching styles coalesce to craft a truly individualized learning experience. Each method and style possesses its unique advantages and disadvantages, catering to the varied preferences and needs of learners. In the Zedny personalized learning approach, the learner&apos;s personal experiences, knowledge, and habits are harmoniously integrated with the chosen learning methods. This fusion results in accelerated learning, enhanced comprehension of new concepts, and an overall improvement in learning performance. With Zedny, learning becomes a highly personalized journey that empowers individuals to reach their full potential.</p>
                </div>

                <div className="flex flex-col gap-3 pt-20">
                    <h2 className="font-semibold text-3xl pb-3">Benefits of Personalized Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            data.map((item, idx) => (
                                <div data-aos="fade-right" key={idx} className="relative parent-line-animate overflow-hidden border-b p-4 rounded-md flex flex-col gap-3 hover:-translate-y-2 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291]
                            shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                                    <span className="line-animate"></span>
                                    <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                                    <p className="text-xl">{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p className="font-semibold text-xl mt-10">Tailored Learning for Every Unique Path – Only with Zedny!</p>
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