import TextType from "@/components/reactBits/TypingText"
import Image from "next/image"

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4 order-2 lg:order-1">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`Unleashing Success`, `Unleashing Success`]} typingSpeed={100} />
                    </h1>
                    <p data-aos="fade-right" className="mb-1 text-xl text-white/60">Zedny&apos;s Creative Solutions for Business Empowerment</p>
                    <p data-aos="fade-right" className="text-white/60">In today&apos;s fast-paced business world, staying competitive and achieving growth are top priorities. Innovative solutions are tailored to meet the unique needs of businesses and corporations. With a focus on creativity and effectiveness, let&apos;s explore how these solutions can elevate your business to new heights.</p>

                    <div data-aos="zoom-in-down" className="pt-4">
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
                            Book a Demo
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
                <div data-aos="zoom-in-down" className="relative w-full h-75 order-1 lg:order-2">
                    <Image
                        src={'https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/cover-image.png'}
                        alt="image hero business page"
                        fill
                        className="object-contain animate-bounce hover:animate-none"
                    />
                </div>
            </div>
        </main>
    )
}

export default Hero