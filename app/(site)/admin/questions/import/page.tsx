import type { Metadata } from "next";

import { CsvQuestionImport } from "./CsvQuestionImport";

export const metadata: Metadata = {
  title: "Importer les questions | Administration",
};

export default function QuestionImportPage() {
  return <CsvQuestionImport />;
}
