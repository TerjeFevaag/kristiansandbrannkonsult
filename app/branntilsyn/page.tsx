import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Branntilsyn Kristiansand – Hjelp etter pålegg | Brannkonsult AS',
  description:
    'Fått pålegg etter branntilsyn i Kristiansand eller Agder? Vi hjelper borettslag, sameier og næringsbygg med branninspeksjon, tilstandsrapport og handlingsplan. Sentralt godkjent rådgiver.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/branntilsyn' },
}

const faqItems = [
  {
    question: 'Hva inneholder et svar på et branntilsynspålegg?',
    answer:
      'Svaret på et pålegg skal dokumentere at eier kjenner til avvikene og har en plan for å utbedre dem. Det kreves vanligvis en tilstandsrapport som beskriver de konkrete funnene, og en handlingsplan med frister. Vi utarbeider begge dokumenter og sikrer at svaret inneholder det brannvesenet forventer.',
  },
  {
    question: 'Hvilken frist har vi på å svare på pålegget?',
    answer:
      'Fristen fremgår av selve pålegget og varierer. Noen pålegg har svært korte frister — særlig dersom branntilsynet har avdekket alvorlige rømningsveismangler. Ta kontakt med oss raskt etter at du har mottatt pålegget, så hjelper vi deg å overholde fristen.',
  },
  {
    question: 'Kan vi klage på pålegget?',
    answer:
      'Ja — et branntilsynspålegg er et enkeltvedtak og kan påklages til Statsforvalteren. Klage utsetter ikke plikten til å svare innen fristen. Vi kan hjelpe deg å vurdere om pålegget er faglig velbegrunnet og bistå med klagegrunnlag dersom det er aktuelt.',
  },
  {
    question: 'Vi vet ikke hva pålegget krever i praksis — hva gjør vi?',
    answer:
      'Kontakt oss. Vi leser pålegget, tar befaring i bygget og forklarer hva som faktisk må gjøres — og i hvilken rekkefølge. Mange styrer og eiere i Agder opplever at ordlyden i pålegget er vanskelig å tolke uten faglig bakgrunn.',
  },
  {
    question: 'Hva koster det å få hjelp etter et branntilsynspålegg?',
    answer:
      'Prisen avhenger av byggets størrelse og antall avvik som må dokumenteres. Vi gir fastpris etter en innledende gjennomgang. Ta kontakt — vi starter alltid med å hjelpe deg å forstå omfanget, uten kostnad.',
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
    { '@type': 'ListItem', position: 2, name: 'Branntilsyn', item: 'https://www.kristiansandbrannkonsult.no/branntilsyn' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hjelp etter branntilsyn',
  description: 'Hjelp etter branntilsynspålegg i Kristiansand og Agder. Tilstandsrapport, handlingsplan og svar til brannvesenet.',
  provider: { '@type': 'LocalBusiness', name: 'Brannkonsult AS', url: 'https://www.kristiansandbrannkonsult.no' },
  areaServed: ['Kristiansand', 'Lillesand', 'Grimstad', 'Mandal', 'Arendal', 'Agder'],
  url: 'https://www.kristiansandbrannkonsult.no/branntilsyn',
}

export default function BranntilsynPage() {
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
            <span>Branntilsyn</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Branntilsyn og branninspeksjon i Kristiansand
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Branntilsyn fra kommunen gir byggeier en frist for å dokumentere og utbedre mangler. Vi hjelper deg å forstå hva pålegget faktisk innebærer — og å svare korrekt.
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
                  Kristiansand brann og redning gjennomfører branntilsyn etter en prioriteringsplan basert på bygningstype og risiko. Felles for alle tilsyn er at byggeier er ansvarlig for at kravene er oppfylt — og at et pålegg må besvares skriftlig innen den angitte fristen. Vi bistår borettslag, sameier, eiendomsforvaltere og næringslivet i Agder med å håndtere pålegg riktig.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik fungerer et branntilsynspålegg</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Et pålegg fra branntilsynet er et enkeltvedtak etter brannvernloven og krever skriftlig svar innen fristen. Svaret må inneholde en tilstandsrapport som dokumenterer avvikene og en plan for utbedring. Manglende svar kan føre til tvangsmulkt. Vi utarbeider den dokumentasjonen brannvesenet forventer å motta.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrollerer brannvesenet?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Branntilsyn etter brannvernloven (§ 13) og brannforebyggingsforskriften er et myndighetstilsyn — ikke en fullstendig faglig gjennomgang. Brannvesenet sjekker typisk om internkontrollsystem er på plass, om rømningsveier er frie og om varslings- og slokkeutstyr fungerer. Det er ikke brannvesenets oppgave å prosjektere løsninger eller si hva som konkret må gjøres — det er eiers ansvar å finne det ut.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi hjelper med etter pålegg</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Gjennomgang av pålegget og hva som faktisk kreves av deg',
                    'Befaring og tilstandsrapport som dokumenterer de konkrete avvikene',
                    'Prioritert tiltaksplan med anbefalt rekkefølge og kostnadsestimat',
                    'Skriftlig svar til brannvesenet med nødvendig dokumentasjon',
                    'Oppfølging etter at tiltak er gjennomført',
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
                  <h3 className="font-bold text-brand-black mb-2">Husk: klage utsetter ikke svarfristen</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">
                    Selv om du vurderer å klage på pålegget, må du svare innen den angitte fristen. Klagen behandles parallelt — men dersom fristen passerer uten svar, kan brannvesenet ilegge tvangsmulkt. Ta kontakt med oss raskt etter at du har mottatt pålegget.
                  </p>
                </div>
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
              Kontakt oss for hjelp etter branntilsyn i Kristiansand
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
