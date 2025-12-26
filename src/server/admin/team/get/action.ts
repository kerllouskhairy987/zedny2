"use server";

import { prisma } from "@/lib/prisma";

// ------------------------------Get All Team Members -----------------
export const GetAllTeamMembers = async () => {
    const teamMembers = await prisma.team.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    return teamMembers
};

// ------------------------------Get Single Team Members -----------------
export const GetSingleTeamMember = async (id: number) => {
    const teamMember = await prisma.team.findUniqueOrThrow({
        where: {
            id: Number(id)
        }
    })
    return teamMember
}
