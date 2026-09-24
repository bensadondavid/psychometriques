-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED', 'COMING_SOON');

-- CreateEnum
CREATE TYPE "QuestionStatus" AS ENUM ('DRAFT', 'VALIDATED', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "QuestionDomain" AS ENUM ('VERBAL', 'QUANTITATIVE');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('ANALOGY', 'VERBAL_REASONING', 'PASSAGE_COMPREHENSION', 'QUANTITATIVE');

-- CreateTable
CREATE TABLE "program" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'COMING_SOON',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "instructions" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_chapter" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "domain" "QuestionDomain" NOT NULL,
    "externalId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passage" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "estimatedLines" INTEGER NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'fr',
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "sourceCreatedAt" TIMESTAMP(3) NOT NULL,
    "sourceUpdatedAt" TIMESTAMP(3) NOT NULL,
    "sourceFile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "passage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "passageId" TEXT,
    "externalId" TEXT NOT NULL,
    "domain" "QuestionDomain" NOT NULL,
    "type" "QuestionType" NOT NULL,
    "subTheme" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "difficultyLabel" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'fr',
    "status" "QuestionStatus" NOT NULL DEFAULT 'DRAFT',
    "imagePath" TEXT,
    "imageAlt" TEXT,
    "sourceCreatedAt" TIMESTAMP(3) NOT NULL,
    "sourceUpdatedAt" TIMESTAMP(3) NOT NULL,
    "sourceFile" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_option" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise_question" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercise_question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "program_slug_key" ON "program"("slug");

-- CreateIndex
CREATE INDEX "program_status_sortOrder_idx" ON "program"("status", "sortOrder");

-- CreateIndex
CREATE INDEX "course_programId_status_sortOrder_idx" ON "course"("programId", "status", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "course_programId_slug_key" ON "course"("programId", "slug");

-- CreateIndex
CREATE INDEX "lesson_courseId_status_sortOrder_idx" ON "lesson"("courseId", "status", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_courseId_slug_key" ON "lesson"("courseId", "slug");

-- CreateIndex
CREATE INDEX "exercise_lessonId_status_sortOrder_idx" ON "exercise"("lessonId", "status", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_lessonId_slug_key" ON "exercise"("lessonId", "slug");

-- CreateIndex
CREATE INDEX "question_chapter_programId_domain_sortOrder_idx" ON "question_chapter"("programId", "domain", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "question_chapter_programId_domain_externalId_key" ON "question_chapter"("programId", "domain", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "question_chapter_programId_domain_slug_key" ON "question_chapter"("programId", "domain", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "question_chapter_id_programId_domain_key" ON "question_chapter"("id", "programId", "domain");

-- CreateIndex
CREATE INDEX "passage_programId_status_idx" ON "passage"("programId", "status");

-- CreateIndex
CREATE INDEX "passage_programId_theme_idx" ON "passage"("programId", "theme");

-- CreateIndex
CREATE UNIQUE INDEX "passage_programId_externalId_key" ON "passage"("programId", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "passage_id_programId_key" ON "passage"("id", "programId");

-- CreateIndex
CREATE INDEX "question_programId_domain_status_idx" ON "question"("programId", "domain", "status");

-- CreateIndex
CREATE INDEX "question_chapterId_difficulty_idx" ON "question"("chapterId", "difficulty");

-- CreateIndex
CREATE INDEX "question_passageId_idx" ON "question"("passageId");

-- CreateIndex
CREATE INDEX "question_subTheme_idx" ON "question"("subTheme");

-- CreateIndex
CREATE UNIQUE INDEX "question_programId_externalId_key" ON "question"("programId", "externalId");

-- CreateIndex
CREATE INDEX "question_option_questionId_isCorrect_idx" ON "question_option"("questionId", "isCorrect");

-- CreateIndex
CREATE UNIQUE INDEX "question_option_questionId_position_key" ON "question_option"("questionId", "position");

-- CreateIndex
CREATE INDEX "exercise_question_questionId_idx" ON "exercise_question"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_question_exerciseId_questionId_key" ON "exercise_question"("exerciseId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_question_exerciseId_position_key" ON "exercise_question"("exerciseId", "position");

-- AddCheckConstraint
ALTER TABLE "program" ADD CONSTRAINT "program_sortOrder_check" CHECK ("sortOrder" >= 0);

-- AddCheckConstraint
ALTER TABLE "course" ADD CONSTRAINT "course_sortOrder_check" CHECK ("sortOrder" >= 0);

-- AddCheckConstraint
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_sortOrder_check" CHECK ("sortOrder" >= 0);

-- AddCheckConstraint
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_sortOrder_check" CHECK ("sortOrder" >= 0);

-- AddCheckConstraint
ALTER TABLE "question_chapter" ADD CONSTRAINT "question_chapter_externalId_check" CHECK ("externalId" > 0);

-- AddCheckConstraint
ALTER TABLE "question_chapter" ADD CONSTRAINT "question_chapter_sortOrder_check" CHECK ("sortOrder" >= 0);

-- AddCheckConstraint
ALTER TABLE "passage" ADD CONSTRAINT "passage_counts_check" CHECK ("wordCount" > 0 AND "estimatedLines" > 0);

-- AddCheckConstraint
ALTER TABLE "question" ADD CONSTRAINT "question_difficulty_check" CHECK ("difficulty" BETWEEN 1 AND 5);

-- AddCheckConstraint
ALTER TABLE "question" ADD CONSTRAINT "question_version_check" CHECK ("version" > 0);

-- AddCheckConstraint
ALTER TABLE "question" ADD CONSTRAINT "question_image_pair_check" CHECK (("imagePath" IS NULL) = ("imageAlt" IS NULL));

-- AddCheckConstraint
ALTER TABLE "question" ADD CONSTRAINT "question_domain_type_check" CHECK (
  ("domain" = 'QUANTITATIVE' AND "type" = 'QUANTITATIVE') OR
  ("domain" = 'VERBAL' AND "type" IN ('ANALOGY', 'VERBAL_REASONING', 'PASSAGE_COMPREHENSION'))
);

-- AddCheckConstraint
ALTER TABLE "question" ADD CONSTRAINT "question_passage_type_check" CHECK (("type" = 'PASSAGE_COMPREHENSION') = ("passageId" IS NOT NULL));

-- AddCheckConstraint
ALTER TABLE "question_option" ADD CONSTRAINT "question_option_position_check" CHECK ("position" BETWEEN 1 AND 4);

-- AddCheckConstraint
ALTER TABLE "exercise_question" ADD CONSTRAINT "exercise_question_position_check" CHECK ("position" > 0);

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_chapter" ADD CONSTRAINT "question_chapter_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passage" ADD CONSTRAINT "passage_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_chapterId_programId_domain_fkey" FOREIGN KEY ("chapterId", "programId", "domain") REFERENCES "question_chapter"("id", "programId", "domain") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_passageId_programId_fkey" FOREIGN KEY ("passageId", "programId") REFERENCES "passage"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "question_option" ADD CONSTRAINT "question_option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_question" ADD CONSTRAINT "exercise_question_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_question" ADD CONSTRAINT "exercise_question_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
