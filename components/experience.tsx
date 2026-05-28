"use client"

import { motion } from "framer-motion"

import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react"
import PdfModal from "./pdfModal"

const experiences = [
  {
    company: "Webhood Infotech",
    designation: "Javascript Developer",
    duration: "Aug 2022 - Sep 2023",
    type: "Part Time",
    location: "Jamshedpur, Jharkhand",
    pdf: "/webhood.pdf",

    description:
      "Developed dynamic, high-level, and reusable components using Velo JavaScript while collaborating with the team on QA, bug fixes, feature implementation, and code refactoring.",

    tech: [
      "JavaScript",
      "Velo",
      "Frontend",
      "QA",
      "Refactoring",
    ],
  },

  {
    company: "SnS Inc",
    designation: "Graphics Designer",
    duration: "Nov 2024 - Apr 2025",
    type: "Full Time",
    location: "Guwahati, Assam",
    pdf: "/sns.pdf",

    description:
      "Designed engaging visuals for social media, websites, and digital marketing while staying updated with the latest design trends to deliver fresh and innovative creative assets.",

    tech: [
      "Photoshop",
      "Illustrator",
      "Branding",
      "Social Media",
      "UI Design",
    ],
  },
]

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* GLOWS */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              EXPERIENCE
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Work Journey
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-md md:text-right"
          >

         {/*     <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              Building modern digital experiences through
              product engineering, scalable architecture,
              UI systems, and creative development.
            </p>
*/}
          </motion.div>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* LINE */}
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent md:block" />

          <div className="space-y-10">

            {experiences.map((exp, index) => (
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
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="relative md:pl-16"
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-0 top-10 hidden md:flex">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0b1220] backdrop-blur-xl">

                    <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                  </div>

                </div>

                {/* CARD */}
                <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/20">

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* TOP */}
                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                    {/* LEFT */}
                    <div>

                      {/* BADGES */}
                      <div className="mb-5 flex flex-wrap gap-3">

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">

                          <CalendarDays className="h-4 w-4 text-cyan-400" />

                          {exp.duration}

                        </div>

                        <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                          {exp.type}
                        </div>

                      </div>

                      {/* COMPANY */}
                      <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">

                          <BriefcaseBusiness className="h-7 w-7 text-cyan-300" />

                        </div>

                        <div>

                          <h3 className="text-3xl font-bold tracking-tight">
                            {exp.company}
                          </h3>

                          <p className="mt-2 text-lg text-gray-400">
                            {exp.designation}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* ICON */}
                   {/* PDF MODAL BUTTON */}
<div className="hidden md:flex">
  <PdfModal
    title={exp.company}
    description={exp.designation}
    pdfUrl={exp.pdf}
  />
</div>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 mt-8 max-w-3xl text-[15px] leading-relaxed text-gray-400 md:text-base">
                    {exp.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="relative z-10 mt-8 flex flex-wrap gap-3">

                    {exp.tech.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}