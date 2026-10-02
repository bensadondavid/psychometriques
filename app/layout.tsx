import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsConsentManager } from "@/components/analytics/analytics-consent";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
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
    "Plateforme francophone pour préparer les examens psychométriques, AMIR et YAEL et avancer dans son parcours en Israël.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${ebGaramond.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <AnalyticsConsentManager />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
