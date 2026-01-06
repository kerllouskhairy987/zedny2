"use server";

import { prisma } from "@/lib/prisma";
import { UpdateUserState, UpdateValidationError } from "@/server/auth/action";
import { updateUserValidation } from "@/validation";
import { revalidatePath } from "next/cache";

//------------------------------Update User---------------------------------

export async function UpdateUserActionFromAdmin(prevState: UpdateUserState | undefined, formData: FormData): Promise<UpdateUserState> {
    const id = formData.get("id");
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const pan = formData.get("pan") === "true" ? true : false;

    const raw = {
        username,
        email,
    };

    const result = updateUserValidation.safeParse(raw);
    if (!result.success) {
        return {
            message: "all fields are required",
            error: result.error.flatten().fieldErrors as UpdateValidationError,
            formData,
            status: 400,
        }
    };

    try {
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                username,
                pan
            }
        })

        console.log("user update", user)

        revalidatePath("/", "layout")
        revalidatePath("/admin", "layout")
        // revalidatePath("/admin/users")

        return {
            message: "user updated successfully",
            error: {},
            status: 200,
            formData: new FormData(),
        }
    } catch (error) {
        console.log(error)
        return {
            message: "internal server error",
            error: {},
            status: 500,
            formData,
        }
    }
}