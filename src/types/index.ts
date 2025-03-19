
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
}

export interface TeamData {
  name: Team;
  color: string;
  logo: string; 
  backgroundColor: string;
  textColor: string;
  participants: {
    cricket: number;
    tugOfWar: number;
    volunteers: number;
    general: number;
  };
}
