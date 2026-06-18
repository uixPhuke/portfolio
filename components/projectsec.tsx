"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Laxmi Yamaha",
    category: "Graphic Design",
    description:
      "High-impact automotive creatives crafted for Yamaha dealership campaigns and social media.",
    image:
      "https://res.cloudinary.com/dsn8gtduk/image/upload/v1780589871/img1_hsa7du.webp",
    href: "/project",
    rotate: -8,

    mobile: { x: 0, y: 0 },
    tablet: { x: 0, y: 0 },
    desktop: { x: 0, y: 0 },

    delay: 0,
  },

  {
    title: "Portfolio",
    category: "Next.js",
    description:
      "Modern portfolio experiences built with motion, interaction, and cutting-edge technologies.",
    image:
      "https://res.cloudinary.com/dsn8gtduk/image/upload/v1780589859/img6_finufz.webp",
    href: "/project",
    rotate: 6,

    mobile: { x: 35, y: 80 },
    tablet: { x: 140, y: 70 },
    desktop: { x: 140, y: 70 },

    delay: 0.15,
  },

  {
    title: "UI Experience",
    category: "Design",
    description:
      "Beautifully crafted experiences built with performance, creativity, and modern technologies.",
    image:
      "https://res.cloudinary.com/dsn8gtduk/image/upload/v1780589860/img5_ijwvgn.webp",
    href: "/project",
    rotate: -5,

    mobile: { x: 18, y: 165 },
    tablet: { x: 50, y: 170 },
    desktop: { x: 20, y: 220 },

    delay: 0.3,
  },
]

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <Link href={project.href}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: project.delay,
        }}
        animate={{
          y: [0, -8, 0],
        }}
        whileHover={{
          y: -18,
          rotate: 0,
          scale: 1.02,
        }}
        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-white/[0.03]
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        {/* Image */}
        <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="
              (max-width:768px) 82vw,
              (max-width:1280px) 320px,
              340px
            "
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bottom Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[70%]
              bg-gradient-to-t
              from-[#050816]
              via-[#050816]/90
              to-transparent
            "
          />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[90%]
                  text-base
                  leading-relaxed
                  text-slate-300
                "
              >
                {project.description}
              </p>
            </div>

            <motion.div
              whileHover={{ rotate: -45 }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                backdrop-blur-xl
              "
            >
              <ArrowUpRight className="h-5 w-5 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ExploreProjects() {
  return (
    <section
      id="prosec"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-5
        py-24
        md:px-8
        md:py-32
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-120px]
            top-10
            h-80
            w-80
            rounded-full
            bg-violet-600/20
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-[-120px]
            h-80
            w-80
            rounded-full
            bg-cyan-500/20
            blur-[140px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>
            <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-16

          xl:flex-row
          xl:items-center
          xl:justify-between
          xl:gap-20
        "
      >
        {/* Floating Stack */}
        <div
          className="
            relative
            mx-auto
            h-[620px]
            w-full
            max-w-[430px]

            md:h-[650px]
            md:max-w-[520px]

            xl:h-[720px]
            xl:w-[620px]
            xl:max-w-[620px]
            xl:flex-shrink-0
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="
                absolute
                w-[82vw]
                max-w-[360px]

                md:w-[320px]

                xl:w-[340px]
              "
              style={{
                left: `${project.mobile.x}px`,
                top: `${project.mobile.y}px`,
              }}
            >
              {/* Tablet */}
              <div
                className="hidden md:block xl:hidden"
                style={{
                  transform: `translate(${project.tablet.x}px, ${project.tablet.y}px) rotate(${project.rotate}deg)`,
                }}
              >
                <ProjectCard project={project} />
              </div>

              {/* XL Desktop */}
              <div
                className="hidden xl:block"
                style={{
                  transform: `translate(${project.desktop.x}px, ${project.desktop.y}px) rotate(${project.rotate}deg)`,
                }}
              >
                <ProjectCard project={project} />
              </div>

              {/* Mobile */}
              <div
                className="md:hidden"
                style={{
                  transform: `rotate(${project.rotate}deg)`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-2xl
            text-center

            xl:mx-0
            xl:text-left
          "
        >
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-violet-400" />

            <span className="text-sm font-medium text-slate-300">
              Featured Work
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-syne
              text-4xl
              font-bold
              leading-tight
              text-white

              sm:text-5xl
              md:text-6xl
            "
          >
            Explore My{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-cyan-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-400

              md:text-xl

              xl:mx-0
            "
          >
            Discover a collection of digital experiences,
            interfaces, and products crafted through creativity,
            strategy, and code.
          </p>

          {/* CTA + Stats */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-8

              xl:flex-row
              xl:justify-start
            "
          >
            {/* Button */}
            <Link href="/project">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]
                "
              >
                Explore Projects

                <ArrowUpRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.div>
            </Link>

            {/* Stats */}
            <div
              className="
                mx-auto
                flex
                flex-wrap
                justify-center
                gap-8
                text-center

                xl:mx-0
                xl:justify-start
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-white">
                  10+
                </h3>

                <p className="text-sm text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  3+
                </h3>

                <p className="text-sm text-slate-500">
                  Years
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  20+
                </h3>

                <p className="text-sm text-slate-500">
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}