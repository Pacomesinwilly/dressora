import { BadgeCheck, Bell, Building2, CreditCard, FileText, Gauge, HelpCircle, KeyRound, LogOut, Search, Wifi } from 'lucide-react';
import type { GuestPortalTab } from '../views/guest/GuestPortalView';

interface GuestSidebarProps {
  activeTab: GuestPortalTab;
  onNavigate: (tab: GuestPortalTab) => void;
  onLogout: () => void;
}

export default function GuestSidebar({ activeTab, onNavigate, onLogout }: GuestSidebarProps) {
  return (
    <aside className="w-full md:w-72 bg-[#F3ECE5] border-b md:border-b-0 md:border-r border-[#E8DFC2]/40 flex flex-col justify-between h-auto md:h-screen static md:sticky top-0 font-sans select-none z-30 shrink-0">
      <div className="flex flex-col p-6 overflow-y-auto flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-[#9C4323] rounded-lg text-[#FBF9F4] shadow-sm flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight text-[#2F2B28] leading-tight">
              LuxEstate Hub
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-[#9C4323] uppercase font-bold">
              Portail Résident & Invité
            </p>
          </div>
        </div>

        <nav aria-label="Navigation résident" className="space-y-1">
          {[
            { id: 'stay' as const, label: 'Mon Séjour', icon: Wifi },
            { id: 'search' as const, label: 'Explorer', icon: Search },
            { id: 'dashboard' as const, label: 'Trust Score', icon: Gauge },
            { id: 'identity' as const, label: 'Identité', icon: BadgeCheck },
            { id: 'lease' as const, label: 'Bail & Signature', icon: FileText },
            { id: 'payments' as const, label: 'Paiements', icon: CreditCard },
            { id: 'notifications' as const, label: 'Notifications', icon: Bell },
            { id: 'vault' as const, label: 'Coffre-fort', icon: KeyRound },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-current={activeTab === id ? 'page' : undefined}
              onClick={() => onNavigate(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${activeTab === id ? 'bg-[#9C4323] text-white' : 'text-[#6A6055] hover:bg-white/70 hover:text-[#2F2B28]'}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6 border-t border-[#E8DFC2]/30 space-y-4">
        <div className="space-y-1">
          <button
            onClick={() => alert("Assistance Résident disponible.")}
            className="w-full flex items-center gap-3 px-4 py-2 text-xs font-medium text-[#6A6055] hover:text-[#2F2B28] transition-colors rounded-lg hover:bg-[#E9DFD5]"
          >
            <HelpCircle className="w-4 h-4 text-[#8E8071]" />
            Help Center
          </button>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-xs font-medium text-red-700/80 hover:text-red-700 hover:bg-red-50 transition-colors rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            Switch Portal
          </button>
        </div>
        <p className="text-[10px] text-[#A2978B] font-mono text-center pt-2 border-t border-[#E8DFC2]/20">
          © 2026 LuxEstate
        </p>
      </div>
    </aside>
  );
}
