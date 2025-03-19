
import { motion } from "framer-motion";
import { Participant } from "@/types";
import ParticipantCard from "./ParticipantCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Team } from "@/types";

interface CategorySectionProps {
  title: string;
  description: string;
  category: string;
  participants: Participant[];
  id: string;
  className?: string;
  backgroundElement?: React.ReactNode;
}

const CategorySection = ({
  title,
  description,
  category,
  participants,
  id,
  className,
  backgroundElement
}: CategorySectionProps) => {
  // Get unique teams
  const teams = [...new Set(participants.map(p => p.team))];

  // Animation for different categories
  const getCategoryAnimation = () => {
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

  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      {backgroundElement}
      {getCategoryAnimation()}
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">{description}</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="all">All Teams</TabsTrigger>
            {teams.map((team) => (
              <TabsTrigger key={team} value={team}>{team}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {participants.map((participant, index) => (
                <ParticipantCard 
                  key={participant.id} 
                  participant={participant} 
                  index={index} 
                />
              ))}
            </div>
          </TabsContent>

          {teams.map((team) => (
            <TabsContent key={team} value={team} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {participants
                  .filter(p => p.team === team)
                  .map((participant, index) => (
                    <ParticipantCard 
                      key={participant.id} 
                      participant={participant} 
                      index={index} 
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CategorySection;
