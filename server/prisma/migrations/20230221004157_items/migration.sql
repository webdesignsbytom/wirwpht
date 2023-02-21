/*
  Warnings:

  - Added the required column `desc` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `effect` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "effect" TEXT NOT NULL;
