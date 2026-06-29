import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Branninspeksjon Kristiansand – Pålegg fra tilsyn? | Brannkonsult AS',
  description:
    'Fått pålegg etter branntilsyn i Kristiansand eller Agder? Vi hjelper borettslag, sameier og næringsbygg med branninspeksjon, tilstandsrapport og handlingsplan. Fra 8 000 kr. Sentralt godkjent.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/branninspeksjon' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer:
      'Branntilsyn utføres av brann- og redningsetaten og er en myndighetskontroll. Branninspeksjon er en grundigere gjennomgang utført av oss som uavhengig rådgiver — vi kartlegger alle branntekniske forhold og utarbeider en handlingsplan.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret i sameiet er ansvarlig for at fellesarealer og byggets brannsikkerhet ivaretas. Enkeltbeboere er ansvarlige for sine enheter. Vi kan bistå styret med å oppfylle kravene.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer:
      'Kommunen kan gi pålegg om utbedring med frist. Vi hjelper deg med å forstå pålegget, prioritere tiltakene og dokumentere at utbedringene er gjennomført.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Prisen avhenger av byggets størrelse og kompleksitet. Vi leverer branninspeksjon over hele landet — fra Kristiansand og Agder til resten av Norge. Kontakt oss for et uforpliktende pristilbud.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Forskrift om brannforebygging krever at alle byggverk skal ha et sikkerhetsnivå tilsvarende BF85 (Byggforskrift 1985). Eldre bygninger som ikke oppfyller dette må oppgraderes. Vi vurderer bygg over hele landet og gir deg en klar anbefaling.',
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
    { '@type': 'ListItem', position: 2, name: 'Branninspeksjon', item: 'https://www.kristiansandbrannkonsult.no/branninspeksjon' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Branninspeksjon',
  description: 'Branninspeksjon og tilstandsvurdering av brannsikkerhet for borettslag, sameier og næringsbygg i Kristiansand og Agder.',
  provider: { '@type': 'LocalBusiness', name: 'Brannkonsult AS', url: 'https://www.kristiansandbrannkonsult.no' },
  areaServed: ['Kristiansand', 'Lillesand', 'Grimstad', 'Mandal', 'Arendal', 'Agder'],
  url: 'https://www.kristiansandbrannkonsult.no/branninspeksjon',
}

export default function BranninspeksjonPage() {
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
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Branninspeksjon i Kristiansand
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Vi hjelper deg etter pålegg fra branntilsyn og kartlegger brannsikkerheten i din bygning.
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
                  Har kommunen vært på branntilsyn, eller ønsker du å kartlegge brannsikkerheten i en eldre bygning i Kristiansand? Vi hjelper borettslag, sameier, næringsbygg og eiendomseiere med branninspeksjon og vurdering av byggets brannsikkerhet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Krav til oppgradering</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Forskrift om brannforebygging krever at alle byggverk har et brannsikkerhetsnivå tilsvarende det som gjaldt ved byggetidspunktet, minimum BF85 (Byggforskrift av 1985). Eldre bygg som ikke oppfyller dette kravet, skal oppgraderes. Eier er ansvarlig for at oppgradering gjennomføres.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Brann- og redningsetatens oppgave</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Brannvesenet gjennomfører stikkprøvebaserte tilsyn og kan ikke gi en fullstendig gjennomgang av alle branntekniske forhold. Det er byggeiers ansvar å sørge for at alle krav er oppfylt — uavhengig av om brannvesenet har vært på tilsyn eller ikke.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i vår branninspeksjon?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Visuell inspeksjon av alle brannceller, rømningsveier og tekniske installasjoner',
                    'Gjennomgang av eksisterende dokumentasjon',
                    'Skriftlig tilstandsrapport med alle funn',
                    'Prioritert handlingsplan for utbedring',
                    'Veiledning om internkontrollrutiner',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8 border-l-4 border-brand-orange">
                  <h3 className="font-bold text-brand-black mb-2">Typisk ordlyd fra brannvesenet ved pålegg:</h3>
                  <p className="text-brand-darkgray italic text-sm leading-relaxed">
                    &laquo;Det er avdekket mangler ved brannsikkerheten i bygget. Eier pålegges å utarbeide en tilstandsrapport og gjennomføre nødvendige tiltak innen [dato].&raquo;
                  </p>
                  <p className="text-brand-darkgray text-sm mt-3">Vi hjelper deg med å oppfylle pålegget raskt og kostnadseffektivt.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                  <p className="text-brand-darkgray">
                    Fra ca. <strong className="text-brand-black">8 000 kr</strong> ekskl. mva. for enklere bygg. Prisen avhenger av byggets størrelse og kompleksitet. Alltid fastpris.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi utfører branninspeksjon i Kristiansand og hele Agder — Lillesand, Grimstad, Mandal, Arendal og omegn. Ta kontakt for et uforpliktende tilbud.
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
                    <h3 className="font-bold text-xl mb-3">Hjelp etter tilsyn</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Ta kontakt for hjelp etter branntilsyn eller for en gjennomgang av byggets brannsikkerhet.
                    </p>
                    <Link
                      href="/kontakt-oss"
                      className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                    >
                      Avtal branninspeksjon
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
                        { href: '/brannprosjektering', label: 'Brannprosjektering' },
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
              Bestill branninspeksjon i Kristiansand
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
