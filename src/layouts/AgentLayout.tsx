import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2 } from 'lucide-react';
import { ActiveTab, PropertyListing, Lead } from '../domain/entities/types';

import AgentSidebar from '../components/AgentSidebar';
import DashboardView from '../views/agent/DashboardView';
import MyListingsView from '../views/agent/MyListingsView';
import VisitsView from '../views/agent/VisitsView';
import LeadsView from '../views/agent/LeadsView';
import CommissionsView from '../views/agent/CommissionsView';

interface AgentLayoutProps {
  onLogout: () => void;
  listings: PropertyListing[];
  leads: Lead[];
  onAddProperty: (newProp: PropertyListing) => void;
  onDeleteListing: (id: string) => void;
  onUpdateLeadNotes: (leadId: string, notes: string) => void;
  onScheduleConfirm: (date: string, time: string, property: string) => void;
}

export default function AgentLayout({
  onLogout, listings, leads, onAddProperty, onDeleteListing, onUpdateLeadNotes, onScheduleConfirm
}: AgentLayoutProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isNewListingModalOpen, setIsNewListingModalOpen] = useState(false);

  // Modal Form States
  const [modalTitle, setModalTitle] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [modalSurface, setModalSurface] = useState('');
  const [modalCity, setModalCity] = useState('Cannes');
  const [modalAddress, setModalAddress] = useState('12 Boulevard de la Croisette');
  const [modalDesc, setModalDesc] = useState('');

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalTitle || !modalPrice || !modalSurface) {
      alert("Erreur: Titre, prix et surface obligatoires !");
      return;
    }

    const newProp: PropertyListing = {
      id: `prop-${Date.now()}`,
      title: modalTitle,
      price: Number(modalPrice),
      surface: Number(modalSurface),
      city: modalCity,
      exactAddress: modalAddress,
      description: modalDesc || "Aucune description prestige spécifiée.",
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
      coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      status: 'active',
      createdDate: new Date().toISOString().split('T')[0]
    };

    onAddProperty(newProp);
    setIsNewListingModalOpen(false);
    
    setModalTitle('');
    setModalPrice('');
    setModalSurface('');
    setModalDesc('');
    
    setActiveTab('listings');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2F2B28] flex flex-col md:flex-row overflow-x-hidden font-sans">
      <AgentSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenNewListingModal={() => setIsNewListingModalOpen(true)}
        onLogout={onLogout}
      />

      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto space-y-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FAF5EF] border border-[#E8DFC2]/30 px-5 py-2.5 rounded-2xl text-[11px] font-sans font-medium text-[#8E8071] gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>
              Mode Courant : <b className="text-[#9C4323]">Elite Agent Portal</b>
            </span>
          </div>
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div key="tab-dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DashboardView listings={listings} leads={leads} onNavigateToTab={setActiveTab} />
              </motion.div>
            )}
            {activeTab === 'listings' && (
              <motion.div key="tab-listings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MyListingsView listings={listings} onAddListing={onAddProperty} onDeleteListing={onDeleteListing} />
              </motion.div>
            )}
            {activeTab === 'visits' && (
              <motion.div key="tab-visits" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <VisitsView onScheduleConfirm={onScheduleConfirm} />
              </motion.div>
            )}
            {activeTab === 'leads' && (
              <motion.div key="tab-leads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LeadsView leads={leads} onUpdateLeadNotes={onUpdateLeadNotes} />
              </motion.div>
            )}
            {activeTab === 'commissions' && (
              <motion.div key="tab-commissions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CommissionsView portalMode="agent" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Quick New Listing Modal (copied from App.tsx) */}
      <AnimatePresence>
        {isNewListingModalOpen && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#E8DFC2]/30 shadow-2xl space-y-6 text-left"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[#9C4323]">
                  <Building2 className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold text-[#2F2B28]">Ajouter une Propriété</h3>
                </div>
                <button onClick={() => setIsNewListingModalOpen(false)} className="p-1.5 hover:bg-[#F3ECE5] rounded-xl text-stone-500 hover:text-stone-800 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleModalSubmit} className="space-y-4 text-xs font-semibold text-stone-700">
                <div className="space-y-1.5">
                  <label className="block text-[10px] tracking-wide uppercase text-[#8E8071]">Titre de l'Annonce</label>
                  <input type="text" value={modalTitle} onChange={(e) => setModalTitle(e.target.value)} placeholder="ex: Appartement Haussmannien de prestige" className="w-full px-4 py-3 bg-[#FAF5EF] rounded-xl border border-[#E8DFC2]/50 text-xs focus:outline-none" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] tracking-wide uppercase text-[#8E8071]">Prix (€)</label>
                    <input type="number" value={modalPrice} onChange={(e) => setModalPrice(e.target.value)} placeholder="1850000" className="w-full px-4 py-3 bg-[#FAF5EF] rounded-xl border border-[#E8DFC2]/50 text-xs focus:outline-none" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] tracking-wide uppercase text-[#8E8071]">Surface (m²)</label>
                    <input type="number" value={modalSurface} onChange={(e) => setModalSurface(e.target.value)} placeholder="180" className="w-full px-4 py-3 bg-[#FAF5EF] rounded-xl border border-[#E8DFC2]/50 text-xs focus:outline-none" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] tracking-wide uppercase text-[#8E8071]">Ville</label>
                  <input type="text" value={modalCity} onChange={(e) => setModalCity(e.target.value)} className="w-full px-4 py-3 bg-[#FAF5EF] rounded-xl border border-[#E8DFC2]/50 text-xs focus:outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] tracking-wide uppercase text-[#8E8071]">Description Prestige</label>
                  <textarea rows={3} value={modalDesc} onChange={(e) => setModalDesc(e.target.value)} placeholder="Détails..." className="w-full px-4 py-3 bg-[#FAF5EF] rounded-xl border border-[#E8DFC2]/50 text-xs focus:outline-none" />
                </div>
                <div className="pt-4 flex gap-3">
                  <button type="submit" className="flex-1 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-xs rounded-xl transition-colors shadowCursor cursor-pointer">
                    Publier l'Annonce Exclusive
                  </button>
                  <button type="button" onClick={() => {
                    setModalTitle("Terracotta Vineyard Estate"); setModalPrice("5800000"); setModalSurface("450"); setModalCity("Siena, Italy"); setModalDesc("Magistrale demeure historique en Toscane avec domaine viticole intégré.");
                  }} className="px-4 py-3 border border-dashed border-[#9C4323] text-[#9C4323] hover:bg-orange-50 rounded-xl text-xs font-bold transition-all">
                    Remplir Demo
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
