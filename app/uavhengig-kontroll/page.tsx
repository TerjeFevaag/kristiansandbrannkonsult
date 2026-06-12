import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brannkonsept i Kristiansand | Kristiansand Brannkonsult',
  description:
    'Uavhengig kontroll (UK) av brannkonsept og brannprosjektering i Kristiansand og Agder. Sentralt godkjent. Nøytral part — vi selger ingen produkter.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll er en lovpålagt kontroll av brannprosjekteringen i visse byggeprosjekter. En annen aktør enn den som prosjekterte skal gjennomgå og bekrefte at brannkonseptet er i tråd med regelverket.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om uavhengig kontroll når brannprosjekteringen er i tiltaksklasse 2 eller høyere, jf. SAK10. Dette gjelder de fleste leilighetsbygg, næringsbygg og offentlige bygg over en viss størrelse.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Prisen avhenger av prosjektets omfang og dokumentasjonsmengde. Kontakt oss for et uforpliktende pristilbud.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — vi kan utføre uavhengig kontroll for prosjekter der andre har prosjektert. Som nøytral rådgiver er dette en av våre kjernetjenester.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
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
            Vi utfører uavhengig kontroll (UK) av brannkonsept og brannprosjektering i Kristiansand og Agder.
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
                  I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Dette gir økt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Etter SAK10 (Byggesaksforskriften) er det krav om uavhengig kontroll av brannprosjektering når prosjekteringen er i tiltaksklasse 2 eller høyere. Dette gjelder typisk:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Leilighetsbygg med fire boenheter eller mer',
                    'Næringsbygg over en viss størrelse',
                    'Offentlige bygg og institusjoner',
                    'Bygninger i risikoklasse 4, 5 og 6',
                    'Rehabilitering av større eksisterende bygg',
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
                    'Løsningsvalg for rømningsveier og slokkeanlegg',
                    'Dokumentasjon av prosjekteringsgrunnlag',
                    'Ansvarsrettserklæringer',
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
                    'Erklæring av ansvarsrett for uavhengig kontroll',
                    'Nøytral part — vi selger ingen produkter',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                      <a href="tel:+4700000000" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                        <Phone size={14} /> +47 000 00 000
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
                        { href: '/branntilsyn', label: 'Branntilsyn' },
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
