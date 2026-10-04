import React, { useEffect, useState } from 'react';
import Landing from './pages/Landing';
import AgentLayout from './layouts/AgentLayout';
import ClientLayout from './layouts/ClientLayout';
import GuestLayout from './layouts/GuestLayout';
import LoginScreen from './views/auth/LoginScreen';
import { PropertyListing, Lead } from './domain/entities/types';
import { INITIAL_LISTINGS, INITIAL_LEADS } from './infrastructure/mock/mockData';
import { ensureDemoUsers } from './lib/auth';
import { fetchPublicProperties } from './lib/api';

if (typeof window !== 'undefined') {
  ensureDemoUsers();
}

export default function App() {
  const [selectedActor, setSelectedActor] = useState<'agent' | 'client' | 'guest' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [listings, setListings] = useState<PropertyListing[]>(INITIAL_LISTINGS);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);

  useEffect(() => {
    let cancelled = false;

    const loadRemoteListings = async () => {
      const remoteListings = await fetchPublicProperties();
      if (!cancelled && remoteListings && remoteListings.length > 0) {
        setListings(remoteListings);
      }
    };

    void loadRemoteListings();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleAddProperty = (newProp: PropertyListing) => setListings(prev => [newProp, ...prev]);
  const handleDeleteListing = (id: string) => setListings(prev => prev.filter(p => p.id !== id));
  
  const handleUpdateLeadNotes = (leadId: string, notes: string) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, notes } : l));
  };
  
  const handleScheduleVisitConfirm = (date: string, time: string, property: string) => {
    setLeads(prev => prev.map(l => {
        const activity = {
          id: `act-visit-${Date.now()}`,
          type: 'call' as const,
          title: `Visite Planifiée: ${property}`,
          description: `Rendez-vous de visite fixé le ${date} à ${time}.`,
          date: 'A l’instant'
        };
        return { ...l, activities: [activity, ...l.activities] };
    }));
  };

  if (!selectedActor) {
    return <Landing onSelectActor={setSelectedActor} />;
  }

  if (!isAuthenticated) {
    return (
      <LoginScreen 
        actor={selectedActor} 
        onLogin={() => setIsAuthenticated(true)} 
        onBack={() => setSelectedActor(null)} 
      />
    );
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedActor(null);
  };

  if (selectedActor === 'agent') {
    return (
      <AgentLayout 
        onLogout={handleLogout}
        listings={listings}
        leads={leads}
        onAddProperty={handleAddProperty}
        onDeleteListing={handleDeleteListing}
        onUpdateLeadNotes={handleUpdateLeadNotes}
        onScheduleConfirm={handleScheduleVisitConfirm}
      />
    );
  }

  if (selectedActor === 'client') {
    return (
      <ClientLayout 
        onLogout={handleLogout}
        onAddPropertyExternal={handleAddProperty}
      />
    );
  }

  if (selectedActor === 'guest') {
    return (
      <GuestLayout 
        onLogout={handleLogout}
      />
    );
  }

  return null;
}
