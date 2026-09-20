import { Trace } from '@/components/trace'
import { Reveal } from '@/components/reveal'

const headline = ['Own', 'your', 'intelligence.']

export function Hero() {
  return (
    <section id="top" className="rail rail-edges pt-14 pb-24 sm:pt-20 md:pb-32">
      <div className="px-5 sm:px-10">
        <p
          className="surface inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[12.5px] text-muted-foreground sm:text-[13px]"
          style={{ animation: 'settle 900ms var(--ease-out) forwards', opacity: 0 }}
        >
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span
              aria-hidden="true"
              className="pulse-ring absolute h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--signal)' }}
            />
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--signal)' }}
            />
          </span>
          Runs on your iPhone. Powered by NVIDIA Nemotron.
        </p>

        <h1 className="display mt-8 max-w-[16ch] text-[clamp(3rem,8.4vw,6.25rem)]">
          {headline.map((word, i) => (
            <span
              key={word}
              className="word"
              style={{ animationDelay: `${140 + i * 110}ms` }}
            >
              {word}
              {i < headline.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal delay={420} className="md:col-span-5">
            <p className="max-w-[44ch] text-[19px] leading-[1.55] text-muted-foreground">
              usb-me lives on your phone. You talk to it. It learns the parts of
              your life you choose to share, works out what you are trying to
              get done, and does it.
            </p>
            <p className="mt-5 max-w-[44ch] text-[19px] leading-[1.55] text-foreground">
              It belongs to you. Not to a server.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#access"
                className="btn btn-solid px-5 py-3 text-[15px] font-medium"
              >
                Get early access
              </a>
              <a href="#how" className="btn btn-ghost px-5 py-3 text-[15px]">
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={520} className="md:col-span-7">
            <Trace />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
