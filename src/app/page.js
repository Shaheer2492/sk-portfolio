"use client";
import { ArrowDownCircle, Code2, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(true); // Show elements once scrolling starts
    };
    
    // Show initial elements
    setIsVisible(true);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className={`
          relative h-screen flex flex-col items-center justify-center px-4
          transition-opacity duration-1000 ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        
        {/* Social Links */}
        <div 
          className={`
            absolute top-8 right-8 flex gap-6
            transition-all duration-1000 delay-1000 ease-in-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <Code2 className="w-6 h-6" />
          </a>
          <a href="linkedin.com/in/shaheer-khan-622418193/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your@email.com" className="hover:text-purple-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Main Title */}
        <div
          className={`
            text-center z-10 transition-all duration-800
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            Shaheer Khan
          </h1>
          <p 
            className={`
              text-xl md:text-2xl text-gray-400 mb-8
              transition-all duration-800 delay-500
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            Full Stack Developer | Creative Problem Solver
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`
            absolute bottom-8
            transition-all duration-1000 delay-1500
            animate-bounce
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <ArrowDownCircle className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24 px-4 bg-black/50 backdrop-blur-lg">
        <h2 className="text-2xl md:text-3xl text-center mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {['React', 'Node.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
            <div
              key={tech}
              className={`
                px-6 py-3 rounded-full bg-white/10 hover:bg-purple-500/20
                transition-all duration-500 hover:-translate-y-1
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Work Preview */}
      <div className="py-24 px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-black rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/800/600"
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium">Project {item}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 flex gap-6 flex-wrap items-center justify-center border-t border-white/10">
        <a
          className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Next.js
        </a>
      </footer>
    </div>
  );
}