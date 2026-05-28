"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "KIIT University",
    location: "Bhubaneswar, Odisha",
    duration: "2025 — Present",
    score: "CGPA: 9.10",
    type: "Post Graduation",
    description:
      "Currently pursuing MCA with focus on software engineering, scalable systems, full stack development, AI-driven applications, and advanced computer science concepts.",

    tech: [
      "Data Structures",
      "System Design",
      "Full Stack",
      "AI",
      "Cloud",
    ],
  },

  {
    degree: "Bachelor of Information Technology",
    institute: "Jorhat Institute of Science and Technology",
    location: "Jorhat, Assam",
    duration: "Graduated: June 2024",
    score: "CGPA: 8.21",
    type: "Under Graduation",
    description:
      "Completed Bachelor's degree with strong foundations in programming, databases, networking, operating systems, and software development principles.",

    tech: [
      "Java",
      "DBMS",
      "Networking",
      "OS",
      "Software Engineering",
    ],
  },

  {
    degree: "Class XII (Science)",
    institute: "Kaziranga English Academy",
    location: "Guwahati, Assam",
    duration: "2020",
    score: "71.2%",
    type: "Higher Secondary",
    description:
      "Completed higher secondary education in Science stream with focus on mathematics and computer science fundamentals.",

    tech: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],
  },

  {
    degree: "Class X",
    institute: "Sankardev Shishu Niketan",
    location: "Bamrajabari,Assam",
    duration: "2018",
    score: "67.17%",
    type: "Secondary",
    description:
      "Built strong academic foundations and analytical thinking during secondary education.",

    tech: [
      "Mathematics",
      "Science",
      "English",
      "Computer Basics",
    ],
  },
]

export default function EducationTree() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* GLOW */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
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
          className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              EDUCATION
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Academic Journey
            </h2>
          </div>

          {/*<p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base md:text-right">
            Building strong foundations in computer science,
            software engineering, scalable systems, and modern
            digital technologies through continuous learning.
          </p>*/}

        </motion.div>

        {/* TREE */}
        {/* TREE TIMELINE */}
<div className="relative mt-24">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent md:block" />

  <div className="space-y-20">

    {education.map((item, index) => {
      const isLeft = index % 2 === 0

      return (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 50,
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
          className={`relative flex w-full ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >

          {/* BRANCH LINE */}
          <div
            className={`absolute top-10 hidden h-px w-[120px] bg-gradient-to-r md:block ${
              isLeft
                ? "right-1/2 from-cyan-400 to-transparent"
                : "left-1/2 from-transparent to-cyan-400"
            }`}
          />

          {/* NODE */}
          <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:flex">

            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                delay: index * 0.1,
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0b1220] backdrop-blur-xl"
            >

              {/* PULSE */}
              <div className="absolute h-full w-full animate-ping rounded-full bg-cyan-400/20" />

              {/* DOT */}
              <div className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            </motion.div>

          </div>

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className={`group relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/20 md:w-[46%] ${
              isLeft ? "mr-auto" : "ml-auto"
            }`}
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* HEADER */}
            <div className="relative z-10 flex flex-col gap-6">

              {/* TOP BADGES */}
              <div className="flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">

                  <CalendarDays className="h-4 w-4 text-cyan-400" />

                  {item.duration}

                </div>

                <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  {item.type}
                </div>

              </div>

              {/* TITLE */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">

                  <GraduationCap className="h-7 w-7 text-cyan-300" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg text-gray-300">
                    {item.institute}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      {item.location}
                    </div>

                    <div className="font-medium text-white">
                      {item.score}
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* DESCRIPTION 
            <p className="relative z-10 mt-8 text-[15px] leading-relaxed text-gray-400 md:text-base">
              {item.description}
            </p>
*/}
            {/* TAGS 
            <div className="relative z-10 mt-8 flex flex-wrap gap-3">

              {item.tech.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-white"
                >
                  {tech}
                </div>
              ))}

            </div>
            */}

          </motion.div>

        </motion.div>
      )
    })}
  </div>
</div>

      </div>

    </section>
  )
}