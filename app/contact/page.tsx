"use client"
import { useState, useEffect } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"


import {
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { CheckCircle2, Loader2 } from "lucide-react"

import { motion } from "framer-motion"

const socials = [
  {
    icon: FaGithub,
    target: "_blank",
    href: "https://github.com/uixPhuke",
  },
  {
    icon: FaLinkedin,
    target: "_blank",
    href: "https://linkedin.com/in/rohan-in",
  },
  {
    icon: FaInstagram,
    target: "_blank",
    href: "https://instagram.com/byphixel",
  },
  {
    icon: FaTwitter,
    target: "_blank",
    href: "https://x.com/rohanphuke",
  },
]

export default function Contact() {
     useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")


const [loading, setLoading] = useState(false)
const [success, setSuccess] = useState(false)
const handleSubmit = async () => {
  if (!name || !email || !message) return

  try {
    setLoading(true)
    setSuccess(false)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    const data = await response.json()
//this is the response from the backend api route. It will have a success property that we can use to show a success message to the user.
    if (data.success) {
      setSuccess(true)

      setName("")
      setEmail("")
      setMessage("")

      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    }
  } catch (error) {
    console.error(error)
  } finally {
    setLoading(false)
  }
}
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white">

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
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">
 {/* 
          <div className="mb-8 flex items-center justify-center gap-5">

            <div className="h-px w-20 bg-cyan-400/40" />

            <p className="text-xs font-medium uppercase tracking-[0.5em] text-cyan-300">
              CONNECT WITH ME
            </p>

            <div className="h-px w-20 bg-cyan-400/40" />

          </div>*/}

          <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">

            Contact{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Me.
            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-md leading-relaxed text-gray-400 md:text-md">
            Reach out to discuss product ideas, collaborations,
            development opportunities, or even just to have a
            conversation. Whether it’s tech, business,
            creativity, or random ideas, I’m always open to
            meaningful connections and interesting discussions.
          </p>

          {/* TAGS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            {[
              "Tech & Startups",
              "Freelancing",
              "Collaborations",
              "Just Talk :)",
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

        {/* MAIN GRID */}
        <div className="mt-24 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >

            {/* BADGE */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300">

              <Sparkles className="h-4 w-4 text-cyan-400" />

              Premium Development Experience

            </div>

            <h2 className="text-5xl font-bold leading-none md:text-7xl">

              Let&apos;s build

              <br />

              <span className="text-white/30">
                something iconic.
              </span>

            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-gray-400">
              Premium digital experiences engineered with
              performance, scalability, and world-class design.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">

              {/* CARD */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">

                    <Clock3 className="h-6 w-6 text-cyan-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Fast Communication
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Quick replies, smooth workflow,
                      zero confusion.
                    </p>

                  </div>

                </div>

              </div>

              {/* CARD */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">

                    <ShieldCheck className="h-6 w-6 text-violet-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Production Ready
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Clean architecture with scalability
                      and premium UX.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* SOCIAL ICONS */}
            {/* SOCIAL ICONS */}
            <div className="mt-8">

              

              <div className="grid grid-cols-4 gap-4">

                {socials.map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -4,
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="group relative flex h-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
                    >

                      {/* GLOW */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <Icon className="relative z-10 text-xl text-gray-400 transition-all duration-300 group-hover:text-white" />

                    </motion.a>
                  )
                })}

              </div>

            </div>

            {/* PREMIUM STATS GRID */}
            {/* STATS */}
        <div className="mt-14 flex flex-wrap gap-12">

          {[
            {
              title: "24h",
              desc: "Avg response",
            },
            {
              title: "100%",
              desc: "Client focused",
            },
            {
              title: "Premium",
              desc: "UI standards",
            },
          ].map((item) => (
            <div key={item.title}>

              <p className="text-3xl font-bold">
                {item.title}
              </p>

              <p className="mt-2 text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="relative h-fit overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl md:p-8"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <div className="relative z-10">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-gray-500">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 text-4xl font-bold">
                    Contact Form
                  </h3>

                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  ↗
                </div>

              </div>

              {/* FORM */}
              <div className="mt-10 space-y-6">

                <div>

                  <label className="mb-3 block text-sm text-gray-400">
                    Full Name
                  </label>

                 <input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 text-[15px] outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400/40"
/>

                </div>

                <div>

                  <label className="mb-3 block text-sm text-gray-400">
                    Email Address
                  </label>

                 <input
  type="email"
  placeholder="you@mail.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 text-[15px] outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400/40"
/>

                </div>

                <div>

                  <label className="mb-3 block text-sm text-gray-400">
                    Message
                  </label>

                  <textarea
  rows={6}
  placeholder="Your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/[0.02] p-5 text-[15px] outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400/40"
/>

                </div>

                {/* BUTTON */}
               <button
  onClick={handleSubmit}
  disabled={loading || success}
  className={`
    mt-2
    h-14
    w-full
    rounded-xl
    text-[15px]
    font-semibold
    transition-all
    duration-500

    ${
      success
        ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]"
        : "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
    }

    disabled:cursor-not-allowed
  `}
>
  <span className="flex items-center justify-center gap-2">

    {loading && (
      <Loader2
  className="h-5 w-5"
  style={{
    animation: "spin 1s linear infinite",
  }}
/>
    )}

    {success && !loading && (
      <CheckCircle2 className="h-5 w-5 animate-bounce  text-green-500" />
    )}

    {loading
      ? "Sending..."
      : success
      ? "Message Sent Successfully"
      : "Submit Request"}

  </span>
</button>


                <p className="text-center text-sm text-gray-500">
                  No spam. No unnecessary meetings.
                  Just meaningful work.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}