import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamLeaders from "@/components/TeamLeaders";
import TeamCard from "@/components/TeamCard";
import CategorySection from "@/components/CategorySection";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import { participants, teams } from "@/data/mockData";
import { Participant, Team } from "@/types";
import { CricketBackground, TugOfWarBackground, VolunteerBackground, GeneralBackground } from "@/components/CategoryBackgrounds";

// Sample team leaders data - in a real app this would come from your API
const teamLeaders = [
  {
    id: "leader-1",
    name: "Alex Johnson",
    title: "Construction Director",
    team: "Brick Blazers" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex&mouth=smile&eyes=happy"
  },
  {
    id: "leader-2",
    name: "Morgan Smith",
    title: "Engineering Lead",
    team: "Concrete Titans" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Morgan&mouth=smile&eyes=surprised"
  },
  {
    id: "leader-3",
    name: "Taylor Ross",
    title: "Operations Manager",
    team: "Steel Strikers" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Taylor&mouth=smile&eyes=wink"
  },
  {
    id: "leader-4",
    name: "Jordan Lee",
    title: "Design Director",
    team: "Design Dynamos" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Jordan&mouth=smile&eyes=hearts"
  },
  {
    id: "leader-5",
    name: "Casey Wright",
    title: "Event Coordinator",
    team: "Brick Blazers" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Casey&mouth=smile&eyes=default"
  },
  {
    id: "leader-6",
    name: "Riley Parker",
    title: "Sports Manager",
    team: "Concrete Titans" as Team,
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Riley&mouth=smile&eyes=eyeRoll"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParticipants, setFilteredParticipants] = useState<Participant[]>(participants);
  
  // Filter participants based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredParticipants(participants);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = participants.filter(
      (p) => 
        p.name.toLowerCase().includes(query) || 
        p.team.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        (p.role && p.role.toLowerCase().includes(query))
    );
    
    setFilteredParticipants(filtered);
  }, [searchQuery]);
  
  // Get filtered participants by category
  const getCategoryParticipants = (category: string) => {
    return filteredParticipants.filter(p => p.category === category);
  };

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      <Hero />
      
      {/* Team Leaders Section */}
      <TeamLeaders leaders={teamLeaders} />
      
      {/* Teams Section */}
      <section id="teams" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet Our Teams</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four teams will compete across different sports categories. Each team represents a different department at Techinterio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {teams.map((team, index) => (
              <TeamCard key={team.name} team={team} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Search Results */}
      <AnimatePresence>
        {searchQuery && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="py-10 bg-gray-50"
          >
            <div className="container max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}"
              </h2>
              
              {filteredParticipants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredParticipants.slice(0, 8).map((participant, index) => (
                    <motion.div
                      key={participant.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="participant-card"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={participant.avatar || `https://api.dicebear.com/6.x/initials/svg?seed=${participant.name}`} 
                            alt={participant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">{participant.name}</h3>
                          <p className="text-xs text-gray-500">{participant.team}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {participant.category}
                        </span>
                        {participant.role && (
                          <span className="text-xs text-gray-500 ml-2">{participant.role}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No participants found matching your search.</p>
                </div>
              )}
              
              {filteredParticipants.length > 8 && (
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500">
                    Showing 8 of {filteredParticipants.length} results
                  </p>
                  <button className="mt-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                    View All Results
                  </button>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      
      {/* Cricket Section */}
      <CategorySection
        id="cricket"
        title="Cricket Tournament"
        description="Our premier event features teams of 11 competing in a round-robin tournament followed by knockout rounds to determine the Techinterio Cricket Champions."
        category="Cricket"
        participants={getCategoryParticipants("Cricket")}
        backgroundElement={<CricketBackground />}
        defaultTeam="Brick Blazers"
      />
      
      {/* Tug of War Section */}
      <CategorySection
        id="tugofwar"
        title="Tug of War Challenge"
        description="Teams of 8 will test their strength and coordination in this classic battle of willpower and teamwork."
        category="Tug of War"
        participants={getCategoryParticipants("Tug of War")}
        className="bg-amber-50"
        backgroundElement={<TugOfWarBackground />}
      />
      
      {/* Volunteers Section */}
      <CategorySection
        id="volunteers"
        title="Event Volunteers"
        description="Our dedicated volunteers ensure the sports day runs smoothly, handling everything from logistics to scoring and event management."
        category="Volunteer"
        participants={getCategoryParticipants("Volunteer")}
        className="bg-blue-50"
        backgroundElement={<VolunteerBackground />}
      />
      
      {/* General Team Members Section */}
      <CategorySection
        id="general"
        title="Team Members"
        description="Beyond the competitors, these team members provide vital support and cheer on their colleagues across all events."
        category="General"
        participants={getCategoryParticipants("General")}
        className="bg-purple-50"
        backgroundElement={<GeneralBackground />}
      />
      
      {/* Schedule Section */}
      <Schedule />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
