import Image from "next/image"
import "../../../app/globals.css";
import Hero from "@/components/our-policies/intellectual-property-copyright/Hero";
import { Metadata } from "next";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

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
    title: 'Intellectual Property Copyright',
    description: 'Intellectual Property Copyright for e learning and training',
}