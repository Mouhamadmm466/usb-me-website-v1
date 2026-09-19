import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Capabilities } from '@/components/capabilities'
import { Memory } from '@/components/memory'
import { LocalFirst } from '@/components/local-first'
import { Workspace } from '@/components/workspace'
import { Privacy } from '@/components/privacy'
import { ClosingCta } from '@/components/closing-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Capabilities />
        <Memory />
        <LocalFirst />
        <Workspace />
        <Privacy />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
