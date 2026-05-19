'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '/',             label: 'Home',        section: false },
  { href: '/#features',   label: 'Features',    section: true  },
  { href: '/#how-it-works', label: 'How It Works', section: true },
  { href: '/#faq',        label: 'FAQ',         section: true  },
  { href: '/download',    label: 'Download',    section: false },
  { href: '/pc',          label: 'For PC',      section: false },
  { href: '/about',       label: 'About',       section: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: boolean) => {
    if (section && pathname === '/') {
      e.preventDefault()
      const id = href.split('#')[1]
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.png" alt="SpotiFLAC Mobile logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
          <span style={{fontFamily:'var(--font-display)'}} className="font-bold text-lg text-green-400">SpotiFLAC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={e => handleNav(e, l.href, l.section)}
              className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors duration-200 whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-green-400 p-2" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-green-500/10 px-6 py-4 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={e => handleNav(e, l.href, l.section)}
              className="block text-sm text-[var(--muted)] hover:text-green-400 py-2.5 border-b border-green-500/5 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
