// components/freelance-dashboard.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function FreelanceDashboard() {
  return (
    <section
      id="freelance"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute inset-x-0 bottom-0 h-[350px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

        {/* Violet Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]"
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-400" />

            <span className="text-sm text-slate-300">
              Available for Freelance
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-syne text-4xl font-bold tracking-tight text-white md:text-6xl">
            Open for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
            Helping startups, founders, and businesses build
            thoughtful digital experiences through design
            and development.
          </p>
        </motion.div>

        {/* Floating Freelance Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative z-10 mx-auto mt-16 w-full max-w-md"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A]/90 p-7 backdrop-blur-2xl"
          >
            {/* Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <div className="relative">
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-white">
                    Open for
                    <br />
                    Freelance
                  </h3>
                </div>

                {/* Available */}
                <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-medium text-emerald-300">
                    Available Now
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                Currently accepting freelance
                projects, startup collaborations, and
                ambitious digital experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
                {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="relative -mt-10 overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl"
        >
          {/* Subtle Top Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

          <div className="relative px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              {/* Main Heading */}
              <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let's create something worth remembering.
              </h3>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                Whether you're launching a startup, redesigning your
                product, or building a high-converting website,
                I'd love to help turn your vision into reality.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {/* Primary */}
                <Link href="/contact">
                  <motion.div
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]"
                  >
                    Start a Project

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.div>
                </Link>

                {/* Secondary */}
                <Link href="/freelancing">
                  <motion.div
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    View Services
                  </motion.div>
                </Link>
              </div>

              {/* Footer Stats */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <span className="font-medium text-slate-300">
                  30+
                </span>
                <span>Projects</span>

                <span className="text-slate-700">•</span>

                <span className="font-medium text-slate-300">
                  15+
                </span>
                <span>Clients</span>

                <span className="text-slate-700">•</span>

                <span className="font-medium text-slate-300">
                  3+
                </span>
                <span>Years</span>
              </div>

              {/* Small Note */}
              <p className="mt-6 text-sm text-slate-500">
                Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}