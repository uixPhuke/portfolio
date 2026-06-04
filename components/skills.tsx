"use client"

import { motion } from "framer-motion"

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa"

import { BiLogoAdobe } from "react-icons/bi"

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiRedux,
  SiCloudinary,
} from "react-icons/si"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-300",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "text-white",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-400",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-300",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "SQL",
        icon: FaDatabase,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-300",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-400",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-orange-400",
      },
    ],
  },

  {
    title: "Design",
    skills: [
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-400",
      },
      {
        name: "Photoshop",
        icon: BiLogoAdobe,
        color: "text-blue-400",
      },
      {
        name: "Illustrator",
        icon: BiLogoAdobe,
        color: "text-orange-400",
      },
      {
        name: "After Effects",
        icon: BiLogoAdobe,
        color: "text-purple-400",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
        color: "text-blue-400",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-400",
      },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* MAIN GLOW */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

        {/* CYAN LIGHT */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* PINK LIGHT */}
        <div className="absolute right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">

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
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300">
              MY SKILLS
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Modern Tech Stack
            </h2>

          </motion.div>
        </div>

        {/* GROUPS */}
        <div className="mt-16 space-y-10">

          {Array.from(
            { length: Math.ceil(skillGroups.length / 2) },
            (_, rowIndex) => {
              const left = skillGroups[rowIndex * 2]
              const right = skillGroups[rowIndex * 2 + 1]

              return (
                <div
                  key={rowIndex}
                  className="grid gap-6 lg:grid-cols-2"
                >

                  {/* LEFT */}
                  {left && (
                    <motion.div
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
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
                    >

                      {/* GLOW */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/5" />

                      {/* TITLE */}
                      <div className="relative z-10 mb-6 flex items-center gap-4">

                        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/60 to-transparent" />

                        <h3 className="text-lg font-semibold">
                          {left.title}
                        </h3>

                        <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/60 to-transparent" />
                      </div>

                      {/* SKILLS */}
                      <div className="relative z-10 grid grid-cols-4 gap-3">

                        {left.skills.map((skill, index) => {
                          const Icon = skill.icon

                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{
                                y: -4,
                                scale: 1.02,
                              }}
                              className=" group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl"
                            >

                              {/* HOVER LIGHT */}
                              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                              {/* ICON */}
                              <motion.div
                                animate={{
                                  y: [0, -5, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: index * 0.1,
                                }}
                                className={`text-2xl ${skill.color}`}
                              >
                                <Icon />
                              </motion.div>

                              {/* NAME */}
                              <p className="mt-2 text-sm font-medium">
                                {skill.name}
                              </p>

                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* RIGHT */}
                  {right && (
                    <motion.div
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
                        delay: 0.1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
                    >

                      {/* GLOW */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-blue-500/5" />

                      {/* TITLE */}
                      <div className="relative z-10 mb-6 flex items-center gap-4">

                        <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/60 to-transparent" />

                        <h3 className="text-lg font-semibold">
                          {right.title}
                        </h3>

                        <div className="h-px flex-1 bg-gradient-to-l from-blue-500/60 to-transparent" />
                      </div>

                      {/* SKILLS */}
                      <div className="relative z-10 grid grid-cols-2 gap-3">

                        {right.skills.map((skill, index) => {
                          const Icon = skill.icon

                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{
                                y: -4,
                                scale: 1.02,
                              }}
                              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl"
                            >

                              {/* HOVER LIGHT */}
                              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                              {/* ICON */}
                              <motion.div
                                animate={{
                                  y: [0, -5, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: index * 0.1,
                                }}
                                className={`text-2xl ${skill.color}`}
                              >
                                <Icon />
                              </motion.div>

                              {/* NAME */}
                              <h4 className="mt-2 text-sm font-medium">
                                {skill.name}
                              </h4>

                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                </div>
              )
            }
          )}

        </div>
      </div>
    </section>
  )
}