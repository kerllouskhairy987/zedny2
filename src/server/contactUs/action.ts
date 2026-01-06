"use server";

import { prisma } from "@/lib/prisma";
import { validationContactUs } from "@/validation";
import { revalidatePath } from "next/cache";

// ----------------------------------------------Contact Us---------------------------------

type ContactUsValidationError = {
    email?: string
    username?: string
    message?: string
}

export type ContactUsState = {
    message?: string
    error: ContactUsValidationError
    status: number | null;
    formData: FormData
}

export async function ContactUsAction(prevState: ContactUsState | undefined, formData: FormData) {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const message = formData.get("message") as string;

    const raw = {
        email,
        username,
        message
    }
    const result = validationContactUs.safeParse(raw);
    if (!result.success) {
        return {
            message: "all fields are required",
            error: result.error.flatten().fieldErrors as ContactUsValidationError,
            formData,
            status: 400,
        }
    };

    try {
        const contactUs = await prisma.complaints.create({
            data: {
                email,
                username,
                message
            }
        })
        console.log(contactUs)

        revalidatePath("/admin", "layout")
        return {
            message: "your complaints has been sent successfully",
            error: {},
            formData: new FormData(),
            status: 200
        }
    } catch (error) {
        console.log(error)
        return {
            message: "internal server error",
            error: {},
            formData,
            status: 500
        }
    }
}