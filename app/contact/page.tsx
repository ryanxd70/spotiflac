import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — SpotiFLAC Mobile',
  description: 'Get in touch with the SpotiFLAC team. Report bugs, request features, or ask questions.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-xl mx-auto">
        <p style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:'#22c55e',marginBottom:'1rem'}}>Contact</p>
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4 glow-text">Get In Touch</h1>
        <p className="text-[var(--muted)] mb-10">Have a question, bug report, or feature request? Send us a message and we will get back to you.</p>
        <ContactForm />
      </div>
    </div>
  )
}
