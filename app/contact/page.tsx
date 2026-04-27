import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact SpotiFLAC Mobile — Bug Reports & Support',
  description: 'Get in touch with the SpotiFLAC team. Report bugs, suggest features, or ask questions about SpotiFLAC Mobile APK for Android and iOS.',
  alternates: { canonical: 'https://spotiflac.app/contact' },
  openGraph: {
    url: 'https://spotiflac.app/contact',
    title: 'Contact SpotiFLAC Mobile — Bug Reports & Support',
    description: 'Get in touch with the SpotiFLAC team. Report bugs, suggest features, or ask questions about SpotiFLAC Mobile APK.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-xl mx-auto">
        <p className="section-label">Contact</p>
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4" style={{textShadow:'0 0 40px rgba(34,197,94,0.15)'}}>
          Get In Touch
        </h1>
        <p className="text-[var(--muted)] mb-10 leading-relaxed">
          Have a question, bug report, or feature request? Fill out the form below and we will get back to you.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
