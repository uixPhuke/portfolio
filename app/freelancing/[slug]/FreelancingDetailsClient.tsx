"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2,
} from "lucide-react"
import Image from "next/image"
import { cloudinaryUrl } from "@/app/lib/cloudinary"
import { useEffect, useState } from "react";
export default function FreelancingDetailsClient({
  service,
}: {
  service: {
    slug: string
    title: string
    category: string
    image: string
    desc: string
    longDesc: string
    features: string[]
    tech: string[]
    color: string
    images: string[]
  }
}
) {
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
        className={`absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r ${service.color} opacity-20 blur-[140px]`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* BACK */}
        <Link
          href="/freelancing"
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        {/* HERO */}
        <section className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              {service.category}
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              {service.desc}
            </p>

            <Link
              href="/contact"
              className={`mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${service.color} px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]`}
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >
            <Image
              src={cloudinaryUrl(service.image)}
              alt={service.title}
              width={1200}
             height={800}
              className="h-full w-full object-cover"
            />
          </motion.div>

        </section>

        {/* OVERVIEW */}
        <section className="mt-28">
          <div className="max-w-4xl">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Service Overview
            </h2>

            <p className="mt-8 text-base leading-relaxed text-gray-400 sm:text-lg">
              {service.longDesc}
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
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              <div className="mb-8 flex items-center gap-3">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color}`}
                >
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Features
                  </p>

                  <h3 className="text-2xl font-bold">
                    Service Highlights
                  </h3>

                </div>

              </div>

              <div className="space-y-4">

                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
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

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              <div className="mb-8 flex items-center gap-3">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color}`}
                >
                  <Code2 className="h-6 w-6 text-white" />
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Technology
                  </p>

                  <h3 className="text-2xl font-bold">
                    Tools & Stack
                  </h3>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {service.tech.map((tech) => (
                  <div
                    key={tech}
                    className={`rounded-2xl border border-white/10 bg-gradient-to-r ${service.color} px-5 py-3 text-sm font-medium text-white`}
                  >
                    {tech}
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </section>

        {/* GALLERY */}
        <section className="mt-24">

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Service Showcase
            </h2>
          </div>

       

           <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">

    {service.images.map((image, index) => (

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
          once: true,margin: "-100px" 
        }}
        transition={{
          duration: 0.3,
          delay: index * 0.02,
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
                            alt={service.title}
                            width={1200}
                            height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
             />   </div>

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