import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannkonsept Kristiansand – Fra 15 000 kr | Brannkonsult AS',
  description:
    'Trenger du brannkonsept i Kristiansand, Agder eller resten av Norge? Sentralt godkjent TKL 1+2. Fastpris fra 15 000 kr ekskl. mva., inkl. branntegninger. Levering 5–10 virkedager. Få tilbud i dag.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen mellom et brannkonsept og et brannteknisk notat?',
    answer:
      'Et brannkonsept er en fullstendig overordnet plan som beskriver brannsikkerhetsnivået for hele byggverket — inkludert fastsettelse av risikoklasse, brannklasse, brannceller og tegninger. Et brannteknisk notat er enklere og brukes for mindre enkeltiltak der ikke hele bygget trenger gjennomgås. Vi anbefaler riktig nivå etter en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Trenger vi brannkonsept for rehabilitering av et gammelt trehus?',
    answer:
      'Det avhenger av tiltakets omfang. Bruksendring, etablering av ny boenhet eller vesentlig ombygging utløser krav om brannprosjektering — også i eldre trehus. For vernede og fredede bygg i f.eks. Posebyen eller langs sjøfronten i Grimstad og Mandal kan det kreves særskilte brannsikringstiltak. Vi kjenner disse problemstillingene og veileder deg tidlig i prosessen.',
  },
  {
    question: 'Hva koster et brannkonsept?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi gir alltid bindende fastpris før vi starter, slik at du vet hva du betaler. Send oss prosjektbeskrivelse og tegningsgrunnlag for et konkret tilbud.',
  },
  {
    question: 'Kan vi sende tegningsunderlag digitalt?',
    answer:
      'Ja — de aller fleste oppdrag i Agder løses uten befaring. Vi mottar PDF-tegninger, situasjonsplan og prosjektbeskrivelse per e-post eller lenke, og kan som regel gi tilbud samme dag. Befaring bestilles kun dersom vi vurderer at det er nødvendig for å løse oppdraget forsvarlig.',
  },
  {
    question: 'Leverer dere til Arendal, Grimstad og andre kommuner i Agder?',
    answer:
      'Ja — vi betjener hele Agder, inkludert Kristiansand, Lillesand, Grimstad, Arendal, Mandal, Farsund og resten av fylket. Distansen spiller ingen rolle når tegningsunderlaget leveres digitalt.',
  },
  {
    question: 'Hva trengs for å få et pristilbud?',
    answer:
      'Vi trenger: adresse og matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort beskrivelse av hva som skal gjøres. Har du dette klart, sender vi tilbud raskt — ofte samme dag.',
  },
  {
    question: 'Hvor lang tid tar det å få levert brannkonseptet?',
    answer:
      'For de fleste prosjekter leverer vi innen 5–10 virkedager etter mottatt bestilling og komplett tegningsgrunnlag. Har du en konkret tidsfrist fra kommunen eller arkitekt, oppgi dette i forespørselen — vi tilpasser leveringen etter behov.',
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
    { '@type': 'ListItem', position: 2, name: 'Brannkonsept', item: 'https://www.kristiansandbrannkonsult.no/brannkonsept' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brannkonsept',
  description: 'Utarbeidelse av brannkonsept for byggesaker i Kristiansand og Agder. Sentralt godkjent TKL 1+2. Fastpris alltid.',
  provider: { '@type': 'LocalBusiness', name: 'Brannkonsult AS', url: 'https://www.kristiansandbrannkonsult.no' },
  areaServed: ['Kristiansand', 'Lillesand', 'Grimstad', 'Mandal', 'Arendal', 'Agder'],
  url: 'https://www.kristiansandbrannkonsult.no/brannkonsept',
  offers: { '@type': 'Offer', price: '15000', priceCurrency: 'NOK', description: 'Fra ca. 15 000 kr ekskl. mva., tiltaksklasse 2' },
}

export default function BrannkonseptPage() {
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
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Brannkonsept i Kristiansand
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Brannkonsept utarbeides når byggesøknaden krever dokumentasjon av brannsikkerhetsnivået — enten du bygger nytt, rehabiliterer et eldre trehus eller endrer bruken av et næringsbygg. Vi leverer til fast pris.
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-[65%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Et brannkonsept er den overordnede planen som viser at brannsikkerheten er gjennomtenkt for hele bygningsmassen — ikke bare det omsøkte tiltaket. Kristiansand og kommunene i Agder behandler byggesøknader etter de samme nasjonale reglene, men byggetypene varierer mye: historiske trehus i Posebyen og Kvadraturen, leilighetsbygg langs Otra, eldre forretningsbygg i Arendal og Grimstad sentrum — og nye næringsbygg i vekstområdene rundt Kristiansand. Vi har erfaring med alle disse.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i et brannkonsept?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Innholdet tilpasses tiltaket, men et komplett brannkonsept dekker normalt:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Beskrivelse av bygningens brukskategori og fastsettelse av risikoklasse',
                    'Fastsettelse av brannklasse og de tekniske ytelseskravene dette medfører',
                    'Inndeling i brannceller og brannseksjoner',
                    'Branntegninger: plantegninger med branncellegrenser og rømningsveier',
                    'Krav til bærende konstruksjoner, vegger og etasjeskillere',
                    'Vurdering av røykspredning og ventilasjon ved brann',
                    'Krav til branntekniske anlegg (sprinkler, brannalarm, slokkeutstyr)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Bygningstype bestemmer kravnivå</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  TEK17 deler bygninger inn etter risikoklasse (RKL) basert på bruksformål og de konsekvenser en brann kan ha. Brannklassen fastsettes deretter ut fra risikoklasse og antall etasjer. Her er de vanligste kategoriene vi møter i Agder. En mer utfyllende gjennomgang av <a href="https://www.brannkonsult.no/brannkonsept/" className="text-brand-orange hover:underline">hva et brannkonsept inneholder og når det kreves</a> finner du hos brannkonsult.no.
                </p>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                    <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                    <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                    <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Komplett brannkonsept med branntegninger',
                    'Ansvarsrett overfor kommunen, tiltaksklasse 1 og 2',
                    'Bindende fastpris — vi gir pris før vi starter',
                    'Levering på avtalt frist, vanligvis 5–10 virkedager',
                    'Faglig rådgivning underveis — vi selger ingen produkter eller håndverkstjenester',
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
                      <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                      <p className="text-brand-darkgray">
                        Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi kjenner byggetypene på Sørlandet godt — fra verneverdige trehus i Grimstad og Arendal til nyere leilighetsbygg langs sjøfronten i Kristiansand og næringsbygg i vekstkommunene. Ta kontakt for en gratis vurdering av akkurat ditt prosjekt.
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
                    <h3 className="font-bold text-xl mb-3">Få uforpliktende tilbud</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Kontakt oss for en gratis vurdering av ditt brannkonseptbehov. Vi svarer innen 24 timer.
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
                        { href: '/brannprosjektering', label: 'Brannprosjektering' },
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

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for uforpliktende tilbud på brannkonsept i Kristiansand
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
