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
  title: 'Brannprosjektering i Kristiansand | Kristiansand Brannkonsult',
  description:
    'Kristiansand Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: {
    canonical: 'https://www.kristiansandbrannkonsult.no',
  },
  openGraph: {
    title: 'Brannprosjektering i Kristiansand | Kristiansand Brannkonsult',
    description:
      'Kristiansand Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder.',
    url: 'https://www.kristiansandbrannkonsult.no',
    siteName: 'Kristiansand Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Kristiansand Brannkonsult',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brannprosjektering i Kristiansand | Kristiansand Brannkonsult',
    description: 'Kristiansand Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Kristiansand og Agder. Sentralt godkjent foretak.',
    images: ['/images/hero.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kristiansand Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Kristiansand',
  telephone: '+4745601942',
  email: 'post@brannkonsult.no',
  url: 'https://www.kristiansandbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
  openingHours: 'Mo-Fr 08:00-16:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'TODO: Legg inn gateadresse',
    addressLocality: 'Kristiansand',
    postalCode: 'TODO: Legg inn postnummer',
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
    { '@type': 'Review', author: { '@type': 'Person', name: 'Kirsti Andresen' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Lett å få kontakt med firmaet på ulike spørsmål som dukker opp underveis. Jeg har kun hatt gode opplevelser, selv om ikke alt var helt klart for meg som ufaglært.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Heidi Spinnangr' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Veldig fornøyd!' },
    { '@type': 'Review', author: { '@type': 'Organization', name: 'Hagelin Byggservice' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Kristiansand Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Jonathan Steinsvik' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Ga rask tilbakemelding ved første kontakt. Leverte til avtalt tid og pris. Høy kvalitet på arbeidet.' },
    { '@type': 'Review', author: { '@type': 'Organization', name: 'Jon Cederbrand Arkitektur AS' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.' },
    { '@type': 'Review', author: { '@type': 'Organization', name: 'Ventilasjon AS' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Vi er veldig fornøyde med leveransen fra Kristiansand Brannkonsult AS. God service og rask levering.' },
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
