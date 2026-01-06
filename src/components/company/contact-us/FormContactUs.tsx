"use client";

import TextType from "@/components/reactBits/TypingText"
import Spinner from "@/components/ui/Spinner";
import { ContactUsAction, ContactUsState } from "@/server/contactUs/action";
import { LocationEditIcon, Mail, PhoneIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useActionState } from "react";

const data = [
    { url: "https://zedny.com/assets/images/landing/footer/logos/f.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/Y.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/L.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/I.png" },
    { url: "https://zedny.com/assets/images/landing/footer/logos/w.png" },
]

const FormContactUs = () => {
    const initialState: ContactUsState = {
        message: "",
        error: {},
        status: null,
        formData: new FormData(),
    }
    const [state, action, isPending] = useActionState(ContactUsAction, initialState);
    return (
        <main className="section-gap relative z-100">
            <div className="container overflow-x-hidden">
                <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-6xl font-bold">
                    <TextType text={[`Contact Us`, `Contact Us`]} typingSpeed={100} />
                </h1>

                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <form data-aos="fade-right" action={action} className="grow flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full flex flex-col">
                                <label htmlFor="username" className="font-bold text-lg">Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="enter your name"
                                    defaultValue={state.formData.get("username") as string}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                                />
                                {
                                    state.error && state.error.username &&
                                    <span className="text-sm text-red-500">{state.error.username}</span>
                                }
                            </div>

                            <div>
                                <label htmlFor="email" className="font-bold text-lg">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue={state.formData.get("email") as string}
                                    placeholder="Email address"
                                    className="
                                    w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                                />
                                {
                                    state.error && state.error.email &&
                                    <span className="text-sm text-red-500">{state.error.email}</span>
                                }
                            </div>

                            <div className="w-full flex flex-col">
                                <label htmlFor="message" className="font-bold text-lg">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Your message"
                                    id="message"
                                    defaultValue={state.formData.get("message") as string}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 resize-none! max-h-75 focus:outline-none focus:border-[#dd4292]"
                                />
                                {
                                    state.error && state.error.message &&
                                    <span className="text-sm text-red-500">{state.error.message}</span>
                                }
                            </div>
                        </div>

                        <div data-aos="zoom-in-down" className="pt-4">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="
                                group relative px-8 py-3 rounded-md
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer lg:mx-0
                            "
                            >
                                {isPending ? <Spinner /> : "Send Message"}
                                {
                                    !isPending && (
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
                                    )
                                }
                            </button>
                        </div>
                    </form>

                    <div data-aos="fade-left" className="parent-line-animate relative overflow-hidden border-b-[0.01px] border-r-[0.01px] border-[#dd429291] bg-black/20 p-5 flex grow md:w-40 flex-col gap-10">
                        <span className="line-animate"></span>
                        <h2 className="gradient-text-color text-4xl font-bold text-start!">support contact</h2>

                        <div className="flex flex-wrap justify-between gap-10">
                            <div className="flex flex-col gap-4 w-52">
                                <p className="flex items-center gap-2 border w-fit p-3 rounded-md">
                                    <PhoneIcon />
                                    Phone
                                </p>
                                <span>Mobile : (+02) 01222202094</span>
                                <span>WhatsApp : (+02) 01222202094</span>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <p className="flex items-center gap-2 border w-fit p-3 rounded-md">
                                    <Mail />
                                    Email
                                </p>
                                <span>Info@zedny.com</span>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <p className="flex items-center gap-2 border w-fit p-3 rounded-md">
                                    <LocationEditIcon />
                                    Location
                                </p>
                                <span>Mokattam Cairo Egypt</span>
                            </div>

                            <div className="flex items-center gap-4 w-fit ">
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FormContactUs