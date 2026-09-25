import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./accueil.module.css";

export function AccueilHero() {
  return (
    <section className={styles.hero} aria-labelledby="accueil-title">
      <div className={styles.watermark} aria-hidden="true" />

      <div className={styles.heroContent}>
        <h1 id="accueil-title" className={styles.title}>
          <span className={styles.titleLine}>
            <span>La réussite</span>
          </span>
          <span className="text-accent">
            <span>ne s’improvise pas.</span>
          </span>
        </h1>

        <p className={styles.statement}>
          Une préparation exigeante et méthodique pour celles et ceux qui
          refusent de laisser leur avenir au hasard.
        </p>

        <div className={styles.actions}>
          <Button
            asChild
            size="lg"
            className="h-13 rounded-[2px] bg-[#f3ece1] px-7 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-[#131a22] shadow-none hover:bg-[#d3aa8e]"
          >
            <Link href="#examens">Choisir mon examen</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-13 rounded-[2px] border-[#f3ece1]/30 bg-transparent px-7 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-[#f3ece1] shadow-none hover:bg-[#f3ece1] hover:text-[#131a22]"
          >
            <Link href="/methode">Découvrir la méthode</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
