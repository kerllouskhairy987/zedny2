import { prisma } from "@/lib/prisma";

export const getAllComplaints = async () => {
    const complaints = await prisma.complaints.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    return complaints
} 