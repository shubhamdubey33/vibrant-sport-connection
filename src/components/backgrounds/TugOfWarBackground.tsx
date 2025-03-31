
import { motion } from "framer-motion";

// Tug of War Background
export const TugOfWarBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Rope texture */}
    <motion.div 
      className="absolute top-1/2 left-0 right-0 h-8 bg-amber-800 -translate-y-1/2"
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Rope marks */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 h-10 w-2 bg-amber-900 -translate-y-1/2"
        style={{ left: `${i * 5 + 2.5}%` }}
        animate={{ x: [-10, 10, -10] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    ))}
    
    {/* Center mark */}
    <motion.div 
      className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Left team pullers */}
    <div className="absolute top-1/3 left-[15%]">
      <motion.div 
        className="flex space-x-4"
        animate={{ x: [-15, 10, -15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={`left-puller-${i}`} className="relative">
            <div className="w-6 h-6 rounded-full bg-blue-500" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-10 bg-blue-700" />
            <div className="absolute top-16 left-0 w-6 h-3 bg-blue-500" />
            <div className="absolute top-16 right-0 w-6 h-3 bg-blue-500" />
          </div>
        ))}
      </motion.div>
    </div>
    
    {/* Right team pullers */}
    <div className="absolute top-1/3 right-[15%]">
      <motion.div 
        className="flex space-x-4"
        animate={{ x: [15, -10, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={`right-puller-${i}`} className="relative">
            <div className="w-6 h-6 rounded-full bg-red-500" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-10 bg-red-700" />
            <div className="absolute top-16 left-0 w-6 h-3 bg-red-500" />
            <div className="absolute top-16 right-0 w-6 h-3 bg-red-500" />
          </div>
        ))}
      </motion.div>
    </div>
    
    {/* Pulsing force indicators */}
    <motion.div 
      className="absolute top-1/2 left-[30%] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500"
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5],
        x: [-15, 10, -15]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
    
    <motion.div 
      className="absolute top-1/2 left-[70%] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" 
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5],
        x: [15, -10, 15]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </div>
);

export default TugOfWarBackground;
