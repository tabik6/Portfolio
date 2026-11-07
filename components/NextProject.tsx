import Link from "next/link"
import { formatProjectNumber, type Project } from "@/data/projects"

export function NextProject({
  project,
  index
}: {
  project: Project
  index: number
}) {
  return (
    <div className="flex justify-end pb-24 pt-28 sm:pb-32 sm:pt-40">
      <Link
        href={`/works/${project.slug}`}
        className="group text-right focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
      >
        <span className="eyebrow mb-3 block">Next project</span>
        <span className="text-lg tracking-[-0.025em] transition-colors group-hover:text-muted sm:text-xl">
          {formatProjectNumber(index)} / {project.title} ({project.year}) <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  )
}
