"use client"

import Link from "next/link"

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

import { motion } from "framer-motion"

const socials = [
  {
    icon: FaGithub,
    target: "_blank",
    href: "https://github.com/uixPhuke",
  },
  {
    icon: FaLinkedinIn,
    target: "_blank",
    href: "https://linkedin.com/in/rohan-ine",
  },
  {
    icon: FaInstagram,
    target: "_blank",
    href: "https://instagram.com/byphixel",
  },
  {
    icon: FaTwitter,
    target: "_blank",
    href: "https://x.com/rohanphuke",
  },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Freelance", href: "/freelancing" },
  { name: "Design", href: "/design" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#030303] py-16 text-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* MAIN */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {/* BRAND */}
          <div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-4xl font-bold tracking-tight"
            >
              Ruhon
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Borah
              </span>
            </motion.h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-400">
              Building futuristic digital experiences with
              modern UI, scalable systems, and smooth user
              interactions.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-400">
  {navLinks.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="transition-all duration-300 hover:translate-x-1 hover:text-white"
    >
      {item.name}
    </Link>
  ))}
</div>

          </div>

          {/* SOCIALS */}
          <div>

            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">

              {socials.map((social, index) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30"
                  >

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <Icon className="relative z-10 text-lg text-gray-400 transition-all duration-300 group-hover:text-white" />

                  </motion.a>
                  
                  
                )
              })}

            </div>
            

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Open for collaborations and freelance opportunities.
            </p>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-gray-500 md:flex-row">

          <p className="font-mono">
            ruhon{" "}
            <span className="text-violet-400">
              
            </span>{" "}
            Borah
          </p>

          <p className="text-center">
            © {new Date().getFullYear()} Ruhon Borah ·
            Crafted with Love.
          </p>

          <p>
            India
          </p>

        </div>

      </div>

    </footer>
  )
}