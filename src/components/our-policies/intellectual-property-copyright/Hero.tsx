import TextType from "@/components/reactBits/TypingText"
import "../../../app/globals.css";

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-5">
                <h1 className="gradient-text-color text-start! text-4xl md:text-5xl font-bold my-10">
                    <TextType text={[`Principles of Intellectual Property and Copyright at Zedny`, `Principles of Intellectual Property and Copyright at Zedny`]} typingSpeed={100} />
                </h1>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Commitment to Respecting Intellectual Property and Copyright</span>
                    At Zedny, we are fully committed to adhering to intellectual property (IP) rights and copyright laws when designing and publishing all educational materials on our platform or on any of our social media accounts, such as images, promotional posters, and other digital content.
                </p>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Trainer’s Commitment to Intellectual Property when Writing Course Content</span>
                    Zedny transforms the scientific content prepared by trainers into digital formats. All participating trainers are required to respect intellectual property and copyright laws by citing all references and sources used in the preparation of the course content. Trainers must acknowledge, prior to starting, that the intellectual property of the content created under Zedny’s supervision belongs to Zedny. When Zedny is responsible for writing the course content, a licensing agreement is obtained between the course trainer and Zedny management.
                </p>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Trainer’s Commitment when Uploading Content to Zedny&apos;s Platform</span>
                    Trainers acknowledge that all content uploaded to Zedny’s platform—including recorded courses, quizzes, and surveys—must respect intellectual property rights and copyright principles. Trainers also agree that all uploaded courses become part of Zedny&apos;s assets and can be used for development or training purposes by the platform.
                </p>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Commitment to Storing and Using Materials on Zedny&apos;s Platform</span>
                    Zedny provides a suite of educational systems and tools, such as the e-learning system and virtual classrooms. These tools generate materials and data such as student files, attendance statistics, and grades. All data and content are subject to policies that ensure adherence to intellectual property rights, with strict controls in place to manage their use and classification based on sensitivity and confidentiality.
                </p>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Commitment to Protecting Login Information</span>
                    Both trainers and learners are required to protect the confidentiality of their login credentials and refrain from sharing them with others. Similarly, if there are discount codes for courses or tests, they must be used personally and not shared with others.
                </p>

                <p data-aos="fade-right" className="mb-1 text-xl text-white/60">
                    <span className="text-white font-semibold text-xl block first-char">Copyright of Educational Materials</span>
                    All materials and training kits provided through Zedny are exclusively available for the personal use of the learner and cannot be distributed or shared online or printed, as they are part of Zedny&apos;s intellectual property rights.
                </p>

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