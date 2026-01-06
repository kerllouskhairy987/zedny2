"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const handleLogout = async () => {
    const cookieStore = await cookies()
    cookieStore.delete('JwtToken')
    revalidatePath('/', "layout")
    revalidatePath('/admin', "layout")
    redirect('/')
}