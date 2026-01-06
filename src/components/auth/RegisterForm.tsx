"use client";

import { CreateUserAction, CreateUserState } from "@/server/auth/action"
import { SetStateAction, useActionState, useEffect, useState, useTransition } from "react"
import Spinner from "../ui/Spinner"
import toast from "react-hot-toast";

interface IProps {
    isLogin: boolean,
    setIsLogin: React.Dispatch<SetStateAction<boolean>>
}
const RegisterForm = ({ isLogin, setIsLogin }: IProps) => {
    const [pending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState(false);

    const initialState: CreateUserState = {
        message: "",
        error: {},
        status: 200,
        formData: new FormData(),
    }

    const [state, action, isPending] = useActionState(CreateUserAction, initialState)

    useEffect(() => {
        if (state.status === 201 && state.message && !isPending) {
            toast.success(state.message);
            setIsLogin(true)
            startTransition(() => {
                setShowPassword(false);
            })
        }
        if ((state.status === 400 || state.status === 500 || state.status === 409 || state.status === 422) && state.message && !isPending) {
            toast.error(state.message)
            startTransition(() => {
                setShowPassword(false);
            })
        }
    }, [state.status, state.message, isPending, setIsLogin])

    return (
        <div className={`order-1 md:order-2 flex flex-col justify-center gap-10 p-3 ${isLogin ? "opacity-0 h-64" : "opacity-100"}`}>
            <div className="flex flex-col gap-6">
                <h2 className="gradient-text-color text-start! text-3xl"> Hello, Welcome</h2>
                <p className="text-white/60 ">Thank you for getting back.</p>
            </div>

            <form action={action} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-xl font-semibold">Username</label>
                    <input type="text" placeholder="khairy" name="username" id="username"
                        defaultValue={state.formData.get("username") as string}
                        autoFocus
                        className="border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#dd4292]"
                    />
                    {
                        state.error && state.error.username &&
                        <span className="text-sm text-red-500">{state.error.username}</span>
                    }
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">Email Address</label>
                    <input type="email" placeholder="khairy@gmail.com" name="email" id="email"
                        defaultValue={state.formData.get("email") as string}
                        className="border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#dd4292]"
                    />
                    {
                        state.error && state.error.email &&
                        <span className="text-sm text-red-500">{state.error.email}</span>
                    }
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                    <input type={showPassword ? "text" : "password"} placeholder="********" name="password" id="password"
                        defaultValue={state.formData.get("password") as string}
                        className="border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#dd4292]"
                    />
                    <label className="ms-auto flex gap-1 items-center select-none cursor-pointer"
                        onChange={() => setShowPassword(prev => !prev)}
                    >
                        <input type="checkbox" className="accent-pink-500" />
                        <span className="text-sm text-pink-200 underline">show password</span>
                    </label>
                    {
                        state.error && state.error.password &&
                        <span className="text-sm text-red-500">{state.error.password}</span>
                    }
                </div>
                <div className="pt-4">
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
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                    >
                        {isPending ? <Spinner /> : "Register"}
                        {
                            !isPending && <div
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
                        }
                    </button>
                </div>
            </form>

        </div>
    )
}

export default RegisterForm