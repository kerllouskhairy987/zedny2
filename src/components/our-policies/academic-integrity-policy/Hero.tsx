import TextType from '@/components/reactBits/TypingText'

const data = [
    {
        title: "1. Definition of Academic Integrity",
        desc: "Academic integrity is a fundamental principle in both academic and professional life. It refers to intellectual honesty and scholarly ethics in the use, transfer, documentation, publication of information, and research production. For Zedny, this moral code is essential for instructors and learners alike, ensuring respect for intellectual property rights. Therefore, academic integrity is a key principle of Zedny’s e-learning programs."
    },
    {
        title: "2. Principles of Academic Integrity for Learners",
        list: [
            "Zedny upholds high academic standards across its courses and expects learners to act fairly and honestly in accordance with the principles of academic integrity, particularly when conducting assessments (discussions, assignments, tests) and research projects. Submitted work must be original, whether individual or group-approved, to demonstrate acquired skills and achieve educational outcomes.",
            "Zedny’s e-learning administration and its affiliated entities provide continuous guidance and technical support to ensure learners understand the importance of academic integrity. Instructors are equipped with tools and reports to fairly handle any violations of academic integrity principles.",
            "Zedny employs clear strategies, in coordination with its e-learning administration, to ensure learners meet the platform's expectations for honesty and integrity."
        ]
    },
    {
        title: "3. Forms of Academic Integrity Violations",
        desc: "Violations of academic integrity include, but are not limited to:",
        list: [
            "Cheating : Using unauthorized materials or information during academic exams or tasks.",
            "Plagiarism : Quoting or using others' work without proper citation.",
            "Misuse of Academic Assistance : Using a peer's work without their consent or knowledge.",
            "Exploitation of Collaboration : Relying on another learner for completing individual tasks.",
            "Fabrication : Falsifying information in academic tasks or presenting false medical certificates.",
            "Impersonation : Pretending to be someone else in a classroom or assessment setting.",
        ]
    },
    {
        title: "4. Mechanisms to Detect Academic Integrity Violations",
        desc: "Instructors may require learners to explain or justify their submitted assessments and to document the steps and resources used in completing their work. This helps to identify any potential breaches of academic integrity.",
    },
    {
        title: "5. Disciplinary Actions for Identity Fraud and Cheating",
        desc: "In cases of confirmed violations, Zedny may apply one or more of the following penalties:",
        list: [
            "Verbal warning.",
            "Temporary suspension from Zedny's courses.",
            "Cancellation of the learner’s certificate.",
            "Permanent expulsion from Zedny’s programs."
        ]
    },
]

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`Academic Integrity Policy for Zedny`, `Academic Integrity Policy for Zedny`]} typingSpeed={100} />
                    </h1>
                    <p className="mb-1 text-xl text-white/60">How Zedny Harnesses Artificial Intelligence to Transform Learning</p>
                    <p className="mb-1 text-lg text-white/90">Behind the scenes at Zedny, a silent revolution is taking place, and it&apos;s all thanks to the power of Artificial Intelligence (AI). In the realm of eLearning, AI is the enigmatic force that propels us forward, shaping the future of education in ways that are both awe-inspiring and mysterious.</p>
                    <h2 className="mb-1 text-lg text-white/90">The AI Behind the Curtain</h2>
                    <p className="mb-1 text-lg text-white/90">AI isn&apos;t just a buzzword at Zedny; it&apos;s a core element woven into the very fabric of our platform. But what exactly does this entail, and how does AI work its magic?</p>
                </div>


                <div className="flex flex-col gap-3 pt-5">
                    <h2 className="text-2xl font-bold pb-4">Zedny: A Multi-Faceted Learning Solution</h2>
                    <div className="flex flex-col gap-3">
                        {
                            data.map((item, idx) => (
                                <div key={idx} className="relative parent-line-animate overflow-hidden border-b p-4 rounded-md flex flex-col gap-3 hover:-translate-y-2 duration-300 shadow-lg shadow-pink-500/10 bg-[#1b1b1ba1] hover:border-r-[0.01px] border-[#dd429291]">
                                    <span className="line-animate"></span>
                                    <h3 className="text-2xl font-semibold first-char">{item.title}</h3>
                                    <p className="text-xl">{item.desc}</p>
                                    <ul className="text-sm">
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