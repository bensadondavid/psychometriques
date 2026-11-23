type QuestionForReview = {
  statement: string;
  explanation: string;
  imagePath: string | null;
  passageId: string | null;
  passage: { status: string } | null;
  editorialReviewedAt: Date | null;
  options: { text: string; isCorrect: boolean }[];
};

export function canReviewQuestion(question: QuestionForReview, figureExists: boolean) {
  const choices = question.options.map((option) => option.text.trim().toLocaleLowerCase());
  return Boolean(
    question.statement.trim() && question.explanation.trim() &&
    question.options.length === 4 && choices.every(Boolean) &&
    new Set(choices).size === 4 &&
    question.options.filter((option) => option.isCorrect).length === 1 &&
    (!question.imagePath || figureExists) &&
    (!question.passageId || question.passage),
  );
}

export function canPublishQuestion(question: QuestionForReview, figureExists: boolean) {
  return canReviewQuestion(question, figureExists) &&
    Boolean(question.editorialReviewedAt) &&
    (!question.passageId || question.passage?.status === "PUBLISHED");
}

export function canReviewPassage(passage: { title: string; text: string }) {
  return Boolean(passage.title.trim() && passage.text.trim());
}

export type BulkPublicationOperation = "review" | "publish" | "review_publish" | "withdraw";
export type BulkBlockReason = "already" | "incomplete" | "notReviewed" | "passageDraft";

export function questionBulkBlockReason(
  question: QuestionForReview & { status: string },
  figureExists: boolean,
  operation: BulkPublicationOperation,
): BulkBlockReason | null {
  if (operation === "withdraw") return question.status === "PUBLISHED" ? null : "already";
  if (operation === "review" && question.editorialReviewedAt) return "already";
  if (operation !== "review" && question.status === "PUBLISHED") return "already";
  if (!canReviewQuestion(question, figureExists)) return "incomplete";
  if (operation === "publish" && !question.editorialReviewedAt) return "notReviewed";
  if (operation !== "review" && question.passageId && question.passage?.status !== "PUBLISHED") return "passageDraft";
  return null;
}

export function passageBulkBlockReason(
  passage: { title: string; text: string; status: string; editorialReviewedAt: Date | null },
  operation: BulkPublicationOperation,
): BulkBlockReason | null {
  if (operation === "withdraw") return passage.status === "PUBLISHED" ? null : "already";
  if (operation === "review" && passage.editorialReviewedAt) return "already";
  if (operation !== "review" && passage.status === "PUBLISHED") return "already";
  if (!canReviewPassage(passage)) return "incomplete";
  if (operation === "publish" && !passage.editorialReviewedAt) return "notReviewed";
  return null;
}
