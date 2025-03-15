/*
  Warnings:

  - You are about to drop the column `jeugdbewegingId` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `jeugdbewegingId` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the `Jeugdbeweging` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JeugdbewegingUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `youthMovementId` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youthMovementId` to the `Invitation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_jeugdbewegingId_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_jeugdbewegingId_fkey";

-- DropForeignKey
ALTER TABLE "JeugdbewegingUser" DROP CONSTRAINT "JeugdbewegingUser_jeugdbewegingId_fkey";

-- DropForeignKey
ALTER TABLE "JeugdbewegingUser" DROP CONSTRAINT "JeugdbewegingUser_userId_fkey";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "jeugdbewegingId",
ADD COLUMN     "youthMovementId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "jeugdbewegingId",
ADD COLUMN     "youthMovementId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Jeugdbeweging";

-- DropTable
DROP TABLE "JeugdbewegingUser";

-- CreateTable
CREATE TABLE "YouthMovement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "city" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YouthMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YouthMovementUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "youthMovementId" INTEGER NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "YouthMovementUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YouthMovementUser_userId_youthMovementId_key" ON "YouthMovementUser"("userId", "youthMovementId");

-- AddForeignKey
ALTER TABLE "YouthMovementUser" ADD CONSTRAINT "YouthMovementUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YouthMovementUser" ADD CONSTRAINT "YouthMovementUser_youthMovementId_fkey" FOREIGN KEY ("youthMovementId") REFERENCES "YouthMovement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_youthMovementId_fkey" FOREIGN KEY ("youthMovementId") REFERENCES "YouthMovement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_youthMovementId_fkey" FOREIGN KEY ("youthMovementId") REFERENCES "YouthMovement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
