'use client'
import { useState } from 'react'

interface Item { q: string; a: string }

interface Props { items: Item[] }

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-green-500/10 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-green-500/5 transition-colors"
          >
            <span style={{fontFamily:'var(--font-display)'}} className="font-semibold text-[var(--text)]">{item.q}</span>
            <svg
              width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#22c55e" strokeWidth="2"
              className={`flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            >
              <path d="M5 7.5l5 5 5-5"/>
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed border-t border-green-500/10 pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
