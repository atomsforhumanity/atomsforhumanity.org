# Atoms for Humanity Website

This repository contains the official website for Atoms for Humanity.

Before making substantive changes to the website, read these three specification files in full:

1. `docs/website/content-spec.md`
2. `docs/website/brand-design-spec.md`
3. `docs/website/technical-spec.md`

These files are authoritative.

## Specification precedence

Use the specifications according to their responsibilities:

* `content-spec.md` controls factual information, site architecture, page content, messaging, names, titles, legal information, and public claims.
* `brand-design-spec.md` controls visual direction, typography, colors, spacing, imagery, animation, and aesthetic decisions.
* `technical-spec.md` controls framework choice, rendering architecture, dependencies, code organization, accessibility, performance, and deployment assumptions.

If two specifications appear to conflict, preserve factual correctness first, then technical requirements, then visual preferences.

Do not invent organizational facts, metrics, partnerships, publications, research results, contact information, or capabilities.

## Engineering principles

This should be a simple, exceptionally well-engineered static website.

Use:

* Astro
* TypeScript
* static generation
* semantic HTML
* custom CSS
* CSS variables
* Astro components
* minimal vanilla browser JavaScript

Do not introduce React, Vue, Svelte, Tailwind, a component library, a CMS, database, backend, animation framework, or WebGL library unless a future requirement genuinely demands it.

Technological sophistication should come from design quality and engineering discipline rather than application complexity.

## Content

Do not substantially rewrite approved website copy merely for stylistic preference.

Small edits for grammar, responsive layout, or avoiding awkward repetition are acceptable if meaning is preserved.

Verification-sensitive facts must exactly match `content-spec.md`.

Centralize repeated organizational facts and project metadata in typed data files rather than duplicating them throughout templates.

## Visual implementation

Follow `brand-design-spec.md` closely.

The website should feel:

* technically sophisticated
* precise
* dark-first
* restrained
* future-oriented
* scientific
* subtly connected to sustainability

Avoid generic AI-startup, environmental-nonprofit, and academic-software aesthetics.

Do not use stock photography.

People should appear only on the Team page.

## Assets

Expected public corporate documents live under:

`public/documents/`

Expected team images live under:

`public/images/team/`

If a team photograph is missing, render a deliberate neutral placeholder. Never substitute a stock person.

If the proposed atom/Earth logo cannot be rendered elegantly, use the typographic `Atoms for Humanity` wordmark instead.

## Validation

After substantive implementation changes, run at minimum:

```bash
npm run check
npm run build
```

Fix errors before considering the task complete.

Also verify:

* all internal links resolve
* public document links resolve when assets are present
* the site is usable at mobile and desktop widths
* keyboard navigation works
* reduced-motion preferences are respected
* verification-sensitive organizational information is visible as ordinary HTML
* no placeholder or invented content has accidentally been published

## General rule

When uncertain, choose the simpler implementation.

The website itself should demonstrate the qualities Atoms for Humanity wants in scientific infrastructure:

* coherence
* precision
* simplicity
* interoperability
* reliability
* maintainability
* care
