"use client";

import { Bell, RefreshCw, Search } from "lucide-react"

const AdminNavbar = () => {

    return (
        <header className="px-6 py-5 sticky top-0 left-0 z-1 shadow-xs shadow-[#dd4292] bg-[#0B111D]">
            <div className="flex flex-wrap gap-4 justify-between items-center max-w-full">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <p>Your crypto insights for December 24, 2025</p>
                </div>

                <div className="flex items-center gap-3">
                    <RefreshCw className="w-10 h-10 flex justify-center items-center rounded-full p-3 bg-[#47BFEB]/70 cursor-pointer" />
                    <Bell className="w-10 h-10 flex justify-center items-center rounded-full p-3 bg-[#47BFEB]/70 cursor-pointer" />
                    <label htmlFor="search" className="relative">
                        <Search className="absolute top-1/2 left-3 -translate-y-1/2" />
                        <input type="search" id="search" name="search" placeholder="search project..." className="bg-transparent border-[0.01px] rounded-lg border-[#dd4292] py-3 ps-12" />
                    </label>
                </div>
            </div>
        </header>
    )
}

export default AdminNavbar