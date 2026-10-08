import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Visual } from '@/components/visual'
import { Proof } from '@/components/proof'
import { Thesis } from '@/components/thesis'
import { Ladder } from '@/components/ladder'
import { Demo } from '@/components/demo'
import { Pipeline } from '@/components/pipeline'
import { Memory } from '@/components/memory'
import { Workspace } from '@/components/workspace'
import { Device } from '@/components/device'
import { Benchmark } from '@/components/benchmark'
import { Control } from '@/components/control'
import { Access } from '@/components/access'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <Visual
          src="/images/texture.png"
          alt="An abstract field of light and shadow"
          mark
          priority
        />
        <Proof />
        <Thesis />
        <Ladder />
        <Demo />
        <Pipeline />
        <Memory />
        <Workspace />
        <Visual
          src="/images/device.png"
          alt="A hand holding a phone in soft directional light"
          height="h-[300px] sm:h-[380px] md:h-[460px]"
          caption="Everything it knows stays here."
        />
        <Device />
        <Benchmark />
        <Control />
        <Access />
      </main>
      <SiteFooter />
    </div>
  )
}
