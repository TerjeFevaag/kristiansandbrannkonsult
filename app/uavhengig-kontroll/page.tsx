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
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll er en lovpÃ¥lagt kontroll av brannprosjekteringen i visse byggeprosjekter. En annen aktÃ¸r enn den som prosjekterte skal gjennomgÃ¥ og bekrefte at brannkonseptet er i trÃ¥d med regelverket.',
  },
  {
    question: 'NÃ¥r er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om uavhengig kontroll nÃ¥r brannprosjekteringen er i tiltaksklasse 2 eller hÃ¸yere, jf. SAK10. Dette gjelder de fleste leilighetsbygg, nÃ¦ringsbygg og offentlige bygg over en viss stÃ¸rrelse.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Prisen avhenger av prosjektets omfang og dokumentasjonsmengde. Vi utfÃ¸rer UK i hele landet â€” fra Kristiansand og Agder til Oslo, Bergen og resten av Norge. Kontakt oss for et uforpliktende pristilbud.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja â€” vi kan utfÃ¸re uavhengig kontroll for prosjekter der andre har prosjektert, uansett hvor i landet prosjektet er. Som nÃ¸ytral rÃ¥dgiver er dette en av vÃ¥re kjernetjenester.',
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
            Vi utfÃ¸rer uavhengig kontroll (UK) av brannkonsept og brannprosjektering i Kristiansand og Agder.
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
                  I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i trÃ¥d med gjeldende forskrifter og at prosjekteringen holder nÃ¸dvendig kvalitet. Dette gir Ã¸kt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">NÃ¥r er det krav om uavhengig kontroll?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Etter SAK10 (Byggesaksforskriften) er det krav om uavhengig kontroll av brannprosjektering nÃ¥r prosjekteringen er i tiltaksklasse 2 eller hÃ¸yere. Dette gjelder typisk:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Leilighetsbygg med fire boenheter eller mer',
                    'NÃ¦ringsbygg over en viss stÃ¸rrelse',
                    'Offentlige bygg og institusjoner',
                    'Bygninger i risikoklasse 4, 5 og 6',
                    'Rehabilitering av stÃ¸rre eksisterende bygg',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonseptets samsvar med TEK17',
                    'Branntegninger og branncelleoppdeling',
                    'LÃ¸sningsvalg for rÃ¸mningsveier og slokkeanlegg',
                    'Dokumentasjon av prosjekteringsgrunnlag',
                    'AnsvarsrettserklÃ¦ringer',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Uavhengig gjennomgang av brannkonsept og branntegninger',
                    'Skriftlig kontrollrapport',
                    'ErklÃ¦ring av ansvarsrett for uavhengig kontroll',
                    'NÃ¸ytral part â€” vi selger ingen produkter',
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
                  Vi utfÃ¸rer uavhengig kontroll i Kristiansand og regionen for Ã¸vrig â€” Grimstad, Lillesand, Arendal, Mandal og resten av Agder.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spÃ¸rsmÃ¥l</h2>
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
                    <h3 className="font-bold text-xl mb-3">FÃ¥ tilbud pÃ¥ UK</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Kontakt oss for et uforpliktende tilbud pÃ¥ uavhengig kontroll. Vi svarer innen 24 timer.
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
              FÃ¥ tilbud nÃ¥
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

