import { Check, CreditCard } from "lucide-react";
import Link from "next/link";

import { parseSelectableOffer, selectableOffers } from "@/lib/offers/selection";

type SubscriptionPageProps = {
  searchParams: Promise<{ offer?: string | string[] }>;
};

export default async function SubscriptionPage({
  searchParams,
}: SubscriptionPageProps) {
  const offerKey = parseSelectableOffer((await searchParams).offer);

  if (!offerKey) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Abonnement
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Choisissez votre préparation
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Aucun pack n’a encore été sélectionné. Consultez les formules pour
          poursuivre votre inscription.
        </p>
        <Link
          href="/tarifs"
          className="mt-8 inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Voir les packs
        </Link>
      </main>
    );
  }

  const offer = selectableOffers[offerKey];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Votre choix
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Votre pack a bien été conservé.
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Vous pourrez poursuivre vers le paiement depuis cette page lorsque
          celui-ci sera activé.
        </p>
      </header>

      <section className="mt-9 border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9b7a48]">
              Pack sélectionné
            </p>
            <h2 className="mt-2 font-serif text-3xl text-primary">
              {offer.title}
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="size-4 text-primary" aria-hidden="true" />
              Sans engagement, résiliable à tout moment
            </p>
          </div>
          <p className="font-serif text-4xl text-primary">
            {offer.monthlyPrice} ₪
            <span className="ml-2 font-sans text-sm text-muted-foreground">
              / mois
            </span>
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
          <CreditCard className="size-5 text-primary" aria-hidden="true" />
          Le paiement n’est pas encore activé.
        </div>
      </section>
    </main>
  );
}
