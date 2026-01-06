import LogoLoop from "@/components/reactBits/LoopSlider";

interface IProps {
    title: string;
    desc: string
}
export const WhySectionSlider = ({ title, desc }: IProps) => {
    return (
        <div
            className="group parent-line-animate relative rounded-2xl overflow-hidden p-3 bg-black/90 border-b border-r border-[#dd429291]
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300 hover:rounded-md 
                            flex flex-col gap-2
                            ">
            <span className="line-animate"></span>
            <h3 className="font-semibold text-2xl first-char">{title}</h3>
            <p className="text-sm">{desc}</p>
        </div>
    )
}



const data = [
    {
        node: (
            <WhySectionSlider
                title="1. Personalization:"
                desc="Your Journey, Your Way At Zedny, we understand that one size doesn't fit all. That's why we've made personalization a cornerstone of our platform. Whether you're an individual learner or part of a large institution, our courses and assessments adapt to your unique needs. No matter where you are on your learning journey, Zedny meets you there, tailoring your experience for maximum impact."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="2. Gamification:"
                desc="Where Learning Meets Fun Learning should be exciting, not tedious. That's why we've introduced gamification into the equation. With Zedny, education transforms into an adventure. Dive into engaging courses that feel like games, complete with challenges, rewards, and interactive elements. Say goodbye to boredom and hello to the thrill of learning."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="3. Comprehensive Offerings:"
                desc="More Than Just Courses Zedny is not just another learning platform; it's a learning ecosystem. Our offerings extend beyond traditional courses. Explore animated video book summaries, sharpen your skills with readings, and embark on learning pathways curated to your goals. With Zedny, you're not limited to one avenue of learning; you have a world of knowledge at your fingertips."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="4. The Power of Assessments:"
                desc="Insights for Growth In today's competitive landscape, growth is not optional; it's essential. Zedny's Assessment Hub is your secret weapon. Uncover your strengths, identify areas for development, and chart a course for success. For institutions and companies, our assessments provide a roadmap to elevate your workforce and achieve your goals."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="5. Technological Evolution:"
                desc="More Than an LMS Zedny is not bound by convention. We've evolved from a traditional Learning Management System (LMS) into a Learning Record Store (LRS) and Learning Experience Platform (LXP). What does this mean for you? A more immersive, comprehensive, and tailored learning experience. We adapt to the ever-changing landscape of education, ensuring you stay ahead of the curve."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="6. AI-Powered Excellence:"
                desc="Smarter Learning Behind the scenes and in plain sight, Artificial Intelligence (AI) drives Zedny's excellence. From course generation to content creation, AI ensures that your learning is not just educational but also intelligent. It's about learning smarter, not harder."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="7. ROI that Speaks Volumes:"
                desc="Productivity Boost For companies and institutions, investing in learning and development is an investment in your future. Research shows that e-learning can enhance knowledge absorption by five times. With Zedny, productivity soars, performance excels, and your return on investment (ROI) speaks volumes."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="8. Unwavering Support:"
                desc="Your Success is Our Mission At Zedny, we're not just a platform; we're your partner in success. Our dedicated support team is here to assist you every step of the way. Whether you're an individual learner or an HR professional shaping your organization's future, we're committed to your success."
            />
        )
    },
    {
        node: (
            <WhySectionSlider
                title="9. Join the Zedny Revolution:"
                desc="Your Transformation Awaits The path to excellence is not a solo journey; it's a shared adventure. Join the Zedny revolution and unlock your true potential. Whether you're an individual seeking growth, an institution fostering knowledge, or a company aiming for excellence, Zedny is your bridge to success."
            />
        )
    },
]

const WhySection = () => {
    return (
        <section className="pt-10 md:pt-20 relative">
            <div className="container flex flex-col gap-3">
                <h2 data-aos="fade-right" className='gradient-text-color text-start! text-2xl'>Why Zedny</h2>
                <p data-aos="fade-right" className='text-white/60 text-xl'>Your Gateway to Learning Excellence</p>
                <p data-aos="fade-right" className='text-white/60 text-lg'>In a world where learning and development are at the heart of success, Zedny emerges as the catalyst for transformation. For users, institutions, companies, and every stakeholder seeking a path to excellence, Zedny is the compass that points the way. Here&apos;s why you should choose Zedny as your ultimate hub for training, development, and assessment.</p>
            </div>

            <div className="py-10 w-full bg-transparent flex items-center relative overflow-hidden text-center">
                <LogoLoop
                    logos={data}
                    speed={50}
                    direction="right"
                    logoHeight={10}
                    gap={40}
                    pauseOnHover
                    fadeOut
                />
            </div>

            <div className="container">
                <p data-aos="fade-right" className="text-white/60 text-sm">Don&apos;t settle for mediocrity; choose excellence. Choose Zedny and embark on a learning journey that&apos;s personalized, engaging, and transformative. Your future starts here.</p>
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

export default WhySection
