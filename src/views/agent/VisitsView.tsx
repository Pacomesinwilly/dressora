import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  Bell, 
  Settings, 
  Search, 
  Filter, 
  MapPin, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';

interface VisitsViewProps {
  onScheduleConfirm: (date: string, time: string, property: string) => void;
}

export default function VisitsView({ onScheduleConfirm }: VisitsViewProps) {
  // Navigation internal mode
  const [visitsSubTab, setVisitsSubTab] = useState<'tracker' | 'scheduler'>('tracker');
  
  // Scheduler States
  const [selectedDay, setSelectedDay] = useState<number>(5);
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM');
  const [showSuccessNotification, setShowSuccessNotification] = useState<boolean>(false);
  
  // Tracker States (Search and filtering)
  const [searchQuery, setSearchQuery] = useState('');
  const [trackerFilter, setTrackerFilter] = useState<'all' | 'active' | 'pending'>('all');

  const daysHeader = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const prevMonthDays = [28, 29, 30];
  const currentMonthDays = Array.from({ length: 11 }, (_, i) => i + 1);

  // Default visits database mimicking input_file_3 list
  const initialVisits = [
    {
      id: 'visit-1',
      clientName: 'Marie Curie',
      type: 'Visite d\'état des lieux',
      time: '10:30',
      propertyName: 'Villa Terracotta',
      status: 'active',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-100',
      badgeText: 'Validée'
    },
    {
      id: 'visit-2',
      clientName: 'Robert Brown',
      type: 'Visite d\'évaluation',
      time: '14:00',
      propertyName: 'Penthouse Azure',
      status: 'pending',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
      badgeText: 'Id. En attente'
    },
    {
      id: 'visit-3',
      clientName: 'Sophia Martinez',
      type: 'Visite de signature',
      time: '16:30',
      propertyName: 'Résidence Rivoli',
      status: 'active',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-100',
      badgeText: 'Validée'
    },
    {
      id: 'visit-4',
      clientName: 'Jean Dupont',
      type: 'Visite d\'architecte',
      time: '17:30',
      propertyName: 'Château de Sable',
      status: 'active',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-100',
      badgeText: 'Validée'
    }
  ];

  const handleConfirm = () => {
    setShowSuccessNotification(true);
    onScheduleConfirm(`2026-05-0${selectedDay}`, selectedTime, "The Azure Penthouse");
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 4000);
  };

  // Filtered visits
  const filteredVisits = initialVisits.filter(visit => {
    const matchesSearch = visit.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          visit.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = trackerFilter === 'all' || visit.status === trackerFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="visits-view-wrapper" className="space-y-6">
      
      {/* Page Breadcrumb and Margin Icons */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC2]/30 text-xs">
        <div className="flex items-center gap-2 text-[#8E8071]">
          <span className="uppercase tracking-wider font-mono text-[10px]">Visites</span>
          <span className="text-[#B6AFA6]">/</span>
          <button 
            onClick={() => setVisitsSubTab('tracker')}
            className={`font-mono text-[10px] uppercase ${visitsSubTab === 'tracker' ? 'font-bold text-[#9C4323]' : 'hover:text-[#2F2B28]'}`}
          >
            Suivi des Rendez-vous
          </button>
          <span className="text-[#B6AFA6]">/</span>
          <button 
            onClick={() => setVisitsSubTab('scheduler')}
            className={`font-mono text-[10px] uppercase ${visitsSubTab === 'scheduler' ? 'font-bold text-[#9C4323]' : 'hover:text-[#2F2B28]'}`}
          >
            Planifier / État des Lieux
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <Bell className="w-4 h-4 text-[#8E8071]" />
          <Settings className="w-4 h-4 text-[#8E8071]" />
          <div className="w-6 h-6 rounded-full bg-slate-300 overflow-hidden ring-1 ring-white">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=40&q=80" 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Selector Subtabs Menu Bar */}
      <div className="flex gap-4 border-b border-[#F3ECE5]/60 pb-1.5">
        <button
          id="visits-tab-tracker"
          onClick={() => setVisitsSubTab('tracker')}
          className={`pb-2 text-sm font-semibold transition-all relative ${
            visitsSubTab === 'tracker' 
              ? 'text-[#9C4323] border-b-2 border-[#9C4323]' 
              : 'text-[#8E8071] hover:text-[#2F2B28]'
          }`}
        >
          Gestion Globale des Visites
        </button>
        <button
          id="visits-tab-scheduler"
          onClick={() => setVisitsSubTab('scheduler')}
          className={`pb-2 text-sm font-semibold transition-all relative ${
            visitsSubTab === 'scheduler' 
              ? 'text-[#9C4323] border-b-2 border-[#9C4323]' 
              : 'text-[#8E8071] hover:text-[#2F2B28]'
          }`}
        >
          Planifier un rendez-vous (Conciergerie)
        </button>
      </div>

      <AnimatePresence mode="wait">
        
        {/* SUBTAB 1: GESTION / LISTING TRACKER VIEW (mockup 3) */}
        {visitsSubTab === 'tracker' && (
          <motion.div
            key="visits-tracker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-6 text-left"
          >
            {/* Header filters bar mimicking mockup 3 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-extrabold text-[#2F2B28]">Gestion des Visites</h3>
                <p className="text-xs text-[#8E8071]">Recherchez et administrez les rendez-vous certifiés de la semaine.</p>
              </div>

              {/* Advanced search widget and filter selection */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8E8071] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="search-visits-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filtrer par nom ou bien..."
                    className="pl-9 pr-4 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs focus:outline-none w-52 text-[#2F2B28]"
                  />
                </div>
                
                <select
                  id="visits-filter-select"
                  value={trackerFilter}
                  onChange={(e: any) => setTrackerFilter(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs text-[#2F2B28] focus:outline-none"
                >
                  <option value="all">Tous les Statuts</option>
                  <option value="active">Rendez-vous Validés</option>
                  <option value="pending">Id. En Attente</option>
                </select>

                <button
                  onClick={() => setVisitsSubTab('scheduler')}
                  className="px-4 py-2 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-bold transition-all"
                >
                  + Planifier
                </button>
              </div>
            </div>

            {/* Simulated Live status stats ribbon mirroring mockup 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="md:col-span-1 bg-[#231E1B] text-white p-5 rounded-3xl flex items-center justify-between shadow">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-[#E8DFC2] uppercase font-bold block">Visites Actives</span>
                  <p className="text-sm font-semibold">Aujourd'hui</p>
                </div>
                {/* 08 active circle counter box exactly as in mockup 3 */}
                <div className="w-12 h-12 rounded-full bg-[#9C4323] border border-stone-800 flex items-center justify-center font-serif text-xl font-bold text-white shadow-inner">
                  08
                </div>
              </div>

              <div className="md:col-span-3 bg-white px-6 py-5 rounded-3xl border border-[#E8DFC2]/30 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div className="text-xs">
                  <span className="font-bold text-[#9C4323]">● Alerte Sécurité : </span>
                  <span className="text-[#6A6055]">Un de vos résidents n'a pas encore validé son scan d'identité faciale (Liveness).</span>
                </div>
                <button 
                  onClick={() => alert("Indexation des protocoles d'authentification forcés.")}
                  className="text-xs font-bold text-[#9C4323] hover:underline"
                >
                  Résoudre maintenant
                </button>
              </div>

            </div>

            {/* Split layout: Spotlight Listing Card and List table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Spotlight Card (Villa Onyx) */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8DFC2]/30 overflow-hidden shadow-sm flex flex-col justify-between group">
                <div className="h-60 relative bg-stone-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" 
                    alt="Villa Onyx Penthouse pool" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-1/5">
                    <span className="bg-[#9C4323] text-white font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md">
                      Spotlight
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B19]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 text-white space-y-1">
                    <h4 className="font-serif text-lg font-bold">Villa Onyx — Penthouse Sud</h4>
                    <p className="text-xs text-[#E8DFC2] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9C4323]" />
                      Cannes, Croisette
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="p-3 bg-[#FAF5EF] rounded-2xl flex items-center gap-2.5 text-xs text-[#2F2B28]">
                    <Sparkles className="w-4 h-4 text-orange-600 fill-current shrink-0" />
                    <p className="font-medium">Prochaine visite programmée à <span className="font-bold text-[#9C4323]">14:30 aujourd'hui</span>.</p>
                  </div>

                  <div className="flex justify-between items-center text-xs text-[#8E8071] pt-1">
                    <span>Prestige Value: <b className="text-stone-800 font-serif text-sm">3 850 000 €</b></span>
                    <span>Surface: <b className="text-stone-800">185 m²</b></span>
                  </div>

                  <button
                    onClick={() => alert("Lancement de la visite virtuelle exclusive 3D et du plan cadastral d'architecte.")}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    Lancer la visite virtuelle 3D
                    <ArrowRight className="w-4 h-4 text-amber-50" />
                  </button>
                </div>
              </div>

              {/* Right Column: List of visits (search-filtered) */}
              <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE5]">
                  <h4 className="font-serif text-lg font-bold text-[#2F2B28]">Planification Hebdomadaire</h4>
                  <span className="text-xs text-[#8E8071] font-mono">{filteredVisits.length} visites trouvées</span>
                </div>

                <div className="divide-y divide-[#EADFD5]/40 text-xs text-[#2F2B28]">
                  {filteredVisits.length > 0 ? (
                    filteredVisits.map((visit) => (
                      <div key={visit.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-[#F3ECE5] rounded-full flex items-center justify-center font-bold text-[#9C4323]">
                            {visit.clientName.split(' ').map(n=>n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-sm text-[#2F2B28] group-hover:text-[#9C4323] transition-colors">{visit.clientName}</h5>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-mono tracking-wide font-bold uppercase border ${visit.badgeColor}`}>
                                {visit.badgeText}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#8E8071] mt-0.5">{visit.type} • <b className="text-stone-700">{visit.propertyName}</b></p>
                          </div>
                        </div>

                        {/* Timing and actions */}
                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                          <div className="flex items-center gap-1.5 text-stone-700 bg-[#FCFAF7] border border-[#E8DFC2]/30 px-3 py-1.5 rounded-xl">
                            <Clock className="w-3.5 h-3.5 text-[#9C4323]" />
                            <span className="font-mono font-bold">{visit.time}</span>
                          </div>

                          <button
                            onClick={() => alert(`Lancement direct de l'inspection de visite pour ${visit.clientName} à l'appartement ${visit.propertyName}.`)}
                            className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 text-[10px] tracking-wide font-bold uppercase cursor-pointer"
                          >
                            DÉBUTER
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10 text-[#8E8071]">
                      Aucun rendez-vous ne correspond à vos filtres de recherche.
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#F3ECE5] text-center">
                  <p className="text-[10px] font-mono tracking-wide text-[#A2978B] uppercase">
                    Dossiers hébergés sur serveurs souverains sécurisés
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* SUBTAB 2: SCHEDULER / ÉTAT DES LIEUX FORM VIEW (mockup 2) */}
        {visitsSubTab === 'scheduler' && (
          <motion.div
            key="visits-scheduler"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-6"
          >
            {showSuccessNotification && (
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 shadow-md"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs text-left">
                  <span className="font-bold font-mono text-[10px] block mb-0.5">RENDEZ-VOUS ET ÉTAT DES LIEUX CONFIRMÉ !</span>
                  La visite pour <span className="font-bold text-[#9C4323]">The Azure Penthouse</span> est bloquée pour le <span className="font-bold">0{selectedDay} Juin 2026 à {selectedTime}</span>. L'expert désigné <span className="font-bold">Marc-André Lefebvre</span> a été notifié.
                </div>
              </motion.div>
            )}

            {/* Main card matching mockup 2 layout */}
            <div id="appointment-card" className="bg-white rounded-[32px] border border-[#E8DFC2]/45 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
              
              {/* Left Column: Picture and Checkout Card */}
              <div className="lg:col-span-5 relative bg-[#1F1B19] flex flex-col justify-between p-8 text-left text-white min-h-[350px] lg:min-h-full">
                
                {/* Background high fidelity interior decoration picture */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" 
                    alt="The Azure Penthouse room interior" 
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-950/20" />
                </div>

                {/* Top of card info */}
                <div className="relative z-10 space-y-1 bg-stone-900/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <span className="text-[9px] font-mono tracking-widest text-[#E8DFC2] font-black uppercase">RECAPITULATIF</span>
                  <h4 className="font-serif text-xl font-bold leading-snug">The Azure Penthouse</h4>
                  <p className="text-[11px] text-[#A2978B]">West Village, NY • Terracotta Elite Reserve</p>
                  
                  <div className="pt-2 flex justify-between items-center border-t border-white/10 mt-2 text-xs">
                    <span className="font-mono text-[9px] text-[#E8DFC2]/85 uppercase tracking-wider">PRESTATION :</span>
                    <span className="font-bold text-amber-50">État des lieux (Expert)</span>
                  </div>
                </div>

                {/* Bottom checkout summary details */}
                <div className="relative z-10 space-y-4">
                  {/* Marc-André Lefebvre Expert block exactly as in mockup 2 */}
                  <div className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#9C4323] overflow-hidden shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80" 
                        alt="Marc-André Lefebvre" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-[#E8DFC2] tracking-widest uppercase font-bold block">EXPERT CONCIERGERIE</span>
                      <h5 className="text-xs font-bold font-serif text-emerald-50">Marc-André Lefebvre</h5>
                      <span className="text-[10px] text-stone-300">Accompagnateur certifié Reserve</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-center text-[#E8DFC2]/70">
                    Sûreté Escrow & Sécurisation physique territoriale
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Scheduling Form */}
              <div className="lg:col-span-7 p-8 lg:p-12 space-y-8 flex flex-col justify-between bg-white text-left">
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#9C4323] font-bold">État des lieux / Rendez-vous</span>
                    <h3 className="font-serif text-2xl font-extrabold text-[#2F2B28] mt-1">Sélecteur de Date</h3>
                    <p className="text-xs text-[#8E8071] mt-1 max-w-md leading-relaxed">
                      Choisissez le créneau optimal avec Marc-André Lefebvre pour inspecter la propriété.
                    </p>
                  </div>

                  {/* Calendar selector grid */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#8E8071] block">
                      Juin 2026
                    </label>

                    <div className="bg-[#FAF5EF] rounded-2xl p-4 border border-[#E8DFC2]/30">
                      {/* Week days labels */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {daysHeader.map((d) => (
                          <div key={d} className="text-[9px] font-mono font-bold text-[#8E8071] py-1">
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Day numbers grid */}
                      <div className="grid grid-cols-7 gap-1.5 text-center">
                        {/* Gray out previous month days */}
                        {prevMonthDays.map((num) => (
                          <div key={`p-${num}`} className="text-xs py-2 text-[#C2B9AF] font-medium font-mono select-none">
                            {num}
                          </div>
                        ))}

                        {/* Current active month days */}
                        {currentMonthDays.map((num) => {
                          const isSelected = selectedDay === num;
                          return (
                            <button
                              key={`c-${num}`}
                              type="button"
                              id={`calendar-day-jun-${num}`}
                              onClick={() => setSelectedDay(num)}
                              className={`text-xs py-2 rounded-xl transition-all font-bold relative flex items-center justify-center font-mono cursor-pointer ${
                                isSelected 
                                  ? 'bg-[#9C4323] text-white shadow scale-105 z-10' 
                                  : 'text-[#2F2B28] hover:bg-[#F3ECE5]'
                              }`}
                            >
                              {num}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* SELECT TIME pills row */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#8E8071] block">
                      Créneaux Disponibles (Slots)
                    </label>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {['10:30 AM', '02:00 PM', '04:30 PM'].map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            id={`time-slot-picker-${time.replace(/[: ]/g, '-')}`}
                            onClick={() => setSelectedTime(time)}
                            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                              isSelected 
                                ? 'bg-[#9C4323] text-white shadow-md' 
                                : 'bg-[#FAF5EF] text-[#2F2B28] border border-[#E8DFC2]/30 hover:bg-[#F3ECE5]'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Confirms Scheduler Footer */}
                <div className="pt-6 border-t border-[#F3ECE5] flex items-center gap-4">
                  <button
                    type="button"
                    id="btn-confirm-schedule-jun"
                    onClick={handleConfirm}
                    className="flex-1 py-3 px-6 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl font-bold text-xs transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Réserver la Prestation d'Expert
                    <Calendar className="w-4 h-4 text-[#F3ECE5]" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(5);
                      setVisitsSubTab('tracker');
                    }}
                    className="px-6 py-3 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] font-semibold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Retour
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <div className="text-center font-mono text-[9px] text-[#A2978B] pt-4 select-none">
        © 2026 Terracotta Reserve. Protocoles de sécurité souverains certifiés.
      </div>
    </div>
  );
}
