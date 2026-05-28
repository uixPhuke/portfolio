"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, X } from "lucide-react"

interface PdfModalProps {
  title: string
  description?: string
  pdfUrl: string
}

export default function PdfModal({
  title,
  description,
  pdfUrl,
}: PdfModalProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [open])

  return (
    <>
      {/* BUTTON */}
     {/* OPEN BUTTON */}
<button
  onClick={() => setOpen(true)}
  className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-violet-400/30 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
>

  {/* GLOW */}
  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <div className="absolute inset-0 bg-violet-500/20 blur-2xl" />
  </div>

  {/* CONTENT */}
  <span className="relative z-10 flex items-center gap-3">

    Resume

   <ArrowUpRight className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:rotate-45 group-hover:text-black" />
  </span>

</button>

      {/* MODAL PORTAL */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

            {/* BACKDROP */}
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* MODAL */}
            <div className="relative z-10 h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-300">

              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {title}
                  </h2>

                  {description && (
                    <p className="text-sm text-gray-400">
                      {description}
                    </p>
                  )}
                </div>

                {/* CLOSE */}
  <button
  onClick={() => setOpen(false)}
  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:rotate-90 hover:bg-red-500 hover:text-white"
>
  <X className="h-5 w-5 text-gray-300 transition-colors duration-300 group-hover:text-white" />
</button>
              </div>

              {/* PDF */}
              <iframe
                src={pdfUrl}
                className="h-full w-full bg-white"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}