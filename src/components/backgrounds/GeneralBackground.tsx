
import { motion } from "framer-motion";

// General Background
export const GeneralBackground = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden">
    {/* Team members in a circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative w-[40vw] h-[40vw]"
      >
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = Math.cos(angle) * 150;
          const y = Math.sin(angle) * 150;
          
          return (
            <motion.div
              key={`team-member-${i}`}
              className="absolute w-4 h-4 rounded-full"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                backgroundColor: `hsl(${i * 30}, 70%, 60%)`,
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: i * 0.25
              }}
            />
          );
        })}
      </motion.div>
    </div>
    
    {/* Wave animation */}
    <div className="absolute inset-0 flex flex-col">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="h-[20%] bg-current"
          style={{ opacity: 0.1 + i * 0.1 }}
          animate={{ 
            x: ['-5%', '5%', '-5%'],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
    
    {/* Team spirit symbols */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`symbol-${i}`}
        className="absolute rounded-full flex items-center justify-center"
        style={{
          width: 20,
          height: 20,
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          opacity: 0.3,
        }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: Math.random() * 5 + 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm">
          {['👏', '🙌', '✨', '🏆', '💪', '🎯', '🤝', '🎉'][i]}
        </span>
      </motion.div>
    ))}
  </div>
);

export default GeneralBackground;
