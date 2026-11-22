-- CreateEnum
CREATE TYPE "ExerciseKind" AS ENUM ('DISCOVERY', 'PREPARED', 'LESSON_PRACTICE');

-- CreateEnum
CREATE TYPE "AttemptMode" AS ENUM ('LEARNING', 'EXAM');

-- CreateEnum
CREATE TYPE "AttemptStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'ABANDONED');

-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "exercise_question" DROP CONSTRAINT "exercise_question_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "exercise_question" DROP CONSTRAINT "exercise_question_questionId_fkey";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_courseId_fkey";

-- DropIndex
DROP INDEX "exercise_lessonId_slug_key";

-- DropIndex
DROP INDEX "exercise_lessonId_status_sortOrder_idx";

-- AlterTable
ALTER TABLE "exercise" ADD COLUMN     "chapterId" TEXT,
ADD COLUMN     "kind" "ExerciseKind" NOT NULL DEFAULT 'PREPARED',
ADD COLUMN     "programId" TEXT,
ADD COLUMN     "timeLimitSeconds" INTEGER,
ALTER COLUMN "lessonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "exercise_question" ADD COLUMN     "programId" TEXT;

-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "programId" TEXT;

-- AlterTable
ALTER TABLE "passage" ADD COLUMN     "editorialReviewedAt" TIMESTAMP(3),
ADD COLUMN     "sourceStatus" "ContentStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "question" ADD COLUMN     "editorialReviewedAt" TIMESTAMP(3),
ADD COLUMN     "sourceStatus" "QuestionStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "question_chapter" ADD COLUMN     "courseId" TEXT;

-- Backfill the program through existing relations before making it required.
UPDATE "lesson" l SET "programId" = c."programId"
FROM "course" c WHERE l."courseId" = c.id;
ALTER TABLE "lesson" ALTER COLUMN "programId" SET NOT NULL;
UPDATE "exercise" e SET "programId" = l."programId"
FROM "lesson" l WHERE e."lessonId" = l.id;
ALTER TABLE "exercise" ALTER COLUMN "programId" SET NOT NULL;
UPDATE "exercise_question" eq SET "programId" = e."programId"
FROM "exercise" e WHERE eq."exerciseId" = e.id;
ALTER TABLE "exercise_question" ALTER COLUMN "programId" SET NOT NULL;

-- Preserve legacy source statuses separately from editorial publication.
UPDATE "passage" SET "sourceStatus" = "status";
UPDATE "question" SET "sourceStatus" = "status";
UPDATE "question_chapter" chapter SET "courseId" = course.id
FROM "course" course
WHERE chapter."programId" = course."programId"
  AND chapter."domain" = 'QUANTITATIVE'
  AND course.slug = 'reflexion-quantitative';

-- CreateTable
CREATE TABLE "lesson_chapter" (
    "lessonId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "lesson_chapter_pkey" PRIMARY KEY ("lessonId","chapterId")
);

-- CreateTable
CREATE TABLE "attempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "exerciseId" TEXT NOT NULL,
    "mode" "AttemptMode" NOT NULL,
    "status" "AttemptStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "claimTokenHash" TEXT,
    "claimExpiresAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadlineAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attempt_question" (
    "id" TEXT NOT NULL,
    "attemptId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "questionVersion" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,

    CONSTRAINT "attempt_question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attempt_answer" (
    "id" TEXT NOT NULL,
    "attemptQuestionId" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "isCorrect" BOOLEAN,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attempt_answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "lesson_chapter_chapterId_courseId_idx" ON "lesson_chapter"("chapterId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "attempt_claimTokenHash_key" ON "attempt"("claimTokenHash");

-- CreateIndex
CREATE INDEX "attempt_userId_startedAt_idx" ON "attempt"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "attempt_exerciseId_status_idx" ON "attempt"("exerciseId", "status");

-- CreateIndex
CREATE INDEX "attempt_claimExpiresAt_idx" ON "attempt"("claimExpiresAt");

-- CreateIndex
CREATE INDEX "attempt_question_questionId_idx" ON "attempt_question"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "attempt_question_attemptId_position_key" ON "attempt_question"("attemptId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "attempt_question_attemptId_questionId_key" ON "attempt_question"("attemptId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "attempt_answer_attemptQuestionId_key" ON "attempt_answer"("attemptQuestionId");

CREATE UNIQUE INDEX "exercise_one_published_discovery_per_program_key"
  ON "exercise"("programId") WHERE "kind" = 'DISCOVERY' AND "status" = 'PUBLISHED';
CREATE UNIQUE INDEX "question_option_one_correct_per_question_key"
  ON "question_option"("questionId") WHERE "isCorrect" = true;

-- CreateIndex
CREATE UNIQUE INDEX "course_id_programId_key" ON "course"("id", "programId");

-- CreateIndex
CREATE INDEX "exercise_programId_kind_status_sortOrder_idx" ON "exercise"("programId", "kind", "status", "sortOrder");

-- CreateIndex
CREATE INDEX "exercise_chapterId_programId_idx" ON "exercise"("chapterId", "programId");

-- CreateIndex
CREATE INDEX "exercise_lessonId_idx" ON "exercise"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_programId_slug_key" ON "exercise"("programId", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_id_programId_key" ON "exercise"("id", "programId");

-- CreateIndex
CREATE INDEX "exercise_question_questionId_programId_idx" ON "exercise_question"("questionId", "programId");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_id_courseId_key" ON "lesson"("id", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_id_programId_key" ON "lesson"("id", "programId");

-- CreateIndex
CREATE UNIQUE INDEX "question_id_programId_key" ON "question"("id", "programId");

-- CreateIndex
CREATE INDEX "question_chapter_courseId_sortOrder_idx" ON "question_chapter"("courseId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "question_chapter_id_programId_key" ON "question_chapter"("id", "programId");

-- CreateIndex
CREATE UNIQUE INDEX "question_chapter_id_courseId_key" ON "question_chapter"("id", "courseId");

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_courseId_programId_fkey" FOREIGN KEY ("courseId", "programId") REFERENCES "course"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_lessonId_programId_fkey" FOREIGN KEY ("lessonId", "programId") REFERENCES "lesson"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_chapterId_programId_fkey" FOREIGN KEY ("chapterId", "programId") REFERENCES "question_chapter"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson_chapter" ADD CONSTRAINT "lesson_chapter_lessonId_courseId_fkey" FOREIGN KEY ("lessonId", "courseId") REFERENCES "lesson"("id", "courseId") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lesson_chapter" ADD CONSTRAINT "lesson_chapter_chapterId_courseId_fkey" FOREIGN KEY ("chapterId", "courseId") REFERENCES "question_chapter"("id", "courseId") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "question_chapter" ADD CONSTRAINT "question_chapter_courseId_programId_fkey" FOREIGN KEY ("courseId", "programId") REFERENCES "course"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exercise_question" ADD CONSTRAINT "exercise_question_exerciseId_programId_fkey" FOREIGN KEY ("exerciseId", "programId") REFERENCES "exercise"("id", "programId") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exercise_question" ADD CONSTRAINT "exercise_question_questionId_programId_fkey" FOREIGN KEY ("questionId", "programId") REFERENCES "question"("id", "programId") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attempt" ADD CONSTRAINT "attempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attempt" ADD CONSTRAINT "attempt_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attempt_question" ADD CONSTRAINT "attempt_question_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "attempt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attempt_question" ADD CONSTRAINT "attempt_question_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attempt_answer" ADD CONSTRAINT "attempt_answer_attemptQuestionId_fkey" FOREIGN KEY ("attemptQuestionId") REFERENCES "attempt_question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "question" ADD CONSTRAINT "question_publication_review_check"
  CHECK ("status" <> 'PUBLISHED' OR "editorialReviewedAt" IS NOT NULL);
ALTER TABLE "passage" ADD CONSTRAINT "passage_publication_review_check"
  CHECK ("status" <> 'PUBLISHED' OR "editorialReviewedAt" IS NOT NULL);
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_timeLimitSeconds_check"
  CHECK ("timeLimitSeconds" IS NULL OR "timeLimitSeconds" > 0);
ALTER TABLE "attempt" ADD CONSTRAINT "attempt_claim_pair_check"
  CHECK (("claimTokenHash" IS NULL) = ("claimExpiresAt" IS NULL));
ALTER TABLE "attempt" ADD CONSTRAINT "attempt_claim_owner_check"
  CHECK ("userId" IS NULL OR "claimTokenHash" IS NULL);
ALTER TABLE "attempt" ADD CONSTRAINT "attempt_deadline_check"
  CHECK ("deadlineAt" IS NULL OR "deadlineAt" > "startedAt");
ALTER TABLE "attempt_question" ADD CONSTRAINT "attempt_question_position_check" CHECK ("position" > 0);
ALTER TABLE "attempt_question" ADD CONSTRAINT "attempt_question_version_check" CHECK ("questionVersion" > 0);
