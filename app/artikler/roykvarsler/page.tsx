import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Brannkonsult AS',
  description:
    'Krav til rÃ¸ykvarslere i norske boliger, forskjellen mellom ionisasjons- og optiske varslere, og anbefalt plassering. Fra sentralt godkjent brannrÃ¥dgiver.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/artikler/roykvarsler' },
}

export default function RoykvarselPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/artikler/roykvarsler" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>RÃ¸ykvarsler</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-3xl">
            Riktig rÃ¸ykvarsler redder liv
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Er du godt nok sikret hvis det oppstÃ¥r en brann om natten? Riktig rÃ¸ykvarsler kan utgjÃ¸re hele forskjellen.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="scale">
            <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-12">
              <Image
                src="/images/article-roykvarsler.jpg"
                alt="RÃ¸ykvarsler"
                fill
                className="object-cover"
                sizes="800px"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              De fleste branndÃ¸dsfall skjer om natten, mens folk sover. En fungerende rÃ¸ykvarsler gir deg de dyrebare minuttene du trenger for Ã¥ komme deg ut. Men ikke alle rÃ¸ykvarslere er like, og feil plassering kan gjÃ¸re varselet for sent.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva krever loven?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Forskrift om brannforebygging krever at alle boliger skal ha minst Ã©n rÃ¸ykvarsler per etasje. Varslerene skal plasseres slik at de kan hÃ¸res tydelig i alle soverom med lukket dÃ¸r.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              I praksis betyr dette at du bÃ¸r ha en rÃ¸ykvarsler i korridoren utenfor soverommene, en i stuen og en i kjelleren dersom du har det. For best mulig sikkerhet anbefales en rÃ¸ykvarsler i hvert soverom.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Ionisasjon eller optisk â€” hva er forskjellen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black mb-3">Ionisasjonsvarsler</h3>
                <ul className="text-brand-darkgray text-sm space-y-2">
                  <li>âœ“ Rask ved Ã¥pne, hurtigvoksende branner</li>
                  <li>âœ“ Rimeligere i innkjÃ¸p</li>
                  <li>âœ— Tregere ved ulmebranner</li>
                  <li>âœ— Mer utsatt for falske alarmer (matlaging)</li>
                </ul>
              </div>
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black mb-3">Optisk varsler</h3>
                <ul className="text-brand-darkgray text-sm space-y-2">
                  <li>âœ“ Bedre ved ulmebranner og tykk rÃ¸yk</li>
                  <li>âœ“ FÃ¦rre falske alarmer</li>
                  <li>âœ“ Anbefalt type av brannmyndigheter</li>
                  <li>âœ— Noe dyrere</li>
                </ul>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Norske brannmyndigheter anbefaler optiske rÃ¸ykvarslere, da disse er bedre til Ã¥ oppdage ulmebranner â€” som er den vanligste branntypen i boliger om natten. Kombinasjonsvarslere med begge teknologier finnes ogsÃ¥.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Riktig plassering er avgjÃ¸rende</h2>
            <ul className="space-y-3 mb-8 text-brand-darkgray">
              {[
                'Monter pÃ¥ taket, ikke pÃ¥ veggen â€” rÃ¸yk samler seg under taket',
                'Plasser minst 50 cm fra vegger og hjÃ¸rner',
                'UnngÃ¥ kjÃ¸kken og bad â€” damp og matlukt utlÃ¸ser falske alarmer',
                'Ikke plasser i kalde rom â€” lavtemperatur kan pÃ¥virke batterier',
                'Koble varslerne i nett (seriekobling) for at alle alarmer utlÃ¸ses samtidig',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-orange font-bold mt-1">âœ“</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold og levetid</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              En rÃ¸ykvarsler med dÃ¸dt batteri gir ingen varsling. Test varslerne mÃ¥nedlig ved Ã¥ trykke pÃ¥ testknappen. Bytt batterier en gang i Ã¥ret â€” mange gjÃ¸r dette ved sommer- eller vintertidsomstillingen. RÃ¸ykvarslere bÃ¸r skiftes ut etter 10 Ã¥r, uansett type.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <h3 className="font-bold text-brand-black mb-3">Huskeliste:</h3>
              <ul className="text-brand-darkgray text-sm space-y-2">
                <li>âœ“ Test rÃ¸ykvarsleren mÃ¥nedlig</li>
                <li>âœ“ Bytt batteri Ã©n gang i Ã¥ret</li>
                <li>âœ“ Skift ut varsleren etter 10 Ã¥r</li>
                <li>âœ“ SÃ¸rg for at alle sover innen hÃ¸revidde av en varsler</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Varsler med nettilkobling â€” fremtidens lÃ¸sning</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Moderne rÃ¸ykvarslere med WiFi-tilkobling kan sende varsler til mobilen din selv om du ikke er hjemme. Dette gir ekstra trygghet for deg som reiser mye eller har eldre foreldre boende alene. Disse koster noe mer, men gir et vesentlig hÃ¸yere sikkerhetsnivÃ¥.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade">
            <div className="bg-brand-lightgray rounded-[20px] p-6">
              <p className="text-brand-darkgray font-medium mb-2">Trenger du brannteknisk rÃ¥dgivning?</p>
              <p className="text-brand-darkgray text-sm leading-relaxed">
                Vi er sentralt godkjent brannrÃ¥dgiver og hjelper deg med brannprosjektering, brannkonsept og branninspeksjon i Kristiansand og Agder.
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

