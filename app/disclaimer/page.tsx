import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer — SpotiFLAC Mobile',
  description: 'SpotiFLAC Mobile disclaimer. Not affiliated with Spotify. For personal, legal use only.',
}

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Legal</p>
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4 glow-text">Disclaimer</h1>
        <p className="text-[var(--muted)] text-sm mb-10">Last updated: December 2024</p>
        <div className="space-y-8 text-[var(--muted)] leading-relaxed">
          {[
            { h: 'No Affiliation', p: 'SpotiFLAC Mobile is an independent open-source project. It is not affiliated with, endorsed by, or connected to Spotify AB, Apple Inc., or any other music streaming service or record label.' },
            { h: 'Personal Use Only', p: 'This software is intended for personal, non-commercial use only. Downloading, storing, or distributing copyrighted music without authorization from the rights holder may violate applicable copyright laws in your jurisdiction.' },
            { h: 'User Responsibility', p: 'By using SpotiFLAC Mobile, you agree that you are solely responsible for ensuring your use complies with all applicable laws and regulations. The developers of SpotiFLAC are not liable for any misuse of this software.' },
            { h: 'No Warranty', p: 'SpotiFLAC Mobile is provided as-is, without warranty of any kind. We do not guarantee uninterrupted service, error-free operation, or compatibility with any specific content sources.' },
            { h: 'Third-Party Content', p: 'SpotiFLAC does not host, store, or distribute any copyrighted music. It only facilitates the downloading of content from links you provide. Availability of content depends entirely on third-party sources.' },
          ].map(s => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-[var(--text)] mb-3" style={{fontFamily:'var(--font-display)'}}>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
