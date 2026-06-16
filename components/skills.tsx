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
  SiRedux,
  SiCloudinary,
  SiC,
  SiCplusplus,
} from "react-icons/si"

const categories = [
  {
    title: "Frontend",
    description: "Crafting fast and beautiful user experiences.",
    className: "lg:col-span-2",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend",
    description: "Building scalable APIs and services.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "Express", icon: SiExpress, color: "text-zinc-300" },
    ],
  },
  {
    title: "Database",
    description: "Managing and structuring data efficiently.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "SQL", icon: FaDatabase, color: "text-cyan-400" },
    ],
  },
  {
    title: "Programming",
    description: "Languages I use to solve problems.",
    className: "lg:col-span-2",
    skills: [
      { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-orange-400" },
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
    ],
  },
  {
    title: "Design",
    description: "Turning ideas into polished visuals.",
    skills: [
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Photoshop", icon: BiLogoAdobe, color: "text-blue-400" },
      { name: "Illustrator", icon: BiLogoAdobe, color: "text-orange-400" },
      { name: "After Effects", icon: BiLogoAdobe, color: "text-purple-400" },
    ],
  },
  {
    title: "Tools",
    description: "Utilities powering my workflow.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Redux", icon: SiRedux, color: "text-purple-400" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400" },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            EXPERTISE
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            The technologies
            <br />
            behind my work.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A collection of tools and technologies I use to
            design, develop, and ship modern digital products.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid gap-6 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              style={{
                willChange: "transform, opacity",
              }}
              className={`
                transform-gpu
                group relative overflow-hidden rounded-[32px]
                border border-white/10
                bg-zinc-900/50
                p-8
                backdrop-blur-xl
                transition-all duration-300
                hover:border-white/20
                hover:bg-zinc-900/70
                ${category.className || ""}
              `}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {category.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          scale: 1.04,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="
                          flex items-center gap-3
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-4 py-3
                          transition-colors duration-300
                          hover:bg-white/[0.06]
                          hover:border-white/20
                        "
                      >
                        <Icon
                          className={`text-lg ${skill.color}`}
                        />

                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}