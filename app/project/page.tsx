"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"

import {
  ArrowUpRight,
  Layers3,
  Sparkles,
  Search,
  SlidersHorizontal,
  LayoutGrid,
  Rows3,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Foodeyez",
    category: "platform",
    tech: ["Wix", "JavaScript", "Velo"],
    desc:
      "Implemented dynamic server-side functionalities, enhancing the website’s interactivity and responsiveness.",
    image: "/projects/foodeyez.webp",
    live: "#",
    github: "#",
  },

  {
    title: "UiX E-Commerce",
    category: "commerce",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
    ],
    desc:
      "Built a scalable e-commerce platform with secure authentication, REST APIs, responsive UI, and premium shopping experience.",
    image: "/projects/ecommerce.webp",
    live: "#",
    github: "#",
  },

  {
    title: "School Management System",
    category: "dashboard",
    tech: [
      "Python",
      "Django",
      "SQLite",
      "Laravel",
    ],
    desc:
      "Developed multi-role dashboards for Admin, Teacher, and Student management with database integration and backend architecture.",
    image: "/projects/school.webp",
    live: "#",
    github: "#",
  },

  {
    title: "UiX Masterclass",
    category: "saas",
    tech: [
      "React.js",
      "Tailwind",
      "Vite.js",
    ],
    desc:
      "Advanced learning platform focused on MERN Stack, DSA, and creative tools with modern educational experience.",
    image: "/projects/masterclass.webp",
    live: "#",
    github: "#",
  },

  {
    title: "Restaurant Reservation",
    category: "platform",
    tech: [
      "PHP",
      "JavaScript",
      "MySQL",
    ],
    desc:
      "Created a complete reservation system with booking workflows, database management, and user-friendly experience.",
    image: "/projects/restaurant.webp",
    live: "#",
    github: "#",
  },
]

export default function ProjectsPage() {

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("all")
  const [view, setView] = useState("grid")



  const filteredProjects = useMemo(() => {

  return projects.filter((project) => {

    const query = search.toLowerCase()

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.desc.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(query)
      )

    const matchesSort =
      sort === "all"
        ? true
        : project.category.toLowerCase() === sort

    return matchesSearch && matchesSort

  })

}, [search, sort])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">

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
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-8 flex items-center justify-center gap-5">

            <div className="h-px w-20 bg-cyan-400/40" />

            <p className="text-xs font-medium uppercase tracking-[0.5em] text-cyan-300">
              FEATURED PROJECTS
            </p>

            <div className="h-px w-20 bg-cyan-400/40" />

          </div>

          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">

            Creative{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Projects.
            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-400">
            A curated collection of modern full-stack products,
            SaaS systems, dashboards, creative interfaces,
            and scalable web experiences crafted with
            performance and aesthetics in mind.
          </p>

        </div>

        {/* TOP TOOLBAR */}

<div className="mt-16 flex justify-center lg:justify-end">

  <div className="flex w-full flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl sm:w-auto sm:flex-row sm:items-center">

    {/* LEFT CONTROLS */}
    <div className="flex items-center gap-3">

      {/* VIEW TOGGLE */}
      <div className="flex items-center rounded-2xl border border-white/10 bg-[#0B1220]/80 p-1 shadow-inner">

        <button
          onClick={() => setView("grid")}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            view === "grid"
              ? "bg-white text-black shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
        </button>

        <button
          onClick={() => setView("list")}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            view === "list"
              ? "bg-white text-black shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Rows3 className="h-4 w-4" />
        </button>

      </div>

      {/* SORT */}
      <div className="relative">

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 appearance-none rounded-2xl border border-white/10 bg-[#0B1220]/80 px-4 pr-10 text-sm text-gray-300 outline-none transition-all duration-300 hover:border-cyan-400/20 focus:border-cyan-400/40"
        >

          <option value="all">All Projects</option>

          <option value="saas">SaaS</option>

          <option value="dashboard">Dashboard</option>

          <option value="commerce">Commerce</option>

          <option value="platform">Platform</option>

        </select>

        <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

      </div>

    </div>

    {/* SEARCH */}
    <div className="relative flex-1 sm:min-w-[260px]">

      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        placeholder="Search projects, tech stack..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-10 w-full rounded-2xl border border-white/10 bg-[#0B1220]/80 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-cyan-400/20 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
      />

    </div>

  </div>

</div>

        {/* PROJECTS */}
        <section
          className={`mt-20 ${
            view === "grid"
              ? "space-y-32"
              : "space-y-16"
          }`}
        >

          {filteredProjects.length === 0 && (

  <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

    <div className="rounded-full border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

      <Search className="h-8 w-8 text-gray-500" />

    </div>

    <h3 className="mt-6 text-2xl font-semibold text-white">
      No projects found
    </h3>

    <p className="mt-3 max-w-md text-gray-400">
      Try searching with another keyword or category.
    </p>

  </div>

)}

{filteredProjects.map((project, index) => (

<motion.div
  layout
  key={project.title}
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.35,
  }}
>

    {view === "grid" ? (

      /* GRID VIEW */
      <div
        className={`grid items-center gap-14 lg:grid-cols-2 ${
          index % 2 !== 0
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }`}
      >

        {/* IMAGE */}
        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.3,
          }}
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl"
        >

          <div className="relative overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

          </div>

          {/* OVERLAY */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-8">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">

              <Layers3 className="h-4 w-4 text-cyan-400" />

              {project.category}

            </div>

            <h2 className="text-4xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed text-gray-300">
              {project.desc}
            </p>

          </div>

        </motion.div>

        {/* CONTENT */}
        <div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-cyan-400" />

            Premium Product Experience

          </div>

          <h2 className="text-5xl font-bold leading-tight text-white">
            {project.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            {project.desc}
          </p>

          {/* TECH */}
          <div className="mt-10 flex flex-wrap gap-4">

            {project.tech.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
              >
                {tech}
              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href={project.live}
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
            >

              Live Preview

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </Link>

            <Link
              href={project.github}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
            >

              Github

              <FaGithub className="h-5 w-5" />

            </Link>

          </div>

        </div>

      </div>

    ) : (

      /* LIST VIEW */
      <motion.div
        whileHover={{
          y: -4,
        }}
        className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
      >

        <div className="grid gap-0 md:grid-cols-[320px_1fr]">

          {/* IMAGE */}
          <div className="relative overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between p-8">

            <div>

              {/* TOP */}
              <div className="flex flex-wrap items-center justify-between gap-4">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">

                  <Layers3 className="h-4 w-4 text-cyan-400" />

                  {project.category}

                </div>

                <div className="flex items-center gap-3">

                  <Link
                    href={project.live}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white hover:text-black"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href={project.github}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white hover:text-black"
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>

                </div>

              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-4xl font-bold text-white">
                {project.title}
              </h2>

              {/* DESC */}
              <p className="mt-5 max-w-3xl leading-relaxed text-gray-400">
                {project.desc}
              </p>

            </div>

            {/* TECH */}
            <div className="mt-8 flex flex-wrap gap-3">

              {project.tech.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-white/10 bg-[#0B1220]/70 px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    )}

  </motion.div>
))}

        </section>

      </div>

    </main>
  )
}