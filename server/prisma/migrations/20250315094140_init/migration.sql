/*
  Warnings:

  - Added the required column `adminId` to the `YouthMovement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "YouthMovement" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "YouthMovement" ADD CONSTRAINT "YouthMovement_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
