
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamLeader } from "@/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
                    <Avatar className="h-24 w-24 border-2 border-white shadow-md relative transition-transform duration-300 hover:scale-110 overflow-hidden">
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
              <h3 className="font-medium text-lg">{leader.name}</h3>
              <p className="text-sm text-gray-500">{leader.title}</p>
              <span className="text-xs text-primary/70 mt-1">{leader.team}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeaders;
