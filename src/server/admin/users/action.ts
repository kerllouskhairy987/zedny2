"use server";

import { prisma } from "@/lib/prisma";

// --------------------------------Get All Users ----------------------------
export async function GetAllUsers() {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return users
}


// --------------------------------Get Panned Users ----------------------------
export async function GetPannedUsers() {
    const users = await prisma.user.findMany({
        where: {
            pan: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return users
}