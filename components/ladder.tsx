import { MaskText } from '@/components/mask-text'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const rungs = [
  {
    kind: 'A command',
    said: 'Text Abdou that I am running ten minutes late.',
    does: 'The things you already expect from a phone. Calls, messages, reminders, calendar, contacts, files. It just does them.',
  },
  {
    kind: 'A request',
    said: 'Get me ready for my meeting with Sarah.',
    does: 'It works out which Sarah, which project, which meeting. It pulls what is still open between you, searches when it has to, and hands you a brief.',
  },
  {
    kind: 'A goal',
    said: 'I want this project ready by Friday.',
    does: 'It works out what has to happen, builds a plan, finds what is missing, and tells you what to start with this morning.',
  },
  {
    kind: 'A question',
    said: 'Where did we leave off?',
    does: 'It reads back its own understanding of your world, so you can check it, correct it, or delete what it got wrong.',
  },
]

export function Ladder() {
  return (
    <section id="work" className="section-y">
      <div className="band gutter">
        <Reveal className="prose-col">
          <SectionLabel>What it does</SectionLabel>
        </Reveal>
        <div className="prose-col">
          <MaskText className="display mt-3 max-w-[34ch]" delay={60}>
            Talking is only the surface.
          </MaskText>
          <Reveal delay={180}>
            <p className="mt-5 lead">
              You speak to it the way you speak to a person. What matters is how
              much of the thinking it takes off your hands, and that grows with
              how much you hand it.
            </p>
            <p className="mt-5 lead">It answers to all of these.</p>
          </Reveal>
        </div>

        <Reveal delay={240} className="prose-col mt-10">
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {rungs.map((r) => (
              <li key={r.kind} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 h-8 w-8 shrink-0 rounded-[3px]"
                  style={{ background: 'var(--ink)' }}
                />
                <div>
                  <p className="label">{r.kind}</p>
                  <p className="mt-1.5 text-[15px] font-medium leading-snug">
                    “{r.said}”
                  </p>
                  <p className="body-sm mt-2">{r.does}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
