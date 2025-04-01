
import { Participant, TeamData, Team, Category } from '../types';

// Define all the name arrays that were referenced but not defined
const cricketNamesDarkKnights = [
  "Rajiv Singh", "Deepak Kumar", "Mahesh Gupta", "Vijay Sharma",
  "Aditya Patel", "Rahul Joshi", "Ankit Verma", "Suresh Yadav",
  "Ravi Agarwal", "Sanjay Mishra", "Rakesh Tiwari"
];

const tugOfWarNamesDarkKnights = [
  "Arvind Mehta", "Praveen Kumar", "Harish Tiwari", "Dinesh Shukla", 
  "Manoj Khanna", "Nitin Sharma", "Amit Singh", "Vinod Patel"
];

const volunteerNamesDarkKnights = [
  "Vipul Agarwal", "Prateek Sharma", "Kunal Joshi", "Naveen Gupta"
];

const generalNamesDarkKnights = [
  "Vivek Singh", "Ashish Kumar", "Ramesh Verma", "Satish Patel", 
  "Rajesh Gupta", "Sudhir Tiwari", "Mukesh Yadav", "Pradeep Jain",
  "Sandeep Mehta", "Raju Sharma", "Alok Mishra", "Ajay Kumar"
];

// NEW: Adding General Sports participants for Knight Vipers
const generalSportsKnightVipers = [
  "Arjun Mishra", "Pankaj Singh", "Vivek Tiwari", "Saurabh Gupta",
  "Vishal Kumar", "Kapil Sharma", "Mohan Das", "Akash Verma"
];

const cricketNamesEagleWarriors = [
  "Girish Bhatt", "Manish Nair", "Rajeev Pillai", "Kamal Nath", 
  "Ajith Kumar", "Sunil Menon", "Varghese Thomas", "Jacob Mathew", 
  "Prashant Iyer", "Siddharth Nair", "Vipin Krishnan"
];

const tugOfWarNamesEagleWarriors = [
  "Balu Krishna", "Harish Menon", "Santhosh Nair", "Rajesh Kurup", 
  "Mohan Das", "Vivek Pillai", "Arun Nair", "Vinod Menon"
];

const volunteerNamesEagleWarriors = [
  "Anoop Krishnan", "Rahul Nair", "Jithin Thomas", "Girish Kumar", 
  "Biju Joseph", "Shyam Lal"
];

const generalNamesEagleWarriors = [
  "Anil Kumar", "Suresh Babu", "Manoj Varma", "Sanjay Nair", 
  "Vijay Menon", "Rajiv Pillai", "Ravi Krishnan", "Prakash Nair", 
  "Deepak Thomas", "Satheesh Kumar"
];

// NEW: Adding General Sports participants for Eagle Warriors
const generalSportsEagleWarriors = [
  "Arun Menon", "Vishnu Pillai", "Jithin Nair", "Rajiv Thomas",
  "Santhosh Krishnan", "Rahul Das", "Anil Varma", "Sunil Jacob"
];

const cricketNamesRoyalStrikers = [
  "Abhishek Khanna", "Varun Malhotra", "Karan Bhatia", "Rohit Sinha", 
  "Arjun Kapoor", "Gaurav Khanna", "Nikhil Dhawan", "Mohit Sharma", 
  "Vikram Mehta", "Avinash Arora", "Siddharth Khanna"
];

const tugOfWarNamesRoyalStrikers = [
  "Rahul Bhatia", "Vikas Kapoor", "Neeraj Sinha", "Sameer Khanna", 
  "Rajan Malhotra", "Anuj Dhawan", "Tarun Mehta", "Deepak Arora"
];

const volunteerNamesRoyalStrikers = [
  "Vishal Sinha", "Ajay Kapoor", "Saurabh Khanna", "Rajat Malhotra", 
  "Vineet Dhawan"
];

const generalNamesRoyalStrikers = [
  "Rajesh Malhotra", "Amit Khanna", "Sunil Kapoor", "Manish Sinha", 
  "Naveen Bhatia", "Ravish Kumar", "Pankaj Dhawan", "Alok Mehta", 
  "Ashish Arora", "Mayank Sharma", "Rakesh Khanna", "Vivek Malhotra",
  "Deepak Sinha", "Rajeev Kapoor"
];

// NEW: Adding General Sports participants for Royal Strikers
const generalSportsRoyalStrikers = [
  "Karan Malhotra", "Siddharth Kapoor", "Rohit Dhawan", "Vikas Sinha",
  "Nikhil Bhatia", "Anuj Khanna", "Tarun Arora", "Deepak Mehta"
];

const cricketNamesSupremeSpartans = [
  "Arun Bhandari", "Prashant Chaudhary", "Vikrant Thakur", "Himanshu Saxena", 
  "Rohit Jaiswal", "Sanjay Pandey", "Gaurav Saxena", "Deepak Chauhan", 
  "Vikas Bhandari", "Ravindra Thakur", "Amit Chaudhary"
];

const tugOfWarNamesSupremeSpartans = [
  "Rajat Pandey", "Neeraj Chauhan", "Sandeep Bhandari", "Akhilesh Thakur", 
  "Manoj Saxena", "Vivek Jaiswal", "Ankit Pandey", "Nitin Chauhan"
];

const volunteerNamesSupremeSpartans = [
  "Praveen Bhandari", "Sudhir Chauhan", "Vishnu Thakur", "Ajay Saxena", 
  "Rahul Jaiswal", "Saurabh Pandey", "Nikhil Chauhan"
];

const generalNamesSupremeSpartans = [
  "Ashish Bhandari", "Rajesh Chauhan", "Vinod Thakur", "Anuj Saxena", 
  "Ravi Jaiswal", "Amar Pandey", "Deepak Chauhan", "Siddharth Bhandari", 
  "Rajeev Thakur", "Vikas Chauhan", "Gaurav Jaiswal"
];

// NEW: Adding General Sports participants for Supreme Spartans
const generalSportsSupremeSpartans = [
  "Prashant Saxena", "Vikrant Bhandari", "Himanshu Pandey", "Rohit Chauhan",
  "Sanjay Thakur", "Gaurav Jaiswal", "Deepak Bhandari", "Vikas Pandey"
];

export const teams: TeamData[] = [
  {
    name: 'Knight Vipers',
    color: 'from-amber-500 to-yellow-600',
    logo: '🛡️',
    backgroundColor: 'bg-team-brick/10',
    textColor: 'text-team-brick',
    flagColor: 'text-orange-500',
    flagBackground: 'bg-gradient-to-r from-amber-400 to-yellow-600',
    flagSymbol: 'brick-pattern',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 4,
      general: 12
    }
  },
  {
    name: 'Eagle Warriors',
    color: 'from-slate-600 to-slate-800',
    logo: '🦅',
    backgroundColor: 'bg-team-concrete/10',
    textColor: 'text-team-concrete',
    flagColor: 'text-gray-500',
    flagBackground: 'bg-gradient-to-r from-slate-400 to-slate-700',
    flagSymbol: 'concrete-texture',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 6, 
      general: 10
    }
  },
  {
    name: 'Royal Strikers',
    color: 'from-blue-900 to-slate-800',  
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
    name: 'Supreme Spartans',
    color: 'from-red-600 to-red-900',
    logo: '⚔️',
    backgroundColor: 'bg-team-design/10',
    textColor: 'text-team-design',
    flagColor: 'text-red-600',
    flagBackground: 'bg-gradient-to-r from-red-600 to-red-900',
    flagSymbol: 'design-lines',
    participants: {
      cricket: 11,
      tugOfWar: 8,
      volunteers: 7,
      general: 11
    }
  }
];

const cricketRoles = [
  'Captain', 
  'Batsman', 'Batsman', 'Batsman',
  'Bowler', 'Bowler', 'Bowler', 'Bowler',
  'All-rounder', 'All-rounder', 'All-rounder'
];

export const participants: Participant[] = [
  // Knight Vipers
  ...cricketNamesDarkKnights.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Cricket' as Category,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),

  ...tugOfWarNamesDarkKnights.map((name, i) => ({
    id: `bb-tug-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
  })),

  ...volunteerNamesDarkKnights.map((name, i) => ({
    id: `bb-volunteer-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics'][i],
  })),
  
  ...generalNamesDarkKnights.map((name, i) => ({
    id: `bb-general-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'General' as Category,
    avatar: `https://i.pravatar.cc/150?u=bb-general-${i+1}`
  })),

  // NEW: Adding General Sports for Knight Vipers
  ...generalSportsKnightVipers.map((name, i) => ({
    id: `kv-gensports-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'General' as Category,
    role: 'Lemon Race Participant',
    avatar: `https://i.pravatar.cc/150?u=kv-gensports-${i+1}`
  })),

  // Eagle Warriors
  ...cricketNamesEagleWarriors.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Cricket' as Category,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),

  ...tugOfWarNamesEagleWarriors.map((name, i) => ({
    id: `ss-tug-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
  })),
  
  ...volunteerNamesEagleWarriors.map((name, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
  })),
  
  ...generalNamesEagleWarriors.map((name, i) => ({
    id: `ss-general-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'General' as Category,
    avatar: `https://i.pravatar.cc/150?u=ss-general-${i+1}`
  })),

  // NEW: Adding General Sports for Eagle Warriors
  ...generalSportsEagleWarriors.map((name, i) => ({
    id: `ew-gensports-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'General' as Category,
    role: 'Lemon Race Participant',
    avatar: `https://i.pravatar.cc/150?u=ew-gensports-${i+1}`
  })),

  // Royal Strikers
  ...cricketNamesRoyalStrikers.map((name, i) => ({
    id: `rs-cricket-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Cricket' as Category,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',  
    avatar: `https://i.pravatar.cc/150?u=rs-cricket-${i+1}`
  })),
  
  ...tugOfWarNamesRoyalStrikers.map((name, i) => ({
    id: `rs-tug-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=rs-tug-${i+1}`
  })),
  
  ...volunteerNamesRoyalStrikers.map((name, i) => ({
    id: `rs-volunteer-${i+1}`,  
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
    avatar: `https://i.pravatar.cc/150?u=rs-volunteer-${i+1}`
  })),
  
  ...generalNamesRoyalStrikers.map((name, i) => ({
    id: `rs-general-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'General' as Category,
    avatar: `https://i.pravatar.cc/150?u=rs-general-${i+1}`
  })),

  // NEW: Adding General Sports for Royal Strikers
  ...generalSportsRoyalStrikers.map((name, i) => ({
    id: `rs-gensports-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'General' as Category,
    role: 'Lemon Race Participant',
    avatar: `https://i.pravatar.cc/150?u=rs-gensports-${i+1}`
  })),

  // Supreme Spartans
  ...cricketNamesSupremeSpartans.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Cricket' as Category,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),
  
  ...tugOfWarNamesSupremeSpartans.map((name, i) => ({
    id: `ss-tug-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',  
    avatar: `https://i.pravatar.cc/150?u=ss-tug-${i+1}`
  })),
  
  ...volunteerNamesSupremeSpartans.map((name, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Photographer', 'Social Media', 'Designer'][i],
    avatar: `https://i.pravatar.cc/150?u=ss-volunteer-${i+1}`
  })),
  
  ...generalNamesSupremeSpartans.map((name, i) => ({
    id: `ss-general-${i+1}`,
    name: name, 
    team: 'Supreme Spartans' as Team,
    category: 'General' as Category,
    avatar: `https://i.pravatar.cc/150?u=ss-general-${i+1}`
  })),

  // NEW: Adding General Sports for Supreme Spartans
  ...generalSportsSupremeSpartans.map((name, i) => ({
    id: `ss-gensports-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'General' as Category,
    role: 'Lemon Race Participant',
    avatar: `https://i.pravatar.cc/150?u=ss-gensports-${i+1}`
  })),
];
