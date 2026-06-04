"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cloudinaryUrl } from "@/app/lib/cloudinary"

import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Eye
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

export default function ProjectDetailsClient({
  project,
}: {
  project: any
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* GRID */}
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

      {/* GLOW */}
      <div
        className={`absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r ${project.color} opacity-20 blur-[140px]`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* BACK */}
        <Link
          href="/project"
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              {project.category}
            </div>

            <p className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {project.title}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              {project.desc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href={project.live}
                className={`inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${project.color} px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]`}
              >
                Live Preview
                <Eye className="h-4 w-4" />
              </Link>

              <Link
                href={project.github}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-white/20"
              >
                <FaGithub />
                Github
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >
            <Image
  src={cloudinaryUrl(project.image)}
  alt={project.title}
  width={1200}
  height={800}
  className="h-[500px] w-full object-cover"
/>
          </motion.div>

        </section>

        {/* OVERVIEW */}
        <section className="mt-28">

          <div className="max-w-4xl">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Project Overview
            </h2>

            <p className="mt-8 text-base leading-relaxed text-gray-400 sm:text-lg">
              {project.longDesc}
            </p>

          </div>

        </section>

        {/* FEATURES + TECH */}
        <section className="mt-24">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* FEATURES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              <div className="mb-8 flex items-center gap-3">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${project.color}`}
                >
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Features
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Key Highlights
                  </h3>

                </div>

              </div>

              <div className="space-y-4">

                {project.features.map(
                  (feature: string, index: number) => (

                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                    >

                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                      <span className="text-gray-300">
                        {feature}
                      </span>

                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

            {/* TECH */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              <div className="mb-8 flex items-center gap-3">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${project.color}`}
                >
                  <Code2 className="h-6 w-6 text-white" />
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Technology
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Tech Stack
                  </h3>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {project.tech.map(
                  (tech: string, index: number) => (

                    <motion.div
                      key={tech}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      className={`rounded-2xl border border-white/10 bg-gradient-to-r ${project.color} px-5 py-3 text-sm font-medium text-white shadow-lg`}
                    >
                      {tech}
                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

          </div>

        </section>

        {/* GALLERY */}
        <section className="mt-24">

          <div className="mb-10 flex items-end gap-6">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Gallery
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Visual Showcase
              </h2>

            </div>

            <div className="hidden h-px flex-1 bg-white/10 lg:block" />

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[260px]">

  {project.images.map((image: string, index: number) => {

    const gridStyles = [
      "lg:col-span-2 lg:row-span-2",
      "lg:col-span-2",
      "",
      "",
      "lg:col-span-2",
      "",
    ]

    return (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -8,
        }}
        className={`
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          ${gridStyles[index % gridStyles.length]}
        `}
      >

        {/* Glow */}
        <div
          className={`
            absolute inset-0
            bg-gradient-to-br
            ${project.color}
            opacity-0
            blur-3xl
            transition-all
            duration-700
            group-hover:opacity-20
          `}
        />

        {/* Image */}
        <Image
  src={cloudinaryUrl(image)}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="
    object-cover
    transition-all
    duration-700
    group-hover:scale-110
  "
/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        {/* Floating Label */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-medium">
              {project.title}
            </span>

          </div>

        </div>

      </motion.div>
    )
  })}

</div>

        </section>

      </div>

    </main>
  )
}