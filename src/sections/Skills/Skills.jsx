const Skills = () => {
    // Skill data
    const programmingLanguages = [
        "Java", "Python", "JavaScript", "TypeScript", "C", "HTML/CSS", "SQL"
    ];
    
    const generalSkills = [
        "OOP", "REST API", "Design Patterns", "Testing", "Data Structures", 
        "Algorithms", "Problem Solving", "System Design"
    ];
    
    const softwareTools = [
        "VS Code", "Postman", "Docker", "Eclipse", "Git", "GitHub", 
        "IntelliJ", "PyCharm", "Maven", "npm"
    ];

    return (
        <section id="skills" className="text-white px-6 py-16">
            {/* Title - top left aligned */}
            <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0 text-center">Skills</h2>
            
            {/* Main container */}
            <div className="max-w-7xl mx-auto">
                
                {/* Root Node - Single horizontal bar */}
                <div className="flex flex-col lg:flex-row bg-black border-2 border-cyan-400 rounded-xl relative">
                    {/* Programming Languages partition */}
                    <div className="flex-1 text-center p-4 lg:p-6 relative">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-300 mb-2">
                            Programming Languages
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base">Core languages I work with</p>
                        
                        {/* Vertical divider line (right side) */}
                        <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-cyan-500"></div>
                    </div>
                    
                    {/* General Skills partition */}
                    <div className="flex-1 text-center p-4 lg:p-6 relative">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-300 mb-2">
                            General Skills
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base">Fundamental concepts & methodologies</p>
                        
                        {/* Vertical divider lines (both sides) */}
                        <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-cyan-500"></div>
                        <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-cyan-500"></div>
                    </div>
                    
                    {/* Software Tools partition */}
                    <div className="flex-1 text-center p-4 lg:p-6 relative">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-300 mb-2">
                            Software Tools
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base">Development tools & environments</p>
                        
                        {/* Vertical divider line (left side) */}
                        <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-cyan-500"></div>
                    </div>

                    {/* Main vertical connection line on mobile */}
                    <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-cyan-500"></div>
                </div>

                <div className>
                    
                </div>
                {/* Leaf Nodes Container */}
                <div className="relative">
                    {/* Leaf Nodes */}
                    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">
                        {/* Programming Languages */}
                        <div className="lg:w-1/3 flex flex-col items-center">
                            <div className="h-32 w-px bg-gray-500/40"></div> 
                            <div className="bg-black border-2 border-cyan-400 rounded-xl p-4 md:p-6">
                                {/*<h4 className="text-cyan-300 font-bold text-lg mb-4 text-center">Languages</h4>*/}
                                <div className="grid grid-cols-2 gap-3">
                                    {programmingLanguages.map((lang, index) => (
                                        <div 
                                            key={index}
                                            className="bg-slate-900 border border-cyan-800 rounded-lg p-3 text-center text-sm md:text-base font-medium hover:bg-slate-800 transition-colors duration-300"
                                        >
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* General Skills */}
                        <div className="lg:w-1/3 flex flex-col items-center">
                            <div className="h-32 w-px bg-gray-500/40"></div> 
                            <div className="bg-black border-2 border-cyan-400 rounded-xl p-4 md:p-6">
                                {/*<h4 className="text-cyan-300 font-bold text-lg mb-4 text-center">Skills & Concepts</h4>*/}
                                <div className="grid grid-cols-2 gap-3">
                                    {generalSkills.map((skill, index) => (
                                        <div 
                                            key={index}
                                            className="bg-slate-900 border border-cyan-800 rounded-lg p-3 text-center text-sm md:text-base font-medium hover:bg-slate-800 transition-colors duration-300"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Software Tools */}
                        <div className="lg:w-1/3 flex flex-col items-center">
                            <div className="h-32 w-px bg-gray-500/40"></div> 
                            <div className="bg-black border-2 border-cyan-400 rounded-xl p-4 md:p-6">
                                {/*<h4 className="text-cyan-300 font-bold text-lg mb-4 text-center">Tools</h4>*/}
                                <div className="grid grid-cols-2 gap-3">
                                    {softwareTools.map((tool, index) => (
                                        <div 
                                            key={index}
                                            className="bg-slate-900 border border-cyan-800 rounded-lg p-3 text-center text-sm md:text-base font-medium hover:bg-slate-800 transition-colors duration-300"
                                        >
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;