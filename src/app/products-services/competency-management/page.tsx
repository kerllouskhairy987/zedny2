
import Benefits from "@/components/products-services/competency-management/Benefits"
import Hero from "@/components/products-services/competency-management/Hero"
import Overview from "@/components/products-services/competency-management/Overview"
import Image from "next/image"

const Page = () => {
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
            <Overview />
            <Benefits />
            <Footer />
        </>
    )
}

export default Page

import type { Metadata } from 'next'
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"

export const metadata: Metadata = {
    title: 'competency management',
    description: 'Zedny platform for e learning and training',
}