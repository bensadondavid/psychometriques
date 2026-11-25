export type DiscoverySnapshot = {
  statement: string;
  explanation: string;
  language: string;
  chapter: string;
  passage: { title: string; text: string; language: string } | null;
  options: { id: string; text: string; isCorrect: boolean }[];
};

export function parseDiscoverySnapshot(value: unknown): DiscoverySnapshot | null {
  if (!value || typeof value !== "object") return null;
  const item = value as Partial<DiscoverySnapshot>;
  if (typeof item.statement !== "string" || typeof item.explanation !== "string" ||
      typeof item.language !== "string" || typeof item.chapter !== "string" ||
      !Array.isArray(item.options) || item.options.length !== 4 ||
      item.options.some((option) => !option || typeof option.id !== "string" ||
        typeof option.text !== "string" || typeof option.isCorrect !== "boolean") ||
      item.options.filter((option) => option.isCorrect).length !== 1) return null;
  if (item.passage !== null && item.passage !== undefined &&
      (typeof item.passage.title !== "string" || typeof item.passage.text !== "string" ||
       typeof item.passage.language !== "string")) return null;
  return item as DiscoverySnapshot;
}

export function publicDiscoveryQuestion(snapshot: DiscoverySnapshot) {
  return {
    statement: snapshot.statement,
    language: snapshot.language,
    chapter: snapshot.chapter,
    passage: snapshot.passage,
    options: snapshot.options.map(({ id, text }) => ({ id, text })),
  };
}
