"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    kicker: "Votre objectif",
    title: "Vous savez où vous allez.",
    text: "Psychométrique, AMIR, YAEL ou hébreu : entrez directement dans la préparation qui correspond à votre projet.",
  },
  {
    kicker: "01 · La leçon",
    title: "Commencez par comprendre.",
    text: "Chaque notion trouve sa place dans un parcours lisible, sans disperser le cours entre plusieurs outils.",
  },
  {
    kicker: "02 · L’exercice",
    title: "Passez immédiatement à la pratique.",
    text: "L’entraînement prolonge la leçon. Les questions ne sont pas un catalogue isolé : elles servent une progression.",
  },
  {
    kicker: "03 · La correction",
    title: "Transformez l’erreur en repère.",
    text: "La correction ramène vers ce qu’il faut comprendre, puis vers la prochaine étape à travailler.",
  },
  {
    kicker: "04 · La progression",
    title: "Continuez votre parcours en Israël.",
    text: "Depuis la France ou déjà sur place, retrouvez le même fil entre études, exigences linguistiques et hébreu du quotidien.",
  },
] as const;

function JourneyVisual({ active }: { active: number }) {
  return (
    <div className="journey-visual" data-stage={active} aria-hidden="true">
      <div className="journey-halo journey-halo--one" />
      <div className="journey-halo journey-halo--two" />
      <div className="journey-device">
        <div className="journey-device__top">
          <span>PARCOURS</span>
          <span>0{active + 1}</span>
        </div>
        <div className="journey-scene journey-scene--choice">
          <span className="journey-label">Choisissez votre préparation</span>
          <div className="journey-choice-list">
            <i>Psychométrique</i>
            <i>AMIR</i>
            <i>YAEL</i>
            <i>Oulpan</i>
          </div>
        </div>
        <div className="journey-scene journey-scene--lesson">
          <span className="journey-label">La notion</span>
          <strong>Comprendre avant de répondre.</strong>
          <div className="journey-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="journey-scene journey-scene--exercise">
          <span className="journey-label">Question</span>
          <strong>Mettez la notion en pratique.</strong>
          <div className="journey-options">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
          </div>
        </div>
        <div className="journey-scene journey-scene--correction">
          <span className="journey-label">Correction</span>
          <strong>Comprenez le raisonnement.</strong>
          <div className="journey-answer">
            <i>✓</i>
            <span>La réponse devient une explication.</span>
          </div>
        </div>
        <div className="journey-scene journey-scene--progress">
          <span className="journey-label">La suite</span>
          <strong>Votre parcours reste avec vous.</strong>
          <div className="journey-route">
            <i />
            <i />
            <i />
            <i />
          </div>
          <small>France&nbsp;&nbsp;→&nbsp;&nbsp;Israël</small>
        </div>
      </div>
      <div className="journey-shadow" />
    </div>
  );
}

export function MarketingJourney() {
  const [active, setActive] = useState(0);
  const stageRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-32% 0px -32% 0px", threshold: 0.05 },
    );

    for (const node of stageRefs.current) if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="parcours" className="journey-shell">
      <div className="journey-sticky">
        <div className="journey-progress" aria-hidden="true">
          <span
            style={{ height: `${(active / (stages.length - 1)) * 100}%` }}
          />
        </div>
        <JourneyVisual active={active} />
      </div>
      <div className="journey-copy">
        {stages.map((stage, index) => (
          <article
            className="journey-step"
            data-active={active === index}
            data-index={index}
            key={stage.kicker}
            ref={(node) => {
              stageRefs.current[index] = node;
            }}
          >
            <p>{stage.kicker}</p>
            <h2>{stage.title}</h2>
            <span>{stage.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
