
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Participant } from "@/types";
import ParticipantCard from "../ParticipantCard";

interface CategoryTeamTabsProps {
  participants: Participant[];
  defaultTeam?: string;
}

const CategoryTeamTabs = ({ participants, defaultTeam }: CategoryTeamTabsProps) => {
  // Get unique teams
  const teams = [...new Set(participants.map(p => p.team))];

  // Set default team based on prop or first team if teams exist
  const actualDefaultTeam = defaultTeam || (teams.length > 0 ? teams[0] : 'all');

  return (
    <Tabs defaultValue={actualDefaultTeam} className="w-full">
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
  );
};

export default CategoryTeamTabs;
