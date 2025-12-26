import Image from 'next/image';
import TextType from '../reactBits/TypingText';

const Hero2 = () => {
    return (
        <main className='relative z-100! overflow-x-hidden'>
            <div className="min-h-screen flex flex-col items-center justify-center gap-15 text-white p-4 overflow-hidden relative">

                <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

                <div className="flex items-center gap-3 rtl:space-x-reverse justify-center w-full col-span-3 lg:col-span-3 ">
                    <span className="h-[2] w-8 gradient-line animate-line fromZero-to-full-width" />

                    <span className="font-medium tracking-wider italic text-3xl gradient-text-color">
                        ZEDNY
                    </span>

                    <span className="h-[2] w-8 gradient-line animate-line fromZero-to-full-width" />
                </div>

                <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-12 items-center z-10">
                    <div className="space-y-6 col-span-2 mx-auto md:mx-0">
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                            THE COMPLETE
                        </h1>

                        <h2
                            className="text-xl md:text-6xl font-black tracking-widest uppercase"
                            style={{
                                background:
                                    "linear-gradient(90deg, #dd4292, #ae64fc 29.27%, #2cd4f8 62.94%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <TextType text={[`LEARNING PLATFORM!`, `COMPANY!`]} typingSpeed={200} showCursor={true} cursorBlinkDuration={0.9} />
                        </h2>


                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Experience a world-class, science-backed enablement solution that maximizes your workforce potential through comprehensive learning.
                        </p>

                        <div className="pt-4">
                            <button
                                className="
                                group relative px-8 py-3 rounded-md
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                            >
                                Book a Demo
                                <div
                                    className=" rounded-full p-1 bg-white/20 group-hover:bg-white/4 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="black"
                                    />
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className="md:relative flex justify-center items-center mx-auto col-span-2 lg:col-span-1">
                        <div className="absolute left-1/2 -translate-x-1/2 w-125 h-125 border border-gray-700/50 rounded-full animate-spin-slow"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-100 h-100 border border-dashed border-cyan-500/30 rounded-full"></div>

                        <Image
                            width={500}
                            height={500}
                            src={"/i1.png"}
                            alt="AI Robot"
                            className="relative z-10 w-full max-w-md drop-shadow-[0_0_30px_rgba(0,200,255,0.3)] rounded-2xl hover:scale-105 transition-all duration-300"
                        />

                        <div className="absolute top-10 right-10 p-2 bg-black/50 border border-cyan-500/50 rounded backdrop-blur-sm">
                            <div className="h-1 w-8 bg-cyan-400 mb-1"></div>
                            <div className="h-1 w-4 bg-gray-500"></div>
                        </div>

                        <div className="absolute bottom-20 left-0 flex items-center gap-2 text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full">
                            <span className="text-green-400">AI</span> COPYRIGHT
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Hero2;