"use client"

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300">
              LET'S BUILD
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Creating immersive
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Passionate about crafting futuristic interfaces,
              scalable backend systems, and cinematic user
              experiences with modern technologies.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 font-medium text-white shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-105">
                Contact Me
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
                View Projects
              </button>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >
            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <div className="relative z-10">

              <h3 className="text-2xl font-semibold">
                Connect With Me
              </h3>

              <p className="mt-3 text-gray-400">
                Available for freelance, collaborations,
                and exciting product opportunities.
              </p>

              {/* SOCIALS */}
              <div className="mt-10 grid grid-cols-2 gap-5">

                {[
                  {
                    icon: FaGithub,
                    name: "GitHub",
                    href: "https://github.com/yourusername",
                  },
                  {
                    icon: FaLinkedin,
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/yourusername",
                  },
                  {
                    icon: FaInstagram,
                    name: "Instagram",
                    href: "https://instagram.com/yourusername",
                  },
                  {
                    icon: FaTwitter,
                    name: "X",
                    href: "https://x.com/yourusername",
                  },
                ].map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
                    >
                      <motion.div
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                        className="text-2xl text-violet-300"
                      >
                        <Icon />
                      </motion.div>

                      <span className="font-medium transition-colors duration-300 group-hover:text-white">
                        {social.name}
                      </span>
                    </motion.a>
                  )
                })}

              </div>

              {/* EMAIL */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">

                <p className="text-sm text-gray-400">
                  EMAIL
                </p>

                <p className="mt-2 text-lg font-medium">
                  rohanuix@gmail.com
                </p>

              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        {/* LINKS SECTION */}
        <div className="mt-24 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-bold">
              RUHON
              <span className="text-violet-400">
                b
              </span>
            </h3>

            <p className="mt-5 max-w-xs text-gray-400">
              Building futuristic digital experiences with cinematic UI,
              modern development stacks, and immersive interactions.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>

            <div className="space-y-4 text-gray-400">

              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Services",
                "Contact",
              ].map((item) => (
                <p
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </p>
              ))}

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>

            <div className="space-y-4 text-gray-400">

              {[
                "Full Stack Development",
                "UI/UX Design",
                "Graphic Design",
                "Brand Identity",
                "Motion Design",
                "Creative Direction",
              ].map((item) => (
                <p
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </p>
              ))}

            </div>
          </div>

          {/* TECH STACK */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Technologies
            </h4>

            <div className="space-y-4 text-gray-400">

              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TailwindCSS",
                "Framer Motion",
                "Cloudinary",
                "Redux",
              ].map((item) => (
                <p
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </p>
              ))}

            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Socials
            </h4>

            <div className="grid grid-cols-2 gap-4">

              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/yourusername",
                },
                {
                  icon: FaTwitter,
                  href: "https://x.com/yourusername",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com/yourusername",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/in/yourusername",
                },
              ].map((social, index) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40"
                  >

                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <Icon className="relative z-10 text-xl text-gray-300 transition-colors duration-300 group-hover:text-white" />

                  </motion.a>
                )
              })}

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          {/* REALTIME YEAR */}
          <p>
            © {new Date().getFullYear()} MR.COOL. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">

            {[
              {
                icon: FaGithub,
                href: "https://github.com/yourusername",
              },
              {
                icon: FaTwitter,
                href: "https://x.com/yourusername",
              },
              {
                icon: FaInstagram,
                href: "https://instagram.com/yourusername",
              },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/yourusername",
              },
            ].map((social, index) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                  }}
                  className="transition-all duration-300 hover:text-white"
                >
                  <Icon className="text-lg" />
                </motion.a>
              )
            })}

          </div>

        </div>

      </div>
    </footer>
  )
}