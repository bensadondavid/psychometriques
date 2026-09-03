/*
  Warnings:

  - You are about to drop the column `twoFactorEnabled` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `program` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `twoFactor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_programSlug_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_programSlug_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "twoFactor" DROP CONSTRAINT "twoFactor_userId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "twoFactorEnabled";

-- DropTable
DROP TABLE "chapter";

-- DropTable
DROP TABLE "program";

-- DropTable
DROP TABLE "question";

-- DropTable
DROP TABLE "subscription";

-- DropTable
DROP TABLE "twoFactor";

-- DropEnum
DROP TYPE "QuestionStatus";
