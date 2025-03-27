
import { Participant, TeamData } from '../types';

export const teams: TeamData[] = [
  {
    name: 'Dark Knights',
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
    name: 'Eagle Warriors',
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
    name: 'Royal Strikers',
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
    name: 'Supreme Spartans',
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
const cricketNamesDarkKnights = ['Gaurav Bhandhari (C)', 'Shubham Rawat (VC)', 'Rakshit', 'Ravi Kumar', 'Md. Ragib', 'Sachin Negi', 'Raman Kumar', 'Mustaqeem', 'Shoeb Akhtar', 'Gaurav Joshi', 'Zaheer','Tarun Sharma','Ramkishan','Sanjay','Bittu Kumar'];
const cricketNamesEagleWarriors = [
  'Amir Khan',
  'Gaurav Negi',
  'Vinay Bhardwaj',
  'Manoj Chopal',
  'Farjan',
  'Neeraj Kumar',
  'Sumit Negi',
  'Yash',
  'Yavnish Gautam',
  'Aniket Kumar',
  'Sarfaraz',
  'Ganesh Aggarwal',
  'Abdul',
  'Prince Nishad',
  'Arnav Pandey'
];
const cricketNamesRoyalStrikers = [
  'Tushar Tyagi',
  'Samshul Ali',
  'Manish Kumar',
  'Kuldeep Varun',
  'Hammad Hassan',
  'Neeraj Saraswat',
  'Himanshu Pal',
  'Sarik Alam',
  'Atul Rawat',
  'Ravi Sharma',
  'Mukesh Khan',
  'Rupesh',
  'Devesh',
  'Anshul Kulshresta',
  'Yogesh Rawat'
];
const cricketNamesSupremeSpartans = [
  'Chirag Vijay Ahuja',
  'Muhib',
  'Prshant Kashyap',
  'Arif Ansari',
  'Pawan',
  'Pankaj Upadhyay',
  'Ravindra',
  'Ramesh',
  'Gurmeet',
  'Aneesh',
  'Ajay',
  'Faizal',
  'Neeraj Pandey',
  'Hammad',
  'Abhishek'
];

const tugOfWarNamesDarkKnights = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const tugOfWarNamesEagleWarriors = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const tugOfWarNamesRoyalStrikers = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const tugOfWarNamesSupremeSpartans = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];

const volunteerNamesDarkKnights = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const volunteerNamesEagleWarriors = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const volunteerNamesRoyalStrikers = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const volunteerNamesSupremeSpartans = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];

const generalNamesDarkKnights = ['Raj', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const generalNamesEagleWarriors = ['Jacky', 'Prince Nishad', 'Ankit Yadav', 'Deepu', 'Swati', 'Rohit Kandpal', 'Abdul Taukeer', 'Sangeeta Rawat', 'Vikas Ahiwal', 'Krishna Rajput', 'Abhishek Verma', 'Raj Singh', 'Yavnish Gautam', 'Aniket Kumar', 'Aman', 'Junaid', 'Sumyra Masood', 'Hasan', 'Ajay Kumar', 'Archita', 'Farjan Khan', 'Khushboo Sharma', 'Sachin Sharma', 'Hasan', 'Amit', 'Gulafsha Parween', 'Neeraj', 'Sukh Kumar', 'Lalit Chauhan', 'Prashant', 'Asheer Rizvi', 'Komal Verma', 'Amees Khan', 'Sarfraj Alam', 'Ankita Choudhary', 'Aman Kumar', 'Ganesh Agrawal', 'Shivani Rani', 'Preeti Yadav', 'Sruti Rekha Satapathy', 'Ajay Kumar Sah', 'Nisha Sharma', 'Preeti', 'Manoj Singh Chuphal', 'Km Usha', 'Mohit Saini', 'Vishakha', 'Tulsi', 'Kamal Kumar', 'Ritik Pandey', 'Sumit Negi', 'Harsh Saxena', 'Chandrakanta Arya', 'Himanshu Kandpal', 'Sumit Singh Rawat', 'Anmol', 'Mohd Siraj', 'Khushboo Prajapati', 'Surbhi'];
const generalNamesRoyalStrikers = ['Neenanjali', 'Wairokpam Ogaka', 'Jagdeep', 'Sameer Sharma', 'Sagar Kumar', 'Ankit Goyat', 'Ravi Sharma', 'Gajendra Singh', 'Nisha', 'Arjun Kumar', 'Dilnawaz Ahmad', 'Abhishek Gaur', 'Kuldeep Kumar Varun', 'Satyapal Singh', 'Rajdeepak Gupta', 'Suraj Prajapati', 'Atul Rawat', 'Abdul Karim Ansari', 'Tushar Kant', 'Aman Srivastava', 'Manish Kumar', 'Tushar Tyagi', 'Rajnish Pal', 'Ajay Pandey', 'Yogesh Rawat', 'Ravi Kumar Jaiswal', 'Tanuj Sharma', 'Pramod Dhoundiyal', 'Praveen', 'Yogesh', 'Sharique', 'Sam Siddiqui', 'Nisha', 'Preeti Rautela', 'Mansi Bhainsora', 'Neeraj Saraswat', 'Mukeet Khan', 'Devesh Al', 'Hammad Hassan', 'Surya', 'Shubham Verma', 'Vinod Kumar', 'Sachin Singh Rathore (S.S. Rathore)', 'Aastha Mishra', 'Nitilesh Kumar', 'Akash Kumar', 'Hitesh Kumar', 'Sunil Rajbhor', 'Sonali', 'Imtiyaj', 'Aman Kumar', 'Akash', 'Ajab Singh', 'Suman', 'Himanshu Sisodiya', 'Bhagwandas', 'Amit Kumar', 'Yogesh Kumar', 'Aman', 'Nishita Rohilla', 'Monika', 'Himanshu Kumar', 'Adarsh Sharma', 'Nitin Dwivedi', 'Poonam', 'Ankit Singh', 'Sagar Sharma', 'Md Asif Hussain', 'Sanjana Singh', 'Anshul Kulshrestha', 'Rupesh Singh', 'Urvashi', 'Ashwani Dubeydi'];

const generalNamesSupremeSpartans = ['Puneet Sharma', 'Ruapnshak', 'Neeraj Pandey', 'Charu Rajput', 'Ramesh Kumawatt', 'Anoop Singh', 'Priya Singh', 'Amit Kumar', 'Vivek Kumar Anuj', 'Suryanshu Mankotia', 'Mohd Muhib', 'Pankaj Kumar', 'Farhan Ahmad', 'Deepanshu Rawat', 'Prashant Kashyap', 'Chirag Ahuja', 'Ayush Mishra', 'Jai Prakash', 'Hem Singh', 'Pankaj Kasaudhan', 'Md Asif Iqbal', 'Gurmeet Singh', 'Sumit Kumar', 'Dileep Kumar', 'Tabish Ashfaque', 'Arti Singh', 'Abhijeet Kumar', 'Mohammad Sarfaraz', 'Sonam Kumari', 'Rohit', 'Faisal', 'Shivam Kumar', 'Mohd Musab Khan', 'Jayki Kumar', 'Pankaj Upadhayay', 'Md. Asif Ali Zahur', 'Mohd Hammad', 'Ch L Deepak', 'Gunjan', 'Shivangi', 'Megha Singh', 'Sonam Singh', 'Gourav Sain', 'Ashish Kumar', 'Kanhaiya Nath', 'Anish Singh Thakur', 'Deepak Kumar', 'Priya Goyal', 'Pooja', 'Manusha Ray', 'Mohd Akram', 'Salman', 'Md Ekramul', 'Rahul Kumar Soni', 'Deepali Srivastava', 'Khursheed Ahmad', 'Fairi', 'Ravindra', 'Rohit', 'Vipin Kumar', 'Rachit Mishra', 'Lalchnd', 'Abhishek Kumar', 'Anam Malik', 'Rohit Negi', 'Sakshi', 'Diksha', 'Aryan Gupta', 'Shahbaaj Akhtar', 'Rajan Sharma', 'Bhawesh Bhandari', 'Sunaina', 'Ritika', 'Neeraj', 'Deepali Singh', 'Md. Aarif Ansari', 'Neha Rani', 'Ruchi', 'Deepak Garg', 'Sanjay Kumar', 'Radhika', 'Amir Khan', 'Sandhya', 'Dwarikadhish Prachi', 'Shashank', 'Kulbushan Raina'];



const cricketRoles = [
  'Captain', 
  'Batsman', 'Batsman', 'Batsman',
  'Bowler', 'Bowler', 'Bowler', 'Bowler',
  'All-rounder', 'All-rounder', 'All-rounder'
];

export const participants: Participant[] = [
  // Dark Knights

  ...cricketNamesDarkKnights.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Dark Knights' as const,
    category: 'Cricket' as const,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),

  ...tugOfWarNamesDarkKnights.map((name, i) => ({
    id: `bb-tug-${i+1}`,
    name: name,
    team: 'Dark Knights' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
  })),

  // ...[...Array(11)].map((_, i) => ({
  //   id: `bb-cricket-${i+1}`,
  //   name: `BB Cricket Player ${i+1}`,
  //   team: 'Dark Knights' as const,
  //   category: 'Cricket' as const,
  //   role: i === 0 ? 'Captain' : i < 4 ? 'Batsman' : i < 8 ? 'Bowler' : 'All-rounder',
  //   avatar: `https://i.pravatar.cc/150?u=bb-cricket-${i+1}`
  // })),

  // ...[...Array(8)].map((_, i) => ({
  //   id: `bb-tug-${i+1}`,
  //   name: `BB Tug Player ${i+1}`,
  //   team: 'Dark Knights' as const,
  //   category: 'Tug of War' as const,
  //   role: i === 0 ? 'Anchor' : 'Puller',
  //   avatar: `https://i.pravatar.cc/150?u=bb-tug-${i+1}`
  // })),

  // ...[...Array(4)].map((_, i) => ({
  //   id: `bb-volunteer-${i+1}`,
  //   name: `BB Volunteer ${i+1}`,
  //   team: 'Dark Knights' as const,
  //   category: 'Volunteer' as const,
  //   role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics'][i],
  //   avatar: `https://i.pravatar.cc/150?u=bb-volunteer-${i+1}`
  // })),
  // ...[...Array(12)].map((_, i) => ({
  //   id: `bb-general-${i+1}`,
  //   name: `BB Member ${i+1}`,
  //   team: 'Dark Knights' as const,
  //   category: 'General' as const,
  //   avatar: `https://i.pravatar.cc/150?u=bb-general-${i+1}`
  // })),
  ...volunteerNamesDarkKnights.map((name, i) => ({
    id: `bb-volunteer-${i+1}`,
    name: name,
    team: 'Dark Knights' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics'][i],
  })),
  ...generalNamesDarkKnights.map((name, i) => ({
    id: `bb-general-${i+1}`,
    name: name,
    team: 'Dark Knights' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=bb-general-${i+1}`
  })),


  // Eagle Warriors
  ...cricketNamesEagleWarriors.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as const,
    category: 'Cricket' as const,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),


  ...tugOfWarNamesEagleWarriors.map((name, i) => ({
    id: `ss-tug-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
  })),
  ...volunteerNamesEagleWarriors.map((name, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
  })),
  ...generalNamesEagleWarriors.map((name, i) => ({
    id: `ss-general-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=ss-general-${i+1}`
  })),

  // Royal Strikers
  ...cricketNamesRoyalStrikers.map((name, i) => ({
    id: `rs-cricket-${i+1}`,
    name: name,
    team: 'Royal Strikers' as const,
    category: 'Cricket' as const,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',  
    avatar: `https://i.pravatar.cc/150?u=rs-cricket-${i+1}`
  })),
  ...tugOfWarNamesRoyalStrikers.map((name, i) => ({
    id: `rs-tug-${i+1}`,
    name: name,
    team: 'Royal Strikers' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',
    avatar: `https://i.pravatar.cc/150?u=rs-tug-${i+1}`
  })),
  ...volunteerNamesRoyalStrikers.map((name, i) => ({
    id: `rs-volunteer-${i+1}`,  
    name: name,
    team: 'Royal Strikers' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
    avatar: `https://i.pravatar.cc/150?u=rs-volunteer-${i+1}`
  })),  
  ...generalNamesRoyalStrikers.map((name, i) => ({
    id: `rs-general-${i+1}`,
    name: name,
    team: 'Royal Strikers' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=rs-general-${i+1}`
  })),  

  // Supreme Spartans
  ...cricketNamesSupremeSpartans.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as const,
    category: 'Cricket' as const,
    role: cricketRoles[i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder',
    avatar: `https://i.pravatar.cc/150?u=ss-cricket-${i+1}`
  })),
  ...tugOfWarNamesSupremeSpartans.map((name, i) => ({
    id: `ss-tug-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as const,
    category: 'Tug of War' as const,
    role: i === 0 ? 'Anchor' : 'Puller',  
    avatar: `https://i.pravatar.cc/150?u=ss-tug-${i+1}`
  })),
  ...volunteerNamesSupremeSpartans.map((name, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as const,
    category: 'Volunteer' as const,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Photographer', 'Social Media', 'Designer'][i],
    avatar: `https://i.pravatar.cc/150?u=ss-volunteer-${i+1}`
  })),
  ...generalNamesSupremeSpartans.map((name, i) => ({
    id: `ss-general-${i+1}`,
    name: name, 
    team: 'Supreme Spartans' as const,
    category: 'General' as const,
    avatar: `https://i.pravatar.cc/150?u=ss-general-${i+1}`
  })),
];
