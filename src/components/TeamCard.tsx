
import { motion } from "framer-motion";
import { TeamData } from "@/types";
import { Trophy, Users, Anchor, HeartHandshake } from "lucide-react";

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

  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="team-card">
        <div className="card-highlight from-white/10 via-white/30 to-white/10"></div>
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
