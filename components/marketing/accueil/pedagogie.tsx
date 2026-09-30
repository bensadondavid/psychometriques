const dispositifs = [
  {
    titre: "Comprendre",
    texte:
      "Partir d’une notion et voir comment elle s’applique dans une question.",
  },
  {
    titre: "S’exercer",
    texte:
      "Travailler par compétence, puis réunir les acquis dans des séries chronométrées.",
  },
  {
    titre: "Corriger",
    texte:
      "Reprendre le raisonnement, y compris les erreurs qui rendent les autres réponses plausibles.",
  },
  {
    titre: "Revenir",
    texte:
      "Identifier les notions à retravailler avant de poursuivre le parcours.",
  },
] as const;

export function AccueilPedagogie() {
  return (
    <section
      id="methode"
      className="scroll-mt-20 bg-[#45121d] py-20 text-[#fef9f0] lg:py-28"
      aria-labelledby="pedagogie-title"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e7c68f]">
            La méthode
          </p>
          <h2
            id="pedagogie-title"
            className="mt-6 max-w-md font-serif text-[clamp(2.8rem,4.5vw,5rem)] leading-[1.02] tracking-[-0.035em]"
          >
            Du premier essai à la bonne méthode.
          </h2>
          <p className="mt-7 max-w-md leading-relaxed text-[#e9ddd6]">
            Une préparation se construit en revenant sur ce que chaque question
            révèle, avant de passer à la suivante.
          </p>
        </div>
        <ol className="border-t border-white/35">
          {dispositifs.map((dispositif, index) => (
            <li
              key={dispositif.titre}
              className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/25 py-6 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8"
            >
              <span className="pt-1 text-sm text-[#e7c68f]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl">
                {dispositif.titre}
              </h3>
              <p className="col-start-2 leading-relaxed text-[#e9ddd6] sm:col-start-3">
                {dispositif.texte}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
