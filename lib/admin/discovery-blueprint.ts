export type DiscoveryBlueprintRow = {
  domain: "VERBAL" | "QUANTITATIVE";
  difficulty: number;
  chapterId: string | null;
  count: number;
};

export type DiscoveryPoolQuestion = {
  id: string;
  domain: "VERBAL" | "QUANTITATIVE";
  difficulty: number;
  chapterId: string;
};

export function discoveryDraftSlug(requestKey: unknown): string | null {
  if (typeof requestKey !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestKey)) {
    return null;
  }
  return `decouverte-${requestKey.toLowerCase()}`;
}

export function parseDiscoveryBlueprint(value: unknown): DiscoveryBlueprintRow[] | null {
  if (!Array.isArray(value) || value.length < 1 || value.length > 12) return null;
  let total = 0;
  const rows: DiscoveryBlueprintRow[] = [];
  const seen = new Set<string>();

  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const row = item as Partial<DiscoveryBlueprintRow>;
    if ((row.domain !== "VERBAL" && row.domain !== "QUANTITATIVE") ||
      !Number.isInteger(row.difficulty) || row.difficulty! < 1 || row.difficulty! > 5 ||
      (row.chapterId !== null && (typeof row.chapterId !== "string" || !row.chapterId || row.chapterId.length > 100)) ||
      !Number.isInteger(row.count) || row.count! < 1 || row.count! > 30) return null;
    const key = `${row.domain}:${row.difficulty}:${row.chapterId ?? "*"}`;
    if (seen.has(key)) return null;
    seen.add(key);
    total += row.count!;
    if (total > 30) return null;
    rows.push({ domain: row.domain, difficulty: row.difficulty!, chapterId: row.chapterId,
      count: row.count! });
  }
  return rows;
}

export function isDiscoveryBlueprintForExam(slug: string, rows: DiscoveryBlueprintRow[]) {
  if (slug === "psychometriques") {
    return rows.some((row) => row.domain === "VERBAL") &&
      rows.some((row) => row.domain === "QUANTITATIVE");
  }
  if (slug === "amirnet" || slug === "yaelnet") {
    return rows.every((row) => row.domain === "VERBAL");
  }
  return false;
}

export function drawDiscoveryQuestions(
  rows: DiscoveryBlueprintRow[],
  pool: DiscoveryPoolQuestion[],
  randomIndex: (max: number) => number,
): { ids: string[]; shortageRow: number | null } {
  const used = new Set<string>();
  const selectedByRow: string[][] = rows.map(() => []);
  // Specific chapters draw first so a broad group cannot consume their scarce questions.
  const rowOrder = rows.map((row, index) => ({ row, index }))
    .sort((left, right) => Number(Boolean(right.row.chapterId)) - Number(Boolean(left.row.chapterId)));

  for (const { row, index } of rowOrder) {
    const available = pool.filter((question) => !used.has(question.id) &&
      question.domain === row.domain && question.difficulty === row.difficulty &&
      (!row.chapterId || question.chapterId === row.chapterId));
    if (available.length < row.count) return { ids: [], shortageRow: index + 1 };
    for (let picked = 0; picked < row.count; picked++) {
      const position = randomIndex(available.length);
      if (!Number.isInteger(position) || position < 0 || position >= available.length) {
        throw new Error("Invalid random index");
      }
      const [question] = available.splice(position, 1);
      used.add(question.id);
      selectedByRow[index].push(question.id);
    }
  }
  return { ids: selectedByRow.flat(), shortageRow: null };
}
