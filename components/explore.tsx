"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"

const projects = [
  {
    title: "Glass Effect",
    category: "Graphic Design",
    description:
      "Glassmorphism-inspired interfaces with frosted glass aesthetics.",
    image: "/designs/project1.webp",
    rotate: "-8deg",
    top: "20px",
    left: "0px",
  },
  {
    title: "Adidas Originals",
    category: "UI Design",
    description:
      "Modern digital experiences focused on storytelling.",
    image: "/designs/project2.webp",
    rotate: "0deg",
    top: "70px",
    left: "140px",
  },
  {
    title: "Creative Portfolio",
    category: "Brand Identity",
    description:
      "Immersive visual systems with premium experiences.",
    image: "/designs/project3.webp",
    rotate: "8deg",
    top: "20px",
    left: "280px",
  },
]

export default function ExploreGalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">
      {/* BACKGROUND GRID */}
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

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  Explore modern product interfaces built with
                  scalability, motion, visual hierarchy,
                  and premium user experiences at the core.
                </p>

                <p>
                  Every project focuses on performance,
                  responsive systems, immersive interactions,
                  and elegant minimalism inspired by modern
                  SaaS and startup aesthetics.
                </p>
              </div>

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

            {/* DESKTOP STACKED CARDS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative hidden h-[440px] w-full lg:block"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -12,
                    rotate: 0,
                    
                  }}
                  whileTap={{ scale: 1 }}
                  className="absolute overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0F1A] shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                 style={{
  top:
    index === 0
      ? "0px"
      : index === 1
      ? "45px"
      : "0px",
  left:
    index === 0
      ? "0px"
      : index === 1
      ? "100px"
      : "200px",
  rotate: project.rotate,
  width: "360px",
  height: "450px", // 4:5 ratio
  zIndex: projects.length - index,
}}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-white/75">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
                        {/* MOBILE STACKED CARDS */}
            <div className="relative mx-auto  h-[360px] w-full max-w-[320px] lg:hidden">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    rotate: 0,
                   
                  }}
                  whileTap={{ scale: 1 }}
                  className="absolute overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F1A] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  style={{
  top:
    index === 0
      ? "0px"
      : index === 1
      ? "35px"
      : "0px",
  left:
    index === 0
      ? "0px"
      : index === 1
      ? "30px"
      : "60px",
  rotate: project.rotate,
  width: "280px",
  height: "350px", // 4:5 ratio
  zIndex: projects.length - index,
}}
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}