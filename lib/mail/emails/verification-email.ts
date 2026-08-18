import { getEmailSender, resend } from '@/lib/mail/resend'

import { createEmailTemplate } from './email-template'

type VerificationEmailOptions = {
  name?: string | null
  email: string
  url: string
}

export async function sendVerificationEmail({
  name,
  email,
  url,
}: VerificationEmailOptions) {
  const greeting = name?.trim() ? `Bonjour ${name.trim()},` : 'Bonjour,'
  const subject = 'Confirmez votre adresse email'
  const html = createEmailTemplate({
    preheader: 'Confirmez votre adresse email pour activer votre compte.',
    eyebrow: 'Bienvenue',
    title: 'Confirmez votre adresse email',
    greeting,
    body: 'Merci de nous avoir rejoints. Confirmez votre adresse email afin de sécuriser votre compte et commencer votre préparation.',
    buttonLabel: 'Confirmer mon adresse email',
    buttonUrl: url,
    notice: "Vous n’avez pas créé de compte ? Vous pouvez ignorer cet email, aucune action ne sera effectuée.",
  })
  const text = `${greeting}\n\nMerci de nous avoir rejoints. Confirmez votre adresse email pour activer votre compte : ${url}\n\nVous n’avez pas créé de compte ? Ignorez simplement cet email.`

  const { error } = await resend.emails.send({
    from: getEmailSender(),
    to: email,
    subject,
    html,
    text,
  })

  if (error) throw new Error(`Échec de l’envoi de l’email : ${error.message}`)
}
