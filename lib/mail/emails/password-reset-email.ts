import { getEmailSender, resend } from '@/lib/mail/resend'

import { createEmailTemplate } from './email-template'

type PasswordResetEmailOptions = {
  name?: string | null
  email: string
  url: string
}

export async function sendPasswordResetEmail({
  name,
  email,
  url,
}: PasswordResetEmailOptions) {
  const greeting = name?.trim() ? `Bonjour ${name.trim()},` : 'Bonjour,'
  const subject = 'Réinitialisez votre mot de passe'
  const html = createEmailTemplate({
    preheader: 'Votre lien sécurisé pour choisir un nouveau mot de passe.',
    eyebrow: 'Sécurité du compte',
    title: 'Réinitialisez votre mot de passe',
    greeting,
    body: 'Une demande de réinitialisation a été effectuée pour votre compte. Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe.',
    buttonLabel: 'Choisir un nouveau mot de passe',
    buttonUrl: url,
    notice: "Vous n’êtes pas à l’origine de cette demande ? Vous pouvez ignorer cet email en toute sécurité.",
  })
  const text = `${greeting}\n\nUne demande de réinitialisation a été effectuée pour votre compte.\n\nChoisissez un nouveau mot de passe : ${url}\n\nVous n’êtes pas à l’origine de cette demande ? Ignorez simplement cet email.`

  const { error } = await resend.emails.send({
    from: getEmailSender(),
    to: email,
    subject,
    html,
    text,
  })

  if (error) throw new Error(`Échec de l’envoi de l’email : ${error.message}`)
}
