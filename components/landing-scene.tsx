"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function LandingScene() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  /*
   * HERO ANIMATION
   */

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.22],
    [1, 0]
  )

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.22],
    [1, 0.82]
  )

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.22],
    [0, -120]
  )

  /*
   * SHOWCASE ANIMATION
   */

  const showcaseOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.32],
    [0, 1]
  )

  const showcaseScale = useTransform(
    scrollYProgress,
    [0.12, 0.35],
    [0.72, 1]
  )

  const showcaseY = useTransform(
    scrollYProgress,
    [0.12, 0.35],
    [220, 0]
  )

  /*
   * BACKGROUND GLOW
   */

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 1.8]
  )

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0.35, 0.8]
  )
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
      ref={containerRef}
      className="relative h-[320vh] bg-[#0d1117]"
    >
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          
          {/* MAIN PURPLE GLOW */}
          <motion.div
            style={{
              scale: glowScale,
              opacity: glowOpacity,
            }}
            className="absolute left-1/2 top-[-350px] h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600 blur-[180px]"
          />

          {/* CENTER INDIGO LIGHT */}
          <motion.div
            style={{
              scale: glowScale,
            }}
            className="absolute left-1/2 top-[10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-[140px]"
          />

          {/* CYAN ATMOSPHERE */}
          <motion.div
            style={{
              opacity: showcaseOpacity,
            }}
            className="absolute bottom-[-200px] left-0 h-[500px] w-full bg-cyan-500/20 blur-[140px]"
          />

          {/* LEFT LIGHT */}
          <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

          {/* RIGHT LIGHT */}
          <div className="absolute right-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#0d1117]/70" />
        </div>

        {/* HERO CONTENT */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              The future of building happens together
            </h1>

            <p className="mt-6 text-lg text-gray-300 md:text-xl">
              Tools and trends evolve, but collaboration endures.
              With GitHub, developers, agents, and code come together
              on one platform.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full rounded-md border border-white/10 bg-white px-4 text-black sm:w-[320px]"
              />

              <button className="h-14 rounded-md bg-green-600 px-8 font-semibold text-white hover:bg-green-700">
                Sign up for GitHub
              </button>

              <button className="h-14 rounded-md border border-white/20 px-8 font-semibold text-white hover:bg-white hover:text-black">
                Try GitHub Copilot
              </button>
            </div>
          </div>
        </motion.div>

        {/* SHOWCASE */}
        <motion.div
          style={{
            opacity: showcaseOpacity,
            scale: showcaseScale,
            y: showcaseY,
          }}
          className="absolute inset-0 z-30 flex items-end justify-center px-6 pb-24"
        >
          <div className="w-full max-w-7xl">

            {/* GLASS CONTAINER */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl shadow-[0_0_120px_rgba(139,92,246,0.15)] md:p-20">

              {/* INNER LIGHT */}
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

            {/* BOTTOM PILLS */}
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

          </div>
        </motion.div>
      </div>
    </section>
  )
}



  
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
