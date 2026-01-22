const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
        <ul className="flex gap-10 text-slate-300 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-white border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 text-xl"
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-white border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 text-xl"
            >
              SKILLS
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-white border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 text-xl"
            >
              EXPERIENCE
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 text-xl"
            >
              PROJECTS
            </a>
          </li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 text-xl"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar