"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Showcase() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  // Smooth reveal
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Rise upward
  const y = useTransform(scrollYProgress, [0, 1], [300, 0])

  // Scale
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])

  return (
    <section
      ref={ref}
      className="relative -mt-[30vh] overflow-hidden bg-[#0d1117] pb-40"
    >
      {/* CONTINUED BACKGROUND */}
      <div className="absolute inset-0">
        {/* SHARED GLOW */}
        <div className="absolute left-1/2 top-[-300px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[200px]" />

        {/* CYAN ATMOSPHERE */}
        <div className="absolute bottom-0 left-0 h-[600px] w-full bg-cyan-500/10 blur-[140px]" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0d1117]/70" />
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* GLASS CONTAINER */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl shadow-[0_0_120px_rgba(139,92,246,0.15)] md:p-20">
          
          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-cyan-500/5" />

          {/* MAIN CARD */}
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#111827] p-4 shadow-2xl">
            <img
              src="/img1.webp"
              alt="Dashboard"
              className="w-full rounded-2xl"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-4 hidden w-[420px] rounded-3xl border border-white/10 bg-[#1f2937]/95 p-4 shadow-2xl backdrop-blur-xl lg:block"
          >
            <img
              src="/img2.webp"
              alt="Code Card"
              className="rounded-2xl"
            />
          </motion.div>
        </div>

        {/* BOTTOM TABS */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-6 rounded-full border border-white/10 bg-[#111827]/80 px-8 py-4 text-sm text-gray-300 shadow-2xl backdrop-blur-xl">
            <span>Code</span>
            <span>Plan</span>
            <span>Collaborate</span>
            <span>Automate</span>

            <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white">
              Secure
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}