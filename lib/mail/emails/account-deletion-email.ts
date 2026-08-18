import { getEmailSender, resend } from '@/lib/mail/resend'

import { createEmailTemplate } from './email-template'

type AccountDeletionEmailOptions = {
  name?: string | null
  email: string
  url: string
}

export async function sendAccountDeletionEmail({
  name,
  email,
  url,
}: AccountDeletionEmailOptions) {
  const greeting = name?.trim() ? `Bonjour ${name.trim()},` : 'Bonjour,'
  const subject = 'Confirmez la suppression de votre compte'
  const html = createEmailTemplate({
    preheader: 'Une confirmation est nécessaire pour supprimer votre compte.',
    eyebrow: 'Action sensible',
    title: 'Confirmez la suppression de votre compte',
    greeting,
    body: 'Une demande de suppression a été effectuée pour votre compte. Utilisez le bouton ci-dessous uniquement si vous souhaitez supprimer définitivement votre compte et ses données.',
    buttonLabel: 'Supprimer définitivement mon compte',
    buttonUrl: url,
    notice: "Vous n’êtes pas à l’origine de cette demande ? Ignorez cet email : votre compte restera actif.",
  })
  const text = `${greeting}\n\nUne demande de suppression a été effectuée pour votre compte.\n\nConfirmez la suppression définitive de votre compte : ${url}\n\nVous n’êtes pas à l’origine de cette demande ? Ignorez simplement cet email.`

  const { error } = await resend.emails.send({
    from: getEmailSender(),
    to: email,
    subject,
    html,
    text,
  })

  if (error) throw new Error(`Échec de l’envoi de l’email : ${error.message}`)
}
