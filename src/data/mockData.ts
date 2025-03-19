
import { Participant, TeamData } from '../types';

export const teams: TeamData[] = [
  {
    name: 'Brick Blazers',
    color: 'from-red-500 to-orange-500',
    logo: '🧱',
    backgroundColor: 'bg-team-brick/10',
    textColor: 'text-team-brick',
    flagColor: 'text-orange-500',
    flagBackground: 'bg-gradient-to-r from-orange-400 to-orange-600',
    flagSymbol: 'brick-pattern',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 4,
      general: 12
    }
  },
  {
    name: 'Concrete Titans',
    color: 'from-gray-500 to-gray-600',
    logo: '🏢',
    backgroundColor: 'bg-team-concrete/10',
    textColor: 'text-team-concrete',
    flagColor: 'text-gray-500',
    flagBackground: 'bg-gradient-to-r from-gray-400 to-gray-600',
    flagSymbol: 'concrete-texture',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 6, 
      general: 10
    }
  },
  {
    name: 'Steel Strikers',
    color: 'from-blue-900 to-slate-800',  // Updated to match the flag colors
    logo: '⚙️',
    backgroundColor: 'bg-team-steel/10',
    textColor: 'text-team-steel',
    flagColor: 'text-blue-900',
    flagBackground: 'bg-gradient-to-r from-blue-900 to-slate-800',
    flagSymbol: 'steel-beams',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 5,
      general: 14
    }
  },
  {
    name: 'Design Dynamos',
    color: 'from-teal-400 to-teal-600',  // Updated to match the turquoise flag colors
    logo: '🎨',
    backgroundColor: 'bg-team-design/10',
    textColor: 'text-team-design',
    flagColor: 'text-teal-500',
    flagBackground: 'bg-gradient-to-r from-teal-400 to-teal-600',
    flagSymbol: 'design-lines',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 7,
      general: 11
    }
  }
];

export const participants: Participant[] = [
  // Brick Blazers
  ...[...Array(11)].map((_, i) => ({
    id: `bb-cricket-${i+1}`,
    name: `BB Cricket Player ${i+1}`,
    team: 'Brick Blazers' as const,
    category: 'Cricket' as const,
    role: i === 0 ? 'Captain' : i < 4 ? 'Batsman' : i < 8 ? 'Bowler' : 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=bb-cricket-${i+1}`
  })),
  ...[...Array(8)].map((_, i) => ({
    id: `bb-tug-${i+1}`,
    name: `BB Tug Player ${i+1}`,
    team: 'Brick Blazers' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=bb-tug-${i+1}`
  })),
  ...[...Array(4)].map((_, i) => ({
    id: `bb-volunteer-${i+1}`,
    name: `BB Volunteer ${i+1}`,
    team: 'Brick Blazers' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics'][i],
    avatar: `https://i.pravatar.cc/150?u=bb-volunteer-${i+1}`
  })),
  ...[...Array(12)].map((_, i) => ({
    id: `bb-general-${i+1}`,
    name: `BB Member ${i+1}`,
    team: 'Brick Blazers' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=bb-general-${i+1}`
  })),

  // Concrete Titans
  ...[...Array(11)].map((_, i) => ({
    id: `ct-cricket-${i+1}`,
    name: `CT Cricket Player ${i+1}`,
    team: 'Concrete Titans' as const,
    category: 'Cricket' as const,
    role: i === 0 ? 'Captain' : i < 4 ? 'Batsman' : i < 8 ? 'Bowler' : 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ct-cricket-${i+1}`
  })),
  ...[...Array(8)].map((_, i) => ({
    id: `ct-tug-${i+1}`,
    name: `CT Tug Player ${i+1}`,
    team: 'Concrete Titans' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=ct-tug-${i+1}`
  })),
  ...[...Array(6)].map((_, i) => ({
    id: `ct-volunteer-${i+1}`,
    name: `CT Volunteer ${i+1}`,
    team: 'Concrete Titans' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'First Aid', 'Scorekeeper'][i],
    avatar: `https://i.pravatar.cc/150?u=ct-volunteer-${i+1}`
  })),
  ...[...Array(10)].map((_, i) => ({
    id: `ct-general-${i+1}`,
    name: `CT Member ${i+1}`,
    team: 'Concrete Titans' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=ct-general-${i+1}`
  })),

  // Steel Strikers
  ...[...Array(11)].map((_, i) => ({
    id: `ss-cricket-${i+1}`,
    name: `SS Cricket Player ${i+1}`,
    team: 'Steel Strikers' as const,
    category: 'Cricket' as const,
    role: i === 0 ? 'Captain' : i < 4 ? 'Batsman' : i < 8 ? 'Bowler' : 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),
  ...[...Array(8)].map((_, i) => ({
    id: `ss-tug-${i+1}`,
    name: `SS Tug Player ${i+1}`,
    team: 'Steel Strikers' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=ss-tug-${i+1}`
  })),
  ...[...Array(5)].map((_, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: `SS Volunteer ${i+1}`,
    team: 'Steel Strikers' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
    avatar: `https://i.pravatar.cc/150?u=ss-volunteer-${i+1}`
  })),
  ...[...Array(14)].map((_, i) => ({
    id: `ss-general-${i+1}`,
    name: `SS Member ${i+1}`,
    team: 'Steel Strikers' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=ss-general-${i+1}`
  })),

  // Design Dynamos
  ...[...Array(11)].map((_, i) => ({
    id: `dd-cricket-${i+1}`,
    name: `DD Cricket Player ${i+1}`,
    team: 'Design Dynamos' as const,
    category: 'Cricket' as const,
    role: i === 0 ? 'Captain' : i < 4 ? 'Batsman' : i < 8 ? 'Bowler' : 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=dd-cricket-${i+1}`
  })),
  ...[...Array(8)].map((_, i) => ({
    id: `dd-tug-${i+1}`,
    name: `DD Tug Player ${i+1}`,
    team: 'Design Dynamos' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=dd-tug-${i+1}`
  })),
  ...[...Array(7)].map((_, i) => ({
    id: `dd-volunteer-${i+1}`,
    name: `DD Volunteer ${i+1}`,
    team: 'Design Dynamos' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Photographer', 'Social Media', 'Designer'][i],
    avatar: `https://i.pravatar.cc/150?u=dd-volunteer-${i+1}`
  })),
  ...[...Array(11)].map((_, i) => ({
    id: `dd-general-${i+1}`,
    name: `DD Member ${i+1}`,
    team: 'Design Dynamos' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=dd-general-${i+1}`
  }))
];
