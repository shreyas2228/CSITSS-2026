// ==========================================================================
// CENTRAL COMMITTEE DATA: ICRTEC 2027
// The National Institute of Engineering (NIE), Mysuru
// ==========================================================================

import { conferenceData } from './conferenceData';

export const COMMITTEE_CATEGORIES = [
  { id: "all", name: "All Committees", icon: "Users" },
  { id: "patrons", name: "Patrons & Leadership", icon: "Award" },
  { id: "chairs", name: "Conference Chairs", icon: "Shield" },
  { id: "advisory", name: "Advisory Committee", icon: "Star" },
  { id: "oversight", name: "Oversight Committee", icon: "CheckCircle" },
  { id: "technical", name: "Technical Program", icon: "Code" },
  { id: "tracks", name: "Track Chairs", icon: "Compass" },
  { id: "publication", name: "Publication Committee", icon: "BookOpen" },
  { id: "registration", name: "Registration Committee", icon: "UserCheck" },
  { id: "foreign", name: "Foreign Delegates & Keynotes", icon: "Globe" },
  { id: "website", name: "Website Committee", icon: "Monitor" },
  { id: "logistics", name: "Logistics Committee", icon: "Truck" }
];

export const COMMITTEE_MEMBERS = conferenceData.committee;
