"use client";

import { LoginUserAction, LoginUserState } from "@/server/auth/action"
import { useActionState, useEffect, useState, useTransition } from "react"
import Spinner from "../ui/Spinner"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IProps {
    isLogin: boolean
}
const LoginForm = ({ isLogin }: IProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [pending, startTransition] = useTransition();
    const router = useRouter();

    const initialState: LoginUserState = {
        message: "",
        error: {},
        status: null,
        formData: new FormData(),
        isAdmin: false
    }

    const [state, action, isPending] = useActionState(LoginUserAction, initialState);

    useEffect(() => {
        if (state.status === 200 && state.message && !isPending) {
            toast.success(state.message);
            if (state.isAdmin) {
                router.push("/admin")
            } else {
                router.push("/");
            }
            startTransition(() => {
                setShowPassword(false);
            })
        }
        if ((state.status === 400 || state.status === 500 || state.status === 404 || state.status === 409 || state.status === 401) && state.message && !isPending) {
            toast.error(state.message)
            startTransition(() => {
                setShowPassword(false);
            });
        }
    }, [state.status, state.message, isPending, router, state.isAdmin])

    return (
        <div className={`order-2 md:order-1 flex flex-col justify-center gap-10 p-3 ${isLogin ? "opacity-100" : "opacity-0 h-64"}`}>
            <div className="flex flex-col gap-6">
                <h2 className="gradient-text-color text-start! text-3xl">Welcome Back</h2>
                <p className="text-white/60 ">Thank you for getting back.</p>
            </div>

            <form className="flex flex-col gap-5" action={action}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">Email Address</label>
                    <input type="email" placeholder="khairy@gmail.com" name="email" id="email"
                        autoFocus
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
                        {isPending ? <Spinner /> : "Login"}
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

export default LoginForm