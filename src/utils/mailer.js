import { Resend } from 'resend'
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
export async function sendEmail({ to, subject, html }) {
  if (!resend) return { skipped: true }
  const from = process.env.MAIL_FROM || 'Anime Arcadia <no-reply@anime-arcadia.app>'
  return resend.emails.send({ from, to, subject, html })
}
