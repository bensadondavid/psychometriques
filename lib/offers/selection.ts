export const selectableOffers = {
  amirnet: { title: "AMIRNET", monthlyPrice: 79 },
  psychometriques: { title: "Psychométriques", monthlyPrice: 119 },
  yaelnet: { title: "YAELNET", monthlyPrice: 79 },
  langues: { title: "Pack langues", monthlyPrice: 119 },
  complet: { title: "Pack complet", monthlyPrice: 179 },
} as const;

export type SelectableOfferKey = keyof typeof selectableOffers;

export function parseSelectableOffer(
  value: string | string[] | null | undefined,
): SelectableOfferKey | null {
  if (typeof value !== "string") return null;

  return Object.prototype.hasOwnProperty.call(selectableOffers, value)
    ? (value as SelectableOfferKey)
    : null;
}

export function getPostAuthDestination(
  value: string | string[] | null | undefined,
) {
  const offer = parseSelectableOffer(value);

  return offer
    ? `/account/abonnement?offer=${encodeURIComponent(offer)}`
    : "/account/home";
}

export function getAuthUrl(
  path: "/sign-in" | "/sign-up",
  value: string | string[] | null | undefined,
) {
  const offer = parseSelectableOffer(value);

  return offer ? `${path}?offer=${encodeURIComponent(offer)}` : path;
}
