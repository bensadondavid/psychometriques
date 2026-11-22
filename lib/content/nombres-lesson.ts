import { prisma } from "@/lib/database/prisma";

export type LessonSection = {
  id: string;
  title: string;
  markdown: string;
};

export async function getNombresLesson(includeUnpublished = false) {
  return prisma.lesson.findFirst({
    where: {
      sourceId: "quant-nombres",
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "psychometriques",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, title: true, content: true },
  });
}

export async function getDivisibiliteLesson(includeUnpublished = false) {
  return prisma.lesson.findFirst({
    where: {
      sourceId: "quant-divisibilite",
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "psychometriques",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, title: true, content: true },
  });
}

export function parseLessonMarkdown(source: string) {
  const parts = source.split(/^## /m);
  const introduction =
    parts
      .shift()
      ?.replace(/^# [^\n]+\n/, "")
      .trim() ?? "";
  const sections: LessonSection[] = parts.map((part, index) => {
    const newline = part.indexOf("\n");
    return {
      id: `partie-${index + 1}`,
      title: part.slice(0, newline).trim(),
      markdown: part.slice(newline + 1).trim(),
    };
  });

  return { introduction, sections };
}
