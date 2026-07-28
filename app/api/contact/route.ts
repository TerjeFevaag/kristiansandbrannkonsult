import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()

  const navn = formData.get('navn') as string
  const epost = formData.get('epost') as string
  const telefon = formData.get('telefon') as string
  const prosjekttype = formData.get('prosjekttype') as string
  const melding = formData.get('melding') as string

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const prosjektLabel = prosjekttype
    ? prosjekttype.charAt(0).toUpperCase() + prosjekttype.slice(1).replace(/-/g, ' ')
    : 'Ikke valgt'

  const vedleggFiles = formData.getAll('vedlegg') as File[]
  const attachments = await Promise.all(
    vedleggFiles
      .filter(f => f.size > 0)
      .map(async file => {
        const buffer = await file.arrayBuffer()
        return {
          content: Buffer.from(buffer).toString('base64'),
          filename: file.name,
          disposition: 'attachment',
        }
      })
  )

  const vedleggInfo =
    attachments.length > 0
      ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">Vedlegg</td><td style="padding:8px">${attachments.map(a => a.filename).join('<br>')}</td></tr>`
      : ''

  const emailPayload: Record<string, unknown> = {
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
        ${vedleggInfo}
      </table>
    `,
    text: `Ny forespørsel via nettsiden\n\nNavn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || 'Ikke oppgitt'}\nProsjekttype: ${prosjektLabel}\n\nMelding:\n${melding}${attachments.length > 0 ? `\n\nVedlegg: ${attachments.map(a => a.filename).join(', ')}` : ''}`,
  }

  if (attachments.length > 0) {
    emailPayload.attachments = attachments
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
