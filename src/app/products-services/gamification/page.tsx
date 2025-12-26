import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import Hero from "@/components/products-services/gamification/Hero"
import { Metadata } from "next"
import Image from "next/image"

const page = () => {
    return (
        <>
            {/* gradient */}
            <div className="absolute z-30 w-full h-130.25">
                <Image
                    src={"https://zedny.com/assets/home/grdient-bg.jpg"}
                    alt="image for gradient"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Components */}
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default page;

export const metadata: Metadata = {
    title: 'gamification',
    description: 'the power of gamification',
}