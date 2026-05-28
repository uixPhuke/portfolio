"use client"

import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

export default function AboutCard() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-40 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* PURPLE GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        {/* CYAN GLOW */}
        <div className="absolute left-[20%] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* PINK GLOW */}
        <div className="absolute right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-7xl justify-center px-6">

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
          }}
          className="group relative w-full max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_0_120px_rgba(139,92,246,0.15)] backdrop-blur-3xl md:p-14"
        >

          {/* GLOW OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-fuchsia-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TOP LIGHT */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-70" />

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[320px_1fr]">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center">

              {/* PROFILE IMAGE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl" />

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-full border border-white/10 bg-black p-2">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="h-64 w-64 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* STATUS */}
              <div className="mt-8 flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#4ade80]" />
                Available for freelance
              </div>

              {/* SOCIALS */}
              <div className="mt-8 flex items-center gap-5">

                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10"
                >
                  <FaInstagram />
                </motion.a>
                 <motion.a
                  whileHover={{ y: -5 }}
  href="#"
  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10"
>
  <FaTwitter />
</motion.a>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* SMALL TAG */}
              <div className="mb-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-xl">
                About Me
              </div>

              {/* TITLE */}
              <h2 className="text-5xl font-bold leading-tight md:text-6xl">
                Hi, I’m
                <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                  {" "}
                  Ruhon Borah
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 text-lg leading-relaxed text-gray-400">
                A passionate Full Stack Developer & UI/UX Designer
                crafting immersive digital experiences with modern
                technologies and cinematic interfaces.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-400">
                I specialize in building futuristic web applications,
                premium animations, scalable backend systems, and
                visually engaging user experiences that blend
                creativity with performance.
              </p>

              {/* STATS */}
              <div className="mt-12 grid gap-5 sm:grid-cols-3">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <h3 className="text-4xl font-bold text-violet-300">
                    4+
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <h3 className="text-4xl font-bold text-cyan-300">
                    50+
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Completed Projects
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <h3 className="text-4xl font-bold text-pink-300">
                    20+
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Happy Clients
                  </p>
                </div>

              </div>

              {/* BUTTONS */}
              {/* BUTTONS */}
<div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

  <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-105">
    Let’s Work Together
  </button>

  <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
    Download Resume
  </button>

</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}