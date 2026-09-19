import { Wordmark } from '@/components/wordmark'

const groups = [
  {
    title: 'Product',
    links: ['How it works', 'Personal memory', 'Local-first', 'Workspaces'],
  },
  {
    title: 'Company',
    links: ['About', 'Research', 'Careers', 'Contact'],
  },
  {
    title: 'Privacy',
    links: ['Network control', 'Data ownership', 'Terms', 'Privacy Policy'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A personal intelligence that lives on your phone and belongs to
              you.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 font-serif text-sm text-foreground">
                {g.title}
              </h3>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Kin © 2026 — Runs on-device with NVIDIA Nemotron.</p>
          <p className="font-serif italic text-sky-accent">The phone is the home of the intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
