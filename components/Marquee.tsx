export function Marquee({ word }: { word: "Works" | "Contact" }) {
  const firstLayer = [
    "M0 74 C100 74 100 18 200 18 S300 130 400 130 500 18 600 18 700 74 800 74",
    "M0 88 C100 88 100 32 200 32 S300 144 400 144 500 32 600 32 700 88 800 88",
    "M0 102 C100 102 100 46 200 46 S300 158 400 158 500 46 600 46 700 102 800 102",
    "M0 60 C100 60 100 4 200 4 S300 116 400 116 500 4 600 4 700 60 800 60"
  ]
  const secondLayer = [
    "M0 24 C100 24 100 94 200 94 S300 24 400 24 500 94 600 94 700 24 800 24",
    "M0 38 C100 38 100 108 200 108 S300 38 400 38 500 108 600 108 700 38 800 38",
    "M0 52 C100 52 100 122 200 122 S300 52 400 52 500 122 600 122 700 52 800 52"
  ]

  const renderPattern = (paths: string[]) => (
    <svg viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden="true">
      {paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )

  return (
    <div className={`line-marquee line-marquee-${word.toLowerCase()}`} aria-hidden="true">
      <div className="line-marquee-track">
        {renderPattern(firstLayer)}
        {renderPattern(firstLayer)}
      </div>
      <div className="line-marquee-track line-marquee-track-reverse">
        {renderPattern(secondLayer)}
        {renderPattern(secondLayer)}
      </div>
    </div>
  )
}
