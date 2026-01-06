"use client";

import Image from "next/image"
import Link from "next/link";

const data = [
    { url: "https://zedny.com/assets/images/landing/footer/logos/f.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/Y.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/L.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/I.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/w.png" },
]

const Footer = () => {
    return (
        <footer className="container py-10">
            <div className="flex items-center gap-6">
                <div className="flex-1 h-px bg-white/40" />

                <div className="flex items-center gap-4">
                    {data.map((item, idx) => (
                        <Link key={idx} href={"/test"} className="hover:scale-105 duration-300">
                            <Image
                                src={item.url}
                                alt="logo"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100 transition"
                            />
                        </Link>
                    ))}
                </div>

                {/* Right Line */}
                <div className="flex-1 h-px bg-white/40" />
            </div>

            <div className="text-center mt-9 flex flex-col gap-4">
                <h4 className="text-lg">Copyright © 2025 Zedny Educational Services S.A.E - All Rights Reserved</h4>
                <div className="flex flex-wrap items-center justify-center gap-3 ">
                    <Link href={"/our-policies/intellectual-property-copyright"}>Terms Of Service</Link>
                    <span className="h-8 w-px bg-white/70"></span>
                    <Link href={"/our-policies/academic-integrity-policy"}>Privacy Policy</Link>
                    <span className="h-8 w-px bg-white/70"></span>
                    <Link href={"/our-policies/attendance-policyfor-virtual-learning"}>Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
