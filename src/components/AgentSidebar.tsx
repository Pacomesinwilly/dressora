import { LayoutDashboard, Building2, Calendar, Users, Percent, Plus, HelpCircle, LogOut, Lock } from 'lucide-react';
import { ActiveTab } from '../domain/entities/types';

interface AgentSidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenNewListingModal: () => void;
  onLogout: () => void;
}

export default function AgentSidebar({
  activeTab,
  setActiveTab,
  onOpenNewListingModal,
  onLogout
}: AgentSidebarProps) {
  
  const menuItems = [
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'listings' as ActiveTab, label: 'My Listings', icon: Building2 },
    { id: 'visits' as ActiveTab, label: 'Visits', icon: Calendar },
    { id: 'leads' as ActiveTab, label: 'Leads', icon: Users },
    { id: 'commissions' as ActiveTab, label: 'Commissions', icon: Percent },
    { id: 'vault' as ActiveTab, label: 'Documents Vault', icon: Lock },
  ];

  return (
    <aside className="w-full md:w-72 bg-[#F3ECE5] border-b md:border-b-0 md:border-r border-[#E8DFC2]/40 flex flex-col justify-between h-auto md:h-screen static md:sticky top-0 font-sans select-none z-30 shrink-0">
      <div className="flex flex-col p-6 overflow-y-auto flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-[#9C4323] rounded-lg text-[#FBF9F4] shadow-sm flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight text-[#2F2B28] leading-tight">
              Terracotta Reserve
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-[#9C4323] uppercase font-bold">
              Elite Agent Portal
            </p>
          </div>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#9C4323] text-white shadow-sm font-semibold' 
                    : 'text-[#6A6055] hover:bg-[#E9DFD5] hover:text-[#2F2B28]'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#8E8071]'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6 border-t border-[#E8DFC2]/30 space-y-4">
        <button
          onClick={onOpenNewListingModal}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl shadow-md font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#9C4323]/50 cursor-pointer group"
        >
          <Plus className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          New Listing
        </button>

        <div className="space-y-1">
          <button
            onClick={() => alert("Assistance par tchat en direct de Terracotta Reserve disponible 24/7.")}
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
          © 2026 Terracotta Reserve
        </p>
      </div>
    </aside>
  );
}
