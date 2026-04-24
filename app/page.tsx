import type { Metadata } from 'next'
import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader for Android & iOS',
  description: 'Download SpotiFLAC Mobile APK and save music in lossless FLAC quality. Free, open-source, works on Android 7.0+ and iOS 14+. No account needed.',
}

const features = [
  { icon: '🎵', title: 'Lossless FLAC Output', description: 'Download tracks in full CD-quality FLAC format. No compression artifacts, no loss of detail — exactly as the artist intended.' },
  { icon: '⚡', title: 'Multi-Format Support', description: 'Prefer a smaller file size? Export in MP3 320kbps or AAC 256kbps without switching apps. One tool for every use case.' },
  { icon: '📦', title: 'Batch Downloading', description: 'Queue entire playlists or albums in one tap. SpotiFLAC handles the rest while you do something else.' },
  { icon: '🏷️', title: 'Embedded Metadata', description: 'Every file arrives tagged — title, artist, album, year, cover art. No manual cleanup needed.' },
  { icon: '📴', title: 'Offline Playback Ready', description: 'Downloaded files land in your local storage, ready for any offline-capable player. No cloud dependency.' },
  { icon: '🔒', title: 'No Account Required', description: 'Open the app, paste a link, download. No sign-up, no login, no tracking. Just music.' },
]

const steps = [
  { n: '01', title: 'Copy the Link', desc: 'Grab the share URL of any track, album, or playlist from your music app.' },
  { n: '02', title: 'Open SpotiFLAC', desc: 'Launch the app and paste the link into the search bar.' },
  { n: '03', title: 'Choose Format', desc: 'Select FLAC, MP3, or AAC — and pick your preferred quality level.' },
  { n: '04', title: 'Download', desc: 'Tap Download. Files are saved directly to your device storage.' },
]

const faqItems = [
  { q: 'Is SpotiFLAC Mobile free?', a: 'Yes, completely free. There are no paid tiers, subscriptions, or premium unlocks. The project is open-source.' },
  { q: 'Does it work without a Spotify account?', a: 'Yes. You do not need any streaming account to use SpotiFLAC Mobile. Just paste a track link and download.' },
  { q: 'What Android version does it support?', a: 'SpotiFLAC Mobile requires Android 7.0 (Nougat) or higher. For iOS, you need iOS 14 or later.' },
  { q: 'Are the downloads in true lossless quality?', a: 'SpotiFLAC downloads tracks at the highest available source quality and converts to FLAC without recompression where possible.' },
  { q: 'Is it safe to install the APK?', a: 'The APK is distributed through our official site only. Always verify the download source before installing any third-party APK.' },
  { q: 'Can I download full playlists?', a: 'Yes. Paste a playlist URL and the app queues every track automatically. Batch downloads are fully supported.' },
]

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SpotiFLAC Mobile',
          operatingSystem: 'Android, iOS',
          applicationCategory: 'MultimediaApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Lossless music downloader for Android and iOS. Download music in FLAC, MP3, and AAC formats.',
          softwareVersion: '4.3.1',
        }) }}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            v4.3.1 — Now Available
          </div>

          <h1 className="animate-fade-up stagger-1 text-5xl md:text-7xl font-bold text-[var(--text)] mb-6 glow-text leading-tight">
            SpotiFLAC Mobile APK<br />
            <span className="text-green-400">Lossless. Free. Yours.</span>
          </h1>

          <p className="animate-fade-up stagger-2 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Download music in lossless FLAC quality directly to your Android or iOS device. No subscription. No account. No compromise on audio quality.
          </p>

          <div className="animate-fade-up stagger-3 flex flex-wrap justify-center gap-4">
            <Link href="/download" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-green-500/40 text-base animate-pulse-glow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
              Download APK — Free
            </Link>
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-base">
              See Features →
            </Link>
          </div>

          <p className="animate-fade-up stagger-4 mt-6 text-xs text-[var(--muted)]">
            Android 7.0+ · iOS 14+ · v4.3.1 · Open Source
          </p>
        </div>

        {/* Floating audio waveform decoration */}
        <div className="animate-float mt-16 flex justify-center gap-1 opacity-30">
          {[4,7,12,9,15,11,8,14,6,10,13,7,5,11,9,6,13,8,4,10].map((h, i) => (
            <div key={i} className="w-1 bg-green-400 rounded-full" style={{ height: h * 4, animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What Is It?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
              Music you actually own,<br />in quality you can hear
            </h2>
            <p className="text-[var(--muted)] mb-4 leading-relaxed">
              Most streaming apps let you listen but never really own what you hear. SpotiFLAC Mobile changes that. It's a lightweight downloader that fetches tracks and saves them as proper audio files — FLAC, MP3, or AAC — straight to your device storage.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              The app is built for people who care about audio quality and don't want to be tethered to an internet connection or a subscription to enjoy their music library.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 space-y-4">
            {[
              { label: 'Format Support', value: 'FLAC · MP3 · AAC' },
              { label: 'Platforms', value: 'Android & iOS' },
              { label: 'Price', value: 'Free, Always' },
              { label: 'Source', value: 'Open Source' },
              { label: 'Latest Version', value: 'v4.3.1' },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center border-b border-green-500/10 pb-3 last:border-0 last:pb-0">
                <span className="text-sm text-[var(--muted)]">{r.label}</span>
                <span className="text-sm font-semibold text-green-400">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS SPOTIFLAC */}
      <section className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center">The App</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-6">
            What Is SpotiFLAC Mobile?
          </h2>
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
            SpotiFLAC Mobile is an open-source Android and iOS app that downloads music tracks from streaming links and exports them in high-fidelity audio formats. Unlike web-based converters, it's a native mobile app — faster, cleaner, and designed for regular use.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🎧', title: 'For Audiophiles', desc: 'If you can tell the difference between 128kbps and lossless, this app is for you.' },
              { icon: '✈️', title: 'For Offline Listeners', desc: 'Commutes, flights, areas with bad signal — your music plays regardless.' },
              { icon: '📚', title: 'For Collectors', desc: 'Build a proper local library with organized files, metadata, and album art.' },
            ].map(c => (
              <div key={c.title} className="p-6 rounded-2xl border border-green-500/10">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>{c.title}</h3>
                <p className="text-sm text-[var(--muted)]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY USE IT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label text-center">Why SpotiFLAC?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-12">
          Practical reasons to switch<br />your download workflow
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: 'You keep the files permanently', d: 'Downloads live on your device. Delete the app and the music stays. No DRM, no expiry.' },
            { t: 'Works with any music player', d: 'Standard FLAC files play in VLC, PowerAMP, Apple Music, foobar2000 — whatever you prefer.' },
            { t: 'Saves mobile data over time', d: 'Download once on Wi-Fi, play forever. Ideal for people with limited data plans.' },
            { t: 'No background subscription cost', d: 'Free to download, free to use, no recurring fees. The entire app is open source.' },
          ].map(item => (
            <div key={item.t} className="flex gap-4 p-5 rounded-xl border border-green-500/10 hover:border-green-500/25 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-1" style={{fontFamily:'var(--font-display)'}}>{item.t}</h3>
                <p className="text-sm text-[var(--muted)]">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-4">
            Built for serious music listeners
          </h2>
          <p className="text-center text-[var(--muted)] mb-12 max-w-xl mx-auto">
            Every feature exists for a reason. Nothing bloated, nothing missing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label text-center">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-12">
          Four steps. That's it.
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-green-500/20" />
              )}
              <div className="w-16 h-16 rounded-full border-2 border-green-500/30 bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-green-400" style={{fontFamily:'var(--font-display)'}}>{s.n}</span>
              </div>
              <h3 className="font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>{s.title}</h3>
              <p className="text-sm text-[var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTALL GUIDE */}
      <section className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">Installation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-12">
            How to Install SpotiFLAC Mobile on Android
          </h2>
          <ol className="space-y-5">
            {[
              { n: 1, t: 'Go to Settings → Security', d: 'Enable "Install from Unknown Sources" (or "Allow this source" on Android 8+). This lets your phone install APKs from outside the Play Store.' },
              { n: 2, t: 'Download the APK', d: 'Tap the Download button on this page. The file will save to your Downloads folder.' },
              { n: 3, t: 'Open the file', d: 'Use your file manager to locate spotiflac-v4.3.1.apk and tap it to begin installation.' },
              { n: 4, t: 'Follow the prompt', d: 'Android will ask you to confirm the install. Tap Install and wait a few seconds.' },
              { n: 5, t: 'Launch and start downloading', d: 'Open SpotiFLAC from your app drawer. Paste a music link and hit Download.' },
            ].map(s => (
              <li key={s.n} className="flex gap-5 p-5 rounded-xl border border-green-500/10">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-1" style={{fontFamily:'var(--font-display)'}}>{s.t}</h3>
                  <p className="text-sm text-[var(--muted)]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-sm text-yellow-400/80">
              <strong className="text-yellow-400">Note:</strong> Only download the APK from this official page. Third-party sources may distribute modified versions. After installing, you can re-disable "Unknown Sources" in your settings.
            </p>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label text-center">Honest Review</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-12">
          Pros & Cons
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2" style={{fontFamily:'var(--font-display)'}}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              What Works Well
            </h3>
            <ul className="space-y-3">
              {['Genuine lossless FLAC output', 'Fast batch downloading', 'Clean, minimal interface', 'Embedded metadata and album art', 'No account or sign-up required', 'Completely free and open source'].map(p => (
                <li key={p} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-green-400 flex-shrink-0">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-400/80 mb-4 flex items-center gap-2" style={{fontFamily:'var(--font-display)'}}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 15l10-10M5 5l10 10" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
              Limitations to Know
            </h3>
            <ul className="space-y-3">
              {['Requires enabling Unknown Sources on Android', 'Not available on Google Play Store', 'iOS version requires sideloading', 'Download speed depends on your connection', 'Quality is capped at source availability'].map(c => (
                <li key={c} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-red-400/70 flex-shrink-0">✗</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-y border-green-500/10 bg-green-500/[0.02]">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-12">
            Common questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CONCLUSION CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-8 animate-float">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4L17.5 11H23L18.5 15.5L20.5 22.5L14 18.5L7.5 22.5L9.5 15.5L5 11H10.5L14 4Z" fill="#22c55e"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-6 glow-text">
            Your music. Your files.<br />Your device.
          </h2>
          <p className="text-[var(--muted)] mb-10 text-lg leading-relaxed">
            SpotiFLAC Mobile gives you true ownership of your music library — lossless quality, permanent files, zero cost. Download the APK and start building a library that's actually yours.
          </p>
          <Link href="/download" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-xl hover:shadow-green-500/50 text-lg animate-pulse-glow">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z"/></svg>
            Download SpotiFLAC Mobile — Free
          </Link>
          <p className="mt-4 text-xs text-[var(--muted)]">v4.3.1 · Android 7.0+ · iOS 14+ · No account needed</p>
        </div>
      </section>
    </>
  )
}
