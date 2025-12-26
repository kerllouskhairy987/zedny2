import type { Metadata } from "next";
import AdminAside from "@/components/admin/AdminAside";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { Toaster } from "react-hot-toast";
import "../../app/globals.css";

export const metadata: Metadata = {
    title: "Zedny admin platform",
    description: "Zedny admin platform for e learning and training",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-between">
            <AdminAside />
            <section className="grow ">
                <AdminNavbar />
                {children}
            </section>
            <Toaster />
        </main>
    );
}
