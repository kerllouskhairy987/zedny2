import Benefits from "@/components/company/our-method/Benefits"
import Hero from "@/components/company/our-method/Hero"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavbarClient"
import { getToken } from "@/lib/getToken"
import { verifyToken } from "@/lib/verifyToken"
import { Metadata } from "next"
import Image from "next/image"

const page = async () => {
    const token = await getToken();
    const dataUser = verifyToken(token);

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
            <Navbar dataUser={dataUser} />
            <Hero />
            <Benefits />
            <Footer />
        </>
    )
}

export default page;

export const metadata: Metadata = {
    title: 'our method',
    description: 'our method for e learning and training',
}