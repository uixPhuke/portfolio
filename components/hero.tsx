"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import Link from "next/link"
import { useRef } from "react"
import { TypeAnimation } from "react-type-animation";

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
     {/* GLOBAL BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">
  {/* MAIN GLOW */}
  <div
    className="
      absolute left-1/2 top-[-120px]
      h-[280px] w-[280px]
      -translate-x-1/2 rounded-full
      bg-blue-700/70 blur-[100px]

      sm:top-[-150px]
      sm:h-[400px] sm:w-[400px]
      sm:blur-[120px]

      md:top-[-180px]
      md:h-[500px] md:w-[800px]
      md:blur-[160px]

      lg:w-[1000px]
      lg:blur-[180px]
    "
  />

  {/* GRID */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:40px_40px]

      sm:bg-[size:50px_50px]
      md:bg-[size:70px_70px]
      lg:bg-[size:80px_80px]
    "
  />

  {/* VIGNETTE */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117]" />

  {/* DARK OVERLAY */}
        <div className="absolute inset-0 " />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-4xl"
      >
       
        {/* CHIP */}
         <div className="  inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "UI/UX Designer",
      2000,
      "Graphic Designer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Ruhon
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Borah
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto">
  Crafting exceptional digital experiences through modern web development,
  intuitive UI/UX design, and impactful visual storytelling. Building products
  that blend performance, aesthetics, and innovation.
</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/*<input
            type="email"
            placeholder="Enter your email"
            className="h-14 w-full rounded-md border border-white/10 bg-white px-4 text-black sm:w-[320px]"
          />*/}
<Link href="https://github.com/uixPhuke" target="_blank" rel="noopener noreferrer">
          <button className="h-14 rounded-md bg-blue-700 px-8 font-semibold text-white hover:bg-green-700">
            GitHub
          </button>
</Link>
<Link href="https://null-bee.vercel.app" target="_blank" rel="noopener noreferrer">
          <button className="h-14 rounded-md border border-white/20 px-8 font-semibold text-white hover:bg-white hover:text-black">
            Try GPT
          </button>
</Link>
        </div>
      </motion.div>
    </section>
  )
}