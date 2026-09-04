import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importer les questions | Administration",
};

export default function QuestionImportPage() {
  return <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Administration · Questions</p>
    <h1 className="mt-3 font-serif text-4xl text-primary">Import CSV</h1>
    <div className="mt-8 border border-dashed border-border bg-card p-8">
      <h2 className="font-serif text-2xl">Nouvel import en préparation</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">L’ancien import a été retiré avec son modèle de données. Le nouvel outil sera construit après la banque de questions et proposera validation, prévisualisation, erreurs par ligne et import transactionnel sans doublons.</p>
    </div>
  </main>;
}
