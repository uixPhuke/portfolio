"use client"

import { motion } from "framer-motion"


import { BiLogoAdobe } from "react-icons/bi";


import {
  FaReact,
  FaPalette,
  FaFigma,
  FaCode,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from "react-icons/si"


const services = [
  {
    title: "Graphic Design",
    description:
      "Creative branding, posters, social media assets, and visual storytelling with modern aesthetics.",
    icon: <FaPalette className="text-5xl text-pink-400" />,
    glow: "from-pink-500/20 to-orange-500/10",
  },

  {
    title: "UI / UX Design",
    description:
      "Beautiful interfaces with intuitive user experiences focused on usability and interaction.",
    icon: <FaFigma className="text-5xl text-purple-400" />,
    glow: "from-violet-500/20 to-fuchsia-500/10",
  },

  {
    title: "Full Stack Development",
    description:
      "Modern scalable web applications using Next.js, APIs, databases, and cloud technologies.",
    icon: <FaCode className="text-5xl text-cyan-400" />,
    glow: "from-cyan-500/20 to-blue-500/10",
  },
]

export default function Services() {
  return (
    <section  className="relative overflow-hidden bg-black py-40 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* CENTER GLOW */}
        <div className="absolute left-1/2 top-[20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        {/* LEFT LIGHT */}
        <div className="absolute left-[-200px] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* RIGHT LIGHT */}
        <div className="absolute right-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[140px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Built with creativity,
            <br />
            strategy & technology
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            From stunning visuals to scalable applications,
            I create digital experiences that blend design,
            performance and innovation.
          </p>
        </motion.div>

        {/* CONNECTION LINES */}
        <div className="relative mb-24 flex justify-center">
  {/* Vertical Line */}
  <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-500/70 to-transparent" />

  {/* Horizontal Lines */}
  <div className="pointer-events-none absolute top-1/2 left-0 hidden h-px w-[55%] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent lg:block" />

  <div className="pointer-events-none absolute top-1/2 right-0 hidden h-px w-[55%] -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent lg:block" />

  {/* Powered By Card */}
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="
      relative z-10
      flex h-28 w-72 items-center justify-center
      rounded-3xl border border-white/10
      bg-white/[0.04]
      text-3xl font-semibold
      shadow-[0_0_60px_rgba(139,92,246,0.2)]
      backdrop-blur-2xl
    "
    style={{ willChange: "transform" }}
  >
    Powered By
  </motion.div>
</div>
        {/* TECH STACK */}
        {/* TECH STACK */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mb-24 flex flex-wrap items-center justify-center gap-6"
>

  {/* REACT */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 backdrop-blur-xl"
  >
    <FaReact className="text-5xl text-cyan-400" />
  </motion.div>

  {/* NEXT */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
  >
    <SiNextdotjs className="text-5xl text-white" />
  </motion.div>

  {/* TAILWIND */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 backdrop-blur-xl"
  >
    <SiTailwindcss className="text-5xl text-cyan-300" />
  </motion.div>

  {/* TYPESCRIPT */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 backdrop-blur-xl"
  >
    <SiTypescript className="text-5xl text-blue-400" />
  </motion.div>

  {/* MONGODB */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 backdrop-blur-xl"
  >
    <SiMongodb className="text-5xl text-green-400" />
  </motion.div>

  {/* GIT */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 backdrop-blur-xl"
  >
    <FaGitAlt className="text-5xl text-orange-400" />
  </motion.div>

  {/* PHOTOSHOP */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 backdrop-blur-xl"
  >
    <BiLogoAdobe className="text-5xl text-blue-300" />
  </motion.div>

  {/* ILLUSTRATOR */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5 backdrop-blur-xl"
  >
    <BiLogoAdobe className="text-5xl text-orange-300" />
  </motion.div>

  {/* AFTER EFFECTS */}
  <motion.div
    whileHover={{ y: -8, scale: 1.08 }}
    className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 backdrop-blur-xl"
  >
    <BiLogoAdobe className="text-5xl text-purple-300" />
  </motion.div>

</motion.div>

        {/* SERVICE CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >
              {/* CARD GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* CARD CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-8"
                >
                  {service.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="text-3xl font-semibold">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-lg leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* BUTTON 
                <button className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black">
                  Learn More
                </button>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}