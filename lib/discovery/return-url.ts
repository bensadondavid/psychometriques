import { getPublicProgram } from "@/lib/content/catalog";

export function parseDiscoveryReturn(value: string | null) {
  return value && getPublicProgram(value) ? value : null;
}

export function discoveryReturnUrl(slug: string) {
  return `/account/decouverte?examen=${encodeURIComponent(slug)}`;
}

export function discoveryAuthUrl(path: "/sign-in" | "/sign-up", slug: string) {
  return `${path}?decouverte=${encodeURIComponent(slug)}`;
}
