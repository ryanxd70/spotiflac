import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: {
    absolute: 'SpotiFLAC Mobile APK v4.5.5 – Lossless Music Downloader',
  },
  description: 'Download SpotiFLAC Mobile APK v4.5.5 for high-fidelity 24-bit FLAC audio. The ultimate lossless music downloader and player for mobile devices.',
  alternates: { canonical: 'https://spotiflac.app' },
  openGraph: {
    url: 'https://spotiflac.app',
    title: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader (24-bit FLAC)',
    description: 'Download SpotiFLAC Mobile APK v4.5.5 for high-fidelity 24-bit FLAC audio. Free, open-source, no account required. Android 7.0+ & iOS 14+.',
    images: [{ url: 'https://spotiflac.app/og-image.png', width: 1200, height: 630, alt: 'SpotiFLAC Mobile APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotiFLAC Mobile APK v4.5.5 – Lossless Music Downloader (24-bit Audio)',
    description: 'Download SpotiFLAC Mobile APK v4.5.5 for high-fidelity 24-bit FLAC audio. Free, open-source, Android & iOS.',
    images: ['https://spotiflac.app/og-image.png'],
  },
}

const features = [
  { icon: '🎵', title: 'Lossless FLAC Output', description: 'Downloads are saved in full CD-quality FLAC format — no compression artifacts, no re-encoding, no quality degradation. You get the audio exactly as the source provides it.' },
  { icon: '⚡', title: 'Multi-Format Export', description: 'Need a smaller file? Switch to MP3 320kbps or AAC 256kbps in one tap. All three formats are built-in — no second app needed.' },
  { icon: '📦', title: 'Playlist & Album Batches', description: 'Paste a playlist or album URL and queue every track at once. Downloads run sequentially in the background while you use your phone normally.' },
  { icon: '🏷️', title: 'Automatic Metadata Tagging', description: 'Every file lands fully tagged — title, artist, album, track number, year, genre, and embedded cover art. No manual editing after download.' },
  { icon: '📴', title: 'True Local Storage', description: 'Files save directly to your device. No cloud dependency, no expiry, no account linking. Delete the app and the music remains.' },
  { icon: '🔒', title: 'No Account Required', description: 'Open the app, paste a link, tap download. No sign-up form, no login screen, no email confirmation. Zero friction from first launch.' },
  { icon: '🎚️', title: 'Per-Track Quality Override', description: 'Set a global default quality and override it individually per track or album. Granular control without cluttering the interface.' },
  { icon: '🔍', title: 'Download History & Retry', description: 'Every download is logged. Failed tracks can be retried in one tap. Your full history is searchable and filterable inside the app.' },
  { icon: '🌙', title: 'Dark-First Interface', description: 'Designed from the ground up for dark environments. Clean, minimal, low-glare — easy to use at midnight without burning your eyes.' },
]

const steps = [
  { n: '01', title: 'Copy the Link', desc: 'Grab the share URL of any track, album, or playlist from your music streaming app.' },
  { n: '02', title: 'Open SpotiFLAC', desc: 'Launch the app and paste the link into the search bar at the top of the screen.' },
  { n: '03', title: 'Choose Your Format', desc: 'Select FLAC for lossless, MP3 for compatibility, or AAC for balance. Pick quality level.' },
  { n: '04', title: 'Download', desc: 'Tap Download. The file is saved to your device storage — tagged, organized, and ready.' },
]

const faqItems = [
  { q: 'Is SpotiFLAC Mobile completely free?', a: 'Yes. It is free with no paid tiers, no premium features, and no subscription. The entire project is open-source under the MIT license. You can inspect the source code on GitHub anytime.' },
  { q: 'Do I need a Spotify or Apple Music account to use it?', a: 'No account of any kind is required. You simply paste a publicly accessible track or playlist URL into the app. No login, no OAuth, no streaming credentials.' },
  { q: 'Which Android and iOS versions are supported?', a: 'The app requires Android 7.0 (Nougat) or higher for the APK. On iOS, you need iOS 14 or later. It runs on both phones and tablets.' },
  { q: 'Are downloads actually lossless FLAC, or is it re-encoded?', a: 'It fetches tracks at the highest available quality from the source and writes them to FLAC without additional compression cycles where possible. Output fidelity is capped at whatever quality the source exposes — typically 16-bit/44.1kHz CD quality.' },
  { q: 'Is installing the APK safe?', a: 'Only download from spotiflac.app. Never install APKs from third-party mirrors. After installing, you can re-disable "Install from Unknown Sources" in Android settings immediately.' },
  { q: 'Can I download full playlists and albums at once?', a: 'Yes. Paste any playlist or album URL and every track is queued automatically. Batch downloads process sequentially in the background with no need to keep the app open.' },
  { q: 'What music players can play the downloaded files?', a: 'Standard FLAC and MP3 files work with any player: VLC, PowerAMP, Neutron, Apple Music, foobar2000, Plex, and more. There is no proprietary format or DRM — the files are yours to use anywhere.' },
  { q: 'Does SpotiFLAC collect any personal data?', a: 'None whatsoever. The app contains no analytics SDK, no crash reporter, no telemetry, and no tracking of any kind. All operations happen locally on your device. See our Privacy Policy for the full details.' },
  { q: 'Why is it not on the Google Play Store or Apple App Store?', a: 'Apps that facilitate downloading copyrighted content from streaming services are not permitted on official app stores per their developer policies. It is therefore distributed as a direct APK (Android) and sideloadable IPA (iOS).' },
  { q: 'Is using SpotiFLAC Mobile legal?', a: 'Legality depends entirely on your local copyright law and what you download. SpotiFLAC is a tool — your use of it is your responsibility. Only download music you have the right to access. See our Disclaimer page for full details.' },
  { q: 'How do I update to a new version?', a: 'Download the latest APK from spotiflac.app and install it directly over the existing version. Your download history and settings carry over automatically.' },
  { q: 'A download failed. What should I do?', a: 'Check your internet connection, confirm the URL is valid and publicly accessible, then use the Retry button in the Download History screen. If the issue persists across multiple tracks, try a different URL to determine whether it is a source-specific problem.' },
]

// E-E-A-T: Organization schema signals authorship, legitimacy, and contact info to Google
const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SpotiFLAC Mobile',
  url: 'https://spotiflac.app',
  logo: 'https://spotiflac.app/logo.png',
  description: 'Developers of SpotiFLAC Mobile, a free open-source lossless FLAC music downloader for Android and iOS.',
  foundingDate: '2023',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://spotiflac.app/contact',
  },
  sameAs: [
    'https://github.com/spotiflacapp/SpotiFLAC-Mobile',
    'https://x.com/spotiflac',
    'https://t.me/spotiflacapp',
    'https://www.facebook.com/spotiflac',
  ],
}

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SpotiFLAC Mobile',
  url: 'https://spotiflac.app',
  description: 'Free lossless music downloader APK for Android and iOS. Download music in FLAC, MP3, and AAC formats.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://spotiflac.app/?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SpotiFLAC Mobile',
  url: 'https://spotiflac.app',
  downloadUrl: 'https://spotiflac.app/download',
  operatingSystem: 'Android 7.0+, iOS 14+',
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'Music Downloader',
  softwareVersion: '4.5.5',
  datePublished: '2026-05-18',
  description: 'Free lossless music downloader for Android and iOS. Downloads 24-bit FLAC audio with embedded metadata. No account required.',
  featureList: 'Lossless FLAC download, 24-bit audio support, MP3 320kbps, AAC 256kbps, batch playlist download, automatic metadata tagging, offline playback, no account required',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '1243', bestRating: '5', worstRating: '1' },
  author: { '@type': 'Organization', name: 'SpotiFLAC', url: 'https://spotiflac.app' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spotiflac.app' },
  ],
}

const screenshots = [
  {
    src: '/screenshot-settings.jpg',
    alt: 'SpotiFLAC Settings screen with options for appearance, download quality, local library, storage, and extensions',
    title: 'Home — Paste & Go',
    desc: 'Paste any Spotify URL or search directly. Trending songs and popular artists load automatically.',
  },
  {
    src: '/screenshot-library.jpg',
    alt: 'SpotiFLAC Mobile library view displaying downloaded tracks with 16-bit and 24-bit quality badges',
    title: 'Extension Store — Add Sources',
    desc: 'Install provider extensions like Spotify Web or YouTube Music to expand where SpotiFLAC can pull audio from.',
  },
  {
    src: '/screenshot-home.jpg',
    alt: 'SpotiFLAC Mobile home screen showing the search bar to paste a Spotify URL and trending songs',
    title: 'Settings — Full Control',
    desc: 'Adjust appearance, download quality, filename format, local library scanning, storage paths, and extension management.',
  },
  {
    src: '/screenshot-store.jpg',
    alt: 'SpotiFLAC Extension Store showing Spotify Web and YouTube Music provider plugins',
    title: 'Library — Organized & Labeled',
    desc: 'Every download appears with its bit-depth badge (16-bit or 24-bit), album art, and full metadata intact.',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-green-500/5 blur-[130px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-green-600/3 blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            v4.5.5 — Latest Release
          </div>

          <h1 className="animate-fade-up stagger-1 text-5xl md:text-7xl font-bold text-[var(--text)] mb-6 leading-tight" style={{textShadow:'0 0 60px rgba(34,197,94,0.25)'}}>
            SpotiFLAC APK —{' '}<span className="text-green-400">FLAC Music Downloader</span>
          </h1>

          <p className="animate-fade-up stagger-2 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Download music in lossless FLAC quality directly to your Android or iOS device. No subscription. No account. No compromise on audio.
          </p>

          <div className="animate-fade-up stagger-3 flex flex-wrap justify-center gap-4">
            <Link href="/download" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-green-500/40 text-base animate-pulse-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
              Download APK — Free
            </Link>
            <a href="/#features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-base">
              See All Features ↓
            </a>
          </div>

          <p className="animate-fade-up stagger-4 mt-5 text-xs text-[var(--muted)]">
            Android 7.0+ · iOS 14+ · v4.5.5 · MIT Licensed · No Account Needed
          </p>
        </div>

        <div className="animate-float mt-16 flex justify-center items-end gap-0.5 opacity-20 select-none" aria-hidden="true">
          {[3,5,8,6,11,9,14,10,7,13,11,8,15,9,6,12,10,7,4,9,13,8,5,11,7].map((h, i) => (
            <div key={i} className="w-1.5 bg-green-400 rounded-full transition-all" style={{ height: h * 4 }} />
          ))}
        </div>
      </section>

      {/* ═══ QUICK STATS ═══ */}
      <section className="py-12 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: 'FLAC', l: 'Output Format' },
            { v: 'Free', l: 'Always & Forever' },
            { v: '9+', l: 'Key Features' },
            { v: 'v4.5.5', l: 'Latest Version' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1" style={{fontFamily:'var(--font-display)'}}>{s.v}</div>
              <div className="text-xs text-[var(--muted)] uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ APP INFO TABLE ═══ */}
      <section className="py-10 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[var(--text)] mb-5 text-center" style={{fontFamily:'var(--font-display)'}}>App Info</h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full text-sm" aria-label="SpotiFLAC Mobile app information">
              <tbody>
                {[
                  { label: 'App Name',    value: 'SpotiFLAC Mobile' },
                  { label: 'Version',     value: 'v4.5.5' },
                  { label: 'Last Updated', value: '18 May, 2026' },
                  { label: 'File Size',   value: 'ARM64: 75.8 MB · ARM32: 95.4 MB · iOS: 33.2 MB' },
                  { label: 'Category',    value: 'Music & Audio' },
                  { label: 'Requirement', value: 'Android 7.0+ · iOS 14+' },
                  { label: 'Downloads',   value: '200,000+' },
                  { label: 'Developer',   value: 'Zarz Eleutherius (Open Source)' },
                  { label: 'Price',       value: 'Free' },
                ].map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-green-500/[0.03]' : ''}>
                    <td className="px-5 py-3 font-semibold text-[var(--text)] border-b border-green-500/8 w-1/3">{r.label}</td>
                    <td className="px-5 py-3 text-[var(--muted)] border-b border-green-500/8">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 text-center">
            What is SpotiFLAC Mobile APK
          </h2>
          <p className="text-[var(--muted)] mb-4 leading-relaxed">
            Streaming apps let you listen, but you never truly own what you hear. This app changes that. It downloads music and saves it as proper audio files — FLAC, MP3, or AAC — directly to your device storage, no strings attached.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            No subscriptions, no cloud, no DRM. Once downloaded, the files are standard audio files you can play anywhere, copy to any device, and keep forever. Built for audiophiles, offline listeners, and anyone tired of losing access to their library.
          </p>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section className="py-16 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">Who Is It For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎧', title: 'Audiophiles', desc: 'If you can tell the difference between 128kbps and lossless, or you listen on quality headphones or a DAC, you get files that actually match your standards.' },
              { icon: '✈️', title: 'Offline Listeners', desc: 'Commutes, flights, travel, remote areas — your full library plays without an internet connection, a data plan, or a streaming server staying online.' },
              { icon: '📚', title: 'Music Collectors', desc: 'Build a properly organized local library with real files, embedded metadata, cover art, and folder structures you control completely.' },
            ].map(c => (
              <div key={c.title} className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/25 hover:bg-green-500/5 transition-all duration-200">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-[var(--text)] mb-3 text-lg" style={{fontFamily:'var(--font-display)'}}>{c.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCREENSHOTS — 4 columns ═══ */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-3">
            App Screenshots
          </h2>
          <p className="text-center text-[var(--muted)] mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            From pasting a link to a fully organized library — every screen is built around getting your music downloaded fast and cleanly.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
            {screenshots.map((s) => (
              <div key={s.src} className="flex flex-col items-center gap-5">
                <div className="relative group w-full max-w-[180px] mx-auto">
                  <div className="absolute -inset-1.5 rounded-[2rem] bg-green-500/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#111] rounded-[2rem] p-1.5 shadow-xl shadow-black/50 ring-1 ring-white/5">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[#2a2a2a]" aria-hidden="true" />
                    <img
                      src={s.src}
                      alt={s.alt}
                      width={320}
                      height={693}
                      className="rounded-[1.6rem] w-full h-auto block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="text-center px-1">
                  <h3 className="font-bold text-[var(--text)] text-sm mb-1" style={{fontFamily:'var(--font-display)'}}>{s.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed hidden md:block">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">
            Features
          </h2>
          <p className="text-center text-[var(--muted)] mb-14 max-w-xl mx-auto leading-relaxed">
            Every feature exists for a real reason. No bloat, no paywalled extras.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="animate-fade-up p-6 rounded-2xl border border-green-500/10 bg-green-500/[0.03] hover:bg-green-500/[0.07] hover:border-green-500/25 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                <h3 className="font-bold text-green-300 mb-2 text-base" style={{fontFamily:'var(--font-display)'}}>{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY USE IT ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">Why Use It</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'You keep the files permanently', d: 'Downloads live on your device with no expiry date. Delete the app, reformat your phone, change countries — the music stays.' },
              { t: 'Works with any music player', d: 'Standard FLAC and MP3 files play in VLC, PowerAMP, Apple Music, foobar2000, Neutron, Plex, and anything else you prefer.' },
              { t: 'Saves data over time', d: 'Download once on Wi-Fi and stream nothing afterward. Ideal for mobile data plans and anyone with limited connectivity.' },
              { t: 'No recurring cost ever', d: 'Completely free with no subscription tier. The codebase is MIT-licensed and open to anyone.' },
            ].map(item => (
              <div key={item.t} className="flex gap-4 p-5 rounded-xl border border-green-500/10 hover:border-green-500/25 hover:bg-green-500/5 transition-all duration-200">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>{item.t}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">How it Works</h2>
          <p className="text-center text-[var(--muted)] mb-14 max-w-lg mx-auto">No setup wizard, no configuration, no learning curve. Open the app and start downloading.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-green-500/30 to-transparent" aria-hidden="true" />
                )}
                <div className="w-16 h-16 rounded-full border-2 border-green-500/30 bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-bold text-green-400 text-sm" style={{fontFamily:'var(--font-display)'}}>{s.n}</span>
                </div>
                <h3 className="font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>{s.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALL GUIDE ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">How to Install SpotiFLAC APK on Android</h2>
          <ol className="space-y-4 mb-10">
            {[
              { t: 'Enable Unknown Sources', d: 'Open Settings → Security (or Privacy on some devices) and enable "Install from Unknown Sources." On Android 8+, you will be prompted per-app when you try to install.' },
              { t: 'Download the APK', d: 'Tap the Download APK button on this page. Choose the ARM64 build for most modern phones, or ARM32 for older devices. The file saves to your Downloads folder.' },
              { t: 'Open the file', d: 'Use your file manager (Files by Google works well) to locate the downloaded APK and tap it to begin the install prompt.' },
              { t: 'Confirm Installation', d: 'Android will display app permissions and ask you to confirm. Tap Install and wait a few seconds for it to complete.' },
              { t: 'Launch the App', d: 'Open the app from your home screen or app drawer. Paste any music link and tap Download to get your first track.' },
            ].map((s, i) => (
              <li key={i} className="flex gap-5 p-5 rounded-xl border border-green-500/10 hover:border-green-500/20 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>{s.t}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-sm text-yellow-400/80 leading-relaxed">
              <strong className="text-yellow-400">Security tip:</strong> Only download APKs from <strong>spotiflac.app</strong>. Third-party mirrors may distribute modified or malicious versions. After installing, re-disable Unknown Sources in your settings.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROS & CONS ═══ */}
      <section className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-7">
              <h3 className="font-bold text-green-400 mb-5 flex items-center gap-2 text-lg" style={{fontFamily:'var(--font-display)'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                What Works Well
              </h3>
              <ul className="space-y-3">
                {[
                  'True lossless FLAC output from source',
                  'Batch download entire playlists and albums',
                  'Automatic metadata and cover art embedding',
                  'Files are standard — play anywhere',
                  'No account, login, or sign-up at any point',
                  'Completely free and open-source (MIT)',
                  'Download history with one-tap retry',
                  'Minimal, clean interface with dark mode',
                ].map(p => (
                  <li key={p} className="flex gap-3 text-sm text-[var(--muted)]">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-7">
              <h3 className="font-bold text-red-400/80 mb-5 flex items-center gap-2 text-lg" style={{fontFamily:'var(--font-display)'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 15l10-10M5 5l10 10" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
                Limitations to Know
              </h3>
              <ul className="space-y-3">
                {[
                  'Requires enabling Unknown Sources on Android',
                  'Not on Google Play Store or Apple App Store',
                  'iOS requires sideloading via AltStore/Sideloadly',
                  'Download speed depends on your connection',
                  'Output quality capped at source availability',
                  'No built-in music player — files open externally',
                ].map(c => (
                  <li key={c} className="flex gap-3 text-sm text-[var(--muted)]">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11l8-8M3 3l8 8" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-[var(--muted)] mb-12 leading-relaxed max-w-xl mx-auto">
            Everything you need to know before downloading. If something is not covered here, use the Contact page.
          </p>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* ═══ E-E-A-T TRUST SIGNALS ═══ */}
      <section className="py-14 px-6 border-t border-green-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              { icon: '🔓', stat: 'MIT Licensed', sub: 'Fully open-source' },
              { icon: '⭐', stat: '4.7 / 5', sub: '1,200+ user ratings' },
              { icon: '📥', stat: '200,000+', sub: 'Total downloads' },
              { icon: '🛡️', stat: 'Zero Trackers', sub: 'No data collection in app' },
            ].map(t => (
              <div key={t.stat} className="flex flex-col items-center gap-1.5">
                <div className="text-2xl">{t.icon}</div>
                <div className="font-bold text-green-400 text-sm" style={{fontFamily:'var(--font-display)'}}>{t.stat}</div>
                <div className="text-xs text-[var(--muted)]">{t.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--muted)] max-w-2xl mx-auto leading-relaxed border-t border-green-500/8 pt-8">
            SpotiFLAC Mobile is an independent open-source project maintained by community contributors. It is not affiliated with Spotify AB, Apple Inc., or any music streaming service. Source code is publicly available for audit on GitHub. Use responsibly and in accordance with your local copyright laws.
          </p>
        </div>
      </section>
    </>
  )
}
