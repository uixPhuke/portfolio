import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Showcase from "@/components/showcase"
import Brands from "@/components/brands"
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="bg-[#0d1117] text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <Brands />
      <Services />
    </main>
  )
}