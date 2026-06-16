import type { Metadata } from "next"
import { Syne, Inter, Geist_Mono, Outfit ,DM_Serif_Display,Cormorant_Garamond} from "next/font/google"

import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scrollToTop"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: "500",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
})
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: ["400", ],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ruhon-borah.vercel.app"),

  title: {
    default: "Ruhon Borah | Full Stack Developer & UI/UX Designer",
    template: "%s | Ruhon Borah",
  },

  description:
    "Ruhon Borah is a Full Stack Developer, UI/UX Designer, and Graphic Designer specializing in modern web applications, user experiences, branding, and digital products.",

  keywords: [
    "Ruhon Borah",
    "Full Stack Developer",
    "UI UX Designer",
    "Graphic Designer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Portfolio",
  ],

  authors: [{ name: "Ruhon Borah" }],
  creator: "Ruhon Borah",

  icons: {
    icon: "/1.png",
  },

  openGraph: {
    title: "Ruhon Borah | Full Stack Developer & UI/UX Designer",
    description:
      "Portfolio showcasing development, UI/UX design, branding, and creative work.",
    url: "https://ruhon-borah.vercel.app",
    siteName: "Ruhon Borah Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ruhon Borah",
    description:
      "Full Stack Developer, UI/UX Designer, and Graphic Designer.",
    images: ["/profile.png"],
  },
};

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
          ${dmSerifDisplay.variable}
          ${cormorant.variable}
          bg-[#0d1117]
          text-white
          antialiased
        `}
      ><ScrollToTop />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ruhon Borah",
      jobTitle: "Full Stack Developer",
      url: "https://yourdomain.com",
      sameAs: [
        "https://github.com/uixPhuke",
        "https://linkedin.com/in/rohan-ine",
        "https://instagram.com/byphixel",
        "https://x.com/rohanphuke",
      ],
    }),
  }}
/>

        <Navbar />
        

        <main className="pt-16">
          
          {children}
        </main>

        <Footer />
        

      </body>
    </html>
  )
}