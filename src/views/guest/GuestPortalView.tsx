import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  Trash2, 
  Key, 
  VolumeX, 
  Smile, 
  HelpCircle, 
  MessageSquare,
  Compass,
  ArrowRight,
  Heart,
  ShieldCheck,
  FileCheck,
  CreditCard,
  UserCheck,
  Download,
  UploadCloud,
  Lock,
  Copy,
  Plus,
  ArrowUpRight,
  CheckCircle,
  BookOpen,
  RefreshCw
} from 'lucide-react';
import { 
  PrestigeCatalogueScreen,
  PrestigePropertyDetailScreen,
  TrustScoreScreen,
  CreditSimulatorScreen,
  CheckoutScreen,
  ReservationSentScreen
} from '../client/LHabitationSubViews';
import GuestBailView from './GuestBailView';
import GuestNotificationsView from './GuestNotificationsView';

export default function GuestPortalView() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Custom navigation menu for all sub mockups under Guest role
  // Dashboard is the default entry point so the resident portal opens on the real dashboard
  const [guestSubTab, setGuestSubTab] = useState<'search' | 'detail' | 'checkout' | 'sent' | 'dashboard' | 'credit' | 'identity' | 'lease' | 'payments' | 'stay' | 'notifications' | 'virtual-visit' | 'waiting' | 'vault'>('dashboard');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  // Interactive configurations for subtabs
  // Tab 2: Identity verified trigger
  type VerificationStepType = 'document' | 'liveness' | 'completed';
  const [identityStep, setIdentityStep] = useState<VerificationStepType>('document');
  const [docType, setDocType] = useState<'passport' | 'id_card'>('passport');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [biometricChecked, setBiometricChecked] = useState(false);

  // Tab 3: Lease signature completed trigger
  const [leaseSigned, setLeaseSigned] = useState(false);
  const [activeLeaseSection, setActiveLeaseSection] = useState<'parties' | 'description' | 'duration' | 'rent'>('parties');

  // Tab 4: Payments simulation configurations
  const [selectedPayMode, setSelectedPayMode] = useState<'wire' | 'momo'>('wire');
  const [momoOperator, setMomoOperator] = useState<'mtn' | 'moov'>('mtn');
  const [momoPhone, setMomoPhone] = useState('+229 97 00 00 00');
  const [momoPaymentSuccess, setMomoPaymentSuccess] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div id="guest-portal-view" className="space-y-6 text-left">
      
      {/* Top Luxe Living Brand Ribbon */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE5] select-none text-xs">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-black tracking-widest text-[#9C4323] uppercase">
            LUXE LIVING
          </span>
          <span className="text-[#B6AFA6]">/</span>
          <span className="font-mono text-[#8E8071] uppercase tracking-wider font-bold">Portail Résident</span>
        </div>
        
        {/* Sub Navigation Bar to select different screen mockups */}
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-none pb-1">
          <button 
            id="tab-search"
            onClick={() => setGuestSubTab('search')}
            className={`cursor-pointer font-bold ${['search', 'detail', 'checkout', 'sent'].includes(guestSubTab) ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Explorer
          </button>
          <button 
            id="tab-dashboard"
            onClick={() => setGuestSubTab('dashboard')}
            className={`cursor-pointer font-bold ${guestSubTab === 'dashboard' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Trust Score
          </button>
          <button 
            id="tab-credit"
            onClick={() => setGuestSubTab('credit')}
            className={`cursor-pointer font-bold ${guestSubTab === 'credit' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Crédit FinTech
          </button>
          <button 
            id="tab-identity"
            onClick={() => setGuestSubTab('identity')}
            className={`cursor-pointer font-bold ${guestSubTab === 'identity' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Identité
          </button>
          <button 
            id="tab-lease"
            onClick={() => setGuestSubTab('lease')}
            className={`cursor-pointer font-bold ${guestSubTab === 'lease' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Bail & Signature
          </button>
          <button 
            id="tab-payments"
            onClick={() => setGuestSubTab('payments')}
            className={`cursor-pointer font-bold ${guestSubTab === 'payments' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Paiements
          </button>
          <button 
            id="tab-notifications"
            onClick={() => setGuestSubTab('notifications')}
            className={`cursor-pointer font-bold ${guestSubTab === 'notifications' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Notifications
          </button>
          <button 
            id="tab-stay"
            onClick={() => setGuestSubTab('stay')}
            className={`cursor-pointer font-bold ${guestSubTab === 'stay' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Mon Séjour
          </button>
          <button 
            id="tab-vault"
            onClick={() => setGuestSubTab('vault')}
            className={`cursor-pointer font-bold flex items-center gap-1 ${guestSubTab === 'vault' ? 'text-[#9C4323] border-b-2 border-[#9C4323]' : 'text-stone-500 hover:text-stone-800'}`}
          >
            <Lock className="w-3.5 h-3.5" /> Coffre-fort
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            id="guest-chat-btn-header" 
            onClick={() => alert("Messagerie d'assistance directe ouverte avec le Concierge de permanence.")}
            className="p-1.5 hover:bg-[#F3ECE5] text-[#8E8071] rounded-full transition-colors relative cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#9C4323] rounded-full" />
          </button>
          <div className="w-7 h-7 rounded-full bg-stone-300 overflow-hidden ring-1 ring-[#9C4323]">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" 
              alt="Guest profile user" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {copiedText && (
        <div id="toast-notif" className="fixed bottom-6 right-6 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-xl shadow-lg z-50 flex items-center gap-2">
          <span>✓</span> Copié : <span className="font-mono font-bold text-amber-50">{copiedText}</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        
        {/* ========================================== */}
        {/* NEW TAB: EXPLORER / CATALOGUE             */}
        {/* ========================================== */}
        {guestSubTab === 'search' && (
          <motion.div key="guest-search" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PrestigeCatalogueScreen onSelectProperty={(id) => { setSelectedPropertyId(id); setGuestSubTab('detail'); }} />
          </motion.div>
        )}

        {/* DETAIL PROPERTY */}
        {guestSubTab === 'detail' && (
          <motion.div key="guest-detail" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <div className="mb-4">
              <button onClick={() => setGuestSubTab('search')} className="text-[#9C4323] font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer">
                ← Retour au catalogue
              </button>
            </div>
            <PrestigePropertyDetailScreen 
              onReserve={() => setGuestSubTab('checkout')} 
              onVirtualVisit={() => setGuestSubTab('virtual-visit')}
            />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: VISITE VIRTUELLE (2000 FCFA)     */}
        {/* ========================================== */}
        {guestSubTab === 'virtual-visit' && (
          <motion.div key="guest-virtual-visit" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
            <div className="mb-2">
              <button onClick={() => setGuestSubTab('detail')} className="text-[#9C4323] font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer">
                ← Retour aux détails
              </button>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-[#E8DFC2]/30 shadow-xl space-y-6 max-w-4xl mx-auto">
              <div className="text-center">
                <span className="text-[9px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">IMMERSION 3D</span>
                <h3 className="font-serif text-2xl font-black text-[#2F2B28] mt-1">Visite Virtuelle Premium</h3>
                <p className="text-xs text-[#8E8071] mt-2 max-w-lg mx-auto">
                  Accédez à la modélisation 3D intégrale du bien et naviguez dans chaque pièce comme si vous y étiez. Frais d'accès : 2 000 FCFA.
                </p>
              </div>

              <div className="h-[400px] w-full bg-stone-900 rounded-2xl overflow-hidden relative border-4 border-stone-800 shadow-inner group">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" alt="3D Room" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all">
                  <div className="bg-white/10 p-4 rounded-full border border-white/20 mb-4">
                    <Compass className="w-10 h-10 text-white" />
                  </div>
                  <button onClick={() => alert("Paiement MoMo / Carte de 2000 FCFA simulé avec succès ! Vous êtes dans la visite 3D.")} className="px-6 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl shadow-lg cursor-pointer">
                    Payer 2 000 FCFA et Commencer la visite
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 text-center">
                <p className="text-sm font-bold text-stone-800 mb-4">Le bien vous plaît ? Passez à l'étape suivante.</p>
                <button 
                  onClick={() => setGuestSubTab('waiting')}
                  className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl shadow-md cursor-pointer"
                >
                  Manifester mon intérêt (Visite Physique)
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: WAITING VALIDATION               */}
        {/* ========================================== */}
        {guestSubTab === 'waiting' && (
          <motion.div key="guest-waiting" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex justify-center items-center py-20">
            <div className="bg-white rounded-3xl p-10 border border-[#E8DFC2]/30 shadow-xl max-w-md w-full text-center space-y-6">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500 relative">
                <div className="absolute inset-0 border-4 border-amber-200 rounded-full border-t-amber-500 animate-spin" />
                <UserCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-black text-[#2F2B28]">Dossier en analyse</h3>
                <p className="text-sm text-[#8E8071] mt-3 leading-relaxed">
                  Votre manifestation d'intérêt a été transmise à notre agent d'élite et au propriétaire. Veuillez patienter pour leur validation formelle via l'application.
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-500 font-mono">
                Statut actuel : En attente de l'Hôte
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-[10px] text-stone-400 font-bold uppercase mb-2">Simulateur (Pour le test)</p>
                <button 
                  onClick={() => setGuestSubTab('dashboard')}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs cursor-pointer shadow-md"
                >
                  [Dev] Simuler la validation (Accès Dashboard & Clés)
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: COFFRE-FORT DOCUMENTS            */}
        {/* ========================================== */}
        {guestSubTab === 'vault' && (
          <motion.div key="guest-vault" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-[#E8DFC2]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-black text-[#2F2B28]">Coffre-fort Numérique</h3>
                  <p className="text-xs text-[#8E8071] mt-1">Vos documents personnels, baux, et reçus cryptés par Terracotta.</p>
                </div>
                <button className="px-5 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 cursor-pointer">
                  <UploadCloud className="w-4 h-4" /> Ajouter un document
                </button>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Bail de location signé (Dressrosa)", date: "15 Mai 2026", type: "PDF", verified: true },
                  { title: "Pièce d'identité (Passeport)", date: "10 Mai 2026", type: "JPG", verified: true },
                  { title: "Reçu - Visite Virtuelle", date: "12 Mai 2026", type: "PDF", verified: true },
                  { title: "Reçu - Dépôt de garantie Escrow", date: "14 Mai 2026", type: "PDF", verified: true },
                ].map((doc, i) => (
                  <div key={i} className="p-4 border border-stone-200 rounded-xl flex items-start gap-4 hover:border-[#9C4323]/40 transition-colors bg-stone-50/50 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center text-stone-500 shrink-0">
                      <FileCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-stone-800">{doc.title}</h4>
                      <p className="text-[10px] text-stone-500 font-mono mt-1">Ajouté le {doc.date} • {doc.type}</p>
                    </div>
                    <button className="p-2 text-stone-400 hover:text-[#9C4323] transition-colors rounded-lg hover:bg-[#F3ECE5]">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* CHECKOUT / RESERVE */}
        {guestSubTab === 'checkout' && (
          <motion.div key="guest-checkout" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <div className="mb-4">
              <button onClick={() => setGuestSubTab('detail')} className="text-[#9C4323] font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer">
                ← Retour aux détails
              </button>
            </div>
            <CheckoutScreen onConfirm={() => setGuestSubTab('sent')} />
          </motion.div>
        )}

        {/* RESERVATION SENT */}
        {guestSubTab === 'sent' && (
          <motion.div key="guest-sent" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -15 }}>
            <ReservationSentScreen onBackDocs={() => setGuestSubTab('identity')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: TRUST SCORE                      */}
        {/* ========================================== */}
        {guestSubTab === 'dashboard' && (
          <motion.div key="guest-dashboard" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <TrustScoreScreen onExplore={() => setGuestSubTab('search')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: CREDIT FINTECH                   */}
        {/* ========================================== */}
        {guestSubTab === 'credit' && (
          <motion.div key="guest-credit" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <CreditSimulatorScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* SUBTAB 1 : ORIGINAL STAY CONCIERGERIE VIEW */}
        {/* ========================================== */}
        {guestSubTab === 'stay' && (
          <motion.div
            key="guest-stay"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Hero Welcome Banner */}
            <div className="relative rounded-3xl overflow-hidden h-80 shadow bg-stone-900 select-none">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Villa Terracotta grand facade" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xl text-white space-y-2">
                <h1 className="font-serif text-3.5xl md:text-4xl font-black leading-tight tracking-tight">
                  Bienvenue chez vous
                </h1>
                <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-sans mt-0.5">
                  Découvrez l'élégance de la Villa Terracotta, votre sanctuaire de luxe privé au cœur de la réserve de Cannes.
                </p>
              </div>
            </div>

            {/* Row 1: Credentials cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* WIFI Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="flex items-center gap-3 text-[#9C4323]">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2F2B28]">Wi-Fi & Connectivité</h4>
                </div>
                <div className="space-y-2 text-xs divide-y divide-[#F3ECE5]">
                  <div className="pt-1">
                    <span className="text-[9px] uppercase font-mono text-[#A2978B] block">RÉSEAU :</span>
                    <span className="font-semibold text-stone-800">Terracotta_Reserve_Guest</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-[#A2978B] block">MOT DE PASSE :</span>
                      <span className="font-mono font-bold text-stone-800">luxe-living-2024</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('luxe-living-2024', 'luxe-living-2024')}
                      className="text-[10px] font-bold text-[#9C4323] hover:underline cursor-pointer uppercase font-mono"
                    >
                      Copier
                    </button>
                  </div>
                </div>
              </div>

              {/* Trash Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="flex items-center gap-3 text-[#9C4323]">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2F2B28]">Collecte des Déchets</h4>
                </div>
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6A6055]">Ordures Ménagères</span>
                    <span className="px-2.5 py-0.5 bg-orange-50 text-orange-850 text-[9px] font-mono tracking-wider font-bold uppercase rounded">
                      Mardi / Vendredi
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6A6055]">Recyclage</span>
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-[9px] font-mono tracking-wider font-bold uppercase rounded">
                      Mercredi
                    </span>
                  </div>
                </div>
              </div>

              {/* Code keys Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="flex items-center gap-3 text-[#9C4323]">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <Key className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2F2B28]">Accès Résidence</h4>
                </div>
                <div className="space-y-2 text-xs divide-y divide-[#F3ECE5]">
                  <div className="pt-1 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-[#A2978B] block">PORTAIL PRINCIPAL :</span>
                      <span className="font-mono font-bold text-stone-800">#1978*</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('#1978*', '#1978*')}
                      className="text-[10px] font-bold text-[#9C4323] hover:underline cursor-pointer"
                    >
                      Copier
                    </button>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-[#A2978B] block">ESPACE FITNESS :</span>
                      <span className="font-mono font-bold text-stone-800">0402</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('0402', '0402')}
                      className="text-[10px] font-bold text-[#9C4323] hover:underline cursor-pointer"
                    >
                      Copier
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Split layout: Rules and neighborhood guide */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 bg-[#FAF5EF] p-8 rounded-3xl border border-[#E8DFC2]/40 space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#2F2B28]">Règles de Vie</h3>
                  <p className="text-xs text-[#8E8071]">Pour un séjour d'exception dans le respect mutuel</p>
                </div>
                <div className="space-y-4 text-xs tracking-normal leading-relaxed text-[#2F2B28]">
                  <div className="flex gap-3">
                    <VolumeX className="w-5 h-5 text-[#9C4323] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold">Heures de Calme</h5>
                      <p className="text-[#6A6055] mt-1">Nous vous prions de respecter la quiétude du voisinage entre 22h00 et 08h00.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-5 h-5 text-[#9C4323] shrink-0 font-bold">🚭</span>
                    <div>
                      <h5 className="font-bold">Espace Non-Fumeur</h5>
                      <p className="text-[#6A6055] mt-1">Strictement interdit en intérieur. Autorisée uniquement sur terrasses ventilées.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="w-5 h-5 text-[#9C4323] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold">Animaux de Compagnie</h5>
                      <p className="text-[#6A6055] mt-1">Autorisés sur accord prélèvements extérieurs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2F2B28]">Guide de Quartier</h3>
                    <p className="text-xs text-[#8E8071]">Recommandations exclusives d'élite du personnel</p>
                  </div>
                  <Compass className="w-5 h-5 text-[#9C4323]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="rounded-2xl overflow-hidden border border-[#E8DFC2]/30 shadow-sm group">
                    <div className="h-32 relative overflow-hidden bg-stone-100">
                      <img 
                        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80" 
                        alt="Fournil d'Or Bakery" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-stone-900/80 text-[8px] font-mono tracking-widest text-[#FBF9F4] uppercase rounded font-bold">
                        Boulangerie
                      </span>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h5 className="font-semibold text-xs text-[#2F2B28]">Le Fournil d'Or</h5>
                      <p className="text-[10px] text-[#8E8071]">À 5 min • Les meilleurs croissants pur beurre du pays.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-[#E8DFC2]/30 shadow-sm group">
                    <div className="h-32 relative overflow-hidden bg-stone-100">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=300&q=80" 
                        alt="Atelier de Luxe Boutique" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-stone-900/80 text-[8px] font-mono tracking-widest text-[#FBF9F4] uppercase rounded font-bold">
                        Shopping
                      </span>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h5 className="font-semibold text-xs text-[#2F2B28]">L'Atelier Luxe</h5>
                      <p className="text-[10px] text-[#8E8071]">À 12 min • Édition limitée de créateurs locaux.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Assistance brown card */}
            <div className="bg-[#9B3412] text-white p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-md group">
              <div className="absolute top-0 right-0 p-8 transform translate-x-12 translate-y-[-12px] opacity-10 text-white shrink-0">
                <HelpCircle className="w-56 h-56" />
              </div>
              <div className="space-y-1.5 relative z-10">
                <h3 className="font-serif text-2xl font-bold">Besoin d'assistance ?</h3>
                <p className="text-xs text-[#FCFAF7]/85 max-w-xl">
                  Notre service conciergerie d'élite est disponible 24/7 pour satisfaire toutes vos requêtes (majors d'hommes, transferts aéroport sécurisés, yachts privés).
                </p>
              </div>
              <button
                id="btn-guest-call-concierge-tab1"
                onClick={() => alert("Lancement de la mise en relation avec le majordome de l'appartement.")}
                className="px-6 py-3 bg-white hover:bg-stone-950 text-[#9B3412] hover:text-white font-bold text-xs rounded-xl shadow transition-all shrink-0 z-10 cursor-pointer"
              >
                Contacter le Concierge
              </button>
            </div>

          </motion.div>
        )}

        {/* ========================================== */}
        {/* SUBTAB 2 : IDENTITY CHECK (mockups 5 & 12) */}
        {/* ========================================== */}
        {guestSubTab === 'identity' && (
          <motion.div
            key="guest-identity"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-lg overflow-hidden min-h-[480px]"
          >
            {/* Left brand banner exactly representing mockups 5 & 12 */}
            <div className="lg:col-span-4 bg-[#1F1B19] text-[#E8DFC2] p-8 flex flex-col justify-between relative select-none">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" 
                  alt="Elegant interior room" 
                  className="w-full h-full object-cover opacity-15"
                />
              </div>

              <div className="relative z-10">
                <span className="font-serif text-2xl font-black text-white tracking-widest block uppercase">Terracotta</span>
                <span className="font-mono text-[9px] tracking-widest text-[#9C4323] uppercase font-bold block mt-1">Reserve Gatekeeper</span>
              </div>

              <div className="relative z-10 space-y-2 text-xs">
                <p className="font-serif text-lg font-bold text-white">Sécurité & Authentification</p>
                <p className="text-[11px] text-stone-400 leading-relaxed leading-relaxed-snug">
                  La réserve requiert une validation stricte d'identité afin de maintenir la sûreté exclusive de nos domaines.
                </p>
              </div>

              <div className="relative z-10 text-[9px] font-mono text-stone-500">
                SOUVERAINETÉ ET CHIFFREMENT MILITAIRE AES-256
              </div>
            </div>

            {/* Right Interactive Form Content */}
            <div className="lg:col-span-8 p-8 lg:p-10 space-y-6 flex flex-col justify-between text-stone-800">
              
              {identityStep === 'completed' ? (
                <div className="my-auto space-y-4 text-center">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 mx-auto border border-emerald-100 shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#2F2B28]">Identité Vérifiée avec Succès !</h4>
                    <p className="text-xs text-[#8E8071] mt-1 max-w-sm mx-auto">
                      Votre dossier d'accès biométrique a été crypté, validé en blockchain locale, puis transmis à votre hôte d'élite.
                    </p>
                  </div>
                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => setGuestSubTab('search')}
                      className="px-6 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-bold cursor-pointer shadow-md flex items-center gap-2"
                    >
                      Terminer et Explorer <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIdentityStep('document')}
                      className="px-5 py-2.5 border border-stone-200 text-stone-500 rounded-xl text-xs font-bold hover:bg-stone-50 cursor-pointer"
                    >
                      Refaire l'authentification
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Step Indicators exactly as mockup 5 */}
                  <div className="flex items-center justify-center max-w-md mx-auto relative gap-1.5 text-xs text-stone-500 font-bold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#1F1B19] text-[#E8DFC2] text-[10px] flex items-center justify-center">1</span>
                      <span className="text-stone-800">Compte</span>
                    </div>
                    <div className="w-10 h-0.5 bg-stone-300" />
                    <div className="flex items-center gap-1.5">
                      <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${identityStep === 'liveness' ? 'bg-[#9C4323] text-white' : 'bg-stone-300 text-stone-900'}`}>2</span>
                      <span className={identityStep === 'document' ? 'text-stone-850 underline' : 'text-stone-400'}>Identité</span>
                    </div>
                    <div className="w-10 h-0.5 bg-stone-300" />
                    <div className="flex items-center gap-1.5">
                      <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${identityStep === 'liveness' ? 'bg-[#1F1B19] text-white animate-pulse' : 'bg-stone-200 text-stone-400'}`}>3</span>
                      <span className={identityStep === 'liveness' ? 'text-stone-850 font-black' : 'text-stone-400'}>Liveness</span>
                    </div>
                  </div>

                  {identityStep === 'document' && (
                    <div className="space-y-5 animate-fadeIn">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-stone-800">1. Sélectionnez votre Document Officiel</h4>
                        <p className="text-xs text-stone-500 mt-1">Capturez ou déposez votre document d'enregistrement.</p>
                      </div>

                      {/* Choose cards exactly like mockup 12 */}
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => { setDocType('passport'); setUploadedFile(null); }}
                          className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                            docType === 'passport' ? 'bg-amber-50/45 border-[#9C4323] text-stone-800' : 'bg-white border-stone-200 text-stone-400'
                          }`}
                        >
                          <BookOpen className="w-5 h-5 text-[#9C4323]" />
                          <span className="text-xs font-bold leading-none">Passeport International</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => { setDocType('id_card'); setUploadedFile(null); }}
                          className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                            docType === 'id_card' ? 'bg-amber-50/45 border-[#9C4323] text-stone-800' : 'bg-white border-stone-200 text-stone-400'
                          }`}
                        >
                          <UserCheck className="w-5 h-5 text-[#9C4323]" />
                          <span className="text-xs font-bold leading-none">Carte Nationale d'Identité</span>
                        </button>
                      </div>

                      {/* Upload drag & drop uploader exactly matching image 5 */}
                      <div className="border-2 border-dashed border-[#FAF5EF] hover:border-[#9C4323]/40 bg-[#FCFAF7] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative"
                        onClick={() => {
                          setUploadedFile(docType === 'passport' ? 'passport_anonymous.jpg' : 'identity_national.jpg');
                        }}
                      >
                        <UploadCloud className="w-10 h-10 text-stone-300" />
                        <span className="text-xs font-bold text-[#9C4323] mt-2 block">Cliquer pour survoler & capturer le scan</span>
                        <span className="text-[10px] text-stone-450 mt-1 block font-mono">PDF, PNG ou JPG (Max 15 Mo)</span>
                        {uploadedFile && (
                          <div className="absolute inset-0 bg-white/95 rounded-2xl p-4 flex items-center justify-center gap-3">
                            <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs">✓</span>
                            <div className="text-left text-xs">
                              <span className="font-bold text-stone-800 block">Fichier importé : {uploadedFile}</span>
                              <span className="text-[10px] text-stone-500 font-mono">Résolution : 3840 x 2160 pixels (Certifié)</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {identityStep === 'liveness' && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-stone-800">2. Test de Liveness Biométrique</h4>
                        <p className="text-xs text-stone-500 mt-1">Autorisez notre reconnaissance faciale à valider votre présence physique réelle.</p>
                      </div>

                      {/* Simulated camera capture stream card */}
                      <div className="h-44 w-full bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <img 
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" 
                          alt="Liveness camera feed" 
                          className="w-full h-full object-cover opacity-75 blur-xs"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 border-3 border-emerald-500 rounded-2xl animate-pulse" />
                        <div className="absolute text-center text-white space-y-2 z-10 bg-black/40 px-4 py-2 rounded-xl backdrop-blur-xs">
                          <span className="text-sm font-bold font-serif">Caméra active ...</span>
                          <span className="text-[11px] text-stone-300 block">Clignez des yeux et tournez la tête lentement.</span>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start text-xs text-stone-600">
                        <input
                          id="consent-checkbox-biometrics"
                          type="checkbox"
                          checked={biometricChecked}
                          onChange={(e) => setBiometricChecked(e.target.checked)}
                          className="mt-1 accent-[#9C4323]"
                        />
                        <label htmlFor="consent-checkbox-biometrics" className="leading-snug select-none">
                          Je consens expressément au traitement de mes empreintes faciales et données biométriques pour l'accès exclusif à la réserve.
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action buttons footer */}
              {identityStep !== 'completed' && (
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
                  <span className="text-[10px] text-stone-550 font-mono">ÉTAPE ACTIVE : {identityStep.toUpperCase()}</span>

                  <div className="flex gap-3">
                    {identityStep === 'liveness' && (
                      <button
                        type="button"
                        onClick={() => setIdentityStep('document')}
                        className="px-5 py-2.5 border border-stone-300 text-stone-500 font-bold rounded-xl text-xs hover:bg-[#FAF5EF]"
                      >
                        Retour
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        if (identityStep === 'document') {
                          if (!uploadedFile) {
                            alert("Veuillez préalablement survoler & simuler le dépôt d'un passeport !");
                            return;
                          }
                          setIdentityStep('liveness');
                        } else {
                          if (!biometricChecked) {
                            alert("Veuillez accepter le consentement biométrique.");
                            return;
                          }
                          setIdentityStep('completed');
                        }
                      }}
                      className="px-6 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continuer la vérification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* SUBTAB 3 : LEASE CONTRACT (mockups 7 & 13) */}
        {/* ========================================== */}
        {guestSubTab === 'lease' && (
          <motion.div key="guest-lease" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <GuestBailView />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* NEW TAB: NOTIFICATIONS                    */}
        {/* ========================================== */}
        {guestSubTab === 'notifications' && (
          <motion.div key="guest-notifications" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <GuestNotificationsView />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* SUBTAB 4 : PAYMENTS WIRE/MOMO (mockup 1 & 11) */}
        {/* ========================================== */}
        {guestSubTab === 'payments' && (
          <motion.div
            key="guest-payments"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 border border-[#E8DFC2]/30 shadow-xl text-left space-y-6">
              
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">SECURE ESCROW PAYMENTS</span>
                <h3 className="font-serif text-2xl font-black text-[#2F2B28] mt-1">Finalisez votre séjour</h3>
                <p className="text-xs text-[#8E8071] mt-1 leading-relaxed">
                  Réglez votre dépôt de garantie ou premier loyer en toute sécurité. Choisissez entre un virement bancaire certifié ou un paiement mobile instantané (MoMo/Moov).
                </p>
              </div>

              {/* Toggle switch between Bank Wire Transfer and MTN MoMo payment */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { setSelectedPayMode('wire'); setMomoPaymentSuccess(false); }}
                  className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                    selectedPayMode === 'wire' ? 'bg-amber-50/45 border-[#9C4323] text-stone-800' : 'bg-white border-stone-200 text-stone-500'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#9C4323]" />
                  <span className="text-xs font-bold leading-none">Virement Bancaire (Rapatriement)</span>
                  <span className="text-[9px] font-mono opacity-80 leading-snug">SOGE / SG Bank Account Sûre</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedPayMode('momo'); setMomoPaymentSuccess(false); }}
                  className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                    selectedPayMode === 'momo' ? 'bg-amber-50/45 border-[#9C4323] text-stone-800' : 'bg-white border-stone-200 text-stone-500'
                  }`}
                >
                  <RefreshCw className="w-5 h-5 text-orange-600" />
                  <span className="text-xs font-bold leading-none">Paiement MTN / Moov Mobile Money</span>
                  <span className="text-[9px] font-mono opacity-80 leading-snug">+229 Escrow MoMo instantané</span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                
                {/* CHOICE A: SECURE BANK WIRE (mockup 11) */}
                {selectedPayMode === 'wire' && (
                  <motion.div
                    key="pay-wire"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    <div className="bg-[#FAF5EF] p-5.5 rounded-2xl border border-[#E8DFC2]/30 space-y-4">
                      <span className="text-[9px] font-bold text-[#9C4323] font-mono tracking-widest block uppercase">RIB / IBAN DE CONFIANCE (SENEGAL SOGE)</span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[9px] text-stone-400 font-mono block">BANQUE DE RÉCEPTION :</span>
                          <span className="font-bold text-stone-800">SOCIETE GENERALE SENEGAL (SOGE)</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-stone-400 font-mono block">TITULAIRE DU COMPTE :</span>
                          <span className="font-bold text-stone-850">TERRACOTTA RESERVE SEQUESTRE S.A.</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-[9px] text-stone-400 font-mono block">IBAN COMPTE UNIQUE :</span>
                          <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-stone-200 mt-1 font-mono text-sm">
                            <span className="font-bold select-all text-stone-800">SN01 0285 0394 2841 8429 84</span>
                            <button
                              type="button"
                              onClick={() => {
                                handleCopy('SN01 0285 0394 2841 8429 84', 'IBAN SOGE');
                                setCopiedAccount(true);
                              }}
                              className="text-xs font-bold text-[#9C4323] hover:underline cursor-pointer"
                            >
                              Copier RIB
                            </button>
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] text-stone-400 font-mono block">CODE UNIQUE DE RÉFÉRENCE (OBLIGATOIRE) :</span>
                          <span className="font-mono text-stone-900 font-black text-sm block mt-1">TC-REV-3958</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                      <p className="leading-relaxed">
                        <b>Pro Tip :</b> Veuillez inscrire le code de référence <b className="text-amber-50">TC-REV-3958</b> dans le motif de votre virement bancaire pour parfaire l'appariement automatique du loyer sous 10 minutes.
                      </p>
                    </div>

                    <div className="pt-2 text-center text-xs">
                      <button
                        onClick={() => {
                          alert("Confirmation de virement reçue. Notre back-office effectue l'appariement avec votre banque.");
                        }}
                        className="w-full py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl shadow-md cursor-pointer"
                      >
                        J'ai effectué le virement
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* CHOICE B: MTN / MOOV MOBILE MONEY PORTAL (mockup 1) */}
                {selectedPayMode === 'momo' && (
                  <motion.div
                    key="pay-momo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    {momoPaymentSuccess ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-2xl text-xs">
                        <span className="font-bold font-mono text-[10px] block mb-1 uppercase">✓ LE PAIEMENT PRESTATION SÉCURISÉ A ÉTÉ VALIDÉ PAR NOTRE BALLAST ESCROW !</span>
                        Montant de 148 975 FCFA séquestré avec succès. L'hôte et le concierge privé d'élite Marc-André Lefebvre ont reçu une notification instantanée.
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <div className="bg-amber-50/45 p-6 rounded-2xl border border-amber-100/50 space-y-4 text-xs">
                          <span className="text-[9px] font-bold text-[#9C4323] font-mono tracking-widest block uppercase">Paiement Sécurisé MoMo / Moov</span>
                          
                          <div className="space-y-4.5">
                            <div className="flex items-center gap-4">
                              <label className="text-stone-700 font-bold shrink-0">Opérateur :</label>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => setMomoOperator('mtn')}
                                  className={`px-4 py-1.5 rounded-full font-bold text-[10px] tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                                    momoOperator === 'mtn' ? 'bg-[#9C4323] text-white shadow' : 'bg-white border border-[#E8DFC2] text-stone-500'
                                  }`}
                                >
                                  MTN BENIN / SENEGAL
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setMomoOperator('moov')}
                                  className={`px-4 py-1.5 rounded-full font-bold text-[10px] tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                                    momoOperator === 'moov' ? 'bg-[#9C4323] text-white shadow' : 'bg-white border border-[#E8DFC2] text-stone-500'
                                  }`}
                                >
                                  MOOV MONEY
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono">N° de Téléphone Mobile (Code pays requis) :</label>
                              <input
                                id="payment-momo-phone-field"
                                type="text"
                                value={momoPhone}
                                onChange={(e) => setMomoPhone(e.target.value)}
                                placeholder="Ex: +229 97 00 00 00"
                                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-[#9C4323] text-[#2F2B28]"
                              />
                            </div>

                            {/* Transaction breakdown exactly like image 1 */}
                            <div className="pt-3.5 border-t border-[#F3ECE5] space-y-2 text-[11px] text-[#6A6055]">
                              <div className="flex justify-between">
                                <span>Prestation Terracotta (1er loyer + charges)</span>
                                <span>145 000 FCFA</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Frais de courtage & Sécurisation Escrow</span>
                                <span>3 975 FCFA</span>
                              </div>
                              <div className="flex justify-between text-sm font-bold text-[#2F2B28] pt-2 border-t border-[#F3ECE5]">
                                <span>TOTAL SÉQUESTRÉ À PAYER :</span>
                                <span className="text-[#9C4323] font-mono">148 975 FCFA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setMomoPaymentSuccess(true);
                          }}
                          className="w-full py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl shadow-md text-xs uppercase tracking-wider block cursor-pointer"
                        >
                          Payer 148 975 FCFA avec validation biométrique
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <div className="text-center font-mono text-[9px] text-[#A2978B] pt-4 select-none">
        © 2026 Luxe Living Co. Escrow & Sécurisation physique territorials agréés.
      </div>

    </div>
  );
}
