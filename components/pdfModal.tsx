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
      <button
        onClick={() => setOpen(true)}
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white hover:text-black"
      >
        <ArrowUpRight className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:rotate-45 group-hover:text-black" />
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