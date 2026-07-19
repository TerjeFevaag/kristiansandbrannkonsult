import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll brann Kristiansand | Brannkonsult AS',
  description:
    'Lovpålagt uavhengig kontroll (UK) av brannkonsept i Kristiansand og Agder. Tiltaksklasse 2 og høyere. Sentralt godkjent, nøytral rådgiver – vi selger ingen produkter. Få tilbud i dag.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Kan vi starte uavhengig kontroll tidlig, eller må brannkonseptet være ferdig?',
    answer:
      'Det er mulig å involvere oss tidlig i prosjektet for å gi innspill underveis — men den formelle uavhengige kontrollen utføres etter at brannkonseptet er ferdig dokumentert. Vi anbefaler tidlig dialog slik at eventuelle avvik kan rettes mens prosjekteringen fortsatt pågår, ikke etter at byggesøknaden er innlevert.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om uavhengig kontroll (UK) av brannprosjektering når tiltaksklassen er 2 eller høyere, jf. SAK10 § 14-2. Dette gjelder de fleste leilighetsbygg med fire boenheter eller mer, næringsbygg over en viss størrelse og offentlige bygg.',
  },
  {
    question: 'Vi har brukt en lokal brannrådgiver i Kristiansand til prosjekteringen — kan dere ta UK?',
    answer:
      'Ja — forutsetningen for uavhengig kontroll er nettopp at vi ikke har vært involvert i prosjekteringen av det aktuelle bygget. Vi kan utføre UK uansett hvem som har prosjektert, og uansett om prosjektet er i Kristiansand, Grimstad, Arendal eller andre kommuner i Agder.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Fra ca. 8 000 kr ekskl. mva. Prisen avhenger av prosjektets omfang og dokumentasjonsmengde — et større næringsbygg med kompleks branntegning koster mer enn et enkelt leilighetsbygg. Vi gir fastpris etter å ha sett tegningsgrunnlaget.',
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
    { '@type': 'ListItem', position: 2, name: 'Uavhengig kontroll', item: 'https://www.kristiansandbrannkonsult.no/uavhengig-kontroll' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Uavhengig kontroll av brannkonsept',
  description: 'Uavhengig kontroll (UK) av brannkonsept og brannprosjektering i Kristiansand og Agder. Sentralt godkjent.',
  provider: { '@type': 'LocalBusiness', name: 'Brannkonsult AS', url: 'https://www.kristiansandbrannkonsult.no' },
  areaServed: ['Kristiansand', 'Lillesand', 'Grimstad', 'Mandal', 'Arendal', 'Agder'],
  url: 'https://www.kristiansandbrannkonsult.no/uavhengig-kontroll',
}

export default function UavhengigKontrollPage() {
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
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Uavhengig kontroll av brannkonsept i Kristiansand
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Tiltaksklasse 2 eller høyere? Da er uavhengig kontroll av brannkonseptet lovpålagt — og du trenger en aktør som ikke har vært involvert i prosjekteringen.
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
                  Uavhengig kontroll (UK) av brannprosjektering er et krav etter SAK10 for byggesaker i tiltaksklasse 2 og høyere. Formålet er å redusere risikoen for prosjekteringsfeil som ellers ville gå uoppdaget frem til bygget er ferdig — og som da koster langt mer å rette. En faglig gjennomgang av <a href="https://www.brannkonsult.no/uavhengig-kontroll-brannkonsept/" className="text-brand-orange hover:underline">kravene til uavhengig kontroll av brann</a> finner du på brannkonsult.no.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvem trenger uavhengig kontroll av brann?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  SAK10 § 14-2 krever uavhengig kontroll av brannprosjektering der tiltaksklassen er 2 eller høyere. I praksis gjelder dette:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Leilighetsbygg med fire eller flere boenheter',
                    'Næringsbygg med krav om risikoklasse 4 eller høyere (kontor, handel, undervisning)',
                    'Bygninger i mer enn to etasjer med krav om slokkeanlegg',
                    'Rehabiliteringsprosjekter av større eksisterende bygg',
                    'Offentlige bygg og institusjoner (skoler, sykehjem, helsebygg)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i kontrollen?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Gjennomgang av brannkonsept mot kravene i TEK17',
                    'Kontroll av branntegninger: brannceller, seksjonering og rømningsveier',
                    'Vurdering av løsningsvalg for branntekniske installasjoner',
                    'Gjennomgang av prosjekteringsgrunnlag og forutsetninger',
                    'Signering av erklæring om ansvarsrett for uavhengig kontroll',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Vår leveranse</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Skriftlig kontrollrapport med eventuelle avvik og merknader',
                    'Erklæring om ansvarsrett for uavhengig kontroll (SAK10)',
                    'Nøytral faglig vurdering — vi har ikke vært involvert i prosjekteringen',
                    'Fastpris basert på faktisk dokumentasjonsmengde',
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
                  <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                  <p className="text-brand-darkgray">
                    Fra ca. <strong className="text-brand-black">8 000 kr</strong> ekskl. mva. Prisen avhenger av prosjektets omfang og dokumentasjonsmengde. Alltid fastpris.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi utfører uavhengig kontroll for prosjekter i hele Agder — Kristiansand, Grimstad, Lillesand, Arendal, Mandal og omegn — og tar også oppdrag i resten av landet der prosjekteringen kan leveres digitalt.
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
                    <h3 className="font-bold text-xl mb-3">Få tilbud på UK</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Kontakt oss for et uforpliktende tilbud på uavhengig kontroll. Vi svarer innen 24 timer.
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
                        { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              Kontakt oss for uavhengig kontroll i Kristiansand
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
