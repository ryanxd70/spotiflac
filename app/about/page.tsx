import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About SpotiFLAC Mobile — Open-Source Lossless Music Downloader',
  description: 'SpotiFLAC Mobile is a free, open-source lossless music downloader for Android and iOS. Learn about the project, its purpose, and how it is built.',
  alternates: { canonical: 'https://spotiflac.app/about' },
  openGraph: {
    url: 'https://spotiflac.app/about',
    title: 'About SpotiFLAC Mobile',
    description: 'Free, open-source lossless music downloader. No subscription, no affiliation with streaming platforms.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SpotiFLAC Mobile',
  url: 'https://spotiflac.app',
  description: 'Open-source lossless music downloader for Android and iOS.',
  sameAs: ['https://github.com/spotiflacapp/SpotiFLAC-Mobile'],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8" style={{textShadow:'0 0 40px rgba(34,197,94,0.15)'}}>
            Built for people who take<br />music seriously
          </h1>

          <div className="space-y-5 text-[var(--muted)] leading-relaxed mb-14">
            <p>SpotiFLAC Mobile started from a simple frustration: downloading music in lossless quality on a phone was needlessly hard. Web-based converters are slow and unreliable. Existing apps are cluttered, require accounts, or quietly re-encode audio. SpotiFLAC is a native mobile app that does one thing well — downloads music in real lossless quality and saves it to your device.</p>
            <p>The project is fully open-source under the MIT license. Every line of code is publicly available for anyone to audit, fork, improve, or build upon. There are no hidden analytics libraries beyond what is disclosed in our Privacy Policy, and no paid features locked behind a subscription wall. The app is free because music software should be free.</p>
            <p>SpotiFLAC Mobile is not affiliated with Spotify, Apple Music, or any other streaming platform. It is an independent tool developed and maintained by contributors who share a preference for owning their music rather than renting it.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { icon: '🔓', title: 'MIT Licensed', desc: 'Full source code is publicly available. Fork it, audit it, contribute to it.' },
              { icon: '🌍', title: 'Community Maintained', desc: 'Built and improved by contributors from around the world.' },
              { icon: '🎵', title: 'Audio-First Design', desc: 'Every decision in the app is made around delivering the best possible audio quality.' },
            ].map(c => (
              <div key={c.title} className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/25 hover:bg-green-500/5 transition-all duration-200 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>{c.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-7 mb-10">
            <h2 className="text-xl font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>Project Details</h2>
            <div className="space-y-3">
              {[
                { label: 'License', value: 'MIT (Open Source)' },
                { label: 'Current Version', value: 'v4.3.1' },
                { label: 'Platforms', value: 'Android 7.0+ · iOS 14+' },
                { label: 'Website', value: 'spotiflac.app' },
                { label: 'Affiliation', value: 'None — independent project' },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center border-b border-green-500/8 pb-3 last:border-0 last:pb-0 gap-4">
                  <span className="text-sm text-[var(--muted)] flex-shrink-0">{r.label}</span>
                  <span className="text-sm font-semibold text-green-400 text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/download" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-green-500/30">
              Download Free
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
