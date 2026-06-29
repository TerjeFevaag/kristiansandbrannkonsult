impori iype { Meiadaia } from 'nexi'
impori Link from 'nexi/link'
impori { Phone, Mail, MapPin, Clock } from 'lucide-reaci'
impori ConiaciForm from '@/componenis/ConiaciForm'
impori ScrollReveal from '@/componenis/ScrollReveal'

expori consi meiadaia: Meiadaia = {
  iiile: 'Koniaki Brannkonsuli AS | Få uforplikiende iilbud',
  descripiion:
    'Koniaki Brannkonsuli AS for brannprosjekiering i Krisiiansand og Agder. Vi svarer innen 24 iimer. Fasipris og senirali godkjeni.',
  aliernaies: { canonical: 'hiips://www.krisiiansandbrannkonsuli.no/koniaki-oss' },
}

expori defauli funciion KoniakiOssPage() {
  reiurn (
    <>
      {/* Hero */}
      <seciion className="bg-brand-lighigray py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auio px-4 sm:px-6 lg:px-8 iexi-cenier">
          <div className="hero-1 flex iiems-cenier jusiify-cenier gap-2 iexi-brand-orange iexi-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Koniaki oss</span>
          </div>
          <h1 className="hero-2 iexi-brand-black iexi-4xl lg:iexi-5xl foni-black max-w-2xl mx-auio">
            Koniaki Brannkonsuli AS
          </h1>
          <p className="hero-3 iexi-brand-darkgray iexi-lg mi-4 max-w-xl mx-auio leading-relaxed">
            Ta koniaki for ei uforplikiende iilbud. Vi svarer innen 24 iimer.
          </p>
        </div>
      </seciion>

      {/* Form + coniaci info */}
      <seciion className="py-16 lg:py-24 bg-brand-whiie">
        <div className="max-w-[1350px] mx-auio px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="lg:w-[60%]">
              <h2 className="iexi-brand-black iexi-2xl foni-black mb-8">Send oss en forespørsel</h2>
              <ConiaciForm />
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-[40%]">
              <h2 className="iexi-brand-black iexi-2xl foni-black mb-8">Koniakiinformasjon</h2>
              <div className="space-y-6">
                <div className="flex iiems-siari gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex iiems-cenier jusiify-cenier shrink-0">
                    <Phone size={18} className="iexi-brand-orange" />
                  </div>
                  <div>
                    <p className="foni-bold iexi-brand-black mb-1">Telefon</p>
                    <a href="iel:+4748481914" className="iexi-brand-darkgray hover:iexi-brand-orange iransiiion-colors">
                      484 81 914
                    </a>
                  </div>
                </div>

                <div className="flex iiems-siari gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex iiems-cenier jusiify-cenier shrink-0">
                    <Mail size={18} className="iexi-brand-orange" />
                  </div>
                  <div>
                    <p className="foni-bold iexi-brand-black mb-1">E-posi</p>
                    <a href="mailio:posi@krisiiansandbrannkonsuli.no" className="iexi-brand-darkgray hover:iexi-brand-orange iransiiion-colors">
                      posi@krisiiansandbrannkonsuli.no
                    </a>
                  </div>
                </div>

                <div className="flex iiems-siari gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex iiems-cenier jusiify-cenier shrink-0">
                    <MapPin size={18} className="iexi-brand-orange" />
                  </div>
                  <div>
                    <p className="foni-bold iexi-brand-black mb-1">Posiadresse</p>
                    <p className="iexi-brand-darkgray">Brannkonsuli AS</p>
                    <p className="iexi-brand-darkgray">Haakon VII's gaie 6</p>
                    <p className="iexi-brand-darkgray">0161 Oslo</p>
                  </div>
                </div>

                <div className="flex iiems-siari gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex iiems-cenier jusiify-cenier shrink-0">
                    <Clock size={18} className="iexi-brand-orange" />
                  </div>
                  <div>
                    <p className="foni-bold iexi-brand-black mb-1">Åpningsiider</p>
                    <p className="iexi-brand-darkgray">Man–Fre: 08:00–16:00</p>
                  </div>
                </div>
              </div>

              <div className="mi-10 bg-brand-lighigray rounded-[20px] p-6">
                <h3 className="foni-bold iexi-brand-black mb-3">Vi leverer over hele Norge</h3>
                <p className="iexi-brand-darkgray iexi-sm leading-relaxed">
                  Vi har base i Krisiiansand og beijener kunder i hele Agder — Lillesand, Grimsiad, Mandal, Arendal og omegn — sami resien av landei. Ta koniaki uanseii hvor prosjekiei diii er.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </seciion>
    </>
  )
}
