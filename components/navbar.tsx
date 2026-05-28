"use client"

import Link from "next/link"
import { useState } from "react"
import {  Menu, X } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "#" },
  { label: "Freelancing", href: "#" },
  { label: "Design", href: "/design" },
  
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <FaGithub className="h-7 w-7 text-white" />
          </Link>

          <h2 className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                scroll={true}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </h2>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
         {/* <Input
            placeholder="Search or jump to..."
            className="w-[260px] border-white/10 bg-white/5 text-white placeholder:text-gray-400"
          />

           <Button
            variant="ghost"
            className="text-gray-300 hover:bg-white/10 hover:text-white"
          >
            Admin
          </Button> */}

          <Link href="/contact" scroll={true}>
  <Button className="bg-white text-black hover:bg-gray-200">
    Connect
  </Button>
</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        
<div
  className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
    open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="border-t border-white/10 bg-gradient-to-b from-[#111827] via-[#0d1117] to-black/95 backdrop-blur-2xl">

    <div className="space-y-5 p-5">

      {/* SEARCH 
      <Input
        placeholder="Search..."
        className="rounded-full border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/20"
      />
*/}
      {/* NAV ITEMS */}
      <nav className="flex flex-col gap-2">

        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            scroll={true}
            onClick={() => setOpen(false)}
            className="group rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
          >
            <div className="flex items-center justify-between">
              {item.label}

              <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </div>
          </Link>
        ))}

      </nav>

      {/* BUTTON */}
      <div className="pt-2">
        <Link href="/contact" onClick={() => setOpen(false)}>
          <Button className="h-11 w-full rounded-2xl bg-white text-black transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200">
            Connect
          </Button>
        </Link>
      </div>

    </div>
  </div>
</div>
      )}
    </header>
  )
}