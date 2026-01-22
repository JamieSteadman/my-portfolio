const Education = () => {
    return (
        <section id="education" className="text-white px-6 py-16">
            <div className="max-w-6xl w-full mx-auto">
                {/* Title  */}
                <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0">Education</h2>
                
                {/* Main content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* University Info  */}
                    <div className="flex-1">
                        <div className="space-y-4">
                            {/* University Name */}
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                McMaster University
                            </h3>

                            {/* Degree */}
                            <p className="text-2xl md:text-3xl font-semibold text-cyan-400">
                                Bachelor of Software Engineering (Co-op)
                            </p>

                            {/* Location & Duration */}
                            <div className="flex flex-col sm:flex-row sm:justify-between text-slate-300 text-lg">
                                <span> Hamilton, ON</span>
                                <span> Sep. 2023 – 2027</span>
                            </div>

                            {/* GPA/Achievements (placeholder for now) */}
                            {/*<div className="mt-4">
                                <p className="text-xl font-semibold text-white mb-2">
                                    Academic Standing
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-cyan-400 font-bold">Dean's Honour List</span> - 
                                    Consistently maintaining exceptional academic performance
                                </p>
                            </div>*/}
                            {/* Short Description */}
                            <div className="mt-6">
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Pursuing a comprehensive software engineering education that balances 
                                    <span className="text-cyan-400 font-medium"> practical application</span> with
                                    <span className="text-cyan-400 font-medium"> advanced theorietical knowledge</span>, while gaining
                                    <span className="text-cyan-400 font-medium"> industry experience</span> through the co-op program.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Courses  */}
                    <div className="flex-1 w-full">
                        <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 md:p-8">
                            {/* Courses Title */}
                            <h4 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                                Relevant Coursework
                            </h4>
                            
                            {/* Courses Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Databases & SQL",
                                    "Software Design",
                                    "Java Programming", 
                                    "C/C++ Systems",
                                    "Object-Oriented Design",
                                    "Data Structures & Algoritms",
                                    "Large System Design",
                                    "Digital Systems",
                                    "Computer Architecture",
                                    "Software Testing"
                                ].map((course, index) => (
                                    <div 
                                        key={index}
                                        className="bg-slate-900 border border-cyan-800 rounded-lg p-3 text-center text-sm md:text-base font-medium hover:bg-slate-800 transition-colors duration-300"
                                    >
                                        {course}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Additional Note */}
                            <p className="text-slate-300 text-sm mt-6 text-center">
                                Additional courses in Mathematics, Physics, and Engineering Principles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education