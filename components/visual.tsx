'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

/**
 * The page's visual anchors. Full band width, deep greyscale, and the mark
 * sitting in the middle of the first one. These carry the weight that the
 * old bordered panels were trying and failing to carry.
 */
export function Visual({
  src,
  alt,
  className,
  height = 'h-[320px] sm:h-[420px] md:h-[520px]',
  mark,
  priority,
  caption,
}: {
  src: string
  alt: string
  className?: string
  height?: string
  mark?: boolean
  priority?: boolean
  caption?: string
}) {
  const reduced = useReducedMotion()
  const frame = useRef<HTMLDivElement | null>(null)
  const inner = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (reduced) return
    let raf = 0
    const update = () => {
      raf = 0
      const f = frame.current
      const el = inner.current
      if (!f || !el) return
      const r = f.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) return
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
      el.style.transform = `translate3d(0, ${(-offset * 48).toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced])

  return (
    <figure className={cn('band gutter', className)}>
      <div
        ref={frame}
        className={cn('relative w-full overflow-hidden rounded-[4px]', height)}
        style={{ background: '#111' }}
      >
        <div ref={inner} className="absolute will-change-transform" style={{ inset: '-48px 0' }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1136px) 100vw, 1136px"
            priority={priority}
            className="object-cover"
            style={{ filter: 'grayscale(1) contrast(1.12) brightness(0.92)' }}
          />
        </div>

        {mark && (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg width="86" height="46" viewBox="0 0 26 14" fill="none">
              <rect
                x="0.6" y="0.6" width="24.8" height="12.8" rx="6.4"
                stroke="#fff" strokeWidth="1"
              />
              <rect x="5" y="5" width="16" height="4" rx="2" fill="#fff" />
            </svg>
          </span>
        )}
      </div>
      {caption && <figcaption className="label mt-3">{caption}</figcaption>}
    </figure>
  )
}
