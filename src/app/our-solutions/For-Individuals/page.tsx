import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import Help from "@/components/our-solutions/For-Individuals/Help"
import Hero from "@/components/our-solutions/For-Individuals/Hero"
import { Metadata } from "next"
import Image from "next/image"

const ForBusinessPage = () => {
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
            <Help />
            <Footer />
        </>
    )
}

export default ForBusinessPage;

export const metadata: Metadata = {
    title: 'zedny For Individuals',
    description: 'zedny For Individuals for e learning and training',
}