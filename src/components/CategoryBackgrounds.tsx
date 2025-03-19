
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
