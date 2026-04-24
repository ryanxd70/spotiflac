import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download SpotiFLAC Mobile APK v4.3.1',
  description: 'Download SpotiFLAC Mobile APK v4.3.1 for Android 7.0+ and iOS 14+. Free lossless music downloader.',
}

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Download</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 glow-text">SpotiFLAC Mobile APK</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">The latest stable release. Free, open-source, no sign-up required.</p>
        </div>

        <div className="glass rounded-3xl p-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Latest Stable Release
          </div>
          <h2 className="text-3xl font-bold text-[var(--text)] mb-2" style={{fontFamily:'var(--font-display)'}}>Version 4.3.1</h2>
          <p className="text-[var(--muted)] text-sm mb-8">Released December 2024 · 8.4 MB</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg animate-pulse-glow">
              Download for Android (APK)
            </a>
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-all duration-200">
              Download for iOS (IPA)
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[['Version','4.3.1'],['Android','7.0+'],['iOS','14+'],['Size','8.4 MB']].map(([l,v]) => (
              <div key={l} className="p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="text-lg font-bold text-green-400">{v}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>Android Install Guide</h2>
            <ol className="space-y-4">
              {['Go to Settings then Security and enable Unknown Sources','Tap the Android download button above','Open the downloaded APK from your file manager','Tap Install and wait for it to complete','Launch SpotiFLAC from your home screen'].map((s,i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-black font-bold text-xs flex items-center justify-center flex-shrink-0">{i+1}</span>{s}
                </li>
              ))}
            </ol>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-[var(--text)] mb-5" style={{fontFamily:'var(--font-display)'}}>iOS Install Guide</h2>
            <ol className="space-y-4">
              {['Install AltStore or Sideloadly on your computer','Connect your iPhone or iPad via USB','Download the IPA file to your computer','Drag and drop the IPA into AltStore or Sideloadly','Trust the developer in Settings then General then Device Management'].map((s,i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-black font-bold text-xs flex items-center justify-center flex-shrink-0">{i+1}</span>{s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
          <p className="text-sm text-yellow-400/70 leading-relaxed">
            <strong className="text-yellow-400">Notice:</strong> SpotiFLAC Mobile is for personal use only. Only download music you have the rights to access. Not affiliated with Spotify AB. See our <Link href="/disclaimer" className="underline hover:text-yellow-300">Disclaimer</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
