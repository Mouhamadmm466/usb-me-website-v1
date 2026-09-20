import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Thesis() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="rail py-24 md:py-32">
        <div className="px-5 sm:px-10">
          <Reveal>
            <SectionLabel>Why we are building this</SectionLabel>
            <h2 className="display-sm mt-7 max-w-[22ch] text-[clamp(2rem,4.6vw,3.4rem)]">
              The intelligence that knows you best should be the one you own.
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="max-w-[54ch] text-[18px] leading-[1.6] text-muted-foreground">
              Every assistant you use today keeps your memory, your context and
              your reasoning on hardware you do not control. You explain
              yourself again each morning, and everything you say leaves the
              room. You are renting an understanding of your own life.
            </p>
            <p className="max-w-[54ch] text-[18px] leading-[1.6] text-foreground">
              Models are now good enough to run on the phone in your pocket. So
              the trade stops making sense. Keep the reasoning on the device,
              keep the memory on the device, and let the internet be a tool it
              reaches for, not the place it lives.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
