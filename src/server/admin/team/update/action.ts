"use server";

import { validationCreateMember } from "@/validation";
import { CreateTeamMemberState, CreateValidationError } from "../create/action";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --------------------------------Update Team Member----------------
export const UpdateTeamMemberAction = async (
    prevState: CreateTeamMemberState | undefined,
    formData: FormData
): Promise<CreateTeamMemberState> => {

    const id = formData.get("id");
    const src = formData.get("src") as string;
    const name = formData.get("name") as string;
    const position = formData.get("position") as string;

    const raw = {
        src,
        name,
        position
    }

    const result = validationCreateMember.safeParse(raw)
    if (!result.success) {
        return {
            ...prevState,
            error: result.error.flatten().fieldErrors as CreateValidationError,
            formData,
            status: 400,
        }
    }

    try {
        await prisma.team.update({
            where: {
                id: Number(id)
            },
            data: {
                src,
                name,
                position
            }
        })
        revalidatePath("/")
        revalidatePath("/company/team")
        revalidatePath("/admin")
        revalidatePath("/admin/team")

        return ({
            message: "Team member updated successfully",
            error: {},
            status: 200,
            formData: new FormData()
        })
    } catch (error) {
        console.log(error)
        return {
            message: "Internal server error",
            error: {},
            status: 500,
            formData: new FormData()
        }
    }
}