"use server";

import { validationCreateProject } from "@/validation";
import { CreateActionState, CreateValidationError } from "../create/action";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const UpdateProjectAction = async (
    prevState: CreateActionState | undefined,
    formData: FormData): Promise<CreateActionState> => {

    const id = formData.get("id");
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
        await prisma.powerFeatures.update({
            where: {
                id: Number(id)
            },
            data: {
                imageUrl,
                title,
                desc,
            }
        })
        revalidatePath("/admin")
        revalidatePath("/admin/project-list")
        revalidatePath("/")

        return {
            message: "success",
            error: {},
            status: 200,
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