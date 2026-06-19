import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt Kristiansand Brannkonsult | Få uforpliktende tilbud',
  description:
    'Kontakt Kristiansand Brannkonsult for brannprosjektering i Kristiansand og Agder. Vi svarer innen 24 timer. Fastpris og sentralt godkjent.',
  alternates: { canonical: 'https://www.kristiansandbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-lightgray py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-1 flex items-center justify-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Kontakt oss</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
            Kontakt Kristiansand Brannkonsult
          </h1>
          <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Ta kontakt for et uforpliktende tilbud. Vi svarer innen 24 timer.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="lg:w-[60%]">
              <h2 className="text-brand-black text-2xl font-black mb-8">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-[40%]">
              <h2 className="text-brand-black text-2xl font-black mb-8">Kontaktinformasjon</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black mb-1">Telefon</p>
                    <a href="tel:+4748481914" className="text-brand-darkgray hover:text-brand-orange transition-colors">
                      484 81 914
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black mb-1">E-post</p>
                    <a href="mailto:post@brannkonsult.no" className="text-brand-darkgray hover:text-brand-orange transition-colors">
                      post@brannkonsult.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black mb-1">Postadresse</p>
                    <p className="text-brand-darkgray">Brannkonsult AS</p>
                    <p className="text-brand-darkgray">Haakon VII's gate 6</p>
                    <p className="text-brand-darkgray">0161 Oslo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black mb-1">Åpningstider</p>
                    <p className="text-brand-darkgray">Man–Fre: 08:00–16:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black mb-3">Vi leverer over hele Norge</h3>
                <p className="text-brand-darkgray text-sm leading-relaxed">
                  Vi har base i Kristiansand og betjener kunder i hele Agder — Lillesand, Grimstad, Mandal, Arendal og omegn — samt resten av landet. Ta kontakt uansett hvor prosjektet ditt er.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
