import { Counter } from '@/components/counter'
import { MaskText } from '@/components/mask-text'
import { ProgressBar } from '@/components/progress-bar'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const tasks = [
  { label: 'Nemotron port', done: true },
  { label: 'Memory store', done: true },
  { label: 'Local inference', done: true },
  { label: 'Voice pipeline', done: true },
  { label: 'Testing on device', done: false },
  { label: 'TestFlight build', done: false },
]

const decisions = [
  { text: 'Use Nemotron Nano', when: '2 Sep' },
  { text: 'Keep all memory on the phone', when: '28 Aug' },
]

const activity = [
  { text: 'Latency results updated', when: 'Tue' },
  { text: 'Memory system finished', when: 'Mon' },
  { text: 'Launch plan drafted', when: 'Last week' },
]

export function Workspace() {
  return (
    <section className="border-t section-y">
      <div className="col-wide gutter">
        <Reveal>
          <SectionLabel>Workspaces</SectionLabel>
        </Reveal>
        <MaskText
          className="display mt-6 max-w-[34ch]"
          delay={80}
        >
          Something doing the work, not a folder of chats.
        </MaskText>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[52ch] lead">
            Anything you care about gets its own space. The people, the open
            tasks, what you decided and why, what moved this week. It is how
            usb-me always knows where things stand, and how you can check that
            it understands.
          </p>
        </Reveal>

        <Reveal delay={110} className="surface surface-lift mt-14 overflow-hidden rounded-[4px]">
          <div className="flex flex-col gap-5 border-b p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9">
            <div>
              <p className="label">workspace</p>
              <h3 className="mt-2.5 text-[28px] tracking-[-0.035em]">
                Ship the beta
              </h3>
              <p className="mt-1.5 body-sm">
                Due 20 October, 30 days away
              </p>
            </div>
            <div className="sm:min-w-[190px] sm:text-right">
              <Counter
                to={67}
                suffix="%"
                className="text-[34px] leading-none tracking-[-0.045em]"
              />
              <ProgressBar value={0.67} className="mt-3" />
              <p className="mt-2.5 body-sm">
                Four of six done
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3">
            <div className="border-b p-7 sm:border-b-0 sm:border-r sm:p-9">
              <p className="label">tasks</p>
              <ul className="mt-4 space-y-3">
                {tasks.map((t) => (
                  <li key={t.label} className="flex items-center gap-3 text-[15px]">
                    <span
                      aria-hidden="true"
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: t.done ? 'var(--foreground)' : 'var(--line-hi)',
                        background: t.done ? 'var(--foreground)' : 'transparent',
                      }}
                    >
                      {t.done && (
                        <svg width="8" height="6" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.6L3.3 6 8 1" stroke="var(--background)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span style={{ color: t.done ? 'var(--muted-foreground)' : 'var(--foreground)' }}>
                      {t.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b p-7 sm:border-b-0 sm:border-r sm:p-9">
              <p className="label">decisions</p>
              <ul className="mt-4 space-y-4">
                {decisions.map((d) => (
                  <li key={d.text}>
                    <p className="text-[16px] leading-snug tracking-[-0.02em] text-foreground">
                      {d.text}
                    </p>
                    <p className="mt-1 text-[14px] text-muted-foreground">{d.when}</p>
                  </li>
                ))}
              </ul>
              <p className="label mt-8">people</p>
              <p className="mt-3 body-sm">Sarah, Abdou</p>
            </div>

            <div className="p-7 sm:p-9">
              <p className="label">what moved</p>
              <ul className="mt-4 space-y-4">
                {activity.map((a) => (
                  <li key={a.text}>
                    <p className="text-[15px] leading-snug text-foreground">{a.text}</p>
                    <p className="mt-1 text-[14px] text-muted-foreground">{a.when}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
