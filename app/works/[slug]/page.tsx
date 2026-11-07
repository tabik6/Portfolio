import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { NextProject } from "@/components/NextProject"
import { ProjectGallery } from "@/components/ProjectGallery"
import { ProjectHeader } from "@/components/ProjectHeader"
import { formatProjectNumber, formatProjectTotal, projects } from "@/data/projects"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)
  return project
    ? { title: project.title, description: project.description }
    : { title: "Project not found" }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) notFound()

  const project = projects[index]
  const nextIndex = (index + 1) % projects.length
  const nextProject = projects[nextIndex]

  return (
    <article className="mx-auto max-w-shell px-6 pb-4 sm:px-10 lg:px-[4.7vw]">
      <div className="flex items-center justify-between pt-12 text-[10px] text-muted sm:pt-16">
        <Link href="/#works" className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4">
          ← Index
        </Link>
        <span className="font-mono tracking-[0.1em]">
          {formatProjectNumber(index)} / {formatProjectTotal()}
        </span>
      </div>

      <ProjectHeader project={project} index={index} />

      <figure className="mt-16 sm:mt-20">
        <div className="image-mat overflow-hidden bg-[#f0f1ef] p-[1.4%]">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#eeefec]">
            <Image
              src={project.images[0]?.src ?? project.coverImage}
              alt={project.images[0]?.alt ?? project.coverAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
        <figcaption className="mt-3 flex justify-between gap-6 text-[10px] text-muted">
          <span>01 — {project.images[0]?.caption ?? project.title}</span>
          {project.images[0]?.size && <span className="font-mono text-[#b8bab6]">{project.images[0].size}</span>}
        </figcaption>
      </figure>

      <ProjectGallery project={{ ...project, images: project.images.slice(1) }} startIndex={1} />
      <NextProject project={nextProject} index={nextIndex} />
    </article>
  )
}
