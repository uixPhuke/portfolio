"use client"

import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import Link from "next/link"

export default function ExploreGalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* GLOWS */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

      

        {/* FEATURED SECTION */}
        <section className="relative mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-black/[0.35] p-8 backdrop-blur-2xl md:p-14">
{/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
          {/* INNER GRID */}
          <div className="absolute inset-0 opacity-[0.04]">

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: "70px 70px",
              }}
            />

          </div>

          <div className="relative z-10 grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

            {/* LEFT */}
            <div>

              <div className="flex flex-wrap items-center gap-5">

                <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                  Premium Design Systems
                </h2>

                <p className="text-lg text-gray-500">
                  Modern UI Architecture
                </p>

              </div>

              {/* TEXT */}
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-400">

                <p>
                  Explore modern product interfaces built
                  with scalability, motion, visual hierarchy,
                  and premium user experiences at the core.
                </p>

                <p>
                  Every project focuses on performance,
                  responsive systems, immersive interactions,
                  and elegant minimalism inspired by
                  modern SaaS and startup aesthetics.
                </p>

              </div>

              {/* BUTTON */}
              <Link
                href="/design"
                
                className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
              >
                Explore Full Gallery
             

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <MdArrowOutward />
                </span>

              </Link>

            </div>

            {/* RIGHT CARDS */}
            <div className="relative flex h-[520px] items-center justify-center">

              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: -8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute left-8 top-8 w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F1A] shadow-2xl"
                style={{
                  transform: "rotate(-8deg)",
                }}
              >

                <img
                  src="/designs/project1.webp"
                  alt="Project"
                  className="h-[340px] w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-semibold text-white">
                    Startup Landing
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Premium startup landing experience.
                  </p>

                </div>

              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute z-10 w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F1A] shadow-2xl"
              >

                <img
                  src="/designs/project2.webp"
                  alt="Project"
                  className="h-[360px] w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-semibold text-white">
                    Adidas Originals
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Scalable dashboard experience.
                  </p>

                </div>

              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: 8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute right-8 top-14 w-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F1A] shadow-2xl"
                style={{
                  transform: "rotate(8deg)",
                }}
              >

                <img
                  src="/designs/project3.webp"
                  alt="Project"
                  className="h-[340px] w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-semibold text-white">
                    Creative Portfolio
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Cinematic portfolio showcase.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        
      </div>

    </main>
  )
}