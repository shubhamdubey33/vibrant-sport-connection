
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamLeader } from "@/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";

interface TeamLeadersProps {
  leaders: TeamLeader[];
}

const TeamLeaders = ({ leaders }: TeamLeadersProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Team Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries leading our teams to glory on Sports Day.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative mb-4 cursor-pointer">
                    <motion.div
                      className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/60 to-blue-400/60 blur-md"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                    <Avatar className="h-32 w-32 md:h-36 md:w-36 border-2 border-white shadow-md relative transition-transform duration-300 hover:scale-110 overflow-hidden">
                      <AvatarImage 
                        src={leader.avatar} 
                        alt={leader.name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback>{leader.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-4">
                  <div className="flex flex-col items-center">
                    <h4 className="font-bold text-lg mb-1">{leader.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{leader.title}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {leader.team}
                    </span>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <h3 className="font-medium text-xl">{leader.name}</h3>
              <p className="text-sm text-gray-500">{leader.title}</p>
              <span className="text-xs text-primary/70 mt-1">{leader.team}</span>

              {/* Sub-team leaders */}
              {leader.subLeaders && leader.subLeaders.length > 0 && (
                <div className="mt-6 relative">
                  {/* Connecting lines */}
                  <div className="absolute top-0 left-1/2 h-8 w-px bg-gray-300 -translate-x-1/2"></div>
                  <div className="absolute top-8 left-1/4 right-1/4 h-px bg-gray-300"></div>
                  
                  <div className="flex justify-center gap-8 pt-8">
                    {leader.subLeaders.map((subLeader) => (
                      <motion.div 
                        key={subLeader.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex flex-col items-center"
                      >
                        <Avatar className="h-16 w-16 border-2 border-white shadow-sm hover:shadow-md transition-all">
                          <AvatarImage 
                            src={subLeader.avatar} 
                            alt={subLeader.name}
                            className="object-cover w-full h-full"
                          />
                          <AvatarFallback>{subLeader.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <h4 className="text-sm font-medium mt-2">{subLeader.name}</h4>
                        <p className="text-xs text-gray-500">{subLeader.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeaders;
