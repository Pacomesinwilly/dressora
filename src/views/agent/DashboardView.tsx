import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Building2, 
  DollarSign, 
  ArrowUpRight, 
  Bell, 
  Settings, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
  RefreshCw
} from 'lucide-react';
import { PropertyListing, Lead } from '../../domain/entities/types';

interface DashboardViewProps {
  listings: PropertyListing[];
  leads: Lead[];
  onNavigateToTab: (tab: 'dashboard' | 'listings' | 'visits' | 'leads' | 'commissions' | 'guest_portal') => void;
}

export default function DashboardView({ listings, leads, onNavigateToTab }: DashboardViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);

  // Trigger simulated loading whenever user explicitly hits "Recharger les Statistiques"
  useEffect(() => {
    if (triggerCount > 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [triggerCount]);

  // Compute stats
  const totalLeads = leads.length;
  const hotLeads = leads.filter(l => l.status === 'chaud').length;
  const activeListings = listings.filter(p => p.status === 'active').length;
  const totalPortfolioValue = listings.reduce((acc, curr) => acc + curr.price, 0);

  // Render Skeleton representing screen 1 (Chargement des Données)
  const renderSkeletonLayout = () => {
    return (
      <div id="skeleton-container" className="space-y-8 animate-pulse">
        {/* Top Widgets line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DFC2]/30 space-y-4">
            <div className="h-4 bg-[#EADFD5] rounded w-1/3" />
            <div className="h-8 bg-[#E6DCD2] rounded w-2/3" />
            <div className="h-12 bg-[#F3ECE5] rounded-xl w-full" />
          </div>
          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DFC2]/30 space-y-4">
            <div className="h-4 bg-[#EADFD5] rounded w-1/4" />
            <div className="h-6 bg-[#E6DCD2] rounded w-1/2" />
            <div className="h-2 bg-[#F3ECE5] rounded w-full" />
            <div className="h-2 bg-[#F3ECE5] rounded w-5/6" />
          </div>
          <div className="bg-white/80 p-6 rounded-2xl border border-[#E8DFC2]/30 space-y-4">
            <div className="h-4 bg-[#EADFD5] rounded w-1/3" />
            <div className="h-6 bg-[#E6DCD2] rounded w-1/2" />
            <div className="h-2 bg-[#F3ECE5] rounded w-full" />
            <div className="h-2 bg-[#F3ECE5] rounded w-2/3" />
          </div>
        </div>

        {/* Middle Line title and grid of 3 listings */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2 w-1/3">
              <div className="h-4 bg-[#EADFD5] rounded w-3/4" />
              <div className="h-3 bg-[#EADFD5]/70 rounded w-1/2" />
            </div>
            <div className="h-8 bg-[#E6DCD2] rounded-lg w-24" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/80 rounded-2xl border border-[#E8DFC2]/30 overflow-hidden space-y-4 pb-6">
                <div className="h-48 bg-[#E6DCD2] w-full" />
                <div className="px-6 space-y-3">
                  <div className="h-4 bg-[#EADFD5] rounded w-3/4" />
                  <div className="h-3 bg-[#EADFD5]/70 rounded w-1/2" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-6 bg-[#F3ECE5] rounded-full w-12" />
                    <div className="h-6 bg-[#F3ECE5] rounded-full w-12" />
                    <div className="h-6 bg-[#F3ECE5] rounded-full w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/80 p-6 rounded-3xl border border-[#E8DFC2]/30 space-y-4">
            <div className="h-5 bg-[#E6DCD2] rounded w-1/4" />
            <div className="space-y-2 pt-2">
              <div className="h-3 bg-[#EADFD5] rounded w-full" />
              <div className="h-3 bg-[#EADFD5] rounded w-5/6" />
              <div className="h-3 bg-[#EADFD5] rounded w-4/5" />
            </div>
            <div className="flex gap-3 pt-4">
              <div className="h-10 bg-[#E6DCD2] rounded-xl w-32" />
              <div className="h-10 bg-[#EADFD5] rounded-xl w-12" />
            </div>
          </div>
          <div className="bg-white/80 p-6 rounded-3xl border border-[#E8DFC2]/30 space-y-4">
            <div className="h-48 bg-[#F3ECE5] w-full rounded-2xl" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="dashboard-view" className="space-y-8">
      {/* Top Professional Header Bar */}
      <header id="agent-header" className="flex items-center justify-between pb-4 border-b border-[#E8DFC2]/30">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#2F2B28] tracking-tight">
            Chargement des Données
          </h2>
          <p className="text-sm text-[#8E8071] font-sans">
            Bienvenue sur le tableau de bord de Terracotta Reserve
          </p>
        </div>

        {/* Quick actions row */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-sm font-medium text-[#6A6055]">
            <button 
              id="doc-link" 
              onClick={() => alert("Documentation de formation elite ouverte.")}
              className="hover:text-[#9C4323] transition-colors pb-1 border-b-2 border-transparent hover:border-[#9C4323] flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </button>
            <button 
              id="support-link" 
              onClick={() => alert("Mise en relation avec un expert d'assistance de Terracotta.")}
              className="hover:text-[#9C4323] transition-colors pb-1 border-b-2 border-transparent hover:border-[#9C4323] flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Direct Support
            </button>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-[#E8DFC2]/40">
            <button id="noti-btn" className="p-2 text-[#8E8071] hover:text-[#9C4323] hover:bg-[#F3ECE5] rounded-lg transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#9C4323] rounded-full" />
            </button>
            <button id="settings-btn" className="p-2 text-[#8E8071] hover:text-[#2F2B28] hover:bg-[#F3ECE5] rounded-lg transition-all">
              <Settings className="w-5 h-5" />
            </button>
            
            {/* Professional profile avatar as seen in image */}
            <div className="flex items-center gap-3 ml-2">
              <img 
                id="agent-avatar"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80"
                alt="Leonel Togni" 
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#9C4323]/20"
                referrerPolicy="no-referrer"
              />
              <div className="hidden xl:block text-left">
                <p className="text-xs font-semibold text-[#2F2B28] leading-tight">Leonel Togni</p>
                <p className="text-[9px] font-mono uppercase text-[#9C4323] tracking-wider leading-none">Elite Partner</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Simulator Controls Banner & Quick Actions */}
      <div id="sim-banner" className="bg-[#EFE7DD] p-5 rounded-2xl border border-[#DCD0C3] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#9C4323] font-semibold text-sm">
            <Zap className="w-4 h-4 fill-current" />
            Analyseur en Temps Réel
          </div>
          <p className="text-xs text-[#6A6055] mt-1">
            Visualisez le comportement réseau et l'état de chargement d'API simulés pour l'Elite Portal.
          </p>
        </div>
        <div className="flex gap-2.5 shrink-0">
          <button
            id="btn-trigger-skeleton"
            disabled={isLoading}
            onClick={() => setTriggerCount(prev => prev + 1)}
            className="px-4 py-2 border border-[#9C4323] text-[#9C4323] hover:bg-[#9C4323] hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            Simuler Chargement (Skeleton)
          </button>
          
          <button
            id="btn-fast-toggle-loading"
            onClick={() => setIsLoading(!isLoading)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              isLoading 
                ? 'bg-[#9C4323] text-white shadow-sm' 
                : 'bg-white text-[#2F2B28] border border-[#DCE2DA] hover:bg-[#FDFBF7]'
            }`}
          >
            {isLoading ? 'Forcer Mode Prêt' : 'Forcer Mode Chargement'}
          </button>
        </div>
      </div>

      {isLoading ? (
        renderSkeletonLayout()
      ) : (
        <motion.div 
          id="dashboard-loaded-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Main Top Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#9C4323] group-hover:scale-110 transition-transform">
                <Building2 className="w-20 h-20" />
              </div>
              <p className="text-xs font-medium text-[#8E8071] tracking-wide uppercase">Annonces Actives</p>
              <p className="text-3xl font-serif font-bold text-[#2F2B28] mt-2">{activeListings}</p>
              <div className="flex items-center gap-1 text-emerald-700 text-xs font-medium mt-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+1 cette semaine</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#9C4323] group-hover:scale-110 transition-transform">
                <Users className="w-20 h-20" />
              </div>
              <p className="text-xs font-medium text-[#8E8071] tracking-wide uppercase">Leads Chauds</p>
              <p className="text-3xl font-serif font-bold text-[#2F2B28] mt-2">{hotLeads} / {totalLeads}</p>
              <div className="flex items-center gap-1 text-orange-600 text-xs font-medium mt-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Convertibilité {Math.round((hotLeads/totalLeads)*100)}%</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#9C4323] group-hover:scale-110 transition-transform">
                <DollarSign className="w-20 h-20" />
              </div>
              <p className="text-xs font-medium text-[#8E8071] tracking-wide uppercase">Valeur du Portfolio</p>
              <p className="text-3xl font-serif font-bold text-[#2F2B28] mt-2">
                {(totalPortfolioValue / 1000000).toFixed(2)} M€
              </p>
              <div className="text-xs text-[#8E8071] mt-3">
                Cannes & NY actifs exclusifs
              </div>
            </div>

            <div className="bg-[#9C4323] p-6 rounded-2xl shadow-sm text-white relative overflow-hidden group hover:opacity-95 transition-all">
              <p className="text-xs font-mono tracking-widest uppercase text-[#F3ECE5] font-semibold">Taux de Visites</p>
              <p className="text-3xl font-serif font-bold mt-2">100%</p>
              <p className="text-xs text-[#F3ECE5] mt-3 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-white" />
                Tous les rendez-vous honorés
              </p>
            </div>
          </div>

          {/* Quick Shortcuts & Interactive Dashboard Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Block: Portfolio Distribution List */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Distribution de vos Biens d'Elite</h3>
                  <p className="text-xs text-[#8E8071]">Accès rapide à la configuration et aux prévisualisations d'annonces</p>
                </div>
                <button
                  id="link-all-listings"
                  onClick={() => onNavigateToTab('listings')}
                  className="text-xs font-semibold text-[#9C4323] hover:text-[#85351a] flex items-center gap-1 transition-all"
                >
                  Tous les Biens
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="divide-y divide-[#EADFD5]/40">
                {listings.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.coverImage} 
                        alt={item.title} 
                        className="w-14 h-14 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#2F2B28] group-hover:text-[#9C4323] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#8E8071]">{item.city} — {item.surface} m²</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#2F2B28]">
                        {item.price.toLocaleString('fr-FR')} {item.city.includes('York') ? '$' : '€'}
                      </p>
                      <span className="inline-block mt-1 px-2.5 py-0.5 bg-[#EFE7DD] text-[#9C4323] rounded-full text-[10px] font-semibold uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block: Active Notification log & Shortcut to scheduler */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Derniers Événements</h3>
                <p className="text-xs text-[#8E8071] mb-4">Suivi automatique du workflow</p>
                
                <div className="space-y-4">
                  <div className="flex gap-3 text-xs text-[#2F2B28]">
                    <Clock className="w-4 h-4 text-[#9C4323] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Visite planifiée complétée</p>
                      <p className="text-[#8E8071]">Pour Eleanor Vance au Penthouse Azure</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs text-[#2F2B28]">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Virement de Loyer effectué</p>
                      <p className="text-[#8E8071]">L'Habitation : +2 327,50 € reçu</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs text-[#2F2B28]">
                    <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Nouveau prospect chaud importé</p>
                      <p className="text-[#8E8071]">Jean-Pierre Dubois (Score 92)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EADFD5]/40 space-y-3">
                <div className="p-3.5 bg-[#FBF9F4] rounded-2xl border border-[#E8DFC2]/30 text-xs">
                  <span className="font-semibold text-[#9C4323]">Astuce d'Agent Elite :</span> Optimisez votre conversion de lead en planifiant directement une visite de rappel.
                </div>
                <button
                  id="go-visits-button"
                  onClick={() => onNavigateToTab('visits')}
                  className="w-full py-2.5 px-4 bg-[#2F2B28] hover:bg-[#1E1B18] text-[#F3ECE5] text-xs font-semibold rounded-xl transition-all cursor-pointer"
                >
                  Ouvrir Calendrier de Visite
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
