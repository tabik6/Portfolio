export function Marquee({ word }: { word: "Works" | "Contact" }) {
  const firstLayer = [
    "M0 96 C86 92 126 80 192 88 S286 117 348 101 453 62 524 76 626 113 700 101 811 76 900 88 964 97 1000 94",
    "M0 111 C75 107 132 96 205 102 S302 129 372 116 472 86 542 91 645 122 718 115 830 93 900 103 969 114 1000 108",
    "M0 77 C84 84 125 97 190 90 S287 61 353 73 454 104 528 96 629 66 701 73 813 103 887 92 963 76 1000 81",
    "M0 128 C89 121 132 110 201 118 S302 144 370 132 472 104 540 111 641 140 715 132 824 108 899 119 963 130 1000 125"
  ]
  const secondLayer = [
    "M0 57 C91 65 134 77 203 71 S306 43 374 54 476 86 546 78 648 49 720 57 828 86 902 74 965 56 1000 60",
    "M0 67 C82 74 132 88 199 81 S303 51 372 63 474 96 544 88 647 58 719 66 828 97 901 85 965 67 1000 70",
    "M0 145 C77 137 129 127 198 134 S300 158 370 148 472 120 542 126 645 154 718 147 828 124 901 135 966 147 1000 142"
  ]

  const renderPattern = (paths: string[]) => (
    <svg viewBox="0 0 1000 180" preserveAspectRatio="none" aria-hidden="true">
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
