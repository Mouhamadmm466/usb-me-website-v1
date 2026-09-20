'use client'

import { useEffect, useState } from 'react'
import { Wordmark } from '@/components/wordmark'

const links = [
  { label: 'What it does', href: '#work' },
  { label: 'Memory', href: '#memory' },
  { label: 'On device', href: '#device' },
  { label: 'Control', href: '#control' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-colors duration-300"
      style={{ borderBottom: `1px solid ${lifted ? 'var(--line)' : 'transparent'}` }}
    >
      <nav className="rail">
        <div className="flex h-[72px] items-center justify-between gap-6 px-5 sm:px-10">
          <a href="#top" aria-label="usb-me home" className="shrink-0">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#access"
            className="hidden rounded-lg bg-foreground px-4 py-2 text-[14px] font-medium text-background transition-transform duration-200 hover:-translate-y-px md:inline-flex"
          >
            Get early access
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line md:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line md:hidden">
          <ul className="rail flex flex-col px-5 py-3 sm:px-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#access"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-lg bg-foreground px-4 py-2.5 text-[15px] font-medium text-background"
              >
                Get early access
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
