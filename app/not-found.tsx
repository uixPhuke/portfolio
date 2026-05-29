"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Sparkles } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-white">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
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

      {/* GLOW 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* GLOW 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-center">

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-[120px] font-black text-transparent md:text-[200px]"
        >
          404
        </motion.h1>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12"
        >

          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold md:text-5xl">
            Lost in the Digital Universe
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            The page being searched for may have been moved,
            deleted, or never existed. The requested destination
            cannot be reached from the current route.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

             <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Home size={18} />
              Back Home
            </Link>

            {/*<button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>*/}

          </div>

        </motion.div>

      </div>

    </main>
  )
}