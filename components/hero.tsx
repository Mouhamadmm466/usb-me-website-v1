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
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10 sm:px-8 sm:pt-28 md:pt-32">
        <p className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          Runs locally on iPhone with NVIDIA Nemotron
        </p>

        <h1 className="max-w-4xl text-balance font-serif text-[2.6rem] font-light leading-[1.04] tracking-[-0.02em] sm:text-6xl md:text-[4.4rem]">
          A personal intelligence that lives on your phone and belongs to you.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Not another chatbot in the cloud. An intelligence that{' '}
          <span className="text-foreground">
            {typed}
            <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-foreground align-middle animate-pulse" />
          </span>
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#download"
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Kin
          </a>
          <a
            href="#how"
            className="rounded-full border border-border bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <figure className="grain relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-border bg-card">
          <Image
            src="/images/hero.png"
            alt="A person in low light holding a phone, its screen faintly lighting their face"
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover grayscale"
          />
        </figure>
      </div>
    </section>
  )
}
