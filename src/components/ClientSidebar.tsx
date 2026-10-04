import { Building2, CreditCard, FileText, HelpCircle, LayoutDashboard, LogOut, Users } from 'lucide-react';

type ClientTab = 'dashboard' | 'properties' | 'finances' | 'documents' | 'tenants';

interface ClientSidebarProps {
  activeTab: ClientTab;
  onNavigate: (tab: ClientTab) => void;
  onLogout: () => void;
}

export default function ClientSidebar({ activeTab, onNavigate, onLogout }: ClientSidebarProps) {
  return (
    <aside className="w-full md:w-72 bg-[#F3ECE5] border-b md:border-b-0 md:border-r border-[#E8DFC2]/40 flex flex-col justify-between h-auto md:h-screen static md:sticky top-0 font-sans select-none z-30 shrink-0">
      <div className="flex flex-col p-6 overflow-y-auto flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-[#9C4323] rounded-lg text-[#FBF9F4] shadow-sm flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight text-[#2F2B28] leading-tight">
              L'Habitation
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-[#9C4323] uppercase font-bold">
              Espace Propriétaire
            </p>
          </div>
        </div>

        <nav aria-label="Navigation propriétaire" className="space-y-1">
          {[
            { id: 'dashboard' as const, label: 'Tableau de bord', icon: LayoutDashboard },
            { id: 'properties' as const, label: 'Mes biens', icon: Building2 },
            { id: 'finances' as const, label: 'Finances', icon: CreditCard },
            { id: 'tenants' as const, label: 'Locataires', icon: Users },
            { id: 'documents' as const, label: 'Documents', icon: FileText },
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
            onClick={() => alert("Assistance L'Habitation disponible.")}
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
          © 2026 L'Habitation
        </p>
      </div>
    </aside>
  );
}
