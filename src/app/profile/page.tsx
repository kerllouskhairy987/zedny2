import Navbar from "@/components/home/Navbar";
import ProfileComponent from "@/components/profile";
import { getToken } from "@/lib/getToken"
import { verifyToken } from "@/lib/verifyToken";
import { redirect } from "next/navigation";

const page = async () => {
    const token = await getToken();
    const dataUser = verifyToken(token);

    if (!dataUser) redirect('/');

    return (
        <>
            <Navbar />
            <ProfileComponent dataUser={dataUser} />
        </>
    )
}

export default page