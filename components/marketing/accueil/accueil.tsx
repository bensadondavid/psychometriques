import { AccueilExamens } from "./examens";
import { AccueilEpreuveType } from "./epreuve-type";
import { AccueilHero } from "./hero";

export function Accueil() {
  return (
    <main>
      <AccueilHero />
      <AccueilEpreuveType />
      <AccueilExamens />
    </main>
  );
}
