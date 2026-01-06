import type { Metadata } from "next";
import AdminAside from "@/components/admin/AdminAside";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { getToken } from "@/lib/getToken";
import { verifyToken } from "@/lib/verifyToken";
import { redirect } from "next/navigation";
import { getAllComplaints } from "@/server/admin/complaints/action";

import "../../app/globals.css";

export const metadata: Metadata = {
    title: "Zedny admin platform",
    description: "Zedny admin platform for e learning and training",
};

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const token = await getToken();
    const dataUser = verifyToken(token);

    const complaintsLength = (await getAllComplaints()).length;

    if (dataUser?.isAdmin === false || !dataUser) redirect('/');

    return (
        <>
            <main className="flex w-full">
                <AdminAside dataUser={dataUser} />
                <section className="grid grid-cols-1 w-full">
                    <AdminNavbar complaints={complaintsLength} />
                    {children}
                </section>
            </main>
        </>
    );
}
