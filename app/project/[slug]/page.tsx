{/* SHOWCASE IMAGES */}
<section className="mt-24">

  <div className="mb-10 flex items-end justify-between gap-6">

    <div>

      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
        Visual Showcase
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Project Preview
      </h2>

    </div>

    <div className="hidden h-px flex-1 bg-white/10 lg:block" />

  </div>

  {/* GRID */}
  <div className="grid gap-6 md:grid-cols-2">

    {/* LARGE IMAGE */}
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
      }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
    >

      <div className="overflow-hidden">

        <img
          src={design.image}
          alt={design.title}
          className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

    </motion.div>

    {/* SMALL GRID */}
    <div className="grid gap-6">

      {[1, 2].map((item, index) => (

        <motion.div
          key={item}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -6,
          }}
          className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
        >

          <div className="overflow-hidden">

            <img
              src={design.image}
              alt={design.title}
              className="h-[198px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>