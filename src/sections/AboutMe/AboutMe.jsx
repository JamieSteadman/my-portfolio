const AboutMe = () => {
    return (
        <section className="text-white flex items-center justify-center px-6 max-w-screen bg-black bg-opacity-50 p-8 rounded-lg border border-slate-700 ">
            <div className="max-w-6xl  justify-center items-center">
                <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                {/* Body */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left bg-gray-400 bg-opacity-30 p-4 rounded-lg border border-slate-700">
                        <p>
                            I am Jamie Steadman, a <span className="font-bold text-cyan-400">Software Engineering</span> student at <span className="font-bold text-cyan-400">McMaster University</span>.
                            I have a strong interest in coding and problem solving,
                            and I enjoy building projects that push me to learn new technologies.
                            I have experience developing <span className="font-bold text-cyan-400">full-stack applications</span>, including designing
                            backend services using frameworks such as <span className="font-bold text-cyan-400">Java Spring Boot</span> and 
                            <span className="font-bold text-cyan-400"> FastAPI</span>, as well as integrating external APIs and services. On the
                            frontend, I have worked with <span className="font-bold text-cyan-400">React</span> to create dynamic and responsive
                            UIs, and enjoy using <span className="font-bold text-cyan-400">Tailwind CSS</span> for styling.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <img src="src/sections/AboutMe/Polar_Bear_-_Alaska_(cropped).jpg" alt="Profile" className="rounded-lg border border-slate-700 w-[50%] h-auto object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe