'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const modes = [
  {
    name: 'Local only',
    body: 'usb-me cannot touch the network at all. Every answer is reasoned out on your phone, from what is already there.',
    tools: false,
  },
  {
    name: 'Ask first',
    body: 'It works locally until a task genuinely needs the outside world, then stops and asks you before it reaches out.',
    tools: true,
  },
  {
    name: 'Connected',
    body: 'It uses the services you have connected, inside the permissions you gave each one, without asking every time.',
    tools: true,
  },
]

const tools = [
  'Calendar',
  'Reminders',
  'Contacts',
  'Files',
  'Mail',
  'Drive',
  'GitHub',
  'Slack',
  'Web search',
]

export function Control() {
  const [mode, setMode] = useState(1)
  const active = modes[mode]

  return (
    <section id="control" className="border-y border-line bg-panel">
      <div className="rail py-24 md:py-32">
        <div className="grid gap-14 px-5 sm:px-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <SectionLabel>Control</SectionLabel>
            <h2 className="display-sm mt-7 max-w-[18ch] text-[clamp(2rem,4.6vw,3.4rem)]">
              You decide how far it can reach.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.6] text-muted-foreground">
              We are not going to claim nothing ever leaves your phone. Sending
              an email means sending an email. What we will promise is that only
              the part a task actually needs ever goes out, and that your
              memory never travels just because one tool wanted the internet.
            </p>
            <p className="mt-5 max-w-[48ch] text-[18px] leading-[1.6] text-foreground">
              Before it does anything that touches another person, it asks.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line bg-background">
              <div
                role="radiogroup"
                aria-label="Network mode"
                className="grid grid-cols-3 border-b border-line"
              >
                {modes.map((m, i) => (
                  <button
                    key={m.name}
                    type="button"
                    role="radio"
                    aria-checked={mode === i}
                    onClick={() => setMode(i)}
                    className="relative px-3 py-4 text-[14px] transition-colors duration-200 sm:text-[15px]"
                    style={{
                      color:
                        mode === i ? 'var(--foreground)' : 'var(--muted-foreground)',
                      borderLeft: i > 0 ? '1px solid var(--line)' : undefined,
                      background: mode === i ? 'var(--panel)' : 'transparent',
                    }}
                  >
                    {m.name}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-200"
                      style={{
                        background: 'var(--signal)',
                        opacity: mode === i ? 1 : 0,
                      }}
                    />
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8">
                <p className="min-h-[5.5rem] max-w-[52ch] text-[17px] leading-[1.6] text-foreground">
                  {active.body}
                </p>

                <div className="mt-7 border-t border-line pt-6">
                  <p className="readout">connected tools</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2.5 py-1 text-[14px] transition-all duration-300"
                        style={{
                          borderColor: active.tools
                            ? 'var(--line)'
                            : 'var(--line-soft)',
                          color: active.tools
                            ? 'var(--foreground)'
                            : 'var(--muted-foreground)',
                          opacity: active.tools ? 1 : 0.4,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {!active.tools && (
                    <p className="mt-4 text-[14px] text-muted-foreground">
                      All unreachable while local only is on.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
