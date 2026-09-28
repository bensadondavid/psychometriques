const dispositifs = [
  {
    numero: "01",
    titre: "Banque raisonnée",
    texte:
      "Des questions classées par compétence pour isoler une notion, la comprendre et la travailler avec précision.",
    legende: "Indexation fine",
  },
  {
    numero: "02",
    titre: "Simulations chronométrées",
    texte:
      "Des séries conçues pour apprendre à décider sous contrainte de temps tout en conservant une méthode fiable.",
    legende: "Conditions réelles",
  },
  {
    numero: "03",
    titre: "Diagnostic des lacunes",
    texte:
      "Chaque erreur devient une indication concrète sur la notion à revoir et le réflexe à consolider.",
    legende: "Bilan personnalisé",
  },
  {
    numero: "04",
    titre: "Corrections détaillées",
    texte:
      "Les solutions explicitent le raisonnement, les raccourcis utiles et les pièges qui structurent les distracteurs.",
    legende: "Méthode reproductible",
  },
] as const;

export function AccueilPedagogie() {
  return (
    <section
      id="methode"
      className="bg-[#f8f3ea] py-20 text-[#1d1c16] lg:py-24"
      aria-labelledby="pedagogie-title"
    >
      <div className="mx-auto w-full max-w-7xl space-y-16 px-6 lg:px-12">
        <header className="mx-auto max-w-2xl space-y-3 text-center">
          <p className="flex items-center justify-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            Ingénierie de formation
            <span className="h-px w-6 bg-current" aria-hidden="true" />
          </p>
          <h2
            id="pedagogie-title"
            className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#45121d]"
          >
            Quatre Dispositifs pour l’Excellence
          </h2>
          <p className="text-base leading-[1.65] text-[#524344]">
            Chaque composant du parcours relie compréhension, entraînement et
            analyse pour construire des réflexes durables.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dispositifs.map((dispositif) => (
            <article
              key={dispositif.numero}
              className="space-y-4 rounded-sm bg-white p-6 shadow-[0_4px_20px_rgba(42,33,29,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(42,33,29,0.12)]"
            >
              <span className="grid size-10 place-items-center rounded-sm bg-[#f2ede4] font-mono text-sm font-bold text-[#45121d]">
                {dispositif.numero}
              </span>
              <h3 className="font-serif text-2xl leading-[1.3] font-medium tracking-[-0.01em] text-[#45121d]">
                {dispositif.titre}
              </h3>
              <p className="text-sm leading-[1.55] text-[#524344]">
                {dispositif.texte}
              </p>
              <p className="pt-2 font-mono text-xs text-[#4e5e7f] uppercase">
                {dispositif.legende}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
