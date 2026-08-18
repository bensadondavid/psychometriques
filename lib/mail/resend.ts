import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY!)

export function getEmailSender() {
  const sender = process.env.RESEND_MAIL

  if (sender) return sender
  if (process.env.NODE_ENV !== 'production') return 'onboarding@resend.dev'

  throw new Error('RESEND_MAIL doit être configuré en production.')
}
