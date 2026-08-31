'use client'

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth/auth-client";
import {
  TurnstileCaptcha,
  turnstileSiteKey,
} from "@/components/auth/turnstile-captcha";

const inputClass = "h-12 rounded-none border-[#bdb09f] bg-[#fbf8f2]/80 px-4 text-[15px] text-[#241d19] shadow-none placeholder:text-[#a09384] focus-visible:border-[#45121d] focus-visible:ring-1 focus-visible:ring-[#45121d]";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const result = await authClient.requestPasswordReset({
        email,
        redirectTo: "/reset-password",
        fetchOptions: captchaToken
          ? { headers: { "x-captcha-response": captchaToken } }
          : undefined,
      });
      if (result.error) return toast.error(result.error.message);
      setSent(true);
    } catch {
      toast.error("Une erreur est survenue");
    } finally {
      setIsLoading(false);
      if (turnstileSiteKey) {
        setCaptchaToken("");
        setCaptchaResetKey((value) => value + 1);
      }
    }
  };

  if (sent) {
    return (
      <div>
        <div className="mb-8 grid size-14 place-items-center rounded-full border border-[#9b7a48] text-[#45121d]"><Check className="size-6" /></div>
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Demande transmise</p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3rem)] leading-[0.95] tracking-[-0.035em] text-[#2a211d]">Consultez votre messagerie</h1>
        <div className="mt-7 border-l-2 border-[#9b7a48] pl-5 text-sm leading-6 text-[#766a5e]">
          <p>Si un compte existe pour <strong className="font-semibold text-[#3b302a]">{email}</strong>, vous recevrez un lien de réinitialisation.</p>
          <p className="mt-3 text-[#918477]">Pensez également à vérifier vos courriers indésirables.</p>
        </div>
        <Link href="/login" className="mt-9 inline-flex border-b border-[#45121d] pb-1 text-sm font-semibold text-[#45121d]">Retour à la connexion</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 border-b border-[#cbbfae]/70 pb-7">
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Assistance au compte</p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3.4rem)] leading-[0.95] tracking-[-0.035em] text-[#2a211d]">Réinitialiser votre accès</h1>
        <p className="mt-4 text-sm leading-6 text-[#766a5e]">Nous vous adresserons un lien sécurisé par email.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#766a5e]">Adresse email</label>
          <Input id="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="prenom.nom@exemple.fr" className={inputClass} required />
        </div>
        <TurnstileCaptcha
          onTokenChange={setCaptchaToken}
          resetKey={captchaResetKey}
        />
        <Button type="submit" className="h-12 w-full rounded-none bg-[#45121d] text-sm font-semibold tracking-wide text-[#fffaf0] hover:bg-[#591725]" disabled={isLoading || (Boolean(turnstileSiteKey) && !captchaToken)}>{isLoading ? "Envoi…" : "Recevoir le lien"}</Button>
      </form>
      <p className="mt-8 text-center text-sm text-[#766a5e]"><Link href="/login" className="font-semibold text-[#45121d] underline-offset-4 hover:underline">Retour à la connexion</Link></p>
    </div>
  );
}
