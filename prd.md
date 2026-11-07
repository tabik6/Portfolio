Build a complete personal portfolio website using **Next.js (App Router) + TypeScript + Tailwind CSS**.

I have provided **two reference images** showing the intended design:

- **Reference Image 1:** Homepage / Works page
- **Reference Image 2:** Project detail page

Use these reference images as the **primary visual reference**.

The final website should reproduce the same overall visual language, layout rhythm, typography hierarchy, spacing, image treatment, and minimalist editorial feeling.

---

# 1. PROJECT OVERVIEW

This is my personal portfolio website.

Name:

**RODLYTA ITTABI ULYA**

Role:

**UI/UX & Graphic Designer — Lumajang, East Java, Indonesia**

Description:

**Spatial interfaces, design systems, and visual identities.**

The portfolio contains:

- UI/UX Design
- Graphic Design
- Branding
- Typography
- Visual Identity
- Digital Design
- Experimental Design

The website should feel like a **designer's personal visual archive / editorial portfolio**.

It should NOT feel like:

- a SaaS website
- a corporate website
- a generic portfolio template
- a template with excessive cards
- a typical modern landing page

The focus should be on:

- typography
- whitespace
- imagery
- composition
- hierarchy
- subtle interactions

---

# 2. TECHNOLOGY STACK

Use:

- **Next.js**
- **App Router**
- **TypeScript**
- **Tailwind CSS**
- **next/image**

Optional:

- Framer Motion only if genuinely useful for subtle animations

Do not introduce unnecessary libraries.

The project should be production-ready and easy to maintain.

---

# 3. VISUAL STYLE

The overall design should be:

- minimalist
- editorial
- sophisticated
- quiet
- modern
- typography-driven
- spacious
- monochromatic
- slightly experimental
- design-focused

The website should feel similar to a **high-end independent designer portfolio / design publication**.

Use primarily:

- off-white / very light gray background
- near-black typography
- muted gray secondary text
- very subtle borders

Do NOT introduce unnecessary colors.

Avoid:

- gradients
- glassmorphism
- colorful UI
- excessive shadows
- excessive rounded corners
- large buttons
- decorative illustrations
- excessive cards
- excessive animations
- overly complicated UI

The design should feel calm and intentional.

---

# 4. TYPOGRAPHY

Use a modern grotesk / neo-grotesk sans-serif.

Preferred:

- Geist
- Inter
- Helvetica Neue
- Arial

Prefer **Geist** or **Inter**.

Typography is one of the most important visual elements.

Use:

- large display typography for titles
- medium typography for project names
- very small typography for metadata
- muted gray for secondary information
- bold/italic typography for the large Works and Contact marquee

Do not use too many font families.

---

# 5. GLOBAL HEADER

Create a very minimal **fixed or sticky header**.

Desktop layout:

LEFT:

**RODLYTA ITTABI ULYA**

RIGHT:

**Works   About   Contact**

There must be **NO Archive link**.

The navigation must contain ONLY:

- Works
- About
- Contact

Header:

- approximately 50–60px high
- generous horizontal padding
- subtle background
- minimal visual weight

The name/logo should use small uppercase typography.

Navigation should use small typography.

Use subtle hover transitions.

Do not create a large navigation bar.

On mobile, create a compact responsive navigation while preserving the same minimalist visual character.

---

# 6. ROUTES

Use Next.js App Router.

Required routes:

```text
/
 /works/[slug]
 /about
 /contact
```

There must be NO `/archive` route.

There must be NO Archive navigation item.

---

# 7. HOMEPAGE

Route:

`/`

The homepage should follow **Reference Image 1**.

The homepage consists primarily of:

1. Introduction
2. Works marquee
3. Project grid
4. Contact marquee
5. Contact information
6. Footer

---

# 8. HOMEPAGE — INTRODUCTION

At the top of the homepage, create generous whitespace.

Use a small label:

**PORTFOLIO**

Then a large heading:

**Rodlyta Ittabi ulya**

Below:

**UI/UX & Graphic Designer — Lumajang, East Java, Indonesia.**

Then:

**Spatial interfaces, design systems, and visual identities.**

The composition should feel sparse and editorial.

Do not immediately fill the screen with project cards.

---

# 9. WORKS MARQUEE

After the introduction, create a large horizontal typography marquee.

Repeated text:

**Works Works Works Works Works Works**

The word should repeat continuously across the viewport.

Alternate between:

- solid black bold italic
- outlined text

Visual example:

**Works** `Works` **Works** `Works` **Works**

The typography should be oversized.

Parts of the text can naturally be clipped by the viewport.

Animation:

- slow
- continuous
- smooth
- infinite
- subtle

Do not make it distracting.

Respect:

`prefers-reduced-motion`

---

# 10. WORKS PROJECT GRID

Below the Works marquee, display the portfolio projects.

The project layout should be editorial rather than a standard equal card grid.

Use a combination of:

- full-width featured projects
- two-column projects

Desktop structure should approximately follow:

```text
Project 01
FULL WIDTH

Project 02        Project 03
TWO COLUMNS

Project 04
FULL WIDTH

Project 05        Project 06
TWO COLUMNS
```

Maintain generous whitespace.

Images should feel like editorial artwork.

Do not use heavy cards.

Images should have:

- rectangular shape
- little or no border radius
- no heavy shadow
- clean presentation

---

# 11. INITIAL PROJECTS

Create these initial project entries:

### 01 — Kronos OS

Discipline:

**UI/UX Design**

Category:

**Minimalist Desktop Shell**

Year:

**2024**

---

### 02 — Aura Health

Discipline:

**UI/UX Design**

Category:

**Telehealth Suite**

Year:

**2024**

---

### 03 — Mono Studio

Discipline:

**Logo & Brand Identity**

Category:

**Graphic Design**

Year:

**2023**

---

### 04 — Flux Pay

Discipline:

**UI/UX Design**

Category:

**Developer Systems**

Year:

**2023**

---

### 05 — Nordic Archive

Discipline:

**Graphic Design & Art Direction**

Year:

**2023**

---

### 06 — Syntax Fonts

Discipline:

**Graphic Design & Typography System**

Year:

**2022**

Use placeholder images if actual project images are not available.

Organize them so I can easily replace the placeholders later.

---

# 12. PROJECT CARD

Each project should contain:

- project number
- title
- discipline
- category
- year
- cover image

Example:

```text
01   Kronos OS

UI/UX Design — Minimalist Desktop Shell                 2024
```

Metadata should be very small and subtle.

Do not allow metadata to compete with the image.

---

# 13. PROJECT HOVER

Every project should be clickable.

On hover:

- image subtly scales up
- transition is smooth
- optionally slightly reduce image opacity
- cursor indicates that the project is clickable

Keep the interaction restrained.

No dramatic animations.

---

# 14. PROJECT URL

Clicking a project should navigate to:

```text
/works/[slug]
```

Examples:

```text
/works/kronos-os
/works/aura-health
/works/mono-studio
/works/flux-pay
/works/nordic-archive
/works/syntax-fonts
```

Use a dynamic Next.js route.

---

# 15. PROJECT DETAIL PAGE

The project detail page should follow **Reference Image 2**.

Create one reusable project detail template.

Example:

`/works/kronos-os`

The same template must work for every project.

---

# 16. PROJECT DETAIL — TOP

At the top:

LEFT:

**← Index**

RIGHT:

**01 / 06**

The "Index" link should return to the Works section on the homepage.

The project counter must be generated automatically.

For example:

```text
01 / 06
02 / 06
03 / 06
...
```

If the number of projects changes, the total should automatically update.

---

# 17. PROJECT DETAIL — HEADER

Large title:

**Kronos OS**

Subtitle:

**Minimalist Desktop Shell & Workflow Architecture**

Metadata:

```text
Year          2024
Discipline    UI/UX & Interaction
Type          Concept
```

Then description:

**A keyboard-driven desktop shell engineered for focused engineering and design environments. Removes ambient OS clutter in favor of modal command palettes, split workspaces, and monochrome telemetry.**

The description should have a limited width.

Do not make it full-width.

Use generous whitespace around the project introduction.

---

# 18. PROJECT DETAIL — HERO IMAGE

Below the introduction, display a large hero image.

The image should occupy most of the content width.

Use a clean rectangular presentation.

Do not use:

- rounded cards
- heavy shadows
- decorative frames

Below the image:

LEFT:

**01 — Desktop Workspace Layout**

RIGHT:

**2880 × 1800**

Use very small muted typography.

---

# 19. PROJECT DETAIL — IMAGE GALLERY

Support flexible project galleries.

Example:

```text
FULL WIDTH IMAGE

        ↓

TWO COLUMN IMAGES

[ IMAGE ]    [ IMAGE ]

        ↓

FULL WIDTH IMAGE
```

Each image should have an optional caption and size.

Example:

```text
02 — Modal Trigger Palette & Typography

03 — System Specimen & Telemetry
```

Maintain large whitespace between image groups.

---

# 20. NEXT PROJECT

At the bottom of every project page, create:

Small label:

**NEXT PROJECT**

Large link:

**02 / Aura Health (2024) →**

The next project must be determined automatically from the project order.

For example:

```text
Kronos OS
↓
NEXT PROJECT
02 / Aura Health (2024) →
```

For the second:

```text
Aura Health
↓
NEXT PROJECT
03 / Mono Studio (2023) →
```

For the final project, loop back to the first project.

Do not hardcode these links.

---

# 21. FOOTER

Create a minimal footer.

LEFT:

**Rodlyta Ittabi ulya © 2024**

RIGHT:

**ReadCV   Dribbble   Twitter / X   GitHub**

Use very small muted typography.

Keep generous whitespace.

---

# 22. CONTACT MARQUEE

Before the contact information on the homepage, create another large typography marquee.

Repeated text:

**Contact Contact Contact Contact Contact**

Use the same visual treatment as Works:

- solid bold italic text
- outlined text
- oversized typography
- horizontal movement
- slow animation

---

# 23. CONTACT SECTION

Small label:

**INQUIRIES**

Large email:

**Rodlytaittabi@gmail.com**

Then:

**Currently open for select digital product design commissions and design system architecture.**

Make the email clickable using:

`mailto:Rodlytaittabi@gmail.com`

Keep this section spacious and minimal.

---

# 24. ABOUT PAGE

Route:

`/about`

Maintain exactly the same visual language as the homepage.

Large heading:

**About**

Include a short introduction:

**Rodlyta Ittabi ulya is a UI/UX and graphic designer based in Lumajang, East Java, Indonesia. His work explores interfaces, visual systems, typography, and spatial relationships through a minimal and structured visual language.**

Then include sections for:

- Skills
- Design disciplines
- Tools
- Experience / background

Do not create a conventional resume dashboard.

Keep it editorial and typography-driven.

---

# 25. CONTACT PAGE

Route:

`/contact`

Create an extremely minimal contact page.

Small label:

**INQUIRIES**

Large email:

**Rodlytaittabi@gmail.com**

Description:

**Currently open for select digital product design commissions and design system architecture.**

Include social links:

- ReadCV
- Dribbble
- Twitter / X
- GitHub

---

# 26. CENTRALIZED PROJECT DATA

This is extremely important.

The portfolio must be built so that I can easily:

- add projects
- remove projects
- reorder projects
- change project information
- replace images
- change captions
- change project layouts

without modifying React components.

Create:

```text
data/projects.ts
```

All project content must come from this file.

The components should only handle presentation.

---

# 27. PROJECT TYPE

Create a reusable TypeScript interface.

Example:

```ts
export interface ProjectImage {
  src: string
  caption?: string
  size?: string
  layout?: "full" | "half"
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  year: string
  discipline: string
  category?: string
  type?: string
  description: string
  coverImage: string
  images: ProjectImage[]
}
```

Then:

```ts
export const projects: Project[] = [
  {
    slug: "kronos-os",
    title: "Kronos OS",
    subtitle: "Minimalist Desktop Shell & Workflow Architecture",
    year: "2024",
    discipline: "UI/UX & Interaction",
    category: "Minimalist Desktop Shell",
    type: "Concept",

    description:
      "A keyboard-driven desktop shell engineered for focused engineering and design environments.",

    coverImage: "/images/kronos-os/cover.webp",

    images: [
      {
        src: "/images/kronos-os/01.webp",
        caption: "Desktop Workspace Layout",
        size: "2880 × 1800",
        layout: "full"
      },
      {
        src: "/images/kronos-os/02.webp",
        caption: "Modal Trigger Palette & Typography",
        layout: "half"
      },
      {
        src: "/images/kronos-os/03.webp",
        caption: "System Specimen & Telemetry",
        layout: "half"
      }
    ]
  }
]
```

---

# 28. EASY PROJECT EDITING

I should only need to edit:

```text
data/projects.ts
```

to change project content.

Changing:

```ts
title: "Kronos OS"
```

to:

```ts
title: "My New Project"
```

must automatically update everywhere.

Changing:

```ts
year: "2024"
```

must update both:

- homepage
- project detail page
- next project navigation

Changing the description or images must also automatically update the website.

---

# 29. ADDING A NEW PROJECT

Adding a new project should require only two things.

### Step 1

Create a folder:

```text
public/images/my-project/
```

Put the images inside:

```text
cover.webp
01.webp
02.webp
03.webp
```

### Step 2

Add a new object to:

```text
data/projects.ts
```

Example:

```ts
{
  slug: "my-project",
  title: "My Project",
  subtitle: "My Project Subtitle",
  year: "2026",
  discipline: "UI/UX Design",
  category: "Product Design",
  type: "Concept",

  description:
    "Project description.",

  coverImage: "/images/my-project/cover.webp",

  images: [
    {
      src: "/images/my-project/01.webp",
      caption: "Main Interface",
      layout: "full"
    },
    {
      src: "/images/my-project/02.webp",
      caption: "Detail Exploration",
      layout: "half"
    },
    {
      src: "/images/my-project/03.webp",
      caption: "Visual System",
      layout: "half"
    }
  ]
}
```

Nothing else should need to be changed.

---

# 30. AUTOMATIC PROJECT NUMBERING

Do NOT require manually entering:

```text
01
02
03
```

Generate the project number automatically from the project's position in the array.

If there are 6 projects:

```text
01 / 06
02 / 06
03 / 06
04 / 06
05 / 06
06 / 06
```

If I add another project:

```text
01 / 07
02 / 07
...
07 / 07
```

The homepage project numbers should also update automatically.

If I reorder the array, the project order on the website should automatically change.

---

# 31. AUTOMATIC NEXT PROJECT

Determine the next project from the project's index in:

```text
data/projects.ts
```

Do not hardcode next project links.

If the current project is the last project, loop back to the first project.

---

# 32. FLEXIBLE IMAGE LAYOUT

The project detail page must support:

```ts
layout: "full"
```

and:

```ts
layout: "half"
```

Example:

```ts
images: [
  {
    src: "/images/project/01.webp",
    caption: "Hero Image",
    layout: "full"
  },
  {
    src: "/images/project/02.webp",
    caption: "Detail A",
    layout: "half"
  },
  {
    src: "/images/project/03.webp",
    caption: "Detail B",
    layout: "half"
  },
  {
    src: "/images/project/04.webp",
    caption: "Additional Exploration",
    layout: "full"
  }
]
```

The gallery component should automatically render the appropriate layout.

I should be able to create different project galleries without changing the component code.

---

# 33. OPTIONAL CONTENT

These fields should be optional:

- subtitle
- category
- type
- image caption
- image size

If a field is missing, do not display an empty label.

For example, do not render:

```text
Type —
```

if the project does not have a type.

---

# 34. IMAGE FOLDER STRUCTURE

Use:

```text
public/
└── images/
    ├── kronos-os/
    │   ├── cover.webp
    │   ├── 01.webp
    │   ├── 02.webp
    │   └── 03.webp
    │
    ├── aura-health/
    │   ├── cover.webp
    │   ├── 01.webp
    │   └── 02.webp
    │
    ├── mono-studio/
    │   ├── cover.webp
    │   └── 01.webp
    │
    ├── flux-pay/
    │   ├── cover.webp
    │   └── 01.webp
    │
    ├── nordic-archive/
    │   ├── cover.webp
    │   └── 01.webp
    │
    └── syntax-fonts/
        ├── cover.webp
        └── 01.webp
```

This keeps projects organized.

---

# 35. TAILWIND CSS

Use **Tailwind CSS throughout the project**.

Use Tailwind for:

- layout
- spacing
- typography
- colors
- responsive breakpoints
- grids
- flexbox
- borders
- transitions
- hover states

Avoid creating large amounts of custom CSS.

If custom CSS is necessary, keep it minimal and centralized.

Create reusable components rather than duplicating styles.

---

# 36. COMPONENT STRUCTURE

Use a clean reusable component architecture.

Suggested:

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── works/
    └── [slug]/
        └── page.tsx

components/
├── Header.tsx
├── Footer.tsx
├── Marquee.tsx
├── ProjectCard.tsx
├── ProjectGrid.tsx
├── ProjectHeader.tsx
├── ProjectGallery.tsx
└── NextProject.tsx

data/
└── projects.ts

public/
└── images/
```

Keep content separate from presentation.

---

# 37. IMAGE OPTIMIZATION

Use:

`next/image`

Use:

- WebP
- AVIF when appropriate
- responsive image sizes
- lazy loading
- priority loading for the first important image

Do not load huge original files unnecessarily.

The website should remain lightweight despite being image-heavy.

---

# 38. RESPONSIVE DESIGN

Desktop is the primary reference.

However, the website must work properly on:

- desktop
- laptop
- tablet
- mobile

Desktop:

- large whitespace
- strong typography
- editorial project grid
- asymmetric composition

Tablet:

- moderately reduced spacing
- preserve hierarchy

Mobile:

- one-column projects
- reduced typography
- compact navigation
- smaller marquee
- generous vertical spacing
- large project imagery

Do not simply scale down the desktop design.

Create intentional mobile layouts.

---

# 39. ANIMATION

Use restrained animation.

Allowed:

- subtle page fade
- image reveal
- slow marquee
- image hover scale
- smooth transitions

Avoid:

- excessive parallax
- bouncing
- flashy transitions
- excessive scroll effects
- unnecessary animation

Respect:

`prefers-reduced-motion`

---

# 40. ACCESSIBILITY

Implement:

- semantic HTML
- correct heading hierarchy
- descriptive alt text
- keyboard navigation
- visible focus states
- sufficient contrast
- reduced-motion support

All navigation links and project cards must be keyboard accessible.

---

# 41. PERFORMANCE

Prioritize performance.

Use:

- Next.js Server Components where appropriate
- Next.js Image Optimization
- lazy loading
- responsive image sizes
- minimal client-side JavaScript
- CSS transitions where possible
- minimal dependencies

Do not add libraries unless they provide a clear benefit.

---

# 42. IMPORTANT VISUAL REQUIREMENT

The two provided reference images are the **primary design reference**.

Do not merely copy their content.

Recreate their:

- visual rhythm
- spacing
- proportions
- typography hierarchy
- image presentation
- editorial composition
- minimalist character

Pay particular attention to:

1. Large whitespace
2. Very light background
3. Black typography
4. Small muted metadata
5. Strong typography hierarchy
6. Oversized Works marquee
7. Oversized Contact marquee
8. Editorial project arrangement
9. Large project imagery
10. Asymmetric layouts
11. Minimal navigation
12. Generous vertical spacing
13. Subtle interactions
14. Restrained animation
15. Gallery-like presentation

The final website should feel like a **designer's personal visual archive**, not a generic portfolio template.

---

# 43. FINAL REQUIREMENT

Build this as a **real, working Next.js application**, not a static visual mockup.

All navigation must work.

Project cards must be clickable.

Dynamic project pages must work.

Project content must come from:

```text
data/projects.ts
```

Images must come from:

```text
public/images/
```

Adding a new project should require only:

1. adding its image folder
2. adding its data object

No component modifications should normally be necessary.

The project numbering must update automatically.

The total project count must update automatically.

The next-project navigation must update automatically.

The homepage must automatically reflect changes to the project data.

The project detail pages must automatically reflect changes to the project data.

Navigation:

```text
Works → /
About → /about
Contact → /contact
```

There must be **NO Archive page** and **NO Archive navigation item**.

Keep the entire system clean, modular, responsive, performant, and easy for a designer to maintain without needing to modify the React architecture every time a new project is added.