import Growth from "@/components/home/Growth";
import Navbar from "@/components/home/Navbar";
import Image from "next/image";
import Journey from "../components/home/Journey";
import Safety from "@/components/home/Safety";
import Love from "@/components/home/Love";
import Experts2 from "@/components/home/Experts2";
import Hero2 from "@/components/home/Hero2";
import HeroCanvas from "@/components/home/HeroCanvas";
import Tops2 from "@/components/home/Tops2";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      {/* canvas */}
      <div className="absolute top-0 left-0 h-full! w-full! z-50">
        <HeroCanvas />
      </div>

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
      <Hero2 />
      <Growth />
      <Tops2 />
      <Features />
      <Journey />
      <Experts2 />
      <Safety />
      <Love />
      <Footer />
    </>
  );
}
