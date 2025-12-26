"use client";

import Spinner from "@/components/ui/Spinner";
import { Team } from "../../../../../generated/prisma/client"
import { useActionState, useEffect, useState } from "react";
import { UpdateTeamMemberAction } from "@/server/admin/team/update/action";
import BackBtn from "@/components/ui/BackBtn";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CreateTeamMemberState } from "@/server/admin/team/create/action";
import Image from "next/image";

interface IProps {
    member: Team;
}
const UpdateTeamMemberForm = ({ member }: IProps) => {
    const router = useRouter();

    const [imageUrlUpload, setImageUrlUpload] = useState(member.src)
    const [isUploading, setIsUploading] = useState(false);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (!file) return;

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "First_time_using_cloudinary")
        data.append("cloud_name", "djabelihk")

        try {
            setIsUploading(true)
            const res = fetch("https://api.cloudinary.com/v1_1/djabelihk/image/upload", {
                method: "post",
                body: data
            })
            const imageUrl = await res.then((res) => res.json())
            setImageUrlUpload(imageUrl.url)
        } catch (error) {
            console.log(error)
            setIsUploading(false)
        } finally {
            setIsUploading(false)
        }
    }


    const initialState: CreateTeamMemberState = {
        message: "",
        error: {},
        status: 200,
        formData: new FormData(),
    }
    const [state, action, isPending] = useActionState(UpdateTeamMemberAction, initialState)


    useEffect(() => {
        if (state.status === 200 && state.message && !isPending) {
            toast.success("Project updated successfully");
            router.push("/admin/team")
        }
        if ((state.status === 400 || state.status === 500 || state.status === 404) && state.message) {
            toast.error(state.message)
        }
    })

    return (
        <>
            <div className='m-5 flex justify-start'>
                <BackBtn />
            </div>

            <form action={action} className="w-full md:max-w-150 mx-auto mt-10 flex flex-col gap-5 p-5 bg-[#0B111D] rounded-lg">
                <input type="hidden" name="id" value={member.id} />
                <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-lg" htmlFor="src">Choose Image</label>
                    {/* this input for sending image url to server with form data */}
                    {imageUrlUpload && <input type="hidden" name="src" value={imageUrlUpload} />}

                    {
                        false ? <p>Uploading Image ...</p> : imageUrlUpload
                            && (
                                <>
                                    <input className="bg-transparent py-2 px-3 border-[0.01px] border-[#47BFEB] rounded-lg" type="file" name="src" id="src"
                                        onChange={handleFileUpload}
                                    />
                                    <Image
                                        src={imageUrlUpload}
                                        alt="uploaded image"
                                        width={100} height={100}
                                    />
                                </>
                            )
                    }
                    {
                        state.error && state.error.src &&
                        <span className="text-sm text-red-500">{state.error.src}</span>
                    }
                </div>

                <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-lg" htmlFor="name">Member Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Member Name"
                        className="bg-transparent py-2 px-3 border-[0.01px] border-[#47BFEB] rounded-lg"
                        defaultValue={member.name}
                    />
                    {
                        state.error && state.error.name &&
                        <span className="text-sm text-red-500">{state.error.name}</span>
                    }
                </div>

                <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-lg" htmlFor="position">Member Position</label>
                    <input type="text" name="position"
                        className="bg-transparent py-2 px-3 border-[0.01px] border-[#47BFEB] rounded-lg"
                        defaultValue={member.position}
                        id="position" placeholder="Enter Member Position" />
                    {
                        state.error && state.error.position &&
                        <span className="text-sm text-red-500">{state.error.position}</span>
                    }
                </div>

                <div className="pt-4 flex justify-center">
                    <button
                        disabled={isPending}
                        type="submit"
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
                        {isPending ? <Spinner /> : "Create Project"}
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
        </>
    )
}

export default UpdateTeamMemberForm