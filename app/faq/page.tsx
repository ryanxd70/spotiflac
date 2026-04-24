import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — SpotiFLAC Mobile',
  description: 'Frequently asked questions about SpotiFLAC Mobile APK. Installation, formats, compatibility, legality, and more answered clearly.',
}

const faqItems = [
  { q: 'Is SpotiFLAC Mobile free?', a: 'Yes, completely free. There are no paid tiers, subscriptions, or premium unlocks. The entire project is open-source under the MIT license.' },
  { q: 'Does it work without a Spotify account?', a: 'Yes. You do not need any streaming account to use SpotiFLAC Mobile. Simply paste a track or playlist link and hit Download.' },
  { q: 'What Android version does it support?', a: 'SpotiFLAC Mobile requires Android 7.0 (Nougat) or higher. For iOS, you need iOS 14 or later.' },
  { q: 'Are the downloads in true lossless quality?', a: 'SpotiFLAC downloads tracks at the highest available source quality and encodes to FLAC without re-compression where possible. Output quality depends on source availability.' },
  { q: 'Is it safe to install the APK?', a: 'The APK is distributed through our official site only. Always verify you are downloading from spotiflac.app. After installing, you can re-disable "Unknown Sources" in your Android settings.' },
  { q: 'Can I download full playlists at once?', a: 'Yes. Paste a playlist URL and the app queues every track automatically. Batch downloads run in the background so you can keep using your phone.' },
  { q: 'What music players are compatible with the downloaded files?', a: 'Standard FLAC and MP3 files play in any music player: VLC, PowerAMP, Apple Music, foobar2000, Neutron, and more. No proprietary format or lock-in.' },
  { q: 'Does SpotiFLAC collect any data?', a: 'No. The app collects zero personal data. There is no analytics, no crash reporting SDK, and no telemetry of any kind. See our Privacy Policy for full details.' },
  { q: 'Why is the app not on the Google Play Store?', a: 'Apps that facilitate downloading copyrighted content are generally not permitted on official app stores. That is why SpotiFLAC is distributed as a direct APK download.' },
  { q: 'Is it legal to use?', a: 'Legality depends on your jurisdiction and what you download. SpotiFLAC is a tool — how you use it is your responsibility. Only download music you have the right to access. See our Disclaimer for more information.' },
  { q: 'How do I update the app?', a: 'Download the latest APK from this site and install it over the existing version. Your download history and settings are preserved between updates.' },
  { q: 'The download failed. What should I do?', a: 'Check your internet connection first, then try again. If the problem persists, make sure the link you pasted is valid and publicly accessible. You can also retry failed downloads from the Download History screen inside the app.' },
]

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Help</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4 glow-text">Frequently Asked Questions</h1>
        <p className="text-[var(--muted)] mb-12 text-lg">Everything you need to know about SpotiFLAC Mobile — from installation to legality.</p>

        <FAQ items={faqItems} />

        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{fontFamily:'var(--font-display)'}}>Still have a question?</h2>
          <p className="text-[var(--muted)] mb-6 text-sm">If you could not find what you were looking for, send us a message directly.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-green-500/40 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}
