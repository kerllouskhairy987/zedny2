

const data = [
    {
        title: "IDENTIFY SKILL GAPS Supercharge Your Team for Success!",
        topDesc: "Imagine your team as superheroes, and skills gap analysis is their secret power-up. Here's how it works:",
        bottomDesc: "So, by using skills gap analysis, you're turning your team into a league of workplace superheroes, always ready to tackle new challenges and lead the way!",
        list: [
            "Be the Superhero Team: To beat the competition, you need to be like superheroes. Skills gap analysis helps you identify where you can become even more super.",
            "Stay Future-Ready: Think of it as leveling up your skills so you can handle anything that comes your way in the future. It's like getting your team ready for whatever adventure lies ahead!"
        ]
    },
    {
        title: "MEASURE SKILLS DATA Unlock the Power of Data with Zedny Skills!",
        topDesc: "Zedny Skills isn't just about guesswork; it's about using data to supercharge your skills strategy. Here's how:",
        bottomDesc: "With Zedny Skills, you'll have the data-powered tools you need to take your skills strategy to the next level and make informed decisions for your organization's success!",
        list: [
            "Data-Driven Insights: Zedny Skills comes with reporting features that provide you with clear insights into your skills strategy. No more guessing; you'll have the data you need.",
            "Track Skill Growth: See how skills are evolving over time. It's like watching your team level up in a video game, but in the real world!",
            "Identify Growth Areas: Spot which skills are growing and where there are gaps. Think of it as a treasure map, showing you where to dig for buried skills treasure!",
            "Know Current Skill Levels: Get a snapshot of your team's current skill levels. It's like having a progress report for your whole team."
        ]
    },
    {
        title: "CONNECT TO BUSINESS STRATEGIES Track the Transformation for Organizational Success!",
        topDesc: "Imagine having a super-powered telescope to monitor the changes happening in your organization. With Zedny, you can:",
        bottomDesc: "With Zedny, you're not just guessing – you're proving how your skills strategies are making your organization even more incredible!",
        list: [
            "Operational Improvements: Keep an eye on how things are getting better in your day-to-day operations. It's like having a magic crystal ball to predict positive changes!",
            "Behavioral Shifts: Notice how people's behaviors change for the better. It's like watching your team members evolve into workplace superheroes!",
            "Financial Impact (ROI): Measure the money you're saving and earning because of your skills strategies. It's like counting all the gold coins you're finding on your skills journey!",
            "Prove the Impact: Use all this data to show how your strategies are making a real difference in your entire organization. It's like holding up a giant trophy to say, 'Look how awesome we've become!'"
        ]
    },
    {
        title: "SUCCESSION PLANNING Assemble Your Dream Team for Every Challenge!",
        topDesc: "Picture this: Your organization is like a superhero squad, always ready to tackle any challenge that comes your way. Here's how Zedny can help you achieve that:",
        bottomDesc: "With Zedny, your organization becomes a dynamic team of problem-solving superheroes, always ready to save the day!",
        list: [
            "Identify Superheroes: With Zedny, you can spot the individuals within your organization who have the exact skills needed to conquer any challenge. It's like finding the perfect superhero for each mission.",
            "Perfect Positioning: Zedny helps you put the right people in the right positions exactly when you need them. It's like having a magical switch that ensures your team is always in the best formation for victory.",
            "Ready for Anything: By using Zedny to match skills to challenges, your organization is always prepared for change. It's like having a secret weapon that guarantees you're one step ahead of anything that comes your way!",
        ]
    },
    {
        title: "LEARNING IN THE FLOW Connect Every Learning Adventure to Skills!",
        topDesc: "Imagine a world where every learning adventure is like a treasure hunt for new skills. With Zedny, that's exactly what you get:",
        bottomDesc: "With Zedny, your learning adventure is always connected to skills, ensuring you're constantly on the path to upskilling and reskilling.",
        list: [
            "Skill-Infused Learning: No matter what learning activity you're doing, Zedny helps you connect it to specific skills. It's like putting skill badges on everything you learn!",
            "Personalized Paths: Zedny creates custom learning paths that match your skills journey. It's like having a personalized roadmap to become a skills champion.",
            "Upskilling Magic: Every interaction with Zedny is a magical step towards becoming even better at what you do. It's like leveling up in a video game, but for your real-life skills!",
        ]
    },
    {
        title: "MOTIVATE EMPLOYEES Foster an Open and Supportive Environment for Growth!",
        topDesc: "Imagine a workplace where everyone is like a big, friendly family, sharing their dreams and plans. Here's how it works with Zedny:",
        bottomDesc: "With Zedny, your workplace becomes a warm and welcoming community where everyone's aspirations are heard and supported, making it a place where dreams come true!",
        list: [
            "Open Conversations: Zedny creates a space where everyone can comfortably talk about their dreams and goals. It's like having a cozy chat with friends.",
            "Understanding Managers: When team members open up, managers get to be like mentors, understanding how to best support their development goals. It's like having a personal coach for your career!",
        ]
    },
]


const Benefits = () => {
    return (
        <section className="section-gap container relative">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-2xl gradient-text-color text-start!">BENEFITS</h2>

                {
                    data.map((item, idx) => (
                        <div data-aos="fade-right" key={idx} className="relative parent-line-animate overflow-hidden border-b p-4 rounded-md flex flex-col gap-3 hover:-translate-y-2 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                            <span className="line-animate"></span>
                            <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                            <p className="text-xl">{item.topDesc}</p>
                            <ul className="text-sm font-bold">
                                {
                                    item.list.map((item, idx) => (
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
                            <p className="text-xl">{item.bottomDesc}</p>
                        </div>
                    ))
                }

                <div data-aos="zoom-in-down" className="flex flex-col gap-3 mt-5">
                    <p className="text-white/90">TALK TO OUR EXPERTS ABOUT SKILLS</p>
                    <div>
                        <button
                            className="
                                group relative px-8 py-3 rounded-md
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                        >
                            Book A Demo
                            <div
                                className=" rounded-full p-1 bg-white/20 group-hover:bg-white/4 transition-all duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="black"
                                />
                            </div>
                        </button>
                    </div>
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
        </section>
    )
}

export default Benefits