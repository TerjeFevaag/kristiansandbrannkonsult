import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { navn, epost, telefon, prosjekttype, melding, vedleggUrls } = await request.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const prosjektLabel = prosjekttype
    ? prosjekttype.charAt(0).toUpperCase() + prosjekttype.slice(1).replace(/-/g, ' ')
    : 'Ikke valgt'

  const vedleggHtml =
    vedleggUrls && vedleggUrls.length > 0
      ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">Vedlegg</td><td style="padding:8px">${(vedleggUrls as { name: string; url: string }[]).map(v => `<a href="${v.url}">${v.name}</a>`).join('<br>')}</td></tr>`
      : ''

  const vedleggText =
    vedleggUrls && vedleggUrls.length > 0
      ? `\n\nVedlegg:\n${(vedleggUrls as { name: string; url: string }[]).map(v => `${v.name}: ${v.url}`).join('\n')}`
      : ''

  const emailPayload = {
    from: {
      email: 'post@kristiansandbrannkonsult.no',
      name: 'Kristiansand Brannkonsult',
    },
    to: [{ email: 'post@kristiansandbrannkonsult.no', name: 'Kristiansand Brannkonsult' }],
    reply_to: { email: epost, name: navn },
    subject: `Ny forespørsel: ${prosjektLabel} — ${navn}`,
    html: `
      <h2>Ny forespørsel via nettsiden</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;width:140px">Navn</td><td style="padding:8px">${navn}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">E-post</td><td style="padding:8px"><a href="mailto:${epost}">${epost}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Telefon</td><td style="padding:8px">${telefon || 'Ikke oppgitt'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Prosjekttype</td><td style="padding:8px">${prosjektLabel}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Melding</td><td style="padding:8px;white-space:pre-wrap">${melding}</td></tr>
        ${vedleggHtml}
      </table>
    `,
    text: `Ny forespørsel via nettsiden\n\nNavn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || 'Ikke oppgitt'}\nProsjekttype: ${prosjektLabel}\n\nMelding:\n${melding}${vedleggText}`,
  }

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.MAILERSEND_API_TOKEN}`,
    },
    body: JSON.stringify(emailPayload),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('MailerSend feil:', err)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
