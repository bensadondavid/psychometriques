import type { Metadata } from "next";

import { prisma } from "@/lib/database/prisma";

import { CsvQuestionImport } from "./CsvQuestionImport";

export const metadata: Metadata = {
  title: "Importer les questions | Administration",
};

export default async function QuestionImportPage() {
  const programs = await prisma.program.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: { slug: true, name: true },
  });

  return <CsvQuestionImport programs={programs} />;
}
