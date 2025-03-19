
export type Team = 'Brick Blazers' | 'Concrete Titans' | 'Steel Strikers' | 'Design Dynamos';

export type Category = 'Cricket' | 'Tug of War' | 'Volunteer' | 'General';

export interface Participant {
  id: string;
  name: string;
  team: Team;
  category: Category;
  role?: string;
  avatar?: string;
  stats?: Record<string, any>;
  isLeader?: boolean;
}

export interface TeamData {
  name: Team;
  color: string;
  logo: string; 
  backgroundColor: string;
  textColor: string;
  flagColor: string;
  flagBackground: string;
  flagSymbol: string;
  participants: {
    cricket: number;
    tugOfWar: number;
    volunteers: number;
    general: number;
  };
}

export interface TeamLeader {
  id: string;
  name: string;
  title: string;
  team: Team;
  avatar: string;
}
