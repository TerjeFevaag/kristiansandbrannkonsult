import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering Kristiansand – Fastpris | Brannkonsult AS',
  description:
    'Brannprosjektering for tilbygg, bruksendring og nybygg i Kristiansand og Agder. Sentralt godkjent TKL 1+2. Fastpris fra 15 000 kr, levering innen 5–10 virkedager. Kontakt oss i dag.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på brannkonsept og brannprosjektering?',
    answer:
      'Brannprosjektering er samlebetegnelsen på all skriftlig brannfaglig planlegging. Brannkonseptet er den overordnede rapporten som inngår i prosjekteringen. I dagligtale brukes begrepene ofte om hverandre — det viktigste er at dokumentasjonen dekker det kommunen krever for det aktuelle tiltaket.',
  },
  {
    question: 'Hva koster brannprosjektering?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi gir alltid bindende fastpris — aldri timebasert fakturering som overrasker i etterkant. Send oss prosjektbeskrivelse og tegninger for et konkret tilbud.',
  },
  {
    question: 'Vi skal innrede loft til hybel — trenger vi brannprosjektering?',
    answer:
      'Som regel ja. Etablering av en ny selvstendig boenhet — enten det er hybel, sokkelleilighet eller loftsleilighet — krever brannprosjektering i tiltaksklasse 1 eller 2. Det må dokumenteres at boenhetens branncelleskille, rømningsmuligheter og varslingssystem er tilstrekkelig.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og de fleste enklere saker er det ikke nødvendig med befaring. Vi mottar digitale tegninger og prosjektbeskrivelse og kan jobbe effektivt fra Kristiansand uansett hvor i Agder prosjektet ligger. Vi bestiller befaring kun dersom vi vurderer at det er nødvendig.',
  },
  {
    question: 'Kan dere ta ansvarsrett som ansvarlig prosjekterende brann?',
    answer:
      'Ja — vi er sentralt godkjent i tiltaksklasse 1 og 2 og kan påta oss ansvarsrett som ansvarlig prosjekterende for brannteknisk prosjektering overfor kommunen. Dette er inkludert i oppdraget.',
  },
  {
    question: 'Hva trengs for å få pristilbud?',
    answer:
      'Vi trenger: adresse og matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort prosjektbeskrivelse. Har du dette klart, kan vi som regel gi tilbud samme dag.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.kristiansandbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannprosjektering', item: 'https://www.kristiansandbrannkonsult.no/brannprosjektering' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brannprosjektering',
  description: 'Brannprosjektering i Kristiansand og Agder. Sentralt godkjent TKL 1+2. Fastpris alltid.',
  provider: { '@type': 'LocalBusiness', name: 'Brannkonsult AS', url: 'https://www.kristiansandbrannkonsult.no' },
  areaServed: ['Kristiansand', 'Lillesand', 'Grimstad', 'Mandal', 'Arendal', 'Agder'],
  url: 'https://www.kristiansandbrannkonsult.no/brannprosjektering',
  offers: { '@type': 'Offer', price: '15000', priceCurrency: 'NOK', description: 'Fra ca. 15 000 kr ekskl. mva., tiltaksklasse 2' },
}

export default function BrannprosjekteringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="bg-brand-lightgray py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Brannprosjektering i Kristiansand
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Vi sørger for at byggesøknaden din er komplett med riktig brannteknisk dokumentasjon — slik at tiltaket godkjennes uten unødvendige runder med kommunen.
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[65%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  De fleste byggesaker i Agder utløser behov for brannprosjektering — enten du bygger nytt i Kristiansand, etablerer en ny boenhet i et eldre trehus i Lillesand eller endrer bruken av et næringsbygg i Arendal sentrum. Brannprosjektering er den skriftlige dokumentasjonen som viser at bygget etterlever kravene i teknisk forskrift (TEK17) og brann- og eksplosjonsvernloven.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvilke tiltak krever brannprosjektering?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">De fleste tiltak som krever byggetillatelse, krever også brannprosjektering. Eksempler på det vi oftest hjelper med i Agder:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Ny selvstendig boenhet (hybel, sokkelleilighet eller loftsleilighet)',
                    'Bruksendring av rom eller bygning (f.eks. garasje til verksted, eller kontor til bolig)',
                    'Tilbygg eller påbygg til eksisterende bygg',
                    'Bytte av branncelleskillende konstruksjoner (dører, vegger, etasjeskillere)',
                    'Rehabilitering av bygninger oppført før 1997',
                    'Nye nærings- eller institusjonsbygg',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasse bestemmer kravnivå</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">Kravene til brannsikkerhet avhenger av hva bygget brukes til — risikoklassen (RKL) fastsettes etter TEK17:</p>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lager uten personopphold</li>
                    <li><strong>RKL 2:</strong> Boliger — kan rømme på egenhånd</li>
                    <li><strong>RKL 3:</strong> Bygninger med få personopphold</li>
                    <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller, sykehjem, overnatting</li>
                    <li><strong>RKL 6:</strong> Sykehus med svekkede beboere</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Involver rådgiver tidlig — spar penger</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  I Kristiansand, som i resten av Agder, ser vi at de dyreste feilene oppstår når brannteknisk dokumentasjon tas inn for sent. Endringer i tegningene koster lite tidlig i prosessen — de koster mye når byggmesteren allerede er i gang. Involver oss gjerne allerede i skisseprosjektfasen. Du kan lese mer om <a href="https://www.brannkonsult.no/brannprosjektering/" className="text-brand-orange hover:underline">brannprosjektering som fagområde</a> på brannkonsult.no.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept og branntegninger (BKL 1–3)',
                    'Ansvarsrett som ansvarlig prosjekterende brann, tiltaksklasse 1 og 2',
                    'Bindende fastpris — aldri timebasert fakturering',
                    'Rask levering — normalt 5–10 virkedager etter mottatt underlag',
                    'Nøytral faglig rådgiver — ingen produkt- eller håndverkstjenester',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-2">Hva vi trenger fra deg</h3>
                      <ul className="text-brand-darkgray text-sm space-y-1">
                        <li>Situasjonsplan / adresse / matrikkel</li>
                        <li>Byggesakstegninger (plan, snitt, fasade)</li>
                        <li>Prosjektbeskrivelse</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi hjelper arkitekter, byggmestere, utbyggere og privatpersoner med brannprosjektering i hele Agder — Kristiansand, Lillesand, Grimstad, Arendal, Mandal og omegn. Kontakt oss for en gratis vurdering.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
              </ScrollReveal>
              <ScrollReveal delay={80} variant="fade">
                <FAQAccordion items={faqItems} />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[35%]">
              <ScrollReveal delay={200}>
                <div className="sticky top-24">
                  <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                    <h3 className="font-bold text-xl mb-3">Be om tilbud</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Kontakt oss for en gratis vurdering. Vi svarer innen 24 timer.
                    </p>
                    <Link
                      href="/kontakt-oss"
                      className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                    >
                      Kontakt oss
                    </Link>
                    <div className="space-y-3 pt-4 border-t border-brand-white/10">
                      <a href="tel:+4748481914" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                        <Phone size={14} /> 484 81 914
                      </a>
                      <a href="mailto:post@kristiansandbrannkonsult.no" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                        <Mail size={14} /> post@kristiansandbrannkonsult.no
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 bg-brand-lightgray rounded-[30px] p-8">
                    <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                    <ul className="space-y-3">
                      {[
                        { href: '/brannkonsept', label: 'Brannkonsept' },
                        { href: '/branninspeksjon', label: 'Branninspeksjon' },
                        { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                      ].map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                            &rarr; {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 bg-brand-white rounded-[30px] p-6 flex flex-col items-center border border-brand-gray">
                    <img src="/images/sentralt-godkjent.png" alt="Sentralt godkjent foretak" className="h-20 object-contain" />
                    <p className="text-xs text-brand-darkgray text-center mt-2">Sentralt godkjent TKL 1 og 2</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Be om tilbud på brannprosjektering i Kristiansand
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
