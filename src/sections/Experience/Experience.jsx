const Experience = () => {
  return (
    <section id="experience"className="flex flex-col gap-16">
      {/* Section Title */}
      <div className="min-w-[100vw] flex justify-center bg-black bg-opacity-50 p-8 rounded-lg border border-slate-700">
        <h2 className="text-center text-white text-3xl font-bold">
          Experience
        </h2>
      </div>

      {/* Experience Card */}
      <div className="flex justify-center px-6">
        <div className="max-w-4xl w-full bg-black bg-opacity-50 p-8 rounded-lg border border-slate-700">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Software Engineer Intern
              </h3>
              <p className="text-cyan-400 font-semibold">
                Kraken Sense
              </p>
            </div>

            <div className="text-slate-400 text-sm sm:text-right">
              <p>July 2025 – August 2025</p>
              <p>Oakville, ON</p>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-4 text-slate-300">
            <li>
              Developed and enhanced a <span className="font-semibold text-white">React / MUI</span>-based
              business management platform, improving usability, performance, and system scalability.
            </li>

            <li>
              Refactored request handling for a hardware controller program by unifying
              portal and command-line message processing into a
              <span className="font-semibold text-white"> modular, reusable class</span>.
            </li>

            <li>
              Fine-tuned a <span className="font-semibold text-white">Gemini AI prompt</span> for an
              AI-driven meeting summarizer and designed structured
              <span className="font-semibold text-white"> JSON schemas</span> for context and resource inputs,
              improving output accuracy and consistency.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
