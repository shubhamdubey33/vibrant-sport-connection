
import { motion } from "framer-motion";
import { TeamData } from "@/types";
import { Trophy, Users, Anchor, HeartHandshake, Flag } from "lucide-react";

interface TeamCardProps {
  team: TeamData;
  index: number;
}

const TeamCard = ({ team, index }: TeamCardProps) => {
  const getGradient = () => {
    switch(team.name) {
      case 'Brick Blazers':
        return 'from-red-500 to-orange-500';
      case 'Concrete Titans':
        return 'from-gray-500 to-gray-600';
      case 'Steel Strikers':
        return 'from-slate-700 to-slate-900';
      case 'Design Dynamos':
        return 'from-purple-500 to-purple-700';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getFlagColor = () => {
    switch(team.name) {
      case 'Brick Blazers':
        return 'text-orange-500';
      case 'Concrete Titans':
        return 'text-gray-500';
      case 'Steel Strikers':
        return 'text-slate-700';
      case 'Design Dynamos':
        return 'text-purple-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="team-card">
        <div className="card-highlight from-white/10 via-white/30 to-white/10"></div>
        
        {/* Team Flag */}
        <motion.div 
          className="absolute -top-12 right-4 z-20"
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <Flag className={`w-8 h-8 ${getFlagColor()}`} />
            <motion.div 
              className={`absolute top-8 left-1/2 -translate-x-1/2 w-12 h-20 origin-top bg-gradient-to-b ${getGradient()} rounded-sm`}
              initial={{ scaleY: 0.9, rotate: 0 }}
              animate={{ scaleY: [0.9, 1, 0.9], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full overflow-hidden relative">
                {team.name === 'Brick Blazers' && (
                  <div className="absolute inset-0 flex flex-wrap">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="w-1/3 h-1/5 border border-orange-600/30"></div>
                    ))}
                  </div>
                )}
                {team.name === 'Concrete Titans' && (
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute bg-gray-400/40" 
                        style={{ 
                          width: `${Math.random() * 50 + 10}%`, 
                          height: `${Math.random() * 10 + 2}px`,
                          top: `${i * 20 + Math.random() * 10}%`,
                          left: `${Math.random() * 40}%`,
                          transform: `rotate(${Math.random() * 10 - 5}deg)`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                {team.name === 'Steel Strikers' && (
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 right-0 h-3 bg-blue-800/20 -rotate-45 transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-3 bg-blue-800/20 rotate-45 transform -translate-y-1/2"></div>
                  </div>
                )}
                {team.name === 'Design Dynamos' && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="absolute h-1 rounded-full"
                        style={{ 
                          width: `${Math.random() * 80 + 20}%`,
                          background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                          top: `${i * 16 + Math.random() * 5}%`,
                          left: `${Math.random() * 20}%`,
                          opacity: 0.7
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
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-32 bg-gray-400"></div>
          </div>
        </motion.div>
        
        <div className="relative z-10 h-full glass-card rounded-2xl overflow-hidden border border-white/20">
          {/* Top gradient band */}
          <div className={`h-24 bg-gradient-to-r ${getGradient()} relative overflow-hidden`}>
            <div className="team-card-shimmer"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">{team.logo}</span>
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
