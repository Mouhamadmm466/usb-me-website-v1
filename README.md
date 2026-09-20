# usb-me

Marketing site for **usb-me**, a personal intelligence that lives on your phone,
powered by NVIDIA Nemotron running on the device.

Built with Next.js 16, React 19 and Tailwind v4.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How the site is put together

Design tokens live in `app/globals.css`. The canvas is one continuous near
black surface with no alternating bands; depth comes from two very slow
ambient gradients (`.ambient`) rather than from grey blocks. There is a single
signal colour (`--signal`) that is spent deliberately: the live status dot, the
waveform, the lit edges of the memory graph, the active network mode, and the
one place in the pipeline where something crosses off the phone.

Motion runs off two easing tokens, `--ease` and `--ease-out`. Shared classes:
`.reveal` for the single scroll gesture, `.word` for the headline settling in
on first paint, `.surface` and `.surface-lift` for raised panels, `.btn` for
the lift and glow on buttons, `.underline-grow` for links.

Sections, in page order (`app/page.tsx`):

| Component | What it is |
| --- | --- |
| `hero.tsx` plus `trace.tsx` | The headline, and the signature moment: a looping voice to work trace showing one spoken sentence resolving into the work it actually does. |
| `thesis.tsx` | Why the intelligence should be yours. |
| `ladder.tsx` | Command, request, goal. The rungs escalate by how much reasoning each one asks for. |
| `pipeline.tsx` | The interactive walkthrough. Six stages you can play or step through, drawn inside the phone boundary, with the one step that reaches outside marked. |
| `memory.tsx` | Interactive knowledge graph. Hover or focus a node to light its links. |
| `device.tsx` | What stays on the phone, and what still works with no connection. |
| `workspace.tsx` | A workspace as the intelligence holds it. |
| `control.tsx` | The three network modes, as a control you can operate. |
| `access.tsx` | Early access capture. |

Everything respects `prefers-reduced-motion`: the trace jumps to its finished
state, the pipeline stops auto advancing, the ambient gradients hold still, and
the reveals are inert.

## Copy rules

Plain, grounded language. No hyphens or dashes in prose. The product name
`usb-me` is the one exception, because it is a name.

## Not wired up yet

The email form in `access.tsx` only sets local state. It needs a real endpoint
before launch.
