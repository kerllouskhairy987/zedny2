/*
  Warnings:

  - You are about to drop the column `createdAt` on the `PowerFeatures` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PowerFeatures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PowerFeatures" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);
