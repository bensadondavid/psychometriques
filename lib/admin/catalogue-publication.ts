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
