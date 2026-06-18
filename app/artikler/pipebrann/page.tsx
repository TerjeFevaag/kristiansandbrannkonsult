import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Forebygg pipebrann med enkle grep | Kristiansand Brannkonsult',
  description:
    'Lær hvordan du forebygger pipebrann. Regelmessig feieservice, riktig ved og god trekk er nøkkelen. Tips fra sentralt godkjent brannrådgiver i Kristiansand.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/artikler/pipebrann' },
}

export default function PipebrannPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/artikler/pipebrann" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Pipebrann</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-3xl">
            Forebygg pipebrann med enkle grep
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Er du i faresonen for å få brann i skorsteinen? Her er det du trenger å vite.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="scale">
            <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-12">
              <Image
                src="/images/article-pipebrann.jpg"
                alt="Pipebrann forebygging"
                fill
                className="object-cover"
                sizes="800px"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Pipebrann er en av de vanligste brannårsakene i norske boliger, og kan oppstå uten forvarsel. En pipebrann kan raskt spre seg til resten av huset og forårsake store skader. Den gode nyheten er at pipebrann i stor grad kan forebygges med enkle tiltak.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva er en pipebrann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              En pipebrann oppstår når belegg i skorsteinen — kjent som sot eller kreosot — antennes. Kreosot er et tjæreaktig stoff som dannes når ved ikke forbrenner fullstendig. Over tid bygger det seg opp i røykkanalen og kan antennes ved høye temperaturer. Når det skjer, kan temperaturen i pipa stige til over 1000 grader Celsius.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vanlige årsaker til pipebrann</h2>
            <ul className="space-y-3 mb-8 text-brand-darkgray">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold mt-1">•</span>
                <span><strong className="text-brand-black">Bruk av fuktig ved:</strong> Fuktig ved gir ufullstendig forbrenning og produserer mye kreosot. Bruk alltid tørr ved med fuktighet under 20 prosent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold mt-1">•</span>
                <span><strong className="text-brand-black">Lav brenningstemperatur:</strong> Å fylle ovnen halvfull og la den ulme på lav temperatur øker kreosotdannelsen. Fyr heller i kortere perioder med god trekk og tørr ved.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold mt-1">•</span>
                <span><strong className="text-brand-black">Manglende feieservice:</strong> Regelmessig feiing fjerner kreosot og sot fra skorsteinen. Oversalting av feietjenester er en vanlig årsak til pipebrann.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold mt-1">•</span>
                <span><strong className="text-brand-black">Feil i skorsteinen:</strong> Sprekker og skader i røykkanalen kan gi dårlig trekk og øke risikoen for brann.</span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Slik forebygger du pipebrann</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              De viktigste forebyggende tiltakene er:
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <ul className="space-y-3 text-brand-darkgray">
                {[
                  'Bruk alltid tørr ved med fuktighet under 20%',
                  'Fyr med god trekk — unngå å la ovnen ulme',
                  'Sørg for regelmessig feieservice (minst én gang i året)',
                  'Sjekk at røykmelderen fungerer i alle rom',
                  'Hold adkomsten til skorsteinen fri for hindringer',
                  'Unngå å brenne avfall, impregnert tre eller plast i ovnen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-orange font-bold mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva gjør du hvis pipebrann oppstår?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Hvis du oppdager en pipebrann, ring 110 umiddelbart. Lukk lufttilførselen til ovnen for å redusere oksygentilgangen, og evakuer bygningen. Forsøk ikke å slokke brannen selv — røyken og varmen fra en pipebrann er svært farlig.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Etter en pipebrann bør en fagmann inspisere skorsteinen grundig før den tas i bruk igjen. Høy temperatur kan ha skadet murfuger og røykkanal.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikeholdsplan for skorsteinen</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              En enkel årsplan for vedlikehold av skorstein og ovn kan redde liv. Sjekk ovnsglass og pakning ved sesongstart, bestill feieservice en gang i året, og bytt batterier i røykvarslerne to ganger i året. Det tar 30 minutter og kan utgjøre hele forskjellen.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade">
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <p className="text-brand-darkgray font-medium mb-2">Har du spørsmål om brannsikkerhet i din bygning?</p>
              <p className="text-brand-darkgray text-sm leading-relaxed">
                Som sentralt godkjent brannrådgiver hjelper vi deg med brannprosjektering, branninspeksjon og brannkonsept. Ta kontakt for en gratis vurdering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Trenger du hjelp med brannprosjektering i Kristiansand?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
