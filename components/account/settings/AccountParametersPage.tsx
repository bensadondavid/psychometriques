'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  Globe2,
  KeyRound,
  Laptop,
  LogOut,
  Mail,
  Pencil,
  ShieldCheck,
  Smartphone,
  Trash2,
  UserRound,
} from 'lucide-react'
import { toast } from 'sonner'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth/auth-client'

type PasskeyToDelete = {
  id: string
  name?: string
}

type AccountSession = {
  id: string
  token: string
  createdAt: Date | string
  updatedAt: Date | string
  expiresAt: Date | string
  ipAddress?: string | null
  userAgent?: string | null
}

function getSessionDevice(userAgent?: string | null) {
  if (!userAgent) return { label: 'Appareil inconnu', isMobile: false }

  const browser = userAgent.includes('Edg/')
    ? 'Edge'
    : userAgent.includes('Firefox/')
      ? 'Firefox'
      : userAgent.includes('Chrome/')
        ? 'Chrome'
        : userAgent.includes('Safari/')
          ? 'Safari'
          : 'Navigateur'
  const platform = /iPhone|iPad/.test(userAgent)
    ? 'iOS'
    : userAgent.includes('Android')
      ? 'Android'
      : userAgent.includes('Windows')
        ? 'Windows'
        : userAgent.includes('Mac OS')
          ? 'macOS'
          : userAgent.includes('Linux')
            ? 'Linux'
            : 'appareil inconnu'

  return {
    label: `${browser} sur ${platform}`,
    isMobile: /Mobile|Android|iPhone|iPad/.test(userAgent),
  }
}

function getPasskeyRegistrationError(error: {
  code?: string
  status?: number
}) {
  switch (error.code) {
    case 'ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED':
      return 'Une clé d’accès est déjà enregistrée sur cet appareil.'
    case 'ERROR_CEREMONY_ABORTED':
      return 'La création de la clé d’accès a été annulée.'
    case 'ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT':
    case 'ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT':
    case 'ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG':
    case 'ERROR_AUTHENTICATOR_GENERAL_ERROR':
      return 'Cet appareil ne permet pas de créer cette clé d’accès.'
    case 'ERROR_INVALID_DOMAIN':
    case 'ERROR_INVALID_RP_ID':
      return 'La configuration des clés d’accès est invalide pour ce domaine.'
    default:
      return 'Impossible d’ajouter la clé d’accès. Veuillez réessayer.'
  }
}

export default function AccountParametersPage() {
  const router = useRouter()
  const session = authClient.useSession()
  const passkeys = authClient.useListPasskeys()
  const [activeSessions, setActiveSessions] = useState<AccountSession[]>([])
  const [loadingSessions, setLoadingSessions] = useState(true)
  const [addingPasskey, setAddingPasskey] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const [resendingVerification, setResendingVerification] = useState(false)
  const [revokingToken, setRevokingToken] = useState<string | null>(null)
  const [revokingOtherSessions, setRevokingOtherSessions] = useState(false)
  const [updatingName, setUpdatingName] = useState(false)
  const [nameDialogOpen, setNameDialogOpen] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [passkeyToDelete, setPasskeyToDelete] =
    useState<PasskeyToDelete | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState('')
  const [requestingDeletion, setRequestingDeletion] = useState(false)

  const user = session.data?.user
  const currentSessionToken = session.data?.session.token
  const initials =
    user?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() ?? 'U'

  useEffect(() => {
    if (!user) return

    let ignore = false

    const loadSessions = async () => {
      setLoadingSessions(true)
      const { data, error } = await authClient.listSessions()

      if (ignore) return
      if (error) {
        toast.error(error.message ?? 'Impossible de charger les sessions.')
      } else {
        setActiveSessions(data ?? [])
      }
      setLoadingSessions(false)
    }

    void loadSessions()

    return () => {
      ignore = true
    }
  }, [user])

  const openNameDialog = () => {
    setDisplayName(user?.name ?? '')
    setNameDialogOpen(true)
  }

  const updateDisplayName = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = displayName.trim()

    if (name.length < 2) {
      toast.error('Le nom doit contenir au moins 2 caractères.')
      return
    }

    try {
      setUpdatingName(true)
      const { error } = await authClient.updateUser({ name })

      if (error) {
        toast.error(error.message ?? 'Impossible de modifier le nom.')
        return
      }

      await session.refetch()
      router.refresh()
      setNameDialogOpen(false)
      toast.success('Nom mis à jour')
    } catch {
      toast.error('Impossible de modifier le nom.')
    } finally {
      setUpdatingName(false)
    }
  }

  const addPasskey = async () => {
    try {
      setAddingPasskey(true)
      const { error } = await authClient.passkey.addPasskey({
        name: `Clé de ${user?.name ?? 'mon appareil'}`,
        authenticatorAttachment: 'platform',
      })

      if (error) {
        toast.error(getPasskeyRegistrationError(error))
        return
      }

      await passkeys.refetch()
      toast.success('Clé d’accès ajoutée')
    } catch {
      toast.error('Impossible d’ajouter la clé d’accès. Veuillez réessayer.')
    } finally {
      setAddingPasskey(false)
    }
  }

  const deletePasskey = async () => {
    if (!passkeyToDelete) return

    try {
      setDeletingId(passkeyToDelete.id)
      const { error } = await authClient.passkey.deletePasskey({
        id: passkeyToDelete.id,
      })

      if (error) {
        toast.error(error.message ?? 'Impossible de supprimer la clé d’accès.')
        return
      }

      await passkeys.refetch()
      setPasskeyToDelete(null)
      toast.success('Clé d’accès supprimée')
    } finally {
      setDeletingId(null)
    }
  }

  const resendVerificationEmail = async () => {
    if (!user || user.emailVerified) return

    try {
      setResendingVerification(true)
      const { error } = await authClient.sendVerificationEmail({
        email: user.email,
        callbackURL: '/account/home',
      })

      if (error) {
        toast.error(error.message ?? 'Impossible d’envoyer l’email.')
        return
      }

      toast.success('Email de vérification envoyé')
    } catch {
      toast.error('Impossible d’envoyer l’email.')
    } finally {
      setResendingVerification(false)
    }
  }

  const revokeSession = async (token: string) => {
    try {
      setRevokingToken(token)
      const { error } = await authClient.revokeSession({ token })

      if (error) {
        toast.error(error.message ?? 'Impossible de fermer cette session.')
        return
      }

      setActiveSessions((sessions) =>
        sessions.filter((activeSession) => activeSession.token !== token)
      )
      toast.success('Session déconnectée')
    } catch {
      toast.error('Impossible de fermer cette session.')
    } finally {
      setRevokingToken(null)
    }
  }

  const revokeOtherSessions = async () => {
    try {
      setRevokingOtherSessions(true)
      const { error } = await authClient.revokeOtherSessions()

      if (error) {
        toast.error(error.message ?? 'Impossible de fermer les autres sessions.')
        return
      }

      setActiveSessions((sessions) =>
        sessions.filter(
          (activeSession) => activeSession.token === currentSessionToken
        )
      )
      toast.success('Toutes les autres sessions ont été déconnectées')
    } catch {
      toast.error('Impossible de fermer les autres sessions.')
    } finally {
      setRevokingOtherSessions(false)
    }
  }

  const requestAccountDeletion = async () => {
    if (deleteConfirmation !== 'SUPPRIMER') return

    try {
      setRequestingDeletion(true)
      const { error } = await authClient.deleteUser({
        callbackURL: '/login?accountDeleted=true',
      })

      if (error) {
        toast.error(error.message ?? 'Impossible de demander la suppression.')
        return
      }

      setDeleteDialogOpen(false)
      setDeleteConfirmation('')
      toast.success('Email de confirmation envoyé')
    } catch {
      toast.error('Impossible de demander la suppression du compte.')
    } finally {
      setRequestingDeletion(false)
    }
  }

  const logOut = async () => {
    try {
      setLoggingOut(true)
      const result = await authClient.signOut()

      if (!result.data?.success) {
        toast.error(result.error?.message ?? 'Impossible de se déconnecter.')
        return
      }

      router.push('/login')
      router.refresh()
    } finally {
      setLoggingOut(false)
    }
  }

  return (
    <section className="min-h-screen w-full min-w-0 px-4 py-6 sm:p-6">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-2xl font-bold sm:text-3xl">Paramètres</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Gérez votre profil, votre sécurité et votre session.
          </p>
        </header>

        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border bg-card">
            <div className="border-b px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <UserRound className="size-5 text-primary" />
                <div>
                  <h2 className="font-semibold">Profil</h2>
                  <p className="text-sm text-muted-foreground">
                    Informations liées à votre compte.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
              <Avatar className="size-16 shrink-0">
                <AvatarImage src={user?.image ?? ''} alt={user?.name ?? 'Profil'} />
                <AvatarFallback className="bg-primary text-lg font-semibold text-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="break-words text-lg font-semibold">
                  {user?.name ?? 'Utilisateur'}
                </p>
                <p className="mt-1 flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{user?.email ?? 'Chargement...'}</span>
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2">
                {user?.emailVerified ? (
                  <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                    <ShieldCheck className="size-4" />
                    Email vérifié
                  </span>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={resendVerificationEmail}
                    disabled={resendingVerification || session.isPending}
                  >
                    <Mail className="size-4" />
                    {resendingVerification ? 'Envoi...' : 'Vérifier mon email'}
                  </Button>
                )}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={openNameDialog}
                  disabled={session.isPending}
                >
                  <Pencil className="size-4" />
                  Modifier le nom
                </Button>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border bg-card">
            <div className="flex flex-col gap-4 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-start gap-3">
                <KeyRound className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h2 className="font-semibold">Clés d’accès</h2>
                  <p className="text-sm text-muted-foreground">
                    Connectez-vous avec votre appareil sans saisir de mot de passe.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                onClick={addPasskey}
                disabled={addingPasskey || session.isPending}
                className="self-start sm:self-auto"
              >
                <KeyRound className="size-4" />
                {addingPasskey ? 'Ajout...' : 'Ajouter une clé'}
              </Button>
            </div>

            <div className="divide-y">
              {passkeys.isPending ? (
                <p className="px-5 py-8 text-center text-sm text-muted-foreground sm:px-6">
                  Chargement des clés d’accès...
                </p>
              ) : passkeys.data && passkeys.data.length > 0 ? (
                passkeys.data.map((passkey) => (
                  <div
                    key={passkey.id}
                    className="flex min-w-0 items-center gap-4 px-5 py-4 sm:px-6"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Laptop className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">
                        {passkey.name ?? 'Clé d’accès'}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Ajoutée le{' '}
                        {new Intl.DateTimeFormat('fr-FR').format(
                          new Date(passkey.createdAt)
                        )}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setPasskeyToDelete({
                          id: passkey.id,
                          name: passkey.name,
                        })
                      }
                      disabled={deletingId === passkey.id}
                      aria-label={`Supprimer ${passkey.name ?? 'la clé d’accès'}`}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                ))
              ) : (
                <div className="px-5 py-10 text-center sm:px-6">
                  <KeyRound className="mx-auto size-8 text-muted-foreground" />
                  <p className="mt-3 font-medium">Aucune clé d’accès</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ajoutez cet appareil pour une connexion plus rapide.
                  </p>
                </div>
              )}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border bg-card">
            <div className="flex flex-col gap-4 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h2 className="font-semibold">Sessions actives</h2>
                  <p className="text-sm text-muted-foreground">
                    Consultez les appareils connectés à votre compte.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={revokeOtherSessions}
                disabled={
                  revokingOtherSessions ||
                  activeSessions.filter(
                    (activeSession) =>
                      activeSession.token !== currentSessionToken
                  ).length === 0
                }
                className="self-start sm:self-auto"
              >
                <LogOut className="size-4" />
                {revokingOtherSessions
                  ? 'Déconnexion...'
                  : 'Déconnecter les autres'}
              </Button>
            </div>

            <div className="divide-y">
              {loadingSessions ? (
                <p className="px-5 py-8 text-center text-sm text-muted-foreground sm:px-6">
                  Chargement des sessions...
                </p>
              ) : activeSessions.length > 0 ? (
                activeSessions.map((activeSession) => {
                  const device = getSessionDevice(activeSession.userAgent)
                  const isCurrent = activeSession.token === currentSessionToken
                  const DeviceIcon = device.isMobile ? Smartphone : Laptop

                  return (
                    <div
                      key={activeSession.id}
                      className="flex min-w-0 items-center gap-4 px-5 py-4 sm:px-6"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <DeviceIcon className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium">{device.label}</p>
                          {isCurrent ? (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                              Session actuelle
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {activeSession.ipAddress ?? 'Adresse IP indisponible'} ·{' '}
                          activité le{' '}
                          {new Intl.DateTimeFormat('fr-FR', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          }).format(new Date(activeSession.updatedAt))}
                        </p>
                      </div>
                      {isCurrent ? (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={logOut}
                          disabled={loggingOut}
                        >
                          {loggingOut ? 'Déconnexion...' : 'Se déconnecter'}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => revokeSession(activeSession.token)}
                          disabled={revokingToken === activeSession.token}
                        >
                          <LogOut className="size-4" />
                          {revokingToken === activeSession.token
                            ? 'Fermeture...'
                            : 'Déconnecter'}
                        </Button>
                      )}
                    </div>
                  )
                })
              ) : (
                <p className="px-5 py-8 text-center text-sm text-muted-foreground sm:px-6">
                  Aucune session active trouvée.
                </p>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-destructive/30 bg-card p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Trash2 className="mt-0.5 size-5 shrink-0 text-destructive" />
                <div>
                  <h2 className="font-semibold">Supprimer le compte</h2>
                  <p className="text-sm text-muted-foreground">
                    Un email de confirmation sera envoyé avant toute suppression.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="destructive"
                onClick={() => setDeleteDialogOpen(true)}
                className="self-start sm:self-auto"
              >
                <Trash2 className="size-4" />
                Supprimer mon compte
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Dialog
        open={nameDialogOpen}
        onOpenChange={(open) => {
          if (!updatingName) setNameDialogOpen(open)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le nom d’affichage</DialogTitle>
            <DialogDescription>
              Ce nom sera affiché dans votre profil et dans la navigation.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={updateDisplayName} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="display-name">Nom</Label>
              <Input
                id="display-name"
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                minLength={2}
                maxLength={80}
                disabled={updatingName}
                autoFocus
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setNameDialogOpen(false)}
                disabled={updatingName}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={updatingName}>
                {updatingName ? 'Enregistrement...' : 'Enregistrer'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={passkeyToDelete !== null}
        onOpenChange={(open) => {
          if (!open && !deletingId) setPasskeyToDelete(null)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la clé d’accès ?</DialogTitle>
            <DialogDescription>
              « {passkeyToDelete?.name ?? 'Clé d’accès'} » ne pourra plus être
              utilisée pour vous connecter.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setPasskeyToDelete(null)}
              disabled={deletingId !== null}
            >
              Annuler
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={deletePasskey}
              disabled={deletingId !== null}
            >
              {deletingId ? 'Suppression...' : 'Supprimer'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          if (requestingDeletion) return
          setDeleteDialogOpen(open)
          if (!open) setDeleteConfirmation('')
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Demander la suppression du compte ?</DialogTitle>
            <DialogDescription>
              Nous enverrons un lien à {user?.email}. La suppression ne sera
              effectuée qu’après avoir cliqué sur ce lien.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="delete-confirmation">
              Saisissez SUPPRIMER pour continuer
            </Label>
            <Input
              id="delete-confirmation"
              value={deleteConfirmation}
              onChange={(event) => setDeleteConfirmation(event.target.value)}
              disabled={requestingDeletion}
              autoComplete="off"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={requestingDeletion}
            >
              Annuler
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={requestAccountDeletion}
              disabled={
                requestingDeletion || deleteConfirmation !== 'SUPPRIMER'
              }
            >
              {requestingDeletion
                ? 'Envoi...'
                : 'Envoyer l’email de confirmation'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
