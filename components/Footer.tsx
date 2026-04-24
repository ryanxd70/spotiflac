import Link from 'next/link'

const cols = [
  { title: 'Product', links: [{ href: '/features', label: 'Features' }, { href: '/download', label: 'Download' }, { href: '/about', label: 'About' }] },
  { title: 'Legal', links: [{ href: '/privacy-policy', label: 'Privacy Policy' }, { href: '/disclaimer', label: 'Disclaimer' }] },
  { title: 'Support', links: [{ href: '/contact', label: 'Contact Us' }, { href: '/faq', label: 'FAQ' }] },
]

export default function Footer() {
  return (
    <footer className="border-t border-green-500/10 mt-24 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="#050a06"/>
                </svg>
              </div>
              <span style={{fontFamily:'var(--font-display)'}} className="font-bold text-lg text-green-400">SpotiFLAC</span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[200px]">
              Lossless music downloader for Android and iOS. Free and open source.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-green-500 mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-green-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} SpotiFLAC Mobile. Open-source project.</p>
          <p className="text-xs text-[var(--muted)]">Not affiliated with Spotify AB. For personal use only.</p>
        </div>
      </div>
    </footer>
  )
}
