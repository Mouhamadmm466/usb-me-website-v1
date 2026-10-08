import { MaskText } from '@/components/mask-text'
import { ParallaxImage } from '@/components/parallax-image'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const stack = [
  { label: 'Your memory', note: 'people, projects, decisions' },
  { label: 'The agent', note: 'thinking and planning' },
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
    <section id="device" className="border-t section-y">
      <div className="col-wide gutter grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <div className="md:sticky md:top-28">
          <ParallaxImage
            src="/images/device.png"
            alt="A hand holding a phone in soft directional light"
            sizes="(max-width: 768px) 100vw, 560px"
            className="surface aspect-[4/5] w-full rounded-[4px]"
          />
          </div>
        </Reveal>

        <div className="md:col-span-6">
          <Reveal>
            <SectionLabel>Your phone</SectionLabel>
          </Reveal>
          <MaskText
            className="display mt-6 max-w-[34ch]"
            delay={80}
          >
            The internet is a tool it picks up, not a place it lives.
          </MaskText>
          <Reveal delay={200}>
            <p className="mt-6 max-w-[46ch] lead">
              The model, the memory and the thinking all sit on your phone. Most
              of what you ask never needs a connection. When something truly
              does, like sending an email, it reaches out for that one step and
              comes straight back.
            </p>
          </Reveal>

          <Reveal delay={90} className="surface surface-lift mt-10 rounded-[4px] p-6 sm:p-7">
            <p className="label">your phone</p>
            <ul className="mt-4">
              {stack.map((s) => (
                <li
                  key={s.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-3 last:border-b-0"
                >
                  <span className="text-[17px] tracking-[-0.02em] text-foreground">
                    {s.label}
                  </span>
                  <span className="text-[14px] text-muted-foreground">
                    {s.note}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 border-t pt-4">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: 'var(--signal)' }}
              />
              <span className="text-[14px] text-muted-foreground">
                Nothing above this line needs a network.
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <p className="text-[15px] text-foreground">
              In airplane mode, all of this still works.
            </p>
            <ul className="mt-4 space-y-2.5">
              {offline.map((q) => (
                <li
                  key={q}
                  className="text-[17px] leading-snug tracking-[-0.02em] text-muted-foreground"
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
