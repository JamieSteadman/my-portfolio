import Hero from "./sections/Hero/Hero"
import AboutMe from "./sections/AboutMe/AboutMe"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col gap-16">
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App

