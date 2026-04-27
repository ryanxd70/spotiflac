'use client'
import { useState } from 'react'

interface Item { q: string; a: string }
interface Props { items: Item[] }

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-green-500/10 rounded-xl overflow-hidden hover:border-green-500/20 transition-colors"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-start gap-4 px-6 py-4 text-left hover:bg-green-500/5 transition-colors"
            aria-expanded={open === i}
          >
            <span
              className="font-semibold text-[var(--text)] text-sm leading-snug pt-0.5"
              style={{fontFamily:'var(--font-display)'}}
              itemProp="name"
            >
              {item.q}
            </span>
            <svg
              width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#22c55e" strokeWidth="2"
              className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M5 7.5l5 5 5-5"/>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              className="px-6 pb-5 pt-1 text-sm text-[var(--muted)] leading-relaxed border-t border-green-500/8"
              itemProp="text"
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
