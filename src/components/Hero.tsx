
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      {/* Dynamic gradient orb that follows cursor */}
      <div 
        className="absolute pointer-events-none w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 z-0"
        style={{
          background: 'linear-gradient(to right, #0066cc, #2a9df4)',
          transform: 'translate(-50%, -50%)',
          top: 'calc(var(--mouse-y) * 100%)',
          left: 'calc(var(--mouse-x) * 100%)',
          transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
      ></div>
      
      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply opacity-10 animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `hsl(${Math.random() * 30 + 200}, 100%, 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container max-w-7xl relative z-10 px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary backdrop-blur-sm">
            Coming Soon • July 15-16, 2023
          </div>
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Techinterio <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Sports Day 2023
          </span>
        </motion.h1>
        
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Join our annual celebration of teamwork, competition, and company culture as four teams battle it out across different sporting events.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a 
            href="#teams" 
            className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
          >
            Explore Teams
          </a>
          <a 
            href="#schedule" 
            className="px-8 py-3 rounded-full bg-white text-primary font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            View Schedule
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
