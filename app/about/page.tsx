import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — SpotiFLAC Mobile',
  description: 'SpotiFLAC Mobile is an open-source lossless music downloader built by the community for audiophiles who want to own their music.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">About</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8 glow-text">Built for people who take music seriously</h1>
        <div className="space-y-5 text-[var(--muted)] leading-relaxed mb-12">
          <p>SpotiFLAC Mobile started from a simple question: why is downloading music in lossless quality still so hard on mobile? Most tools are clunky, web-based, or compress audio in ways they do not disclose. SpotiFLAC is different — a native mobile app that puts audio fidelity and simplicity first.</p>
          <p>The project is fully open-source. The code is available for anyone to audit, fork, or contribute to. There are no hidden analytics, no telemetry, and no features locked behind a subscription.</p>
          <p>SpotiFLAC Mobile is not affiliated with Spotify, Apple Music, or any streaming service. It is an independent tool developed and maintained by contributors worldwide.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '🔓', title: 'Open Source', desc: 'MIT licensed. Fork it, audit it, improve it.' },
            { icon: '🚫', title: 'No Tracking', desc: 'Zero analytics, zero telemetry, zero data collection.' },
            { icon: '🌍', title: 'Community Built', desc: 'Developed and maintained by contributors worldwide.' },
          ].map(c => (
            <div key={c.title} className="p-6 rounded-2xl border border-green-500/10 text-center">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>{c.title}</h3>
              <p className="text-sm text-[var(--muted)]">{c.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/download" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200">
          Download Free
        </Link>
      </div>
    </div>
  )
}
