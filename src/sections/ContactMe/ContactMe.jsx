import { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleMailTo = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        const mailtoLink = `mailto:jamie.nune@gmail.com?subject=${encodeURIComponent(subject || 'Message from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="text-white px-6 py-16">
            <div className="max-w-6xl w-full mx-auto">
                {/* Title - matches AboutMe section styling */}
                <h2 className="text-5xl md:text-6xl font-bold mb-16 ml-0 md:ml-0">Contact Me</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-8">
                            Let's Connect
                        </h3>
                        
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            I'm always open to discussing new opportunities, collaborations, 
                            or just having a chat about technology and software engineering.
                            Feel free to reach out!
                        </p>
                        
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-900 rounded-full flex items-center justify-center">
                                    <span className="text-cyan-400 text-xl">✉️</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <a 
                                        href="mailto:jamie.nune@gmail.com" 
                                        className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors"
                                    >
                                        jamie.nune@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-900 rounded-full flex items-center justify-center">
                                    <span className="text-cyan-400 text-xl">📍</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Location</p>
                                    <p className="text-white text-lg">Hamilton, Ontario</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-900 rounded-full flex items-center justify-center">
                                    <span className="text-cyan-400 text-xl">🎓</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">University</p>
                                    <p className="text-white text-lg">McMaster University</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="mt-12">
                            <h4 className="text-xl font-bold text-cyan-300 mb-4">Find me online</h4>
                            <div className="flex gap-4">
                                <a 
                                    href="https://github.com/JamieSteadman" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 border border-cyan-800 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors group overflow-hidden"
                                    title="GitHub"
                                >
                                    {/* GitHub Logo PNG */}
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <img 
                                            src="/images/github-logo.png" 
                                            alt="GitHub" 
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 invert"
                                        />
                                    </div>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/jamie-steadman-b55b19307/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 border border-cyan-800 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors group overflow-hidden"
                                    title="LinkedIn"
                                >
                                    {/* LinkedIn Logo PNG */}
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <img 
                                            src="/images/linkedin-logo.png" 
                                            alt="LinkedIn" 
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form - Simple mailto version */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Send me a message
                        </h3>
                        
                        <form 
                            onSubmit={handleMailTo}
                            className="space-y-6"
                        >
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-slate-300 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-900 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-slate-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-900 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                    placeholder="What is this regarding?"
                                />
                            </div>
                            
                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-slate-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full bg-slate-900 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg font-medium text-lg bg-cyan-600 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                            >
                                Send via Email
                            </button>
                            
                            {/* Form Note */}
                            <p className="text-slate-400 text-sm text-center">
                                * Required fields. Clicking "Send via Email" will open your email client.
                            </p>
                        </form>
                    </div>
                </div>
                
                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-cyan-800 text-center">
                    <p className="text-slate-400">
                        © {new Date().getFullYear()} Jamie Steadman. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Built with React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;