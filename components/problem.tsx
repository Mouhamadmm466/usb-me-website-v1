import { SectionLabel } from '@/components/section-label'

export function Problem() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
        <div>
          <SectionLabel>The problem</SectionLabel>
        </div>
        <div>
          <h2 className="text-balance font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] sm:text-4xl md:text-[2.9rem]">
            Your intelligence should not live in someone else&apos;s cloud.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Today&apos;s assistants keep your memory, your context, and your
              reasoning on servers you don&apos;t own. Every question you ask
              leaves your device. You rent access to an intelligence that
              understands your life.
            </p>
            <p className="text-foreground">
              As models become powerful enough to run on the phone in your
              pocket, that trade-off no longer makes sense. The intelligence
              that knows you most intimately should be the one you own.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
