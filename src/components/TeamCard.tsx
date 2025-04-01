
import { motion } from "framer-motion";
import { TeamData, Team } from "@/types";
import { Users, Anchor, HeartHandshake, Trophy } from "lucide-react";

interface TeamCardProps {
  team: TeamData;
  index: number;
}

const TeamCard = ({ team, index }: TeamCardProps) => {
  return (
    <motion.div 
      className="group relative pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Enhanced Team Flag - Positioned at the CENTER and OUTSIDE of the card */}
      <motion.div 
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ rotateZ: 0 }}
      >
        <div className="relative">
          {/* Flag pole - this should remain static */}
          <div className="absolute top-0 left-0 w-1.5 h-36 bg-gray-400 shadow-md rounded-sm"></div>
          
          {/* Flag fabric part - only this should animate (positioned directly next to pole) */}
          <motion.div 
            className={`absolute top-0 left-1.5 w-16 h-24 origin-left ${team.flagBackground} rounded-sm shadow-lg`}
            initial={{ scaleY: 0.9, rotate: 0 }}
            animate={{ scaleY: [0.9, 1, 0.9], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full overflow-hidden relative">
              {team.name === 'Knight Vipers' && (
                <div className="absolute inset-0 flex flex-wrap opacity-60">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1/4 h-1/5 border border-orange-700/60"></div>
                  ))}
                </div>
              )}
              {team.name === 'Eagle Warriors' && (
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute bg-gray-300/40" 
                      style={{ 
                        width: `${Math.random() * 70 + 20}%`, 
                        height: `${Math.random() * 10 + 3}px`,
                        top: `${i * 12 + Math.random() * 10}%`,
                        left: `${Math.random() * 30}%`,
                        transform: `rotate(${Math.random() * 20 - 10}deg)`
                      }}
                    ></div>
                  ))}
                </div>
              )}
              {team.name === 'Royal Strikers' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200/30 transform -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-200/30 transform -translate-x-1/2"></div>
                </div>
              )}
              {team.name === 'Supreme Spartans' && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute h-1.5 rounded-full"
                      style={{ 
                        width: `${Math.random() * 80 + 20}%`,
                        background: `hsl(${Math.random() * 360}, 80%, 70%)`,
                        top: `${i * 16 + Math.random() * 5}%`,
                        left: `${Math.random() * 20}%`,
                        opacity: 0.8
                      }}
                      animate={{ 
                        left: [`${Math.random() * 20}%`, `${Math.random() * 10}%`],
                        width: [`${Math.random() * 80 + 20}%`, `${Math.random() * 70 + 30}%`]
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
                    ></motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="team-card">
        <div className="card-highlight from-white/10 via-white/30 to-white/10"></div>
        
        <div className="relative z-10 h-full glass-card rounded-2xl overflow-hidden border border-white/20">
          {/* Top gradient band */}
          <div className={`h-24 bg-gradient-to-r ${team.color} relative overflow-hidden flex items-center justify-center`}>
            <div className="team-card-shimmer"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {team.name === 'Knight Vipers' && (
                <img 
                  src="/lovable-uploads/1ee94a74-cd17-45dc-b852-f8bce8e8d327.png" 
                  alt="Knight Vipers Logo" 
                  className="h-20 object-contain"
                />
              )}
              {team.name === 'Eagle Warriors' && (
                <img 
                  src="/lovable-uploads/f8c131d7-162c-4560-9031-9e66d52a4e18.png" 
                  alt="Eagle Warriors Logo" 
                  className="h-20 object-contain"
                />
              )}
              {team.name === 'Supreme Spartans' && (
                <img 
                  src="/lovable-uploads/329f7383-267a-4763-a7f9-26bf5ff45898.png" 
                  alt="Supreme Spartans Logo" 
                  className="h-20 object-contain"
                />
              )}
              {team.name === 'Royal Strikers' && (
                <span className="text-4xl">{team.logo}</span>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{team.name}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary/70" />
                  <span className="text-sm text-gray-600">Cricket</span>
                </div>
                <span className="text-sm font-medium">{team.participants.cricket}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Anchor size={18} className="text-primary/70" />
                  <span className="text-sm text-gray-600">Tug of War</span>
                </div>
                <span className="text-sm font-medium">{team.participants.tugOfWar}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake size={18} className="text-primary/70" />
                  <span className="text-sm text-gray-600">Volunteers</span>
                </div>
                <span className="text-sm font-medium">{team.participants.volunteers}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-primary/70" />
                  <span className="text-sm text-gray-600">General</span>
                </div>
                <span className="text-sm font-medium">{team.participants.general}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Members</span>
                <span className="text-lg font-semibold">
                  {team.participants.cricket + team.participants.tugOfWar + team.participants.volunteers + team.participants.general}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
