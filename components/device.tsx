import { MaskText } from '@/components/mask-text'
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
    <section id="device" className="section-y">
      <div className="band gutter">
        <Reveal className="prose-col">
          <SectionLabel>On your phone</SectionLabel>
        </Reveal>
        <div className="prose-col">
          <MaskText className="display mt-3 max-w-[34ch]" delay={60}>
            The internet is a tool it picks up, not a place it lives.
          </MaskText>
          <Reveal delay={180}>
            <p className="mt-5 lead">
              The model, the memory and the thinking all sit on your phone. Most
              of what you ask never needs a connection. When something truly
              does, like sending an email, it reaches out for that one step and
              comes straight back.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8">
            <p className="label">what lives on the device</p>
            <dl className="mt-4">
              {stack.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-3 last:border-b-0"
                >
                  <dt className="text-[15px] font-medium">{s.label}</dt>
                  <dd className="body-sm">{s.note}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={300} className="mt-8">
            <p className="text-[15px] font-medium">
              In airplane mode, all of this still works.
            </p>
            <ul className="mt-3 space-y-2">
              {offline.map((q) => (
                <li
                  key={q}
                  className="text-[16px] leading-snug"
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    color: 'var(--strong)',
                  }}
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
