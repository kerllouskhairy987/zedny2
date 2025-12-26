import FormContactUs from "@/components/company/contact-us/FormContactUs"
import Navbar from "@/components/home/Navbar"
import Image from "next/image"
import type { Metadata } from 'next'
import Footer from "@/components/home/Footer"

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
            <FormContactUs />
            <Footer />
        </>
    )
}

export default page


export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'contact us page of zedny, do not hesitate to contact us',
}