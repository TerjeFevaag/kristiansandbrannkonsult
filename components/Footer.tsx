import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}
function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white rounded-t-[40px]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1 */}
          <div>
            <div className="mb-5">
              <Image src="/images/logo-white.png" alt="Kristiansand Brannkonsult" width={234} height={72} className="object-contain" />
            </div>
            <p className="text-brand-white/60 text-sm leading-relaxed mb-6">
              Brannprosjektering i Kristiansand og på Sørlandet. Sentralt godkjent foretak, tiltaksklasse 1 og 2.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-brand-white/50 hover:text-brand-orange transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-brand-white/50 hover:text-brand-orange transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="text-brand-white/50 hover:text-brand-orange transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-xs uppercase tracking-widest">Snarveier</h3>
            <ul className="space-y-3">
              {[{ href: '/', label: 'Hjem' }, { href: '/om-oss', label: 'Om oss' }, { href: '/artikler/pipebrann', label: 'Artikler' }, { href: '/kontakt-oss', label: 'Kontakt oss' }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-xs uppercase tracking-widest">Tjenester</h3>
            <ul className="space-y-3">
              {[{ href: '/brannkonsept', label: 'Brannkonsept' }, { href: '/brannprosjektering', label: 'Brannprosjektering' }, { href: '/branninspeksjon', label: 'Branninspeksjon' }, { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-xs uppercase tracking-widest">Kontakt</h3>
            <div className="space-y-3 text-sm text-brand-white/60">
              <a href="tel:+4748481914" className="flex items-center gap-2 hover:text-brand-orange transition-colors"><Phone size={13} className="shrink-0" /> 484 81 914</a>
              <a href="mailto:post@kristiansandbrannkonsult.no" className="flex items-center gap-2 hover:text-brand-orange transition-colors"><Mail size={13} className="shrink-0" /> post@kristiansandbrannkonsult.no</a>
              <p className="flex items-start gap-2"><MapPin size={13} className="shrink-0 mt-0.5" /> Kristiansand, Sørlandet</p>
              <p className="text-brand-white/40 text-xs pt-2">Man–Fre 08:00–16:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-darkgray/30 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-sm">&copy; {new Date().getFullYear()} Brannkonsult AS. Alle rettigheter forbeholdt.</p>
          <p className="text-brand-white/25 text-xs">Utviklet av <a href="https://fevaag.no/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white/50 transition-colors">Fevaag Web Consulting</a></p>
          <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={100} height={40} className="object-contain" />
        </div>
      </div>
    </footer>
  )
}
