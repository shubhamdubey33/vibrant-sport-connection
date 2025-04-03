
import { motion } from "framer-motion";
import { Participant } from "@/types";
import { Smile, Frown, Meh, Heart, Trophy, Star, Zap, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

interface ExpressionAvatarProps {
  participant: Participant;
  onClick?: () => void;
  className?: string;
}

const getExpression = (id: string) => {
  const expressionType = id.charCodeAt(0) % 7;
  
  switch (expressionType) {
    case 0: return { type: "happy", color: "#4ade80", bg: "#ecfdf5" };
    case 1: return { type: "determined", color: "#f97316", bg: "#fff7ed" };
    case 2: return { type: "surprised", color: "#6366f1", bg: "#eef2ff" };
    case 3: return { type: "serious", color: "#64748b", bg: "#f8fafc" };
    case 4: return { type: "amused", color: "#ec4899", bg: "#fdf2f8" };
    case 5: return { type: "excited", color: "#facc15", bg: "#fefce8" };
    case 6: return { type: "calm", color: "#0ea5e9", bg: "#f0f9ff" };
    default: return { type: "neutral", color: "#9ca3af", bg: "#f9fafb" };
  }
};

const getEmoji = (expression: string, teamColor: string) => {
  const iconProps = { size: 24, color: teamColor, strokeWidth: 2 };
  
  switch (expression) {
    case "happy": return <Smile {...iconProps} />;
    case "determined": return <Zap {...iconProps} />;
    case "surprised": return <Star {...iconProps} />;
    case "serious": return <BookOpen {...iconProps} />;
    case "amused": return <Heart {...iconProps} />;
    case "excited": return <Trophy {...iconProps} />;
    case "calm": return <Meh {...iconProps} />;
    default: return <Smile {...iconProps} />;
  }
};

const teamColors = {
  'Knight Vipers': '#f59e0b',
  'Eagle Warriors': '#475569',
  'Royal Strikers': '#1e3a8a', 
  'Supreme Spartans': '#dc2626',
};

const ExpressionAvatar = ({ participant, onClick, className = "" }: ExpressionAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const expression = getExpression(participant.id);
  const teamColor = teamColors[participant.team];
  
  // Get a unique seed for consistent avatar generation
  const seed = encodeURIComponent(participant.name);
  const avatarSrc = `https://api.dicebear.com/6.x/personas/svg?seed=${seed}`;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className={`relative w-full h-40 rounded-lg overflow-hidden shadow-lg ${className}`}
      onClick={handleClick}
    >
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ backgroundColor: expression.bg }}
      >
        {/* Avatar Image */}
        <motion.div
          initial={{ scale: 0.8, y: 10 }}
          animate={{ 
            scale: [0.8, 1, 0.95, 1],
            y: [10, 0, 5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 shadow-md"
               style={{ borderColor: teamColor }}>
            <img 
              src={avatarSrc} 
              alt={participant.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Expression Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: teamColor }}
          >
            {getEmoji(expression.type, "#ffffff")}
          </motion.div>
        </motion.div>
        
        {/* Team Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 px-3 py-1 rounded-full text-white text-xs font-medium"
          style={{ backgroundColor: teamColor }}
        >
          {participant.team}
        </motion.div>
        
        {/* Expression Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="mt-2 text-sm font-medium"
          style={{ color: expression.color }}
        >
          {expression.type.charAt(0).toUpperCase() + expression.type.slice(1)}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-xs">
        {participant.name}
      </div>
    </motion.div>
  );
};

export default ExpressionAvatar;
