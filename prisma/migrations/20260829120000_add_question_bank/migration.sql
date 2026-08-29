-- CreateEnum
CREATE TYPE "QuestionStatus" AS ENUM ('DRAFT', 'VALIDATED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "chapter" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "subTheme" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "difficultyLabel" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "choice1" TEXT NOT NULL,
    "choice2" TEXT NOT NULL,
    "choice3" TEXT NOT NULL,
    "choice4" TEXT NOT NULL,
    "correctChoice" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    "status" "QuestionStatus" NOT NULL DEFAULT 'DRAFT',
    "imagePath" TEXT,
    "imageAlt" TEXT,
    "sourceCreatedAt" TIMESTAMP(3) NOT NULL,
    "sourceUpdatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapter_slug_key" ON "chapter"("slug");

-- CreateIndex
CREATE INDEX "question_chapterId_difficulty_idx" ON "question"("chapterId", "difficulty");

-- CreateIndex
CREATE INDEX "question_status_idx" ON "question"("status");

-- CreateIndex
CREATE INDEX "question_subTheme_idx" ON "question"("subTheme");

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
