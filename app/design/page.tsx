"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function ExploreGalleryPage() {
      useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">

      {/* GRID BACKGROUND */}
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

          <div className="mb-8 flex items-center justify-center gap-5">

            <div className="h-px w-20 bg-cyan-400/40" />

            <p className="text-xs font-medium uppercase tracking-[0.5em] text-cyan-300">
              EXPLORE MY WORK
            </p>

            <div className="h-px w-20 bg-cyan-400/40" />

          </div>

          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">

            Design{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Gallery.
            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-400">
            A curated collection of premium interfaces,
            scalable SaaS systems, startup products,
            dashboards, and cinematic web experiences
            crafted with modern design principles.
          </p>

          {/* TAGS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            {[
              "Landing Pages",
              "SaaS",
              "Dashboards",
              "Portfolio",
              "AI Apps",
              "Brand Systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-gray-300 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* FEATURED SECTION */}
       

        {/* GALLERY GRID */}
        <section className="mt-28">

          <div className="mb-12 flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Featured Projects
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Explore Recent Work
              </h2>

            </div>

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
              View All
            </button>

          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "AI SaaS Platform",
                image: "/projects/project4.jpg",
              },
              {
                title: "Luxury Portfolio",
                image: "/projects/project5.jpg",
              },
              {
                title: "Startup Dashboard",
                image: "/projects/project6.jpg",
              },
              {
                title: "Finance UI",
                image: "/projects/project7.jpg",
              },
              {
                title: "Creative Agency",
                image: "/projects/project8.jpg",
              },
              {
                title: "Mobile Experience",
                image: "/projects/project9.jpg",
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      ↗
                    </div>

                  </div>

                  <p className="mt-4 leading-relaxed text-gray-400">
                    Modern premium interface crafted with
                    scalability, motion, and immersive UX.
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </section>

      </div>

    </main>
  )
}