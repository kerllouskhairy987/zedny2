/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Team` table. All the data in the column will be lost.
  - Added the required column `src` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "imageUrl",
ADD COLUMN     "src" TEXT NOT NULL;
