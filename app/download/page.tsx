import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download SpotiFLAC Mobile APK v4.5.1 — Android & iOS',
  description: 'Download SpotiFLAC Mobile APK v4.5.1 for Android (ARM32 & ARM64) and iOS IPA. Free lossless music downloader. Official release.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://spotiflac.app/download' },
}

const releases = [
  {
    label: 'Android ARM64',
    sublabel: 'Recommended — most phones made after 2016',
    href: 'https://github.com/spotiflacapp/SpotiFLAC-Mobile/releases/download/v4.5.1/SpotiFLAC-v4.5.1-arm64.apk',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.341A5.532 5.532 0 0020 10.5C20 7.46 17.54 5 14.5 5a5.52 5.52 0 00-4.999 3.179L17.523 15.34zM6.477 8.66A5.532 5.532 0 004 13.5C4 16.54 6.46 19 9.5 19a5.52 5.52 0 004.999-3.179L6.477 8.66z"/>
      </svg>
    ),
    primary: true,
    badge: 'ARM64 · APK',
    size: '75.8 MB',
  },
  {
    label: 'Android ARM32',
    sublabel: 'For older or 32-bit Android devices',
    href: 'https://github.com/spotiflacapp/SpotiFLAC-Mobile/releases/download/v4.5.1/SpotiFLAC-v4.5.1-arm32.apk',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.341A5.532 5.532 0 0020 10.5C20 7.46 17.54 5 14.5 5a5.52 5.52 0 00-4.999 3.179L17.523 15.34zM6.477 8.66A5.532 5.532 0 004 13.5C4 16.54 6.46 19 9.5 19a5.52 5.52 0 004.999-3.179L6.477 8.66z"/>
      </svg>
    ),
    primary: false,
    badge: 'ARM32 · APK',
    size: '95.4 MB',
  },
  {
    label: 'iOS (Unsigned IPA)',
    sublabel: 'Requires AltStore or Sideloadly on a Mac/PC',
    href: 'https://github.com/spotiflacapp/SpotiFLAC-Mobile/releases/download/v4.5.1/SpotiFLAC-v4.5.1-ios-unsigned.ipa',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    primary: false,
    badge: 'IPA · Unsigned',
    size: '33.2 MB',
  },
]

const schemaDownload = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SpotiFLAC Mobile',
  url: 'https://spotiflac.app',
  downloadUrl: 'https://spotiflac.app/download',
  operatingSystem: 'Android 7.0+, iOS 14+',
  applicationCategory: 'MultimediaApplication',
  softwareVersion: '4.5.1',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'SpotiFLAC', url: 'https://spotiflac.app' },
}

export default function DownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDownload) }} />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="section-label">Download</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-5" style={{textShadow:'0 0 50px rgba(34,197,94,0.2)'}}>
              Download SpotiFLAC Mobile
            </h1>
            <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
              Official release v4.5.1. Free and open-source. Choose your platform below.
            </p>
          </div>

          {/* Version badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-green-500/20 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-green-400 text-sm font-semibold">v4.5.1 — Latest Stable · Released May 2026</span>
            </div>
          </div>

          {/* Download cards */}
          <div className="space-y-4 mb-12">
            {releases.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`flex items-center gap-5 p-6 rounded-2xl border transition-all duration-200 group ${
                  r.primary
                    ? 'border-green-500/40 bg-green-500/10 hover:bg-green-500/15 hover:border-green-500/60'
                    : 'border-green-500/10 bg-green-500/[0.03] hover:bg-green-500/[0.07] hover:border-green-500/25'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${r.primary ? 'bg-green-500 text-black' : 'bg-green-500/15 text-green-400'}`}>
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-[var(--text)]" style={{fontFamily:'var(--font-display)'}}>{r.label}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-green-500/25 text-green-400 bg-green-500/10">{r.badge}</span>
                    {r.primary && <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-black font-semibold">Recommended</span>}
                  </div>
                  <p className="text-sm text-[var(--muted)]">{r.sublabel}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-[var(--muted)] hidden sm:block">{r.size}</span>
                  <div className="w-9 h-9 rounded-full border border-green-500/30 flex items-center justify-center text-green-400 group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Telegram CTA — immediately after download links */}
          <div className="mb-8 p-6 rounded-2xl border border-[#229ED9]/30 bg-[#229ED9]/8 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#229ED9] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-[var(--text)] mb-1" style={{fontFamily:'var(--font-display)'}}>Get updates on Telegram</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Join our channel for new releases, changelogs, and announcements — the fastest way to know when a new version drops.</p>
            </div>
            <a
              href="https://t.me/spotiflacapp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-[#229ED9] text-white hover:bg-[#1a8bc4] transition-all duration-200 shadow-lg hover:shadow-[#229ED9]/30 text-sm whitespace-nowrap"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Join Channel
            </a>
          </div>

          {/* Source repo — single GitHub mention on this page */}
          <div className="glass rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e] border border-green-500/15 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#22c55e">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--text)] mb-0.5" style={{fontFamily:'var(--font-display)'}}>Open Source on GitHub</p>
              <p className="text-sm text-[var(--muted)]">Audit the code, report bugs, or contribute to the project.</p>
            </div>
            <a
              href="https://github.com/spotiflacapp/SpotiFLAC-Mobile"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-500/30 text-green-400 text-sm font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 flex-shrink-0"
            >
              View Repository
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10L10 2M10 2H4M10 2v6"/></svg>
            </a>
          </div>

          {/* Install guides */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[var(--text)] mb-5 flex items-center gap-2" style={{fontFamily:'var(--font-display)'}}>
                <span className="text-2xl">🤖</span> Android Install Guide
              </h2>
              <ol className="space-y-4">
                {[
                  'Go to Settings → Security → enable "Unknown Sources" (Android 8+: allow per app when prompted)',
                  'Tap the ARM64 download link above (use ARM32 for older devices)',
                  'Open the APK from your Downloads folder via your file manager',
                  'Tap Install and wait a few seconds for it to complete',
                  'Launch SpotiFLAC from your home screen and paste a music link',
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[var(--text)] mb-5 flex items-center gap-2" style={{fontFamily:'var(--font-display)'}}>
                <span className="text-2xl">🍎</span> iOS Install Guide
              </h2>
              <ol className="space-y-4">
                {[
                  'Install AltStore or Sideloadly on your Windows or Mac computer',
                  'Connect your iPhone or iPad via USB and trust the computer',
                  'Download the IPA file to your computer using the link above',
                  'Drag and drop the IPA into AltStore or Sideloadly to begin install',
                  'On your iPhone go to Settings → General → VPN & Device Management and trust the developer certificate',
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Requirements */}
          <div className="glass rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>System Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Android Minimum', value: 'Android 7.0 (Nougat)' },
                { label: 'iOS Minimum', value: 'iOS 14.0' },
                { label: 'Android Architecture', value: 'ARM64 (recommended) or ARM32' },
                { label: 'Storage Required', value: 'Varies + space for downloads' },
                { label: 'Internet', value: 'Required for downloading tracks' },
                { label: 'Account Required', value: 'None' },
              ].map(r => (
                <div key={r.label} className="flex justify-between gap-4 py-2.5 border-b border-green-500/10 last:border-0">
                  <span className="text-sm text-[var(--muted)]">{r.label}</span>
                  <span className="text-sm font-semibold text-green-400 text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
            <h3 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
              Important Notice
            </h3>
            <p className="text-sm text-yellow-400/70 leading-relaxed">
              SpotiFLAC Mobile is intended for personal use only. Only download music you have the legal right to access. This software is not affiliated with Spotify AB, Apple Inc., or any music streaming service. Use is subject to your local copyright laws. See our{' '}
              <Link href="/disclaimer" className="underline hover:text-yellow-300">Disclaimer</Link> and{' '}
              <Link href="/privacy-policy" className="underline hover:text-yellow-300">Privacy Policy</Link> for full details.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
