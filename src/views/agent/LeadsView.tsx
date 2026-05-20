import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Phone, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Calendar, 
  Sparkles, 
  BookOpen, 
  Archive, 
  UserCheck, 
  ArrowRight, 
  Edit3, 
  PlusCircle, 
  Clock, 
  Check,
  Award
} from 'lucide-react';
import { Lead, LeadActivity } from '../../domain/entities/types';

interface LeadsViewProps {
  leads: Lead[];
  onSelectLead?: (lead: Lead) => void;
  onUpdateLeadNotes: (leadId: string, notes: string) => void;
}

export default function LeadsView({ leads: initialLeads, onUpdateLeadNotes }: LeadsViewProps) {
  // Navigation internal mode
  const [viewMode, setViewMode] = useState<'pipeline' | 'profile'>('pipeline');
  
  // Active selected lead for Profile view (defaults to John Doe)
  const [selectedLeadId, setSelectedLeadId] = useState<string>('lead-john');
  
  // Mutable state for leads list to support dynamic note addition
  const [leadsState, setLeadsState] = useState<Lead[]>(initialLeads);
  
  // Filter settings
  const [statusFilter, setStatusFilter] = useState<'all' | 'chaud' | 'tiede' | 'froid'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Internal note editing
  const [newNoteText, setNewNoteText] = useState('');

  // Add activity states
  const [showAddActivityForm, setShowAddActivityForm] = useState(false);
  const [activityTypeInput, setActivityTypeInput] = useState<'call' | 'email' | 'whatsapp' | 'meeting' | 'note'>('call');
  const [activityTitleInput, setActivityTitleInput] = useState('');
  const [activityDescInput, setActivityDescInput] = useState('');
  const [activityDurationInput, setActivityDurationInput] = useState('');

  const activeLead = leadsState.find(l => l.id === selectedLeadId) || leadsState[0];

  const handleSaveNote = () => {
    if (!newNoteText.trim()) return;
    
    // Add new activity log
    const newActivity: LeadActivity = {
      id: `act-${Date.now()}`,
      type: 'note',
      title: 'Note Interne Ajoutée',
      description: newNoteText,
      date: 'A l’instant'
    };

    setLeadsState(prev => prev.map(lead => {
      if (lead.id === activeLead.id) {
        return {
          ...lead,
          notes: newNoteText,
          activities: [newActivity, ...lead.activities]
        };
      }
      return lead;
    }));

    onUpdateLeadNotes(activeLead.id, newNoteText);
    setNewNoteText('');
    alert("Note enregistrée avec succès dans l'historique de communication.");
  };

  const handleSaveCustomActivity = () => {
    if (!activityTitleInput.trim() || !activityDescInput.trim()) {
      alert("Veuillez saisir un titre et une description pour l'activité.");
      return;
    }

    const newAct: LeadActivity = {
      id: `act-${Date.now()}`,
      type: activityTypeInput,
      title: activityTitleInput.trim(),
      description: activityDescInput.trim(),
      date: 'À l’instant',
      duration: activityTypeInput === 'call' && activityDurationInput ? activityDurationInput : undefined
    };

    setLeadsState(prev => prev.map(lead => {
      if (lead.id === activeLead.id) {
        return {
          ...lead,
          activities: [newAct, ...lead.activities]
        };
      }
      return lead;
    }));

    // Reset inputs
    setActivityTitleInput('');
    setActivityDescInput('');
    setActivityDurationInput('');
    setShowAddActivityForm(false);
    alert("Activité ajoutée avec succès !");
  };

  const handleMarkAsConverted = (leadId: string) => {
    setLeadsState(prev => prev.map(lead => {
      if (lead.id === leadId) {
        return {
          ...lead,
          score: 100,
          engagement: 'High' as const,
          activities: [
            {
              id: `act-${Date.now()}`,
              type: 'note' as const,
              title: 'Statut Converti',
              description: 'Le lead a été marqué comme CONVERTI avec succès !',
              date: 'A l’instant'
            },
            ...lead.activities
          ]
        };
      }
      return lead;
    }));
    alert(`${activeLead.name} a été marqué comme converti ! Score à 100/100.`);
  };

  // Filter leads
  const filteredLeads = leadsState.filter(lead => {
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lead.interestProperty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lead.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div id="leads-view-wrapper" className="space-y-8">
      
      {/* HEADER BAR FOR LEADS PORTAL */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC2]/30 text-xs">
        <div className="flex items-center gap-2 text-[#8E8071]">
          {viewMode === 'profile' ? (
            <button
              id="btn-back-to-pipeline"
              onClick={() => setViewMode('pipeline')}
              className="flex items-center gap-1.5 hover:text-[#9C4323] transition-colors py-1 cursor-pointer font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              Lead Profile
            </button>
          ) : (
            <span className="uppercase tracking-wider font-mono font-bold text-[10px] text-[#9C4323]">Pipeline de Vente</span>
          )}
          <span className="text-[#B6AFA6]">/</span>
          <span className="text-[#6A6055]">Gestion des Leads</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            id="doc-leads-link"
            onClick={() => alert("Indexation de la documentation des leads d'élite.")}
            className="text-xs font-semibold text-[#8E8071] hover:text-[#9C4323] flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Documentation
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        
        {/* VIEW 1: PIPELINE DE VENTE */}
        {viewMode === 'pipeline' && (
          <motion.div
            key="leads-pipeline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Title with subtitle as in image */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2F2B28] tracking-tight">
                  Pipeline de Vente
                </h2>
                <p className="text-sm text-[#8E8071] font-sans mt-0.5">
                  Suivez et interagissez avec vos prospects les plus prometteurs.
                </p>
              </div>

              {/* Filtering bar representing image controls */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8E8071] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="search-leads-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher..."
                    className="pl-9 pr-4 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs focus:outline-none w-44"
                  />
                </div>

                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e: any) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs text-[#2F2B28] focus:outline-none"
                >
                  <option value="all">Tous les Statuts</option>
                  <option value="chaud">Statut Chaud</option>
                  <option value="tiede">Statut Tiède</option>
                  <option value="froid">Statut Froid</option>
                </select>
              </div>
            </div>

            {/* Quick action: simulate new lead creation */}
            <div className="bg-[#EFE7DD] p-4 rounded-2xl border border-[#DCD0C3]/60 flex items-center justify-between text-xs text-[#6A6055]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 fill-current" />
                <span>Envie de tester la fiche détaillée ? Cliquez sur un des leads ci-dessous pour ouvrir son profil comme dans la maquette.</span>
              </div>
              <button
                id="btn-quick-new-lead"
                onClick={() => {
                  const demoNames = ["Isabella Montero", "Alexander Wang", "Elena Rostova"];
                  const picked = demoNames[Math.floor(Math.random() * demoNames.length)];
                  const isExisting = leadsState.some(l => l.name === picked);
                  if (isExisting) return;
                  
                  const newDemoLead: Lead = {
                    id: `demo-${Date.now()}`,
                    name: picked,
                    status: 'chaud',
                    company: 'HNW Club Partner',
                    title: 'Private Yacht Owner',
                    location: 'Monaco',
                    email: `${picked.toLowerCase().replace(' ', '')}@monacoyachting.mc`,
                    phone: '+377 93 12 34 56',
                    score: 95,
                    engagement: 'High',
                    timelineDays: 14,
                    interestProperty: {
                      title: 'Villa Terracotta Reserve',
                      price: 2450000,
                      location: 'Cannes, France',
                      bedrooms: 6,
                      baths: 6,
                      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                      description: 'Recherche active de bien avec héliport et garage à jet-ski.'
                    },
                    notes: 'Doit être discret. Préfère un arrangement de visite privée par hélicoptère.',
                    activities: [],
                    qualification: {
                      source: 'Direct Client',
                      budget: '€3M – €4M',
                      language: 'Russian, Italian',
                      assignedAgent: 'Me'
                    }
                  };
                  setLeadsState(prev => [...prev, newDemoLead]);
                  alert(`Le lead privatif ${picked} a bien été importé dans le pipeline.`);
                }}
                className="px-3 py-1.5 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-lg font-bold"
              >
                + Importer un Lead
              </button>
            </div>

            {/* Leads Cards Container grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column leads board list (occupies 7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    id={`lead-card-${lead.id}`}
                    onClick={() => {
                      setSelectedLeadId(lead.id);
                      setViewMode('profile');
                    }}
                    className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm hover:shadow-md hover:border-[#9C4323]/50 hover:bg-[#FAF6F1]/20 transition-all cursor-pointer relative group text-left"
                  >
                    {/* Hot label pill in image style */}
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-bold uppercase ${
                        lead.status === 'chaud' 
                          ? 'bg-[#FDF1EB] text-[#9C4323]' 
                          : lead.status === 'tiede' 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'bg-stone-100 text-stone-500'
                      }`}>
                        {lead.status}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Round placeholder avatar with initials */}
                      <div className="w-14 h-14 bg-[#F3ECE5] rounded-full flex items-center justify-center font-bold text-[#9C4323]">
                        {lead.name.split(' ').map(n=>n[0]).join('')}
                      </div>

                      <div className="space-y-4 flex-1">
                        <div>
                          <h4 className="font-serif text-lg font-bold text-[#2F2B28] group-hover:text-[#9C4323] transition-colors">
                            {lead.name}
                          </h4>
                          <p className="text-xs text-[#8E8071]">
                            {lead.title} @ <span className="font-semibold">{lead.company}</span>
                          </p>
                        </div>

                        {/* Interactive summary metadata */}
                        <div className="grid grid-cols-2 gap-3 text-xs text-[#6A6055]">
                          <div>
                            <span className="text-[10px] text-[#A2978B] block font-mono">INTÉRÊT PRINCIPAL :</span>
                            <span className="font-semibold text-stone-800">{lead.interestProperty.title}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#A2978B] block font-mono">DERNIER CONTACT :</span>
                            <span className="font-semibold text-stone-800">Hier, 14:30</span>
                          </div>
                        </div>

                        {lead.status === 'tiede' && (
                          <div className="p-3 bg-amber-50/70 text-[#714E29] rounded-xl text-xs italic border border-amber-100/50">
                            "{lead.interestProperty.description}"
                          </div>
                        )}

                        {/* Action buttons list in image style */}
                        <div className="pt-2 border-t border-[#F3ECE5] flex items-center gap-2.5">
                          {lead.status === 'chaud' ? (
                            <>
                              <button
                                type="button"
                                id={`btn-call-${lead.id}`}
                                onClick={(e) => { e.stopPropagation(); alert(`Appel sortant simulé vers : ${lead.phone}`); }}
                                className="px-4 py-2 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                Appeler
                              </button>
                              
                              <button
                                type="button"
                                id={`btn-msg-${lead.id}`}
                                onClick={(e) => { e.stopPropagation(); alert(`Message de tchat sécurisé ouvert pour ${lead.name}`); }}
                                className="px-4 py-2 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors bg-white"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                Message
                              </button>

                              <button
                                type="button"
                                id={`btn-plan-${lead.id}`}
                                onClick={(e) => { e.stopPropagation(); setSelectedLeadId(lead.id); setViewMode('profile'); }}
                                className="px-4 py-2 bg-[#FAF5EF] text-[#6A6055] hover:bg-[#E9DFD5] rounded-xl text-xs font-semibold transition-colors"
                              >
                                Planifier Visite
                              </button>
                            </>
                          ) : lead.status === 'froid' ? (
                            <button
                              type="button"
                              id={`btn-relancer-${lead.id}`}
                              onClick={(e) => { e.stopPropagation(); alert(`Email exclusif de relance envoyé à ${lead.email}`); }}
                              className="px-5 py-2 bg-stone-900 text-white hover:bg-stone-800 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                            >
                              <Clock className="w-3.5 h-3.5" />
                              RELANCER
                            </button>
                          ) : (
                            <>
                              <button
                                type="button"
                                id={`btn-note-${lead.id}`}
                                onClick={(e) => { e.stopPropagation(); setSelectedLeadId(lead.id); setViewMode('profile'); }}
                                className="px-4 py-2 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] rounded-xl text-xs font-semibold flex items-center gap-1.5"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                                Note
                              </button>
                              
                              <button
                                type="button"
                                id={`btn-send-${lead.id}`}
                                onClick={(e) => { e.stopPropagation(); alert(`Fiche technique envoyée avec succès.`); }}
                                className="px-4 py-2 bg-[#9C4323] text-white hover:bg-[#85351a] rounded-xl text-xs font-semibold"
                              >
                                Envoyer
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column spotlight asset preview card as in screen 7 (occupies 5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden flex flex-col justify-between group">
                  <div className="h-64 relative overflow-hidden bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                      alt="Villa Terracotta Reserve spotlight" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                        Bien le plus consulté
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 text-white space-y-1">
                      <h4 className="font-serif text-xl font-bold">Villa Terracotta Reserve</h4>
                      <p className="text-xs text-white/80">Cannes, France • 2 450 000 €</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="p-3 bg-[#FCFAF7] border border-[#F3ECE5] rounded-2xl flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-[#A2978B] font-mono leading-none">TRAFFIC LEADS</p>
                        <p className="text-sm font-semibold text-[#2F2B28] mt-1.5">12 leads actifs sur ce bien cette semaine</p>
                      </div>
                      <Users className="w-5 h-5 text-[#9C4323] shrink-0" />
                    </div>

                    <button
                      type="button"
                      id="view-spotlight-dossier"
                      onClick={() => alert("Dossier de vente prestige d'architecte chargé (PDF, plans, rapports financiers).")}
                      className="w-full py-3 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    >
                      Voir le Dossier
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Grid stats as seen on screen 7 at bottom */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FAF5EF] p-4.5 rounded-2xl border border-[#E8DFC2]/30 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#8E8071]">Total Leads</span>
                    <span className="text-2xl font-serif font-black text-[#2F2B28] block mt-1">42</span>
                  </div>
                  <div className="bg-[#FAF5EF] p-4.5 rounded-2xl border border-[#E8DFC2]/30 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#8E8071]">Chaud (Prio)</span>
                    <span className="text-2xl font-serif font-black text-[#9C4323] block mt-1">08</span>
                  </div>
                  <div className="bg-[#FAF5EF] p-4.5 rounded-2xl border border-[#E8DFC2]/30 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#8E8071]">Visites Prévues</span>
                    <span className="text-2xl font-serif font-black text-[#2F2B28] block mt-1">05</span>
                  </div>
                  <div className="bg-[#FAF5EF] p-4.5 rounded-2xl border border-[#E8DFC2]/30 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#8E8071]">Taux de Conversion</span>
                    <span className="text-2xl font-serif font-black text-emerald-800 block mt-1">12%</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* VIEW 2: LEAD DETAILED PROFILE (JOHN DOE) */}
        {viewMode === 'profile' && (
          <motion.div
            key="lead-profile-details"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Header with quick back arrow */}
            <div className="flex items-center gap-3">
              <button 
                id="btn-back-chevron"
                onClick={() => setViewMode('pipeline')}
                className="p-2 hover:bg-[#F3ECE5] text-[#8E8071] hover:text-[#2F2B28] rounded-xl transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2F2B28] tracking-tight">Profile de Lead : {activeLead.name}</h3>
                <p className="text-xs text-[#8E8071]">Consulter et configurer les interactions exclusives pour ce prospect.</p>
              </div>
            </div>

            {/* Main grid splitter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left major info column (occupies 8 cols) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* 1. Header Hero Card with John Doe picture as in mockup */}
                <div className="bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 relative text-left">
                  
                  {/* Photo representing the agent or lead portrait */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md bg-stone-100 shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                      alt={activeLead.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-serif text-3xl font-bold text-[#2F2B28] tracking-tight">
                          {activeLead.name}
                        </h2>
                        <span className="px-3 py-1 bg-[#FDF1EB] text-[#9C4323] text-[9px] font-bold font-mono uppercase rounded-full">
                          Hot Lead
                        </span>
                      </div>
                      
                      <p className="text-sm text-[#8E8071] mt-1">
                        {activeLead.company} • <span className="font-semibold text-stone-700">{activeLead.title}</span> • {activeLead.location}
                      </p>
                    </div>

                    {/* Score indicators as in screen 4 */}
                    <div className="grid grid-cols-3 gap-4 pt-3 border-t border-[#F3ECE5]">
                      <div className="p-3 bg-[#FCFAF7] border border-[#F3ECE5] rounded-2xl">
                        <span className="text-[10px] text-[#A2978B] font-mono block">LEAD SCORE</span>
                        <span className="text-xl font-serif font-black text-[#9C4323]">{activeLead.score} / 100</span>
                      </div>
                      <div className="p-3 bg-[#FCFAF7] border border-[#F3ECE5] rounded-2xl">
                        <span className="text-[10px] text-[#A2978B] font-mono block">ENGAGEMENT</span>
                        <span className="text-xl font-serif font-black text-emerald-800">{activeLead.engagement}</span>
                      </div>
                      <div className="p-3 bg-[#FCFAF7] border border-[#F3ECE5] rounded-2xl">
                        <span className="text-[10px] text-[#A2978B] font-mono block">TIMELINE</span>
                        <span className="text-xl font-serif font-black text-[#2F2B28]">{activeLead.timelineDays} Days</span>
                      </div>
                    </div>
                  </div>

                  {/* Telephone / Email icon buttons circle top-right as in screen 4 */}
                  <div className="flex md:flex-col gap-2 shrink-0 pt-2">
                    <button 
                      id="action-phone-circle"
                      onClick={() => alert(`Téléphone : ${activeLead.phone}`)}
                      className="p-3 bg-[#FCFAF7] hover:bg-[#EADFD5] text-[#9C4323] rounded-full border border-[#E8DFC2]/40 shadow-sm transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                    </button>
                    <button 
                      id="action-mail-circle"
                      onClick={() => alert(`Email : ${activeLead.email}`)}
                      className="p-3 bg-[#FCFAF7] hover:bg-[#EADFD5] text-[#9C4323] rounded-full border border-[#E8DFC2]/40 shadow-sm transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <button 
                      id="action-chat-circle"
                      onClick={() => alert(`Discussion sécurisée avec ${activeLead.name}`)}
                      className="p-3 bg-[#FCFAF7] hover:bg-[#EADFD5] text-[#9C4323] rounded-full border border-[#E8DFC2]/40 shadow-sm transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* 2. Interest property card as on screen 4 */}
                <div className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm text-left space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Interest: {activeLead.interestProperty.title}</h3>
                    <span className="text-xs font-semibold text-[#9C4323] hover:underline cursor-pointer">View Listing ↗</span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <img 
                      src={activeLead.interestProperty.image} 
                      alt="Villa Terracotta Preview" 
                      className="w-full md:w-44 h-32 rounded-2xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-3 flex-1">
                      <div className="flex gap-4 text-xs font-mono text-[#8E8071]">
                        <span>🏠 {activeLead.interestProperty.bedrooms} Bedrooms</span>
                        <span>🛁 {activeLead.interestProperty.baths} Baths</span>
                        <span>📍 {activeLead.interestProperty.location}</span>
                      </div>
                      <p className="text-sm italic text-stone-600 font-sans leading-relaxed">
                        "{activeLead.interestProperty.description}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Communication History panel list to log interactions */}
                <div className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm text-left space-y-6">
                  <div className="flex justify-between items-center pb-2 border-b border-[#F3ECE5]">
                    <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Communication History</h3>
                    <button
                      id="btn-log-activity"
                      onClick={() => setShowAddActivityForm(!showAddActivityForm)}
                      className="px-3.5 py-1.5 bg-[#FAF5EF] hover:bg-[#E9DFD5] text-[#9C4323] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      {showAddActivityForm ? 'Cancel' : 'Log Custom Activity'}
                    </button>
                  </div>

                  {/* Inline Activity Creation Form */}
                  {showAddActivityForm && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-[#FAF5EF] border border-[#E8DFC2] rounded-2xl space-y-4 text-xs"
                    >
                      <p className="font-serif font-black text-[#2F2B28] text-sm">Log New Activity</p>
                      
                      {/* Type Pill Selector */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-[#8E8071] font-mono block">ACTIVITY TYPE:</span>
                        <div className="flex flex-wrap gap-2">
                          {(['call', 'email', 'whatsapp', 'meeting', 'note'] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setActivityTypeInput(type);
                                if (!activityTitleInput) {
                                  if (type === 'call') setActivityTitleInput('Un entretien téléphonique');
                                  if (type === 'email') setActivityTitleInput('Envoi d\'email de suivi');
                                  if (type === 'whatsapp') setActivityTitleInput('Échanges de messages WhatsApp');
                                  if (type === 'meeting') setActivityTitleInput('Rencontre physique / Visite de bien');
                                  if (type === 'note') setActivityTitleInput('Note d\'information interne');
                                }
                              }}
                              className={`px-3 py-1.5 rounded-lg border font-bold transition-all capitalize cursor-pointer ${
                                activityTypeInput === type 
                                  ? 'bg-[#9C4323] text-white border-[#9C4323] shadow-sm' 
                                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title Input */}
                        <div className="space-y-1">
                          <label htmlFor="activity-title" className="text-[10px] text-[#8E8071] font-mono block">TITLE:</label>
                          <input
                            id="activity-title"
                            type="text"
                            value={activityTitleInput}
                            onChange={(e) => setActivityTitleInput(e.target.value)}
                            placeholder="e.g. Appel sortant de courtoisie"
                            className="w-full px-3 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#9C4323]/40"
                          />
                        </div>

                        {/* Optional Duration Input for Calls */}
                        {activityTypeInput === 'call' && (
                          <div className="space-y-1">
                            <label htmlFor="activity-duration" className="text-[10px] text-[#8E8071] font-mono block">DURATION (OPTIONAL):</label>
                            <input
                              id="activity-duration"
                              type="text"
                              value={activityDurationInput}
                              onChange={(e) => setActivityDurationInput(e.target.value)}
                              placeholder="e.g. 5m 12s"
                              className="w-full px-3 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#9C4323]/40"
                            />
                          </div>
                        )}
                      </div>

                      {/* Description Textarea */}
                      <div className="space-y-1">
                        <label htmlFor="activity-desc" className="text-[10px] text-[#8E8071] font-mono block">DESCRIPTION / FEEDBACK:</label>
                        <textarea
                          id="activity-desc"
                          rows={2}
                          value={activityDescInput}
                          onChange={(e) => setActivityDescInput(e.target.value)}
                          placeholder="What did you discuss? What are the next steps?"
                          className="w-full px-3 py-2 bg-white border border-[#E8DFC2] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#9C4323]/40"
                        />
                      </div>

                      {/* Submit / Cancel Buttons */}
                      <div className="flex justify-end gap-2 pt-1 border-t border-[#F3ECE5]">
                        <button
                          type="button"
                          onClick={() => setShowAddActivityForm(false)}
                          className="px-4 py-1.5 border border-[#E8DFC2] hover:bg-stone-100 text-stone-700 font-bold rounded-lg transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveCustomActivity}
                          className="px-4 py-1.5 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-lg transition-all shadow-sm"
                        >
                          Save Activity
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Activity History Timeline */}
                  <div className="space-y-5 relative pl-4 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EADFD5]">
                    {activeLead.activities.map((act) => {
                      const getActivityIcon = (type: string) => {
                        switch (type) {
                          case 'call': return <Phone className="w-3 h-3 text-[#9C4323]" />;
                          case 'email': return <Mail className="w-3 h-3 text-[#9C4323]" />;
                          case 'whatsapp': return <MessageSquare className="w-3 h-3 text-[#9C4323]" />;
                          case 'meeting': return <Calendar className="w-3 h-3 text-[#9C4323]" />;
                          default: return <Edit3 className="w-3 h-3 text-[#9C4323]" />;
                        }
                      };

                      return (
                        <div key={act.id} className="relative flex gap-5 text-sm items-start">
                          {/* Dot circle with active icon */}
                          <div className="w-6 h-6 bg-white border-2 border-[#9C4323] rounded-full shrink-0 z-10 flex items-center justify-center shadow-sm">
                            {getActivityIcon(act.type)}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-bold text-[#2F2B28]">{act.title}</p>
                              <span className="text-[10px] text-[#A2978B] font-mono">{act.date}</span>
                              {act.duration && (
                                <span className="inline-block px-1.5 py-0.5 bg-stone-100 text-[#6A6055] font-mono text-[9px] rounded font-semibold">
                                  ⏱ {act.duration}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#6A6055] mt-1 pr-2 leading-relaxed">{act.description}</p>
                            {act.extra && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200/50 rounded text-[9px] font-semibold">
                                {act.extra}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* 4. Internal notes container */}
                <div id="internal-notes-card" className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm text-left space-y-4">
                  <div className="flex items-center gap-2 text-[#9C4323]">
                    <Edit3 className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Internal Notes</h3>
                  </div>
                  
                  <textarea
                    id="lead-notes-textarea"
                    rows={3}
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Add a confidential note about this lead..."
                    className="w-full px-4 py-3 bg-[#FAF5EF] border border-[#E8DFC2] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#9C4323]/40 focus:border-[#9C4323] text-[#2F2B28]"
                  />

                  <div className="flex justify-between items-center pt-2">
                    <p className="text-[10px] text-[#A2978B]">Ces notes ne sont visibles que par vous et vos associés exclusifs.</p>
                    <button
                      id="save-lead-note-btn"
                      onClick={handleSaveNote}
                      className="px-5 py-2 bg-[#9B3412] text-white hover:bg-stone-900 transition-colors rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Save Note
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Right panel side operations column (occupies 4 cols) */}
              <div className="lg:col-span-4 space-y-6 text-left">
                
                {/* Brown Action Cards */}
                <button
                  type="button"
                  id="right-panel-visit-card"
                  onClick={() => alert("Mise en relation directe avec le calendrier de planification.")}
                  className="w-full bg-[#9C4323] hover:bg-[#85351a] p-6 rounded-2xl text-white text-left shadow-md transition-all border border-[#9C4323]/20 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <Calendar className="w-6 h-6 text-white/90 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-serif text-lg font-bold leading-tight">Schedule a Visit</h4>
                    <p className="text-xs text-[#F3ECE5]/85 mt-1">Planifier une clé en main</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  type="button"
                  id="right-panel-convert-card"
                  onClick={() => handleMarkAsConverted(activeLead.id)}
                  className="w-full bg-stone-900 hover:bg-stone-850 p-6 rounded-2xl text-white text-left shadow-md transition-all border border-stone-800 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <Award className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-serif text-lg font-bold leading-tight">Mark as Converted</h4>
                    <p className="text-xs text-stone-300 mt-1">Lead qualifié et signé</p>
                  </div>
                  <UserCheck className="w-5 h-5 opacity-80" />
                </button>

                {/* Qualification details sidebar card */}
                <div className="bg-[#FAF5EF] p-6 rounded-2xl border border-[#E8DFC2]/30 space-y-4 text-xs text-[#2F2B28]">
                  <h4 className="font-bold uppercase tracking-wider text-[#8E8071] text-[10px] font-mono">QUALIFICATION DETAILS</h4>
                  
                  <div className="divide-y divide-[#EADFD5]/40 space-y-2 pt-1">
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#8E8071]">Source :</span>
                      <span className="font-semibold">{activeLead.qualification.source}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#8E8071]">Budget :</span>
                      <span className="font-semibold">{activeLead.qualification.budget}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#8E8071]">Preferred Language :</span>
                      <span className="font-semibold">{activeLead.qualification.language}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#8E8071]">Assigned Agent :</span>
                      <span className="font-semibold">{activeLead.qualification.assignedAgent}</span>
                    </div>
                  </div>
                </div>

                {/* Next recommended action box */}
                <div className="p-5 bg-white rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-xs space-y-3">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-orange-700 font-mono block">NEXT RECOMMENDED ACTION</span>
                  <div className="p-3 bg-orange-50/45 rounded-xl border border-orange-100 flex items-center gap-3">
                    <div className="p-2 bg-orange-100 text-[#9C4323] rounded-lg">
                      <PlusCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold">Send "Market Report 2024"</p>
                      <p className="text-[10px] text-[#8E8071]">Contains values of Cannes & Tuscany</p>
                    </div>
                  </div>
                </div>

                {/* Bottom buttons row */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => alert("Le lead a été archivé dans le dossier d'élite historique.")}
                    className="flex-1 py-2.5 border border-[#E8DFC2] text-[#6A6055] hover:bg-stone-50 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Archive className="w-3.5 h-3.5" />
                    ARCHIVE LEAD
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Transfert de la gérance de ce prospect vers un associé exclusif.")}
                    className="flex-1 py-2.5 border border-[#E8DFC2] text-[#6A6055] hover:bg-stone-50 rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    TRANSFER
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
