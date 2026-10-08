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

The design system is deliberately restrained, measured off the reference the
brief named. Tokens live in `app/globals.css`.

**Colour.** One paper ground, `#f8f8f3`, and pure black. There is no accent
hue anywhere and no dark sections. Every tone is black at an alpha: `0.8` for
strong text, `0.6` for body, `0.45` for labels, `0.12` for hairlines, `0.06`
for soft fills, `0.9` for solid buttons.

**Type.** A serif carries every heading at one single size. `--display-size`
is 24px, weight 400, tracking `-0.01em`, leading 1.15, and the hero uses the
same value as every section head. Raising that one token scales the whole page
up if it should shout louder. Body is DM Sans at 18px weight 500, leading 1.45.
Small copy is 14px, labels are 11px weight 500. Mono is reserved for genuine
machine output, nothing else.

**Measure.** `--measure` is 688px and holds all prose. `--wide` is 1136px and
holds the image panels and the data. Sections run on one rhythm, 48px on small
screens and 64px from `md` up.

**Composition.** This is the part that matters most and the part that is
easiest to get wrong. The page is prose on bare paper, punctuated by large
greyscale image panels. It is not a stack of bordered cards. Concretely:

- Sections are a small 11px label, a serif heading, and paragraphs in the
  688px column. No border, no box, no background.
- The visual weight is carried by `Visual`, a full band width greyscale panel
  with 4px corners. The first one sits directly under the hero and holds the
  mark in white. Images drift slightly against their frame on scroll.
- Lists are a small mark, a title and a line of text. They are not cards and
  they carry no outline.
- Only the genuinely interactive pieces get a container, and it is a bare
  `--panel` fill with no border: the trace, the pipeline, the graph, the
  network modes.
- The hero is left aligned in the column, compact, near the top. It is not
  centred and not full height.

If a future change starts wrapping sections in bordered panels again, it will
drift straight back to looking like a generic SaaS page.

## Motion

Everything eases off two tokens, `--ease` and `--ease-out`. The gestures, in
rough order of how loud they are:

- `MaskText` splits a heading into words and lifts each one from behind its own
  baseline when the heading arrives. It is used on headings only, so the gesture
  stays rare enough to mean something.
- The ladder is a stack of sticky frames. Each card pins 26px lower than the one
  before, so the previous cards leave a visible lip carrying their label, and
  the whole ladder reads as a stack by the time you reach the bottom. A single
  rAF throttled scroll listener scales and fades each card as the next one
  covers it, which is what makes the stack feel physical rather than merely
  overlapping.
- `ParallaxImage` holds the frame still and drifts the picture inside it.
- `Counter` and `ProgressBar` run once when they arrive.
- The memory graph draws its own edges with `stroke-dashoffset`, then fades the
  nodes in behind them.
- The nav carries a hairline scroll progress bar along its lower edge.
- `.reveal` remains the quiet default for body copy.

Every one of these checks `prefers-reduced-motion` and renders its finished
state when it is set.

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
