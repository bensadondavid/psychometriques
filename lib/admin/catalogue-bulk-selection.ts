import { parseQuestionContentFilter, questionContentFilters } from "@/lib/admin/question-content-filter";

export type BulkTab = "questions" | "passages";
export type BulkOperation = "review" | "publish" | "review_publish" | "withdraw";

const examSlugs = ["psychometriques", "amirnet", "yaelnet"] as const;
const questionStatuses = ["DRAFT", "VALIDATED", "PUBLISHED", "ARCHIVED"] as const;
const passageStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED", "COMING_SOON"] as const;

export function parseBulkSelection(formData: FormData) {
  const tab = formData.get("tab");
  const operation = formData.get("operation");
  const scope = formData.get("scope");
  const exam = formData.get("exam");
  const status = formData.get("status");
  const rawQuery = formData.get("q");
  const rawContent = formData.get("content");
  if ((tab !== "questions" && tab !== "passages") ||
    (operation !== "review" && operation !== "publish" && operation !== "review_publish" && operation !== "withdraw") ||
    (scope !== "selected" && scope !== "filtered") ||
    typeof exam !== "string" || (exam !== "" && !examSlugs.includes(exam as typeof examSlugs[number])) ||
    typeof status !== "string" || typeof rawQuery !== "string" || rawQuery.length > 80 ||
    typeof rawContent !== "string" || (tab === "passages" && rawContent !== "")) return null;
  const statuses: readonly string[] = tab === "questions" ? questionStatuses : passageStatuses;
  if (status && !statuses.includes(status)) return null;
  if (tab === "questions" && !questionContentFilters.includes(rawContent as typeof questionContentFilters[number])) return null;
  const ids = formData.getAll("ids");
  if (scope === "selected" && (!ids.length || ids.length > 100 || ids.some((id) => typeof id !== "string" || !id || id.length > 100))) return null;
  if (scope === "filtered" && !exam) return null;
  return { tab: tab as BulkTab, operation: operation as BulkOperation, scope,
    exam, status, q: rawQuery.trim(),
    content: parseQuestionContentFilter(rawContent), ids: ids as string[] };
}

