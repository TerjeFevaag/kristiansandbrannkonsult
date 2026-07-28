'use client'

import { useState } from 'react'
import { Paperclip, X } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB
const MAX_FILES = 5
const ACCEPTED = '.pdf,.jpg,.jpeg,.png,.dwg,.dxf'

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError(null)
    const selected = Array.from(e.target.files || [])

    const oversized = selected.find(f => f.size > MAX_FILE_SIZE)
    if (oversized) {
      setFileError(`${oversized.name} er for stor — maks 10 MB per fil`)
      e.target.value = ''
      return
    }

    const combined = [...files, ...selected]
    if (combined.length > MAX_FILES) {
      setFileError(`Maks ${MAX_FILES} vedlegg`)
      e.target.value = ''
      return
    }

    setFiles(combined)
    e.target.value = ''
  }

  function removeFile(index: number) {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setFileError(null)

    const form = e.currentTarget
    const formData = new FormData()
    formData.append('navn', (form.elements.namedItem('navn') as HTMLInputElement).value)
    formData.append('epost', (form.elements.namedItem('epost') as HTMLInputElement).value)
    formData.append('telefon', (form.elements.namedItem('telefon') as HTMLInputElement).value)
    formData.append('prosjekttype', (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value)
    formData.append('melding', (form.elements.namedItem('melding') as HTMLTextAreaElement).value)
    files.forEach(file => formData.append('vedlegg', file))

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-lightgray rounded-[20px] p-10 text-center">
        <div className="text-brand-orange text-5xl mb-4">✓</div>
        <h3 className="text-brand-black font-black text-xl mb-2">Takk for din henvendelse!</h3>
        <p className="text-brand-darkgray">Vi svarer deg innen 24 timer på hverdager.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg{' '}
          <span className="font-normal text-brand-darkgray">(valgfritt)</span>
        </label>

        {files.length > 0 && (
          <ul className="space-y-2 mb-3">
            {files.map((file, i) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-brand-lightgray rounded-[8px] px-3 py-2 text-sm"
              >
                <Paperclip size={14} className="text-brand-orange shrink-0" />
                <span className="text-brand-black truncate flex-1">{file.name}</span>
                <span className="text-brand-darkgray shrink-0 text-xs">{formatFileSize(file.size)}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Fjern ${file.name}`}
                  className="text-brand-darkgray hover:text-red-500 transition-colors shrink-0 ml-1"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {files.length < MAX_FILES && (
          <label className="cursor-pointer flex items-center justify-center gap-2 border border-dashed border-brand-gray rounded-[10px] px-4 py-3 text-sm text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors w-full">
            <Paperclip size={16} />
            <span>Legg til tegninger eller bilder (PDF, JPG, PNG — maks 10 MB per fil)</span>
            <input
              type="file"
              multiple
              accept={ACCEPTED}
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        )}

        {fileError && (
          <p className="text-red-600 text-sm mt-2">{fileError}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Noe gikk galt. Prøv igjen eller send e-post direkte til{' '}
          <a href="mailto:post@kristiansandbrannkonsult.no" className="underline">
            post@kristiansandbrannkonsult.no
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60"
      >
        {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
