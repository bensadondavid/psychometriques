-- CreateTable
CREATE TABLE "question_figure" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "svg" TEXT NOT NULL,
    "byteSize" INTEGER NOT NULL,
    "checksum" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_figure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "question_figure_programId_fileName_idx" ON "question_figure"("programId", "fileName");

-- CreateIndex
CREATE INDEX "question_figure_checksum_idx" ON "question_figure"("checksum");

-- CreateIndex
CREATE UNIQUE INDEX "question_figure_programId_path_key" ON "question_figure"("programId", "path");

-- AddCheckConstraint
ALTER TABLE "question_figure" ADD CONSTRAINT "question_figure_byteSize_check" CHECK ("byteSize" > 0);

-- AddForeignKey
ALTER TABLE "question_figure" ADD CONSTRAINT "question_figure_programId_fkey" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
