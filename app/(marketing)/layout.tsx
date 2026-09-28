import Image from "next/image";
import Link from "next/link";

import { MarketingHeader } from "@/components/marketing/marketing-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fef9f0]">
      <MarketingHeader />
      <div className="flex-1">{children}</div>
      <footer className="bg-[#f8f3ea] py-16 text-[#524344]">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <Image
                src="/logo-psychos.png"
                height={44}
                width={44}
                alt="Psychometriques.fr"
              />
              <p className="max-w-md pr-6 text-sm leading-[1.55]">
                Plateforme francophone de préparation aux examens
                Psychométriques, AMIRNET et YAEL/YAELNET.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[0.6875rem] font-semibold tracking-[0.22em] text-[#45121d] uppercase">
                Cursus préparatoires
              </p>
              <div className="grid gap-2.5 text-sm">
                <Link href="/#formations" className="hover:text-[#1d1c16]">
                  Psychométriques
                </Link>
                <Link href="/#formations" className="hover:text-[#1d1c16]">
                  AMIRNET
                </Link>
                <Link href="/#formations" className="hover:text-[#1d1c16]">
                  YAEL & YAELNET
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-4 text-[0.6875rem] font-semibold tracking-[0.22em] text-[#45121d] uppercase">
                Ressources & accès
              </p>
              <div className="grid gap-2.5 text-sm">
                <Link href="/#question" className="hover:text-[#1d1c16]">
                  Question type
                </Link>
                <Link href="/#methode" className="hover:text-[#1d1c16]">
                  Notre méthode
                </Link>
                <Link href="/#acces" className="hover:text-[#1d1c16]">
                  Packs & tarifs
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-4 text-[0.6875rem] font-semibold tracking-[0.22em] text-[#45121d] uppercase">
                Espace personnel
              </p>
              <div className="grid gap-2.5 text-sm">
                <Link href="/sign-in" className="hover:text-[#1d1c16]">
                  Se connecter
                </Link>
                <Link href="/sign-up" className="hover:text-[#1d1c16]">
                  Créer un compte
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 border-t border-[#e7e2d9] pt-8 text-sm">
            <p>© 2026 Psychometriques.fr. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
