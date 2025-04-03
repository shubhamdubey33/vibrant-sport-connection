
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Participant } from "@/types";
import ParticipantCard from "../ParticipantCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface CategoryTeamTabsProps {
  participants: Participant[];
  defaultTeam?: string;
}

const CategoryTeamTabs = ({ participants, defaultTeam }: CategoryTeamTabsProps) => {
  // Get unique teams
  const teams = [...new Set(participants.map(p => p.team))];
  const isMobile = useIsMobile();

  // Set default team based on prop or first team if teams exist
  const actualDefaultTeam = defaultTeam || (teams.length > 0 ? teams[0] : 'all');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTeam, setActiveTeam] = useState<string>(actualDefaultTeam);
  const itemsPerPage = isMobile ? 4 : 8;

  // Reset pagination when team changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTeam]);

  // Get participants for current team and page
  const getCurrentParticipants = (team: string) => {
    const teamParticipants = team === 'all' 
      ? participants
      : participants.filter(p => p.team === team);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
      displayedParticipants: teamParticipants.slice(startIndex, endIndex),
      totalPages: Math.ceil(teamParticipants.length / itemsPerPage),
      totalParticipants: teamParticipants.length
    };
  };

  const handleTabChange = (value: string) => {
    setActiveTeam(value);
  };

  return (
    <Tabs 
      defaultValue={actualDefaultTeam} 
      className="w-full"
      onValueChange={handleTabChange}
    >
      <div className="relative overflow-x-auto pb-2">
        <TabsList className="mb-6 md:mb-8 bg-white/50 backdrop-blur-sm flex w-full no-scrollbar">
          <TabsTrigger className="whitespace-nowrap" value="all">All Teams</TabsTrigger>
          {teams.map((team) => (
            <TabsTrigger className="whitespace-nowrap" key={team} value={team}>{team}</TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getCurrentParticipants('all').displayedParticipants.map((participant, index) => (
            <ParticipantCard 
              key={participant.id} 
              participant={participant} 
              index={index} 
            />
          ))}
        </div>
        {getCurrentParticipants('all').totalPages > 1 && (
          <RenderPagination 
            currentPage={currentPage} 
            totalPages={getCurrentParticipants('all').totalPages} 
            setCurrentPage={setCurrentPage}
            totalItems={getCurrentParticipants('all').totalParticipants}
            isMobile={isMobile}
          />
        )}
      </TabsContent>

      {teams.map((team) => (
        <TabsContent key={team} value={team} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getCurrentParticipants(team).displayedParticipants.map((participant, index) => (
              <ParticipantCard 
                key={participant.id} 
                participant={participant} 
                index={index} 
              />
            ))}
          </div>
          {getCurrentParticipants(team).totalPages > 1 && (
            <RenderPagination 
              currentPage={currentPage} 
              totalPages={getCurrentParticipants(team).totalPages} 
              setCurrentPage={setCurrentPage}
              totalItems={getCurrentParticipants(team).totalParticipants}
              isMobile={isMobile}
            />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  isMobile: boolean;
}

const RenderPagination = ({ currentPage, totalPages, setCurrentPage, totalItems, isMobile }: PaginationProps) => {
  // Helper function to generate page numbers
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
  };

  // Simplified pagination for mobile
  const renderMobilePagination = () => (
    <div className="flex items-center justify-between mt-4 px-2">
      <Button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        variant="ghost"
        size="sm"
        className="p-1 text-primary"
      >
        <ChevronLeft size={20} />
      </Button>
      
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      
      <Button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        variant="ghost"
        size="sm"
        className="p-1 text-primary"
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );

  // Desktop pagination
  const renderDesktopPagination = () => (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            variant="ghost"
            size="icon"
            className="cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </Button>
        </PaginationItem>
        
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <span className="mx-2">...</span>
            ) : (
              <PaginationLink
                onClick={() => setCurrentPage(page as number)}
                isActive={currentPage === page}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        
        <PaginationItem>
          <Button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            variant="ghost"
            size="icon"
            className="cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  return (
    <div className="mt-4">
      <div className="text-center text-sm text-gray-500 mb-2">
        Showing {(currentPage - 1) * (isMobile ? 4 : 8) + 1} to{" "}
        {Math.min(currentPage * (isMobile ? 4 : 8), totalItems)} of {totalItems} participants
      </div>
      
      {isMobile ? renderMobilePagination() : renderDesktopPagination()}
    </div>
  );
};

export default CategoryTeamTabs;
