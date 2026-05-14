import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

export const metadata: Metadata = {
  title: "Maria's Mediterranean | Bayside Greek Seafood",
  description:
    "Maria's Mediterranean on Bell Boulevard in Bayside serves Greek seafood, homestyle specials, gluten-free dishes, catering, lunch, and dinner.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fffaf1] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
