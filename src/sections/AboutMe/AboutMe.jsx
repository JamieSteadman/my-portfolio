import headshot from "../../assets/images/profile-image.jpg"

const AboutMe = () => {
    return (
        <section id="about" className="text-white flex items-center justify-center px-6 py-16">
            <div className="max-w-6xl w-full">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0">About Me</h2>
                
                {/* Headshot image  */}
                <div className="flex justify-center mb-12">
                    <div className="relative">
                        {/* Circular container with white border */}
                        <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-white overflow-hidden">
                            {/* Placeholder headshot  */}
                            <img 
                                src={headshot} 
                                alt="Jamie Steadman headshot" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* About paragraph */}
                <div className="text-left px-0">
                    <p className="text-lg md:text-xl leading-relaxed">
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
            </div>
        </section>
    )
}

export default AboutMe