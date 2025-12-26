"use server";

import { prisma } from "@/lib/prisma"

// ---------------------------- Get All Projects ----------------------------
export const GetAllProjects = async () => {
    const projects = await prisma.powerFeatures.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    
    return projects
}

// ---------------------------- Get Single Project ----------------------------
export const GetSingleProject = async (id: number) => {
    const project = await prisma.powerFeatures.findUniqueOrThrow({
        where: {
            id: Number(id)
        }
    })
    
    return project
}