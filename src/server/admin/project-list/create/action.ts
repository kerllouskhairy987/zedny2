"use server";

import { prisma } from "@/lib/prisma";
import { validationCreateProject } from "@/validation";
import { revalidatePath } from "next/cache";

export type CreateValidationError = {
    imageUrl?: string
    title?: string
    desc?: string
}
export type CreateActionState = {
    message?: string
    error: CreateValidationError,
    status: number
    formData: FormData
}

// --------------------------------- Create New Project ---------------------------------
export const CreateNewProject = async (
    prevState: CreateActionState | undefined, formData: FormData
): Promise<CreateActionState> => {

    const imageUrl = formData.get("imageUrl") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;

    const raw = {
        imageUrl,
        title,
        desc,
    };

    const result = validationCreateProject.safeParse(raw);
    if (!result.success) {
        return {
            ...prevState,
            error: result.error.flatten().fieldErrors as CreateValidationError,
            formData,
            status: 400,
        }
    }

    try {
        await prisma.powerFeatures.create({
            data: {
                imageUrl,
                title,
                desc,
            }
        })

        revalidatePath("/")
        revalidatePath("/admin")
        revalidatePath("/admin/project-list")

        return {
            message: "Project created Success!",
            error: {},
            status: 201,
            formData: new FormData()
        }
    } catch (error) {
        console.log(error)
        return {
            message: "internal server error",
            error: {},
            status: 500,
            formData
        }
    }
}