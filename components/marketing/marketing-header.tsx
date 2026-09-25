"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
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
  { href: "/formations/psychometriques", label: "Psychométriques" },
  { href: "/formations/amirnet", label: "AMIRNET" },
  { href: "/formations/yaelnet", label: "YAELNET" },
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
    <header className="sticky top-0 z-50 bg-[#131a22] text-[#f3ece1]">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 order-2 rounded-full bg-[#f3ece1] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3aa8e]"
          aria-label="Accueil"
        >
          <Image
            src="/logo-psychos.png"
            height={64}
            width={64}
            alt="Examens et Hébreu"
            priority
          />
        </Link>

        <div className="order-1">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-sm border border-[#f3ece1]/25 bg-transparent text-[#f3ece1] transition-colors hover:bg-[#f3ece1] hover:text-[#131a22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3aa8e]"
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              showCloseButton={false}
              className="h-dvh max-w-none gap-0 border-0 bg-[#131a22] p-0 text-[#f3ece1] shadow-2xl data-[side=left]:w-screen data-[side=left]:border-r-0 sm:max-w-[28rem] sm:data-[side=left]:w-[28rem]"
            >
              <SheetHeader className="flex h-20 flex-row items-center justify-between px-4 py-0 sm:px-6">
                <SheetClose asChild>
                  <button
                    type="button"
                    className="grid size-11 place-items-center rounded-sm border border-[#f3ece1]/25 text-[#f3ece1] transition-colors hover:bg-[#f3ece1] hover:text-[#131a22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3aa8e]"
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
                    className="rounded-full bg-[#f3ece1] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3aa8e]"
                    aria-label="Retour à l’accueil"
                  >
                    <Image
                      src="/logo-psychos.png"
                      height={56}
                      width={56}
                      alt="Examens et Hébreu"
                    />
                  </Link>
                </SheetClose>
              </SheetHeader>

              <div className="flex min-h-0 flex-1 flex-col px-5 pb-6 pt-10 sm:px-8 sm:pb-8">
                <nav aria-label="Navigation principale" className="grid gap-2">
                  {navigation.map((item) => {
                    const isCurrent = isCurrentPath(pathname, item.href);

                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={cn(
                            "group flex items-center justify-between rounded-sm px-2 py-3 font-serif text-[clamp(2.3rem,8vw,3.75rem)] leading-none tracking-[-0.035em] text-[#f3ece1]/68 transition-colors hover:text-[#f3ece1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3aa8e] sm:text-[2.6rem]",
                            isCurrent && "text-[#d3aa8e]",
                          )}
                        >
                          <span>{item.label}</span>
                          <span
                            className={cn(
                              "size-1.5 rounded-full bg-[#d3aa8e] opacity-0 transition-opacity",
                              isCurrent && "opacity-100",
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-8">
                  <p className="mb-5 max-w-xs text-sm leading-6 text-[#f3ece1]/48">
                    Une préparation structurée pour avancer avec méthode.
                  </p>
                  <SheetClose asChild>
                    <Button
                      asChild
                      size="lg"
                      className="h-12 w-full rounded-[2px] bg-[#f3ece1] text-[#131a22] shadow-none hover:bg-[#d3aa8e]"
                    >
                      <Link href="/sign-in">Se connecter</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
