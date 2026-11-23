import type { Prisma } from "@/lib/database/prisma/client";

export const questionContentFilters = [
  "all", "text", "figure", "text_or_figure", "text_and_figure", "none",
] as const;

export type QuestionContentFilter = (typeof questionContentFilters)[number];

export function parseQuestionContentFilter(value: unknown): QuestionContentFilter {
  return typeof value === "string" && questionContentFilters.includes(value as QuestionContentFilter)
    ? value as QuestionContentFilter
    : "all";
}

export function questionContentWhere(filter: QuestionContentFilter): Prisma.QuestionWhereInput {
  switch (filter) {
    case "text": return { passageId: { not: null } };
    case "figure": return { imagePath: { not: null } };
    case "text_or_figure": return { OR: [
      { passageId: { not: null } }, { imagePath: { not: null } },
    ] };
    case "text_and_figure": return { passageId: { not: null }, imagePath: { not: null } };
    case "none": return { passageId: null, imagePath: null };
    default: return {};
  }
}
