# Atoms for Humanity — Final Website Content Specification

This document defines the complete content, information architecture, and public-facing copy for the initial Atoms for Humanity website.

Use this together with the separate **Visual Brand & Website Design Specification** and **Technical Implementation Specification**.

The website should be concise. Do not expand this copy substantially unless needed for layout. Prefer strong typography, whitespace, scientific diagrams, and visual hierarchy over additional prose.

---

# 1. Organizational Identity

Use these facts consistently throughout the website.

**Public name:** Atoms for Humanity

**Legal name:** Atoms for Humanity Corp

**Domain:** https://www.atomsforhumanity.org

**Organization type:** 501(c)(3) public charity

**EIN:** 41-5138821

**State of incorporation:** Delaware

**Founded:** March 2026

**Physical address:**
107 Plaza Trusco
Taos, NM 87571
United States

**Mailing address:**
1518 Paseo Del Pueblo Norte #1282
El Prado, NM 87529-8055
United States

**GitHub:**
https://github.com/atomsforhumanity

**LinkedIn:**
http://linkedin.com/company/atoms-for-humanity

Do not display a phone number or public email address in V1.

---

# 2. Mission

## Primary public-facing mission

> **Accelerating humanity's transition to a sustainable molecular future.**

This should be the canonical short mission statement.

## Official corporate mission

On the Organization & Governance page, reproduce the formal mission:

> The mission of the Corporation is to transition humanity to a sustainable molecular future, by, but not limited to, conducting and supporting research in quantum mechanics, chemistry, materials science, reaction network design, catalysis, polymers, and related fields; developing, maintaining, and distributing technology and software infrastructure to enable such research; and providing public education and outreach to increase awareness of the impact of modern chemistry on human health and the environment.

---

# 3. Canonical Organizational Description

Use this as the canonical medium-length description of AFH:

> Atoms for Humanity is a nonprofit research organization working toward a sustainable molecular future. We build open infrastructure for molecular simulation at massive scale, creating a digital chemical laboratory in which researchers and AI systems can explore molecules, reactions, catalysts, and materials computationally. We use these capabilities to advance frontier research in sustainable chemistry and make the resulting tools, data, and scientific knowledge openly available.

Short version:

> Atoms for Humanity is a nonprofit research organization building open computational infrastructure and advancing scientific research toward a sustainable molecular future.

---

# 4. Core Narrative

Every page should remain consistent with this causal hierarchy.

## Mission

Humanity needs a more sustainable molecular future.

↓

## Problem

Modern civilization depends on molecules, materials, and chemical processes that were often designed without fully accounting for their long-term effects on human and environmental health.

↓

## Scientific challenge

Finding better molecules, reactions, catalysts, and materials is difficult because the relevant chemical spaces are enormous.

↓

## Opportunity

Molecular simulation, large-scale computation, automation, and AI now make it possible to explore those spaces computationally at unprecedented scale.

↓

## Missing capability

The scientific software and infrastructure needed to make molecular simulation genuinely scalable remain fragmented.

↓

## Current AFH strategy

Build an open, massively scalable digital chemical laboratory.

↓

## Users

Human researchers and increasingly autonomous AI systems.

↓

## Science

High-throughput molecular simulation, automated reaction-network discovery, catalyst design, and sustainable polymer and materials chemistry.

↓

## Public good

Open software, data, workflows, compute access, research, and scientific knowledge.

↓

## Long-term mission

Pursue the highest-leverage scientific and technological approaches available to accelerate humanity's transition to a sustainable molecular future.

---

# 5. Site Map

Create these routes:

```text
/
 /work
 /technology
 /about
 /team
 /organization
 /donate
```

Primary navigation:

- Our Work
- Technology
- About
- Team
- Organization

Top-right CTA:

**Make a Donation**

Also include a GitHub icon/link where appropriate.

Do not create empty pages for future programs.

---

# 6. Homepage

Route:

```text
/
```

Page title:

**Atoms for Humanity | Building a Sustainable Molecular Future**

Meta description:

> Atoms for Humanity is a nonprofit research organization building open infrastructure for molecular simulation at massive scale and applying it to sustainable chemistry.

---

## Hero

Eyebrow:

**ATOMS FOR HUMANITY**

Headline:

> **Building a sustainable molecular future.**

Supporting copy:

> Modern civilization is built from molecules. We are developing the scientific capabilities needed to discover and design chemistry for human and environmental health.

Primary link:

**Explore our work →**

Secondary link:

**About Atoms for Humanity →**

Do not mention AI in the hero headline.

Do not place photographs of people in the hero.

---

# 7. Homepage — The Problem

Section label:

**01 — THE CHALLENGE**

Heading:

> **The chemistry of modern life needs to change.**

Copy:

> Chemistry underlies our materials, medicines, manufacturing, energy systems, agriculture, and technologies. But many of the molecular systems inherited by modern civilization were optimized for performance and cost without fully accounting for environmental persistence, toxicity, biological compatibility, or long-term sustainability.
>
> We believe many of these problems can ultimately be addressed at their source: by discovering and designing better chemistry.

Keep this section concise.

---

# 8. Homepage — The Scientific Challenge

Section label:

**02 — CHEMICAL SPACE**

Heading:

> **Finding better chemistry means searching an enormous space.**

Copy:

> The spaces of possible molecules, reactions, catalysts, materials, and chemical processes are vast. Traditional experimental discovery can explore only a small fraction of them.
>
> Increasing humanity's ability to navigate this space is one of the fundamental requirements for building a more sustainable molecular future.

Optional visual:

A sparse reaction network or chemical-space graph.

---

# 9. Homepage — Why Now

Section label:

**03 — WHY NOW**

Heading:

> **A new mode of molecular science is becoming possible.**

Copy:

> Molecular simulation provides a way to interrogate physical chemistry computationally. Modern computing provides enormous scale. Artificial intelligence increasingly provides the ability to automate scientific reasoning and exploration.
>
> Connecting these capabilities creates the possibility of computational experiments operating at scales that were previously impractical.

Present four restrained concepts:

### Simulation

Ground scientific questions in molecular physics.

### Compute

Run large numbers of calculations in parallel.

### AI

Automate hypothesis generation, analysis, and scientific iteration.

### Infrastructure

Connect these capabilities into a coherent scientific system.

---

# 10. Homepage — Digital Chemical Laboratory

Section label:

**04 — THE DIGITAL LABORATORY**

Heading:

> **A digital chemical laboratory for humans and AI.**

Copy:

> Atoms for Humanity is building open infrastructure that allows molecular simulations to be constructed, executed, analyzed, and reproduced at massive scale.
>
> Human researchers can use this environment to investigate chemical systems systematically. AI systems can use the same scientific tools to formulate hypotheses, run computational experiments, interpret results, and decide what to investigate next.

Display the conceptual loop:

```text
Hypothesize
    ↓
Simulate
    ↓
Analyze
    ↓
Learn
    ↓
Choose the next experiment
    ↺
```

Supporting statement:

> Give increasingly capable AI access to a massively scalable digital chemical laboratory, and it gains something essential: the ability to test ideas against physical models rather than merely propose them.

Avoid claiming that AFH currently operates a completely autonomous research agent.

---

# 11. Homepage — What We Build

Section label:

**05 — OPEN INFRASTRUCTURE**

Heading:

> **Infrastructure for molecular simulation at scale.**

Intro:

> AFH develops a connected open-source stack spanning scientific data, program interoperability, distributed computation, and cloud access.

Show three high-level groups rather than every package initially:

### qc\*

A family of interoperable tools providing common scientific data structures, program interfaces, physical reference data, parsing, and molecular informatics.

### BigChem

Distributed infrastructure for running quantum chemistry calculations across clusters of computers or cloud resources.

### ChemCloud

A secure web service and Python client that make BigChem-backed computational resources accessible over the internet.

CTA:

**Explore the technology →**

Link to:

`/technology`

---

# 12. Homepage — Research

Section label:

**06 — RESEARCH**

Heading:

> **Building the tools—and using them to do science.**

Copy:

> Infrastructure matters because of the science it makes possible. AFH develops new computational capabilities alongside an active research program designed to test them against difficult molecular problems.

Display research priorities in this order:

### High-throughput molecular simulation

Develop methods and workflows capable of moving molecular simulation from individual calculations toward large computational experiments.

### Automated reaction-network discovery

Develop scalable approaches for discovering and navigating complex chemical reaction networks computationally.

### Catalyst design

Use molecular simulation and systematic exploration to better understand and design catalysts.

### Sustainable polymers and materials

Apply computational molecular design to chemical systems where improved properties could advance human and environmental health.

CTA:

**Explore our work →**

---

# 13. Homepage — Open Science

This should preferably be a light-background section.

Section label:

**07 — OPEN SCIENCE**

Heading:

> **Scientific capabilities should compound.**

Copy:

> We believe the ability to simulate matter at scale should become a scientific public good.
>
> AFH develops open software, workflows, data, protocols, and scientific results so that researchers beyond our organization can use, extend, and improve what we build.

Supporting items:

- Open-source scientific software
- Shared computational infrastructure
- ChemCloud access for external researchers
- Open scientific workflows and data
- AFH Software Fellows
- Scientific collaboration

Add:

> AFH also provides shared compute and ChemCloud access to external researchers and research groups.

Do not create a Fellows page yet.

---

# 14. Homepage — Institutional Support

Keep visually light and understated.

Heading:

> **Building for the long term.**

Copy:

> Atoms for Humanity is a 501(c)(3) nonprofit research organization founded to develop scientific capabilities that can serve the public over long timescales.

Add:

> AFH's current research and infrastructure program is supported by a **$2.2 million grant from Astera Institute**.

Link:

**About the organization →**

to `/about`

Do not create a giant sponsor-logo wall.

### NVIDIA Inception

Create the content/data structure needed to display:

**NVIDIA Inception**

If AFH membership has been formally confirmed by launch, show it as a small institutional/program affiliation.

If membership has not yet been confirmed, do not publicly describe AFH as a member or partner. Keep the item hidden until confirmed.

---

# 15. Our Work Page

Route:

```text
/work
```

Title:

**Our Work | Atoms for Humanity**

Meta description:

> Atoms for Humanity develops open infrastructure for high-throughput molecular simulation and applies it to reaction discovery, catalyst design, and sustainable chemistry.

Hero:

> **From scientific infrastructure to molecular discovery.**

Intro:

> Our current strategy has two tightly connected parts: build the computational capabilities needed to explore chemistry at scale, and use those capabilities to investigate scientific problems that matter.

---

## Work Area 1 — High-Throughput Molecular Simulation

Heading:

> **Make molecular simulation massively scalable.**

Copy:

> Molecular simulation is traditionally organized around individual calculations and bespoke workflows. AFH is building systems that allow large computational experiments to be defined, distributed, executed, analyzed, and reproduced systematically.
>
> This capability forms the foundation for everything else we do.

Emphasize this as the primary current technical focus.

---

## Work Area 2 — Automated Reaction-Network Discovery

Heading:

> **Explore how chemistry can unfold.**

Copy:

> Chemical systems can contain vast networks of possible reactions and intermediates. AFH is developing computational approaches for discovering and navigating these networks automatically.
>
> Scalable reaction discovery can help transform chemical exploration from a process constrained by individual hypotheses into a more systematic search over possible chemistry.

This is the highest-priority research program after high-throughput simulation.

---

## Work Area 3 — Catalyst Design

Heading:

> **Design better pathways through chemical space.**

Copy:

> Catalysts determine which reactions become practical, selective, and efficient. AFH uses molecular simulation and computational exploration to investigate catalyst behavior and develop approaches to more systematic catalyst design.

---

## Work Area 4 — Sustainable Polymers and Materials

Heading:

> **Design molecular systems with their consequences in mind.**

Copy:

> Materials and polymers shape nearly every part of modern life. We are interested in molecular systems that can deliver useful performance while improving compatibility with human and environmental health.

---

## Infrastructure-to-Research Loop

Display:

```text
Scientific problem
      ↓
Infrastructure bottleneck
      ↓
Build general tools
      ↓
Run larger experiments
      ↓
Scientific discovery
      ↓
New scientific problem
      ↺
```

Caption:

> AFH uses frontier research to expose the limitations of today's computational infrastructure, then turns solutions to those limitations into general tools for the broader scientific community.

---

## Shared Infrastructure

Heading:

> **Infrastructure should serve more than one laboratory.**

Copy:

> AFH makes its scientific tools openly available and provides shared computation and ChemCloud access to external researchers where possible.

Mention:

**AFH Software Fellows**

Copy:

> AFH is establishing a Software Fellows program to support people building and improving important open scientific software.

Do not add further program details yet.

---

# 16. Technology Page

Route:

```text
/technology
```

Title:

**Technology | Atoms for Humanity**

Meta description:

> Explore the open qc\*, BigChem, and ChemCloud infrastructure Atoms for Humanity is developing for scalable molecular simulation.

Hero:

> **A software stack for computational science at scale.**

Intro:

> Quantum chemistry already has powerful scientific programs. The difficulty is making those programs easy to compose, automate, distribute, and operate across large computational workloads.
>
> AFH develops open infrastructure that connects scientific data, simulation programs, distributed computation, and cloud access into a coherent system.

---

# 17. Technology Architecture

Display a polished architecture diagram approximately:

```text
       Researchers              AI systems
             \                    /
              \                  /
               Scientific workflows
                       ↓
                   ChemCloud
                       ↓
                    BigChem
                       ↓
                     qc*
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
     qcdata          qccodec       qccompute
       ↕                                 ↓
   structure                     Simulation programs
       ↕                                 ↓
    qcconst                     CPU / GPU / HPC / Cloud
```

The exact visual arrangement may be improved, but preserve the conceptual layers.

---

# 18. qc\* Overview

Heading:

> **qc\*: interoperable building blocks for quantum chemistry.**

Copy:

> qc\* is a family of small, composable tools designed to make quantum chemistry easier to represent, operate, translate, analyze, and automate.

Show all packages.

---

## qcconst

Display name:

**qcconst**

Description:

> NIST/CODATA 2022 physical constants, conversion factors, and periodic-table data with clear source information for every value.

Repository:

https://github.com/atomsforhumanity/qcconst

---

## qcdata

Display name:

**qcdata**

Description:

> Elegant, intuitive data structures for quantum chemistry, including serializable calculation inputs and outputs and seamless Jupyter Notebook visualization.

Repository:

https://github.com/atomsforhumanity/qcdata

Documentation:

https://qcdata.docs.atomsforhumanity.org/

---

## qcinf

Display name:

**qcinf**

Description:

> Cheminformatics algorithms and molecular-structure utilities built around standardized qcdata objects.

Repository:

https://github.com/atomsforhumanity/qcinf

---

## qccodec

Display name:

**qccodec**

Description:

> A translation layer that encodes structured qcdata inputs into native quantum chemistry program inputs and decodes program outputs back into structured scientific data.

Repository:

https://github.com/atomsforhumanity/qccodec

---

## qccompute

Display name:

**qccompute**

Description:

> A common interface for operating quantum chemistry programs using standardized qcdata structures, supporting programs including TeraChem, Psi4, Q-Chem, NWChem, ORCA, Molpro, geomeTRIC, and others.

Repository:

https://github.com/atomsforhumanity/qccompute

Documentation:

https://qccompute.docs.atomsforhumanity.org/

---

# 19. BigChem

Heading:

**BigChem**

Description:

> A distributed application for running quantum chemistry calculations at scale across clusters of computers or cloud infrastructure.

Supporting line:

> BigChem turns individual molecular calculations into distributed computational workloads.

Repository:

https://github.com/mtzgroup/bigchem

---

# 20. ChemCloud

Heading:

**ChemCloud**

Description:

> A web application and Python client for exposing BigChem computational infrastructure securely over the internet.

Supporting line:

> ChemCloud allows researchers and software systems to access scalable molecular computation without directly operating the underlying cluster infrastructure.

Server:

https://github.com/mtzgroup/chemcloud-server

Python client:

https://github.com/mtzgroup/chemcloud-client

---

# 21. AFH Compute

Use only a restrained statement.

Heading:

> **Compute where the science needs it.**

Copy:

> AFH operates computational infrastructure to support development, research, and shared scientific workloads. The software stack is designed to operate across local machines, clusters, cloud resources, CPUs, and GPUs rather than depend on any single computing environment.

Do not publish cluster size, GPU counts, credits, or other capacity metrics in V1.

---

# 22. AI on the Technology Page

Heading:

> **Scientific infrastructure for researchers and AI.**

Copy:

> Modern coding agents such as Codex and Claude Code already work naturally with programmatic scientific software. AFH is designing its tools around composable interfaces that can be operated by both researchers and increasingly capable AI systems.
>
> The longer-term opportunity is not simply AI that proposes chemistry, but AI that can interact with a digital chemical laboratory: construct experiments, run simulations, inspect results, and iterate.

Do not describe Codex, Claude Code, or any AI company as a formal AFH partner.

---

# 23. GitHub CTA

At the bottom of Technology:

> **Built in the open.**

Copy:

> Explore Atoms for Humanity's open-source work and the qc\* ecosystem maintained by AFH.

CTA:

**View AFH on GitHub →**

https://github.com/atomsforhumanity

---

# 24. About Page

Route:

```text
/about
```

Title:

**About | Atoms for Humanity**

Meta description:

> Atoms for Humanity is a 501(c)(3) nonprofit research organization accelerating humanity's transition to a sustainable molecular future.

Hero:

> **Science and technology for a sustainable molecular future.**

---

## Mission

Heading:

> **Our mission**

Copy:

> **Accelerating humanity's transition to a sustainable molecular future.**
>
> We believe many of the challenges created by modern chemistry can ultimately be addressed by increasing humanity's ability to understand, discover, and design matter itself.

---

## Why AFH Exists

Heading:

> **A molecular problem requires molecular solutions.**

Copy:

> Chemical contamination, persistent materials, inefficient chemical processes, and other consequences of modern chemistry are not only problems of disposal or regulation. They can also reflect decisions embedded in the molecules and reactions themselves.
>
> AFH works upstream: toward the scientific capabilities needed to discover better molecular systems in the first place.

---

## Current Thesis

Heading:

> **Our first major bet is scalable simulation.**

Copy:

> Our mission is broader than any single technology. Today, however, we believe one of the highest-leverage interventions is to make molecular simulation dramatically more scalable, interoperable, and accessible.
>
> That capability can expand what scientists can explore directly and create the scientific environment increasingly capable AI systems need to perform computational experiments.

---

## Why a Nonprofit

Heading:

> **Scientific infrastructure is a public good.**

Copy:

> Foundational scientific infrastructure creates value across institutions, disciplines, and generations of researchers. It requires long-term maintenance, open access, stable stewardship, and incentives that are not always aligned with commercial returns.
>
> Atoms for Humanity is structured as a nonprofit so that the tools and scientific capabilities we build can remain focused on scientific and public benefit.

---

## Open Science

Heading:

> **Make the work reusable.**

Copy:

> We release software, data, workflows, protocols, and scientific results openly whenever practicable so others can use, extend, reproduce, and improve them.

---

## Support

Heading:

> **Supported by Astera Institute**

Copy:

> Atoms for Humanity's current infrastructure and research program is supported by a **$2.2 million grant from Astera Institute**.

Keep this visually understated.

If NVIDIA Inception membership is formally confirmed by launch, add a separate small affiliation:

**NVIDIA Inception**

Do not imply that NVIDIA funds AFH unless that is actually true.

---

# 25. Team Page

Route:

```text
/team
```

Title:

**Team | Atoms for Humanity**

Meta description:

> Meet the leadership, board, and research team behind Atoms for Humanity.

Hero:

> **The people behind Atoms for Humanity.**

Copy:

> AFH brings together scientific research, software engineering, technology, and institutional experience around a shared mission: building a more sustainable molecular future.

---

# 26. Leadership & Board

## Colton Hicks

Title:

**Founder & CEO · Director**

Bio:

> Colton Hicks is the founder and CEO of Atoms for Humanity. He earned his PhD in theoretical chemistry from Stanford University, where his work focused on distributed system design for quantum chemistry simulation, high throughput molecular analysis using group- and graph- theory, and organocatalyst design. Prior to his PhD, Colton worked as an analytic chemist building high throughput pipelines for synthetic DNA/RNA synthesis, as a researcher in macroeconomics and clinical psychology, and as a software engineer building automated trading systems at a hedge fund and scalable data systems at a medtech startup. His work at AFH sits at the intersection of scalable infrastructure, advanced molecular research, and high-performance computing.

Links:

**LinkedIn**
https://www.linkedin.com/in/coltonbh/

**GitHub**
https://github.com/coltonbh

Headshot target:

```text
/public/images/team/colton-hicks.webp
```

---

## Maryanna Saenko

Title:

**Director**

Bio:

> Maryanna Saenko is co-founder of Future Ventures and an early-stage venture capitalist investing in frontier technologies with the potential to improve human and planetary outcomes. Previously, she worked at Khosla Ventures, DFJ, Airbus Ventures, Lux Research, and Cabot Corporation. Her experience spans advanced materials, aerospace, energy, agriculture, healthcare, and artificial intelligence. She holds a BS in Biomedical Engineering and a BS and MS in Materials Science and Engineering from Carnegie Mellon University.

Headshot target:

```text
/public/images/team/maryanna-saenko.webp
```

---

## Mel van Londen

Title:

**Director**

Bio:

> Mel van Londen is the CEO and co-founder of Develop Health, an AI-driven healthcare technology company working to reduce administrative barriers to medication access. He has deep experience building and scaling software products across healthcare technology and a background in open-source software development.

Professional link:

https://www.linkedin.com/in/mvanlonden/

Headshot target:

```text
/public/images/team/mel-van-londen.webp
```

---

# 27. Research Team

## Jan Estrada Pabón

Title:

**Lead Computational Research Scientist**

Bio:

> Jan Estrada Pabón holds a PhD in theoretical chemistry from Stanford University and leads Atoms for Humanity’s computational research in automated reaction-path and reaction-network discovery. His doctoral work used high-throughput simulation to uncover complex reaction networks and chemical pathways beyond those initially hypothesized by researchers. At AFH, he applies these approaches to catalyst design, sustainable chemistry, and large-scale reaction discovery, while developing scientific workflows that both leverage and help shape AFH’s computational infrastructure.

Headshot target:

```text
/public/images/team/jan-estrada-pabon.webp
```

---

# 28. Organization & Governance Page

Route:

```text
/organization
```

Title:

**Organization & Governance | Atoms for Humanity**

Meta description:

> Legal, governance, tax-exempt, and organizational information for Atoms for Humanity Corp, a 501(c)(3) public charity.

Hero:

> **Organization & Governance**

Intro:

> Atoms for Humanity is committed to transparency in both our science and our institution. We make our core organizational and governing information publicly available.

---

# 29. Organization Details

Present this prominently and as ordinary HTML text.

**Legal name**
Atoms for Humanity Corp

**Public name**
Atoms for Humanity

**Organization type**
501(c)(3) public charity

**Federal EIN / Charity ID**
41-5138821

**State of incorporation**
Delaware

**Founded**
March 2026

**Official website**
www.atomsforhumanity.org

**Physical address**
107 Plaza Trusco
Taos, NM 87571
United States

**Mailing address**
1518 Paseo Del Pueblo Norte #1282
El Prado, NM 87529-8055
United States

---

# 30. Official Mission

Heading:

> **Official Mission**

Display the formal corporate mission exactly:

> The mission of the Corporation is to transition humanity to a sustainable molecular future, by, but not limited to, conducting and supporting research in quantum mechanics, chemistry, materials science, reaction network design, catalysis, polymers, and related fields; developing, maintaining, and distributing technology and software infrastructure to enable such research; and providing public education and outreach to increase awareness of the impact of modern chemistry on human health and the environment.

---

# 31. Board of Directors

Heading:

> **Board of Directors**

List:

### Colton Hicks

Founder & CEO · Director

### Maryanna Saenko

Director

### Mel van Londen

Director

Do not list corporate officer positions separately in V1.

---

# 32. Corporate and Tax Documents

Heading:

> **Corporate & Tax Documents**

Intro:

> These documents establish Atoms for Humanity's corporate governance and federal tax-exempt status.

Create these document links:

Each PDF link must open in a new browser tab.

### Certificate of Incorporation

> Official formation document for Atoms for Humanity Corp.

CTA:

**View PDF →**

Path:

```text
/documents/certificate-of-incorporation.pdf
```

### Bylaws

> Current governing bylaws of Atoms for Humanity Corp.

CTA:

**View PDF →**

Path:

```text
/documents/bylaws.pdf
```

### IRS 501(c)(3) Determination Letter

> Internal Revenue Service determination recognizing Atoms for Humanity Corp as a tax-exempt organization under Section 501(c)(3).

CTA:

**View PDF →**

Path:

```text
/documents/irs-determination-letter.pdf
```

These public PDFs are served from the permanent paths above.

---

# 33. Donation Page

Route:

```text
/donate
```

Title:

**Support Atoms for Humanity**

The page should be simple but should not be an empty "Coming Soon" placeholder.

Heading:

> **Support a sustainable molecular future.**

Copy:

> Donations to Atoms for Humanity support open scientific infrastructure and research designed to expand humanity's ability to discover better chemistry.
>
> We are preparing our online donation system now.

Prominent message:

> **Online donations are coming soon.**

Secondary links:

**Explore our work →**

**Learn about the organization →**

Do not collect payment information yet.

Do not add a fake donation form.

---

# 34. Public Education and Outreach

The official mission includes education and outreach, so the website should acknowledge this without making it a dominant current program.

On `/work`, near the bottom, include:

Heading:

> **Public understanding matters too.**

Copy:

> The consequences of molecular design extend far beyond chemistry laboratories. AFH works to improve public understanding of how modern chemistry affects human health and the environment and why advances in molecular science can help create better alternatives.

Do not create a separate Outreach page in V1.

---

# 35. Footer

Use the same footer on every page.

Include:

**Atoms for Humanity**

> Accelerating humanity's transition to a sustainable molecular future.

Then:

**Atoms for Humanity Corp**
501(c)(3) public charity
EIN 41-5138821

107 Plaza Trusco
Taos, NM 87571
United States

Navigation:

- Our Work
- Technology
- About
- Team
- Organization
- Make a Donation

External:

- GitHub
- LinkedIn

Bottom:

`© 2026 Atoms for Humanity`

Do not include a phone number or email address.

---

# 36. Homepage Donation CTA

The top-right navigation should contain a visually distinct but restrained button:

**Make a Donation**

Link:

```text
/donate
```

Do not use aggressive fundraising language elsewhere.

---

# 37. Repository Locations

The qc\* projects are maintained under:

https://github.com/atomsforhumanity

Repository links must remain centralized in one typed data file. BigChem and ChemCloud continue to use their existing repositories.

All project repository and documentation links must open in a new browser tab.

Use this project map:

- Display the new public package names.
- Keep every repository URL in one central typed data file.
- Do not hardcode repository URLs across page components.
- Never expose old package names such as `qcio` or `qcop` in primary website copy.
- Public names are `qcdata` and `qccompute`.

```text
qcconst
https://github.com/atomsforhumanity/qcconst

qcdata
https://github.com/atomsforhumanity/qcdata

qcinf
https://github.com/atomsforhumanity/qcinf

qccodec
https://github.com/atomsforhumanity/qccodec

qccompute
https://github.com/atomsforhumanity/qccompute

BigChem
https://github.com/mtzgroup/bigchem

ChemCloud Server
https://github.com/mtzgroup/chemcloud-server

ChemCloud Client
https://github.com/mtzgroup/chemcloud-client

AFH GitHub
https://github.com/atomsforhumanity
```

---

# 38. AI Language Rules

AI is important but must remain subordinate to the scientific mission.

Good:

> Researchers and AI systems can use the same computational infrastructure to perform molecular simulations at scale.

Good:

> AFH is building a digital chemical laboratory that increasingly autonomous scientific systems can operate.

Good:

> AI can generate hypotheses; scientific infrastructure gives it tools for testing them.

Avoid:

> AI-powered chemistry company

Avoid:

> Revolutionary AI drug/material discovery

Avoid:

> Autonomous chemistry already operating end-to-end

unless those claims become literally true.

---

# 39. Sustainability Language Rules

The central mission is sustainability, but avoid generic environmental branding or inaccurate claims about all modern chemistry.

Prefer:

> human and environmental health

> sustainable molecular future

> better chemistry

> molecular systems designed with their long-term consequences in mind

> chemical contamination

> persistent and harmful molecular systems

Avoid overly broad statements such as:

> Modern chemistry is toxic.

or:

> Synthetic chemicals are destroying the planet.

AFH should sound scientifically serious rather than activist.

---

# 40. Organizational Positioning

AFH should consistently be presented as:

> **A nonprofit scientific research institution building technological capabilities in pursuit of a broader planetary mission.**

AFH is not merely:

- a software foundation
- an AI company
- a cloud-computing service
- an academic laboratory
- an environmental advocacy organization

Its current strategic wedge is:

> **Open infrastructure for molecular simulation at massive scale.**

Its mission is:

> **A sustainable molecular future.**

---

# 41. External Researchers

Where relevant, state:

> AFH makes its open-source tools available to the scientific community and provides shared compute and ChemCloud access to external researchers and research groups.

Do not promise unrestricted or guaranteed compute access.

Avoid language suggesting a contractual service-level commitment.

---

# 42. AFH Software Fellows

Mention only:

> **AFH Software Fellows** — a program being established to support people building and improving important open scientific software.

Do not create a dedicated page yet.

Do not invent:

- application dates
- award amounts
- eligibility
- cohort sizes
- selection criteria

---

# 43. Astera Support

The website may publicly state:

> AFH's current infrastructure and research program is supported by a **$2.2 million grant from Astera Institute**.

Use this on About and optionally once on the homepage.

Do not repeat the funding amount throughout the site.

---

# 44. Google for Nonprofits Verification

The production website must make the following easily machine- and human-readable:

**Organization:** Atoms for Humanity Corp

**Domain:** www.atomsforhumanity.org

**EIN:** 41-5138821

**Physical address:**
107 Plaza Trusco, Taos, NM 87571

**Tax status:** 501(c)(3) public charity

**Mission:** Accelerating humanity's transition to a sustainable molecular future.

These exact facts should appear on `/organization`.

The full organization name should also appear in the footer.

Do not hide these details inside images, PDFs, JavaScript-rendered widgets, or inaccessible components.

---

# 45. JSON-LD Organization Data

Populate structured organization metadata using the verified values.

Conceptually:

```json
{
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "Atoms for Humanity",
  "legalName": "Atoms for Humanity Corp",
  "url": "https://www.atomsforhumanity.org",
  "taxID": "41-5138821",
  "foundingDate": "2026-03",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "107 Plaza Trusco",
    "addressLocality": "Taos",
    "addressRegion": "NM",
    "postalCode": "87571",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://github.com/atomsforhumanity",
    "http://linkedin.com/company/atoms-for-humanity"
  ]
}
```

Validate the exact Schema.org type/property support during implementation.

---

# 46. Assets Codex Should Expect

Team:

```text
/public/images/team/colton-hicks.webp
/public/images/team/maryanna-saenko.webp
/public/images/team/mel-van-londen.webp
/public/images/team/jan-estrada-pabon.webp
```

Documents:

```text
/public/documents/certificate-of-incorporation.pdf
/public/documents/bylaws.pdf
/public/documents/irs-determination-letter.pdf
```

If team photographs have not yet been supplied, use consistent designed placeholders.

Never substitute stock people.

---

# 47. Content That Should Not Appear in V1

Do not publish:

- detailed internal compute capacity
- GPU-credit amounts
- unpublished research results
- collaborators not explicitly approved
- publications not supplied
- private organizational email addresses
- phone numbers
- unconfirmed partnerships
- future fellowship details
- invented impact metrics
- fake user testimonials
- fake institutional logos
- claims of autonomous AI discovery that has not occurred

---

# 48. Final Homepage Narrative

The visitor should experience the homepage in this order:

### 1. Mission

**Building a sustainable molecular future.**

### 2. Planetary problem

Modern civilization needs better molecular systems.

### 3. Scientific bottleneck

Chemical space is enormous.

### 4. Technological opportunity

Simulation + compute + AI.

### 5. AFH intervention

Build a massively scalable digital chemical laboratory.

### 6. Technology

qc\* + BigChem + ChemCloud.

### 7. Scientific use

High-throughput simulation → reaction discovery → catalysts → sustainable materials.

### 8. Public-good model

Open tools, shared infrastructure, external researchers, Software Fellows.

### 9. Institution

501(c)(3), Astera support, long-term scientific mission.

---

# 49. Core Statements to Preserve

These ideas should serve as the conceptual anchors for the entire site:

> **Building a sustainable molecular future.**

> **The ability to simulate matter at scale should become a scientific public good.**

> **A digital chemical laboratory for humans and AI.**

> **Building the tools—and using them to do science.**

> **Scientific capabilities should compound.**

> **Our first major bet is scalable simulation.**

They do not all need to appear repeatedly. Each should have a clear purpose.

---

# 50. Success Test

After two minutes on the site, an unfamiliar visitor should understand:

**Why does AFH exist?**
To accelerate humanity's transition toward a sustainable molecular future.

**What problem is AFH trying to solve?**
Humanity needs far greater capacity to discover molecular systems compatible with human and environmental health.

**Why is this difficult?**
The spaces of possible molecules, reactions, catalysts, and materials are enormous.

**What is AFH's current strategy?**
Make molecular simulation interoperable and massively scalable.

**What is AFH building?**
An open digital chemical laboratory built from qc\*, BigChem, ChemCloud, computational infrastructure, and scientific workflows.

**Who can use it?**
Human researchers and increasingly capable AI systems.

**What science is AFH pursuing?**
High-throughput molecular simulation, reaction-network discovery, catalyst design, and sustainable polymer/material chemistry.

**Is AFH an AI company?**
No. AI is an important scientific user and force multiplier within a much broader mission.

**Is AFH only a software organization?**
No. Software infrastructure is AFH's first major strategic intervention toward a broader scientific and societal mission.

**Is it a real nonprofit institution?**
Yes. Atoms for Humanity Corp is a Delaware 501(c)(3) public charity, EIN 41-5138821, with publicly listed directors, address, governing documents, and tax-exempt documentation.

That is the standard the first production website should meet.
