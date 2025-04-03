
import { motion } from "framer-motion";
import { Participant, Team } from "@/types";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import TeamMember3D from "./TeamMember3D";

interface ParticipantCardProps {
  participant: Participant;
  index: number;
  delay?: number;
  show3D?: boolean;
}

const ParticipantCard = ({ participant, index, delay = 0, show3D = false }: ParticipantCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Optimize image loading
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const getCategoryColor = () => {
    switch(participant.category) {
      case 'Cricket':
        return 'bg-green-500';
      case 'Tug of War':
        return 'bg-amber-500';
      case 'Volunteer':
        return 'bg-blue-500';
      case 'General':
        return 'bg-purple-500';
      case 'Sports':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTeamColor = () => {
    switch(participant.team) {
      case 'Knight Vipers':
        return 'border-team-brick/30';
      case 'Eagle Warriors':
        return 'border-team-concrete/30';
      case 'Royal Strikers':
        return 'border-team-steel/30';
      case 'Supreme Spartans':
        return 'border-team-design/30';
      default:
        return 'border-gray-200';
    }
  };

  // Generate a deterministic but random avatar
  const getAvatarUrl = () => {
    // Options for avatar styles
    const styles = ['adventurer', 'adventurer-neutral', 'avataaars', 'big-ears', 'big-ears-neutral', 
                    'big-smile', 'bottts', 'croodles', 'croodles-neutral', 'fun-emoji', 
                    'icons', 'identicon', 'initials', 'lorelei', 'lorelei-neutral', 
                    'micah', 'miniavs', 'open-peeps', 'personas', 'pixel-art', 
                    'pixel-art-neutral'];
    
    // Use participant ID to get a consistent style for each participant
    const styleIndex = participant.id.charCodeAt(0) % styles.length;
    const style = styles[styleIndex];
    
    // Generate a seed based on participant name for consistency
    const seed = encodeURIComponent(participant.name);
    
    return `https://api.dicebear.com/6.x/${style}/svg?seed=${seed}`;
  };

  // Determine avatar source with built-in generator
  const avatarSrc = getAvatarUrl();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index + delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "participant-card group hover:border-primary/30",
        getTeamColor()
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar with loading state */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-100">
          <div className={!imageLoaded ? "absolute inset-0 animate-pulse bg-gray-200 rounded-full" : "hidden"} />
          <img 
            src={avatarSrc}
            alt={participant.name}
            className={cn(
              "w-full h-full object-cover img-optimize",
              imageLoaded ? "lazy-loaded" : "lazy-load"
            )}
            loading="lazy"
            onLoad={handleImageLoaded}
            onError={handleImageLoaded} // Also mark as loaded on error to remove loading state
          />
        </div>
        
        <div>
          <h3 className="text-base font-medium">{participant.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={cn("category-chip text-[10px]", getCategoryColor())}>
              {participant.category}
            </span>
            {participant.role && (
              <span className="text-xs text-gray-500">{participant.role}</span>
            )}
          </div>
        </div>
      </div>
      
      {show3D && (
        <div className="mt-3 bg-gray-50 rounded-md overflow-hidden">
          <TeamMember3D participant={participant} />
        </div>
      )}
      
      <div className="mt-2 flex justify-between items-center">
        <div className="text-xs text-gray-500">{participant.team}</div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="text-xs text-primary hover:underline"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide 3D" : "Show 3D"}
          </button>
        </div>
      </div>
      
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 pt-3 border-t border-gray-100"
        >
          <TeamMember3D participant={participant} className="h-56" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ParticipantCard;
