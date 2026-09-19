import { SectionLabel } from '@/components/section-label'

const modes = [
  {
    name: 'Local Only',
    body: 'The intelligence cannot use any network capability. Everything happens on the device.',
  },
  {
    name: 'Ask Before Connecting',
    body: 'Kin asks for permission before it uses an online capability for a task.',
  },
  {
    name: 'Connected Tools',
    body: 'Kin may use the services you explicitly connect, within the permissions you grant.',
  },
]

const tools = [
  'Calendar',
  'Files',
  'Reminders',
  'Contacts',
  'Gmail',
  'Google Docs',
  'Drive',
  'GitHub',
  'Slack',
  'Web search',
]

export function Privacy() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-y border-border bg-gradient-to-b from-[oklch(0.94_0.04_240)] to-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div>
            <SectionLabel>Privacy &amp; control</SectionLabel>
            <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl">
              Minimum necessary disclosure.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We won&apos;t pretend nothing ever leaves your phone — sending an
              email or searching the web requires it. But only what a task needs
              is ever shared. Your whole personal context never leaves just
              because one tool needs the internet.
            </p>
          </div>

          <div>
            <div className="grid gap-4">
              {modes.map((m) => (
                <div
                  key={m.name}
                  className="glass-panel flex flex-col gap-2 rounded-2xl p-6 sm:flex-row sm:items-baseline sm:gap-8 sm:p-7"
                >
                  <h3 className="min-w-[180px] font-serif text-xl font-normal">
                    {m.name}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 mb-3 text-sm text-muted-foreground">
              One intelligence, connected to the tools you choose:
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
