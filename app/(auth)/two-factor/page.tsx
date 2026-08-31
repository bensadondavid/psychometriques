'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth/auth-client'

export default function TwoFactorPage() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [useBackupCode, setUseBackupCode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const verifyCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsLoading(true)
      const result = useBackupCode
        ? await authClient.twoFactor.verifyBackupCode({ code, trustDevice: true })
        : await authClient.twoFactor.verifyTotp({ code, trustDevice: true })

      if (result.error) {
        toast.error(result.error.message)
        return
      }

      router.replace('/account/home')
      router.refresh()
    } catch {
      toast.error('Impossible de vérifier ce code.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-8 border-b border-[#cbbfae]/70 pb-7">
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Sécurité du compte
        </p>
        <h1 className="font-serif text-[clamp(2.65rem,13vw,3.4rem)] leading-[0.95] tracking-[-0.035em] text-[#2a211d]">
          Double authentification
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#766a5e]">
          {useBackupCode
            ? 'Saisissez l’un de vos codes de secours.'
            : 'Saisissez le code à six chiffres de votre application d’authentification.'}
        </p>
      </div>

      <form onSubmit={verifyCode} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="two-factor-code"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#766a5e]"
          >
            {useBackupCode ? 'Code de secours' : 'Code de vérification'}
          </label>
          <Input
            id="two-factor-code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            inputMode={useBackupCode ? 'text' : 'numeric'}
            autoComplete="one-time-code"
            className="h-12 rounded-none border-[#bdb09f] bg-[#fbf8f2]/80 px-4 text-[15px] tracking-[0.2em] text-[#241d19] shadow-none focus-visible:border-[#45121d] focus-visible:ring-1 focus-visible:ring-[#45121d]"
            required
            autoFocus
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-none bg-[#45121d] text-sm font-semibold text-[#fffaf0] hover:bg-[#591725]"
          disabled={isLoading || code.trim().length === 0}
        >
          {isLoading ? 'Vérification…' : 'Vérifier'}
        </Button>
      </form>

      <button
        type="button"
        onClick={() => {
          setCode('')
          setUseBackupCode((value) => !value)
        }}
        className="mt-6 text-sm font-semibold text-[#45121d] underline-offset-4 hover:underline"
      >
        {useBackupCode
          ? 'Utiliser l’application d’authentification'
          : 'Utiliser un code de secours'}
      </button>

      <p className="mt-8 text-sm text-[#766a5e]">
        <Link href="/login" className="font-semibold text-[#45121d] hover:underline">
          Retour à la connexion
        </Link>
      </p>
    </div>
  )
}
