import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SpotiFLAC Mobile FAQ — APK Install, Quality & Legal Questions',
  description: 'Frequently asked questions about SpotiFLAC Mobile APK. Installation, audio quality, compatibility, legality, iOS sideloading, and troubleshooting.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://spotiflac.app/#faq' },
  openGraph: {
    url: 'https://spotiflac.app/faq',
    title: 'SpotiFLAC Mobile FAQ — APK Install, Quality & Legal Questions',
    description: 'Installation, audio quality, compatibility, iOS sideloading and legal questions about SpotiFLAC Mobile APK answered.',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spotiflac.app' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://spotiflac.app/faq' },
  ],
}

const faqItems = [
  { q: 'Is SpotiFLAC Mobile completely free?', a: 'Yes. SpotiFLAC Mobile is free with no paid tiers, no premium features, and no subscription. The entire project is open-source under the MIT license.' },
  { q: 'Do I need a Spotify or Apple Music account?', a: 'No account of any kind is required. You simply paste a publicly accessible track or playlist URL into the app. No login, no OAuth, no streaming service credentials are requested at any point.' },
  { q: 'Which Android and iOS versions are supported?', a: 'SpotiFLAC Mobile requires Android 7.0 (Nougat) or higher for the APK. On iOS, you need iOS 14 or later. The app runs on both phones and tablets.' },
  { q: 'Are the downloads actually lossless FLAC?', a: 'SpotiFLAC fetches tracks at the highest available quality from the source and writes them to FLAC without additional compression cycles where possible. Output fidelity is capped at whatever quality the source exposes — typically 16-bit/44.1kHz CD quality.' },
  { q: 'Is installing the APK safe?', a: 'Only download from spotiflac.app or the official download page. Never install APKs from third-party mirrors. After installing, re-disable "Install from Unknown Sources" in Android settings.' },
  { q: 'Can I download full playlists and albums?', a: 'Yes. Paste any playlist or album URL and every track queues automatically. Batch downloads process sequentially in the background with no need to keep the app open.' },
  { q: 'Which media players support the downloaded files?', a: 'Standard FLAC and MP3 files play in any player: VLC, PowerAMP, Neutron, Apple Music, foobar2000, Plex, and more. No proprietary format, no DRM — files are yours to use anywhere.' },
  { q: 'Does SpotiFLAC collect any personal data?', a: 'The SpotiFLAC Mobile app itself contains no analytics or telemetry — all operations happen locally on your device. The spotiflac.app website uses Google Analytics to understand how visitors use the site and displays ads for revenue. See our Privacy Policy for full details.' },
  { q: 'Why is it not on the Google Play Store or App Store?', a: 'Apps that facilitate downloading copyrighted content from streaming services are not permitted on official app stores per their developer policies. SpotiFLAC is distributed as a direct APK (Android) and sideloadable IPA (iOS).' },
  { q: 'Is using SpotiFLAC Mobile legal?', a: 'Legality depends entirely on your local copyright law and what you download. SpotiFLAC is a tool — your use of it is your responsibility. Only download music you have the right to access. See our Disclaimer for full details.' },
  { q: 'How do I install SpotiFLAC on iOS without jailbreaking?', a: 'On iOS you need a sideloading tool. AltStore is the most common option — install it on your computer, connect your device via USB, and use it to push the IPA file to your phone. Sideloadly is an alternative that works similarly. The certificate is valid for 7 days on a free Apple ID, so you will need to re-sign monthly with AltStore Premium or a paid Apple Developer account.' },
  { q: 'How do I update to a newer version?', a: 'Download the latest APK from spotiflac.app and install it directly over your existing version. Your download history and settings carry over automatically.' },
  { q: 'A download failed. What should I do?', a: 'Check your connection, confirm the URL is valid and publicly accessible, then use the Retry button in the Download History screen. If the issue persists across multiple tracks, try a different track to determine whether it is a source-specific problem.' },
  { q: 'What is the difference between the ARM64 and ARM32 APKs?', a: 'ARM64 is the standard build for all modern Android phones (virtually everything made after 2016). ARM32 is for older or lower-end devices that run a 32-bit Android environment. When in doubt, try ARM64 first — Android will warn you if it is incompatible.' },
]

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Help</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4" style={{textShadow:'0 0 40px rgba(34,197,94,0.15)'}}>
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--muted)] mb-12 text-lg leading-relaxed max-w-xl">
            Everything you need to know before downloading — from installation and audio quality to iOS sideloading and legality.
          </p>

          <FAQ items={faqItems} />

          <div className="mt-14 glass rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{fontFamily:'var(--font-display)'}}>Still have a question?</h2>
            <p className="text-[var(--muted)] mb-6 text-sm leading-relaxed">
              If you could not find what you were looking for, send us a message directly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
