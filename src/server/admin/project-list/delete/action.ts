"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


// ------------------------------------ Delete Course Action ------------------------------------
export async function DeleteCourseAction(id: number) {
    await prisma.powerFeatures.delete({
        where: {
            id: Number(id)
        }
    })
    revalidatePath("/admin/project-list")
    revalidatePath("/admin")
    revalidatePath("/")
}