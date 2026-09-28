import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quelles préparations sont accessibles sur la plateforme ?",
    reponse:
      "Les préparations Psychométriques, AMIRNET et YAEL/YAELNET sont accessibles depuis le même espace. Vous pouvez rejoindre directement le parcours correspondant à votre objectif.",
  },
  {
    question: "Comment s’organise une séance de travail ?",
    reponse:
      "La progression suit une structure simple : un cours pose la notion, un exercice permet de l’appliquer et la correction détaille la méthode utile.",
  },
  {
    question: "Comment sont présentées les questions en hébreu ?",
    reponse:
      "L’interface reste francophone tandis que les contenus en hébreu conservent leur sens de lecture RTL et une mise en page adaptée.",
  },
  {
    question: "Puis-je avancer à mon propre rythme ?",
    reponse:
      "Oui. Vous pouvez organiser votre travail par notion, poursuivre un parcours complet ou revenir sur une compétence qui demande davantage d’entraînement.",
  },
  {
    question: "Que contient une correction détaillée ?",
    reponse:
      "La correction présente le raisonnement utile, les étapes de résolution, le raccourci à retenir et les erreurs qui conduisent aux principaux distracteurs.",
  },
  {
    question: "Puis-je préparer plusieurs examens depuis le même compte ?",
    reponse:
      "Oui. Les packs permettent de réunir Psychométriques, AMIRNET et YAEL/YAELNET dans le même espace personnel selon la formule choisie.",
  },
  {
    question: "Comment utiliser les entraînements chronométrés ?",
    reponse:
      "Commencez par maîtriser la méthode sans pression, puis activez progressivement le chronomètre pour travailler la vitesse de décision et la gestion du temps.",
  },
] as const;

export function AccueilFaq() {
  return (
    <section
      id="faq"
      className="bg-[#f8f3ea] py-20 text-[#1d1c16] lg:py-24"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto w-full max-w-4xl space-y-12 px-6 lg:px-12">
        <header className="space-y-3">
          <p className="flex items-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            Renseignements utiles
          </p>
          <h2
            id="faq-title"
            className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#45121d]"
          >
            Questions Fréquentes
          </h2>
          <p className="max-w-2xl text-base leading-[1.65] text-[#524344]">
            L’essentiel sur l’organisation des parcours et le fonctionnement de
            la plateforme.
          </p>
        </header>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-sm bg-white p-6 shadow-[0_4px_20px_rgba(42,33,29,0.08)]"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl leading-[1.3] font-medium text-[#45121d] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d] [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-[#4e5e7f] transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 border-t border-[#e7e2d9] pt-4 text-sm leading-[1.55] text-[#524344]">
                {item.reponse}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
