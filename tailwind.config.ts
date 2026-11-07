import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f7f5",
        ink: "#191a1b",
        muted: "#777977",
        line: "#e7e7e3"
      },
      maxWidth: {
        shell: "1440px"
      }
    }
  },
  plugins: []
}

export default config
