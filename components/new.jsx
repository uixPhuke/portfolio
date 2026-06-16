"use client";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import ResumeModal from "./resume-Modal";
import Counter from "./counter";
export default function AboutCard() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-7xl">
            About Me.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px]"
        >
          {/* LEFT */}
          <div className="min-w-0">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Graphic Designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <h3 className="mt-8 text-5xl font-bold md:text-7xl">
              Crafting
              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Scalable Digital
              </span>

              <br />
              Experiences
            </h3>

            <p className="mt-8 text-lg text-gray-400">
              A passionate Full Stack Developer & UI/UX Designer crafting
              immersive digital experiences.
            </p>

            <p className="mt-5 text-lg text-gray-400">
              I specialize in futuristic web applications, premium animations,
              scalable backend systems, and engaging user experiences.
            </p>

            {/* Roles */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-md border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-cyan-300 backdrop-blur-xl">
                Full Stack Developer
              </div>

              <div className="rounded-md border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-violet-300 backdrop-blur-xl">
                Graphic Designer
              </div>

              <div className="rounded-md border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-pink-300 backdrop-blur-xl">
                UI/UX Designer
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
             {[
  { value: 4, label: "Years Experience" },
  { value: 50, label: "Completed Projects" },
  { value: 20, label: "Happy Clients" },
].map((item) => (
  <motion.div
    key={item.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
  >
    <h4 className="text-4xl font-bold">
      <Counter to={item.value} suffix="+" />
    </h4>

    <p className="mt-2 text-gray-400">
      {item.label}
    </p>
  </motion.div>
))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 transition hover:scale-105">
                  Let's Work Together
                </button>
              </Link>

              <ResumeModal
                title="Ruhon Borah Resume"
                description="Full Stack Developer & UI/UX Designer"
                pdfUrl="/resume.pdf"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
            {/* Decorative Grid */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
                bg-[size:40px_40px]
                sm:bg-[size:50px_50px]
                md:bg-[size:70px_70px]
                lg:bg-[size:80px_80px]
              "
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="https://res.cloudinary.com/dsn8gtduk/image/upload/v1781602682/WhatsApp_Image_2026-06-16_at_13.29.19_izcpjl.jpg"
                  alt="Profile"
                  className="h-[420px] w-full object-cover"
                />

                {/* Status */}
                <div className="absolute bottom-4 right-4 rounded-3xl border border-emerald-500/20 bg-black/50 px-5 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                  Available for freelance
                </div>
              </div>

              <h3 className=" flex items-center justify-center mt-8 text-4xl font-bold">
                Ruhon Borah
              </h3>

              {/* Socials */}
              <div className="mt-8 flex items-center justify-center gap-5 mb-6">
                <motion.a
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  href="https://github.com/uixPhuke"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl hover:border-violet-400/30 hover:bg-violet-500/10"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl hover:border-cyan-400/30 hover:bg-cyan-500/10"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl hover:border-pink-400/30 hover:bg-pink-500/10"
                >
                  <FaInstagram />
                </motion.a>

                <motion.a
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xl hover:border-white/30 hover:bg-white/10"
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}