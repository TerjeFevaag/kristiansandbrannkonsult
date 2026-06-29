import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Riktig brannslokkeapparat i boligen | Brannkonsult AS',
  description:
    'Hvilken type brannslokker trenger du i hjemmet? Vi forklarer krav til brannslokking, forskjellen mellom pulver og skum, og hvordan du bruker dem riktig.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/artikler/brannslokker' },
}

export default function BrannslokkePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <Link href="/artikler/brannslokker" className="hover:underline">Artikler</Link>
            <span>/</span>
            <span>Brannslokker</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-3xl">
            Har du riktig brannslokkeapparat i boligen?
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Mange har et brannslokkeapparat, men fÃ¦rre vet om de har riktig type â€” eller om det fungerer.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="scale">
            <div className="relative rounded-[30px] overflow-hidden h-72 lg:h-96 mb-12">
              <Image
                src="/images/article-brannslukker.jpg"
                alt="Brannslokkeapparat"
                fill
                className="object-cover"
                sizes="800px"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannslokkeapparat kan vÃ¦re forskjellen mellom en liten skade og en katastrofe. Men et feil apparat â€” eller et apparat som ikke vedlikeholdes â€” kan gi deg falsk trygghet. Her er det du trenger Ã¥ vite om brannslokkere i boligen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva krever loven?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Forskrift om brannforebygging krever at alle boliger skal ha minst ett godkjent, hÃ¥ndholdt slokkeredskap. I praksis betyr dette et brannslokkeapparat eller en brannslange. Apparatet skal ha tilstrekkelig kapasitet til Ã¥ bekjempe en begynnende brann.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              For boliger anbefales et apparat pÃ¥ minimum 6 kg pulver eller 6 liter skum. I tillegg bÃ¸r du ha et brannteppe tilgjengelig pÃ¥ kjÃ¸kkenet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Pulverapparatet â€” fordeler og ulemper</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Pulverapparater er de vanligste i norske boliger. De er effektive mot de fleste branntyper (klasse A, B og C) og har lang holdbarhet. Ulempen er at pulveret er svÃ¦rt skadelig for elektronikk og inventar, og oppryddingen etter bruk kan vÃ¦re krevende.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <p className="font-bold text-brand-black mb-2">Egnet for:</p>
              <ul className="text-brand-darkgray text-sm space-y-1">
                <li>âœ“ Branner i faste stoffer (tre, papir, tekstil)</li>
                <li>âœ“ Branner i vÃ¦sker (bensin, olje)</li>
                <li>âœ“ Branner i gasser</li>
                <li>âœ— Ikke egnet nÃ¦r sensitiv elektronikk</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Skumapparatet â€” mer skÃ¥nsomt</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Skumapparater er mer skÃ¥nsomme mot inventar og egner seg godt i stue og kjÃ¸kken. De er effektive mot branner i faste stoffer og brennbare vÃ¦sker, men ikke mot branner i gasser eller elektriske installasjoner under spenning. Skumapparater er litt dyrere enn pulverapparater, men kan vÃ¦re et godt valg for boliger med mye verdifullt inventar.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold og kontroll</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Et brannslokkeapparat som ikke er vedlikeholdt kan svikte nÃ¥r du trenger det mest. FÃ¸lg disse retningslinjene:
            </p>
            <ul className="space-y-3 mb-8 text-brand-darkgray">
              {[
                'Sjekk trykkmÃ¥leren mÃ¥nedlig â€” pilen skal stÃ¥ i det grÃ¸nne feltet',
                'Rist apparatet noen ganger i mÃ¥neden for Ã¥ lÃ¸sne pulveret',
                'Send apparatet til godkjent servicested hvert 5. Ã¥r',
                'Skift ut apparatet etter 10 Ã¥r, selv om det ser ok ut',
                'Heng apparatet synlig og lett tilgjengelig â€” ikke gjemt i et skap',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-orange font-bold mt-1">âœ“</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hvordan bruker du apparatet riktig?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Husk forkortelsen <strong className="text-brand-black">PASS</strong>:
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <ul className="space-y-2 text-brand-darkgray">
                <li><strong className="text-brand-black">P â€” Pull:</strong> Trekk ut sikringspinnen</li>
                <li><strong className="text-brand-black">A â€” Aim:</strong> Sikt mot bunnen av flammene</li>
                <li><strong className="text-brand-black">S â€” Squeeze:</strong> Klem utlÃ¸serhÃ¥ndtaket</li>
                <li><strong className="text-brand-black">S â€” Sweep:</strong> Sveip fra side til side</li>
              </ul>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Viktig: Ha alltid ryggen mot en nÃ¸dutgang nÃ¥r du slokker. Dersom brannen ikke sloknes raskt, forlat bygningen og ring 110.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade">
            <div className="bg-brand-lightgray rounded-[20px] p-6">
              <p className="text-brand-darkgray font-medium mb-2">Trenger du brannsikkerhetsvurdering for din bygning?</p>
              <p className="text-brand-darkgray text-sm leading-relaxed">
                Vi er sentralt godkjent brannrÃ¥dgiver og hjelper deg med alle branntekniske spÃ¸rsmÃ¥l. Ta kontakt for en uforpliktende prat.
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

