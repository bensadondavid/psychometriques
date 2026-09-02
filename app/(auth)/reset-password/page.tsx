'use client'

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth/auth-client";
import {
  TurnstileCaptcha,
  turnstileSiteKey,
} from "@/components/auth/turnstile-captcha";

const inputClass = "h-12 rounded-none border-[#bdb09f] bg-[#fbf8f2]/80 px-4 text-[15px] text-[#241d19] shadow-none placeholder:text-[#a09384] focus-visible:border-[#45121d] focus-visible:ring-1 focus-visible:ring-[#45121d]";
const labelClass = "text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#766a5e]";

export default function ResetPassword() {
  return <Suspense fallback={<div className="h-80 animate-pulse border border-[#cbbfae]/60 bg-[#fbf8f2]/50" aria-label="Chargement" />}><ResetPasswordContent /></Suspense>;
}

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPassword("");
      return toast.error("Les mots de passe ne correspondent pas");
    }
    if (!token) return toast.error("Lien invalide ou expiré");
    try {
      setIsLoading(true);
      const result = await authClient.resetPassword({
        newPassword: password,
        token,
        fetchOptions: captchaToken
          ? { headers: { "x-captcha-response": captchaToken } }
          : undefined,
      });
      if (result.error) return toast.error(result.error.message);
      toast.success("Mot de passe mis à jour !");
      setTimeout(() => router.push("/login"), 800);
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

  if (!token) {
    return (
      <div>
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Accès refusé</p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3rem)] leading-[0.95] tracking-[-0.035em] text-[#2a211d]">Ce lien n&apos;est plus valide</h1>
        <p className="mt-6 max-w-sm text-sm leading-6 text-[#766a5e]">Le lien de réinitialisation a expiré ou a déjà été utilisé.</p>
        <Link href="/forgot-password" className="mt-8 inline-flex border-b border-[#45121d] pb-1 text-sm font-semibold text-[#45121d]">Demander un nouveau lien</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 border-b border-[#cbbfae]/70 pb-7">
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Sécurité du compte</p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3rem)] leading-[0.95] tracking-[-0.035em] text-[#2a211d]">Choisir un nouveau mot de passe</h1>
        <p className="mt-4 text-sm leading-6 text-[#766a5e]">Utilisez au moins 8 caractères.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="password" className={labelClass}>Nouveau mot de passe</label>
          <div className="relative"><Input id="password" type={showPassword ? "text" : "password"} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="8 caractères minimum" className={`${inputClass} pr-12`} minLength={8} required /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f8274] hover:text-[#45121d]" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmation" className={labelClass}>Confirmation</label>
          <div className="relative"><Input id="confirmation" type={showConfirm ? "text" : "password"} autoComplete="new-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Répétez votre mot de passe" className={`${inputClass} pr-12`} minLength={8} required /><button type="button" onClick={() => setShowConfirm((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f8274] hover:text-[#45121d]" aria-label={showConfirm ? "Masquer la confirmation" : "Afficher la confirmation"}>{showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>
        </div>
        <TurnstileCaptcha
          onTokenChange={setCaptchaToken}
          resetKey={captchaResetKey}
        />
        <Button type="submit" className="h-12 w-full rounded-none bg-[#45121d] text-sm font-semibold tracking-wide text-[#fffaf0] hover:bg-[#591725]" disabled={isLoading || (Boolean(turnstileSiteKey) && !captchaToken)}>{isLoading ? "Mise à jour…" : "Enregistrer le mot de passe"}</Button>
      </form>
      <p className="mt-8 text-center text-sm text-[#766a5e]"><Link href="/login" className="font-semibold text-[#45121d] underline-offset-4 hover:underline">Retour à la connexion</Link></p>
    </div>
  );
}
