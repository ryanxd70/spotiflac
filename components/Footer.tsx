import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-green-500/10 mt-24 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <img
                src="/logo.png"
                alt="SpotiFLAC Mobile logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span style={{fontFamily:'var(--font-display)'}} className="font-bold text-lg text-green-400">SpotiFLAC</span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[200px]">
              Free lossless music downloader for Android and iOS. Open source.
            </p>
          </div>

          <div>
            <h4 className="section-label">App</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/#features" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">FAQ</Link></li>
              <li><Link href="/download" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-label">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-label">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy-policy" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} SpotiFLAC Mobile · <a href="https://spotiflac.app" className="hover:text-green-400 transition-colors">spotiflac.app</a></p>
          <p className="text-xs text-[var(--muted)] text-center md:text-right">Not affiliated with Spotify AB. For personal use only. Respect copyright laws.</p>
        </div>
      </div>
    </footer>
  )
}
