import { MaskText } from '@/components/mask-text'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Thesis() {
  return (
    <section className="section-y">
      <div className="band gutter">
        <Reveal className="prose-col">
          <SectionLabel>The problem</SectionLabel>
        </Reveal>
        <div className="prose-col">
          <MaskText className="display mt-3 max-w-[34ch]" delay={60}>
            The intelligence that knows you best should be the one you own.
          </MaskText>
          <Reveal delay={180}>
            <p className="mt-5 lead">
              Every assistant you use today keeps your memory and your thinking
              on hardware you do not control. You explain yourself again every
              morning. Everything you say leaves the room. You are renting an
              understanding of your own life, and the rent never stops.
            </p>
            <p className="mt-5 lead">
              Models are now small enough to run on the phone in your pocket, so
              the trade stops making sense. Keep the thinking on the phone. Keep
              the memory on the phone. Let the internet be a tool it picks up,
              not the place it lives.
            </p>
            <p className="mt-5 lead !text-[color:var(--foreground)]">
              That is the whole idea. Everything below is how we are building it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
