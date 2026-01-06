"use client";

import Spinner from "@/components/ui/Spinner"
import { User } from "../../../../../generated/prisma/client"
import { useActionState, useEffect, useState } from "react";
import { UpdateUserActionFromAdmin } from "@/server/admin/users/update/action";
import { UpdateUserState } from "@/server/auth/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import BackBtn from "@/components/ui/BackBtn";

interface IProps {
    dataUser: User;
}
const UpdateUserForm = ({ dataUser }: IProps) => {
    const [checkedPan, setCheckedPan] = useState(dataUser.pan);
    console.log(checkedPan)
    const router = useRouter();

    const initialState: UpdateUserState = {
        message: "",
        error: {},
        status: 0,
        formData: new FormData(),
    }
    const [state, action, isPending] = useActionState(UpdateUserActionFromAdmin, initialState)

    useEffect(() => {
        if (state.status === 200 && state.message && !isPending) {
            toast.success(state.message);
            router.push("/admin/users");
        }
        if ((state.status === 400 || state.status === 500 || state.status === 404 || state.status === 409 || state.status === 401) && state.message && !isPending) {
            toast.error(state.message)
        }
    }, [state.status, state.message, isPending, router])

    return (
        <div className="p-5 ps-10">
            <BackBtn />
            <div className='container my-10'>
                <form action={action} >
                    {/* panned this user */}
                    <input type="hidden" name="pan" value={String(checkedPan)} />
                    <div className="w-full flex items-center justify-center py-10 gap-2 text-red-600 select-none">
                        <input
                            type="checkbox"
                            id="pan"
                            placeholder="Enter your pan"
                            defaultChecked={dataUser.pan}
                            onChange={(e) => setCheckedPan(e.target.checked)}
                            className="bg-transparent w-6 h-6 accent-pink-500"
                        />
                        <label htmlFor="pan" className="font-bold text-xl">Add Pan To <span className="text-white font-normal">{dataUser.username}</span></label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="hidden" name="id" value={dataUser.id} />

                        <div className="w-full flex flex-col">
                            <label htmlFor="username" className="font-bold text-lg">User Name</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                autoFocus
                                defaultValue={dataUser?.username}
                                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                            />
                            {
                                state.error && state.error.username &&
                                <span className="text-sm text-red-500">{state.error.username}</span>
                            }
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="font-bold text-lg">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                readOnly
                                defaultValue={dataUser?.email}
                                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                            />
                            {
                                state.error && state.error.email &&
                                <span className="text-sm text-red-500">{state.error.email}</span>
                            }
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="gender" className="font-bold text-lg">Gender</label>
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Enter your gender"
                                defaultValue={dataUser?.isAdmin ? "Admin" : "User"}
                                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="country" className="font-bold text-lg">Country</label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Enter your country"
                                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="language" className="font-bold text-lg">Language</label>
                            <input
                                type="text"
                                name="language"
                                id="language"
                                placeholder="Enter your language"
                                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center">
                        <button type="submit" className="py-2 px-3 rounded-md mx-auto cursor-pointer bg-[#47BFEB] w-100">{isPending ? <Spinner /> : "Update Now"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUserForm