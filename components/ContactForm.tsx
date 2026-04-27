'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  if (sent) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="font-bold text-green-400 text-xl mb-2" style={{fontFamily:'var(--font-display)'}}>Message Sent</h2>
        <p className="text-[var(--muted)] text-sm">Thank you for reaching out. We will respond within 2–3 business days.</p>
      </div>
    )
  }

  return (
    <div className="glass rounded-2xl p-8 space-y-5">
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-2">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-green-500/5 border border-green-500/15 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-green-500/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-2">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl bg-green-500/5 border border-green-500/15 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-green-500/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-2">Message</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          placeholder="What is on your mind?"
          className="w-full px-4 py-3 rounded-xl bg-green-500/5 border border-green-500/15 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-green-500/50 transition-colors resize-none"
        />
      </div>
      <button
        onClick={() => { if (form.name && form.email && form.message) setSent(true) }}
        className="w-full py-4 rounded-xl font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-green-500/30"
      >
        Send Message
      </button>
    </div>
  )
}
