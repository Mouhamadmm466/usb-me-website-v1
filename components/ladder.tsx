import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

/**
 * The rungs escalate — command, request, goal — so the numbering is real
 * information about how much reasoning each one asks for.
 */
const rungs = [
  {
    kind: 'A command',
    said: 'Text Abdou that I am running ten minutes late.',
    does: 'The things you already expect from a phone. Calls, messages, reminders, calendar, contacts, files. It just does them.',
  },
  {
    kind: 'A request',
    said: 'Get me ready for my meeting with Sarah.',
    does: 'It works out which Sarah, which project and which meeting, pulls what is still open between you, searches where it has to, and hands you a brief.',
  },
  {
    kind: 'A goal',
    said: 'I want this project ready by Friday.',
    does: 'It reasons about what has to happen, builds a plan, finds what is missing, and tells you what to start with this morning.',
  },
]

export function Ladder() {
  return (
    <section id="work" className="rail rail-edges py-24 md:py-32">
      <div className="px-5 sm:px-10">
        <Reveal>
          <SectionLabel>What it does</SectionLabel>
          <h2 className="display-sm mt-7 max-w-[20ch] text-[clamp(2rem,4.6vw,3.4rem)]">
            Conversation is only the surface.
          </h2>
          <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.6] text-muted-foreground">
            You speak to it the way you would speak to a person. What matters is
            how much of the thinking it can take off your hands — and that scales
            with how much you hand it.
          </p>
        </Reveal>

        <ol className="mt-16">
          {rungs.map((r, i) => (
            <Reveal
              as="li"
              key={r.kind}
              delay={i * 70}
              className="grid gap-5 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-4">
                <span className="readout">{r.kind}</span>
                <p className="mt-3 max-w-[26ch] text-[21px] leading-[1.3] tracking-[-0.02em] text-foreground">
                  “{r.said}”
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="max-w-[56ch] text-[17px] leading-[1.6] text-muted-foreground">
                  {r.does}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
