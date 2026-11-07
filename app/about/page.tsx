export const metadata = { title: "About" }

const skills = [
  ["Product", "UI/UX design, interaction, prototyping"],
  ["Identity", "Visual identity, art direction, graphic design"],
  ["Systems", "Design systems, typography, digital experiences"]
]

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-shell px-6 pb-24 pt-20 sm:px-10 sm:pb-36 sm:pt-32 lg:px-[4.7vw]">
      <p className="eyebrow mb-6">A little about me</p>
      <h1 className="text-[clamp(4rem,11vw,9rem)] leading-[0.88] tracking-[-0.08em]">About</h1>
      <p className="mt-12 max-w-[760px] text-lg leading-[1.7] text-[#555754] sm:mt-16 sm:text-[22px]">
        Rodlyta Ittabi ulya is a UI/UX and graphic designer based in Lumajang, East Java, Indonesia. His work explores interfaces, visual systems, typography, and spatial relationships through a minimal and structured visual language.
      </p>

      <div className="mt-24 grid gap-14 border-t border-line pt-7 sm:mt-36 sm:grid-cols-[1fr_2fr]">
        <h2 className="eyebrow">Skills &amp; disciplines</h2>
        <div className="divide-y divide-line">
          {skills.map(([label, details]) => (
            <div key={label} className="grid gap-2 py-5 sm:grid-cols-[150px_1fr]">
              <h3 className="text-sm">{label}</h3>
              <p className="text-sm leading-6 text-muted">{details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-14 border-t border-line pt-7 sm:grid-cols-[1fr_2fr]">
        <h2 className="eyebrow">Tools</h2>
        <p className="text-sm leading-7 text-muted">Figma, Adobe Illustrator, Photoshop, InDesign, and the browser as a space to prototype and explore.</p>
      </div>

      <div className="mt-12 grid gap-14 border-t border-line pt-7 sm:grid-cols-[1fr_2fr]">
        <h2 className="eyebrow">Background</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">Independent designer working across digital products and visual identity. Open to thoughtful collaborations, from early concepts to refined design systems.</p>
      </div>
    </article>
  )
}
