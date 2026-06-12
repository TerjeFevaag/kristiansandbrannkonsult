import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Kristiansand | Kristiansand Brannkonsult',
  description:
    'Brannprosjektering i Kristiansand og Agder. Sentralt godkjent TKL 1+2. Fast pris, rask levering. Tilbygg, bruksendring, ny boenhet. Kontakt oss i dag.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Kristiansand?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris slik at du slipper ubehagelige overraskelser.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tilbygg, bruksendringer og nye boenheter krever brannprosjektering. Ta kontakt for en gratis vurdering av akkurat ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det sjelden nødvendig. Takket være digitale kartdata kan vi i mange tilfeller jobbe uten fysisk befaring. Vi gir beskjed dersom vi ser behov for det.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral rådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen vår alltid er uavhengig.',
  },
  {
    question: 'Hva trengs for å få et pristilbud?',
    answer:
      'Vi trenger: adresse/matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort prosjektbeskrivelse. Send dette til oss, så sender vi tilbud innen 24 timer.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
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
            Vi sørger for at ditt bygg i Kristiansand oppfyller alle krav til brannsikkerhet — til fast pris.
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
                  Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Kristiansand oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">Brannprosjektering kreves blant annet ved:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bytte av vinduer eller dører i branncellebegrensende konstruksjoner',
                    'Tilbygg til eksisterende bygg',
                    'Påbygg (ny etasje)',
                    'Bruksendring (f.eks. fra kontor til bolig)',
                    'Etablering av ny selvstendig boenhet',
                    'Rehabilitering av eldre bygg',
                    'Bygging av garasje i tilknytning til bolig',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasser (RKL)</h2>
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
                <h2 className="text-brand-black text-2xl font-black mb-4">Start tidlig — spar penger</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Jo tidligere i prosjektet du involverer oss, desto enklere og billigere er det å finne gode branntekniske løsninger. Venter du til tegningene er ferdige, kan endringer bli kostbare. Ta kontakt allerede i skisseprosjektfasen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept og branntegninger',
                    'Ansvarsrett for brannprosjektering TKL 1 og 2',
                    'Fastpris — ingen skjulte kostnader',
                    'Levering innen 5–10 virkedager',
                    'Nøytral rådgivning — ingen produktsalg',
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
                        { href: '/branntilsyn', label: 'Branntilsyn' },
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
