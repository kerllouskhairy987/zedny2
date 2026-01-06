"use client";

import { handleLogout } from "@/lib/logout";
import { JWTPayload } from "@/types";
import { BriefcaseBusiness, LayoutDashboard, List, LogOut, MessagesSquare, Settings, ShieldHalf, ShieldX, StepBack, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const asideLinksTop = [
    {
        name: "Dashboard",
        url: "/admin",
        icon: <LayoutDashboard />
    },
    {
        name: "Project List",
        url: "/admin/project-list",
        icon: <List />
    },
    {
        name: "Team",
        url: "/admin/team",
        icon: <ShieldHalf />
    },
    {
        name: "Users",
        url: "/admin/users",
        icon: <User />
    },
    {
        name: "Panned Users",
        url: "/admin/panned-users",
        icon: <ShieldX />
    },
    {
        name: "Complaints",
        url: "/admin/complaints",
        icon: <MessagesSquare />
    },
]

const asideLinksMedium = [
    {
        name: "works",
        url: "/admin/works",
        icon: <BriefcaseBusiness />
    },
]

interface IProps {
    dataUser: JWTPayload
}

const AdminAside = ({ dataUser }: IProps) => {
    console.log(dataUser)
    const path = usePathname();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);


    console.log(path)
    return (
        <aside className="max-w-fit">
            <span
                onClick={() => setShow(!show)}
                className={`fixed top-1/2 -translate-y-1/2 z-9999 w-6 h-32 p-1 bg-[#47BFEB]/80 text-white flex items-center justify-center rounded-r-md cursor-pointer font-bold text-3xl ${show ? "left-75" : "left-22.5"}`}>
                <StepBack className={`${show ? "" : "-rotate-180"}`} />
            </span>

            <div className={`sticky top-0 left-0 max-h-full overflow-y-auto overflow-x-hidden z-10 bg-[#0B111D] px-5 flex flex-col gap-5 shadow-lg shadow-[#dd4292b0] h-screen py-5 duration-300 ${show ? "min-w-75" : "min-w-fit"}`}>
                <Link href="/" className={`flex items-center gap-3 ${show ? "justify-start" : "justify-center"}`}>
                    <Image
                        src={"/z_icon.png"}
                        alt="zedny image"
                        width={35}
                        height={35}
                    />
                    <h1 className={`text-xl md:text-4xl font-bold gradient-text-color duration-300 ${!show ? "hidden opacity-0" : "opacity-100"}`}>Zedny</h1>
                </Link>

                <div className="bg-white w-full h-px" />

                <div className="flex flex-col gap-3">
                    {
                        asideLinksTop.map((link, idx) => (
                            <Link key={idx} href={link.url} className={`flex items-center gap-3 hover:bg-white/10 py-2 px-3 rounded-lg duration-300
                        ${path === link.url ? "bg-[#47BFEB] hover:bg-[#47BFEB]/70! text-black" : ""}
                        `}>
                                {link.icon}
                                <span className={`${!show ? "hidden opacity-0" : "opacity-100"}`}>{link.name}</span>
                            </Link>
                        ))
                    }
                </div>

                <div className="w-full h-px bg-white/50" />

                <div className="flex flex-col gap-3">
                    {
                        asideLinksMedium.map((link, idx) => (
                            <Link key={idx} href={link.url} className={`flex items-center gap-3 hover:bg-white/10 py-2 px-3 rounded-lg duration-300
                        ${path === link.url ? "bg-[#47BFEB] hover:bg-[#47BFEB]/70! text-black" : ""}
                        `}>
                                {link.icon}
                                <span className={`${!show ? "hidden opacity-0" : "opacity-100"}`}>{link.name}</span>
                            </Link>
                        ))
                    }
                </div>

                <button
                    onClick={handleLogout}
                    className={`mt-auto flex items-center gap-3 hover:bg-white/10 py-2 px-3 rounded-lg duration-300 bg-pink-500 cursor-pointer`}>
                    <LogOut />
                    <span className={`${!show ? "hidden opacity-0" : "opacity-100"}`}>Logout</span>
                </button>

                <div className="w-full h-px bg-white/50" />

                <div className="flex gap-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src={"https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80"}
                            alt="image login user"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>

                    <div className={`flex flex-col ${!show ? "hidden opacity-0" : "opacity-100"}`}>
                        <h2 className="font-semibold line-clamp-1">{dataUser?.username}</h2>
                        <p className="line-clamp-1 text-xs">{dataUser?.isAdmin ? "Admin" : "User"}</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AdminAside