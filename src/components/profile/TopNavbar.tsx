"use client";

import { handleLogout } from "@/lib/logout";
import { JWTPayload } from "@/types"
import { Bell, LogOut } from "lucide-react"
import Image from "next/image"

interface IProps {
    dataUser: JWTPayload | null;
}

const TopNavbar = ({ dataUser }: IProps) => {
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    const formattedText = new Date(dataUser?.createdAt || 0).toLocaleString("en-US", options);

    return (
        <div className="container py-4 rounded-b-4xl md:rounded-4xl bg-[#0B111D] border-b border-t border-[#dd4292] sticky top-20 left-0 z-10">
            <div className="">
                <div className="flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold text-3xl">Welcome, {dataUser?.username}</h2>
                        <div className="ms-3">
                            <p>created at: <span className="text-white/60">{formattedText}</span></p>
                            <p>last update at: <span className="text-white/60">{formattedText}</span></p>
                        </div>
                    </div>

                    <div className="flex grow justify-end items-center space-x-4">
                        <Bell className="cursor-pointer" />
                        <div className="relative w-10 h-10 rounded-md overflow-hidden">
                            <Image
                                src={"https://thumbs.dreamstime.com/b/head-shot-portrait-brunette-female-executive-person-business-woman-welcoming-smile-cheerful-positive-attitude-pretty-187430744.jpg"}
                                alt="placeholder image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <button
                            onClick={handleLogout}
                            className={`flex items-center gap-3 hover:bg-white/10 py-2 px-3 rounded-lg duration-300 bg-pink-500 cursor-pointer`}>
                            <LogOut />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar