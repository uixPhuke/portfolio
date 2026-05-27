"use client"

import { motion } from "framer-motion"

const brands = [
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
  "/brands/logoWhite.png",
]

export default function Brands() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-14">
      
      {/* FADE LEFT */}
      <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black to-transparent" />

      {/* FADE RIGHT */}
      <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black to-transparent" />

      {/* SCROLLING TRACK */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-28"
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex min-w-[180px] items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
          >
            <img
              src={brand}
              alt="brand"
              className="h-12 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}