import { Marquee } from "@/components/Marquee"
import { ProjectGrid } from "@/components/ProjectGrid"
import { ContactBlock } from "@/components/ContactBlock"

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex min-h-[420px] max-w-shell items-center px-6 pb-14 pt-20 sm:min-h-[500px] sm:px-10 sm:pb-20 lg:min-h-[520px] lg:px-[4.7vw]">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.075em]">
            Rodlyta Ittabi ulya
          </h1>
          <p className="mt-6 text-xs leading-6 text-[#656764] sm:mt-7 sm:text-sm">
            UI/UX &amp; Graphic Designer — Lumajang, East Java, Indonesia.
            <br />
            Spatial interfaces, design systems, and visual identities.
          </p>
        </div>
      </section>

      <section id="works" aria-label="Selected works" className="scroll-mt-20">
        <div className="mb-9 sm:mb-12">
          <Marquee word="Works" />
        </div>
        <ProjectGrid />
      </section>

      <section aria-label="Contact" className="pt-28 sm:pt-40">
        <div className="mb-8 sm:mb-12">
          <Marquee word="Contact" />
        </div>
        <ContactBlock />
      </section>
    </>
  )
}
