import Link from "next/link";

import styles from "./accueil.module.css";

const examens = [
  { label: "AMIRNET", href: "/formations/amirnet" },
  { label: "Psychométriques", href: "/formations/psychometriques" },
  { label: "YAELNET", href: "/formations/yaelnet" },
] as const;

export function AccueilExamens() {
  return (
    <section
      id="examens"
      className={styles.examensSection}
      aria-label="Choisir son examen"
    >
      <div className={styles.examensList}>
        {examens.map((examen) => (
          <Link key={examen.label} href={examen.href} className={styles.examen}>
            <span className={styles.beam} aria-hidden="true" />
            <span className={styles.examenName}>{examen.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
