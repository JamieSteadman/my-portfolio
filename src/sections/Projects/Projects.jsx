import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-16">
            {/*Title Banner */}
            <div className="min-w-[100vw] flex justify-center bg-black bg-opacity-50 p-8 rounded-lg border border-slate-700">
                <h2 className="text-center text-white text-3xl font-bold"> Some of my Projects </h2>
            </div>

            {/* Project List */}
            <section className="grid grid-cols-3 gap-8 justify-items-center">
                {/* Destiny 2 Project */}
                <div className="project-container">
                    <h3 className="text-white text-xl font-bold text-center m-6">Destiny 2 Player Lookup Dashboard</h3>
                    {/* Technologies Used */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="technology-badge text-black">
                            Spring Boot
                        </div>
                        <div className="technology-badge text-black">
                            RestAPI
                        </div>
                        <div className="technology-badge text-black">
                            React
                        </div>
                        <div className="technology-badge text-black">
                            API Integration
                        </div>
                    </div>
                    <p className="text-white text-center px-4 m-4">A full-stack web application that allows users to search for 
                        Destiny 2 player profiles and view character loadouts, 
                        equipment, and item details. The backend is built with Java Spring Boot and 
                        integrates with the external Bungie API to obtain information from the Destiny 2 game database.
                        The frontend uses React to provide a responsive UI.</p>
                    <a href="google.com">
                        <img src="src/sections/AboutMe/Polar_Bear_-_Alaska_(cropped).jpg" />
                    </a>
                </div>
                {/* Ultimate Tic Tac Toe */}
                <div className="project-container">
                    <h3 className="text-white text-xl font-bold text-center m-6">Ultimate Tic Tac Toe</h3>
                    {/* Technologies Used */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="technology-badge text-black">
                            C
                        </div>
                        <div className="technology-badge text-black">
                            GUI
                        </div>
                        <div className="technology-badge text-black">
                            GTK
                        </div>
                    </div>
                    <p className="text-white text-center px-4 m-4">I programmed "Ultimate Tic Tac Toe," a strategic twist on the classic 
                        game, by building the core logic in C and developing its graphical interface with 
                        the GTK library. This project combined complex game 
                        state management with interactive button controls to create a seamless desktop 
                        gaming experience.</p>
                    <a href="google.com">
                        <img src="src/sections/AboutMe/Polar_Bear_-_Alaska_(cropped).jpg" />
                    </a>
                </div>
                <div className="project-container">
                    <h3 className="text-white text-xl font-bold text-center">Project 3</h3>
                    <p className="text-white">Description of project 3</p>
                </div>
            </section>
        </section>
    )
}

export default Projects