'use client'

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth/auth-client";

const inputClass = "h-12 rounded-none border-[#bdb09f] bg-[#fbf8f2]/80 px-4 text-[15px] text-[#241d19] shadow-none placeholder:text-[#a09384] focus-visible:border-[#45121d] focus-visible:ring-1 focus-visible:ring-[#45121d]";
const labelClass = "text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#766a5e]";

export default function SignUp() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "", email: "" });
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogle = async () => {
    try {
      setIsGoogleLoading(true);
      await authClient.signIn.social({ provider: "google", callbackURL: "/account/home" });
    } catch {
      toast.error("Erreur avec Google");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== confirmationPassword) {
      setConfirmationPassword("");
      setFormData((current) => ({ ...current, password: "" }));
      return toast.error("Les mots de passe ne correspondent pas");
    }
    try {
      setIsLoading(true);
      const result = await authClient.signUp.email({ email: formData.email, password: formData.password, name: `${formData.firstName} ${formData.lastName}`.trim() });
      if (result.error) return toast.error(result.error.message);
      toast.success("Compte créé ! Vérifiez votre email pour continuer.");
    } catch {
      toast.error("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6 border-b border-[#cbbfae]/70 pb-5 sm:mb-7 sm:pb-6">
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Votre préparation commence ici</p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3rem)] leading-[0.94] tracking-[-0.035em] text-[#2a211d]">Bienvenue</h1>
        <p className="mt-3 text-sm leading-6 text-[#766a5e]">Créez votre espace de préparation personnel.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2"><label htmlFor="firstName" className={labelClass}>Prénom</label><Input id="firstName" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} placeholder="Camille" className={inputClass} required /></div>
          <div className="space-y-2"><label htmlFor="lastName" className={labelClass}>Nom</label><Input id="lastName" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} placeholder="Martin" className={inputClass} required /></div>
        </div>
        <div className="space-y-2"><label htmlFor="email" className={labelClass}>Adresse email</label><Input id="email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="prenom.nom@exemple.fr" className={inputClass} required /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="password" className={labelClass}>Mot de passe</label>
            <div className="relative"><Input id="password" type={showPassword ? "text" : "password"} name="password" autoComplete="new-password" value={formData.password} onChange={handleChange} placeholder="8 caractères min." className={`${inputClass} pr-11`} minLength={8} required /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8274] hover:text-[#45121d]" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmation" className={labelClass}>Confirmation</label>
            <div className="relative"><Input id="confirmation" type={showConfirm ? "text" : "password"} autoComplete="new-password" value={confirmationPassword} onChange={(event) => setConfirmationPassword(event.target.value)} placeholder="Répétez" className={`${inputClass} pr-11`} minLength={8} required /><button type="button" onClick={() => setShowConfirm((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8274] hover:text-[#45121d]" aria-label={showConfirm ? "Masquer la confirmation" : "Afficher la confirmation"}>{showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>
          </div>
        </div>
        <Button type="submit" className="h-12 w-full rounded-none bg-[#45121d] text-sm font-semibold tracking-wide text-[#fffaf0] hover:bg-[#591725]" disabled={isLoading}>{isLoading ? "Création…" : "Créer mon espace"}</Button>
      </form>

      <div className="my-5 flex items-center gap-4"><span className="h-px flex-1 bg-[#cbbfae]/70" /><span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#918477]">Ou</span><span className="h-px flex-1 bg-[#cbbfae]/70" /></div>
      <button type="button" onClick={handleGoogle} disabled={isGoogleLoading} className="flex h-12 w-full items-center justify-center gap-3 border border-[#bdb09f] bg-[#fbf8f2]/70 text-sm font-medium transition-colors hover:border-[#75695d] hover:bg-white disabled:opacity-60">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" /><path d="M5.84 14.09A6.9 6.9 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84Z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" /></svg>
        {isGoogleLoading ? "Redirection…" : "Continuer avec Google"}
      </button>
      <p className="mt-6 text-center text-sm text-[#766a5e]">Déjà membre ? <Link href="/login" className="font-semibold text-[#45121d] underline-offset-4 hover:underline">Se connecter</Link></p>
    </div>
  );
}
