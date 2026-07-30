import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kristiansandbrannkonsult.no'),
  title: 'Brannprosjektering i Kristiansand | Brannkonsult AS',
  description:
    'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: {
    canonical: 'https://www.kristiansandbrannkonsult.no',
  },
  openGraph: {
    title: 'Brannprosjektering i Kristiansand | Brannkonsult AS',
    description:
      'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder.',
    url: 'https://www.kristiansandbrannkonsult.no',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Brannkonsult AS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brannprosjektering i Kristiansand | Brannkonsult AS',
    description: 'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder. Sentralt godkjent foretak.',
    images: ['/images/hero.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Kristiansand',
  telephone: '+4748481914',
  email: 'post@kristiansandbrannkonsult.no',
  url: 'https://www.kristiansandbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
  openingHours: 'Mo-Fr 08:00-16:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Haakon VII\'s gate 6',
    addressLocality: 'Oslo',
    postalCode: '0161',
    addressCountry: 'NO',
  },
  sameAs: [
    'TODO: Legg inn URL til Google My Business',
    'TODO: Legg inn URL til LinkedIn-profil',
    'TODO: Legg inn URL til Facebook-side',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Brynjulf Hardang' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Svært god service. Trygt med folk som kan faget sitt. Fekk svært god hjelp og mange gode tips og innspel under byggeprosessen.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Einar Lundgaard' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Enkel og grei å jobbe med, fant gode konsepter sammen uten å dreie mot kompliserte og kostbare løsninger.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Nabila Sabab' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Veldig rask respons, høy faglig kompetanse og høy grad av løsningsorientering. Får mine beste anbefalinger!' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Hartmut Wachter' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Veldig hyggelig og løsningsorientert. Tar seg tid til spørsmål og ønske om endringer.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Sunniva Opsahl' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Godt fornøyd med brannsikringsvurderingen som ble gjort, og at firmaet tok ansvarsrett for brannsikkerhet i vår sak. Rapporten førte til ferdigattest hos kommunen for tilbygg til en dobbeltgarasje.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Cecilie Pettersen Leira' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Ble ikke tilbudt en dyr dokumentasjonspakke som var overdimensjonert i henhold til vårt prosjekt. Veldig fornøyd!' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

