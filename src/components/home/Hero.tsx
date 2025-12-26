
import Image from "next/image"
import "../../app/globals.css"
import TextType from "../reactBits/TypingText"

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4 order-2 lg:order-1">
                    <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                        <TextType text={[`Unleashing Success`, `Unleashing Success`]} typingSpeed={100} />
                    </h1>
                    <p className="mb-1 text-xl text-white/60">Zedny&apos;s Creative Solutions for Business Empowerment</p>
                    <p className="text-white/60">Foster an organizational culture that highly esteems and encourages skill enhancement, inspiring employees to establish and attain their individual skill objectives</p>
                </div>
                <div className="relative w-full h-75 order-1 lg:order-2">
                    <Image
                        src={'https://zedny.com/assets/images/miscallenousPages/products-services/IMAGE.svg'}
                        alt="image hero business page"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </main>
    )
}

export default Hero