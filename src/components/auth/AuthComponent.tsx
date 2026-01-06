"use client";

import Image from "next/image"
import LoginForm from "./LoginForm"
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

const AuthComponent = () => {
    const [isLogin, setIsLogin] = useState(true)

    const changeAuth = () => {
        setIsLogin(prev => !prev)
    }

    return (
        <main className="container min-h-[calc(100vh-80px)] overflow-hidden my-10 flex flex-col relative">
            <div className="relative grow h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 bg-linear-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl px-5 shadow-lg shadow-[#dd4292b0]">
                <LoginForm isLogin={isLogin} />
                <RegisterForm isLogin={isLogin} setIsLogin={setIsLogin} />

                <div className={`
                    absolute w-full h-64 py-5 right-0 bg-linear-to-br rounded-md from-pink-500/50 via-purple-500/50 to-cyan-500/50 z-10 rounded-br-[50px] rounded-bl-[50px] 
                    md:rounded-tl-[150px] md:rounded-bl-[150px] md:rounded-br-md duration-700
                    md:w-1/2 md:h-full
                    ${isLogin ? "" : "top-full rotate-180 origin-top md:top-0  md:rotate-180 md:origin-left"}
                    `} >
                    <div className={`
                        w-full h-full flex flex-col justify-center items-center gap-5
                        ${isLogin ? "" : "rotate-180 origin-center"}
                        `}>
                        <Link href={"/"}>
                            <div className="relative w-28 md:w-48 h-28 md:h-48">
                                <Image
                                    src={"https://zedny.com/assets/home/main-logo.svg"}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <h2 className="font-bold text-xl md:text-4xl">
                            {isLogin ? "Hello, Welcome" : "Welcome Back"}
                        </h2>
                        <button
                            className="text-sm md:text-xl p-4 rounded-md font-semibold bg-white/90 text-black cursor-pointer hover:scale-105 duration-300 shadow shadow-[#dd4292b0]"
                            onClick={changeAuth}
                        >
                            {isLogin ? "Create Account" : "Login Now"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="
                w-full h-175 md:w-150 md:h-150
                rounded-[21%_79%_57%_43%/19%_74%_26%_81%]
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                -z-10
                bg-linear-to-r from-pink-200/20 to-purple-500/20
                blur-3xl
            " />
        </main>
    )
}

export default AuthComponent