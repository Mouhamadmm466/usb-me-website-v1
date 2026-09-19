import Image from 'next/image'

const asks = [
  'What should I care about today?',
  'Where did we leave off?',
  'What did I promise people this week?',
  'I have two hours. What should I work on?',
  'I want this done by the end of the month. Help me make it happen.',
]

export function ClosingCta() {
  return (
    <section
      id="download"
      className="atmosphere relative overflow-hidden border-t border-white/40"
    >
      {/* Atmospheric landscape at the base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-70">
        <Image
          src="/images/sky.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom [mask-image:linear-gradient(to_bottom,transparent,black_60%)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-[3.6rem]">
              An intelligence that has been growing alongside you.
            </h2>
            <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              After months of use, you pick up your phone and it already
              understands your actual context. Less like opening an app — more
              like picking up where you left off.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#top"
                className="btn-sky rounded-full px-6 py-3 text-sm transition-colors"
              >
                Get Kin for iPhone
              </a>
              <a
                href="#privacy"
                className="rounded-full border border-white/70 bg-white/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-white/80"
              >
                Request early access
              </a>
            </div>
          </div>

          <ul className="glass rounded-2xl p-7 sm:p-9 md:p-10">
            {asks.map((a, i) => (
              <li
                key={a}
                className={`font-serif text-xl italic leading-snug text-foreground ${
                  i < asks.length - 1
                    ? 'mb-4 border-b border-white/50 pb-4'
                    : ''
                }`}
              >
                “{a}”
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
