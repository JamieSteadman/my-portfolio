import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const roles = ['Problem Solver', 'Full-Stack Developer', 'Software Engineer', 'Creative Thinker'];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === currentRole) {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(100);
        
        if (displayText === '') {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };
    
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center justify-center space-y-8">
        {/* Name  */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
            Jamie
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
            Steadman
          </h1>
        </div>
        
        {/* Animated text effect */}
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-400 min-h-[3rem]">
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
        </div>
        
        {/* Social links */}
        <div className="mt-8 text-slate-500 text-sm bg-white bg-opacity-10 p-4 rounded-lg">
          <a 
            href="https://github.com/JamieSteadman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-8 hover:text-slate-300 transition-colors duration-300 text-lg"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/jamie-steadman-b55b19307/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors duration-300 text-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;