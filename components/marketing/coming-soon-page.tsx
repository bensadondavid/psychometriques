import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
};

export function ComingSoonPage({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: ComingSoonPageProps) {
  return (
    <main className="relative isolate grid min-h-[calc(100svh-5rem)] overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
      <div className="marketing-hero__orb" aria-hidden="true">
        <span>א</span>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
        <div className="max-w-5xl py-20">
          <h1 className="font-serif text-[clamp(5rem,12vw,10rem)] leading-[0.78] tracking-[-0.05em]">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-primary-foreground/62">
            {description}
          </p>
        </div>
        <Link
          href={backHref}
          className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/65 hover:text-white"
        >
          <ArrowLeft className="size-4" /> {backLabel}
        </Link>
      </div>
    </main>
  );
}
