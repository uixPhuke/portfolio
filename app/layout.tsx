import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"

import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scrollToTop"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Rohan Borah",
  description: "Portfolio Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${syne.variable}
          bg-[#0d1117]
          text-white
          antialiased
        `}
      >

        <Navbar />
        

        <main className="pt-16">
          {children}
        </main>

        <Footer />
        <ScrollToTop />

      </body>
    </html>
  )
}