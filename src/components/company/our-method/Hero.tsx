import TextType from "@/components/reactBits/TypingText"

const data = [
    {
        title: "DISCOVER",
        desc: "Dive into discussions about your needs, goals, and challenges. Together we will plan how to achieve your desired outcomes and true potential.",
    },
    {
        title: "DESIGN",
        desc: "Keeping your requirements and learning strategy at the forefront, our teams will collaborate closely to craft the optimum solution.",
    },
    {
        title: "DELIVER",
        desc: "With a dedicated learning solution partner at your side, we'll create, assemble and ready your learnings.",
    },
    {
        title: "DEVELOP",
        desc: "As your learning journey unfolds, our experts will stand by your side, continuously enhancing your experience to provide top-tier learning opportunities.",
    },
]
const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <p className="mb-1 text-xl text-white">PARTNERSHIP APPROACH</p>
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`One holistic learning solution, with experts to support you.`, `One holistic learning solution, with experts to support you.`]} typingSpeed={100} />
                    </h1>
                    <p className="mb-1 text-lg text-white/70">Our unique partnership approach guarantees that we will work with you at every step, from the first ideas to future development, scaling your learning solution as your business goals grow and change.</p>
                </div>

                <div className="flex flex-col gap-3 mt-20">
                    <h2 className="text-3xl font-bold pb-4 gradient-text-color text-start!">HOW WE WORK</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                        {
                            data.map((item, idx) => (
                                <div key={idx}
                                    className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden p-3 border-b 
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                            hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                            flex flex-col gap-2 bg-black/50
                            ">
                                    <span className="line-animate"></span>
                                    <span className="font-bold text-4xl">{idx + 1}</span>
                                    <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                                    <p className="text-xl">{item.desc}</p>
                                </div>
                            ))
                        }
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
        </main>
    )
}

export default Hero