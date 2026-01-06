import AuthComponent from "@/components/auth/AuthComponent"
import { getToken } from "@/lib/getToken";
import { Metadata } from "next";
import { redirect } from "next/navigation";

const page = async () => {
    // const token = await getToken()
    // if (token) redirect('/')

    return <AuthComponent />
}

export default page;

export const metadata: Metadata = {
    title: 'auth',
    description: 'auth for e learning and training',
}