export function Marquee({ word }: { word: "Works" | "Contact" }) {
  return (
    <div aria-label={word} className="marquee overflow-hidden" role="presentation">
      <div className="marquee-track flex w-max items-center gap-5 py-1 sm:gap-8">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} aria-hidden="true" className="marquee-word">
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
