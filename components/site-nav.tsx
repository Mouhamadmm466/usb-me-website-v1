'use client'

import { useState } from 'react'
import { Wordmark } from '@/components/wordmark'

const links = [
  { label: 'What it does', href: '#work' },
  { label: 'How it works', href: '#how' },
  { label: 'Memory', href: '#memory' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Control', href: '#control' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: 'var(--paper)' }}
    >
      <nav className="col-wide gutter">
        <div className="flex h-[70px] items-center justify-between gap-6">
          <a href="#top" aria-label="usb-me home" className="shrink-0">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex rounded-[4px] px-2 py-3 text-[15px] transition-colors duration-300"
                  style={{ color: 'var(--strong)' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#access" className="btn btn-solid hidden md:inline-flex">
            Get early access
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            style={{ background: 'var(--panel-hi)' }}
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className="block h-px w-4 transition-transform duration-300"
                style={{
                  background: 'var(--foreground)',
                  transform: open ? 'translateY(3px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-px w-4 transition-transform duration-300"
                style={{
                  background: 'var(--foreground)',
                  transform: open ? 'translateY(-3px) rotate(-45deg)' : 'none',
                }}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className="overflow-hidden md:hidden"
        style={{
          maxHeight: open ? 340 : 0,
          transition: 'max-height 500ms var(--ease-out)',
        }}
      >
        <ul className="col-wide gutter flex flex-col pb-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px]"
                style={{ color: 'var(--strong)' }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#access"
              onClick={() => setOpen(false)}
              className="btn btn-solid inline-flex self-start"
            >
              Get early access
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
