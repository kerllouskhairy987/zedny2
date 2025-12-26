"use server";

import { prisma } from "@/lib/prisma";
import { validationCreateMember } from "@/validation";
import { revalidatePath } from "next/cache";

export type CreateValidationError = {
    src?: string
    name?: string
    position?: string
}

export type CreateTeamMemberState = {
    message?: string;
    error: CreateValidationError;
    status: number;
    formData: FormData
};
export const CreateTeamMember = async (
    prevState: CreateTeamMemberState | undefined, formData: FormData
): Promise<CreateTeamMemberState> => {

    const src = formData.get("src") as string;
    const name = formData.get("name") as string;
    const position = formData.get("position") as string;

    const raw = {
        src,
        name,
        position
    }
    const result = validationCreateMember.safeParse(raw);
    if (!result.success) {
        return {
            ...prevState,
            error: result.error.flatten().fieldErrors as CreateValidationError,
            formData,
            status: 400,
        }
    }
    try {
        await prisma.team.create({
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
        return {
            message: "Team Member Created Successfully",
            error: {},
            status: 201,
            formData: new FormData()
        }

    } catch (error) {
        console.log(error)
        return {
            message: "Internal Server Error",
            error: {},
            status: 500,
            formData
        }
    }
};