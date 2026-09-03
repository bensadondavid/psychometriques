/*
  Warnings:

  - You are about to drop the column `stripeCustomerId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[issuer,accountId]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'specialUser';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "stripeCustomerId";

-- CreateIndex
CREATE UNIQUE INDEX "account_issuer_accountId_key" ON "account"("issuer", "accountId");
