"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"

import { designs } from "@/app/data/designs"

import {
  Search,
  LayoutGrid,
  Rows3,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

export default function DesignGalleryPage() {
   
  const [search, setSearch] = useState("")
  const [view, setView] = useState("grid")
  const [sort, setSort] = useState("all")
 

  // 👇 ADD HERE
  console.log("sort =", sort)
  console.log("designs =", designs)

  const filteredDesigns = useMemo(() => {
    const query = search.trim().toLowerCase()

    return designs.filter((design) => {
      const matchesSearch =
        query === "" ||
        design.title.toLowerCase().includes(query) ||
        design.desc.toLowerCase().includes(query) ||
        design.category.toLowerCase().includes(query) ||
        design.tech.some((tech) =>
          tech.toLowerCase().includes(query)
        )

      const matchesCategory =
        sort === "all" ||
        design.category.trim().toLowerCase() ===
          sort.trim().toLowerCase()

      return matchesSearch && matchesCategory
    })
  }, [search, sort])

  console.log("filtered =", filteredDesigns)

  

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">

      {/* BACKGROUND */}
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
              DESIGN GALLERY
            </p>

            <div className="h-px w-20 bg-cyan-400/40" />

          </div>

          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">

            Creative{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Designs.
            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-400">
            Explore premium interfaces, cinematic UI systems,
            startup experiences, and immersive visual designs.
          </p>

        </div>

        {/* TOOLBAR */}
{/* TOP TOOLBAR */}
<div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

  {/* LEFT SIDE */}
  <div className="flex flex-wrap items-center gap-3">

    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
      <LayoutGrid className="h-4 w-4 text-cyan-400" />

      <span className="text-sm text-gray-300">
        <span className="font-semibold text-white">
          {filteredDesigns.length}
        </span>{" "}
        Design{filteredDesigns.length !== 1 ? "s" : ""} Found
      </span>
    </div>

    <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-xl">
      <Sparkles className="h-4 w-4 animate-pulse text-cyan-400" />

      <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
        {sort === "all" ? "All Categories" : sort}
      </span>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="flex w-full flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl sm:w-auto sm:flex-row sm:items-center">

    {/* VIEW */}
    <div className="flex items-center gap-3">

      <div className="flex items-center rounded-2xl border border-white/10 bg-[#0B1220]/80 p-1">

        <button
          onClick={() => setView("grid")}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            view === "grid"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
        </button>

        <button
          onClick={() => setView("list")}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            view === "list"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Rows3 className="h-4 w-4" />
        </button>

      </div>

      <div className="relative">

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 appearance-none rounded-2xl border border-white/10 bg-[#0B1220]/80 px-4 pr-10 text-sm text-gray-300 outline-none transition-all duration-300 focus:border-cyan-400/40"
        >
          <option value="all">All</option>
          <option value="saas">SaaS</option>
          <option value="dashboard">Dashboard</option>
          <option value="portfolio">Portfolio</option>
          <option value="branding">Branding</option>
        </select>

        <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

      </div>

    </div>

    {/* SEARCH */}
    <div className="relative flex-1 sm:min-w-[260px]">

      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        placeholder="Search designs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-10 w-full rounded-2xl border border-white/10 bg-[#0B1220]/80 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400/40"
      />

    </div>

  </div>

</div>

        {/* GRID */}
        {view === "grid" ? (

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredDesigns.map((design, index) => (

              <motion.div
              layout
                key={design.slug}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-5 top-5">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-gray-300 backdrop-blur-xl">

                      <Sparkles className="h-3 w-3 text-cyan-400" />

                      {design.category}

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">

                    <div className="flex items-end justify-between gap-5">

                      <div>

                        <h2 className="text-3xl font-bold text-white">
                          {design.title}
                        </h2>

                        <p className="mt-2 text-gray-300">
                          {design.desc}
                        </p>

                      </div>

                      <Link
                        href={`/design/${design.slug}`}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
                      >

                        <ArrowUpRight className="h-5 w-5" />

                      </Link>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        ) : (

          /* LIST VIEW */
          <div className="mt-20 space-y-5">

            
            {filteredDesigns.length === 0 && (
  <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
    <Sparkles className="mb-4 h-10 w-10 text-cyan-400" />

    <h3 className="text-2xl font-bold text-white">
      No Designs Found
    </h3>

    <p className="mt-2 text-gray-400">
      Try another category or search term.
    </p>
  </div>
)}

            {filteredDesigns.map((design, index) => (

              <motion.div
                key={design.slug}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="group flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/20 md:flex-row"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[24px] md:w-[320px]">

                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
                  />

                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <div className="absolute left-5 top-5 z-20">
  <motion.div
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/60 px-4 py-2 backdrop-blur-xl"
  >
    <Sparkles className="h-3.5 w-3.5 animate-pulse text-cyan-400" />

    <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
      {design.category}
    </span>
  </motion.div>
</div>

                    <h2 className="text-3xl font-bold text-white">
                      {design.title}
                    </h2>

                    <p className="mt-4 leading-relaxed text-gray-400">
                      {design.desc}
                    </p>

                  </div>

                  {/* BUTTON */}
                  <div className="mt-8 flex flex-wrap items-center gap-5">

                    <Link
                      href={`/design/${design.slug}`}
                      className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
                    >

                      Explore Design

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    </Link>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        )}

      </div>

    </main>
  )
}