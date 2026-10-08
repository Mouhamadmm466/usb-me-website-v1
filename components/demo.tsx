import { Trace } from '@/components/trace'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Demo() {
  return (
    <section className="section-y">
      <div className="band gutter">
        <Reveal className="prose-col">
          <SectionLabel>One request</SectionLabel>
          <p className="display mt-3 max-w-[34ch]">
            You say one sentence. It does the rest.
          </p>
        </Reveal>
      </div>
      <Reveal delay={120} className="band gutter mt-9">
        <Trace />
      </Reveal>
    </section>
  )
}
