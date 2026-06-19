import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { navn, epost, telefon, prosjekttype, melding } = body

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const prosjektLabel = prosjekttype
    ? prosjekttype.charAt(0).toUpperCase() + prosjekttype.slice(1).replace(/-/g, ' ')
    : 'Ikke valgt'

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.MAILERSEND_API_TOKEN}`,
    },
    body: JSON.stringify({
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
        </table>
      `,
      text: `Ny forespørsel via nettsiden\n\nNavn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || 'Ikke oppgitt'}\nProsjekttype: ${prosjektLabel}\n\nMelding:\n${melding}`,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('MailerSend feil:', err)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
