import { PropertyListing, Lead, VisitAppointment, TransactionDetails } from '../../domain/entities/types';

export const INITIAL_LISTINGS: PropertyListing[] = [
  {
    id: 'prop-1',
    title: 'Villa Terracotta Reserve',
    price: 2450000,
    surface: 320,
    description: 'Une somptueuse villa de luxe nichée au cœur d’un domaine viticole, offrant des prestations haut de gamme avec des matériaux nobles, pierres de taille, piscine à débordement et vue panoramique imprenable.',
    exactAddress: '12 Boulevard de la Croisette',
    city: 'Cannes',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    createdDate: '2023-09-12'
  },
  {
    id: 'prop-2',
    title: 'The Azure Penthouse',
    price: 4250000,
    surface: 280,
    description: 'Penthouse d’exception offrant une vue spectaculaire à 360 degrés sur la ville. Baies vitrées du sol au plafond, terrasse privative de 80m² et concierge 24/7.',
    exactAddress: '42 West Village Court',
    city: 'New York, NY',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    createdDate: '2023-10-05'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-john',
    name: 'John Doe',
    status: 'chaud',
    company: 'International Tech',
    title: 'Executive',
    location: 'London, UK',
    email: 'john.doe@techcorp.com',
    phone: '+44 7700 900077',
    score: 94,
    engagement: 'High',
    timelineDays: 30,
    interestProperty: {
      title: 'Villa Terracotta',
      price: 4250000,
      location: 'Tuscany, Italy',
      bedrooms: 5,
      baths: 4.5,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      description: 'John specifically inquired about the south-facing terrace and the private wine cellar. He is looking for a secondary residence that can host large family gatherings.'
    },
    notes: 'Inquired about absolute privacy, private vineyard integration, and security arrangements. Multi-lingual staff preference.',
    activities: [
      {
        id: 'act-1',
        type: 'call',
        title: 'Outgoing Call',
        description: 'Discussed property taxes and maintenance fees.',
        date: 'Today, 10:30 AM',
        duration: '12m 40s'
      },
      {
        id: 'act-2',
        type: 'email',
        title: 'Email Sent',
        description: 'Sent high-resolution floor plans and virtual tour link for Villa Terracotta.',
        date: 'Yesterday, 4:15 PM',
        extra: 'Opened 3x'
      },
      {
        id: 'act-3',
        type: 'whatsapp',
        title: 'WhatsApp Message',
        description: '"Thank you for the quick response. The floor plans look perfect."',
        date: 'Oct 12, 11:20 AM'
      }
    ],
    qualification: {
      source: 'Referral',
      budget: '$4M – $6M',
      language: 'English, French',
      assignedAgent: 'Me'
    }
  },
  {
    id: 'lead-jean-pierre',
    name: 'Jean-Pierre Dubois',
    status: 'chaud',
    company: 'Alliance Capital',
    title: 'Directeur Associé',
    location: 'Paris, France',
    email: 'jp.dubois@alliance.fr',
    phone: '+33 6 1234 5678',
    score: 92,
    engagement: 'High',
    timelineDays: 14,
    interestProperty: {
      title: 'Villa Terracotta Reserve',
      price: 2450000,
      location: 'Cannes, France',
      bedrooms: 6,
      baths: 6,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'Recherche une résidence secondaire pour la saison estivale. Intéressé par l’accès direct à la mer et un ponton privé d’amarrage.'
    },
    notes: 'A besoin d’un dossier complet pour la holding d’achat avant vendredi prochain.',
    activities: [
      {
        id: 'act-jp-1',
        type: 'call',
        title: 'Appel Sortant',
        description: 'Confirmation de l’intérêt et prise de contact initiale.',
        date: 'Hier, 14:30',
        duration: '5m 12s'
      }
    ],
    qualification: {
      source: 'Direct Client',
      budget: '€2.5M – €3M',
      language: 'French, Italian',
      assignedAgent: 'Me'
    }
  },
  {
    id: 'lead-sophie',
    name: 'Sophie Laroche',
    status: 'froid',
    company: 'Lux Design',
    title: 'Fondatrice',
    location: 'Lyon, France',
    email: 'sophie@luxdesign.co',
    phone: '+33 6 9876 5432',
    score: 45,
    engagement: 'Low',
    timelineDays: 60,
    interestProperty: {
      title: 'Appartement Quai de Seine',
      price: 1850000,
      location: 'Paris, France',
      bedrooms: 2,
      baths: 2,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      description: 'Recherche un pied-à-terre d’artiste de style Haussmannien avec balcon filant sur la Seine.'
    },
    notes: 'Peu réactive aux e-mails de relance automatique. Prévoir contact de courtoisie.',
    activities: [
      {
        id: 'act-s-1',
        type: 'email',
        title: 'Email de relance automatique',
        description: 'Relance concernant la baisse de prix potentielle de l’appartement.',
        date: 'Il y a 12 jours'
      }
    ],
    qualification: {
      source: 'Formulaire Web',
      budget: '€1.5M – €2M',
      language: 'French, English',
      assignedAgent: 'Me'
    }
  },
  {
    id: 'lead-marc',
    name: 'Marc Lefebvre',
    status: 'tiede',
    company: 'Scribe SAS',
    title: 'Directeur Technique',
    location: 'Bordeaux, France',
    email: 'marc.l@scribe.tech',
    phone: '+33 6 4455 6677',
    score: 72,
    engagement: 'Medium',
    timelineDays: 45,
    interestProperty: {
      title: 'Penthouse Azure Sky',
      price: 2100000,
      location: 'Cannes, France',
      bedrooms: 3,
      baths: 3,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      description: 'Marc s’intéresse à la terrasse de 40m², en attente active de confirmation écrite du financement bancaire.'
    },
    notes: 'A visité en visio-conférence guidée le 10 octobre. Très enthousiaste vis-à-vis des finitions en marbre de Carrare.',
    activities: [
      {
        id: 'act-m-1',
        type: 'call',
        title: 'Appel de Suivi',
        description: 'Le point sur l’accord de principe de la banque.',
        date: 'Il y a 3 jours',
        duration: '8m 44s'
      }
    ],
    qualification: {
      source: 'Instagram Lead ADS',
      budget: '€1.8M – €2.2M',
      language: 'French',
      assignedAgent: 'Me'
    }
  }
];

export const INITIAL_VISITS: VisitAppointment[] = [
  {
    id: 'ap-1',
    leadId: 'lead-eleanor',
    leadName: 'Eleanor Vance',
    propertyName: 'The Azure Penthouse',
    propertyLocation: 'West Village, NY',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    date: '2026-05-05',
    time: '14:00',
    status: 'confirmed'
  }
];

export const INITIAL_TRANSACTIONS: TransactionDetails[] = [
  {
    id: 'pay-82910',
    title: 'Loyer Mensuel - Octobre 2023',
    propertyTitle: 'Appartement Haussmannien',
    address: '12 Rue de Rivoli, Paris',
    recipientName: 'Marc-Antoine D.',
    recipientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    recipientSince: 'Janv. 2022',
    amount: 2450.00,
    platformCommission: 5.0,
    platformCommissionAmount: 122.50,
    netReceived: 2327.50,
    receivedDate: '05 Octobre 2023',
    status: 'vire',
    transferSteps: [
      { label: 'Paiement initié par le locataire', date: '01 Octobre 2023', time: '09:12', completed: true },
      { label: 'Fonds sécurisés sur compte tiers', date: '02 Octobre 2023', time: '14:45', completed: true },
      { label: 'Virement vers votre compte', date: '05 Octobre 2023', time: '10:20', completed: true }
    ]
  }
];
