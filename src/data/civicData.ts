import { CivicIssue, WardOfficial, StepGuide } from '../types';

export const INITIAL_ISSUES: CivicIssue[] = [
  {
    id: 'khar-subway',
    title: 'Khar Subway Waterlogging',
    badge: 'Monsoon Special Lafda',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
    location: 'Khar Subway',
    votes: 418,
    urgency: 'Critical Lafda',
    mumbaiSlangQuote: 'Ek jhatke mein swimming pool bann jata hai boss! Rickshaws stuck, entire S.V. Road choked!',
    department: 'Storm Water Drains (SWD) & Roads Maintenance',
    description: 'Severe waterlogging during peak rains rendering the subway impassable for vehicles and pedestrians. Ineffective dewatering pumps cause 3+ hour traffic snarls connecting SV Road to Western Express Highway.',
    lastUpdated: 'Updated 20 mins ago',
    resolutionStatus: 'High Urgency Grievance'
  },
  {
    id: 'garbage-madhu-park',
    title: 'Garbage Dumping near Madhu Park',
    badge: 'Kachra Alert',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    location: '15th Road',
    votes: 342,
    urgency: 'Critical Lafda',
    mumbaiSlangQuote: 'Kachra Free Zone banana tha, yaha dumping ground bana diya! Need daily compactor round.',
    department: 'Solid Waste Management (SWM) H/West Ward',
    description: 'Persistent open garbage dumping and overflowing municipal bins opposite Madhu Park perimeter. Attracts stray animals and poses severe health and dengue hazards for morning joggers and elderly residents.',
    lastUpdated: 'Updated 1 hour ago',
    resolutionStatus: 'Escalated to SWM Overseer'
  },
  {
    id: 'footpath-linking-road',
    title: 'Footpath Encroachment on Linking Road',
    badge: 'Where to Walk?',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800',
    location: 'Linking Rd',
    votes: 289,
    urgency: 'High Urgency',
    mumbaiSlangQuote: 'Pedestrians walking on main road between speeding BEST buses! Footpath pe dukaan, road pe public!',
    department: 'Encroachment & License Department',
    description: 'Illegal hawkers, unauthorized extended stalls, and parked two-wheelers taking over designated pedestrian walkways from Khar Telephone Exchange to Linking Road junction.',
    lastUpdated: 'Updated 3 hours ago',
    resolutionStatus: 'Ward Inspection Pending'
  },
  {
    id: 'pub-noise-residential',
    title: 'Late Night Pub Noise in Residential Lanes',
    badge: 'Shanti Chahiye',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
    location: '14th-18th Roads',
    votes: 215,
    urgency: 'High Urgency',
    mumbaiSlangQuote: 'Raat ko 2 baje tak heavy bass vibrations! Senior citizens and school kids can’t sleep. No more jhol!',
    department: 'Health/License Dept & Khar Police Division',
    description: 'Commercial rooftop bars and resto-pubs playing loud commercial music and valet parking chaos past official 10:00 PM / 1:30 AM decibel cutoffs in pure residential quiet zones.',
    lastUpdated: 'Updated 5 hours ago',
    resolutionStatus: 'Police & BMC Joint Notice'
  },
  {
    id: 'broken-streetlights-station',
    title: 'Dark Spots / Broken Streetlights',
    badge: 'Light Lagao',
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-950/60 dark:text-yellow-300 dark:border-yellow-800',
    location: 'Khar Station West',
    votes: 187,
    urgency: 'Moderate',
    mumbaiSlangQuote: 'Station road after 9 PM feels like Gotham City! Women safety risk. Jaldi tube lagao!',
    department: 'Mechanical & Electrical (M&E) Division',
    description: 'Multiple sodium/LED street poles defunct along the station approach lane and railway colony boundary wall. Creates hazardous blind spots for commuters returning from local trains at night.',
    lastUpdated: 'Updated yesterday',
    resolutionStatus: 'M&E Dept Ticket Logged'
  }
];

export const WARD_OFFICIALS: WardOfficial[] = [
  {
    id: 'amc',
    role: 'Assistant Municipal Commissioner (H/West)',
    title: 'Overall Ward Boss',
    department: 'Executive Administration & Ward Command',
    jurisdiction: 'Khar West, Bandra West, Santacruz West',
    email: 'assistantcommissioner.hwest@mcgm.gov.in',
    phone: '022-26422311 / 022-26422315',
    location: '2nd Hasnabad Lane, Khar West, Mumbai - 400052',
    slangRole: 'Asli Ward Boss',
    badgeText: 'Highest Escalation Authority'
  },
  {
    id: 'ee-roads',
    role: 'Executive Engineer (Roads & Maintenance)',
    title: 'Pothole & Drainage Dept',
    department: 'Roads, Storm Water Drains & Trenching',
    jurisdiction: 'H/West Ward Road Network',
    email: 'ee.roads.hwest@mcgm.gov.in',
    phone: '022-26422311 (Ext. 204)',
    location: '2nd Hasnabad Lane, Khar West - 400052',
    slangRole: 'Rasta & Pothole Spot-Fixer',
    badgeText: 'Subway, Paver Blocks & Gutters'
  },
  {
    id: 'swm-overseer',
    role: 'SWM Overseer (Solid Waste Management)',
    title: 'Solid Waste & Street Cleaning',
    department: 'Garbage Collection, Compactors & Sweeping',
    jurisdiction: 'All Khar West Sub-sectors (1st to 21st Road)',
    email: 'swm.hwest@mcgm.gov.in',
    phone: '022-26422311 (Ext. 312)',
    location: '2nd Hasnabad Lane, Khar West - 400052',
    slangRole: 'Kachra Mukt Mission Incharge',
    badgeText: 'Dumping Grounds & Daily Lifting'
  },
  {
    id: 'traffic-pi',
    role: 'Senior Traffic Inspector',
    title: 'Khar/Bandra Traffic Division',
    department: 'Mumbai Traffic Police (West Region)',
    jurisdiction: 'SV Road, Linking Road, Khar Subway & Arterial Lanes',
    email: 'traffic.khar@mahapolice.gov.in',
    phone: '022-26006444 / 8454999999',
    location: 'Khar Traffic Police Chowky, S.V. Road Junction',
    slangRole: 'Traffic Jam & No-Parking Warden',
    badgeText: 'Encroachments & Bottlenecks'
  },
  {
    id: 'disaster-helpline',
    role: 'Disaster Management Helpline',
    title: '24x7 Emergency Command Room',
    department: 'Brihanmumbai Municipal Corporation (BMC)',
    jurisdiction: 'Greater Mumbai & H/West Emergency Dispatch',
    email: 'disaster@mcgm.gov.in',
    phone: '1916 (Toll-Free 24x7)',
    location: 'BMC Disaster Control Room, CST & H/West Ward',
    slangRole: 'Emergency Lifeline (24x7)',
    badgeText: 'Flooding, Tree Fall & Building Collapse'
  }
];

export const STEP_GUIDES: StepGuide[] = [
  {
    stepNumber: '01',
    title: 'Download MyBMC App',
    mumbaiSlang: 'Get Official Complaint ID - Pakka Proof!',
    badge: 'Step 1: Digital Registration',
    description: 'Download the official MyBMC 24x7 smartphone application from Google Play or Apple App Store. Register your complaint with GPS coordinates and clear photos to generate an official MCGM Grievance Tracking Number.',
    actionLabel: 'Check MyBMC Portal',
    actionUrl: 'https://portal.mcgm.gov.in',
    actionType: 'link',
    bulletPoints: [
      'Take 2 clear landscape photos with location timestamp enabled',
      'Select Ward: H/West (Khar/Bandra West)',
      'Note down the 10-digit Grievance Ticket ID (e.g. HW/2026/XXXXX)'
    ],
    proTip: 'A Complaint ID is your legal RTI leverage. Without a ticket ID, verbal requests usually get lost in municipal red tape!'
  },
  {
    stepNumber: '02',
    title: 'Dial 1916 Helpline',
    mumbaiSlang: 'Immediate Monsoon & Kachra Action!',
    badge: 'Step 2: Rapid Phone Escalation',
    description: 'For immediate waterlogging at Khar Subway, open manholes, fallen tree branches, or chronic burning garbage, dial the BMC 24x7 Central Disaster Line 1916. Calls are recorded and routed directly to the H/West Ward Control Desk.',
    actionLabel: 'Call 1916 Directly',
    actionUrl: 'tel:1916',
    actionType: 'phone',
    bulletPoints: [
      'Available 24x7 in Marathi, Hindi, and English',
      'Specify exact Khar West crossroad (e.g. "Opposite Madhu Park, 15th Road")',
      'Ask the operator for their operator name & dispatch log number'
    ],
    proTip: 'If calling during heavy monsoon downpours, mention if ambulance or school bus transit is blocked—it triggers Priority 1 response!'
  },
  {
    stepNumber: '03',
    title: 'Send Formal Email to H/West AMC',
    mumbaiSlang: 'Use Built-In Letter Generator - Direct to Ward Boss!',
    badge: 'Step 3: Executive Escalation',
    description: 'When routine complaints sit untouched for over 48 hours, escalate directly to the Assistant Municipal Commissioner of H/West. Use our tailored legal/civic draft generator below to craft a legally sound, courteous yet firm grievance letter.',
    actionLabel: 'Jump to Letter Generator',
    actionType: 'scroll',
    bulletPoints: [
      'Auto-addressed to assistantcommissioner.hwest@mcgm.gov.in',
      'Includes BMC Citizen Charter turnaround deadlines',
      'Pre-formatted with local Khar landmarks and citizen signature'
    ],
    proTip: 'CC your Advanced Locality Management (ALM) group or residents association. Joint emails carry 10x civic weight!'
  }
];

export const KHAR_ROADS = [
  '1st Road, Khar West',
  '3rd Road, near Khar Station',
  '5th Road, off S.V. Road',
  '11th Road, Khar West',
  '13th Road, near Hinduja Healthcare',
  '14th Road, Residential Zone',
  '15th Road, Madhu Park Area',
  '16th Road, Khar West',
  '17th Road, Khar West',
  '18th Road, Khar West',
  '21st Road, Khar Danda Link',
  'Khar Subway & Approach Road',
  'Linking Road (Near Khar Telephone Exchange)',
  'S.V. Road (Khar West stretch)',
  '2nd Hasnabad Lane',
  'Dr. Ambedkar Road, Khar West',
  'Ahinsa Marg / Chitrakar Dhurandhar Marg'
];
