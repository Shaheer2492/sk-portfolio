import { motion } from 'framer-motion';
import { ArrowDownCircle, Code2, LinkedinIcon, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex flex-col items-center justify-center px-4"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-8 right-8 flex gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <Code2 className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="mailto:your@email.com" className="hover:text-purple-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          className="text-center z-10"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent"
          >
            Shaheer Khan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Full Stack Developer | Creative Problem Solver
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8"
        >
          <ArrowDownCircle className="w-8 h-8 text-purple-500" />
        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-black/50 backdrop-blur-lg"
      >
        <h2 className="text-2xl md:text-3xl text-center mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {['React', 'Node.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-purple-500/20 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Work Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4"
      >
        <h2 className="text-2xl md:text-3xl text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-black rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/800/600`} 
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium">Project {item}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}