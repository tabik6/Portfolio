const socialLinks = [
  { label: "ReadCV", href: "https://read.cv/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
  { label: "GitHub", href: "https://github.com/" }
]

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-shell flex-col gap-5 px-6 pb-8 pt-12 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[4.7vw]">
      <span>Rodlyta Ittabi ulya © 2024</span>
      <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
