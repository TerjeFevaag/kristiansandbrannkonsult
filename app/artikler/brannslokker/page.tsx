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
            Mange har et brannslokkeapparat, men færre vet om de har riktig type — eller om det fungerer.
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
              Et brannslokkeapparat kan være forskjellen mellom en liten skade og en katastrofe. Men et feil apparat — eller et apparat som ikke vedlikeholdes — kan gi deg falsk trygghet. Her er det du trenger å vite om brannslokkere i boligen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva krever loven?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Forskrift om brannforebygging krever at alle boliger skal ha minst ett godkjent, håndholdt slokkeredskap. I praksis betyr dette et brannslokkeapparat eller en brannslange. Apparatet skal ha tilstrekkelig kapasitet til å bekjempe en begynnende brann.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              For boliger anbefales et apparat på minimum 6 kg pulver eller 6 liter skum. I tillegg bør du ha et brannteppe tilgjengelig på kjøkkenet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Pulverapparatet — fordeler og ulemper</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Pulverapparater er de vanligste i norske boliger. De er effektive mot de fleste branntyper (klasse A, B og C) og har lang holdbarhet. Ulempen er at pulveret er svært skadelig for elektronikk og inventar, og oppryddingen etter bruk kan være krevende.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <p className="font-bold text-brand-black mb-2">Egnet for:</p>
              <ul className="text-brand-darkgray text-sm space-y-1">
                <li>✓ Branner i faste stoffer (tre, papir, tekstil)</li>
                <li>✓ Branner i væsker (bensin, olje)</li>
                <li>✓ Branner i gasser</li>
                <li>✗ Ikke egnet nær sensitiv elektronikk</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Skumapparatet — mer skånsomt</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Skumapparater er mer skånsomme mot inventar og egner seg godt i stue og kjøkken. De er effektive mot branner i faste stoffer og brennbare væsker, men ikke mot branner i gasser eller elektriske installasjoner under spenning. Skumapparater er litt dyrere enn pulverapparater, men kan være et godt valg for boliger med mye verdifullt inventar.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold og kontroll</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Et brannslokkeapparat som ikke er vedlikeholdt kan svikte når du trenger det mest. Følg disse retningslinjene:
            </p>
            <ul className="space-y-3 mb-8 text-brand-darkgray">
              {[
                'Sjekk trykkmåleren månedlig — pilen skal stå i det grønne feltet',
                'Rist apparatet noen ganger i måneden for å løsne pulveret',
                'Send apparatet til godkjent servicested hvert 5. år',
                'Skift ut apparatet etter 10 år, selv om det ser ok ut',
                'Heng apparatet synlig og lett tilgjengelig — ikke gjemt i et skap',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-orange font-bold mt-1">✓</span>
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
                <li><strong className="text-brand-black">P — Pull:</strong> Trekk ut sikringspinnen</li>
                <li><strong className="text-brand-black">A — Aim:</strong> Sikt mot bunnen av flammene</li>
                <li><strong className="text-brand-black">S — Squeeze:</strong> Klem utløserhåndtaket</li>
                <li><strong className="text-brand-black">S — Sweep:</strong> Sveip fra side til side</li>
              </ul>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Viktig: Ha alltid ryggen mot en nødutgang når du slokker. Dersom brannen ikke sloknes raskt, forlat bygningen og ring 110.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade">
            <div className="bg-brand-lightgray rounded-[20px] p-6">
              <p className="text-brand-darkgray font-medium mb-2">Trenger du brannsikkerhetsvurdering for din bygning?</p>
              <p className="text-brand-darkgray text-sm leading-relaxed">
                Vi er sentralt godkjent brannrådgiver og hjelper deg med alle branntekniske spørsmål. Ta kontakt for en uforpliktende prat.
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
