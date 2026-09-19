import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'

const stack = [
  { label: 'Personal Intelligence', note: 'you' },
  { label: 'Nemotron', note: 'on-device model' },
  { label: 'Memory · Goals · Projects', note: 'your context' },
  { label: 'Agent', note: 'reasoning & planning' },
  { label: 'Capabilities', note: 'local + online tools' },
]

const offline = [
  'What did we decide about the project?',
  'Summarize this downloaded document.',
  'Help me plan tomorrow.',
  'What do I still need to do before Friday?',
]

export function LocalFirst() {
  return (
    <section id="local" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <figure className="grain relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-background">
              <Image
                src="/images/device.png"
                alt="A hand holding a phone in soft directional light"
                fill
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover grayscale"
              />
            </figure>
          </div>

          <div className="order-1 md:order-2">
            <SectionLabel>Local-first</SectionLabel>
            <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl md:text-[2.9rem]">
              The intelligence stays on the device. The internet is just a tool.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Inference, memory, context, and reasoning all live on your phone.
              Most requests never need a connection — and when a task truly does,
              Kin reaches out for that one step and comes back home.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Your phone
              </p>
              <ol>
                {stack.map((s, i) => (
                  <li key={s.label}>
                    <div className="flex items-baseline justify-between gap-4 py-1.5">
                      <span className="font-serif text-lg">{s.label}</span>
                      <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                        {s.note}
                      </span>
                    </div>
                    {i < stack.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="ml-1 h-3 w-px bg-border"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 mb-3 text-sm text-muted-foreground">
              Works with no internet connection:
            </p>
            <ul className="space-y-2">
              {offline.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 text-[15px] text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50"
                  />
                  <span className="font-serif italic text-muted-foreground">
                    “{q}”
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
