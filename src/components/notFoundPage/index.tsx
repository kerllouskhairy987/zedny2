"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const ComponentNotFoundPage = () => {
    const { refresh } = useRouter();

    return (
        <div className='container py-10 flex flex-col justify-center gap-3 h-[calc(100vh-90px)]'>
            <div className='flex justify-between gap-10 flex-col items-center lg:flex-row'>
                <div className='flex flex-col justify-center gap-3 items-center md:items-start order-2 lg:order-1'>
                    <h2 className='font-bold text-5xl sm:text-7xl tracking-widest'>404 - error</h2>
                    <p className='font-bold text-2xl sm:text-3xl tracking-widest'>PAGE NOT FOUND</p>

                    <div className='flex gap-2 pt-4'>
                        <div data-aos="zoom-in-down">
                            <Link href={"/"}
                                className="
                                group relative px-5 py-2 rounded-full
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0 w-fit
                            "
                            >
                                Return Home
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
                            </Link>
                        </div>

                        <button onClick={() => refresh()} className='border text-white font-semibold cursor-pointer hover:bg-pink-400 tracking-wide hover:text-white duration-300 rounded-full px-5'>Refresh</button>
                    </div>
                </div>

                <div className='relative order-1 lg:order-2'>
                    <div className="
                            w-full h-175 md:w-150 md:h-150
                            rounded-[21%_79%_57%_43%/19%_74%_26%_81%]
                            absolute top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            -z-10
                            bg-linear-to-r from-pink-200/20 to-purple-500/20
                            blur-3xl
                        " />
                    <div className='relative w-120 h-120'>
                        <Image
                            src={"/error-.png"}
                            alt='error image'
                            fill
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComponentNotFoundPage