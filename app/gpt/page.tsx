// app/try-get/page.tsx
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function TryGetPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-10 py-12 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)]">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <Sparkles className="h-4 w-4" />
            Something exciting is on the way
          </div>

          {/* Heading */}
          <h1 className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text pb-2 text-5xl font-extrabold leading-[1.2] tracking-tight text-transparent sm:text-6xl">
            Coming Soon
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            We're crafting an amazing experience for this feature.
            Stay tuned — something beautiful, powerful, and worth the wait
            is coming your way.
          </p>

          {/* Decorative Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-3 w-3 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s]" />
            <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
            <span className="h-3 w-3 animate-bounce rounded-full bg-fuchsia-400" />
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-white/15 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}