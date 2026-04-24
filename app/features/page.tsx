import type { Metadata } from 'next'
import FeatureCard from '@/components/FeatureCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features — SpotiFLAC Mobile',
  description: 'Explore every feature of SpotiFLAC Mobile. Lossless FLAC, batch downloads, metadata tagging, offline storage, and more.',
}

const features = [
  { icon: '🎵', title: 'Lossless FLAC Output', description: 'Download tracks in full lossless FLAC format. No re-encoding, no quality loss. Audio preserved exactly as delivered from the source.' },
  { icon: '⚡', title: 'Multi-Format Export', description: 'Need something smaller? Export in MP3 320kbps or AAC 256kbps. All three formats available without switching apps.' },
  { icon: '📦', title: 'Batch Downloads', description: 'Queue an entire album or playlist in one tap. Downloads run in background while you use your phone.' },
  { icon: '🏷️', title: 'Automatic Metadata', description: 'Every file includes ID3 tags: title, artist, album, year, genre, and embedded album artwork. No manual cleanup.' },
  { icon: '📴', title: 'Local Storage Only', description: 'Files go directly to your device. No cloud sync required, no third-party storage, no expiry date.' },
  { icon: '🔒', title: 'No Account Needed', description: 'Paste a URL, pick a format, download. No registration, no login, no email — respects your privacy from day one.' },
  { icon: '🎚️', title: 'Quality Settings', description: 'Set a default quality level for all downloads or override per-track. Fine-grained control without complexity.' },
  { icon: '🔍', title: 'Download History', description: 'Track completed files, retry failures, and manage your library without leaving the app.' },
  { icon: '🌙', title: 'Dark Mode Default', description: 'Clean, low-glare interface designed for night listening and low-light conditions.' },
]

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Features</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 glow-text">Everything you need,<br/>nothing you do not</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">Built around one idea: make lossless downloading simple and reliable.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 0.07} />)}
        </div>
        <div className="text-center">
          <Link href="/download" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-xl text-lg">
            Download SpotiFLAC Free
          </Link>
        </div>
      </div>
    </div>
  )
}
