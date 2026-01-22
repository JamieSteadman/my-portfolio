const Projects = () => {
    return (
        <section id="projects" className="text-white px-6 py-16">
            <div className="max-w-6xl w-full mx-auto">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0">Projects</h2>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Destiny 2 Project */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 flex flex-col h-full hover:border-cyan-300 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        {/* Project Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Destiny 2 Player Lookup Dashboard
                        </h3>
                        
                        {/* Project Image */}
                        <a 
                            href="https://github.com/JamieSteadman/Destiny-2-player-lookup-dashboard/blob/master/README.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
                        >
                            {/* Image source */}
                            <img 
                                src="src\assets\images\destiny-project.PNG" 
                                alt="Destiny 2 Player Lookup Dashboard"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-lg">
                                Click to view project details
                            </p>
                            {/* External link icon overlay */}
                            <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                        
                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {["Spring Boot", "REST API", "React", "Java", "Tailwind", "External API"].map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-slate-900 border border-cyan-800 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-300 leading-relaxed flex-grow mb-6">
                            A <span className="font-semibold text-cyan-300">full-stack</span> web application that allows users to search for 
                            Destiny 2 player profiles and view character loadouts, 
                            equipment, and item details. The backend is built with <span className="font-semibold text-cyan-300">Java Spring Boot</span> and 
                            integrates with the external <span className="font-semibold text-cyan-300">Bungie API</span> to obtain information from the Destiny 2 game database.
                            The frontend uses <span className="font-semibold text-cyan-300">React</span> to provide a responsive UI.
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-between mt-auto">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                            >
                                <span>GitHub</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Ultimate Duelists */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 flex flex-col h-full hover:border-cyan-300 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        {/* Project Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Arena Fighter
                        </h3>
                        
                        {/* Project Image */}
                        <a 
                            href="https://github.com/JamieSteadman/UltimateDuelists-Arena-Fighter-" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
                        >
                            {/* Image source */}
                            <img 
                                src="src\assets\images\ultimate-duelists.PNG" 
                                alt="Ultimate Duelists Game"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-lg">
                                Click to view project details
                            </p>
                            {/* External link icon overlay */}
                            <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                        
                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {["Java", "Swing", "GUI", "2D Graphics", "Eclipse"].map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-slate-900 border border-cyan-800 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-300 leading-relaxed flex-grow mb-6">
                            Ultimate Duelists is a turn-based combat game built with <span className="font-semibold text-cyan-300">Java Swing</span>, 
                            featuring tactical duels against <span className="font-semibold text-cyan-300">AI opponents</span> with customizable loadouts. 
                            The project integrates interactive minigames with combat mechanics, implementing health tracking, 
                            turn-based logic, and <span className="font-semibold text-cyan-300">responsive GUI elements</span> for a smooth player experience.
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-between mt-auto">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                            >
                                <span>GitHub</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Minesweeper */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 flex flex-col h-full hover:border-cyan-300 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        {/* Project Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Minesweeper
                        </h3>
                        
                        {/* Project Image */}
                        <a 
                            href="https://github.com/JamieSteadman/MinesweeperClone/blob/master/README.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
                        >
                            {/* Image source */}
                            <img 
                                src="src\assets\images\minesweeper.PNG" 
                                alt="Ultimate Tic Tac Toe Game"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-lg">
                                Click to view project details
                            </p>
                            {/* External link icon overlay */}
                            <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                        
                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {["Java", "Swing", "GUI", "Game Logic", "Eclipse"].map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-slate-900 border border-cyan-800 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-300 leading-relaxed flex-grow mb-6">
                            I programmed a clone of the original <span className="font-semibold text-cyan-300">"Minesweeper"</span>. a strategic twist on the classic 
                            game, by building the core logic in <span className="font-semibold text-cyan-300">C</span> and developing its graphical interface with 
                            the <span className="font-semibold text-cyan-300">GTK library</span>. This project combined complex game 
                            state management with interactive button controls to create a seamless desktop 
                            gaming experience.
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-between mt-auto">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                            >
                                <span>GitHub</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Ultimate Tic Tac Toe */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 flex flex-col h-full hover:border-cyan-300 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        {/* Project Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Ultimate Tic Tac Toe
                        </h3>
                        
                        {/* Project Image */}
                        <a 
                            href="https://github.com/JamieSteadman/UltimateTicTacToe/blob/master/README.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
                        >
                            {/* Image source */}
                            <img 
                                src="src\assets\images\ultimate-ttt.PNG" 
                                alt="Ultimate Tic Tac Toe Game"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-lg">
                                Click to view project details
                            </p>
                            {/* External link icon overlay */}
                            <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                        
                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {["C Programming", "GTK", "GUI", "Game Logic"].map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-slate-900 border border-cyan-800 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-300 leading-relaxed flex-grow mb-6">
                            I programmed <span className="font-semibold text-cyan-300">"Ultimate Tic Tac Toe"</span>, a strategic twist on the classic 
                            game, by building the core logic in <span className="font-semibold text-cyan-300">C</span> and developing its graphical interface with 
                            the <span className="font-semibold text-cyan-300">GTK library</span>. This project combined complex game 
                            state management with interactive button controls for a functional interface.
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-between mt-auto">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                            >
                                <span>GitHub</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Portfolio Website */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-6 flex flex-col h-full hover:border-cyan-300 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        {/* Project Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Portfolio Website
                        </h3>
                        
                        {/* Project Image */}
                        <a 
                            href="https://github.com/yourusername/portfolio-website/README.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
                        >
                            {/* Image source */}
                            <img 
                                src="src\assets\images\portfolio-image.PNG" 
                                alt="Portfolio Website"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-lg">
                                Click to view project details
                            </p>
                            {/* External link icon overlay */}
                            <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                        
                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Vite"].map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-slate-900 border border-cyan-800 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-300 leading-relaxed flex-grow mb-6">
                            A modern, responsive portfolio website built with <span className="font-semibold text-cyan-300">React</span> and <span className="font-semibold text-cyan-300">TypeScript</span>, 
                            featuring a dark theme with cyan accents. The site showcases my projects, skills, 
                            and experience with smooth animations and interactive components. Built with 
                            <span className="font-semibold text-cyan-300"> Tailwind CSS</span> for rapid development and optimal performance.
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-between mt-auto">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                            >
                                <span>GitHub</span>
                                <span>↗</span>
                            </a>
                            <div className="text-cyan-300 font-medium flex items-center gap-2">
                                <span>You're here!</span>
                                <span>📍</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* View More Projects */}
                <div className="text-center mt-16">
                    <p className="text-slate-400 text-lg mb-4">
                        More projects in development...
                    </p>
                    <a 
                        href="https://github.com/JamieSteadman" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors border-2 border-cyan-400 hover:border-cyan-300 px-6 py-3 rounded-lg"
                    >
                        <span>View All Projects on GitHub</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects