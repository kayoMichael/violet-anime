/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "updatedAt",
ALTER COLUMN "username" DROP NOT NULL;
