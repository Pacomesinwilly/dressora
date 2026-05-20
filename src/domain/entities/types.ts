export type ActiveTab = 'dashboard' | 'listings' | 'visits' | 'leads' | 'commissions' | 'guest_portal' | 'vault';

export interface PropertyListing {
  id: string;
  title: string;
  price: number;
  surface: number;
  description: string;
  exactAddress: string;
  city: string;
  images: string[];
  coverImage: string;
  status: 'active' | 'pending' | 'draft';
  createdDate: string;
}

export interface LeadActivity {
  id: string;
  type: 'call' | 'email' | 'whatsapp' | 'note';
  title: string;
  description: string;
  date: string;
  duration?: string;
  extra?: string; // e.g. "Opened 3x"
}

export interface Lead {
  id: string;
  name: string;
  status: 'chaud' | 'tiede' | 'froid';
  company: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  score: number;
  engagement: 'High' | 'Medium' | 'Low';
  timelineDays: number;
  interestProperty: {
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    baths: number;
    image: string;
    description: string;
  };
  notes: string;
  activities: LeadActivity[];
  qualification: {
    source: string;
    budget: string;
    language: string;
    assignedAgent: string;
  };
}

export interface VisitAppointment {
  id: string;
  leadId: string;
  leadName: string;
  propertyName: string;
  propertyLocation: string;
  image: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g. "14:00"
  status: 'confirmed' | 'pending' | 'canceled';
}

export interface TransferStep {
  label: string;
  date: string;
  time: string;
  completed: boolean;
}

export interface TransactionDetails {
  id: string;
  title: string;
  propertyTitle: string;
  address: string;
  recipientName: string;
  recipientAvatar: string;
  recipientSince: string;
  amount: number;
  platformCommission: number; // in %
  platformCommissionAmount: number;
  netReceived: number;
  receivedDate: string;
  status: 'vire' | 'en_cours' | 'suspendu';
  transferSteps: TransferStep[];
}
