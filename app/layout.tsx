import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Geist_Mono,
  Instrument_Serif,
} from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Psychometriques.fr",
    template: "%s | Psychometriques.fr",
  },
  description:
    "Plateforme francophone pour préparer les examens psychométriques, AMIR et YAEL, apprendre l’hébreu et avancer dans son parcours en Israël.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
