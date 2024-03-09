/*
  Warnings:

  - You are about to drop the column `createdAt` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "createdAt",
ADD COLUMN     "profileImage" TEXT;
