import { Reveal } from '@/components/reveal'

const headline = ['Own', 'your', 'intelligence.']

export function Hero() {
  return (
    <section id="top" className="pb-10 pt-12 sm:pt-16">
      <div className="band gutter">
        <div className="prose-col">
          <h1 className="display">
            {headline.map((word, i) => (
              <span
                key={word}
                className="word"
                style={{ animationDelay: `${120 + i * 100}ms` }}
              >
                {word}
                {i < headline.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <Reveal delay={320}>
            <p className="mt-4 max-w-[52ch] text-[20px] leading-[1.35] display-quiet"
               style={{ fontFamily: 'var(--font-serif), serif' }}>
              A personal intelligence that lives on your phone, learns what you
              choose to share, and does the work.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <a href="#access" className="btn btn-solid inline-flex">
                Get early access
              </a>
              <a href="#how" className="btn btn-soft inline-flex">
                See how it works
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
