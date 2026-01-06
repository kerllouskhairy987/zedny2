"use server";

import { prisma } from "@/lib/prisma";
import { createUserValidationError, loginUserValidation, updateUserValidation } from "@/validation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { JWTPayload } from "@/types";
import { generateJwt } from "@/lib/generateJwt";
import { cookies } from "next/headers";

// ------------------------------Create User---------------------------------

export type CreateValidationError = {
    username?: string;
    email?: string;
    password?: string;
}

export type CreateUserState = {
    message: string
    error: CreateValidationError
    status: number
    formData: FormData
}

export async function CreateUserAction(prevState: CreateUserState | undefined, formData: FormData): Promise<CreateUserState> {

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const raw = {
        username,
        email,
        password,
    };

    const result = createUserValidationError.safeParse(raw);
    if (!result.success) {
        return {
            message: "all fields are required",
            error: result.error.flatten().fieldErrors as CreateValidationError,
            formData,
            status: 400,
        }
    };

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (user) {
            return ({
                message: "user already exist",
                error: {},
                status: 409,
                formData,
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await prisma.user.create({
            data: {
                username,
                email,
                password: hash,
            }
        });

        revalidatePath("/");
        revalidatePath("/admin");
        revalidatePath("/admin/users");

        return ({
            message: "user created successfully",
            error: {},
            status: 201,
            formData: new FormData(),
        })

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

// ------------------------------Login User---------------------------------
export type LoginValidationError = {
    email?: string;
    password?: string;
}

export type LoginUserState = {
    message: string
    error: LoginValidationError
    status: number | null
    isAdmin: boolean;
    formData: FormData
}
export async function LoginUserAction(prevState: LoginUserState | undefined, formData: FormData): Promise<LoginUserState> {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const raw = {
        email,
        password,
    };

    const result = loginUserValidation.safeParse(raw);
    if (!result.success) {
        return {
            message: "all fields are required",
            error: result.error.flatten().fieldErrors as LoginValidationError,
            formData,
            status: 400,
            isAdmin: false
        }
    };

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return ({
                message: "user not found",
                error: {},
                status: 404,
                formData,
                isAdmin: false
            })
        }

        if (user.pan) {
            return ({
                message: "user is banned",
                error: {},
                status: 401,
                formData,
                isAdmin: false
            })
        }

        const hash = user.password
        const isMatch = await bcrypt.compare(password, hash);

        if (!isMatch) {
            return ({
                message: "invalid email or password",
                error: {},
                status: 401,
                formData,
                isAdmin: false
            })
        }

        // create token
        const JwtPayload: JWTPayload = {
            id: user.id,
            email: user.email,
            username: user.username,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
        const token = generateJwt(JwtPayload)

        // set cookie
        const cookieStore = await cookies()
        cookieStore.set({
            name: 'JwtToken',
            value: token,
            httpOnly: true,
            path: '/',
        });

        // revalidatePath("/", "layout");
        // revalidatePath("/admin", "layout");

        const isAdmin = user.isAdmin;
        return {
            message: "user logged in successfully",
            error: {},
            status: 200,
            formData: new FormData(),
            isAdmin
        }
    } catch (error) {
        console.log(error)
        return {
            message: "internal server error",
            error: {},
            status: 500,
            isAdmin: false,
            formData
        }
    }
}

// -------------------------------Update User---------------------------------

export type UpdateValidationError = {
    username?: string;
    email?: string;
}

export type UpdateUserState = {
    message: string
    error: UpdateValidationError
    status: number
    formData: FormData
}
export async function UpdateUserAction(prevState: UpdateUserState | undefined, formData: FormData): Promise<UpdateUserState> {

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;

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
                email
            },
            data: {
                username
            }
        })
        console.log(user)

        revalidatePath("/", "layout")
        revalidatePath("/admin", "layout")

        // create token
        const JwtPayload: JWTPayload = {
            id: user.id,
            email: user.email,
            username: user.username,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
        const token = generateJwt(JwtPayload)
        // set cookie
        const cookieStore = await cookies()
        cookieStore.set({
            name: 'JwtToken',
            value: token,
            httpOnly: true,
            path: '/',
        })

        return ({
            message: "user updated successfully",
            error: {},
            status: 200,
            formData: new FormData(),
        })
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