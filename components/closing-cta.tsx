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
    <section id="download" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-[3.6rem]">
              An intelligence that has been growing alongside you.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              After months of use, you pick up your phone and it already
              understands your actual context. Less like opening an app — more
              like picking up where you left off.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#top"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Kin for iPhone
              </a>
              <a
                href="#privacy"
                className="rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                Request early access
              </a>
            </div>
          </div>

          <ul className="space-y-4 md:pl-8">
            {asks.map((a) => (
              <li
                key={a}
                className="border-b border-border pb-4 font-serif text-xl italic leading-snug text-foreground last:border-0"
              >
                “{a}”
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="grain relative aspect-[16/5] w-full overflow-hidden border-t border-border">
        <Image
          src="/images/texture.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
      </figure>
    </section>
  )
}
