import Hero from "./sections/Hero/Hero"
import AboutMe from "./sections/AboutMe/AboutMe"
import Projects from "./sections/Projects/Projects"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col gap-16">
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App

