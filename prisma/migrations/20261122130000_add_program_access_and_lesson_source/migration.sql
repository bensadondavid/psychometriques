-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "contentVersion" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "sourceId" TEXT;

-- CreateTable
CREATE TABLE "program_access" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "verifiedSubscriptionKey" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "program_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "program_access_verifiedSubscriptionKey_key" ON "program_access"("verifiedSubscriptionKey");

-- CreateIndex
CREATE INDEX "program_access_programId_endsAt_idx" ON "program_access"("programId", "endsAt");

-- CreateIndex
CREATE UNIQUE INDEX "program_access_userId_programId_key" ON "program_access"("userId", "programId");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_sourceId_key" ON "lesson"("sourceId");

-- AddForeignKey
ALTER TABLE "program_access" ADD CONSTRAINT "program_access_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "program_access" ADD CONSTRAINT "program_access_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- An access interval must have an end, and publication requires lesson content.
ALTER TABLE "program_access" ADD CONSTRAINT "program_access_period_check" CHECK ("endsAt" > "startsAt");
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_content_version_check" CHECK ("contentVersion" > 0);
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_published_content_check" CHECK ("status" <> 'PUBLISHED' OR ("content" IS NOT NULL AND btrim("content") <> ''));
