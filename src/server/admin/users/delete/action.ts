"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ----------------------------Delete User Account Member----------------
export async function DeleteUserAccountAction(id: number) {
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })

    revalidatePath("/", "layout")
    revalidatePath("/admin", "layout")
}