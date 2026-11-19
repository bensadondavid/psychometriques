import { AccueilExamens } from "./examens";
import { AccueilHero } from "./hero";

export function Accueil() {
  return (
    <main>
      <AccueilHero />
      <AccueilExamens />
    </main>
  );
}
