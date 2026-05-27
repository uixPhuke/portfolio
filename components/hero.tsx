export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4f46e5_0%,#0d1117_55%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl pt-20">
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Exploring the Future
        </h1>

        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          A full Stack Developer with a passion for building innovative solutions and exploring the latest technologies. With a strong foundation in both frontend and backend development, I thrive on creating seamless user experiences and scalable applications. Let's connect and build something amazing together!
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 w-full rounded-md border border-white/10 bg-white px-4 text-black sm:w-[320px]"
          />

          <button className="h-14 rounded-md bg-green-600 px-8 font-semibold text-white hover:bg-green-700">
            GitHub
          </button>

          <button className="h-14 rounded-md border border-white/20 px-8 font-semibold text-white hover:bg-white hover:text-black">
            Try GPT
          </button>
        </div>
      </div>
    </section>
  )
}