import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ClientSidebar from '../components/ClientSidebar';
import LHabitationView from '../views/client/LHabitationView';
import LuxEstateView from '../views/guest/LuxEstateView';
import { PropertyListing } from '../domain/entities/types';

interface ClientLayoutProps {
  onLogout: () => void;
  onAddPropertyExternal: (newProp: PropertyListing) => void;
}

export default function ClientLayout({ onLogout, onAddPropertyExternal }: ClientLayoutProps) {
  const [subMode, setSubMode] = useState<'lhabitation' | 'luxestate'>('lhabitation');

  return (
    <div className="h-screen bg-[#FDFBF7] text-[#2F2B28] flex flex-col md:flex-row overflow-hidden font-sans">
      <ClientSidebar onLogout={onLogout} />
      
      <main className="flex-1 h-screen overflow-y-auto w-full">
        <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FAF5EF] border border-[#E8DFC2]/30 px-5 py-2.5 rounded-2xl text-[11px] font-sans font-medium text-[#8E8071] gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>
              Mode Courant : <b className="text-[#9C4323]">
                {subMode === 'lhabitation' ? "L'Habitation (Standard)" : "LuxEstate (Premium Owner)"}
              </b>
            </span>
          </div>
          
          <div className="flex gap-1 bg-[#E6DCD2] p-1 rounded-xl">
            <button
              onClick={() => setSubMode('lhabitation')}
              className={`px-3.5 py-1 rounded-lg text-[9px] font-bold uppercase transition-all ${subMode === 'lhabitation' ? 'bg-[#9C4323] text-white shadow-sm' : 'text-[#6A6055] hover:text-[#2F2B28]'}`}
            >
              L'Habitation
            </button>
            <button
              onClick={() => setSubMode('luxestate')}
              className={`px-3.5 py-1 rounded-lg text-[9px] font-bold uppercase transition-all ${subMode === 'luxestate' ? 'bg-[#9C4323] text-white shadow-sm' : 'text-[#6A6055] hover:text-[#2F2B28]'}`}
            >
              LuxEstate
            </button>
          </div>
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div key={`tab-client-${subMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {subMode === 'lhabitation' ? (
                <LHabitationView onAddPropertyExternal={onAddPropertyExternal} />
              ) : (
                <LuxEstateView />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </main>
    </div>
  );
}
