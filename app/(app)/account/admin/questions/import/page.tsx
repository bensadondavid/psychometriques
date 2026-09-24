import type { Metadata } from "next";

import { QuestionImportPanel } from "@/components/admin/question-import-panel";

export const metadata: Metadata = {
  title: "Importer les questions | Administration",
};

export default function QuestionImportPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
        Administration · Questions
      </p>
      <h1 className="mt-3 font-serif text-4xl text-primary">Import CSV</h1>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
        Sélectionnez le format correspondant au contenu verbal ou quantitatif.
        Chaque fichier est contrôlé avant import : colonnes, identifiants,
        chapitre, difficulté, réponses, dates et doublons dans un même lot.
      </p>

      <QuestionImportPanel />

      <aside className="mt-6 border-l-2 border-[#9b7a48] bg-[#f5f0e7]/70 px-5 py-4 text-sm leading-6 text-foreground">
        <p className="font-semibold text-primary">Import sécurisé en deux temps</p>
        <p className="mt-1 text-muted-foreground">
          Validez d’abord le lot, puis confirmez son import. Le serveur contrôle
          à nouveau chaque fichier et écrit l’ensemble dans une transaction.
          Réimporter le même identifiant met à jour son contenu sans créer de
          doublon.
        </p>
      </aside>
    </main>
  );
}
