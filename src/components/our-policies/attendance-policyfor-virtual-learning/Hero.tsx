import TextType from "@/components/reactBits/TypingText"
import "../../../app/globals.css";

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container flex flex-col gap-5">
                <h1 className="gradient-text-color text-start! text-4xl md:text-5xl font-bold my-10">
                    <TextType text={[`Zedny Attendance Policy for Virtual Learning`, `Zedny Attendance Policy for Virtual Learning`]} typingSpeed={100} />
                </h1>
                <p className="mb-1 text-xl text-white/60">Zedny is a subscription-based e-learning platform where all learning resources, including video courses, book summaries, and written materials, are pre-prepared and accessible to users at any time. Given that the courses are pre-recorded and designed for self-paced learning, Zedny’s attendance policy is adapted to suit the platform’s virtual nature.</p>

                <p className="mb-1 text-xl text-white/70 first-char">
                    <span className="text-white font-bold">In Zedny, attendance is tracked based on learners&apos; interaction with the platform’s resources rather than traditional attendance. Learners must complete the required courses and assessments within the allocated time for each program to fulfill the attendance and completion criteria. :</span>
                    In Zedny, attendance is tracked based on learners&apos; interaction with the platform’s resources rather than traditional attendance. Learners must complete the required courses and assessments within the allocated time for each program to fulfill the attendance and completion criteria.
                </p>

                <p className="mb-1 text-xl text-white/70">Since Zedny’s content is pre-prepared, learners can access and consume the material at their convenience without fixed timeframes for attending live sessions. However, progress and course completion are monitored to ensure learners meet the learning outcomes and remain engaged with the material.</p>

                <p className="mb-1 text-xl text-white/70 first-char">
                    <span className="text-white font-bold">In-Person Events or Workshops :</span>
                    If Zedny offers any live virtual workshops or events, attendance is tracked through participation in those scheduled sessions, similar to traditional in-person attendance. These events typically have a set capacity and may require pre-registration.
                </p>

                <p className="mb-1 text-xl text-white/70 first-char">
                    <span className="text-white font-bold">Subscription-Based Learning :</span>
                    All Zedny resources are available to learners throughout the subscription period, and the platform does not distinguish between &apos;virtual&apos; and &apos;in-person&apos; attendance since all resources are designed for online, asynchronous access.
                </p>

                <p className="mb-1 text-xl text-white/70">
                    This policy aligns with Zedny’s vision of providing flexible, self-paced education while ensuring learners engage with and complete the necessary materials and assessments.
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