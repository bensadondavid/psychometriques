const BRAND = {
  name: 'Psychométriques',
  primary: '#4169e1',
  primaryDark: '#3152b8',
  background: '#f4f6f8',
  surface: '#ffffff',
  text: '#111827',
  mutedText: '#667085',
  border: '#d8dee8',
} as const

const HTML_CHARACTERS = /[&<>'"]/g
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}

export function escapeHtml(value: string) {
  return value.replace(HTML_CHARACTERS, (character) => HTML_ENTITIES[character])
}

type EmailTemplateOptions = {
  preheader: string
  eyebrow: string
  title: string
  greeting: string
  body: string
  buttonLabel: string
  buttonUrl: string
  notice: string
}

export function createEmailTemplate({
  preheader,
  eyebrow,
  title,
  greeting,
  body,
  buttonLabel,
  buttonUrl,
  notice,
}: EmailTemplateOptions) {
  const safeUrl = escapeHtml(buttonUrl)

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.background};color:${BRAND.text};font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:${BRAND.background};">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;">
            <tr>
              <td style="padding:0 8px 20px;font-size:20px;font-weight:700;letter-spacing:-0.3px;color:${BRAND.text};">
                <span style="display:inline-block;width:12px;height:12px;margin-right:9px;border-radius:4px;background:${BRAND.primary};"></span>${BRAND.name}
              </td>
            </tr>
            <tr>
              <td style="padding:40px;border:1px solid ${BRAND.border};border-radius:16px;background:${BRAND.surface};box-shadow:0 8px 24px rgba(17,24,39,0.06);">
                <p style="margin:0 0 12px;color:${BRAND.primary};font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0 0 24px;color:${BRAND.text};font-size:28px;line-height:1.25;letter-spacing:-0.6px;">${escapeHtml(title)}</h1>
                <p style="margin:0 0 16px;color:${BRAND.text};font-size:16px;line-height:1.65;">${escapeHtml(greeting)}</p>
                <p style="margin:0 0 28px;color:${BRAND.mutedText};font-size:16px;line-height:1.65;">${escapeHtml(body)}</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="border-radius:10px;background:${BRAND.primary};">
                      <a href="${safeUrl}" style="display:inline-block;padding:14px 22px;border:1px solid ${BRAND.primaryDark};border-radius:10px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;">${escapeHtml(buttonLabel)}</a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:32px;padding-top:24px;border-top:1px solid ${BRAND.border};">
                  <p style="margin:0 0 10px;color:${BRAND.mutedText};font-size:13px;line-height:1.55;">${escapeHtml(notice)}</p>
                  <p style="margin:0;color:${BRAND.mutedText};font-size:12px;line-height:1.55;word-break:break-all;">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br><a href="${safeUrl}" style="color:${BRAND.primary};text-decoration:underline;">${safeUrl}</a></p>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:20px 16px 0;color:${BRAND.mutedText};font-size:12px;line-height:1.5;">
                © ${new Date().getFullYear()} ${BRAND.name}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
