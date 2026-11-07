import type { Project } from "@/data/projects"

export function ProjectHeader({
  project,
  index
}: {
  project: Project
  index: number
}) {
  return (
    <section className="max-w-[740px] pt-16 sm:pt-20">
      <p className="eyebrow mb-6">Project / {String(index + 1).padStart(2, "0")}</p>
      <h1 className="text-[clamp(3.2rem,8vw,6.7rem)] leading-[0.94] tracking-[-0.07em]">{project.title}</h1>
      {project.subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{project.subtitle}</p>
      )}
      <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] leading-relaxed text-muted">
        <div className="flex gap-3"><dt className="text-ink">Year</dt><dd>{project.year}</dd></div>
        <span aria-hidden="true" className="text-line">·</span>
        <div className="flex gap-3"><dt className="text-ink">Discipline</dt><dd>{project.discipline}</dd></div>
        {project.type && (
          <>
            <span aria-hidden="true" className="text-line">·</span>
            <div className="flex gap-3"><dt className="text-ink">Type</dt><dd>{project.type}</dd></div>
          </>
        )}
      </dl>
      <p className="mt-8 max-w-[620px] text-sm leading-[1.8] text-[#555754] sm:mt-10 sm:text-[15px]">
        {project.description}
      </p>
    </section>
  )
}
