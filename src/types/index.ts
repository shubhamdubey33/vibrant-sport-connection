
export type Team = 'Knight Vipers' | 'Eagle Warriors' | 'Royal Strikers' | 'Supreme Spartans';

export type Category = 'Cricket' | 'Tug of War' | 'Volunteer' | 'General' | 'Sports';

export interface Participant {
  id: string;
  name: string;
  team: Team;
  category: Category;
  role?: string;
  avatar?: string;
  stats?: Record<string, any>;
  isLeader?: boolean;
  model3d?: {
    pose: 'standing' | 'action' | 'casual';
    emotion: 'neutral' | 'happy' | 'serious';
  };
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
  shirtColor?: string;
  modelPath?: string;
}

export interface SubTeamLeader {
  id: string;
  name: string;
  title: string;
  team: Team;
  avatar: string;
}

export interface TeamLeader {
  id: string;
  name: string;
  title: string;
  team: Team;
  avatar: string;
  subLeaders?: SubTeamLeader[];
}
