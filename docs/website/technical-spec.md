# Atoms for Humanity Website — Technical Implementation Specification

Build the Atoms for Humanity website as a fast, static, low-maintenance institutional website.

The site should communicate technological sophistication through excellent implementation quality, typography, layout, scientific graphics, performance, and restraint—not through framework complexity or excessive JavaScript.

## Core stack

Use:

* **Astro**, current stable release
* **TypeScript**, strict mode
* Astro's **static output**
* Astro components for reusable UI
* semantic HTML
* native CSS
* CSS custom properties for the design system
* minimal vanilla TypeScript where client-side behavior is actually necessary
* GitHub for source control
* Vercel for initial hosting and continuous deployment

Do not introduce a backend.

Do not use server-side rendering unless a future requirement actually requires it.

## Do not use

Unless there is a concrete requirement that cannot reasonably be met otherwise, do not use:

* React
* Vue
* Svelte
* Next.js
* Tailwind CSS
* Bootstrap
* general-purpose component libraries
* Material UI
* Chakra
* shadcn
* Framer Motion
* GSAP
* Three.js
* a CMS
* a database
* serverless functions
* API routes
* authentication
* unnecessary third-party JavaScript

The site should remain close to ordinary static HTML, CSS, and SVG.

## Engineering principle

Do not interpret "technologically sophisticated" as "technically complicated."

The sophistication should come from:

* excellent typography
* spacing
* information architecture
* precise responsive layouts
* clean reusable components
* thoughtful scientific diagrams
* subtle interaction design
* accessibility
* exceptional performance

A senior engineer inspecting the code should find the implementation simple, coherent, and maintainable.

## Rendering model

The entire site should be statically generated at build time.

Expected deployment flow:

```text
GitHub repository
        ↓
Vercel build
        ↓
astro build
        ↓
static dist/
        ↓
www.atomsforhumanity.org
```

The resulting site should remain portable to any ordinary static host.

Do not depend on Vercel-specific runtime functionality.

## Suggested source structure

Use approximately:

```text
src/
  components/
    Header.astro
    Footer.astro
    Logo.astro
    SectionHeader.astro
    ProjectCard.astro
    ResearchArea.astro
    TeamMember.astro
    DocumentLink.astro
    ArchitectureDiagram.astro

  layouts/
    BaseLayout.astro

  pages/
    index.astro
    work.astro
    technology.astro
    about.astro
    team.astro
    organization.astro

  data/
    organization.ts
    team.ts
    projects.ts
    research.ts

  styles/
    tokens.css
    global.css

  assets/
    images/
    graphics/

public/
  documents/
    bylaws.pdf
    certificate-of-incorporation.pdf
    irs-determination-letter.pdf

  favicon.svg
  robots.txt
```

This structure can be adjusted where there is a clear engineering reason, but keep the architecture simple.

## Centralized organizational data

Verification-sensitive information must not be duplicated manually throughout multiple pages.

Store organizational facts centrally in a typed TypeScript object.

For example:

```ts
export const organization = {
  name: "Atoms for Humanity",
  legalName: "...",
  ein: "...",
  organizationType: "...",
  incorporationState: "...",
  address: {
    street: "...",
    city: "...",
    state: "...",
    postalCode: "...",
    country: "United States",
  },
  mailingAddress: null,
  email: "...",
};
```

The footer, About page, Organization page, metadata, and structured data should consume this source rather than containing independent copies.

Do the same for:

* team members
* software projects
* research programs
* external links

## Content management

Do **not** add a CMS for the initial release.

Current site content should live directly in:

* Astro pages/components
* typed TypeScript data files
* Markdown only where that genuinely improves maintainability

Astro Content Collections may be introduced later if AFH develops substantial:

* publications
* news
* essays
* research-project archives
* documentation

Do not create that publishing architecture prematurely.

## CSS architecture

Use custom CSS rather than Tailwind.

Create centralized design tokens.

Start from approximately:

```css
:root {
  --bg-primary: #0B1110;
  --bg-secondary: #101816;
  --bg-elevated: #16211E;
  --bg-light: #EDF3F0;
  --bg-light-bright: #F7FAF8;

  --text-primary: #F0F5F2;
  --text-secondary: #A7B5AF;
  --text-muted: #75847E;
  --text-dark: #13201C;

  --accent: #42DDB1;
  --accent-muted: #7DBEAC;
  --accent-dark: #247C68;
  --accent-cool: #6FA9B8;

  --border-dark: rgba(255, 255, 255, 0.08);
  --border-light: rgba(19, 32, 28, 0.12);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --content-width: 1280px;
  --prose-width: 720px;
}
```

Tune values as necessary during design implementation, but preserve the overall graphite + technical teal-green relationship.

Use semantic class names rather than long utility-class strings.

## Typography

Preferred primary font:

**Geist**

Preferred monospace:

**Geist Mono**

Fallbacks should use high-quality system sans-serif and monospace stacks.

Do not introduce many font families.

Typography should carry much of the visual identity.

Use large but restrained headings, comfortable body text, and generous line-height.

## JavaScript budget

Aim for essentially zero browser-side JavaScript for ordinary content.

Use JavaScript only where it provides meaningful functionality, such as:

* mobile navigation state
* sticky navigation behavior if CSS alone is insufficient
* minimal hero animation if necessary

Prefer:

1. CSS
2. SVG
3. tiny vanilla TypeScript
4. external libraries only as a last resort

Do not ship a client-side application framework for static content.

## Scientific graphics

Prefer:

* inline SVG
* CSS
* simple procedural geometry
* authentic supplied scientific images where appropriate

Do not use Three.js or WebGL for the initial site.

Scientific graphics should remain:

* restrained
* clean
* technically plausible
* lightweight

Possible visual motifs include:

* molecular graphs
* reaction networks
* orbital geometry
* computational grids
* trajectories
* energy landscapes
* architecture diagrams

Do not create pseudo-scientific decorative imagery.

## Logo

Create a temporary SVG brand mark only if it can be executed cleanly.

Concept:

* simplified atom
* three thin orbital ellipses
* six small electron nodes
* central circular nucleus
* nucleus subtly suggests Earth
* no realistic continents
* no gradients required
* teal-green nucleus/electrons
* pale or graphite orbital paths depending on background

The mark must remain legible around 24px.

If the result looks busy, cartoonish, or amateur, do not use it.

Fallback:

**Atoms for Humanity**

as a clean Geist-based wordmark.

Do not delay launch for logo development.

## Animations

Keep animations subtle.

Acceptable:

* slow orbital drift
* slight particle movement
* small opacity changes
* smooth hover/focus states
* minimal content reveal animations

Avoid:

* scroll hijacking
* particles following the mouse
* rapidly rotating molecules
* glowing startup effects
* aggressive parallax
* large page-transition systems
* animated gradients
* excessive entrance animations

Support:

```css
@media (prefers-reduced-motion: reduce)
```

and remove nonessential motion accordingly.

## Responsive design

The site must be deliberately designed for:

* mobile
* tablet
* desktop
* large desktop

Do not simply shrink desktop layouts.

On narrow screens:

* simplify scientific graphics
* stack architecture diagrams clearly
* maintain generous spacing
* keep body text comfortably readable
* collapse navigation into a minimal accessible mobile menu

Support widths down to approximately 320px.

## Accessibility

Target **WCAG 2.2 AA**.

Requirements include:

* semantic landmarks
* valid heading hierarchy
* keyboard navigation
* visible focus indicators
* accessible navigation menu
* sufficient contrast
* descriptive link text
* alt text for meaningful imagery
* decorative SVG elements hidden appropriately
* reduced-motion support
* no interaction that requires a mouse

Do not rely on teal color alone to communicate state or meaning.

## Performance

Target excellent Lighthouse results.

Goals:

* Performance ≥ 95
* Accessibility ≥ 95
* Best Practices ≥ 95
* SEO ≥ 95

Also target:

* negligible cumulative layout shift
* minimal client JavaScript
* compressed/optimized images
* no render-blocking unnecessary third-party resources
* fast first contentful paint
* no autoplay media
* no large JavaScript bundles

Do not compromise the design merely to force an artificial score of 100, but treat regressions below these targets as something to investigate.

## Images

Use Astro's built-in image handling for local images where appropriate.

Avoid third-party image hosting for core assets.

Use:

* AVIF/WebP where appropriate
* correct responsive sizes
* explicit width and height
* lazy loading for below-the-fold imagery

Do not use generic stock photography anywhere.

People should appear only on the Team page.

## Documents

Public corporate documents should live as static files under:

```text
/public/documents/
```

Use descriptive stable names:

```text
bylaws.pdf
certificate-of-incorporation.pdf
irs-determination-letter.pdf
```

The Organization & Governance page must provide ordinary links that work without JavaScript or authentication.

Do not expose documents containing sensitive information beyond what AFH intends to publish.

## SEO

Every public page must contain:

* unique `<title>`
* meta description
* canonical URL
* Open Graph title
* Open Graph description
* Open Graph image when available
* appropriate social-card metadata

Generate:

* `sitemap.xml`
* `robots.txt`

Use descriptive semantic URLs.

Examples:

```text
/
/work
/technology
/about
/team
/organization
```

Avoid unnecessary nested routing.

## Structured metadata

Add JSON-LD for Atoms for Humanity using the most appropriate Schema.org organization/nonprofit representation available.

Populate it only with verified information.

Useful properties may include:

* organization name
* legal name
* URL
* description
* logo
* postal address
* contact information
* tax identifier where appropriate
* external official profiles

Do not invent metadata.

The structured data should reinforce the relationship between:

**Atoms for Humanity**

and

**https://www.atomsforhumanity.org**

## Navigation

Primary navigation:

* Our Work
* Technology
* About
* Team
* Organization

Optionally include:

* GitHub
* Contact

Keep navigation minimal.

Use a sticky header if appropriate.

A subtle translucent dark background and very light blur while scrolling are acceptable.

Avoid dramatic glassmorphism.

## Footer

The footer must contain real institutional information.

Include:

* Atoms for Humanity
* short mission statement
* physical organizational address
* organizational email
* nonprofit/tax status
* navigation links
* Organization & Governance link
* GitHub link if supplied
* copyright

The footer is also a verification surface and should not be reduced to only a logo and copyright notice.

## Analytics and tracking

Do not add analytics, advertising trackers, cookies, session-recording software, or third-party marketing scripts in the initial build unless specifically requested.

A privacy-friendly analytics tool may be introduced later if needed.

## Contact

For V1, use a normal organizational email link.

Do not create:

* a database-backed contact form
* CAPTCHA
* serverless contact endpoint

unless specifically requested.

## Security and maintenance

Because this is a static site:

* minimize third-party dependencies
* pin dependencies normally through the package lockfile
* keep the dependency graph small
* do not add packages for functionality readily implemented with platform APIs or CSS

Set up ordinary dependency update tooling if desired, but avoid unnecessary infrastructure.

## Browser support

Support modern evergreen browsers:

* current Chrome
* Firefox
* Safari
* Edge

The site should degrade gracefully if optional animation features are unsupported.

## Build scripts

Provide ordinary scripts such as:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

Add linting/formatting only if configured coherently.

Do not install a large toolchain simply for appearances.

## Deployment

Deploy from the main GitHub branch automatically to Vercel.

Use preview deployments for pull requests/branches.

Configure:

* `atomsforhumanity.org`
* `www.atomsforhumanity.org`
* HTTPS
* redirect between `www` and apex according to one chosen canonical form

Preferred canonical domain:

```text
https://www.atomsforhumanity.org
```

Redirect:

```text
atomsforhumanity.org
```

to the `www` domain.

## Quality principle

The codebase and website should embody the same characteristics Atoms for Humanity wants in scientific infrastructure:

* coherent
* interoperable
* minimal
* precise
* reliable
* understandable
* maintainable
* carefully engineered

The finished site should look substantially more polished than a typical academic scientific-software website while remaining materially simpler under the hood than a typical modern SaaS marketing site.
