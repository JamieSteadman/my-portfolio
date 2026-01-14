import Hero from "./sections/Hero/Hero"
import AboutMe from "./sections/AboutMe/AboutMe"
import Projects from "./sections/Projects/Projects"
import Experience from "./sections/Experience/Experience"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col gap-16">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  )
}

export default App

