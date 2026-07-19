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
      'Branntilsyn er en myndighetskontroll utført av Kristiansand brann og redning etter brannvernloven — de sjekker typisk internkontroll, rømningsveier og slokkeutstyr. En branninspeksjon utført av oss er en grundigere faglig gjennomgang der vi kartlegger hele byggets branntekniske tilstand, avdekker avvik og lager en prioritert handlingsplan. Vi har ingen myndighet til å gi pålegg — det er en fordel, ikke en ulempe.',
  },
  {
    question: 'Styret i borettslaget vårt har fått pålegg — hva gjør vi?',
    answer:
      'Første steg er å forstå hva pålegget faktisk krever. Mange styrer opplever at ordlyden er uklar. Vi leser pålegget, befarer bygget og utarbeider tilstandsrapporten brannvesenet forventer å motta. Deretter lager vi en prioritert plan for hva som må gjøres, og i hvilken rekkefølge.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret er ansvarlig for at fellesarealer og byggets branntekniske tilstand er i orden. Enkeltbeboere er ansvarlige for sine enheter. I eldre sameier ser vi ofte at ansvaret er uklart og at dokumentasjon mangler — en branninspeksjon gir styret et tydelig bilde og et godt grunnlag for å handle.',
  },
  {
    question: 'Vi har trehus fra 1960-tallet — hva kan vi forvente å finne?',
    answer:
      'Typiske funn i eldre trehusbebyggelse på Sørlandet er kompromitterte branncelleskillere (f.eks. hull etter rørgjennomføringer), feil type dører i rømningsveier, manglende røykvarsleranlegg i fellesarealer og manglende dokumentasjon av tidligere ombygginger. Vi dokumenterer tilstanden som den faktisk er, ikke som en worst-case-liste.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Fra ca. 8 000 kr ekskl. mva. for enklere bygg. Prisen avhenger av byggets størrelse, antall etasjer og tilgjengelig dokumentasjon. Vi gir fastpris etter en innledende gjennomgang av byggets grunndata — kontakt oss for et uforpliktende tilbud.',
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
            Vi kartlegger byggets branntekniske tilstand og lager en plan for hva som faktisk må gjøres — enten du er styreleder i et borettslag eller eier av et næringsbygg.
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
                  Agder har en stor andel eldre bygningsbestand — mange borettslag og sameier ble satt opp på 60-, 70- og 80-tallet, og svært få har gjennomgått en fullstendig brannteknisk gjennomgang siden den gang. En branninspeksjon gir styret, eier eller forvalter et faktisk bilde av tilstanden — og et grunnlag for å prioritere tiltak klokt, fremfor å gjøre alt på én gang.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Lovkravet: alle bygg skal opp til BF85-nivå</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Forskrift om brannforebygging (§ 6) krever at alle eksisterende byggverk opprettholder et brannsikkerhetsnivå tilsvarende Byggforskrift 1985 (BF85). Mange eldre bygg i Kristiansand og Agder oppfyller ikke dette kravet i dag — særlig gjelder dette eldre leilighetskomplekser der branncelleskiller er blitt kompromittert av rørgjennomføringer og ombygginger gjennom årene. For mer om regelverket og hva en <a href="https://www.brannkonsult.no/branninspeksjon/" className="text-brand-orange hover:underline">branninspeksjon normalt avdekker</a>, se brannkonsult.no.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva tilsynet ikke dekker</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Kristiansand brann og redning gjennomfører tilsyn etter en prioriteringsplan og kan ikke gi en fullstendig faglig gjennomgang av alle branntekniske forhold. Det er byggeiers ansvar å sørge for at kravene er oppfylt — uavhengig av om brannvesenet har vært på tilsyn. Mange eiere oppdager gjennom en privat branninspeksjon avvik de ikke visste om, og som det er langt rimeligere å ta tak i på eget initiativ enn etter et formelt pålegg.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik gjennomfører vi inspeksjonen</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Gjennomgang av plangrunnlag og eksisterende brannteknisk dokumentasjon',
                    'Visuell inspeksjon av branncelleskillere, rømningsveier og tekniske installasjoner',
                    'Vurdering av avvik mot BF85-kravene og gjeldende forskrift',
                    'Skriftlig tilstandsrapport med fotografisk dokumentasjon av funn',
                    'Prioritert tiltaksplan med anbefalte tiltak og rekkefølge',
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
                  Vi utfører branninspeksjon i Kristiansand og hele Agder — borettslag og sameier i Lillesand og Grimstad, næringsgårder i Arendal og Mandal, og andre bygg i regionen. Ta kontakt for et uforpliktende tilbud basert på ditt bygg.
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
