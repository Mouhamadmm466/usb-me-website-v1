# usb-me

Marketing site for **usb-me** — a personal intelligence that runs on your phone,
powered on-device by NVIDIA Nemotron.

Built with Next.js 16, React 19 and Tailwind v4.

## Running it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

> If `pnpm install` fails on the version pin, `npm install` works too — the
> `packageManager` field was pinned to a pnpm release that does not exist and
> has been removed.

## How the site is put together

Design tokens live in `app/globals.css`: a cool paper/ink palette with a single
signal colour (`--signal`, cobalt) that is spent deliberately — the status dot,
the live waveform, the highlighted edges in the memory graph, the active
network mode. Type is DM Sans throughout, with DM Mono reserved for text that
is genuinely machine output (`.readout`).

Sections, in page order (`app/page.tsx`):

| Component | What it is |
| --- | --- |
| `hero.tsx` + `trace.tsx` | The headline and the signature moment: a looping voice-to-work trace showing one spoken sentence resolving into the work it actually does. |
| `thesis.tsx` | Why the intelligence should be yours. |
| `ladder.tsx` | Command → request → goal, escalating by how much reasoning each asks for. |
| `memory.tsx` | Interactive knowledge graph. Hover or focus a node to light its links. |
| `device.tsx` | What stays on the phone, and what still works offline. |
| `workspace.tsx` | A workspace as the intelligence holds it. |
| `control.tsx` | The three network modes, as a control you can actually operate. |
| `access.tsx` | Early-access capture. |

`reveal.tsx` is the page's one scroll gesture, held at section granularity.
Everything respects `prefers-reduced-motion`: the trace jumps to its finished
state and the reveals are inert.

## Not wired up yet

The email form in `access.tsx` only sets local state — it needs a real endpoint
before launch.
