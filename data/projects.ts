export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  size?: string
  layout?: "full" | "half"
  aspect?: string
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
  coverAlt: string
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: "kronos-os",
    title: "Kronos OS",
    subtitle: "Minimalist Desktop Shell & Workflow Architecture",
    year: "2024",
    discipline: "UI/UX Design",
    category: "Minimalist Desktop Shell",
    type: "Concept",
    description:
      "A keyboard-driven desktop shell engineered for focused engineering and design environments. Removes ambient OS clutter in favor of modal command palettes, split workspaces, and monochrome telemetry.",
    coverImage: "/images/kronos-os/cover.svg",
    coverAlt: "Monochrome desktop workspace with a floating command palette",
    images: [
      {
        src: "/images/kronos-os/cover.svg",
        alt: "Kronos desktop workspace shown on a monitor",
        caption: "Desktop Workspace Layout",
        size: "2880 × 1800",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/kronos-os/palette.svg",
        alt: "Kronos command palette and keyboard shortcuts",
        caption: "Modal Trigger Palette & Typography",
        layout: "half",
        aspect: "4 / 3"
      },
      {
        src: "/images/kronos-os/specimen.svg",
        alt: "Kronos system specimen with grid and telemetry",
        caption: "System Specimen & Telemetry",
        size: "Grid System",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  },
  {
    slug: "aura-health",
    title: "Aura Health",
    subtitle: "A calmer way to care for your health",
    year: "2024",
    discipline: "UI/UX Design",
    category: "Telehealth Suite",
    type: "Digital Product",
    description:
      "A considered telehealth experience that brings everyday health tracking and human care into one clear, reassuring space. Designed to make progress feel understandable, not overwhelming.",
    coverImage: "/images/aura-health/cover.svg",
    coverAlt: "Two mobile health app screens with a soft blue interface",
    images: [
      {
        src: "/images/aura-health/cover.svg",
        alt: "Aura Health mobile app overview",
        caption: "A more human health overview",
        size: "Mobile UI",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/aura-health/detail.svg",
        alt: "Aura Health appointment and health tracking screens",
        caption: "Appointments & daily insights",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  },
  {
    slug: "mono-studio",
    title: "Mono Studio",
    subtitle: "A visual identity built on quiet confidence",
    year: "2023",
    discipline: "Logo & Brand Identity",
    category: "Graphic Design",
    type: "Visual Identity",
    description:
      "A restrained identity for an architecture practice, balancing precise typographic structure with tactile, archival materials. A flexible system made to live across print and space.",
    coverImage: "/images/mono-studio/cover.svg",
    coverAlt: "Mono Studio identity printed on a minimal brand stationery set",
    images: [
      {
        src: "/images/mono-studio/cover.svg",
        alt: "Mono Studio stationery and brand identity system",
        caption: "Identity in print",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/mono-studio/detail.svg",
        alt: "Mono Studio logotype and typography system",
        caption: "Logotype & typographic rhythm",
        size: "Identity System",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  },
  {
    slug: "flux-pay",
    title: "Flux Pay",
    subtitle: "Developer Dashboard & Payment Infrastructure",
    year: "2023",
    discipline: "UI/UX Design",
    category: "Developer Systems",
    type: "Product Design",
    description:
      "A focused operational dashboard that makes complex payment activity easier to read. Clear hierarchy, thoughtful data density, and a quiet interface keep teams close to what matters.",
    coverImage: "/images/flux-pay/cover.svg",
    coverAlt: "Flux Pay analytics dashboard on a desktop monitor",
    images: [
      {
        src: "/images/flux-pay/cover.svg",
        alt: "Flux Pay dashboard with payment activity and analytics",
        caption: "Payment operations dashboard",
        size: "Desktop UI",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/flux-pay/detail.svg",
        alt: "Flux Pay transaction table and revenue analytics",
        caption: "Activity, made legible",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  },
  {
    slug: "nordic-archive",
    title: "Nordic Archive",
    subtitle: "Objects for a considered home",
    year: "2023",
    discipline: "Graphic Design & Art Direction",
    category: "Digital Commerce",
    type: "Art Direction",
    description:
      "An editorial commerce direction for enduring furniture and everyday objects. A warm, spacious catalog lets material, craft, and the details of each object take the lead.",
    coverImage: "/images/nordic-archive/cover.svg",
    coverAlt: "Nordic Archive furniture editorial with a sculptural chair",
    images: [
      {
        src: "/images/nordic-archive/cover.svg",
        alt: "Nordic Archive chair campaign and online store",
        caption: "Objects in their own space",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/nordic-archive/detail.svg",
        alt: "Furniture product detail page with material samples",
        caption: "Material, form, and detail",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  },
  {
    slug: "syntax-fonts",
    title: "Syntax Fonts",
    subtitle: "An instrument for type exploration",
    year: "2022",
    discipline: "Graphic Design & Typography System",
    category: "Typography",
    type: "Specimen",
    description:
      "A typographic specimen and exploration tool for variable type. A modular grid brings glyphs, weights, and expressive combinations into one legible, hands-on composition.",
    coverImage: "/images/syntax-fonts/cover.svg",
    coverAlt: "Typography specimen with large type and a character grid",
    images: [
      {
        src: "/images/syntax-fonts/cover.svg",
        alt: "Syntax Fonts specimen and typographic interface",
        caption: "A system for seeing type",
        layout: "full",
        aspect: "16 / 9"
      },
      {
        src: "/images/syntax-fonts/detail.svg",
        alt: "Syntax Fonts character specimen and weight comparison",
        caption: "Glyphs, weights, and rhythm",
        layout: "half",
        aspect: "4 / 3"
      }
    ]
  }
]

export const formatProjectNumber = (index: number) =>
  String(index + 1).padStart(2, "0")

export const formatProjectTotal = () => String(projects.length).padStart(2, "0")
