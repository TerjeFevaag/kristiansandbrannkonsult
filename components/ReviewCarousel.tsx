'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function ReviewCarousel() {
  const [reviewIndex, setReviewIndex] = useState(0)
  const prevReview = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length)
  const nextReview = () => setReviewIndex((i) => (i + 1) % reviews.length)
  const review = reviews[reviewIndex]

  return (
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
  )
}
