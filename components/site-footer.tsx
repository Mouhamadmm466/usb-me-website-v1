import { Wordmark } from '@/components/wordmark'

const groups = [
  {
    title: 'Product',
    links: [
      { label: 'What it does', href: '#work' },
      { label: 'Memory', href: '#memory' },
      { label: 'On device', href: '#device' },
      { label: 'Workspaces', href: '#work' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Research', href: '#top' },
      { label: 'Careers', href: '#top' },
      { label: 'Contact', href: '#access' },
    ],
  },
  {
    title: 'Your data',
    links: [
      { label: 'Network control', href: '#control' },
      { label: 'What we store', href: '#control' },
      { label: 'Terms', href: '#top' },
      { label: 'Privacy', href: '#top' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="rail py-16">
        <div className="grid gap-12 px-5 sm:px-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed text-muted-foreground">
              A personal intelligence that lives on your phone and belongs to
              you.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-[15px] font-medium text-foreground">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line px-5 pt-6 text-[14px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>usb-me, 2026. Runs on-device with NVIDIA Nemotron.</p>
          <p>Everyone should own their own intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
