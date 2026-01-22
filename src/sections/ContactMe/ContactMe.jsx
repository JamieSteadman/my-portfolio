import { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Netlify will automatically handle the form submission
        // because we're using data-netlify="true" and a form with name="contact"
        
        // Reset form after submission
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset status after 5 seconds
            setTimeout(() => setStatus(''), 5000);
        }, 1000);
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
                                        href="mailto:jamie.steadman@example.com" 
                                        className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors"
                                    >
                                        jamie.steadman@example.com
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
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 border border-cyan-800 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors group"
                                    title="GitHub"
                                >
                                    <span className="text-white text-xl group-hover:scale-110 transition-transform">🐙</span>
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 border border-cyan-800 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors group"
                                    title="LinkedIn"
                                >
                                    <span className="text-white text-xl group-hover:scale-110 transition-transform">💼</span>
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 border border-cyan-800 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors group"
                                    title="Twitter"
                                >
                                    <span className="text-white text-xl group-hover:scale-110 transition-transform">🐦</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form - NETLIFY FORM */}
                    <div className="bg-black border-2 border-cyan-400 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Send me a message
                        </h3>
                        
                        <form 
                            name="contact" 
                            method="POST" 
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Netlify hidden fields */}
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-slate-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-900 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
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
                                disabled={status === 'sending'}
                                className={`w-full py-3 rounded-lg font-medium text-lg transition-all ${
                                    status === 'sending' 
                                        ? 'bg-cyan-700 cursor-not-allowed' 
                                        : 'bg-cyan-600 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
                                }`}
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                                        Sending...
                                    </span>
                                ) : status === 'sent' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="text-xl">✓</span>
                                        Message Sent!
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                            
                            {/* Status Message */}
                            {status === 'sent' && (
                                <div className="p-4 bg-cyan-900/30 border border-cyan-700 rounded-lg text-cyan-300 text-center animate-pulse">
                                    <p className="font-medium">Thank you! Your message has been sent.</p>
                                    <p className="text-sm mt-1">I'll get back to you within 24-48 hours.</p>
                                </div>
                            )}
                            
                            {/* Form Note */}
                            <p className="text-slate-400 text-sm text-center">
                                * Required fields. Powered by Netlify Forms.
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
                        Built with React, TypeScript, and Tailwind CSS. Deployed on Netlify.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;