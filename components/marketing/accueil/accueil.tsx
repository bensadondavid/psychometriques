import { AccueilAcces } from "./acces";
import { AccueilAppelAction } from "./appel-action";
import { AccueilExamens } from "./examens";
import { AccueilEpreuveType } from "./epreuve-type";
import { AccueilFaq } from "./faq";
import { AccueilHero } from "./hero";
import { AccueilPedagogie } from "./pedagogie";

export function Accueil() {
  return (
    <main>
      <AccueilHero />
      <AccueilExamens />
      <AccueilEpreuveType />
      <AccueilPedagogie />
      <AccueilAcces />
      <AccueilFaq />
      <AccueilAppelAction />
    </main>
  );
}
