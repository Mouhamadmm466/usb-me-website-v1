import { Trace } from '@/components/trace'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="rail rail-edges pt-14 pb-24 sm:pt-20 md:pb-32">
      <div className="px-5 sm:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[12.5px] text-muted-foreground sm:text-[13px]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-signal"
            />
            Runs on your iPhone, powered by NVIDIA Nemotron
          </p>

          <h1 className="display mt-8 max-w-[16ch] text-[clamp(3rem,8.4vw,6.25rem)]">
            Own your intelligence.
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal delay={90} className="md:col-span-5">
            <p className="max-w-[46ch] text-[19px] leading-[1.55] text-muted-foreground">
              usb-me is a personal intelligence that lives on your phone. You
              speak to it. It learns the parts of your world you choose to
              share, works out what you are actually trying to get done, and
              gets it done.
            </p>
            <p className="mt-5 max-w-[46ch] text-[19px] leading-[1.55] text-foreground">
              It belongs to you. Not to a server.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#access"
                className="rounded-lg bg-foreground px-5 py-3 text-[15px] font-medium text-background transition-transform duration-200 hover:-translate-y-px"
              >
                Get early access
              </a>
              <a
                href="#work"
                className="rounded-lg border border-line px-5 py-3 text-[15px] text-foreground transition-colors duration-200 hover:bg-panel"
              >
                See what it does
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="md:col-span-7">
            <Trace />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
