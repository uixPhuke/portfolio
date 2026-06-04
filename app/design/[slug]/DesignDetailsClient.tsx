"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cloudinaryUrl } from "@/app/lib/cloudinary"


import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Monitor,
  CheckCircle2,
  Code2,
} from "lucide-react"

export default function DesignDetailsClient({
  design,
}: {
  design: {
    slug: string
    title: string
    category: string
    image: string
    desc: string
    longDesc: string
    features: string[]
    tech: string[]
    color: string,
    images: string[]
  }
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
        className={`absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r ${design.color} opacity-20 blur-[140px]`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* BACK */}
        <Link
          href="/design"
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
        >

          <ArrowLeft className="h-4 w-4" />

          Back to Gallery

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

              {design.category}

            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">

              {design.title}

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">

              {design.desc}

            </p>

            <button
              className={`mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${design.color} px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]`}
            >

              View Project

              <ArrowUpRight className="h-4 w-4" />

            </button>

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
             src={cloudinaryUrl(design.image)}
             alt={design.title}
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

              {design.longDesc}

            </p>

          </div>

        </section>
        {/* FEATURES & TECHNOLOGY */}
<section className="mt-24">

  <div className="grid gap-8 lg:grid-cols-2">

    {/* FEATURES */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
    >

      <div className="mb-8 flex items-center gap-3">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${design.color}`}
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

        {design.features.map((feature, index) => (

          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

        ))}

      </div>

    </motion.div>

    {/* TECHNOLOGY */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
    >

      <div className="mb-8 flex items-center gap-3">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${design.color}`}
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

        {design.tech.map((tech, index) => (

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
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            className={`rounded-2xl border border-white/10 bg-gradient-to-r ${design.color} px-5 py-3 text-sm font-medium text-white shadow-lg`}
          >

            {tech}

          </motion.div>

        ))}

      </div>

    </motion.div>

  </div>

</section>

{/* PINTEREST SHOWCASE */}
<section className="mt-24">

  {/* HEADER */}
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

  {/* MASONRY */}
  <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

    {design.images.map((image, index) => (

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
          delay: index * 0.05,
        }}
        whileHover={{
          y: -6,
        }}
        className="group relative mb-5 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] break-inside-avoid backdrop-blur-2xl"
      >

        {/* IMAGE */}
        <div className="overflow-hidden">

          
           <Image
            src={cloudinaryUrl(image)}
            alt={design.title}
            width={1200}
            height={800}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
         

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      </motion.div>

    ))}

  </div>

</section>



      </div>

    </main>
  )
}