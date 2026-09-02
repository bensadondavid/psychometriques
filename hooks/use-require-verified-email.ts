'use client'

import { useCallback } from 'react'
import { toast } from 'sonner'

import { authClient } from '@/lib/auth/auth-client'

export function useRequireVerifiedEmail() {
  const session = authClient.useSession()
  const email = session.data?.user.email
  const emailVerified = session.data?.user.emailVerified

  return useCallback(async () => {
    if (session.isPending) return false

    if (!email) {
      toast.error('Vous devez être connecté pour effectuer cette action.')
      return false
    }

    if (emailVerified) return true

    try {
      const { error } = await authClient.sendVerificationEmail({
        email,
        callbackURL: '/account/home',
      })

      if (error) {
        throw new Error(error.message ?? "Impossible d’envoyer l’email.")
      }

      toast.warning('Cette action nécessite une adresse email vérifiée.', {
        description:
          'Un nouvel email de vérification vient de vous être renvoyé.',
        duration: 8000,
      })
    } catch {
      toast.error('Cette action nécessite une adresse email vérifiée.', {
        description:
          "Le nouvel email de vérification n’a pas pu être envoyé. Réessayez depuis les paramètres du compte.",
        duration: 8000,
      })
    }

    return false
  }, [email, emailVerified, session.isPending])
}
