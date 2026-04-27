import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SpotiFLAC Mobile Features — Lossless FLAC, Batch Downloads & More',
  description: 'All SpotiFLAC Mobile features: lossless FLAC downloads, batch playlists, auto metadata tagging, multi-format export, local storage. No account required.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://spotiflac.app' },
  openGraph: {
    url: 'https://spotiflac.app/features',
    title: 'SpotiFLAC Mobile Features — Lossless FLAC, Batch Downloads & More',
    description: 'Lossless FLAC, batch downloads, auto metadata, multi-format, offline storage. No account required. Free for Android & iOS.',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spotiflac.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://spotiflac.app/features' },
  ],
}

const features = [
  {
    icon: '🎵',
    title: 'Lossless FLAC Output',
    detail: 'SpotiFLAC writes audio to FLAC without any additional compression cycle. The result is a mathematically lossless file — every sample is preserved exactly as delivered by the source. No generation loss, no codec artifacts, no audible quality degradation between what the streaming service holds and what lands on your device.',
    specs: ['16-bit / 44.1kHz CD quality where available', 'No re-encoding from lossy intermediary', 'Compatible with all FLAC-capable players'],
  },
  {
    icon: '⚡',
    title: 'Multi-Format Export',
    detail: 'Not every use case calls for a 40MB FLAC file. SpotiFLAC lets you export in MP3 (up to 320kbps) or AAC (up to 256kbps) from the same download flow. Switch formats per-track or set a global default. All three formats produce tagged, organized files.',
    specs: ['FLAC (lossless)', 'MP3 up to 320kbps', 'AAC up to 256kbps'],
  },
  {
    icon: '📦',
    title: 'Playlist & Album Batch Downloads',
    detail: 'Paste a playlist or album URL and SpotiFLAC queues every track automatically. Downloads process sequentially in the background. The app does not need to remain open or in the foreground — Android and iOS background task handling keeps the queue running.',
    specs: ['Unlimited playlist length', 'Background processing supported', 'Automatic queue with progress indicator'],
  },
  {
    icon: '🏷️',
    title: 'Automatic Metadata Tagging',
    detail: 'Every file SpotiFLAC produces is fully tagged before it touches your storage. Title, artist, album, track number, year, genre, composer where available, and embedded album artwork. Open the file in any music player and it appears correctly organized — no manual tagging needed.',
    specs: ['Full ID3v2 tag support (MP3)', 'Vorbis comment tagging (FLAC)', 'Embedded cover art at source resolution'],
  },
  {
    icon: '📴',
    title: 'True Local Storage — No Cloud',
    detail: 'Downloaded files are written directly to your device\'s internal storage or SD card — wherever you configure. SpotiFLAC does not sync to any cloud service, does not require an internet connection to play what you have downloaded, and does not phone home after a download completes.',
    specs: ['Internal storage or SD card', 'Configurable download directory', 'No cloud account or sync required'],
  },
  {
    icon: '🔒',
    title: 'No Account Required',
    detail: 'SpotiFLAC has no sign-up screen, no login, no OAuth flow, and no email confirmation. Open the app and the download field is already there. No credentials are requested, stored, or transmitted at any point in the application.',
    specs: ['Zero registration', 'No streaming service credentials needed', 'No persistent session data'],
  },
  {
    icon: '🎚️',
    title: 'Per-Track Quality Override',
    detail: 'Set a global default quality level in settings and override it for any individual track or batch. If you want FLAC for an album but MP3 for a playlist you are only keeping temporarily, you can configure that in the download dialog without touching your default settings.',
    specs: ['Global quality default', 'Per-download format override', 'Remembers last-used format per session'],
  },
  {
    icon: '🔍',
    title: 'Download History & Retry',
    detail: 'Every download is written to an in-app log with timestamp, file path, format, and status. Failed downloads display an error reason and can be retried in one tap. Completed downloads show the file path so you can navigate to them directly.',
    specs: ['Persistent download log', 'One-tap retry for failures', 'Direct file path navigation'],
  },
  {
    icon: '🌙',
    title: 'Dark-First Interface',
    detail: 'The interface is designed ground-up for dark environments — low contrast backgrounds, green accent palette, and minimal visual noise. Suitable for late-night use without eye strain. There is no bright white mode to accidentally switch into.',
    specs: ['Native dark mode only', 'High-contrast text on dark background', 'Optimized for OLED screens'],
  },
]

const schemaFeatures = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SpotiFLAC Mobile Features',
  url: 'https://spotiflac.app/features',
  description: 'Full feature list for SpotiFLAC Mobile APK — lossless FLAC downloader for Android and iOS.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'SpotiFLAC Mobile',
    featureList: features.map(f => f.title).join(', '),
  },
}

export default function FeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFeatures) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Features</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-5" style={{textShadow:'0 0 50px rgba(34,197,94,0.2)'}}>
              Everything you need,<br />nothing you do not
            </h1>
            <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
              No bloat, no paywalled extras. SpotiFLAC is a focused tool that does one thing well. Every feature on this page serves that goal.
            </p>
          </div>

          <div className="space-y-5 mb-16">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="animate-fade-up p-7 rounded-2xl border border-green-500/10 bg-green-500/[0.03] hover:bg-green-500/[0.06] hover:border-green-500/25 transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="text-4xl flex-shrink-0">{f.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-green-300 mb-3" style={{fontFamily:'var(--font-display)'}}>{f.title}</h2>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{f.detail}</p>
                    <ul className="flex flex-wrap gap-2">
                      {f.specs.map(spec => (
                        <li key={spec} className="text-xs px-3 py-1 rounded-full border border-green-500/20 text-green-400 bg-green-500/5">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/download" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-xl hover:shadow-green-500/40 text-lg animate-pulse-glow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
              Download SpotiFLAC Mobile — Free
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
