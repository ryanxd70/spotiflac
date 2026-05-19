import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SpotiFLAC for PC - Download for Windows, macOS & Linux',
  description: 'Download SpotiFLAC for PC. Lossless FLAC music downloader for Windows, macOS, and Linux. Free, open-source, no account required.',
  alternates: { canonical: 'https://spotiflac.app/pc' },
  openGraph: {
    url: 'https://spotiflac.app/pc',
    title: 'SpotiFLAC for PC - Download for Windows, macOS & Linux',
    description: 'Free lossless FLAC music downloader for Windows, macOS, and Linux. Download music in 24-bit FLAC quality. No account required.',
  },
}

const features = [
  { icon: '🎵', title: 'Lossless FLAC Output', desc: 'Every download is saved in full lossless FLAC format. No re-encoding, no generation loss. The audio is exactly as the source delivers it.' },
  { icon: '⚡', title: 'Multi-Format Export', desc: 'Need smaller files? Export in MP3 320kbps or AAC 256kbps without leaving the app. All three formats available in one place.' },
  { icon: '📦', title: 'Batch Playlist Downloads', desc: 'Paste a playlist or album URL and queue every track at once. Downloads run in the background while you keep working.' },
  { icon: '🏷️', title: 'Automatic Metadata', desc: 'Title, artist, album, track number, year, genre, and embedded cover art written to every file automatically.' },
  { icon: '📂', title: 'Custom Folder Structure', desc: 'Choose exactly where files are saved and how they are named. Build a library organized the way you want it.' },
  { icon: '🔒', title: 'No Account Needed', desc: 'Paste a link, pick a format, download. No login, no subscription, no tracking. Works from first launch.' },
]

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SpotiFLAC for PC',
  url: 'https://spotiflac.app/pc',
  downloadUrl: 'https://spotiflac.app/download',
  operatingSystem: 'Windows 10+, macOS 11+, Linux',
  applicationCategory: 'MultimediaApplication',
  softwareVersion: '7.1.6',
  description: 'Free lossless music downloader for Windows, macOS, and Linux. Downloads music in FLAC, MP3, and AAC formats with embedded metadata.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'SpotiFLAC', url: 'https://spotiflac.app' },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spotiflac.app' },
    { '@type': 'ListItem', position: 2, name: 'SpotiFLAC for PC', item: 'https://spotiflac.app/pc' },
  ],
}

export default function PCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-14">
            <p className="section-label">Desktop App</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-5 leading-tight" style={{textShadow:'0 0 50px rgba(34,197,94,0.2)'}}>
              SpotiFLAC for PC
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed mb-3">
              Download for Windows, macOS & Linux
            </p>
            <p className="text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              The same lossless FLAC quality you get on mobile, now on your desktop. Free, open-source, no account required. Paste a link, pick your format, and start downloading.
            </p>
          </div>

          {/* Version badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-green-500/20 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-green-400 text-sm font-semibold">v7.1.6 - Latest Stable</span>
            </div>
          </div>

          {/* Download button */}
          <div className="flex justify-center mb-10">
            <Link
              href="/download"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-xl hover:shadow-green-500/40 text-lg animate-pulse-glow"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
              Download SpotiFLAC for PC — Free
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="glass rounded-2xl p-5 mb-14 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-3xl">📱</div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--text)] mb-0.5" style={{fontFamily:'var(--font-display)'}}>Looking for the mobile app?</p>
              <p className="text-sm text-[var(--muted)]">SpotiFLAC Mobile is available for Android and iOS as a free APK download.</p>
            </div>
            <Link href="/" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-500/30 text-green-400 text-sm font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 whitespace-nowrap">
              Mobile Download
            </Link>
          </div>

          {/* What is it */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>
              What is SpotiFLAC for PC
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                SpotiFLAC for PC is the desktop version of the SpotiFLAC lossless music downloader. It runs natively on Windows, macOS, and Linux, giving you the same download quality and format flexibility as the mobile app but with the added comfort of a full desktop interface.
              </p>
              <p>
                The workflow is straightforward. Paste a track, album, or playlist URL into the search bar. Choose your output format and quality. The app fetches the audio and saves it to whatever folder you point it at, fully tagged with title, artist, album, and artwork.
              </p>
              <p>
                There is no account to create, no subscription to maintain, and no DRM on the output files. Once a track is downloaded it is a standard audio file you can play in any music player, copy anywhere, and keep indefinitely.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-10" style={{fontFamily:'var(--font-display)'}}>
              Features of SpotiFLAC PC
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map(f => (
                <div key={f.title} className="p-6 rounded-2xl border border-green-500/10 bg-green-500/[0.03] hover:bg-green-500/[0.07] hover:border-green-500/25 transition-all duration-300 group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                  <h3 className="font-bold text-green-300 mb-2" style={{fontFamily:'var(--font-display)'}}>{f.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Install guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-8" style={{fontFamily:'var(--font-display)'}}>
              How to Install SpotiFLAC on PC
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  os: '🪟 Windows',
                  steps: [
                    'Download the .exe installer above',
                    'Run the installer and follow the prompts',
                    'Launch SpotiFLAC from the Start menu',
                  ],
                },
                {
                  os: '🍎 macOS',
                  steps: [
                    'Download the .dmg file above',
                    'Open the DMG and drag SpotiFLAC to Applications',
                    'Right-click and select Open on first launch if prompted by Gatekeeper',
                  ],
                },
                {
                  os: '🐧 Linux',
                  steps: [
                    'Download the AppImage for your architecture',
                    'Make it executable: chmod +x SpotiFLAC.AppImage',
                    'Run it directly: ./SpotiFLAC.AppImage',
                  ],
                },
              ].map(g => (
                <div key={g.os} className="glass rounded-2xl p-6">
                  <h3 className="font-bold text-[var(--text)] mb-4" style={{fontFamily:'var(--font-display)'}}>{g.os}</h3>
                  <ol className="space-y-3">
                    {g.steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-green-500 text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* System Requirements */}
          <div className="glass rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>System Requirements</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { os: '🪟 Windows', req: 'Windows 10 or later (64-bit)' },
                { os: '🍎 macOS', req: 'macOS 11 Big Sur or later' },
                { os: '🐧 Linux', req: 'Any modern distro with glibc 2.17+' },
              ].map(r => (
                <div key={r.os} className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="font-semibold text-[var(--text)] text-sm mb-1">{r.os}</div>
                  <div className="text-xs text-[var(--muted)] leading-relaxed">{r.req}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-sm text-yellow-400/70 leading-relaxed">
              <strong className="text-yellow-400">Notice:</strong> SpotiFLAC for PC is for personal use only. Only download music you have the legal right to access. Not affiliated with Spotify AB or any streaming service. See our <Link href="/disclaimer" className="underline hover:text-yellow-300">Disclaimer</Link> and <Link href="/privacy-policy" className="underline hover:text-yellow-300">Privacy Policy</Link>.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
