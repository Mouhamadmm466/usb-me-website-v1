import { Reveal } from '@/components/reveal'

const figures = [
  { n: '2.84 GB', label: 'the whole model, on your phone' },
  { n: '150', label: 'scenarios in our evaluation suite' },
  { n: '0', label: 'bytes of your memory on our servers' },
]

export function Proof() {
  return (
    <section className="section-y">
      <Reveal className="band gutter text-center">
        <p className="display display-quiet">Built on NVIDIA Nemotron.</p>
        <p className="label mt-3">Running on the device, not in our cloud.</p>
      </Reveal>

      <Reveal delay={90} className="band gutter mt-12">
        <dl className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {figures.map((f) => (
            <div key={f.label} className="text-center">
              <dt className="display">{f.n}</dt>
              <dd className="body-sm mx-auto mt-2 max-w-[22ch]">{f.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
