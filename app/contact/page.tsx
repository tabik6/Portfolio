import { ContactBlock } from "@/components/ContactBlock"

export const metadata = { title: "Contact" }

export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-shell flex-col justify-center px-6 py-24 sm:px-10 lg:px-[4.7vw]">
      <ContactBlock />
      <div className="mx-6 border-t border-line pt-7 sm:mx-10 lg:mx-[4.7vw]">
        <p className="eyebrow mb-5">Elsewhere</p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <a className="text-muted transition-colors hover:text-ink" href="https://read.cv/" target="_blank" rel="noreferrer">ReadCV ↗</a>
          <a className="text-muted transition-colors hover:text-ink" href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble ↗</a>
          <a className="text-muted transition-colors hover:text-ink" href="https://x.com/" target="_blank" rel="noreferrer">Twitter / X ↗</a>
          <a className="text-muted transition-colors hover:text-ink" href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
