import Image from "next/image"
import type { Project } from "@/data/projects"

export function ProjectGallery({
  project,
  startIndex = 0
}: {
  project: Project
  startIndex?: number
}) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-y-24">
      {project.images.map((image, index) => {
        const half = image.layout === "half"
        return (
          <figure
            key={`${image.src}-${index}`}
            className={`${half ? "sm:col-span-1" : "sm:col-span-2"} ${half && index === 1 ? "sm:col-start-1" : ""}`}
          >
            <div className="image-mat overflow-hidden bg-[#f0f1ef] p-[1.4%]">
              <div className="relative overflow-hidden bg-[#eeefec]" style={{ aspectRatio: image.aspect ?? (half ? "4 / 3" : "16 / 9") }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={half ? "(max-width: 640px) 100vw, 45vw" : "90vw"}
                  className="object-cover"
                />
              </div>
            </div>
            {(image.caption || image.size) && (
              <figcaption className="mt-3 flex justify-between gap-6 text-[10px] text-muted">
                {image.caption && <span>{String(index + startIndex + 1).padStart(2, "0")} — {image.caption}</span>}
                {image.size && <span className="shrink-0 font-mono text-[#b8bab6]">{image.size}</span>}
              </figcaption>
            )}
          </figure>
        )
      })}
    </div>
  )
}
