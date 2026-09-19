import { SectionLabel } from '@/components/section-label'

const entities = [
  'People',
  'Projects',
  'Goals',
  'Tasks',
  'Documents',
  'Decisions',
  'Commitments',
  'Preferences',
  'Events',
  'Relationships',
  'Conversations',
]

const chain = [
  { node: 'Sarah', rel: 'works on' },
  { node: 'Mobile App', rel: 'has goal' },
  { node: 'Launch Beta', rel: 'deadline' },
  { node: 'October 20', rel: null },
]

export function Memory() {
  return (
    <section
      id="memory"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel>Personal memory</SectionLabel>
          <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl md:text-[2.9rem]">
            It knows how things connect — not just what you said.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Kin keeps a structured understanding of your world instead of a long
            chat history. Entities link to one another, so it can reason about
            relationships rather than treat everything as isolated text.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {entities.map((e) => (
              <span
                key={e}
                className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm"
              >
                {e}
              </span>
            ))}
          </div>

          <p className="mt-8 text-[15px] leading-relaxed text-muted-foreground">
            You can inspect, correct, or delete anything it knows. The
            intelligence grows with you — no long profile to fill out.
          </p>
        </div>

        {/* Signature: typographic knowledge graph on glass */}
        <div className="glass relative overflow-hidden rounded-2xl p-7 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,var(--sky)_0%,transparent_70%)] opacity-50 blur-2xl"
          />
          <p className="relative mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            A fragment of your graph
          </p>
          <ol className="relative space-y-0">
            {chain.map((step) => (
              <li key={step.node}>
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-primary shadow-[0_0_10px_1px_var(--sky)]"
                  />
                  <span className="font-serif text-xl">{step.node}</span>
                </div>
                {step.rel && (
                  <div className="ml-[3px] flex items-stretch gap-4">
                    <span
                      aria-hidden="true"
                      className="my-1 block w-px bg-primary/40"
                    />
                    <span className="py-1.5 font-mono text-xs italic tracking-wide text-muted-foreground">
                      {step.rel}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
