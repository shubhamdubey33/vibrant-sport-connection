
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

  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      {backgroundElement}
      
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
