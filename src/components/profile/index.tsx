"use client";

import { JWTPayload } from "@/types"
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

interface IProps {
    dataUser: JWTPayload | null;
}
const ProfileComponent = ({ dataUser }: IProps) => {
    const [canUpdate, setCanUpdate] = useState(false);

    return (
        <section className="mt-5">
            <TopNavbar dataUser={dataUser} />

            <div className="container my-10 flex items-start justify-between">
                <div className="flex gap-5 items-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src={"https://thumbs.dreamstime.com/b/head-shot-portrait-brunette-female-executive-person-business-woman-welcoming-smile-cheerful-positive-attitude-pretty-187430744.jpg"}
                            alt="placeholder image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">{dataUser?.username}</h2>
                        <p className="text-white/60">{dataUser?.email}</p>
                    </div>
                </div>

                <div>
                    <button onClick={() => setCanUpdate((prev) => !prev)} className={`py-1 px-3 rounded-md cursor-pointer text-xl ${canUpdate ? "bg-red-500" : "bg-[#dd4292]"}`}>
                        {canUpdate ? "Cancel" : "Edit"}
                    </button>
                </div>
            </div>

            <ProfileForm dataUser={dataUser} canUpdate={canUpdate} setCanUpdate={setCanUpdate} />
        </section>
    )
}

export default ProfileComponent