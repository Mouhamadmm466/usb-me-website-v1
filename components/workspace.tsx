import { MaskText } from '@/components/mask-text'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const holds = [
  { title: 'Open tasks', body: 'What is still unfinished, and which of it is blocking something else.' },
  { title: 'Decisions', body: 'What you chose, when, and the reason you gave at the time.' },
  { title: 'People', body: 'Who is involved, what you owe them, and what they owe you.' },
  { title: 'What moved', body: 'Everything that changed this week, so you can pick the thread back up.' },
]

export function Workspace() {
  return (
    <section className="section-y">
      <div className="band gutter">
        <Reveal className="prose-col">
          <SectionLabel>Workspaces</SectionLabel>
        </Reveal>
        <div className="prose-col">
          <MaskText className="display mt-3 max-w-[34ch]" delay={60}>
            Something doing the work, not a folder of chats.
          </MaskText>
          <Reveal delay={180}>
            <p className="mt-5 lead">
              Anything you care about gets its own space. It is how usb-me always
              knows where things stand, and how you can check that what it
              understands matches what is actually true.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240} className="prose-col mt-9">
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {holds.map((h) => (
              <div key={h.title}>
                <dt className="text-[15px] font-medium">{h.title}</dt>
                <dd className="body-sm mt-1.5">{h.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
