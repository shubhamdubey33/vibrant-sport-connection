
import { motion } from "framer-motion";

// Volunteer Background
export const VolunteerBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Registration table */}
    <div className="absolute bottom-0 left-[10%] right-[10%] h-[20%] bg-blue-100 rounded-t-lg"></div>
    
    {/* Volunteers with clipboards */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`volunteer-${i}`}
        className="absolute"
        style={{
          bottom: '20%',
          left: `${10 + i * 20}%`,
        }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "mirror",
          delay: i * 0.3
        }}
      >
        <div className="relative">
          {/* Head */}
          <div className="w-5 h-5 rounded-full bg-blue-500"></div>
          {/* Body */}
          <div className="w-3 h-8 mx-auto bg-blue-600"></div>
          {/* Clipboard */}
          <motion.div 
            className="absolute top-6 -right-3 w-4 h-5 bg-amber-100 border border-amber-300"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          >
            <div className="h-1 w-3 mx-auto mt-1 bg-gray-400"></div>
            <div className="h-1 w-3 mx-auto mt-0.5 bg-gray-400"></div>
          </motion.div>
        </div>
      </motion.div>
    ))}
    
    {/* Confetti animation */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`confetti-${i}`}
        className="absolute"
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          background: `hsl(${Math.random() * 360}, 100%, 70%)`,
          borderRadius: Math.random() > 0.5 ? '50%' : '0%',
        }}
        initial={{ 
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          rotate: 0,
          scale: 0
        }}
        animate={{ 
          y: [`${Math.random() * 100}%`, `${Math.random() * 100 + 20}%`],
          x: [`${Math.random() * 100}%`, `${Math.random() * 100 + 10}%`],
          rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
          scale: [0, 1, 0]
        }}
        transition={{ 
          duration: Math.random() * 5 + 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

export default VolunteerBackground;
