'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    quote: 'Raskt svar og god hjelp. Meget godt gjennomført brannkonsept som var greit å skjønne. Gode tips og forslag til endringer underveis. Meget fornøyd!',
    author: 'Ola Gartland Falmår',
  },
  {
    quote: 'Svært fornøyd. Tar seg tid til å drøfte fornuftige og økonomiske løsninger. Setter pris på at dere er med på en forhåndsvurdering på telefon før bestilling av prosjektering.',
    author: 'SN Byggservice AS',
    company: 'Stian Nytveit',
  },
  {
    quote: 'Enkel og grei å jobbe med, fant gode konsepter sammen uten å dreie mot kompliserte og kostbare løsninger.',
    author: 'Einar Lundgaard',
  },
  {
    quote: 'Veldig rask respons, høy faglig kompetanse og høy grad av løsningsorientering. Får mine beste anbefalinger!',
    author: 'Nabila Sabab',
  },
  {
    quote: 'På spørsmål om brannkonsept og ansvarsrett for fagområdet fikk vi raskt og profesjonelt svar. Hyggelig, ryddig og konstruktiv oppfølging.',
    author: 'Saltdalshytta Innlandet AS',
    company: 'Kim Erik Moen',
  },
  {
    quote: 'Godt fornøyd med bistanden — kjapp og konstruktiv, samt at det er foretatt en god balanse mellom krav og praktiske løsninger.',
    author: 'Monica Solberg',
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
