"use client"

import { motion } from "framer-motion"

const brands = [
  "/brands/logoWhite.png",
  "/brands/brand_01.png",
  "/brands/brand_02.png",
  "/brands/brand_03.png",
  "/brands/brand_04.png",
  "/brands/brand_05.png",
  "/brands/brand_06.png",
  "/brands/brand_07.png",
  "/brands/brand_08.png",
  "/brands/brand_09.png",
  "/brands/brand_10.png",
  "/brands/brand_11.png",
  "/brands/brand_12.png",
  "/brands/brand_13.png",
  "/brands/brand_14.png",
  "/brands/brand_15.png",
  "/brands/brand_16.png",
  "/brands/brand_17.png",
  "/brands/brand_18.png",
  "/brands/brand_19.png",
  "/brands/brand_20.png",
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
              className="h-16 w-auto object-contain "
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}