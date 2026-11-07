import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Rodlyta Ittabi Ulya — Designer",
    template: "%s — Rodlyta Ittabi Ulya"
  },
  description: "Spatial interfaces, design systems, and visual identities by Rodlyta Ittabi Ulya."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen pt-[58px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
