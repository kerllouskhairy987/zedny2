"use client";

import { AlignHorizontalDistributeEnd, BriefcaseBusiness, ChartSpline, FolderKanban, LayoutDashboard, List, LogOut, Settings, ShieldHalf, StepBack } from "lucide-react"
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
        name: "Feature Projects",
        url: "#",
        icon: <FolderKanban />
    },
    {
        name: "Fundamentals",
        url: "#",
        icon: <ChartSpline />
    },
]

const asideLinksMedium = [
    {
        name: "portfolio",
        url: "#",
        icon: <AlignHorizontalDistributeEnd />
    },
    {
        name: "works",
        url: "#",
        icon: <BriefcaseBusiness />
    },
]

const asideLinksBottom = [
    {
        name: "Logout",
        url: "#",
        icon: <LogOut />
    },
    {
        name: "Setting",
        url: "#",
        icon: <Settings />
    },
]
const AdminAside = () => {
    const path = usePathname();
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])


    console.log(path)
    return (
        <aside className={`sticky top-0 left-0 max-h-full overflow-y-auto overflow-x-hidden z-10 bg-[#0B111D] px-5 flex flex-col gap-5 shadow-lg shadow-[#dd4292b0] h-screen py-5 duration-300 ${show ? "min-w-75" : "min-w-fit"}`}>
            <div className="">
                <span className={`absolute top-2 right-5 z-10! w-8 h-8 p-2 bg-[#47BFEB] text-white flex items-center justify-center rounded-full translate-x-1/2 cursor-pointer font-bold text-7xl duration-300 ${show ? "" : "-rotate-180"}`}
                    onClick={() => setShow(!show)}><StepBack /></span>
                <Link href="/" className={`flex items-center gap-3 ${show ? "justify-start" : "justify-center"}`}>
                    <Image
                        src={"/z_icon.png"}
                        alt="zedny image"
                        width={35}
                        height={35}
                    />
                    <h1 className={`text-xl md:text-4xl font-bold gradient-text-color duration-300 ${!show ? "hidden opacity-0" : "opacity-100"}`}>Zedny</h1>
                </Link>
            </div>

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

            <div className="mt-auto">
                {
                    asideLinksBottom.map((link, idx) => (
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
                    <h2 className="font-semibold line-clamp-1">Zedny Admin</h2>
                    <p className="line-clamp-1 text-xs">Developer</p>
                </div>
            </div>
        </aside>
    )
}

export default AdminAside