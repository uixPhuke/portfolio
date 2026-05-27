"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // HERO fades while scrolling
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // HERO moves upward
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  // HERO scales down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d1117] px-6 text-center"
    >
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0">
        {/* MAIN GLOW */}
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-800 blur-[180px]" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 " />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Exploring the Future
        </h1>

        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          A full Stack Developer with a passion for building innovative
          solutions and exploring the latest technologies.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/*<input
            type="email"
            placeholder="Enter your email"
            className="h-14 w-full rounded-md border border-white/10 bg-white px-4 text-black sm:w-[320px]"
          />*/}

          <button className="h-14 rounded-md bg-blue-700 px-8 font-semibold text-white hover:bg-green-700">
            GitHub
          </button>

          <button className="h-14 rounded-md border border-white/20 px-8 font-semibold text-white hover:bg-white hover:text-black">
            Try GPT
          </button>
        </div>
      </motion.div>
    </section>
  )
}