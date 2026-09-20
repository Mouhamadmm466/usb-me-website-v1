import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Thesis } from '@/components/thesis'
import { Ladder } from '@/components/ladder'
import { Pipeline } from '@/components/pipeline'
import { Memory } from '@/components/memory'
import { Device } from '@/components/device'
import { Workspace } from '@/components/workspace'
import { Control } from '@/components/control'
import { Access } from '@/components/access'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-dvh">
      <div aria-hidden="true" className="ambient" />
      <SiteNav />
      <main className="relative z-[1]">
        <Hero />
        <Thesis />
        <Ladder />
        <Pipeline />
        <Memory />
        <Device />
        <Workspace />
        <Control />
        <Access />
      </main>
      <SiteFooter />
    </div>
  )
}
