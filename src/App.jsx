import Hero from "./sections/Hero/Hero"
import AboutMe from "./sections/AboutMe/AboutMe"
import Projects from "./sections/Projects/Projects"
import Experience from "./sections/Experience/Experience"
import Education from "./sections/Education/Education"
import Navbar from "./components/navbar"
import Skills from "./sections/Skills/Skills"
import ContactMe from "./sections/ContactMe/ContactMe"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col gap-20">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App

