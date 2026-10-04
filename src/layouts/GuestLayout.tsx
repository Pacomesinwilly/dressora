import React, { useState } from 'react';
import { motion } from 'motion/react';
import GuestSidebar from '../components/GuestSidebar';
import GuestPortalView from '../views/guest/GuestPortalView';
import type { GuestPortalTab } from '../views/guest/GuestPortalView';

interface GuestLayoutProps {
  onLogout: () => void;
}

export default function GuestLayout({ onLogout }: GuestLayoutProps) {
  const [activeTab, setActiveTab] = useState<GuestPortalTab>('stay');

  return (
    <div className="min-h-screen md:h-screen bg-[#FDFBF7] text-[#2F2B28] flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden font-sans">
      <GuestSidebar activeTab={activeTab} onNavigate={setActiveTab} onLogout={onLogout} />
      
      <main className="flex-1 min-h-screen md:h-screen overflow-y-visible md:overflow-y-auto w-full">
        <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FAF5EF] border border-[#E8DFC2]/30 px-5 py-2.5 rounded-2xl text-[11px] font-sans font-medium text-[#8E8071] gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>
              Mode Courant : <b className="text-[#9C4323]">Portail Locataire (Dodo/Dressrosa)</b>
            </span>
          </div>
        </div>

        <div className="min-h-[600px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <GuestPortalView initialTab={activeTab} onActiveTabChange={setActiveTab} />
          </motion.div>
        </div>
        </div>
      </main>
    </div>
  );
}
