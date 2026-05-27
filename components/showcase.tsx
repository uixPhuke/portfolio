
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Showcase() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Smooth scale effect
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1])

  // Smooth upward movement
  const y = useTransform(scrollYProgress, [0, 0.4], [180, 0])

  // Fade in
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0d1117] py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf6_0%,#0d1117_70%)]" />

      {/* CONTENT */}
      <motion.div
        style={{ scale, y, opacity }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* MAIN CONTAINER */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#a78bfa]/40 to-[#60a5fa]/20 p-10 shadow-[0_0_120px_rgba(139,92,246,0.35)] md:p-20">
          {/* DASHBOARD */}
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
              y: [0, -12, 0],
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
          <div className="flex items-center gap-6 rounded-full border border-white/10 bg-[#111827]/80 px-8 py-4 text-sm text-gray-300 backdrop-blur-xl shadow-2xl">
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
