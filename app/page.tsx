import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Showcase from "@/components/showcase"
import Brands from "@/components/brands"
import Services from "@/components/services"
import AboutCard from "@/components/about-card"
import Landing from "@/components/landing"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import Explore from "@/components/explore"
import ScrollToTop from "@/components/scrollToTop"
import Experience from "@/components/experience"
import Education from "@/components/education"

export default function Home() {
  return (

    <main className="bg-[#0d1117] text-white">
     
      <Hero />
      <Showcase />
      
     <AboutCard />
      <Brands />
      <Services />
      <Skills />
      <Experience/>
      <Education/>
      <Explore />

      
    </main>
  )
}