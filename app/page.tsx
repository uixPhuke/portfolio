import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Showcase from "@/components/showcase"

export default function Home() {
  return (
    <main className="bg-[#0d1117] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Showcase />
    </main>
  )
}