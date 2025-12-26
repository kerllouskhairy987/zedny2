"use client";

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    {
        name: "Products & services",
        href: "#",
        links: [
            { name: "Competency Management", href: "/products-services/competency-management" },
            { name: "Gamified Learning", href: "/products-services/gamification" },
            { name: "Personalized Learning", href: "/products-services/persinalized-learning" },
            { name: "Learning Management", href: "/products-services/learning-management" },
            { name: "AI at Zedny", href: "/products-services/AI-Zedny" },
        ]
    },
    {
        name: "Our Solutions ",
        href: "#",
        links: [
            { name: "For Business", href: "/our-solutions/For-Business" },
            { name: "For Individual", href: "/our-solutions/For-Individuals" },
        ]
    },
    {
        name: "Company",
        href: "#",
        links: [
            { name: "Our Story", href: "/company/our-story" },
            { name: "Our Method", href: "/company/our-method" },
            { name: "Team", href: "/company/team" },
            { name: "Contact Us", href: "/company/contact-us" },
        ]
    },
    {
        name: "Our Policies",
        href: "#",
        links: [
            { name: "Academic Integrity Policy", href: "/our-policies/academic-integrity-policy" },
            { name: "Attendance Policy For Virtual Leading", href: "/our-policies/attendance-policyfor-virtual-learning" },
            { name: "Intellectual Property Copyright", href: "/our-policies/intellectual-property-copyright" },
        ]
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navbarRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
                setOpenIndex(null);
            }
        };
        const handleScroll = () => {
            setShowBg(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <header
            ref={navbarRef}
            onClick={(e) => e.stopPropagation()}
            className={`sticky top-0 left-0 w-full transition-all duration-500 z-200 ${showBg ? "bg-black border-b border-white/60 top-0 container md:rounded-b-full rounded-b-2xl z-100000" : ""}`}>
            <div className={`container py-4 flex items-center justify-between `}
            >
                <Link href={"/"}>
                    <Image
                        src={"https://zedny.com/assets/home/main-logo.svg"}
                        alt="Logo"
                        width={130}
                        height={1000}
                        className="max-w-37.5"
                    />
                </Link>
                <div
                    className="relative w-7 h-7 cursor-pointer block lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`absolute left-0 top-3 w-7 h-0.5 bg-white origin-center transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}
                    />

                    <span
                        className={`absolute left-0 top-3 w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
                    />

                    <span
                        className={`absolute left-0 top-3 w-7 h-0.5 bg-white origin-center transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}
                    />
                </div>

                <ul className={`${isOpen ? "w-full md:md:w-125 flex flex-col gap-4 absolute top-20 left-0 p-5 bg-black/95 h-screen overflow-auto" : "hidden lg:flex lg:items-center gap-3"}`}>
                    {
                        navLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className={`w-fit relative text-lg cursor-pointer ${openIndex === idx ? "text-[#dd4292]" : "gradient-text"}`}
                            >
                                <div
                                    className="group flex items-center gap-1 w-fit"
                                    onClick={() => toggleDropdown(idx)}
                                >
                                    {link.name}
                                    <ChevronDown
                                        className={`transition-transform duration-300 group-hover:animate-bounce ${openIndex === idx ? "rotate-180 animate-bounce" : ""
                                            }`}
                                    />
                                </div>

                                {openIndex === idx && (
                                    <ul className="absolute top-full left-0 mt-2 flex flex-col z-100 bg-black border border-white/10 rounded-md p-1 min-w-40">
                                        {link.links.map((subLink, subIdx) => (
                                            <li key={subIdx} className="whitespace-nowrap rounded-md hover:bg-[#dd4292] ">
                                                <Link
                                                    href={subLink.href}
                                                    className="block text-sm text-white hover:text-white transition p-3 "
                                                    onClick={() => setOpenIndex(null)}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                        ))
                    }
                </ul>

                <div>
                    <Link href={"/auth"} className="bg-transparent border-b border-r border-l cursor-pointer hover:bg-white hover:text-black duration-300 border-white text-white py-2 px-4 rounded-b-md">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar