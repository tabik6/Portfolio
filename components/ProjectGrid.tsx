import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"

export function ProjectGrid() {
  return (
    <div className="mx-auto grid max-w-shell grid-cols-1 gap-x-[6.4vw] gap-y-12 px-6 sm:px-10 md:grid-cols-2 md:gap-y-20 lg:px-[4.7vw] lg:gap-y-24">
      {projects.map((project, index) => {
        const featured = index === 0 || index === 3
        return (
          <div key={project.slug} className={featured ? "md:col-span-2" : ""}>
            <ProjectCard project={project} index={index} featured={featured} />
          </div>
        )
      })}
    </div>
  )
}
