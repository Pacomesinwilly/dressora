import { Building2, HelpCircle, LogOut } from 'lucide-react';

interface GuestSidebarProps {
  onLogout: () => void;
}

export default function GuestSidebar({ onLogout }: GuestSidebarProps) {
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

        <div className="space-y-3.5 bg-white/40 p-4 rounded-2xl border border-[#E8DFC2]/30">
          <p className="text-[10px] uppercase tracking-wider font-mono text-[#9C4323] font-bold">
            Services Locataire
          </p>
          <p className="text-xs text-stone-600 leading-relaxed">
            Votre espace Dodo/Dressrosa vous permet de :
          </p>
          <ul className="text-[11px] text-[#9C4323] space-y-1.5 list-disc pl-4 font-bold">
            <li>Rechercher un logement d'élite</li>
            <li>Construire votre Trust Score</li>
            <li>Demander un crédit locatif</li>
            <li>Signer votre bail & payer</li>
          </ul>
        </div>
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
