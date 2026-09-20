'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const SPOKEN =
  'I need to meet Sarah before our demo. Find us a good time and get me ready.'

const STEPS = [
  {
    head: 'Found Sarah Okonkwo',
    body: 'Works with you on the Nemotron benchmark. Last spoke Tuesday.',
  },
  {
    head: 'Located the demo',
    body: 'Thursday, 9:00 AM. Investor walkthrough, 30 minutes.',
  },
  {
    head: 'Both of you are free Wednesday, 4:30 PM',
    body: 'Only slot before the demo that clears your focus block.',
  },
  {
    head: 'Wrote your brief',
    body: 'Three open decisions, two blockers, and what changed since Tuesday.',
  },
  {
    head: 'Waiting on you',
    body: 'Sarah has not been messaged. Nothing leaves the phone until you say so.',
    pending: true,
  },
]

const BARS = 24

type Phase = 'listening' | 'working' | 'settled'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

export function Trace() {
  const reduced = usePrefersReducedMotion()
  const [phase, setPhase] = useState<Phase>('listening')
  const [typed, setTyped] = useState(0)
  const [revealed, setRevealed] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const seeds = useMemo(
    () =>
      Array.from({ length: BARS }, (_, i) => ({
        delay: (i * 137) % 900,
        peak: 0.28 + Math.abs(Math.sin(i * 1.7)) * 0.72,
      })),
    [],
  )

  useEffect(() => {
    if (reduced) {
      setPhase('settled')
      setTyped(SPOKEN.length)
      setRevealed(STEPS.length)
      return
    }

    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms)
        timers.current.push(t)
      })

    const run = async () => {
      while (!cancelled) {
        setPhase('listening')
        setRevealed(0)
        setTyped(0)
        for (let i = 1; i <= SPOKEN.length; i++) {
          if (cancelled) return
          setTyped(i)
          await wait(SPOKEN[i - 1] === ' ' ? 46 : 26)
        }
        await wait(500)
        if (cancelled) return
        setPhase('working')
        for (let i = 1; i <= STEPS.length; i++) {
          await wait(i === 1 ? 700 : 900)
          if (cancelled) return
          setRevealed(i)
        }
        setPhase('settled')
        await wait(6500)
      }
    }
    run()

    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [reduced])

  const listening = phase === 'listening'

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      {/* Spoken input */}
      <div className="flex flex-col gap-5 border-b border-line px-6 py-6 sm:flex-row sm:items-center sm:gap-7 sm:px-8">
        <div
          aria-hidden="true"
          className="flex h-8 w-[117px] shrink-0 items-center gap-[3px]"
        >
          {seeds.map((s, i) => (
            <span
              key={i}
              className={listening ? 'voice-bar' : ''}
              style={{
                display: 'block',
                flex: '0 0 2px',
                width: 2,
                height: `${Math.round(s.peak * 30)}px`,
                borderRadius: 2,
                background: listening ? 'var(--signal)' : 'var(--line)',
                transform: listening ? undefined : 'scaleY(0.12)',
                transition: 'background 400ms ease, transform 400ms ease',
                animationDelay: `${s.delay}ms`,
              }}
            />
          ))}
        </div>

        <p className="min-h-[3.25rem] text-[17px] leading-snug text-foreground sm:min-h-0">
          <span className="sr-only">You said: </span>
          {SPOKEN.slice(0, typed)}
          {listening && (
            <span
              aria-hidden="true"
              className="caret ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.16em] bg-signal align-middle"
            />
          )}
        </p>
      </div>

      {/* What it actually did */}
      <ol className="divide-y divide-line">
        {STEPS.map((step, i) => {
          const on = i < revealed
          return (
            <li
              key={step.head}
              className="flex items-start gap-4 px-6 py-4 transition-opacity duration-500 sm:px-8"
              style={{ opacity: on ? 1 : 0.18 }}
            >
              <span
                aria-hidden="true"
                className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition-colors duration-500"
                style={{
                  borderColor: on
                    ? step.pending
                      ? 'var(--signal)'
                      : 'var(--foreground)'
                    : 'var(--line)',
                  background:
                    on && !step.pending ? 'var(--foreground)' : 'transparent',
                }}
              >
                {on && !step.pending && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.6L3.3 6 8 1"
                      stroke="var(--background)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {on && step.pending && (
                  <span
                    className="h-[6px] w-[6px] rounded-full"
                    style={{ background: 'var(--signal)' }}
                  />
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] leading-snug text-foreground">
                  {step.head}
                </span>
                <span className="mt-1 block text-[14px] leading-snug text-muted-foreground">
                  {step.body}
                </span>
              </span>
            </li>
          )
        })}
      </ol>

      <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-3 sm:px-8">
        <span className="readout">
          {phase === 'listening'
            ? 'listening'
            : phase === 'working'
              ? 'reasoning on device'
              : 'idle'}
        </span>
        <span className="readout">no network used</span>
      </div>
    </div>
  )
}
