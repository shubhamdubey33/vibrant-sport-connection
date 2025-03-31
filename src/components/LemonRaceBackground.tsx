
import { motion } from "framer-motion";

export const LemonRaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-yellow-50 opacity-50"></div>
      
      {/* Animated lemon elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300/30"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -15, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Race track */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-yellow-100 to-yellow-200/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-dashed bg-yellow-300/50"></div>
        <motion.div 
          className="absolute -top-5 left-10 w-10 h-10"
          animate={{ 
            x: [0, 200, 400, 600, 800],
            rotate: [0, 20, 0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <span className="text-3xl">🍋</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
