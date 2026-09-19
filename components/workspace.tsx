import { SectionLabel } from '@/components/section-label'

const tasks = [
  { label: 'Local inference', done: true },
  { label: 'Voice pipeline', done: true },
  { label: 'Device testing', done: false },
  { label: 'TestFlight release', done: false },
]

const decisions = ['Use Nemotron 3 Nano', 'Keep personal intelligence local']

const activity = [
  'Updated benchmark',
  'Finished memory system',
  'Created launch plan',
]

export function Workspace() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="max-w-3xl">
        <SectionLabel>Workspaces</SectionLabel>
        <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl md:text-[2.9rem]">
          It feels like an intelligence doing work — not a folder of chats.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Important goals get their own workspace: the people, artifacts, open
          tasks, decisions, and recent progress, all held together so Kin
          always knows where things stand.
        </p>
      </div>

      <div className="glass mt-14 overflow-hidden rounded-2xl">
        <div className="flex flex-col gap-4 border-b border-white/50 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-sky-accent">
              Workspace
            </p>
            <h3 className="mt-2 font-serif text-3xl font-light">
              Launch Mobile App
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Goal — Beta by October 20
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-serif text-4xl font-light text-sky-accent">72%</p>
            <p className="text-sm text-muted-foreground">Progress</p>
          </div>
        </div>

        <div className="grid gap-px bg-white/40 sm:grid-cols-3">
          <div className="bg-white/35 p-7 sm:p-9">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Tasks
            </p>
            <ul className="space-y-2.5">
              {tasks.map((t) => (
                <li key={t.label} className="flex items-center gap-3 text-[15px]">
                  <span
                    aria-hidden="true"
                    className={
                      t.done
                        ? 'flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'
                        : 'h-4 w-4 rounded-full border border-primary/40'
                    }
                  >
                    {t.done ? '✓' : ''}
                  </span>
                  <span
                    className={
                      t.done ? 'text-muted-foreground line-through' : 'text-foreground'
                    }
                  >
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/35 p-7 sm:p-9">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Decisions
            </p>
            <ul className="space-y-3">
              {decisions.map((d) => (
                <li
                  key={d}
                  className="font-serif text-[17px] italic leading-snug text-foreground"
                >
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              People
            </p>
            <p className="text-[15px] text-muted-foreground">Sarah · Abdou</p>
          </div>

          <div className="bg-white/35 p-7 sm:p-9">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Recent activity
            </p>
            <ul className="space-y-3">
              {activity.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                  />
                  <span className="text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
