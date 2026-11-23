"use client";

import Link from "next/link";
import { useState } from "react";

import { changeCatalogBulk } from "@/app/(app)/account/admin/catalogue/actions";
import type { QuestionContentFilter } from "@/lib/admin/question-content-filter";

type Item = {
  id: string;
  href: string;
  externalId: string;
  title: string;
  detail: string;
  status: string;
  reviewed: boolean;
  hasText: boolean;
  hasFigure: boolean;
};

type Props = {
  tab: "questions" | "passages";
  items: Item[];
  total: number;
  exam: string;
  status: string;
  q: string;
  content: QuestionContentFilter;
};

export function BulkCatalogList({ tab, items, total, exam, status, q, content }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [allFiltered, setAllFiltered] = useState(false);
  const visibleIds = items.map((item) => item.id);
  const pageSelected = visibleIds.length > 0 && visibleIds.every((id) => selected.includes(id));
  const selectionCount = allFiltered ? total : selected.length;

  function toggle(id: string) {
    setAllFiltered(false);
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return <form action={changeCatalogBulk} className="space-y-4">
    <input type="hidden" name="tab" value={tab} />
    <input type="hidden" name="exam" value={exam} />
    <input type="hidden" name="status" value={status} />
    <input type="hidden" name="q" value={q} />
    <input type="hidden" name="content" value={tab === "questions" ? content : ""} />
    <input type="hidden" name="scope" value={allFiltered ? "filtered" : "selected"} />
    {!allFiltered && selected.map((id) => <input key={id} type="hidden" name="ids" value={id} />)}
    <div className="flex flex-wrap items-center gap-3 border border-border bg-card p-4 text-sm">
      <label className="flex cursor-pointer items-center gap-2 font-semibold">
        <input type="checkbox" checked={pageSelected || allFiltered} disabled={!items.length}
          onChange={(event) => {
            setAllFiltered(false);
            setSelected(event.target.checked ? visibleIds : []);
          }} className="size-4 accent-primary" />
        Sélectionner la page ({items.length})
      </label>
      {exam && total > items.length && <button type="button" onClick={() => {
        setAllFiltered(true);
        setSelected([]);
      }} className="font-semibold text-primary underline underline-offset-2">
        Sélectionner tous les résultats filtrés ({total})
      </button>}
      {selectionCount > 0 && <button type="button" onClick={() => {
        setAllFiltered(false);
        setSelected([]);
      }} className="text-muted-foreground underline underline-offset-2">Effacer</button>}
      <span className="ml-auto text-muted-foreground">{selectionCount} sélectionné(s)</span>
    </div>
    {allFiltered && <p className="border-l-4 border-[#b58b52] bg-card px-4 py-3 text-sm">
      Tous les résultats correspondant aux filtres de cet examen seront traités, y compris les autres pages.
    </p>}
    <div className="flex flex-wrap items-center gap-2">
      <button name="operation" value="review" type="submit" disabled={!selectionCount}
        className="border border-primary px-4 py-2 text-sm font-semibold text-primary disabled:opacity-50">Marquer comme relus</button>
      <button name="operation" value="publish" type="submit" disabled={!selectionCount}
        className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">Publier</button>
      <button name="operation" value="review_publish" type="submit" disabled={!selectionCount}
        className="border border-primary bg-primary/10 px-4 py-2 text-sm font-semibold text-primary disabled:opacity-50">Valider et publier</button>
      <button name="operation" value="withdraw" type="submit" disabled={!selectionCount}
        className="border border-border px-4 py-2 text-sm font-semibold disabled:opacity-50">Retirer</button>
      <p className="w-full text-xs text-muted-foreground">
        « Valider et publier » atteste votre relecture de cette sélection. Les contenus incomplets sont ignorés. Pour publier une question liée à un texte, publiez d’abord ce texte.
      </p>
    </div>
    <div className="space-y-2">{items.map((item) =>
      <div key={item.id} className="flex items-start gap-3 border border-border bg-card p-4">
        <input type="checkbox" aria-label={`Sélectionner ${item.externalId}`} checked={allFiltered || selected.includes(item.id)}
          onChange={() => toggle(item.id)} className="mt-1 size-4 shrink-0 accent-primary" />
        <Link href={item.href} className="min-w-0 flex-1 hover:text-primary">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{item.externalId}</span>
            <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${item.status === "PUBLISHED" ? "border-emerald-600 text-emerald-700 dark:text-emerald-300" : "border-border text-muted-foreground"}`}>
              {item.status === "DRAFT" ? "Brouillon" : item.status === "PUBLISHED" ? "Publié" : item.status}
            </span>
            {item.reviewed && <span className="text-xs text-emerald-700">Relu</span>}
            {item.hasText && <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">Texte lié</span>}
            {item.hasFigure && <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">Figure liée</span>}
          </div>
          <p className="mt-2 line-clamp-2 font-medium">{item.title}</p>
          <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
        </Link>
      </div>,
    )}</div>
  </form>;
}
