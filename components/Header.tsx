import Link from "next/link"

const links = [
  { label: "Works", href: "/#works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
]

export function Header({ active }: { active?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.035] bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[58px] max-w-shell items-center justify-between px-6 sm:px-10 lg:px-[4.7vw]">
        <Link
          href="/"
          className="text-[10px] font-medium uppercase tracking-[0.08em] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
        >
          Rodlyta Ittabi Ulya
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 sm:gap-9">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              aria-current={active === label ? "page" : undefined}
              className={`text-[11px] transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 ${
                active === label ? "text-ink" : "text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
