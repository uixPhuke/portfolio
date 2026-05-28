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
          <Input
            placeholder="Search or jump to..."
            className="w-[260px] border-white/10 bg-white/5 text-white placeholder:text-gray-400"
          />

          {/* <Button
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
        <div className="border-t border-white/10 bg-[#0d1117] lg:hidden">
          <div className="space-y-4 p-4">
            <Input
              placeholder="Search..."
              className="border-white/10 bg-white/5 text-white"
            />

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-4">
             {/* <Button variant="ghost" className="justify-start text-gray-300">
                Admin
              </Button>*/}

              <Link href="/contact">
  <Button className="border border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
    Connect
  </Button>
</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}