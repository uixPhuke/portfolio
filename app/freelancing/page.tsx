"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"

import { freelancingServices } from "@/app/data/freelancing"
import Image from "next/image"
import { cloudinaryUrl } from "@/app/lib/cloudinary"

import {
  Search,
  LayoutGrid,
  Rows3,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

export default function FreelancingGalleryPage() {
  const [search, setSearch] = useState("")
  const [view, setView] = useState("grid")
  const [sort, setSort] = useState("all")
 const categories = useMemo(() => {
  return [
    "all",
    ...new Set(
      freelancingServices.map((service) =>
        service.category.trim().toLowerCase()
      )
    ),
  ]
}, [])
  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase()

    return freelancingServices.filter((service) => {
      const matchesSearch =
        query === "" ||
        service.title.toLowerCase().includes(query) ||
        service.desc.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.tech.some((tech) =>
          tech.toLowerCase().includes(query)
        )

      const matchesCategory =
        sort === "all" ||
        service.category.toLowerCase() ===
          sort.toLowerCase()

      return matchesSearch && matchesCategory
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

      {/* GLOWS */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">

          {/*  <div className="mb-8 flex items-center justify-center gap-5">
            <div className="h-px w-20 bg-cyan-400/40" />

            <p className="text-xs font-medium uppercase tracking-[0.5em] text-cyan-300">
              FREELANCING SERVICES
            </p>

            <div className="h-px w-20 bg-cyan-400/40" />
          </div> */}

          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">

            Freelancing{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Works.
            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-400">
            Web Development, UI/UX Design, E-Commerce,
            SaaS Applications and Digital Solutions.
          </p>
{/* SERVICES QUICK ACCESS */}

<div className="mt-12 flex flex-wrap justify-center gap-3">

  {freelancingServices.map((service) => (

    <div
      key={service.slug}
      
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-5
        py-3
        text-sm
        text-gray-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:text-cyan-300
      "
    >
      {service.title}
    </div>

  ))}

</div>
{/*
<div className="mt-10">

  <p className="mb-5 text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
    Available On
  </p>

  <div className="flex flex-wrap justify-center gap-4">

    {[
      "Upwork",
      "Fiverr",
      "Freelancer",
      "LinkedIn",
      "Direct Clients",
      "Remote Contracts",
    ].map((platform) => (

      <motion.div
        key={platform}
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-3
          text-sm
          text-gray-300
          backdrop-blur-xl
        "
      >
        {platform}
      </motion.div>

    ))}

  </div>

</div> */}
        </div>

        {/* TOOLBAR */}
        <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">

              <LayoutGrid className="h-4 w-4 text-cyan-400" />

              <span className="text-sm text-gray-300">
                <span className="font-semibold text-white">
                  {filteredServices.length}
                </span>{" "}
                works found
              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 animate-pulse text-cyan-400" />

              <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
                {sort === "all" ? "All Categories" : sort}
              </span>

            </div>

          </div>

          <div className="flex w-full flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl sm:w-auto sm:flex-row sm:items-center">

            {/* VIEW */}
            <div className="flex items-center gap-3">

              <div className="flex items-center rounded-2xl border border-white/10 bg-[#0B1220]/80 p-1">

                <button
                  onClick={() => setView("grid")}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    view === "grid"
                      ? "bg-white text-black"
                      : "text-gray-400"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setView("list")}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    view === "list"
                      ? "bg-white text-black"
                      : "text-gray-400"
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
  {categories.map((category) => (
    <option key={category} value={category}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </option>
  ))}
</select>


                <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

              </div>

            </div>

            {/* SEARCH */}
            <div className="relative flex-1 sm:min-w-[260px]">

              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="h-10 w-full rounded-2xl border border-white/10 bg-[#0B1220]/80 pl-11 pr-4 text-sm text-white outline-none"
              />

            </div>

          </div>

        </div>

        {/* GRID */}
        {filteredServices.length === 0 ? (

  <div className="mt-20 flex flex-col items-center justify-center py-24 text-center">

    <Sparkles className="mb-4 h-10 w-10 text-cyan-400" />

    <h3 className="text-2xl font-bold text-white">
      No Services Found
    </h3>

    <p className="mt-2 text-gray-400">
      Try another search term or category.
    </p>

  </div>

) : view === "grid" ? (
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            

          {filteredServices.map((service, index) => (

             <motion.div
              layout
                key={service.slug}
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

              <div className="relative">

               <Image
  src={cloudinaryUrl(service.image)}
  alt={service.title}
  width={1200}
  height={800}
 className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                
/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                <div className="absolute left-5 top-5">

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs backdrop-blur-xl">

                    <Sparkles className="h-3 w-3 text-cyan-400" />

                    {service.category}

                  </div>

                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">

                 <div className="flex items-end justify-between gap-4">

  <div className="min-w-0 flex-1">

    <h2 className="text-3xl font-bold">
      {service.title}
    </h2>

    <p className="mt-2 line-clamp-2 text-gray-300">
      {service.desc}
    </p>

  </div>

  <Link
    href={`/freelancing/${service.slug}`}
    className="
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      transition-all
      duration-300
      hover:bg-white
      hover:text-black
    "
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

  <div className="mt-20 space-y-6">

    {filteredServices.map((service, index) => (

      <motion.div
                key={service.slug}
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
        <div className="overflow-hidden rounded-[24px] md:w-[320px]">

            <Image
  src={cloudinaryUrl(service.image)}
  alt={service.title}
  width={1200}
  height={800}
  className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
                  
/>

        </div>

        <div className="flex flex-1 flex-col justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">

              <Sparkles className="h-3 w-3 text-cyan-400" />

              <span className="text-xs uppercase tracking-wider text-cyan-200">
                {service.category}
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-white">
              {service.title}
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              {service.desc}
            </p>

          </div>

          <div className="mt-8">

            <Link
              href={`/freelancing/${service.slug}`}
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-black
              "
            >
              Explore Service

              <ArrowUpRight className="h-4 w-4" />
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