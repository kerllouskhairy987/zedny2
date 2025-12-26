"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ----------------------------Delete Team Member----------------
export async function DeleteTeamMemberAction(id: number) {
    await prisma.team.delete({
        where: {
            id: Number(id)
        }
    })

    revalidatePath("/")
    revalidatePath("/company/team")
    revalidatePath("/admin")
    revalidatePath("/admin/team")
}