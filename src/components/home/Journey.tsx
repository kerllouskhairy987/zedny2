
const Journey = () => {
    return (
        <section className="container section-gap">
            <div className="my-10 text-center flex flex-col gap-2">
                <h2 className="text-3xl font-semibold text-center"><span className="gradient-text-color">AI powered</span> journey</h2>
                <p className="font-semibold text-xl">It doesn&lsquo;t get easier than this</p>
                <p className="text-white/60">You are steps away from embarking on your personalized learning pathway with Zedny.</p>
            </div>

            <div className="relative min-h-screen py-5 md:py-20">
                {/* Vertical Line */}
                <div className="
                    absolute 
                    md:left-1/2 
                    top-0 
                    h-full w-0.5 
                    md:-translate-x-1/2 
                    left-8 -translate-x-1/2 
                    bg-linear-to-b from-pink-500 via-purple-500 to-blue-500" />

                <div className="flex flex-col gap-10">
                    <TimelineItem
                        side="left"
                        src="./v1.mp4"
                        title="Assessment revolution"
                        subTitle="that resonates"
                        desc="Identify skill gaps, personality traits, and learning preferences for a tailored learning experience."
                        />
                    <TimelineItem 
                    side="right" 
                    src="./v2.mp4"
                    title="Blueprint for brilliance"
                    subTitle="that guides"
                    desc="Receive a detailed report mapping your skills and personality traits for self-awareness and success."
                    
                    />
                    <TimelineItem 
                    side="left" 
                    src="./v3.mp4" 
                    title="AI transformation journey"
                    subTitle="that empowers"
                    desc="Use AI recommendations to enhance team strengths and improve weaknesses dynamically."
                    />
                    <TimelineItem 
                    side="right" 
                    src="./v1.mp4" 
                    title="Command center for progress"
                    subTitle="that oversees"
                    desc="Access an AI-based dashboard for leaders to oversee and guide learning progress."
                    />
                </div>
            </div>

        </section>
    )
}

export default Journey

type IProps = {
    side: "left" | "right",
    src: string
    title: string
    subTitle: string
    desc: string
}
const TimelineItem = ({ side, src, title, subTitle, desc }: IProps) => {
    return (
        <div className="relative flex items-center justify-center">
            {/* Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                <div className="w-5 h-5 rounded-full bg-linear-to-r bg-white" />
                <div className="absolute top-1/2 left-1/2 -translate-1/2 w-10 h-10 rounded-full bg-linear-to-r from-pink-500/40 to-purple-500/30" />
                <div className="absolute top-1/2 left-1/2 -translate-1/2 w-15 h-15 rounded-full bg-linear-to-r from-pink-600/40 to-purple-600/40 animate-pulse" />
                <div className={`absolute top-1/2 ${side === "left" ? "left-full md:-translate-x-20" : "left-full md:translate-x-2"} left-full translate-x-3 w-8 md:w-12 h-1 rounded-2xl bg-linear-to-r from-pink-100 to-purple-600 animate-pulse`} />
            </div>

            <div
                className={`flex flex-col gap-3 w-[calc(100%-80px)] ms-22 md:ms-0 md:w-[calc(50%-80px)] rounded-xl p-5 bg-[#111] shadow-lg shadow-pink-500/10 hover:scale-105 duration-300 ${side === "left"
                    ? "md:mr-auto "
                    : "md:ml-auto"}`}
            >
                <video src={src} autoPlay muted loop className="w-full"></video>
                <h3 className="text-lg font-semibold text-white">
                    {title}
                    <br />
                    <span className="gradient-text-color text-2xl">{subTitle}</span>
                </h3>
                <p className="text-white/60 text-sm mt-2">{desc}</p>
            </div>
        </div>
    );
};
