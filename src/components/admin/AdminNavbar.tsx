"use client";

import { Bell, RefreshCw, Search } from "lucide-react"
import Link from "next/link";

interface IProps {
    complaints: number
}
const AdminNavbar = ({complaints}: IProps) => {

    return (
        <header className="px-6 py-5 sticky top-0 left-0 z-1 shadow-xs shadow-[#dd4292] bg-[#0B111D] max-h-fit">
            <div className="flex flex-wrap gap-4 justify-between items-center max-w-full">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <p>Your crypto insights for December 24, 2025</p>
                </div>

                <div className="flex items-center gap-3">
                    <RefreshCw className="w-10 h-10 flex justify-center items-center rounded-full p-3 bg-[#47BFEB]/70 cursor-pointer" />
                    <Link href={"/admin/complaints"} className="relative">
                        <span className="w-5 h-5 rounded-full bg-yellow-300 absolute -top-3 right-0 text-black flex items-center justify-center text-sm">{complaints}</span>
                        <Bell className="w-10 h-10 flex justify-center items-center rounded-full p-3 bg-[#47BFEB]/70 cursor-pointer" />
                    </Link>
                    <label htmlFor="search" className="relative">
                        <Search className="w-10 h-10 flex rounded-full p-3 bg-[#47BFEB]/70 cursor-pointer md:bg-transparent md:absolute md:top-1/2 md:left-3 md:-translate-y-1/2" />
                        <input type="search" id="search" name="search" placeholder="search project..." className="bg-transparent border-[0.01px] rounded-lg border-[#dd4292] py-3 ps-12 w-fit hidden md:block" />
                    </label>
                </div>
            </div>
        </header>
    )
}

export default AdminNavbar