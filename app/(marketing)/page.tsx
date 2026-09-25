import type { Metadata } from "next";

import { Accueil } from "@/components/marketing/accueil/accueil";

export const metadata: Metadata = {
  title: "Préparer ses examens",
  description:
    "Préparez les examens psychométriques, AMIR et YAEL, et apprenez l’hébreu dans une plateforme francophone pensée pour votre parcours en Israël.",
};

export default function Home() {
  return <Accueil />;
}
