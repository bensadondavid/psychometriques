const reponses = [
  { lettre: "A", valeur: "2 cm", correcte: false },
  { lettre: "B", valeur: "2√2 cm", correcte: false },
  { lettre: "C", valeur: "2√3 cm", correcte: true },
  { lettre: "D", valeur: "4√3 cm", correcte: false },
] as const;

const etapes = [
  {
    numero: "Étape 1",
    titre: "Identifier l’angle au centre",
    texte:
      "L’arc AB mesure 180°. L’arc AC en représente le tiers : l’angle AOC mesure donc 60°.",
  },
  {
    numero: "Étape 2",
    titre: "Lire le triangle rectangle",
    texte:
      "Le rayon du demi-cercle vaut 4 cm. OCD est rectangle en D et OC en est l’hypoténuse.",
  },
  {
    numero: "Étape 3",
    titre: "Appliquer la relation directe",
    texte:
      "Dans OCD, sin(60°) = CD ÷ OC. On obtient CD = 4 × √3 ÷ 2, soit 2√3 cm.",
  },
] as const;

export function AccueilEpreuveType() {
  return (
    <section
      id="question"
      className="bg-[#fef9f0] py-20 text-[#1d1c16] lg:py-24"
      aria-labelledby="epreuve-type-title"
    >
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 lg:px-12">
        <header className="max-w-3xl space-y-3">
          <p className="flex items-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            Épreuve type révélée
          </p>
          <h2
            id="epreuve-type-title"
            className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#45121d]"
          >
            Anatomie d’une Question : La Méthode Directe
          </h2>
          <p className="max-w-2xl text-base leading-[1.65] text-[#524344]">
            Une question complète, sa représentation et le raisonnement qui
            permet d’arriver à la réponse sans détour.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <article className="space-y-6 rounded-sm bg-white p-6 shadow-[0_4px_20px_rgba(42,33,29,0.08)] sm:p-8 lg:col-span-7">
            <div className="flex flex-col justify-between gap-2 border-b border-[#e7e2d9] pb-4 font-mono text-xs tracking-[0.05em] text-[#4e5e7f] uppercase sm:flex-row">
              <span>Section II · Réflexion quantitative</span>
              <span className="text-[#45121d]">Question n° 17</span>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-[1.65]">
                Soit un demi-cercle de centre O et de diamètre AB = 8 cm. Un
                point C est placé sur le demi-cercle tel que l’arc AC soit égal
                au tiers de l’arc AB. Le point D est le projeté orthogonal de C
                sur le diamètre AB.
              </p>
              <p className="font-semibold text-[#45121d]">
                Quelle est la longueur exacte du segment CD ?
              </p>
            </div>

            <figure className="rounded-sm bg-[#f8f3ea] p-5 sm:p-6">
              <figcaption className="mb-3 text-center text-[0.6875rem] font-semibold tracking-[0.22em] text-[#4e5e7f] uppercase">
                Figure 17.1 — Représentation euclidienne
              </figcaption>
              <svg
                className="mx-auto block h-auto w-full max-w-sm text-[#45121d]"
                viewBox="0 0 400 210"
                role="img"
                aria-labelledby="geometry-title geometry-description"
              >
                <title id="geometry-title">Demi-cercle de diamètre AB</title>
                <desc id="geometry-description">
                  Le point C est placé sur le demi-cercle et sa projection D se
                  trouve sur le diamètre AB.
                </desc>
                <line
                  x1="40"
                  x2="360"
                  y1="180"
                  y2="180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <path
                  d="M 40 180 A 160 160 0 0 1 360 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <line
                  x1="200"
                  x2="120"
                  y1="180"
                  y2="41.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="120"
                  x2="120"
                  y1="41.4"
                  y2="180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M 120 168 L 132 168 L 132 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M 175 180 A 25 25 0 0 0 187 158"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <circle cx="200" cy="180" r="2.5" fill="currentColor" />
                <circle cx="120" cy="41.4" r="3" fill="currentColor" />
                <circle cx="120" cy="180" r="2.5" fill="currentColor" />
                <g
                  fill="currentColor"
                  fontFamily="Plus Jakarta Sans"
                  fontSize="12"
                  fontWeight="600"
                >
                  <text x="24" y="184">
                    A
                  </text>
                  <text x="368" y="184">
                    B
                  </text>
                  <text x="114" y="30">
                    C
                  </text>
                  <text x="115" y="200">
                    D
                  </text>
                  <text x="196" y="200">
                    O
                  </text>
                  <text x="165" y="160" fontSize="9">
                    60°
                  </text>
                </g>
              </svg>
            </figure>

            <div className="space-y-3 pt-2">
              <p className="text-[0.6875rem] font-semibold tracking-[0.22em] text-[#4e5e7f] uppercase">
                Propositions
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {reponses.map((reponse) => (
                  <div
                    key={reponse.lettre}
                    className={
                      reponse.correcte
                        ? "flex items-center gap-3 rounded-sm bg-[#d7e2ff] p-3 font-medium text-[#45121d]"
                        : "flex items-center gap-3 rounded-sm border border-[#d7c1c3]/30 bg-[#fef9f0] p-3"
                    }
                  >
                    <span
                      className={
                        reponse.correcte
                          ? "grid size-6 place-items-center rounded-sm bg-[#45121d] font-serif text-lg text-[#fef9f0]"
                          : "grid size-6 place-items-center font-serif text-lg text-[#45121d]"
                      }
                    >
                      {reponse.lettre}
                    </span>
                    <span className="text-sm">{reponse.valeur}</span>
                    {reponse.correcte ? (
                      <span className="ml-auto text-xs">Réponse</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside
            className="space-y-6 lg:col-span-5"
            aria-label="Méthode de résolution"
          >
            <div className="space-y-6 rounded-sm bg-[#280009] p-6 text-white shadow-[0_4px_20px_rgba(42,33,29,0.08)] sm:p-8">
              <p className="border-b border-[#45121d] pb-3 text-[0.6875rem] font-semibold tracking-[0.22em] text-[#ded9d1] uppercase">
                Méthode de résolution
              </p>
              <div className="space-y-5">
                {etapes.map((etape) => (
                  <div key={etape.numero}>
                    <p className="font-mono text-xs text-[#ffdea5] uppercase">
                      {etape.numero} · {etape.titre}
                    </p>
                    <p className="mt-1 text-sm leading-[1.55] text-[#f5f0e7]">
                      {etape.texte}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#45121d] pt-4">
                <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-[#ffdad6] uppercase">
                  Résultat
                </p>
                <p className="mt-2 font-serif text-3xl">CD = 2√3 cm</p>
              </div>
            </div>
            <div className="rounded-sm bg-[#ece8df] p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.22em] text-[#4e5e7f] uppercase">
                Réflexe utile
              </p>
              <p className="mt-2 text-sm leading-[1.55] text-[#524344]">
                Reconnaître la structure géométrique avant de poser le calcul
                permet de gagner du temps et d’éviter le distracteur construit à
                partir du diamètre.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
