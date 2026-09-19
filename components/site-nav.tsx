'use client'

import { useState } from 'react'
import { Wordmark } from '@/components/wordmark'

const links = [
  { label: 'How it works', href: '#how' },
  { label: 'Memory', href: '#memory' },
  { label: 'Local-first', href: '#local' },
  { label: 'Privacy', href: '#privacy' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="Kin home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#privacy"
            className="rounded-full px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Request access
          </a>
          <a
            href="#download"
            className="btn-sky rounded-full px-4 py-2 text-sm transition-colors"
          >
            Get Kin
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/40 bg-background/80 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="btn-sky inline-flex rounded-full px-4 py-2 text-sm"
              >
                Get Kin
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
