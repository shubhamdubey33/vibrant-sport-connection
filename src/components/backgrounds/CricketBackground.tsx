
import { motion } from "framer-motion";

// Cricket Background
export const CricketBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Cricket field */}
    <div className="absolute inset-0 bg-green-100"></div>
    
    {/* Cricket pitch */}
    <div className="absolute top-1/2 left-1/2 w-20 h-[80%] -translate-x-1/2 -translate-y-1/2 bg-green-200"></div>
    
    {/* Cricket balls animation */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 rounded-full bg-red-500"
        initial={{ 
          x: `${Math.random() * 100}%`, 
          y: `${Math.random() * 100}%`,
          rotate: 0
        }}
        animate={{ 
          x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)]
        }}
        transition={{ 
          duration: Math.random() * 5 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Cricket bats */}
    {[...Array(3)].map((_, i) => (
      <motion.div 
        key={`bat-${i}`}
        className="absolute w-3 h-16 bg-amber-700 rounded-b-lg"
        style={{
          left: `${20 + i * 30}%`,
          bottom: '5%',
          transformOrigin: 'bottom center'
        }}
        initial={{ rotate: -30 }}
        animate={{ rotate: [-30, 30, -30] }}
        transition={{ 
          duration: 4, 
          delay: i * 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-amber-800 rounded-t-md" />
      </motion.div>
    ))}
    
    {/* Wickets */}
    <div className="absolute bottom-5 left-1/4 flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div key={`wicket-1-${i}`} className="w-1 h-12 bg-white"></div>
      ))}
    </div>
    <div className="absolute bottom-5 right-1/4 flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div key={`wicket-2-${i}`} className="w-1 h-12 bg-white"></div>
      ))}
    </div>
  </div>
);

export default CricketBackground;
