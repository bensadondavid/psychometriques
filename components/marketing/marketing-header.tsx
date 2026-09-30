"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/psychometriques", label: "Psychométriques" },
  { href: "/langues", label: "Langues" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "Questions fréquentes" },
] as const;

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MarketingHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fef9f0]/90 text-[#45121d] shadow-[0_1px_8px_rgba(42,33,29,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="relative z-10 order-2 flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
          aria-label="Accueil"
        >
          <Image
            src="/logo-psychos.png"
            height={48}
            width={48}
            alt="Psychometriques.fr"
            priority
          />
        </Link>

        <div className="order-1">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-sm border border-[#cbbfae] bg-transparent text-[#45121d] transition-colors hover:bg-[#45121d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              showCloseButton={false}
              className="h-dvh max-w-none gap-0 border-0 bg-[#fef9f0] p-0 text-[#45121d] shadow-[0_4px_20px_rgba(42,33,29,0.08)] data-[side=left]:w-screen data-[side=left]:border-r-0 sm:max-w-[34rem] sm:data-[side=left]:w-[34rem]"
            >
              <SheetHeader className="flex h-20 flex-row items-center justify-between px-4 py-0 sm:px-6">
                <SheetClose asChild>
                  <button
                    type="button"
                    className="grid size-11 place-items-center rounded-sm border border-[#cbbfae] text-[#45121d] transition-colors hover:bg-[#45121d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
                    aria-label="Fermer le menu"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </SheetClose>
                <SheetTitle className="sr-only">
                  Navigation principale
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Accéder aux pages principales du site.
                </SheetDescription>
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
                    aria-label="Retour à l’accueil"
                  >
                    <Image
                      src="/logo-psychos.png"
                      height={56}
                      width={56}
                      alt="Psychometriques.fr"
                    />
                  </Link>
                </SheetClose>
              </SheetHeader>

              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pt-10 pb-6 sm:px-8 sm:pb-8">
                <nav aria-label="Navigation principale" className="grid gap-2">
                  {navigation.map((item) => {
                    const isCurrent = isCurrentPath(pathname, item.href);

                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={cn(
                            "group flex items-center justify-between border-b border-[#d7c1c3] px-1 py-4 font-serif text-3xl leading-[1.08] tracking-tight text-[#45121d]/65 transition-colors hover:text-[#45121d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]",
                            isCurrent && "text-[#45121d]",
                          )}
                        >
                          <span>{item.label}</span>
                          <span
                            className={cn(
                              "size-1.5 rounded-full bg-[#d6b476] opacity-0 transition-opacity",
                              isCurrent && "opacity-100",
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      </SheetClose>
                    );
                  })}

                  <SheetClose asChild>
                    <Link
                      href="/sign-in"
                      aria-current={
                        isCurrentPath(pathname, "/sign-in") ? "page" : undefined
                      }
                      className="mt-6 flex items-center justify-center rounded-sm bg-[#45121d] px-5 py-5 text-white transition-colors hover:bg-[#280009] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
                    >
                      Espace personnel
                    </Link>
                  </SheetClose>
                </nav>

                <div className="mt-auto pt-8">
                  <p className="max-w-xs text-sm leading-6 text-[#2a211d]/52">
                    Psychométriques, AMIRNET et YAEL/YAELNET réunis dans un même
                    espace de préparation.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
