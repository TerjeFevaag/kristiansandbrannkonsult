'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description: 'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description: 'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description: 'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description: 'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Kontrollen sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const reviews = [
  {
    quote: 'Lett å få kontakt med firmaet på ulike spørsmål som dukker opp underveis. Jeg har kun hatt gode opplevelser, selv om ikke alt var helt klart for meg som ufaglært.',
    author: 'Kirsti Andresen',
  },
  {
    quote: 'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Ble ikke tilbudt en dyr dokumentasjonspakke som var overdimensjonert. Veldig fornøyd!',
    author: 'Heidi Spinnangr',
  },
  {
    quote: 'Kristiansand Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet. Brannotatene deres er praktiske og enkle å bruke.',
    author: 'Hagelin Byggservice',
    company: 'Daniel Hagelin',
  },
  {
    quote: 'Ga rask tilbakemelding ved første kontakt. Leverte til avtalt tid og pris. Høy kvalitet på arbeidet. Veldig behjelpelig med å svare på andre spørsmål i ettertid, vederlagsfritt.',
    author: 'Jonathan Steinsvik',
  },
  {
    quote: 'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand Arkitektur AS',
  },
  {
    quote: 'Vi er veldig fornøyde med leveransen fra Kristiansand Brannkonsult AS. De utarbeidet et brannteknisk notat som ga oss all nødvendig dokumentasjon for prosjektet. God service og rask levering.',
    author: 'Ventilasjon AS',
    company: 'Emil Jacobsen',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Kristiansand?',
    answer: 'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer: 'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer: 'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Kristiansand?',
    answer: 'Vi hjelper kunder i Kristiansand, Agder og resten av landet. Kontakt oss uansett hvor i Norge prosjektet ditt er.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt: 'Er du i faresonen for å få brann i skorsteinen? Vi forklarer hva en pipebrann er, hva som forårsaker den, og hva du kan gjøre for å forebygge den.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt: 'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår kravene og forklarer forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt: 'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og anbefalt plassering.',
  },
]

export default function HomePage() {
  const [reviewIndex, setReviewIndex] = useState(0)

  const prevReview = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length)
  const nextReview = () => setReviewIndex((i) => (i + 1) % reviews.length)
  const review = reviews[reviewIndex]

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center -mt-20 lg:-mt-24">
        <Image
          src="/images/hero.jpg"
          alt="Kristiansand by"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/20 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="hero-1 font-accent text-brand-orange text-2xl mb-4">
            Kristiansand Brannkonsult
          </p>
          <h1 className="hero-2 text-brand-white text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl mx-auto leading-tight mb-6">
            Brannprosjektering i Kristiansand og på Sørlandet
          </h1>
          <p className="hero-3 text-brand-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Vi hjelper deg med brannkonsept, brannprosjektering og branntilsyn. Sentralt godkjent foretak. Fastpris alltid.
          </p>
          <div className="hero-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base"
            >
              Få gratis tilbud
            </Link>
            <Link
              href="/brannprosjektering"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-4 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-colors text-base"
            >
              Les mer om tjenestene
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">Våre tjenester</h2>
            <p className="text-brand-darkgray text-lg max-w-2xl mx-auto">
              Vi tilbyr alle brannfaglige tjenester du trenger — fra tidlig planlegging til ferdig dokumentasjon.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 80}>
                <Link
                  href={service.href}
                  className="group bg-brand-white border-t-4 border-brand-orange rounded-b-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                >
                  <div className="mb-4">
                    <img
                      src={service.iconImage}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-brand-black text-lg mb-2">{service.title}</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 text-brand-orange font-bold text-sm group-hover:underline">
                    Les mer &rarr;
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Trust ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-6">
                Lokal kunnskap om Kristiansand og Sørlandet
              </h2>
              <p className="text-brand-darkgray leading-relaxed mb-6 text-lg">
                Vi kjenner godt til byggemarkedet i Kristiansand og på Sørlandet. Fra sentrumsnære leilighetsprosjekter i Kvadraturen til eneboliger og fritidsboliger langs kystlinjen — vi har erfaring med alle typer prosjekter.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Vi leverer brannkonsept og brannprosjektering til private, arkitekter og utbyggere i hele Agder.
              </p>
              <Link
                href="/om-oss"
                className="inline-block bg-brand-orange text-brand-white font-bold px-7 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Om oss
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-1/2">
              <ul className="space-y-4">
                {[
                  'Sentralt godkjent for brannprosjektering TKL 1 og 2',
                  'Over 1200 prosjekter siden oppstart i 2013',
                  'Fastpris — ingen ubehagelige overraskelser',
                  'Levering innen 5–10 virkedager',
                  'Nøytral rådgiver — ingen produktsalg',
                  'Tar oppdrag i hele Agder og landet for øvrig',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-brand-black font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-12">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '1200+', label: 'Prosjekter' },
                { number: 'TKL 1+2', label: 'Sentralt godkjent' },
                { number: 'Fastpris', label: 'Alltid' },
                { number: 'Hele landet', label: 'Dekningsomrade' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-brand-white font-black text-3xl lg:text-4xl mb-1">{stat.number}</div>
                  <div className="text-brand-white/80 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Reviews spotlight ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva kundene sier</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-brand-orange text-6xl font-serif leading-none mb-6 select-none">&ldquo;</div>
              <p className="text-brand-black text-xl lg:text-2xl italic leading-relaxed mb-8">
                {review.quote}
              </p>
              <div className="mb-8">
                <p className="font-bold text-brand-black text-lg">{review.author}</p>
                {review.company && <p className="text-brand-darkgray">{review.company}</p>}
              </div>
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={prevReview}
                  aria-label="Forrige anmeldelse"
                  className="w-12 h-12 rounded-full border-2 border-brand-gray flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setReviewIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === reviewIndex ? 'bg-brand-orange' : 'bg-brand-gray'
                      }`}
                      aria-label={`Anmeldelse ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReview}
                  aria-label="Neste anmeldelse"
                  className="w-12 h-12 rounded-full border-2 border-brand-gray flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">
              Ofte stilte spørsmål
            </h2>
            <p className="text-brand-darkgray text-lg max-w-xl mx-auto">
              Har du spørsmål om brannprosjektering i Kristiansand? Her finner du svar på de vanligste.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} variant="fade">
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-10 shadow-sm">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-2">Artikler og tips</h2>
            <p className="text-brand-darkgray text-lg">Nyttig lesning om brannsikkerhet.</p>
          </ScrollReveal>

          {/* Featured article */}
          <ScrollReveal>
            <Link
              href={articles[0].href}
              className="group flex flex-col lg:flex-row rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 mb-6"
            >
              <div className="relative lg:w-1/2 h-64 lg:h-auto min-h-[260px]">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-brand-orange font-bold text-sm uppercase tracking-wide mb-3">Fremhevet artikkel</span>
                <h3 className="text-brand-black text-2xl lg:text-3xl font-black mb-4 group-hover:text-brand-orange transition-colors">
                  {articles[0].title}
                </h3>
                <p className="text-brand-darkgray leading-relaxed mb-6">{articles[0].excerpt}</p>
                <span className="text-brand-orange font-bold">Les artikkelen &rarr;</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two smaller articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(1).map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 100}>
                <Link
                  href={article.href}
                  className="group rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-brand-black text-xl font-black mb-2 group-hover:text-brand-orange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm">Les mer &rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ScrollReveal variant="fade">
        <section className="py-20 bg-brand-white">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">
              Klar for å komme i gang?
            </h2>
            <p className="text-brand-darkgray text-lg mb-8 max-w-xl mx-auto">
              Ta kontakt for et uforpliktende tilbud på brannprosjektering i Kristiansand. Vi svarer innen 24 timer.
            </p>
            <Link
              href="/kontakt-oss"
              className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg"
            >
              Få gratis tilbud
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
