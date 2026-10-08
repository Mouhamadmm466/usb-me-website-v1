import { MaskText } from '@/components/mask-text'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Thesis() {
  return (
    <section className="border-t section-y">
      <div className="col-wide gutter">
        <Reveal>
          <SectionLabel>Why we are building this</SectionLabel>
        </Reveal>
        <MaskText
          className="display mt-6 max-w-[34ch]"
          delay={80}
        >
          The intelligence that knows you best should be the one you own.
        </MaskText>

        <Reveal delay={90} className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="max-w-[52ch] lead">
            Every assistant you use today keeps your memory and your thinking on
            hardware you do not control. You explain yourself again every
            morning. Everything you say leaves the room. You are renting an
            understanding of your own life.
          </p>
          <p className="max-w-[52ch] lead !text-[color:var(--foreground)]">
            Models are now small enough to run on the phone in your pocket, so
            the trade stops making sense. Keep the thinking on the phone. Keep
            the memory on the phone. Let the internet be a tool it picks up, not
            the place it lives.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
