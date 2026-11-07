import Image from "next/image"
import Link from "next/link"
import { formatProjectNumber, type Project } from "@/data/projects"

export function ProjectCard({
  project,
  index,
  featured = false
}: {
  project: Project
  index: number
  featured?: boolean
}) {
  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}>
      <Link
        href={`/works/${project.slug}`}
        className="group block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
        aria-label={`View ${project.title} project`}
      >
        <div className="image-mat overflow-hidden bg-[#f0f1ef] p-[3.4%]">
          <div className="relative overflow-hidden bg-[#eeefec]" style={{ aspectRatio: featured ? "2.02 / 1" : "1.38 / 1" }}>
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority={index === 0}
              sizes={featured ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 44vw"}
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-90"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[10px] leading-relaxed sm:mt-5">
          <span className="font-mono text-[9px] text-muted">{formatProjectNumber(index)}</span>
          <h2 className="text-[14px] font-normal text-ink">{project.title}</h2>
          <span className="text-muted">/ {project.discipline}{project.category ? ` — ${project.category}` : ""}</span>
          <span className="ml-auto font-mono text-[9px] text-muted">{project.year}</span>
        </div>
      </Link>
    </article>
  )
}
