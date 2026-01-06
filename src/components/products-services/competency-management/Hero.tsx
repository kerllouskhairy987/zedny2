import TextType from "@/components/reactBits/TypingText"
import Image from "next/image"

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4 order-2 lg:order-1">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-6xl font-bold">
                        <TextType text={[`ZEDNY SKILLS Competency Management`, `ZEDNY SKILLS Competency Management`]} typingSpeed={100} />
                    </h1>
                    <p data-aos="fade-right" className="mb-1 text-xl text-white/60">Foster an organizational culture that highly esteems and encourages skill enhancement, inspiring employees to establish and attain their individual skill objectives.</p>
                </div>
                <div data-aos="zoom-in-down" className="relative w-full h-75 order-1 lg:order-2">
                    <Image
                        src={'https://zedny.com/assets/images/miscallenousPages/products-services/IMAGE.svg'}
                        alt="image hero business page"
                        fill
                        className="object-contain animate-bounce hover:animate-none border"
                    />
                </div>
            </div>
        </main>
    )
}

export default Hero