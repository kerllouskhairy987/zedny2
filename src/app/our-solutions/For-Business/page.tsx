import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import Hero from "@/components/our-solutions/For-Business/Hero"
import Skills from "@/components/our-solutions/For-Business/Skills"
import { Metadata } from "next"
import Image from "next/image"

const ForBusinessPage = () => {
    return (
        <>
            {/* pulse animation */}
            {/* <div className="absolute top-1/2 left-0 z-1000 w-32 h-32 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 animate-ping opacity-50"></div> */}

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
            <Skills />
            <Footer />
        </>
    )
}

export default ForBusinessPage



export const metadata: Metadata = {
    title: 'zedny For Business',
    description: 'zedny For Business for e learning and training',
}