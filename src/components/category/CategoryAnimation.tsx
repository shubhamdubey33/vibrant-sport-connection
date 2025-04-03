
import { motion } from "framer-motion";
import { Smile, Award, Users, Activity, Dumbbell } from "lucide-react";

interface CategoryAnimationProps {
  category: string;
}

const CategoryAnimation = ({ category }: CategoryAnimationProps) => {
  // Animation for different categories
  switch(category) {
    case 'Cricket':
      return (
        <motion.div 
          className="absolute right-10 md:right-20 top-20 z-0 opacity-80"
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
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center">
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
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-amber-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-amber-500/20 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="text-amber-500"
              >
                <Activity size={40} strokeWidth={1.5} />
              </motion.div>
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
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-500/20 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="text-blue-500"
              >
                <Users size={40} strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    case 'Sports':
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
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-pink-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-pink-500/20 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="text-pink-500"
              >
                <Dumbbell size={40} strokeWidth={1.5} />
              </motion.div>
            </div>
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
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-purple-500/20 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  rotate: {
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="text-purple-500"
              >
                <Award size={40} strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};

export default CategoryAnimation;
