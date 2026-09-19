'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const phrases = [
  'reasons about your goals',
  'remembers what matters',
  'gets ready for your day',
  'works even when you are offline',
]

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const done = !deleting && text === current
    const cleared = deleting && text === ''

    const delay = done ? 1800 : deleting ? 34 : 58

    const timeout = setTimeout(() => {
      if (done) {
        setDeleting(true)
        return
      }
      if (cleared) {
        setDeleting(false)
        setIndex((i) => i + 1)
        return
      }
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(phrases)

  return (
    <section id="top" className="atmosphere relative overflow-hidden">
      {/* Faint atmospheric landscape blended into the gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] opacity-70">
        <Image
          src="/images/sky.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom [mask-image:linear-gradient(to_bottom,transparent,black_55%)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-12 text-center sm:px-8 sm:pt-28 md:pt-32">
        <p className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3.5 py-1.5 text-sm text-foreground/80 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_1px_var(--sky)]" />
          Runs locally on iPhone with NVIDIA Nemotron
        </p>

        <h1 className="mx-auto max-w-4xl text-balance font-serif text-[2.6rem] font-light leading-[1.04] tracking-[-0.02em] sm:text-6xl md:text-[4.4rem]">
          A personal intelligence that lives on your phone and belongs to you.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Not another chatbot in the cloud. An intelligence that{' '}
          <span className="text-foreground">
            {typed}
            <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-primary align-middle animate-pulse" />
          </span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#download"
            className="btn-sky rounded-full px-6 py-3 text-sm transition-colors"
          >
            Get Kin for iPhone
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/70 bg-white/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-white/80"
          >
            See how it works
          </a>
        </div>

        {/* Signature: glassmorphic Kin app window floating in the atmosphere */}
        <div className="mx-auto mt-16 max-w-3xl">
          <AppWindow typed={typed} />
        </div>
      </div>
    </section>
  )
}

function AppWindow({ typed }: { typed: string }) {
  return (
    <div className="glass overflow-hidden rounded-2xl text-left">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-foreground/15" />
        <span className="h-3 w-3 rounded-full bg-foreground/15" />
        <span className="h-3 w-3 rounded-full bg-foreground/15" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Kin — on device
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          offline
        </span>
      </div>

      <div className="grid gap-px bg-white/40 sm:grid-cols-[1.3fr_1fr]">
        {/* conversation */}
        <div className="flex flex-col gap-4 bg-white/40 p-6">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/70 px-4 py-2.5 text-[14px] text-foreground">
            Get me ready for my meeting with Sarah tomorrow.
          </div>
          <div className="max-w-[92%] self-end rounded-2xl rounded-tr-sm bg-gradient-to-b from-[oklch(0.66_0.15_254)] to-[oklch(0.57_0.18_262)] px-4 py-2.5 text-[14px] text-primary-foreground shadow-[0_10px_24px_-12px_oklch(0.55_0.18_262/0.6)]">
            Pulling the Mobile App workspace, open commitments, and the last
            decisions you made together.
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[11px] text-muted-foreground">
              reasoning · {typed || 'working'}
            </span>
          </div>
        </div>

        {/* assist rail */}
        <div className="flex flex-col gap-3 bg-white/25 p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Brief
          </p>
          <ul className="space-y-2.5 text-[13px] text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              Beta deadline is Oct 20 — 3 tasks still open
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              You promised Sarah the benchmark numbers
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              Draft agenda saved to the workspace
            </li>
          </ul>
          <div className="mt-auto flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3 py-2 text-[12px] text-muted-foreground">
            Ask about your day
            <span className="ml-auto rounded-md bg-foreground/10 px-1.5 py-0.5 font-mono text-[10px]">
              ⌘↵
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
