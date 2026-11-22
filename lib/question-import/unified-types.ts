export type { Exam } from "./unified-csv";
export type Validation = ReturnType<
  typeof import("./unified-csv").validateUnifiedCsv
>;
