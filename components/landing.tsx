"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import {
  useEffect,
  useRef,
  useState,
} from "react"

export default function Landing() {
  const ref = useRef(null)

  const [activeTab, setActiveTab] = useState(0)

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

  /*
   * PRELOAD IMAGES
   */

  useEffect(() => {
    tabs.forEach((tab) => {
      const img = new Image()
      img.src = tab.image

      const card = new Image()
      card.src = tab.card
    })
  }, [])

  /*
   * SCROLL
   */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

const heroDisplay = useTransform(
  scrollYProgress,
  (v) => (v > 0.26 ? "none" : "flex")
)
const heroOpacity = useTransform(
  scrollYProgress,
  [0, 0.12, 0.22, 0.35],
  [1, 1, 0.15, 0.02]
)

const heroScale = useTransform(
  scrollYProgress,
  [0, 0.35],
  [1, 0.92]
)

const heroY = useTransform(
  scrollYProgress,
  [0, 0.35],
  [0, -140]
)

/* SHOWCASE */

const showcaseOpacity = useTransform(
  scrollYProgress,
  [0.15, 0.3, 1],
  [0, 1, 1]
)

const showcaseY = useTransform(
  scrollYProgress,
  [0.1, 0.3,1],
  [120, 0, 0]
)

const showcaseScale = useTransform(
  scrollYProgress,
  [0.15, 0.3, 1],
  [0.96, 1, 1]
)
  return (
    <section
      ref={ref}
      className="relative min-h-[160vh] overflow-hidden bg-[#050816] text-white border-b border-white/10"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* CENTER GLOW */}
        <div className="absolute left-1/2 top-[5%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-700/25 blur-[180px]" />

        {/* BLUE GLOW */}
        <div className="absolute left-[-200px] top-[20%] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[160px]" />

        {/* CYAN GLOW */}
        <div className="absolute right-[-200px] top-[30%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* PINK GLOW */}
        <div className="absolute bottom-[10%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* HERO */}
     <motion.div
  style={{
    opacity: heroOpacity,
    scale: heroScale,
    y: heroY,
    pointerEvents: "none",
  }}
  className="sticky top-60 z-0 flex min-h-[50vh] items-center justify-center px-6"
>
        <div className="relative z-10 max-w-5xl text-center">

          {/* CHIP */}
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">
            Full Stack Developer • UI/UX Designer
          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Exploring
            <br />

            <span className="bg-gradient-to-r from-violet-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
              the Future
            </span>
          </h1>

          {/* TEXT */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Crafting immersive digital experiences with futuristic
            design, scalable backend systems, and cinematic UI
            interactions powered by modern technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <button className="h-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 font-medium text-white shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105">
              Explore Projects
            </button>

            <button className="h-14 rounded-full border border-white/10 bg-white/[0.03] px-10 font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
              Contact Me
            </button>

          </div>
        </div>
      </motion.div>

      {/* SHOWCASE */}
      <motion.div
        style={{
          opacity: showcaseOpacity,
          y: showcaseY,
          scale: showcaseScale,
        }}
        className="sticky -top-10 z-20 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6">

          {/* GLASS CARD */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_120px_rgba(139,92,246,0.15)] backdrop-blur-3xl md:p-16">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-cyan-500/5" />

            {/* MAIN IMAGE */}
            <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#111827] p-2 shadow-2xl">

              <motion.img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].name}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.35,
                }}
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
              className="absolute bottom-8 right-2 hidden w-[420px] rounded-3xl border border-white/10 bg-[#1f2937]/95 p-4 shadow-2xl backdrop-blur-xl lg:block"
            >
              <motion.img
                src={tabs[activeTab].card}
                alt={tabs[activeTab].name}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.35,
                }}
                className="rounded-2xl"
              />
            </motion.div>
          </div>

          {/* TABS */}
<div className="mt-10 flex justify-center px-2 sm:px-0">

  <div
    className="
      flex w-full max-w-full items-center gap-2 overflow-x-auto
      rounded-2xl border border-white/10
      bg-[#111827]/80 p-2
      shadow-2xl backdrop-blur-xl
      sm:w-fit sm:rounded-full
      scrollbar-hide
    "
  >
    {tabs.map((tab, index) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(index)}
        className={`
          whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium
          transition-all duration-300
          sm:rounded-full sm:px-6 sm:py-3 sm:text-sm
          ${
            activeTab === index
              ? "bg-white text-black shadow-lg"
              : "text-gray-300 hover:text-white"
          }
        `}
      >
        {tab.name}
      </button>
    ))}
  </div>

</div>
          {/* TEXT */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-400">
            Showcasing the power of modern development,
            AI-driven workflows, and futuristic digital
            experiences with seamless interactions.
          </p>

        </div>
      </motion.div>
    </section>
  )
}