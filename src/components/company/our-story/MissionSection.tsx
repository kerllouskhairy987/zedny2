
const data1 = [
    {
        title: "Our Mission",
        desc: "Empowering people to realize their true potential"
    },
    {
        title: "Our Vision",
        desc: "Revolutionizing, personalizing and gamifying the learning experience for everyone giving them dignity, hope, and opportunities."
    },
]

const data2 = [
    {
        title: "Innovation",
        list: [
            "We uncover new ways of doing things or the re-arranging of the old in a new way.",
            "We stay ahead of the curve with ideas and technologies delighting our customers.",
            "We harness employees’ ideas, develop them and turn them into added value innovations.",
            "We re-invent the wheel."
        ]
    },
    {
        title: "Leadership",
        list: [
            "We start with ourselves (leading yourself first) and we make things happen.",
            "We are self-motivated and inspire others to grow and deliver.",
            "We enable leaders to become more effective.",
            "We create future leaders."
        ]
    },
    {
        title: "Excellence",
        list: [
            "We strive for being the best.",
            "We consistently challenge the status quo.",
            "We outperform others and ourselves in finding better ways to achieve things. When we do, we keep trying to outperform ourselves again and again."
        ]
    },
    {
        title: "Agility",
        list: [
            "We are willing, able and flexible to change and adapt quickly to market, competition and environmental changes in a productive and cost-effective way.",
            "We value change and believe it is an opportunity to rethink, reinvigorate and reinvent the future.",
            "We have Business Agility as we are able to respond fast to business opportunity as well as risk."
        ]
    },
    {
        title: "Revolutionary",
        list: [
            "We invent the future by disrupting the norms.",
            "We change the game itself rather than cope with what exists as given.",
            "We change the world for the better by doing things never been done before bringing the best value to our customers enabling them to realize their true potential."
        ]
    },
    {
        title: "Nuturing",
        list: [
            "We are passionate about growth and development. We care and protect people as they develop.",
            "We Build trees of knowledge and encourage personal development.",
            "We enable others to reach their full potential."
        ]
    },
]
const MissionSection = () => {
    return (
        <section className="container pt-10 md:pt-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    data1.map((item, idx) => (
                        <div 
                            data-aos="fade-up"
                        key={idx}
                            className="group parent-line-animate relative rounded-2xl overflow-hidden p-3 border-b border-r border-[#dd429291]
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                            hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                            flex flex-col gap-2
                            ">
                            <span className="line-animate"></span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className="py-10 flex flex-col gap-5">
                <h3 className="text-2xl gradient-text-color text-start!">our values</h3>
                <p data-aos="fade-right">I LEARN</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data2.map((item, idx) => (
                            <div 
                                data-aos="fade-up"
                            key={idx}
                                className="group parent-line-animate relative rounded-2xl overflow-hidden p-3 border-b border-r border-[#dd429291]
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                            hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                            flex flex-col gap-2
                            ">
                                <span className="line-animate"></span>
                                <h3 className="font-semibold text-xl first-char">{item.title}</h3>
                                <ul className="text-sm ">
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
        </section>
    )
}

export default MissionSection