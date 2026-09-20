export type UrgencyLevel = 'Critical Lafda' | 'High Urgency' | 'Moderate';

export interface CivicIssue {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  location: string;
  votes: number;
  urgency: UrgencyLevel;
  mumbaiSlangQuote: string;
  department: string;
  description: string;
  lastUpdated: string;
  resolutionStatus: string;
}

export interface WardOfficial {
  id: string;
  role: string;
  title: string;
  department: string;
  jurisdiction: string;
  email: string;
  phone: string;
  location: string;
  slangRole: string;
  badgeText: string;
}

export interface StepGuide {
  stepNumber: string;
  title: string;
  mumbaiSlang: string;
  badge: string;
  description: string;
  actionLabel: string;
  actionUrl?: string;
  actionType: 'link' | 'phone' | 'scroll';
  bulletPoints: string[];
  proTip: string;
}

export interface ComplaintFormData {
  issueType: string;
  customIssueTitle: string;
  residentName: string;
  roadLocality: string;
  landmark: string;
  contactNumber: string;
  societyName: string;
  urgency: string;
}
