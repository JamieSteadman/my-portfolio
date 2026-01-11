const Hero = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="min-h-[80vh] min-w-[70vw] text-center bg-black bg-opacity-50 p-8 rounded-lg border 
            border-slate-700 flex flex-col justify-evenly">
                {/* Text components */}
                <div className=" flex flex-col justify-center items-center mb-4">
                    <h1 className = "text-4xl sm:text-5xl md:text-6xl font-bold text-white m-8">
                        Hi, I'm <span className="text-cyan-400">Jamie</span>
                    </h1>
                    <h2 className = "text-2xl sm:text-3xl font-semibold text-slate-400">
                        Software Engineering Student at McMaster University
                    </h2>

                    <p className="mt-6 text-lg sm:text-xl text-slate-300">
                        View the rest of my portfolio for more information about me and my work!
                    </p>
                </div>
                {/* Quick navigation */}
                <div className="mt-16 flex flex-row justify-evenly">
                    <a href="#about" className="text-cyan-400 hover:text-cyan-300 mr-4">About Me</a>
                    <a href="#projects" className="text-cyan-400 hover:text-cyan-300">Projects</a>
                </div>
                {/* Links to social media */}
                <div className="mt-4 text-slate-500 text-sm bg-white bg-opacity-10 p-2 rounded-lg">
                    <a href="https://github.com" className="mr-4 hover:text-slate-300">GitHub</a>
                    <a href="https://linkedin.com" className="hover:text-slate-300">LinkedIn</a>
                </div>
            </div>

        </section>
    )
}

export default Hero