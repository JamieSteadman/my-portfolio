const Experience = () => {
  return (
    <section id="experience" className="text-white px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title - matches AboutMe section styling */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0">Experience</h2>
        
        {/* Experience Card */}
        <div className="bg-black border-2 border-cyan-400 rounded-xl p-8">
          {/* Header with company info */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                {/* Optional company logo placeholder */}
                <div className="w-12 h-12 bg-cyan-900 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-300 font-bold">KS</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Software Engineer Intern
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-cyan-400">
                    Kraken Sense
                  </p>
                </div>
              </div>
              
              {/* Tags for technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Material UI", "Python", "FastAPI", "Gemini AI", "JSON", "REST API"].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-cyan-900 border border-cyan-700 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-slate-300 text-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-cyan-400">📅</span>
                <span>July 2025 – August 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📍</span>
                <span>Oakville, ON</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-cyan-800 mb-8"></div>

          {/* Experience Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Key Contributions</h4>
            
            {/* Bullet Points */}
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4"></div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Developed and enhanced a <span className="font-semibold text-cyan-300">React/MUI-based </span>
                  business management and CRM platform improving <span className="font-semibold text-cyan-300">usability and scalability</span> across core workflows.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4"></div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Built and maintained a <span className="font-semibold text-cyan-300">FastAPI-based </span>backend with
                  <span className="font-semibold text-cyan-300"> RESTful endpoints</span> supporting core data operations, validation, and system workflows.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4"></div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="font-semibold text-cyan-300">Refactored </span>the request handling for a controller program, 
                  <span className="font-semibold text-cyan-300"> unifying </span>interface and command-line message
                  processing into a <span className="font-semibold text-cyan-300">modular class</span>.
                </p>
              </li>
            </ul>
          </div>

          {/* Skills Applied */}
          <div className="mt-10 pt-8 border-t border-cyan-800">
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Skills Applied</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Frontend Development", 
                "API Design", 
                "System Architecture", 
                "Code Refactoring",
                "FastAPI", 
                "Modular Design"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-slate-900 border border-cyan-800 text-slate-300 text-sm px-4 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Placeholder */}
        {/*<div className="text-center mt-12">
          <p className="text-slate-400 italic">
            More experience to be added as I progress in my career journey
          </p>
        </div>*/}
      </div>
    </section>
  )
}

export default Experience