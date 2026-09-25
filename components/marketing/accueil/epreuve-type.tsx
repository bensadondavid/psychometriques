import styles from "./accueil.module.css";

const reponses = [
  { lettre: "A", valeur: "2 cm", correcte: false },
  { lettre: "B", valeur: "2√2 cm", correcte: false },
  { lettre: "C", valeur: "2√3 cm", correcte: true },
  { lettre: "D", valeur: "4√3 cm", correcte: false },
] as const;

const etapes = [
  {
    titre: "Identifier la structure",
    texte:
      "Le triangle ABC est rectangle en C : tout angle inscrit dans un demi-cercle et appuyé sur son diamètre est droit.",
  },
  {
    titre: "Reconnaître le triangle remarquable",
    texte:
      "Avec AB = 8 cm et un angle de 30°, on obtient BC = 4 cm et AC = 4√3 cm.",
  },
  {
    titre: "Calculer la hauteur",
    texte:
      "L’aire du triangle s’écrit de deux façons : (AC × BC) ÷ 2 = (AB × CD) ÷ 2.",
  },
] as const;

export function AccueilEpreuveType() {
  return (
    <section
      className={styles.revealedSection}
      aria-labelledby="epreuve-type-title"
    >
      <div className={styles.revealedInner}>
        <header className={styles.revealedHeader}>
          <p className={styles.revealedEyebrow}>Épreuve type · Révélée</p>
          <div className={styles.revealedLead}>
            <h2 id="epreuve-type-title" className={styles.revealedTitle}>
              Anatomie d’une question.
            </h2>
            <p className={styles.revealedIntro}>
              Comprendre ce que l’exercice mesure, reconnaître sa structure,
              puis choisir le chemin le plus court.
            </p>
          </div>
        </header>

        <div className={styles.exerciseStage}>
          <article className={styles.questionColumn}>
            <div className={styles.questionMeta}>
              <span>Exemple pédagogique</span>
              <span>Réflexion quantitative</span>
            </div>

            <p className={styles.questionText}>
              Soit un demi-cercle de diamètre <i>AB</i> = 8 cm. Le point{" "}
              <i>C</i> appartient au demi-cercle et l’angle <i>CAB</i> mesure
              30°. Le point <i>D</i> est le projeté orthogonal de <i>C</i> sur [
              <i>AB</i>]. Quelle est la longueur de [<i>CD</i>] ?
            </p>

            <figure className={styles.geometryFigure}>
              <svg
                viewBox="0 0 680 330"
                role="img"
                aria-labelledby="geometry-title geometry-description"
              >
                <title id="geometry-title">Demi-cercle de diamètre AB</title>
                <desc id="geometry-description">
                  Le point C est sur le demi-cercle et sa projection D se trouve
                  sur le diamètre AB. L’angle CAB mesure trente degrés.
                </desc>
                <path
                  className={styles.arc}
                  d="M100 250 A240 240 0 0 1 580 250"
                />
                <path className={styles.figureLine} d="M100 250 H580" />
                <path
                  className={styles.figureLine}
                  d="M100 250 L460 42 L580 250"
                />
                <path className={styles.figureGuide} d="M460 42 V250" />
                <path
                  className={styles.angleArc}
                  d="M146 250 A46 46 0 0 0 140 227"
                />
                <path className={styles.rightAngle} d="M444 250 V234 H460" />
                <circle
                  className={styles.figurePoint}
                  cx="100"
                  cy="250"
                  r="4"
                />
                <circle
                  className={styles.figurePoint}
                  cx="340"
                  cy="250"
                  r="4"
                />
                <circle className={styles.figurePoint} cx="460" cy="42" r="4" />
                <circle
                  className={styles.figurePoint}
                  cx="460"
                  cy="250"
                  r="4"
                />
                <circle
                  className={styles.figurePoint}
                  cx="580"
                  cy="250"
                  r="4"
                />
                <text className={styles.figureLabel} x="82" y="280">
                  A
                </text>
                <text className={styles.figureLabel} x="327" y="280">
                  O
                </text>
                <text className={styles.figureLabel} x="454" y="24">
                  C
                </text>
                <text className={styles.figureLabel} x="450" y="280">
                  D
                </text>
                <text className={styles.figureLabel} x="575" y="280">
                  B
                </text>
                <text className={styles.angleLabel} x="153" y="237">
                  30°
                </text>
              </svg>
              <figcaption>Figure de raisonnement · non à l’échelle</figcaption>
            </figure>

            <div className={styles.answers} aria-label="Choix de réponse">
              {reponses.map((reponse) => (
                <div
                  key={reponse.lettre}
                  className={
                    reponse.correcte
                      ? `${styles.answer} ${styles.answerCorrect}`
                      : styles.answer
                  }
                >
                  <span className={styles.answerLetter}>{reponse.lettre}</span>
                  <span>{reponse.valeur}</span>
                  {reponse.correcte ? (
                    <span className={styles.answerStatus}>Réponse</span>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <aside
            className={styles.methodColumn}
            aria-label="Méthode de résolution"
          >
            <p className={styles.methodKicker}>La méthode directe</p>
            <h3 className={styles.methodTitle}>
              Décomposer avant de calculer.
            </h3>

            <div className={styles.methodSteps}>
              {etapes.map((etape) => (
                <div key={etape.titre} className={styles.methodStep}>
                  <h4>{etape.titre}</h4>
                  <p>{etape.texte}</p>
                </div>
              ))}
            </div>

            <div className={styles.result}>
              <span>Conclusion</span>
              <strong>CD = 2√3 cm</strong>
            </div>

            <p className={styles.methodNote}>
              La correction révèle la structure utile, puis le calcul le plus
              court. L’objectif est de construire un réflexe reproductible.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
