import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  // absolute: true bypasses the layout template so this exact string appears in <title>
  // and in Google SERPs — matches the requested SERP title precisely
  title: {
    absolute: 'SpotiFLAC Mobile APK v4.3.1 – Lossless Music Downloader (24-bit Audio)',
  },
  description: 'Download SpotiFLAC Mobile APK v4.3.1 for high-fidelity 24-bit FLAC audio. The ultimate lossless music downloader and player for mobile devices.',
  alternates: { canonical: 'https://spotiflac.app' },
  openGraph: {
    url: 'https://spotiflac.app',
    // OG title kept human/social — slightly more readable for shares
    title: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader (24-bit FLAC)',
    description: 'Download SpotiFLAC Mobile APK v4.3.1 for high-fidelity 24-bit FLAC audio. Free, open-source, no account required. Android 7.0+ & iOS 14+.',
    images: [{ url: 'https://spotiflac.app/og-image.png', width: 1200, height: 630, alt: 'SpotiFLAC Mobile APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotiFLAC Mobile APK v4.3.1 – Lossless Music Downloader (24-bit Audio)',
    description: 'Download SpotiFLAC Mobile APK v4.3.1 for high-fidelity 24-bit FLAC audio. Free, open-source, Android & iOS.',
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
  {
    q: 'Is SpotiFLAC Mobile completely free?',
    a: 'Yes. SpotiFLAC Mobile is free with no paid tiers, no premium features, and no subscription. The entire project is open-source under the MIT license. You can inspect the source code on GitHub anytime.'
  },
  {
    q: 'Do I need a Spotify or Apple Music account to use it?',
    a: 'No account of any kind is required. You simply paste a publicly accessible track or playlist URL into the app. No login, no OAuth, no streaming credentials.'
  },
  {
    q: 'Which Android and iOS versions are supported?',
    a: 'SpotiFLAC Mobile requires Android 7.0 (Nougat) or higher for the APK. On iOS, you need iOS 14 or later. The app runs on both phones and tablets.'
  },
  {
    q: 'Are downloads actually lossless FLAC, or is it re-encoded?',
    a: 'SpotiFLAC fetches tracks at the highest available quality from the source and writes them to FLAC without additional compression cycles where possible. Output fidelity is capped at whatever quality the source exposes — typically 16-bit/44.1kHz CD quality.'
  },
  {
    q: 'Is installing the APK safe?',
    a: 'Only download from spotiflac.app or the official GitHub releases page. Never install APKs from third-party mirrors. After installing, you can re-disable "Install from Unknown Sources" in Android settings immediately.'
  },
  {
    q: 'Can I download full playlists and albums at once?',
    a: 'Yes. Paste any playlist or album URL and every track is queued automatically. Batch downloads process sequentially in the background with no need to keep the app open.'
  },
  {
    q: 'What music players can play the downloaded files?',
    a: 'Standard FLAC and MP3 files work with any player: VLC, PowerAMP, Neutron, Apple Music, foobar2000, Plex, and more. There is no proprietary format or DRM — the files are yours to use anywhere.'
  },
  {
    q: 'Does SpotiFLAC collect any personal data?',
    a: 'None whatsoever. The app contains no analytics SDK, no crash reporter, no telemetry, and no tracking of any kind. All operations happen locally on your device. See our Privacy Policy for the full details.'
  },
  {
    q: 'Why is it not on the Google Play Store or Apple App Store?',
    a: 'Apps that facilitate downloading copyrighted content from streaming services are not permitted on official app stores per their developer policies. SpotiFLAC is therefore distributed as a direct APK (Android) and sideloadable IPA (iOS).'
  },
  {
    q: 'Is using SpotiFLAC Mobile legal?',
    a: 'Legality depends entirely on your local copyright law and what you download. SpotiFLAC is a tool — your use of it is your responsibility. Only download music you have the right to access. See our Disclaimer page for full details.'
  },
  {
    q: 'How do I update to a new version?',
    a: 'Download the latest APK from spotiflac.app or the GitHub releases page and install it directly over the existing version. Your download history and settings carry over automatically.'
  },
  {
    q: 'A download failed. What should I do?',
    a: 'Check your internet connection, confirm the URL is valid and publicly accessible, then use the Retry button in the Download History screen. If the issue persists across multiple tracks, try a different URL to determine whether it is a source-specific problem.'
  },
]

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
  softwareVersion: '4.3.1',
  datePublished: '2024-12-01',
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

export default function HomePage() {
  return (
    <>
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
            v4.3.1 — Latest Release
          </div>

          <h1 className="animate-fade-up stagger-1 text-5xl md:text-7xl font-bold text-[var(--text)] mb-6 leading-tight" style={{textShadow:'0 0 60px rgba(34,197,94,0.25)'}}>
            SpotiFLAC Mobile APK<br />
            <span className="text-green-400">Lossless. Free. Yours.</span>
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
            Android 7.0+ · iOS 14+ · v4.3.1 · MIT Licensed · No Account Needed
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
            { v: 'v4.3.1', l: 'Latest Version' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1" style={{fontFamily:'var(--font-display)'}}>{s.v}</div>
              <div className="text-xs text-[var(--muted)] uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label">What Is It?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
              Music you own, in quality<br />you can actually hear
            </h2>
            <p className="text-[var(--muted)] mb-4 leading-relaxed">
              Streaming apps let you listen, but you never truly own what you hear. SpotiFLAC Mobile changes that. It is a native Android and iOS app that downloads music and saves it as proper audio files — FLAC, MP3, or AAC — directly to your device storage.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              No subscriptions, no cloud, no DRM. Once downloaded, the files are standard audio files you can play anywhere, copy to any device, and keep forever. Built for audiophiles, offline listeners, and anyone tired of losing access to their library.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 space-y-4">
            {[
              { label: 'App Name', value: 'SpotiFLAC Mobile' },
              { label: 'Formats', value: 'FLAC · MP3 320kbps · AAC 256kbps' },
              { label: 'Platforms', value: 'Android 7.0+ · iOS 14+' },
              { label: 'Version', value: 'v4.3.1' },
              { label: 'License', value: 'Open Source (MIT)' },
              { label: 'Price', value: 'Free — No Subscription' },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-start border-b border-green-500/10 pb-3.5 last:border-0 last:pb-0 gap-4">
                <span className="text-sm text-[var(--muted)] flex-shrink-0">{r.label}</span>
                <span className="text-sm font-semibold text-green-400 text-right">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section className="py-16 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center">Who Uses SpotiFLAC</p>
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">Built for three kinds of listeners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎧', title: 'Audiophiles', desc: 'If you can tell the difference between 128kbps and lossless, or you listen on quality headphones or a DAC, SpotiFLAC gives you files that match your standards.' },
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

      {/* ═══ SCREENSHOT SHOWCASE 1 ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">See It In Action</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">
            Clean interface. Real results.
          </h2>
          <p className="text-center text-[var(--muted)] mb-14 max-w-xl mx-auto leading-relaxed">
            Full control over quality, appearance, and storage — then find your downloads organized in the Library, tagged and bit-depth labeled, ready to play.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Settings screen */}
            <div className="flex flex-col items-center gap-5">
              <div className="relative group">
                {/* Phone frame */}
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-b from-green-500/20 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#111] rounded-[2.8rem] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-[#222]" aria-hidden="true" />
                  <img
                    src="/screenshot-settings.jpg"
                    alt="SpotiFLAC Settings screen with options for appearance, download quality, local library, storage, and extensions"
                    width={320}
                    height={693}
                    className="rounded-[2.4rem] w-64 md:w-72 lg:w-80 h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>Settings — Full Control</h3>
                <p className="text-sm text-[var(--muted)] max-w-[240px] mx-auto leading-relaxed">Adjust appearance, download quality, filename format, local library scanning, storage paths, and extension management.</p>
              </div>
            </div>

            {/* Library screen */}
            <div className="flex flex-col items-center gap-5">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-b from-green-500/20 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#111] rounded-[2.8rem] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-[#222]" aria-hidden="true" />
                  <img
                    src="/screenshot-library.jpg"
                    alt="SpotiFLAC Mobile library view displaying downloaded tracks with 16-bit and 24-bit quality badges"
                    width={320}
                    height={693}
                    className="rounded-[2.4rem] w-64 md:w-72 lg:w-80 h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>Library — Organized & Labeled</h3>
                <p className="text-sm text-[var(--muted)] max-w-[240px] mx-auto leading-relaxed">Every download appears with its bit-depth badge (16-bit or 24-bit), album art, and full metadata intact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">
            Everything you need, nothing you do not
          </h2>
          <p className="text-center text-[var(--muted)] mb-14 max-w-xl mx-auto leading-relaxed">
            Every feature exists for a real reason. No bloat, no paywalled extras — just a focused tool that does one thing well.
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
      <section className="py-16 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center">Why Switch</p>
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">Practical reasons to use SpotiFLAC</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'You keep the files permanently', d: 'Downloads live on your device with no expiry date. Delete the app, reformat your phone, change countries — the music stays.' },
              { t: 'Works with any music player', d: 'Standard FLAC and MP3 files play in VLC, PowerAMP, Apple Music, foobar2000, Neutron, Plex, and anything else you prefer.' },
              { t: 'Saves data over time', d: 'Download once on Wi-Fi and stream nothing afterward. Ideal for mobile data plans and anyone with limited connectivity.' },
              { t: 'No recurring cost ever', d: 'Free to download, free to use, no subscription tier. The entire codebase is MIT-licensed and available on GitHub.' },
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
      <section id="how-it-works" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">Four steps. That is all.</h2>
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
      <section className="py-16 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center">Installation</p>
          <h2 className="text-3xl font-bold text-center text-[var(--text)] mb-12">How to Install SpotiFLAC Mobile on Android</h2>
          <ol className="space-y-4 mb-10">
            {[
              { t: 'Enable Unknown Sources', d: 'Open Settings → Security (or Privacy on some devices) and enable "Install from Unknown Sources." On Android 8+, you will be prompted per-app when you try to install.' },
              { t: 'Download the APK', d: 'Tap the Download APK button on this page. Choose the ARM64 build for most modern phones, or ARM32 for older devices. The file saves to your Downloads folder.' },
              { t: 'Open the file', d: 'Use your file manager (Files by Google works well) to locate the downloaded APK and tap it to begin the install prompt.' },
              { t: 'Confirm Installation', d: 'Android will display app permissions and ask you to confirm. Tap Install and wait a few seconds for it to complete.' },
              { t: 'Launch SpotiFLAC', d: 'Open SpotiFLAC from your home screen or app drawer. Paste any music link and tap Download to get your first track.' },
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

      {/* ═══ SCREENSHOT SHOWCASE 2 ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">Under The Hood</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">
            Extensible. Configurable. Yours.
          </h2>
          <p className="text-center text-[var(--muted)] mb-14 max-w-xl mx-auto leading-relaxed">
            The Extension Store lets you add new download sources like YouTube Music. Paste any link on the Home screen and download starts in seconds — no setup needed.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Library screen */}
            <div className="flex flex-col items-center gap-5 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-b from-green-500/20 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#111] rounded-[2.8rem] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-[#222]" aria-hidden="true" />
                  <img
                    src="/screenshot-home.jpg"
                    alt="SpotiFLAC Mobile home screen showing the search bar to paste a Spotify URL and trending songs"
                    width={320}
                    height={693}
                    className="rounded-[2.4rem] w-64 md:w-72 lg:w-80 h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>Home — Paste & Go</h3>
                <p className="text-sm text-[var(--muted)] max-w-[240px] mx-auto leading-relaxed">Paste any Spotify URL or search directly. Trending songs and popular artists load automatically.</p>
              </div>
            </div>

            {/* Extension Store */}
            <div className="flex flex-col items-center gap-5 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-b from-green-500/20 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#111] rounded-[2.8rem] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-[#222]" aria-hidden="true" />
                  <img
                    src="/screenshot-store.jpg"
                    alt="SpotiFLAC Extension Store showing Spotify Web and YouTube Music provider plugins"
                    width={320}
                    height={693}
                    className="rounded-[2.4rem] w-64 md:w-72 lg:w-80 h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[var(--text)] mb-1.5" style={{fontFamily:'var(--font-display)'}}>Extension Store — Add Sources</h3>
                <p className="text-sm text-[var(--muted)] max-w-[240px] mx-auto leading-relaxed">Install provider extensions like Spotify Web or YouTube Music to expand where SpotiFLAC can pull audio from.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROS & CONS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center">Honest Assessment</p>
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
      <section id="faq" className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-[var(--muted)] mb-12 leading-relaxed max-w-xl mx-auto">
            Everything you need to know before downloading. If something is not covered here, use the Contact page.
          </p>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-8 animate-float">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3L17.5 10.5H25L19 15.5L21.5 23L14 18.5L6.5 23L9 15.5L3 10.5H10.5L14 3Z" fill="#22c55e"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-6" style={{textShadow:'0 0 40px rgba(34,197,94,0.2)'}}>
            Your music. Your files.<br />Your device.
          </h2>
          <p className="text-[var(--muted)] mb-10 text-lg leading-relaxed">
            SpotiFLAC Mobile gives you true ownership of your music — lossless quality, permanent local files, zero cost. Download the APK and start building a library that actually belongs to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/download" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-xl hover:shadow-green-500/50 text-lg animate-pulse-glow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
              Download SpotiFLAC Mobile — Free
            </Link>
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-base">
              Explore Features →
            </Link>
          </div>
          <p className="mt-5 text-xs text-[var(--muted)]">v4.3.1 · Android 7.0+ · iOS 14+ · Open Source (MIT)</p>
        </div>
      </section>
    </>
  )
}
