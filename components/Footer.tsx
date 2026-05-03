import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/spotiflac',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/spotiflacapp',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/spotiflac',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/spotiflac/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/spotiflacapp/SpotiFLAC-Mobile',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-green-500/10 mt-24 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <Image src="/logo.png" alt="SpotiFLAC Mobile logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
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
              <li><Link href="/privacy-policy" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-label">Community</h4>
            <ul className="space-y-2.5">
              {socialLinks.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="opacity-70">{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
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
