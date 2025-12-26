"use client";

import { useRouter } from "next/navigation";

const BackBtn = () => {
    const router = useRouter();
    
    return (
        <div className="pt-4" onClick={() => router.back()}>
            <button
                className="
                                group relative px-8 py-2 rounded-md
                                bg-linear-to-r from-[#0B111D] via-[#030303] to-[#2cd4f8]
                                text-white
                                flex items-center gap-3
                                transition-all duration-300
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
            >
                Go Back
            </button>
        </div>
    )
}

export default BackBtn