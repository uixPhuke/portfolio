import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Showcase from "@/components/showcase"
import Brands from "@/components/brands"
import Services from "@/components/services"
import AboutCard from "@/components/about-card"
import Landing from "@/components/landing"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#0d1117] text-white">
      <Navbar />
      <Landing/>
     <AboutCard />
      <Brands />
      <Services />
      <Skills />
      <Footer/>
    </main>
  )
}