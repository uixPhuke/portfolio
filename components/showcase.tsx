"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function Showcase() {
  const ref = useRef(null)

  const [activeTab, setActiveTab] = useState(0)

  /*
   * PRELOAD IMAGES
   * Prevents first-switch flicker
   */
  const tabs = [
    {
      name: "Code",
      image: "/img1.webp",
      card: "/img2.webp",
    },
    {
      name: "Plan",
      image: "/img3.webp",
      card: "/img1.webp",
    },
    {
      name: "Collaborate",
      image: "/img2.webp",
      card: "/img3.webp",
    },
    {
      name: "Automate",
      image: "/img1.webp",
      card: "/img2.webp",
    },
    {
      name: "Secure",
      image: "/img3.webp",
      card: "/img1.webp",
    },
  ]

  useEffect(() => {
    tabs.forEach((tab) => {
      const img = new Image()
      img.src = tab.image

      const card = new Image()
      card.src = tab.card
    })
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  /*
   * SCROLL ANIMATION
   */

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [300, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85, 1]
  )

  return (
    <section
      ref={ref}
      className="relative -mt-[30vh] overflow-hidden bg-[#0d1117] pb-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* MAIN PURPLE GLOW */}
        <div className="absolute left-1/2 top-[-300px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-fullbg-[#0d1117] blur-[200px]" />

        {/* CYAN ATMOSPHERE */}
        <div className="absolute bottom-0 left-0 h-[600px] w-full bg-cyan-500/10 blur-[140px]" />

        {/* LEFT LIGHT */}
        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

        {/* RIGHT LIGHT */}
        <div className="absolute right-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0d1117]/70" />
      </div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* GLASS CONTAINER */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl shadow-[0_0_120px_rgba(139,92,246,0.15)] md:p-20">

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-cyan-500/5" />

          {/* MAIN CARD */}
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#111827] p-2 shadow-2xl">

            <motion.img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].name}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
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
            <motion.img
              src={tabs[activeTab].card}
              alt={tabs[activeTab].name}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="rounded-2xl"
            />
          </motion.div>
        </div>

        {/* TABS */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/80 p-2 shadow-2xl backdrop-blur-xl">

            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}

          </div>
        </div>
        <p className="mt-6 text-center text-lg text-gray-400">
          Showcasing the power of AI in transforming ideas into reality .
        </p>
      </motion.div>
    </section>
  )
}
