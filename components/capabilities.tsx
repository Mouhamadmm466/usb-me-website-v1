import { SectionLabel } from '@/components/section-label'

const pillars = [
  {
    k: '01',
    title: 'Understands & remembers',
    body: 'Projects, people, goals, documents, decisions, and commitments — kept as structured context, so you never explain your life again each time you open the app.',
  },
  {
    k: '02',
    title: 'Works from goals, not commands',
    body: '“Have this ready for a demo next Wednesday.” Kin inspects the project, weighs the deadline against your free time, and builds the plan to get there.',
  },
  {
    k: '03',
    title: 'Does the work',
    body: '“Get me ready for my meeting with Sarah.” It gathers the project, checks open commitments, searches when needed, and returns a brief — real work, not just a reply.',
  },
  {
    k: '04',
    title: 'Creates the artifact',
    body: '“Research this and prepare something I can read tonight.” It organizes the findings, writes the document, and saves the result for you.',
  },
]

export function Capabilities() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-[oklch(0.94_0.04_240)] to-background">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="max-w-3xl">
          <SectionLabel>What it does</SectionLabel>
          <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl md:text-[2.9rem]">
            More than a chatbot. Conversation is only the interface.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            You talk to Kin naturally, but the point is the work it does behind
            the words — understanding, reasoning, planning, and taking action
            across the parts of your world you choose to share.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.k}
              className="glass-panel flex flex-col gap-4 rounded-2xl p-8 md:p-10"
            >
              <span className="font-mono text-xs tracking-widest text-sky-accent">
                {p.k}
              </span>
              <h3 className="font-serif text-2xl font-normal leading-snug">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
