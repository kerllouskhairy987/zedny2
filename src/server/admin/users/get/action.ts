"use server";

import { prisma } from "@/lib/prisma";

//-----------------------------Get User By Id ----------------------------
export async function GetUserById(id: number) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
        return user
    } catch (error) {
        console.log(error)
        return null;
    }
}