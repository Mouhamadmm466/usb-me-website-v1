import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const stack = [
  { label: 'Your memory', note: 'people, projects, decisions' },
  { label: 'The agent', note: 'reasoning and planning' },
  { label: 'Nemotron', note: 'the model, on your chip' },
]

const offline = [
  'What did we decide about the architecture?',
  'Summarise the document I saved last night.',
  'What do I still owe people before Friday?',
  'I have two hours. What should I work on?',
]

export function Device() {
  return (
    <section id="device" className="rail rail-edges py-24 md:py-32">
      <div className="grid gap-14 px-5 sm:px-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-6">
          <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-panel md:sticky md:top-28">
            <Image
              src="/images/device.png"
              alt="A hand holding a phone in soft directional light"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
              style={{ filter: 'saturate(0.82) contrast(1.03)' }}
            />
          </figure>
        </Reveal>

        <div className="md:col-span-6">
          <Reveal>
            <SectionLabel>On the device</SectionLabel>
            <h2 className="display-sm mt-7 max-w-[18ch] text-[clamp(2rem,4.6vw,3.4rem)]">
              The internet is a tool it picks up, not a place it lives.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.6] text-muted-foreground">
              The model, the memory and the reasoning all sit on your phone.
              Most of what you ask never needs a connection. When a task truly
              does — sending an email, searching the web — it reaches out for
              that one step and comes straight back.
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-10 rounded-xl border border-line bg-panel p-6 sm:p-7">
            <p className="readout">your phone</p>
            <ul className="mt-4 divide-y divide-line">
              {stack.map((s) => (
                <li
                  key={s.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-[17px] tracking-[-0.015em] text-foreground">
                    {s.label}
                  </span>
                  <span className="text-[14px] text-muted-foreground">
                    {s.note}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
              />
              <span className="text-[14px] text-muted-foreground">
                Nothing above this line needs a network.
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <p className="text-[15px] text-foreground">
              In aeroplane mode, all of this still works:
            </p>
            <ul className="mt-4 space-y-2.5">
              {offline.map((q) => (
                <li
                  key={q}
                  className="text-[17px] leading-snug tracking-[-0.015em] text-muted-foreground"
                >
                  “{q}”
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
