
const data1 = [
    {
        title: "A Dream with Purpose",
        desc: "Our journey began with a dream – a dream to make learning accessible, engaging, and above all, impactful. We envisioned a world where every individual could not only afford education but also find joy and purpose in their learning journey."
    },
    {
        title: "The Zedny Family: Where Passion Meets Production",
        desc: "Proudly standing at the intersection of passion and innovation, the Zedny family is more than just a team; we're a community bound by a common goal. Every course and book summary you find on our platform is not outsourced; it's a product of our dedication. We believe in bringing you the world's best content, harnessed by cutting-edge technologies like machine learning and gamification."
    },
]

const data2 = [
    {
        title: "1. Learning Paths:",
        desc: "Your Roadmap to Success Imagine having a clear path to your goals. That's precisely what our Learning Paths offer. These meticulously designed journeys take you from courses to expert insights and book summaries, ensuring your learning experience is as structured as it is enriching."
    },
    {
        title: "2. Online Courses in Arabic:",
        desc: "Empowering Through Education We believe in breaking language barriers. That's why our online courses are available in Arabic, ensuring that knowledge knows no bounds. Whether you're a professional looking to upskill or an individual with a thirst for learning, our courses cater to your needs."
    },
    {
        title: "3. Animated Video Book Summaries:",
        desc: "Learning Reimagined Books hold the wisdom of ages. Our animated video book summaries in Arabic distill the essence of global business bestsellers, making knowledge accessible and engaging. It's learning reimagined, condensed into bite-sized brilliance."
    },
    {
        title: "4. Welcome to the Corporate Hub:",
        desc: "Where Transformation Begins In the corporate world, transformation starts with knowledge. Zedny's Corporate Hub is designed to empower organizations by providing tailored learning solutions. Our courses cover behavioral, social, and business knowledge, alongside office and digital tools that broaden horizons and enhance productivity. Research shows that e-learning can boost knowledge absorption by five times, making our platform a game-changer for organizations."
    },
]

const data3 = [
    {
        title: "1. The Assessment Hub:",
        desc: "Your Gateway to Insight We've introduced the Assessment Hub, a powerful tool that offers insights like never before. Understand your strengths, identify areas for growth, and chart your path to success with our assessments."
    },
    {
        title: "2. Personalized and Gamified Learning:",
        desc: "Learning, Your Way Our commitment to personalized learning remains unwavering. We've incorporated gamification to make your learning journey not just educational but fun and exciting. Explore your potential as you navigate through our engaging courses."
    },
    {
        title: "3. Beyond LMS:",
        desc: "Welcome to LRS and LXP Our technology has transformed. Zedny is no longer just an LMS; it's now an LRS and LXP as well. This expanded platform ensures that your learning experience is comprehensive, immersive, and tailored to your needs."
    },
    {
        title: "4. The Power of AI:",
        desc: "Behind and Beyond the Scenes Artificial Intelligence isn't just a buzzword at Zedny; it's the driving force that enhances your learning experience. AI algorithms power our course generation, assessments, content creation, and more. It's not just about learning; it's about learning smarter."
    },
]
const AboutSection = () => {
    return (
        <section className="container pt-10 md:pt-20 relative">
            <p data-aos="fade-right" className="mb-6 text-white/70">Zedny&apos;s Journey to Transform Learning In the heart of innovation, where learning meets empowerment, Zedny emerged as a beacon of transformation in April 2018. Founded by a dynamic group of dedicated professionals, our vision was clear: to reshape the learning landscape for the region&apos;s human capital.</p>

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
                <h3 className="text-2xl gradient-text-color text-start!">A Glimpse into Zedny&apos;s World</h3>
                <p data-aos="fade-right">At Zedny, we&apos;ve transformed dreams into reality, and our offerings reflect our commitment to excellence:</p>

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
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="py-10 flex flex-col gap-5">
                <h3 className="text-2xl gradient-text-color text-start!">The Zedny Revolution: What&apos;s New?</h3>
                <p data-aos="fade-right">But that&apos;s not the end of our story. Zedny has evolved, and with that evolution comes a new era of learning:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data3.map((item, idx) => (
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
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h4 data-aos="fade-right" className="text-white text-2xl font-bold">Join the Zedny Revolution</h4>
                <p data-aos="fade-right" className="text-lg text-white/70">As we continue to redefine the boundaries of education, we invite you to be part of the Zedny revolution. Whether you&apos;re an individual seeking knowledge, an HR professional looking to transform your organization, or a lifelong learner hungry for more, Zedny is your partner in unlocking your true potential.</p>
                <p data-aos="fade-right" className=" text-white/70">Join us as we embark on this extraordinary journey. With Zedny, learning knows no bounds, and empowerment has no limits. Your transformation begins here.</p>
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

export default AboutSection