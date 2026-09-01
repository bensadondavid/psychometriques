-- Create the catalog of exam programs.
CREATE TABLE "program" (
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "program_pkey" PRIMARY KEY ("slug")
);

INSERT INTO "program" (
  "slug",
  "name",
  "description",
  "sortOrder",
  "updatedAt"
) VALUES
  ('psychometrique', 'Psychométrique', 'Préparation au test psychométrique.', 10, CURRENT_TIMESTAMP),
  ('amir', 'AMIR', 'Préparation à l’examen AMIR.', 20, CURRENT_TIMESTAMP),
  ('yael', 'YAEL', 'Préparation à l’examen YAEL.', 30, CURRENT_TIMESTAMP);

-- Scope chapters and questions by program while preserving existing content.
ALTER TABLE "question" DROP CONSTRAINT "question_chapterId_fkey";
DROP INDEX "chapter_slug_key";
DROP INDEX "question_chapterId_difficulty_idx";
DROP INDEX "question_status_idx";
DROP INDEX "question_subTheme_idx";

ALTER TABLE "chapter" DROP CONSTRAINT "chapter_pkey";
ALTER TABLE "question" DROP CONSTRAINT "question_pkey";

ALTER TABLE "chapter"
  ADD COLUMN "programSlug" TEXT NOT NULL DEFAULT 'psychometrique';

ALTER TABLE "question"
  ADD COLUMN "programSlug" TEXT NOT NULL DEFAULT 'psychometrique';

ALTER TABLE "chapter" ALTER COLUMN "programSlug" DROP DEFAULT;
ALTER TABLE "question" ALTER COLUMN "programSlug" DROP DEFAULT;

ALTER TABLE "chapter"
  ADD CONSTRAINT "chapter_pkey" PRIMARY KEY ("programSlug", "id");

ALTER TABLE "question"
  ADD CONSTRAINT "question_pkey" PRIMARY KEY ("programSlug", "id");

CREATE UNIQUE INDEX "chapter_programSlug_slug_key"
  ON "chapter"("programSlug", "slug");

CREATE INDEX "question_programSlug_chapterId_difficulty_idx"
  ON "question"("programSlug", "chapterId", "difficulty");

CREATE INDEX "question_programSlug_status_idx"
  ON "question"("programSlug", "status");

CREATE INDEX "question_programSlug_subTheme_idx"
  ON "question"("programSlug", "subTheme");

ALTER TABLE "chapter"
  ADD CONSTRAINT "chapter_programSlug_fkey"
  FOREIGN KEY ("programSlug") REFERENCES "program"("slug")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "question"
  ADD CONSTRAINT "question_programSlug_chapterId_fkey"
  FOREIGN KEY ("programSlug", "chapterId")
  REFERENCES "chapter"("programSlug", "id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
