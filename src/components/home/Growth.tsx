import { File, MessageCircle, Rocket, User } from "lucide-react"
import LogoLoop from "../reactBits/LoopSlider"

const imageComponent = [
    {
        id: 1,
        src: "https://zedny.com/assets/20.webp",
        alt: "image"
    },
    {
        id: 2,
        src: "https://zedny.com/assets/24.webp",
        alt: "image"
    },
    {
        id: 3,
        src: "https://zedny.com/assets/26.webp",
        alt: "image"
    },
    {
        id: 4,
        src: "https://zedny.com/assets/20.webp",
        alt: "image"
    },
    {
        id: 5,
        src: "https://zedny.com/assets/20.webp",
        alt: "image"
    },
    {
        id: 6,
        src: "https://zedny.com/assets/20.webp",
        alt: "image"
    },
]

const Growth = () => {
    return (
        <section className="container pb-10 md:pb-20">
            <div className="flex flex-col mx-auto text-center gap-3 max-w-[540]">
                <h2 className="text-4xl md:text-3xl font-bold">
                    <span>Growth </span>
                    <span>opportunities <span className="gradient-text-color">for everyone</span></span>
                </h2>

                <p className="text-white/60">Unlock the potential of your workforce by leveraging Zedny&rsquo;s tailored learning solutions.</p>
            </div>

            <div className="my-5 border-t shadow-xs hover:shadow-lg shadow-[#dd4292b0] rounded-md p-5 bg-[#dd4292] text-center duration-300"
                style={{
                    backgroundImage:
                        "url(https://assets-global.website-files.com/662b6a08629a147d93e638d7/662d02f4acb23c106e239361_Black-Gradient-Mask1x.png)",
                }}
            >
                <div className="group flex flex-col items-center gap-2">
                    <User className="group-hover:animate-pulse group-hover:text-blue-500 mx-auto text-[#dd4292] w-12 h-12" />
                    <h3 className="text-xl font-semibold">Scalable Learning Experience</h3>
                    <p className="text-white/60">Seamlessly blend innovative technologies to empower your team and keep them engaged throughout their learning journey.</p>
                    <button id="border_btn_white" className="w-fit">Talk to Sales</button>
                </div>

                {/* <div className="mt-5 -rotate-10 pb-12">
                    <LogoLoop
                        logos={imageComponent}
                        speed={20}
                        direction="left"
                        logoHeight={10}
                        gap={40}
                        pauseOnHover
                        fadeOut
                        fadeOutColor="transparent"
                    />
                    <div className="mt-6">
                        <LogoLoop
                            logos={imageComponent}
                            speed={20}
                            direction="right"
                            logoHeight={10}
                            gap={40}
                            pauseOnHover
                            fadeOut
                            fadeOutColor="transparent"
                        />
                    </div>
                </div> */}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> */}
                <div className="group relative parent-line-animate overflow-hidden flex flex-col gap-2 bg-[#1B1B1B] p-5 rounded-md hover:-translate-y-3 border-b-[0.01px] border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                    <span className="line-animate"></span>
                    <Rocket className="group-hover:animate-pulse group-hover:text-blue-500 text-[#dd4292] w-12 h-12" />
                    <h4 className="text-xl font-semibold">Accelerated Deployment</h4>
                    <p className="text-white/60 max-w-[440]">Quickly deploy training programs and initiatives using Zedny`&rsquo;s streamlined setup and user-friendly interface.</p>
                </div>
                <div className="group relative parent-line-animate overflow-hidden flex flex-col gap-2 bg-[#1B1B1B] p-5 rounded-md hover:-translate-y-3 border-b-[0.01px] border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0] duration-300">
                    <span className="line-animate"></span>
                    <MessageCircle className="group-hover:animate-pulse group-hover:text-blue-500 text-[#dd4292] w-12 h-12" />
                    <h4 className="text-xl font-semibold">Measurable Impact</h4>
                    <p className="text-white/60 max-w-[440]">Demonstrate the effectiveness of Zedny&rsquo;s training experience with clear, measurable results that benefit your organization.</p>
                </div>
                <div className="group relative parent-line-animate overflow-hidden flex flex-col gap-2 bg-[#1B1B1B] p-5 rounded-md hover:-translate-y-3 duration-300 border-b-[0.01px] border-r-[0.01px] border-[#dd429291] shadow-xs hover:shadow-lg shadow-[#dd4292b0]">
                    <span className="line-animate"></span>
                    <File className="group-hover:animate-pulse group-hover:text-blue-500 text-[#dd4292] w-12 h-12" />
                    <h4 className="text-xl font-semibold">Structured Team Management</h4>
                    <p className="text-white/60 max-w-[440]">Maintain focus and organization within your team using Zedny&rsquo;s structured learning pathways and management tools.</p>
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Growth