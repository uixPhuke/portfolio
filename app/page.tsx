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
import About from "@/components/new"
import Projects from "@/components/projectsec"
import Freelance from "@/components/freelancesec"

export default function Home() {
  return (

    <main className="bg-[#0d1117] text-white">
     
      <Hero />
      <Showcase />
      
   
     <About/>
      <Brands />
      <Services />
      <Explore />
      <Freelance/>
       <Projects/>
      <Skills />
      <Experience/>
      <Education/>
     
      
      

      
    </main>
  )
}