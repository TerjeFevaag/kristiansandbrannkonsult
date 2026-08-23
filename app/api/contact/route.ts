import { NextResponse } from 'next/server'

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

const BLOB_HOST = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\//

export async function POST(request: Request) {
  const { navn, epost, telefon, prosjekttype, melding, vedleggUrls } = await request.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  if (navn.length > 200 || epost.length > 200 || melding.length > 10000) {
    return NextResponse.json({ error: 'Felt er for langt' }, { status: 400 })
  }

  const urls: { name: string; url: string }[] = Array.isArray(vedleggUrls) ? vedleggUrls.slice(0, 4) : []
  for (const v of urls) {
    if (!BLOB_HOST.test(v.url)) {
      return NextResponse.json({ error: 'Ugyldig vedlegg-URL' }, { status: 400 })
    }
  }

  const prosjektLabel = prosjekttype
    ? prosjekttype.charAt(0).toUpperCase() + prosjekttype.slice(1).replace(/-/g, ' ')
    : 'Ikke valgt'

  const vedleggHtml =
    urls.length > 0
      ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">Vedlegg</td><td style="padding:8px">${urls.map(v => `<a href="${escapeHtml(v.url)}">${escapeHtml(v.name)}</a>`).join('<br>')}</td></tr>`
      : ''

  const vedleggText =
    urls.length > 0
      ? `\n\nVedlegg:\n${urls.map(v => `${v.name}: ${v.url}`).join('\n')}`
      : ''

  const eNavn = escapeHtml(navn)
  const eEpost = escapeHtml(epost)
  const eTelefon = escapeHtml(telefon || 'Ikke oppgitt')
  const eMelding = escapeHtml(melding)
  const eProsjekt = escapeHtml(prosjektLabel)

  const emailPayload = {
    from: {
      email: 'post@kristiansandbrannkonsult.no',
      name: 'Kristiansand Brannkonsult',
    },
    to: [{ email: 'post@kristiansandbrannkonsult.no', name: 'Kristiansand Brannkonsult' }],
    reply_to: { email: epost, name: navn },
    subject: `Ny forespørsel: ${prosjektLabel.slice(0, 80)} — ${navn.slice(0, 80)}`,
    html: `
      <h2>Ny forespørsel via nettsiden</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;width:140px">Navn</td><td style="padding:8px">${eNavn}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">E-post</td><td style="padding:8px"><a href="mailto:${eEpost}">${eEpost}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Telefon</td><td style="padding:8px">${eTelefon}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Prosjekttype</td><td style="padding:8px">${eProsjekt}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Melding</td><td style="padding:8px;white-space:pre-wrap">${eMelding}</td></tr>
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
