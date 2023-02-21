/*
  Warnings:

  - You are about to drop the column `rating` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "rating",
ADD COLUMN     "ratings" INTEGER[] DEFAULT ARRAY[5]::INTEGER[];
