import AuthComponent from "@/components/auth/AuthComponent"
import { Metadata } from "next";

const page = () => {
    return <AuthComponent />
}

export default page;

export const metadata: Metadata = {
    title: 'auth',
    description: 'auth for e learning and training',
}