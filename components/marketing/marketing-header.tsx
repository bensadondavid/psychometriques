'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {Sheet,SheetClose,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navigation = [
  { href: '/formations/psychometriques', label: 'Psychométriques' },
  { href: '/formations/amirnet', label: 'Amirnet' },
  { href: '/formations/yaelnet', label: 'Yaelnet' },
] as const

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function MarketingHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Accueil"
        >
          <Image
            src="/logo-psychos.png"
            height={80}
            width={80}
            alt="Examens et Hébreu"
            priority
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 text-[0.76rem] font-semibold uppercase tracking-[0.12em] lg:flex"
        >
          {navigation.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'relative py-2 text-foreground/72 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                  isCurrent && 'text-primary after:scale-x-100',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button asChild size="lg" className="h-10 px-5">
            <Link href="/sign-in">Se connecter</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="grid size-11 place-items-center border border-primary/25 rounded-sm bg-transparent text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            showCloseButton={false}
            className="h-dvh max-w-none gap-0 border-0 bg-primary p-0 text-primary-foreground data-[side=left]:w-screen data-[side=left]:border-r-0 data-[side=left]:sm:max-w-none"
          >
            <SheetHeader className="flex h-20 flex-row items-center justify-between border-b border-primary-foreground/15 px-4 py-0 sm:px-6">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="rounded-full bg-background transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label="Retour à l’accueil"
                >
                  <Image
                    src="/logo-psychos.png"
                    height={60}
                    width={60}
                    alt="Examens et Hébreu"
                  />
                </Link>
              </SheetClose>
              <SheetTitle className="sr-only">Navigation principale</SheetTitle>
              <SheetDescription className="sr-only">
                Accéder aux pages principales du site.
              </SheetDescription>
              <SheetClose asChild>
                <button
                  type="button"
                  className="grid size-11 place-items-center border border-primary-foreground/25 rounded-sm text-primary-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label="Fermer le menu"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </SheetClose>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col px-4 pb-6 pt-8 sm:px-6 sm:pb-8">
              <nav aria-label="Navigation mobile" className="grid">
                {navigation.map((item, index) => {
                  const isCurrent = isCurrentPath(pathname, item.href)

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isCurrent ? 'page' : undefined}
                        className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-primary-foreground/15 py-5 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <span className="font-mono text-[0.62rem] text-accent/75">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-serif text-[clamp(2.35rem,12vw,4.5rem)] leading-none tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            'size-2 rounded-full border border-accent opacity-0',
                            isCurrent && 'bg-accent opacity-100',
                          )}
                          aria-hidden="true"
                        />
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>

              <div className="mt-auto border-t border-primary-foreground/15 pt-6">
                <p className="mb-4 max-w-xs text-sm leading-6 text-primary-foreground/55">
                  Votre préparation aux examens et à l’hébreu, dans un espace
                  pensé en français.
                </p>
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full bg-accent text-accent-foreground hover:bg-[#e2c58f]"
                  >
                    <Link href="/sign-in">Se connecter</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
