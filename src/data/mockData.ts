
import { Participant, TeamData, Team, Category } from '../types';

// Define all the name arrays that were referenced but not defined
const cricketNamesKnightVipers = ['Gaurav Bhandhari (C)', 'Shubham Rawat (VC)', 'Rakshit', 'Ravi Kumar', 'Md. Ragib', 'Sachin Negi', 'Raman Kumar', 'Mustaqeem', 'Shoeb Akhtar', 'Gaurav Joshi', 'Zaheer','Tarun Sharma','Ramkishan','Sanjay','Bittu Kumar'];
const tugOfWarNamesKnightVipers = [
  "Arvind Mehta", "Praveen Kumar", "Harish Tiwari", "Dinesh Shukla", 
  "Manoj Khanna", "Nitin Sharma", "Amit Singh", "Vinod Patel"
];
const volunteerNamesKnightVipers = [ "Vipul Agarwal", "Prateek Sharma", "Kunal Joshi", "Naveen Gupta"];
const generalNamesKnightVipers = ['Anish Verma', 'Prakash Barkhane', 'RAVIKUMAR SINGH', 'SUBODH SUNDRIYAL', 'Mustaqeem khan', 'Bittu Kumar', 'Manu Kumar', 'Gaurav Bhatt', 'Shalini', 'Tarun sharma', 'Tarun sharma', 'Rohit gupta', 'Maya Chaurasia', 'Raman Khohal', 'Mayank Pandey', 'Anagha Jagdale', 'Ramkishan', 'Manisha chahal', 'Pritesh ranjan', 'Keshav Suman', 'ARNAB HATI', 'Zahir hussain', 'Sachin Kumar Singh', 'Shivani karnwal', 'SHITALA PRASAD MAURYA', 'Sachin negi', 'Rakshit Pandey', 'Bhuwan Chandra pant', 'Md shoaib akhtar', 'Azam Ahmad', 'Gaurav Joshi', 'Piyush Chauhan', 'Mohd Ragib', 'Jatin kaushal', 'Rajeev Ranjan', 'Shubham Rawat', 'Sanjay Kumar', 'Deeksha', 'Gunjan chand', 'Soni', 'Aditya singh', 'Sadhna kuamri', 'Sakshi', 'Kshitij Prakash', 'Rohit kumar', 'Mohd Kabir', 'Neha Rani', 'Ruchi', 'Dwarikadhish prachi', 'Gaurav bhandari', 'Gaurav Singh', 'Deepika pareek', 'Pooja pareek', 'Amit Yaduvanshi', 'Ashutosh kumar', 'Saurabh Sharma', 'ASHFAQ AHMED', 'Monika Sharma', 'Amresh Kumar', 'Chetna', 'Utkarsh singh', 'Krishna Singh', 'Vivek Bharti'];
const SportsKnightVipers =['test','name'];

const cricketNamesEagleWarriors = ['Amir Khan', 'Gaurav Negi', 'Vinay Bhardwaj', 'Manoj Chopal', 'Farjan', 'Neeraj Kumar', 'Sumit Negi', 'Yash', 'Yavnish Gautam', 'Aniket Kumar', 'Sarfaraz', 'Ganesh Aggarwal', 'Abdul', 'Prince Nishad', 'Arnav Pandey'];
const tugOfWarNamesEagleWarriors = [
  "Balu Krishna", "Harish Menon", "Santhosh Nair", "Rajesh Kurup", 
  "Mohan Das", "Vivek Pillai", "Arun Nair", "Vinod Menon"
];
const volunteerNamesEagleWarriors = ['Lalit Chauhan ', 'Anam Malik', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh', 'Rajesh'];
const generalNamesEagleWarriors = ['Jacky', 'Prince Nishad', 'Ankit Yadav', 'Deepu', 'Swati', 'Rohit Kandpal', 'Abdul Taukeer', 'Sangeeta Rawat', 'Vikas Ahiwal', 'Krishna Rajput', 'Abhishek Verma', 'Raj Singh', 'Yavnish Gautam', 'Aniket Kumar', 'Aman', 'Junaid', 'Sumyra Masood', 'Hasan', 'Ajay Kumar', 'Archita', 'Farjan Khan', 'Khushboo Sharma', 'Sachin Sharma', 'Hasan', 'Amit', 'Gulafsha Parween', 'Neeraj', 'Sukh Kumar', 'Lalit Chauhan', 'Prashant', 'Asheer Rizvi', 'Komal Verma', 'Amees Khan', 'Sarfraj Alam', 'Ankita Choudhary', 'Aman Kumar', 'Ganesh Agrawal', 'Shivani Rani', 'Preeti Yadav', 'Sruti Rekha Satapathy', 'Ajay Kumar Sah', 'Nisha Sharma', 'Preeti', 'Manoj Singh Chuphal', 'Km Usha', 'Mohit Saini', 'Vishakha', 'Tulsi', 'Kamal Kumar', 'Ritik Pandey', 'Sumit Negi', 'Harsh Saxena', 'Chandrakanta Arya', 'Himanshu Kandpal', 'Sumit Singh Rawat', 'Anmol', 'Mohd Siraj', 'Khushboo Prajapati', 'Surbhi'];
const SportsEagleWarriors =['Jagdeep', 'Sameer Sharma', 'Sagar Kumar', 'Ankit Goyat'];

const cricketNamesRoyalStrikers = ['Tushar Tyagi', 'Samshul Ali', 'Manish Kumar', 'Kuldeep Varun', 'Hammad Hassan', 'Neeraj Saraswat', 'Himanshu Pal', 'Sarik Alam', 'Atul Rawat', 'Ravi Sharma', 'Mukesh Khan', 'Rupesh', 'Devesh', 'Anshul Kulshresta', 'Yogesh Rawat'];
const tugOfWarNamesRoyalStrikers = [
  "Rahul Bhatia", "Vikas Kapoor", "Neeraj Sinha", "Sameer Khanna", 
  "Rajan Malhotra", "Anuj Dhawan", "Tarun Mehta", "Deepak Arora"
];
const volunteerNamesRoyalStrikers = [
  "Vishal Sinha", "Ajay Kapoor", "Saurabh Khanna", "Rajat Malhotra", 
  "Vineet Dhawan"
];
const generalNamesRoyalStrikers = ['Neenanjali', 'Wairokpam Ogaka', 'Jagdeep', 'Sameer Sharma', 'Sagar Kumar', 'Ankit Goyat', 'Ravi Sharma', 'Gajendra Singh', 'Nisha', 'Arjun Kumar', 'Dilnawaz Ahmad', 'Abhishek Gaur', 'Kuldeep Kumar Varun', 'Satyapal Singh', 'Rajdeepak Gupta', 'Suraj Prajapati', 'Atul Rawat', 'Abdul Karim Ansari', 'Tushar Kant', 'Aman Srivastava', 'Manish Kumar', 'Tushar Tyagi', 'Rajnish Pal', 'Ajay Pandey', 'Yogesh Rawat', 'Ravi Kumar Jaiswal', 'Tanuj Sharma', 'Pramod Dhoundiyal', 'Praveen', 'Yogesh', 'Sharique', 'Sam Siddiqui', 'Nisha', 'Preeti Rautela', 'Mansi Bhainsora', 'Neeraj Saraswat', 'Mukeet Khan', 'Devesh Al', 'Hammad Hassan', 'Surya', 'Shubham Verma', 'Vinod Kumar', 'Sachin Singh Rathore (S.S. Rathore)', 'Aastha Mishra', 'Nitilesh Kumar', 'Akash Kumar', 'Hitesh Kumar', 'Sunil Rajbhor', 'Sonali', 'Imtiyaj', 'Aman Kumar', 'Akash', 'Ajab Singh', 'Suman', 'Himanshu Sisodiya', 'Bhagwandas', 'Amit Kumar', 'Yogesh Kumar', 'Aman', 'Nishita Rohilla', 'Monika', 'Himanshu Kumar', 'Adarsh Sharma', 'Nitin Dwivedi', 'Poonam', 'Ankit Singh', 'Sagar Sharma', 'Md Asif Hussain', 'Sanjana Singh', 'Anshul Kulshrestha', 'Rupesh Singh', 'Urvashi', 'Ashwani Dubeydi'];
const SportsRoyalStrikers =['Jagdeep', 'Sameer Sharma', 'Sagar Kumar', 'Ankit Goyat'];

const cricketNamesSupremeSpartans = ['Chirag Vijay Ahuja', 'Muhib', 'Prshant Kashyap', 'Arif Ansari', 'Pawan', 'Pankaj Upadhyay', 'Ravindra', 'Ramesh', 'Gurmeet', 'Aneesh', 'Ajay', 'Faizal', 'Neeraj Pandey', 'Hammad', 'Abhishek'];
const tugOfWarNamesSupremeSpartans = [ 'Neeraj Pandey', 'Ramesh Kumawatt', 'Anoop Singh', 'Amit Kumar', 'Vivek Kumar Anuj', 'Suryanshu Mankotia', 'Mohd Muhib', 'Pankaj Kumar', 'Farhan Ahmad', 'Deepanshu Rawat', 'Prashant Kashyap', 'Ayush Mishra', 'Jai Prakash', 'Hem Singh', 'Pankaj Kasaudhan'];
const volunteerNamesSupremeSpartans = ['Suryanshu ', 'Chirag V.', 'Subodh', 'Hem Singh', 'Abhijeet ', 'Pnakaj K.'];
const generalNamesSupremeSpartans = ['Puneet Sharma', 'Ruapnshak', 'Neeraj Pandey', 'Charu Rajput', 'Ramesh Kumawatt', 'Anoop Singh', 'Priya Singh', 'Amit Kumar', 'Vivek Kumar Anuj', 'Suryanshu Mankotia', 'Mohd Muhib', 'Pankaj Kumar', 'Farhan Ahmad', 'Deepanshu Rawat', 'Prashant Kashyap', 'Chirag Ahuja', 'Ayush Mishra', 'Jai Prakash', 'Hem Singh', 'Pankaj Kasaudhan', 'Md Asif Iqbal', 'Gurmeet Singh', 'Sumit Kumar', 'Dileep Kumar', 'Tabish Ashfaque', 'Arti Singh', 'Abhijeet Kumar', 'Mohammad Sarfaraz', 'Sonam Kumari', 'Rohit', 'Faisal', 'Shivam Kumar', 'Mohd Musab Khan', 'Jayki Kumar', 'Pankaj Upadhayay', 'Md. Asif Ali Zahur', 'Mohd Hammad', 'Ch L Deepak', 'Gunjan', 'Shivangi', 'Megha Singh', 'Sonam Singh', 'Gourav Sain', 'Ashish Kumar', 'Kanhaiya Nath', 'Anish Singh Thakur', 'Deepak Kumar', 'Priya Goyal', 'Pooja', 'Manusha Ray', 'Mohd Akram', 'Salman', 'Md Ekramul', 'Rahul Kumar Soni', 'Deepali Srivastava', 'Khursheed Ahmad', 'Fairi', 'Ravindra', 'Rohit', 'Vipin Kumar', 'Rachit Mishra', 'Lalchnd', 'Abhishek Kumar', 'Anam Malik', 'Rohit Negi', 'Sakshi', 'Diksha', 'Aryan Gupta', 'Shahbaaj Akhtar', 'Rajan Sharma', 'Bhawesh Bhandari', 'Sunaina', 'Ritika', 'Neeraj', 'Deepali Singh', 'Md. Aarif Ansari', 'Neha Rani', 'Ruchi', 'Deepak Garg', 'Sanjay Kumar', 'Radhika', 'Amir Khan', 'Sandhya', 'Dwarikadhish Prachi', 'Shashank', 'Kulbushan Raina'];
const SportsSupremeSpartans =['asssa','sasas'];

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
    color: 'from-amber-500 to-amber-700', // Updated to match gold/yellow theme
    logo: '⚔️',
    backgroundColor: 'bg-team-design/10',
    textColor: 'text-team-design',
    flagColor: 'text-amber-500', // Updated to match flag
    flagBackground: 'bg-amber-400', // Updated to match flag background
    flagSymbol: 'spartan-helm',
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
  ...cricketNamesKnightVipers.map((name, i) => ({
    id: `kv-cricket-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Cricket' as Category,
    role: i === 0 ? 'Captain' : (i === 1 ? 'Vice Captain' : cricketRoles[i > 1 ? i-1 : i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder'),
    // No avatar provided - will use generated one from participant card
  })),

  ...tugOfWarNamesKnightVipers.map((name, i) => ({
    id: `kv-tug-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
    // No avatar provided - will use generated one from participant card
  })),

  ...volunteerNamesKnightVipers.map((name, i) => ({
    id: `kv-volunteer-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics'][i],
    // No avatar provided - will use generated one from participant card
  })),
  
  ...SportsKnightVipers.map((name, i) => ({
    id: `kv-sports-${i+1}`, 
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'Sports' as Category,
    role: 'Lemon Race Participant',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...generalNamesKnightVipers.map((name, i) => ({
    id: `kv-general-${i+1}`,
    name: name,
    team: 'Knight Vipers' as Team,
    category: 'General' as Category,
    // No avatar provided - will use generated one from participant card
  })),

  // Eagle Warriors
  ...cricketNamesEagleWarriors.map((name, i) => ({
    id: `ew-cricket-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Cricket' as Category,
    role: i === 0 ? 'Captain' : (i === 1 ? 'Vice Captain' : cricketRoles[i > 1 ? i-1 : i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder'),
    // No avatar provided - will use generated one from participant card
  })),

  ...tugOfWarNamesEagleWarriors.map((name, i) => ({
    id: `ew-tug-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...volunteerNamesEagleWarriors.map((name, i) => ({
    id: `ew-volunteer-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i % 5],
    // No avatar provided - will use generated one from participant card
  })),
  
  ...SportsEagleWarriors.map((name, i) => ({
    id: `ew-sports-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'Sports' as Category,
    role: 'Lemon Race Participant',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...generalNamesEagleWarriors.map((name, i) => ({
    id: `ew-general-${i+1}`,
    name: name,
    team: 'Eagle Warriors' as Team,
    category: 'General' as Category,
    // No avatar provided - will use generated one from participant card
  })),

  // Royal Strikers
  ...cricketNamesRoyalStrikers.map((name, i) => ({
    id: `rs-cricket-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Cricket' as Category,
    role: i === 0 ? 'Captain' : (i === 1 ? 'Vice Captain' : cricketRoles[i > 1 ? i-1 : i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder'),
    // No avatar provided - will use generated one from participant card
  })),
  
  ...tugOfWarNamesRoyalStrikers.map((name, i) => ({
    id: `rs-tug-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...volunteerNamesRoyalStrikers.map((name, i) => ({
    id: `rs-volunteer-${i+1}`,  
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Announcer'][i],
    // No avatar provided - will use generated one from participant card
  })),
  
  ...SportsRoyalStrikers.map((name, i) => ({
    id: `rs-sports-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'Sports' as Category,
    role: 'Lemon Race Participant',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...generalNamesRoyalStrikers.map((name, i) => ({
    id: `rs-general-${i+1}`,
    name: name,
    team: 'Royal Strikers' as Team,
    category: 'General' as Category,
    // No avatar provided - will use generated one from participant card
  })),

  // Supreme Spartans
  ...cricketNamesSupremeSpartans.map((name, i) => ({
    id: `ss-cricket-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Cricket' as Category,
    role: i === 0 ? 'Captain' : (i === 1 ? 'Vice Captain' : cricketRoles[i > 1 ? i-1 : i] as 'Captain' | 'Batsman' | 'Bowler' | 'All-rounder'),
    // No avatar provided - will use generated one from participant card
  })),
  
  ...tugOfWarNamesSupremeSpartans.map((name, i) => ({
    id: `ss-tug-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Tug of War' as Category,
    role: i === 0 ? 'Anchor' : 'Puller',  
    // No avatar provided - will use generated one from participant card
  })),
  
  ...volunteerNamesSupremeSpartans.map((name, i) => ({
    id: `ss-volunteer-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Volunteer' as Category,
    role: ['Coordinator', 'Assistant', 'Support Staff', 'Logistics', 'Photographer', 'Social Media'][i],
    // No avatar provided - will use generated one from participant card
  })),
  
  ...SportsSupremeSpartans.map((name, i) => ({
    id: `ss-sports-${i+1}`,
    name: name,
    team: 'Supreme Spartans' as Team,
    category: 'Sports' as Category,
    role: 'Lemon Race Participant',
    // No avatar provided - will use generated one from participant card
  })),
  
  ...generalNamesSupremeSpartans.map((name, i) => ({
    id: `ss-general-${i+1}`,
    name: name, 
    team: 'Supreme Spartans' as Team,
    category: 'General' as Category,
    // No avatar provided - will use generated one from participant card
  })),
];
