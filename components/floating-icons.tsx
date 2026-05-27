"use client"

import { motion } from "framer-motion"

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ROBOT */}
      <motion.img
        src="/robot.png"
        alt=""
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[38%] top-[58%] w-28 md:w-36"
      />

      {/* PINK ICON */}
      <motion.img
        src="/pink.png"
        alt=""
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[38%] top-[52%] w-24 md:w-28"
      />

      {/* DUCK */}
      <motion.img
        src="/duck.png"
        alt=""
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[50%] top-[72%] w-20 md:w-24"
      />
    </div>
  )
}