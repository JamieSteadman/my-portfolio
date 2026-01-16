const Education = () => {
    return (
        <section className="min-w-[100vw] flex flex-col items-center bg-black bg-opacity-50 px-6 py-16 border-y border-slate-700">
            {/* Section Title - Now separate from the gray box */}
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Education
            </h2>
            
            {/* Content Box */}
            <div className="bg-gray-400 bg-opacity-30 p-4 rounded-lg border border-slate-700 max-w-4xl w-full">
                <div className="w-full text-center sm:text-left">

                    {/* School & Degree */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-white">
                            McMaster University
                        </h3>

                        <p className="text-cyan-400 font-semibold">
                            Bachelor of Software Engineering (Co-op)
                        </p>

                        <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 text-sm">
                            <span>Hamilton, ON</span>
                            <span>Sep. 2023 – 2027</span>
                        </div>
                    </div>

                    {/* Relevant Courses */}
                    <div className="mt-6">
                        <p className="text-white font-semibold mb-2">
                            Relevant Coursework
                        </p>

                        <p className="text-slate-300 leading-relaxed">
                            Databases, Java, C/C++, Object-Oriented Programming, Data Structures
                            and Algorithms, Digital Systems and Interfacing, Computer
                            Architecture, Intro to Software Design
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education