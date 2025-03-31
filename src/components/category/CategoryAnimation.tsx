
import { motion } from "framer-motion";

interface CategoryAnimationProps {
  category: string;
}

const CategoryAnimation = ({ category }: CategoryAnimationProps) => {
  // Animation for different categories
  switch(category) {
    case 'Cricket':
      return (
        <motion.div 
          className="absolute right-10 md:right-20 top-20 z-0 opacity-70"
          initial={{ rotate: 0 }}
          animate={{ 
            rotate: 360,
            y: [0, -10, 0, 10, 0]
          }}
          transition={{ 
            rotate: { duration: 7, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-red-500/20 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <span className="text-4xl md:text-5xl">🏏</span>
              </div>
            </div>
          </div>
        </motion.div>
      );
    case 'Tug of War':
      return (
        <motion.div 
          className="absolute right-10 md:right-20 top-20 z-0 opacity-80"
          animate={{ 
            x: [0, 10, 0, -10, 0],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl md:text-3xl">👤</span>
            </div>
            <div className="w-32 md:w-40 h-4 bg-gradient-to-r from-yellow-700 to-yellow-500 rounded-full"></div>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl md:text-3xl">👤</span>
            </div>
          </div>
        </motion.div>
      );
    case 'Volunteer':
      return (
        <motion.div 
          className="absolute right-10 md:right-20 top-20 z-0 opacity-80"
          animate={{ 
            y: [0, -5, 0, -5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl">🤝</span>
            <motion.div
              className="mt-2"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-blue-600 font-bold">VOLUNTEER</span>
            </motion.div>
          </div>
        </motion.div>
      );
    case 'General':
      return (
        <motion.div 
          className="absolute right-10 md:right-20 top-20 z-0 opacity-80"
          animate={{ 
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {['🧱', '🏢', '⚙️', '🎨'].map((emoji, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <span className="text-xl md:text-2xl">{emoji}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};

export default CategoryAnimation;
