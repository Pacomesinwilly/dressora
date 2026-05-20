import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Search, 
  MessageSquare, 
  FileSpreadsheet, 
  Building2, 
  TrendingUp, 
  ArrowUpRight, 
  AlertTriangle, 
  Share2, 
  Download, 
  UploadCloud, 
  Plus, 
  Users, 
  CreditCard,
  CheckCircle2,
  Trash2,
  Sliders,
  Sparkles,
  RefreshCw,
  FolderOpen,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X,
  FileCheck2,
  History,
  Info
} from 'lucide-react';
import {
  TransactionDetailScreen,
  UnpaidDetailScreen,
  PaymentSuccessScreen,
  PropertyDetailClientScreen,
  DocumentPortalClientScreen,
  CheckoutScreen,
  ChatScreen,
  NotificationsScreen,
  ProfileScreen,
  SearchEmptyScreen,
  PaymentFailedScreen,
  CreditSimulatorScreen,
  TrustScoreScreen,
  BailSignatureScreen,
  ReservationSentScreen,
  PrestigePropertyDetailScreen,
  PrestigeCatalogueScreen,
  IdentityVerificationScreen,
  PhoneLoginScreen,
  SecurityOTPScreen
} from './LHabitationSubViews';

interface LHabitationViewProps {
  onAddPropertyExternal?: (prop: any) => void;
}

export default function LHabitationView({ onAddPropertyExternal }: LHabitationViewProps) {
  // Navigation for L'Habitation: 'dashboard' | 'properties' | 'finances' | 'documents' | 'tenants' | 'add_property' | 'success'
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'properties' | 'finances' | 'documents' | 'tenants' | 'add_property' | 'success' | 
    'demo_txn' | 'demo_unpaid' | 'demo_pay_ok' | 'demo_prop_client' | 'demo_doc_client' | 'demo_checkout' | 
    'demo_chat' | 'demo_notif' | 'demo_profile' | 'demo_empty' | 'demo_pay_fail' | 'demo_credit' |
    'demo_trust_score' | 'demo_bail_sig' | 'demo_res_sent' | 'demo_prop_prestige' | 'demo_catalogue' |
    'demo_kyc' | 'demo_login' | 'demo_otp'
  >('dashboard');

  // Interactive properties list
  const [properties, setProperties] = useState([
    {
      id: 'prop-1',
      title: 'Villa Azure',
      city: 'Nice',
      price: 3500,
      beds: 4,
      baths: 3,
      surface: 240,
      status: 'AVAILABLE',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prop-2',
      title: 'Le Loft',
      city: 'Paris 8e',
      price: 2800,
      beds: 2,
      baths: 1,
      surface: 85,
      status: 'RENTED',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prop-3',
      title: 'Skyline',
      city: 'Lyon',
      price: 1950,
      beds: 1,
      baths: 1,
      surface: 62,
      status: 'MAINTENANCE',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // Form states for adding property
  const [newTitle, setNewTitle] = useState('Villa Mirabel');
  const [newDesc, setNewDesc] = useState('Superbe villa contemporaine en Provence avec piscine d’eau salée, jardin d’oliviers centenaires et finitions précieuses.');
  const [newPrice, setNewPrice] = useState('1250');
  const [newCity, setNewCity] = useState('Provence, France');
  const [newType, setNewType] = useState('Appartement de luxe');
  const [premiumFeatured, setPremiumFeatured] = useState(true);

  // Solde and withdrawals interactive simulation
  const [clientBalance, setClientBalance] = useState(14850.00);
  const [rentals, setRentals] = useState([
    { id: 'rent-1', tenant: 'Marc Lefebvre', prop: 'Appartement Haussmannien', date: '12 Juin', amount: 1450, status: 'REÇU' },
    { id: 'rent-2', tenant: 'Sarah Benali', prop: 'Studio Bastille', date: '10 Juin', amount: 980, status: 'REÇU' },
    { id: 'rent-3', tenant: 'Jean Dupont', prop: 'Loft Marais', date: '08 Juin', amount: 2100, status: 'EN ATTENTE' }
  ]);
  const [withdrawHistory, setWithdrawHistory] = useState([
    { id: 'w-1', amount: 5000, date: '02 Mai 2024', status: 'Terminé' },
    { id: 'w-2', amount: 3200, date: '15 Avril 2024', status: 'Terminé' },
    { id: 'w-3', amount: 4500, date: '01 Avril 2024', status: 'Terminé' }
  ]);

  // Document management simulated files
  const [documents, setDocuments] = useState([
    { id: 'doc-1', title: 'Bail de Location - T3 Résidence Les Pins', locataire: 'Jean Dupont', date: '15/09/2023', size: '2.4 MB', validity: 'Actif', category: 'Baux Numériques' },
    { id: 'doc-2', title: 'État des lieux d\'entrée - Studio Vieux-Port', locataire: 'Sarah Martin', date: '01/10/2023', size: '12.8 MB', validity: 'En cours', category: 'États des lieux' },
    { id: 'doc-3', title: 'Attestation d\'Assurance PNO 2024', locataire: 'Maison Campagne', date: '31/12/2024', size: '0.8 MB', validity: 'Validé', category: 'Factures & Quittances' }
  ]);
  const [docFilter, setDocFilter] = useState<'Tous' | 'Baux Numériques' | 'États des lieux' | 'Factures & Quittances'>('Tous');
  const [isUploading, setIsUploading] = useState(false);

  // Tenants list interactive focus
  const [tenants, setTenants] = useState([
    { id: 'tenant-1', name: 'Jean Dupont', email: 'jean.dupont@email.com', property: 'Appartement 4B', residentOf: 'Résidence des Lilas', status: 'À JOUR', score: 98 },
    { id: 'tenant-2', name: 'Marie Laurent', email: 'm.laurent@outlook.fr', property: 'Studio Rive Gauche', residentOf: 'Quai Voltaire', status: 'EN RETARD (4J)', score: 72 },
    { id: 'tenant-3', name: 'Sébastien Bernard', email: 's.bernard@gmail.com', property: 'Duplex Panoramique', residentOf: 'Tour Horizon', status: 'À JOUR', score: 89 }
  ]);
  const [focusedTenantId, setFocusedTenantId] = useState<string>('tenant-2');
  const focusedTenant = tenants.find(t => t.id === focusedTenantId) || tenants[1];
  const [noteContent, setNoteContent] = useState('Mme Laurent est une locataire fiable malgré quelques retards occasionnels de moins de 5 jours. Elle maintient le bien dans un état irréprochable.');

  // Alert dismiss
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  // Form submit Simulation
  const handleAddNewProperty = (e: React.FormEvent) => {
    e.preventDefault();
    const newProperty = {
      id: `prop-${Date.now()}`,
      title: newTitle,
      city: newCity,
      price: Number(newPrice),
      beds: 4,
      baths: 3,
      surface: 240,
      status: 'AVAILABLE',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    };
    
    setProperties(prev => [newProperty, ...prev]);
    if (onAddPropertyExternal) {
      onAddPropertyExternal({
        title: newTitle,
        price: Number(newPrice),
        surface: 240,
        city: newCity,
        exactAddress: '12 Avenue des Oliviers, Provence',
        description: newDesc,
        coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'],
        status: 'active'
      });
    }
    setActiveTab('success');
  };

  const handleWithdraw = () => {
    if (clientBalance <= 0) {
      alert("Votre solde actuel est nul.");
      return;
    }
    const currentSolde = clientBalance;
    setClientBalance(0);
    const newHist = {
      id: `w-${Date.now()}`,
      amount: currentSolde,
      date: 'Aujourd\'hui',
      status: 'En cours'
    };
    setWithdrawHistory(prev => [newHist, ...prev]);
    alert(`Retrait initié de ${currentSolde.toLocaleString('fr-FR')} €. Les fonds arriveront sous 48 heures.`);
  };

  const handleDocumentUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      const uDoc = {
        id: `doc-${Date.now()}`,
        title: 'Bail de Location Addendum - Signé',
        locataire: 'Jean Dupont',
        date: 'Aujourd\'hui',
        size: '1.4 MB',
        validity: 'Validé',
        category: 'Baux Numériques' as any
      };
      setDocuments(prev => [uDoc, ...prev]);
      setIsUploading(false);
      alert("Document ajouté au coffre-fort numérique !");
    }, 1000);
  };

  return (
    <div id="l-habitation-main" className="space-y-8 select-none font-sans text-left">
      
      {/* 1. L'HABITATION SHARED RESPONSIVE HEADER BAR */}
      <header id="lh-header" className="bg-white border border-[#E8DFC2]/30 px-6 py-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <span className="font-serif text-2xl font-black text-[#9C4323] tracking-tight">
            L'Habitation
          </span>
          
          {/* Burger/Horizontal Tabs Menu - Responsive */}
          <nav className="flex gap-4 md:gap-6 text-xs font-semibold text-[#8E8071] overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`pb-1 border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === 'dashboard' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent hover:text-[#2F2B28]'}`}
            >
              Tableau de bord
            </button>
            <button 
              onClick={() => setActiveTab('properties')} 
              className={`pb-1 border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === 'properties' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent hover:text-[#2F2B28]'}`}
            >
              Propriétés
            </button>
            <button 
              onClick={() => setActiveTab('finances')} 
              className={`pb-1 border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === 'finances' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent hover:text-[#2F2B28]'}`}
            >
              Finances
            </button>
            <button 
              onClick={() => setActiveTab('tenants')} 
              className={`pb-1 border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === 'tenants' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent hover:text-[#2F2B28]'}`}
            >
              Locataires
            </button>
            <button 
              onClick={() => setActiveTab('documents')} 
              className={`pb-1 border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === 'documents' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent hover:text-[#2F2B28]'}`}
            >
              Documents
            </button>
          </nav>

          {/* Special Screens Option Switcher */}
          <div className="bg-[#FAF5EF] text-[#9C4323] border border-[#E8DFC2]/45 rounded-xl px-2.5 py-1 flex items-center shrink-0">
            <select 
              value={activeTab.startsWith('demo_') ? activeTab : ''}
              onChange={(e) => {
                if (e.target.value) {
                  setActiveTab(e.target.value as any);
                } else {
                  setActiveTab('dashboard');
                }
              }}
              className="bg-transparent text-xs font-bold text-[#9C4323] outline-none cursor-pointer"
            >
              <option value="" className="text-stone-800">✨ Maquettes Spéciales</option>
              <option value="demo_txn" className="text-stone-800">1. Détails transaction</option>
              <option value="demo_unpaid" className="text-stone-800">2. Suivi impayé</option>
              <option value="demo_pay_ok" className="text-stone-800">3. Paiement Réussi</option>
              <option value="demo_pay_fail" className="text-stone-800">4. Échec Paiement</option>
              <option value="demo_prop_client" className="text-stone-800">5. Fiche Bien (Client)</option>
              <option value="demo_doc_client" className="text-stone-800">6. Coffre-fort Documents</option>
              <option value="demo_checkout" className="text-stone-800">7. Formulaire de Réservation</option>
              <option value="demo_chat" className="text-stone-800">8. Chat & Messagerie</option>
              <option value="demo_notif" className="text-stone-800">9. Centre Notifications</option>
              <option value="demo_profile" className="text-stone-800">10. Profil Locataire</option>
              <option value="demo_empty" className="text-stone-800">11. Recherche Vide</option>
              <option value="demo_credit" className="text-stone-800">12. Simulateur Crédit</option>
              <option value="demo_trust_score" className="text-stone-800">13. Indice de Confiance</option>
              <option value="demo_bail_sig" className="text-stone-800">14. Signature du Bail</option>
              <option value="demo_res_sent" className="text-stone-800">15. Demande Envoyée</option>
              <option value="demo_prop_prestige" className="text-stone-800">16. Détail Propriété Prestige</option>
              <option value="demo_catalogue" className="text-stone-800">17. Catalogue Prestige</option>
              <option value="demo_kyc" className="text-stone-800">18. Vérification ID (KYC)</option>
              <option value="demo_login" className="text-stone-800">19. Connexion Téléphone</option>
              <option value="demo_otp" className="text-stone-800">20. Validation OTP</option>
            </select>
          </div>
        </div>

        {/* Profile and Notification row */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <button className="p-2 hover:bg-[#FAF5EF] rounded-xl text-[#8E8071] transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#9C4323] rounded-full" />
          </button>
          <div className="flex items-center gap-3 pl-3 border-l border-[#E8DFC2]/40">
            <div className="w-9 h-9 rounded-full bg-stone-300 overflow-hidden ring-2 ring-[#9C4323]/20 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                alt="Leonel Togni" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-[#2F2B28] leading-none">Leonel Togni</p>
              <p className="text-[9px] font-mono text-[#8E8071] uppercase tracking-wider mt-0.5">Propriétaire Privilège</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CHOOSE CURRENT VIEW AND ANIMATE TRANSITIONS */}
      <AnimatePresence mode="wait">
        
        {/* ========================================== */}
        {/* VIEW A: TABLEAU DE BORD (Image 1) */}
        {/* ========================================== */}
        {activeTab === 'dashboard' && (
          <motion.div
            key="lh-view-dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Title Bar */}
            <div className="text-left">
              <h1 className="font-serif text-4xl font-extrabold text-[#2F2B28] tracking-tight">Tableau de Bord</h1>
              <p className="text-sm text-[#8E8071] font-sans mt-0.5">Vue d'ensemble de vos actifs immobiliers au 24 Mai.</p>
            </div>

            {/* Actions required alert banner matches Image 1 */}
            {isAlertOpen && (
              <div id="alert-actions-required" className="bg-[#FAF0ED] p-5 rounded-2xl border border-[#FA9E82]/35 flex items-start gap-4 text-left relative overflow-hidden">
                <div className="p-2 bg-[#9C4323] text-white rounded-xl shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-1 pr-8">
                  <h4 className="font-bold text-[#9C4323] text-sm">Actions Requises</h4>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans font-semibold">
                    2 paiements sont en retard pour la résidence <span className="text-stone-900 font-bold">"Le Rivage"</span>. Une nouvelle demande de réservation est en attente d'approbation.
                  </p>
                </div>
                <button 
                  onClick={() => setIsAlertOpen(false)}
                  className="absolute top-4 right-4 text-[#9C4323]/70 hover:text-[#9C4323] p-1 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Key Metrics row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">REVENU TOTAL (MENSUEL)</span>
                <span className="text-3xl font-serif font-black text-[#2F2B28] block mt-2">12 450 €</span>
                <div className="flex items-center gap-1 text-emerald-700 text-xs font-semibold mt-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+8.4% vs mois dernier</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">TAUX D'OCCUPATION</span>
                <span className="text-3xl font-serif font-black text-[#2F2B28] block mt-2">92%</span>
                <div className="w-full bg-stone-100 h-2 rounded-full mt-4 overflow-hidden flex">
                  <div className="bg-[#9C4323]" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="bg-[#9C4323] p-6 rounded-2xl shadow-md text-white text-left relative overflow-hidden group">
                <span className="text-[10px] font-mono tracking-widest text-orange-100 font-bold uppercase block">BIENS ACTIFS</span>
                <span className="text-3xl font-serif font-black block mt-2">14 Unités</span>
                <span className="text-xs text-[#FCFAF7]/85 mt-3 block font-semibold">3 nouvelles acquisitions ce trimestre</span>
                <div className="absolute top-0 right-0 p-3 opacity-15 text-white transform translate-x-4 translate-y-[-4px]">
                  <Building2 className="w-24 h-24" />
                </div>
              </div>

            </div>

            {/* 2-Column interactive dashboard layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Activité Récente (width: 7 cols) */}
              <div className="lg:col-span-8 bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE5]/60">
                  <h3 className="font-serif text-lg font-bold text-[#2F2B28] flex items-center gap-2">
                    <History className="w-5 h-5 text-[#9C4323]" />
                    Activité Récente
                  </h3>
                  <button onClick={() => setActiveTab('finances')} className="text-xs font-bold text-[#9C4323] hover:underline cursor-pointer">
                    Voir tout
                  </button>
                </div>

                <div className="space-y-4 text-xs font-sans text-stone-700">
                  
                  <div className="p-4 bg-[#FCFAF7] rounded-2xl border border-[#E8DFC2]/15 flex items-center justify-between gap-4 group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center font-bold">
                        €
                      </div>
                      <div>
                        <p className="font-bold text-[#2F2B28] text-sm group-hover:text-[#9C4323] transition-colors">Loyer Collecté</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Appartement 4B, Résidence Azur</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-bold text-[#2F2B28] text-base">+1850 €</p>
                      <span className="text-[9px] text-[#8E8071] font-mono uppercase block mt-0.5">Il y a 2 heures</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FCFAF7] rounded-2xl border border-[#E8DFC2]/15 flex items-center justify-between gap-4 group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 text-amber-800 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#2F2B28] text-sm">Nouvelle Demande</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Jean Dupont - Villa Serenity</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <div>
                        <span className="text-[9px] text-[#8E8071] font-mono uppercase block">Il y a 5 heures</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('tenants')}
                        className="px-3.5 py-1.5 bg-stone-900 text-white font-bold text-[10px] rounded-lg hover:bg-stone-850 cursor-pointer"
                      >
                        Consulter
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FCFAF7] rounded-2xl border border-[#E8DFC2]/15 flex items-center justify-between gap-4 group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-50 text-rose-800 rounded-xl flex items-center justify-center font-bold">
                        ⚒
                      </div>
                      <div>
                        <p className="font-bold text-[#2F2B28] text-sm">Maintenance Terminée</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Chauffage, Studio Mansart</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-bold text-rose-800 text-base">-240 €</p>
                      <span className="text-[9px] text-[#8E8071] font-mono uppercase block mt-0.5">Hier</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Bien Vedette (width: 5 cols) */}
              <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#2F2B28] border-b border-[#F3ECE5]/60 pb-3">Bien Vedette</h3>
                
                <div className="rounded-2xl overflow-hidden relative group">
                  <div className="h-52 overflow-hidden relative bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                      alt="Villa L'Horizon Saint-Tropez" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white uppercase text-[9px] font-mono font-bold tracking-widest rounded">
                      Occupé
                    </span>
                    
                    {/* Floating brown launch button matches Image 1 */}
                    <button 
                      onClick={() => setActiveTab('add_property')}
                      className="absolute bottom-3 right-3 p-3 bg-[#9C4323] text-white rounded-full shadow-lg hover:bg-[#85351a] hover:scale-110 transition-all cursor-pointer border border-[#E8DFC2]/30"
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  
                  <div className="pt-4 text-left space-y-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#2F2B28]">Villa L'Horizon</h4>
                      <p className="text-xs text-[#8E8071] mt-0.5">📍 Saint-Tropez, France</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-[#F3ECE5] pt-4 text-xs">
                      <div>
                        <span className="text-[10px] text-[#8E8071] block font-mono uppercase">Rentabilité</span>
                        <span className="font-serif font-bold text-[#9C4323] text-base mt-0.5 block">5.2% Annuel</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#8E8071] block font-mono uppercase">Prochaine sortie</span>
                        <span className="font-bold text-stone-800 mt-0.5 block">12 Sept. 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW B: PROPRIÉTÉS (Image 2) */}
        {/* ========================================== */}
        {activeTab === 'properties' && (
          <motion.div
            key="lh-view-properties"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8 text-left"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="font-serif text-4xl font-extrabold text-[#2F2B28] tracking-tight">Gestion Immobilière</h1>
                <p className="text-sm text-[#8E8071]">Supervisez votre patrimoine avec élégance. Suivez les revenus locatifs et l'état de vos résidences en temps réel.</p>
              </div>

              {/* Status selector filter matches Image 2 */}
              <div className="flex gap-2.5 self-start md:self-center shrink-0">
                <select className="px-4 py-2.5 bg-white border border-[#E8DFC2] text-xs font-semibold rounded-xl focus:outline-none">
                  <option>Tous les statuts</option>
                  <option>Disponible</option>
                  <option>Loué</option>
                  <option>En Maintenance</option>
                </select>
                <button 
                  onClick={() => setActiveTab('add_property')}
                  className="px-5 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-white" />
                  Nouveau Bien
                </button>
              </div>
            </div>

            {/* Properties cards layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="h-56 relative bg-stone-100 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Status Badge */}
                    <span className={`absolute top-3.5 left-3.5 px-3 py-1 text-[9px] font-mono tracking-widest font-bold uppercase rounded ${
                      p.status === 'AVAILABLE' ? 'bg-emerald-600 text-white' : 
                      p.status === 'RENTED' ? 'bg-[#9C4323] text-white' : 'bg-amber-600 text-white'
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#2F2B28]">{p.title},</h3>
                        <p className="text-xs text-[#8E8071] mt-0.5">{p.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-xl font-bold text-[#9C4323]">{p.price.toLocaleString('fr-FR')} €</p>
                        <span className="text-[10px] text-[#8E8071] font-mono">/mois</span>
                      </div>
                    </div>

                    {/* Features row */}
                    <div className="grid grid-cols-3 gap-4 border-y border-[#F3ECE5] py-3 text-xs text-[#6A6055] font-semibold">
                      <div className="text-center">
                        <span className="text-[9px] text-[#8E8071] font-mono block">LITS</span>
                        <span className="text-stone-900 mt-0.5 block">{p.beds} Lits</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[9px] text-[#8E8071] font-mono block">BAINS</span>
                        <span className="text-stone-900 mt-0.5 block">{p.baths} Bains</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[9px] text-[#8E8071] font-mono block">SURFACE</span>
                        <span className="text-stone-900 mt-0.5 block">{p.surface} m²</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Dossier complet de la propriété ${p.title} chargé.`)}
                      className="w-full py-2.5 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-xs font-bold text-stone-700 hover:bg-[#FAF5EF] transition-colors cursor-pointer"
                    >
                      Voir les détails
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom aggregate overview Matches Image 2 */}
            <div className="bg-[#FCFAF7] rounded-3xl border border-[#E8DFC2]/30 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">PORTEFEUILLE TOTAL</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">12.450 €</p>
                <span className="text-[10px] text-emerald-700 font-semibold inline-block mt-1">+12% par rapport au mois dernier</span>
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">TAUX D'OCCUPATION</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">94%</p>
                <span className="text-[10px] text-[#8E8071] inline-block mt-1">15 biens sur 16 sont loués</span>
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">MAINTENANCE ACTIVE</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">2</p>
                <span className="text-[10px] text-[#8E8071] inline-block mt-1">Interventions prévues cette semaine</span>
              </div>
            </div>

          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW C: FINANCES (Image 3) */}
        {/* ========================================== */}
        {activeTab === 'finances' && (
          <motion.div
            key="lh-view-finances"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8 text-left"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest font-black text-[#9C4323] uppercase">FINANCES & GESTION</span>
              <h1 className="font-serif text-4xl font-extrabold text-[#2F2B28] tracking-tight mt-1">Tableau de Bord Financier</h1>
              <p className="text-sm text-[#8E8071]">Visualisez vos revenus locatifs, gérez vos versements et suivez l'évolution de votre patrimoine immobilier en temps réel.</p>
            </div>

            {/* Current Balance & Chart grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Solde actuel interactive matches Image 3 */}
              <div className="lg:col-span-5 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm flex flex-col justify-between min-h-[300px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E8071] font-bold uppercase tracking-wider">Solde actuel</span>
                    <div className="p-2.5 bg-[#FAF5EF] text-[#9C4323] rounded-xl">
                      <CreditCard className="w-5 h-5" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-serif font-black text-[#2F2B28]">
                    {clientBalance.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                  </h2>
                  <p className="text-xs text-emerald-700 font-semibold">• +12% ce mois</p>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={handleWithdraw}
                    className="w-full py-4 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-sm rounded-2xl shadow transition-colors cursor-pointer"
                  >
                    Retrait
                  </button>
                </div>
              </div>

              {/* Monthly incomes bar chart matches Image 3 */}
              <div className="lg:col-span-7 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="flex justify-between items-center pb-2 border-b border-[#F3ECE5]/60">
                  <div>
                    <span className="text-[10px] font-mono text-[#8E8071] uppercase tracking-wider">Revenus mensuels</span>
                    <h3 className="font-serif text-lg font-bold text-[#2F2B28] mt-0.5">Évolution 2024</h3>
                  </div>
                  <div className="flex gap-2 text-[10px] font-mono font-bold">
                    <span className="px-2.5 py-1 bg-stone-100 rounded-lg text-stone-500">Jan - Juin</span>
                    <span className="px-2.5 py-1 bg-[#FAF5EF] rounded-lg text-[#9C4323]">Détails</span>
                  </div>
                </div>

                {/* Custom SVG/Bar presentation precisely resembling Image 3 */}
                <div className="h-44 flex items-end justify-between font-mono text-[9px] text-[#8E8071] font-semibold pt-4">
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#E6DCD2] rounded-t-lg transition-all h-14 group-hover:bg-[#9C4323]" />
                    <span>JAN</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#E6DCD2] rounded-t-lg transition-all h-24 group-hover:bg-[#9C4323]" />
                    <span>FEV</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#E6DCD2] rounded-t-lg transition-all h-20 group-hover:bg-[#9C4323]" />
                    <span>MAR</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#9C4323] rounded-t-lg transition-all h-36" />
                    <span>AVR</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#E6DCD2] rounded-t-lg transition-all h-28 group-hover:bg-[#9C4323]" />
                    <span>MAI</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-12 group">
                    <div className="w-8 bg-[#C2B9AF] rounded-t-lg transition-all h-32 group-hover:bg-[#9C4323]" />
                    <span>JUN</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Split row: Paiements & Historique */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Tenant Payments ledger */}
              <div className="lg:col-span-7 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-[#F3ECE5] pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Paiements Locataires</h3>
                  <button className="text-xs font-bold text-[#9C4323] hover:underline">Voir tout</button>
                </div>

                <div className="divide-y divide-[#F3ECE5] text-xs font-semibold text-stone-700">
                  {rentals.map((r) => (
                    <div key={r.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#FAF5EF] flex items-center justify-center font-bold text-stone-600 shrink-0">
                          {r.tenant.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#2F2B28] text-sm">{r.tenant}</p>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">{r.prop} • {r.date}</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <p className="font-serif font-bold text-[#2F2B28] text-base">+{r.amount} €</p>
                        <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono tracking-wider font-bold ${
                          r.status === 'REÇU' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                        }`}>
                          {r.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Withdrawals history matches Image 3 */}
              <div className="lg:col-span-5 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                <div className="border-b border-[#F3ECE5] pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Historique des Retraits</h3>
                </div>

                <div className="divide-y divide-[#F3ECE5] text-xs">
                  {withdrawHistory.map((w) => (
                    <div key={w.id} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center text-stone-700 font-semibold">
                      <div>
                        <p className="font-bold text-stone-900">Virement Bancaire</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">{w.status} • {w.date}</p>
                      </div>
                      <p className="font-serif font-bold text-rose-800 text-base">-{w.amount.toLocaleString('fr-FR')} €</p>
                    </div>
                  ))}
                </div>

                {/* Information banner matches bottom of Image 3 */}
                <div className="bg-[#FCFAF7] border border-[#E8DFC2]/25 p-4 rounded-xl flex items-start gap-2.5 text-[11px] text-[#8E8071] leading-relaxed select-none">
                  <Info className="w-4 h-4 text-[#9C4323] shrink-0 mt-0.5" />
                  <p>Les fonds sont généralement transférés sous 48h ouvrables après la demande de retrait.</p>
                </div>
              </div>

            </div>

            {/* Nice full-width advertisement cover in gold and dark matches Image 3 */}
            <div className="relative rounded-[32px] overflow-hidden min-h-[180px] bg-stone-950 flex flex-col justify-center px-8 text-left py-6 select-none">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern premium estate lobby" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 max-w-xl space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">Investissez dans demain.</h3>
                <p className="text-xs text-stone-300 leading-relaxed font-sans max-w-md">
                  Gérez votre portefeuille immobilier avec la précision d'un orfèvre et la sérénité d'un invité de prestige.
                </p>
              </div>
            </div>

          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW D: DOCUMENTS (Image 4) */}
        {/* ========================================== */}
        {activeTab === 'documents' && (
          <motion.div
            key="lh-view-documents"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8 text-left"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest font-black text-[#9C4323] uppercase">GESTION DOCUMENTAIRE</span>
              <h1 className="font-serif text-3xl font-extrabold text-[#2F2B28] tracking-tight mt-1">Coffre-fort Numérique</h1>
              <p className="text-sm text-[#8E8071]">Gérez vos baux, états des lieux et certificats en toute sécurité. Accédez instantanément aux documents de vos locataires et de vos propriétés.</p>
            </div>

            {/* Highlight Cards grid matches Image 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="h-44 relative rounded-2xl overflow-hidden bg-stone-950 p-6 flex flex-col justify-end select-none shadow">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80" 
                    alt="Bail Digital Office space" 
                    className="w-full h-full object-cover opacity-25"
                  />
                </div>
                <div className="relative z-10 text-white space-y-1 text-left">
                  <span className="text-[9px] font-mono text-orange-200 block">STATUT ACTUEL</span>
                  <p className="font-serif text-lg font-bold">24 Documents Actifs</p>
                  <p className="text-[10px] text-stone-300">Tous vos contrats sont conformes et à jour.</p>
                </div>
              </div>

              <div className="bg-amber-50/45 p-6 rounded-2xl border border-amber-100 flex flex-col justify-between text-left h-44">
                <div className="p-2.5 bg-amber-100 rounded-xl text-stone-850 self-start">
                  <FileCheck2 className="w-5 h-5 text-[#9C4323]" />
                </div>
                <div className="space-y-1 pt-4">
                  <span className="text-[9px] font-mono text-[#8E8071] block uppercase">Dernier Bail</span>
                  <p className="font-serif text-base font-bold text-stone-900">Signé le 12 Octobre 2023</p>
                  <p className="text-[11px] text-stone-600">Résidence Elysée</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm flex flex-col justify-between text-left h-44">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-800 self-start">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1 pt-4">
                  <span className="text-[9px] font-mono text-[#8E8071] block uppercase font-bold">Vérifié</span>
                  <p className="font-serif text-base font-bold text-[#2F2B28]">100% de vos documents</p>
                  <p className="text-[11px] text-stone-500">sont authentifiés par ID-Check.</p>
                </div>
              </div>

            </div>

            {/* Document Filter buttons row and list table matches Image 4 */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Horizontal tabs buttons */}
                <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none font-sans text-xs shrink-0">
                  {(['Tous', 'Baux Numériques', 'États des lieux', 'Factures & Quittances'] as any[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setDocFilter(tab)}
                      className={`px-4.5 py-2 rounded-xl transition-all cursor-pointer font-bold shrink-0 ${
                        (tab === 'Tous' && docFilter === 'Tous') || docFilter === tab
                          ? 'bg-[#9C4323] text-white'
                          : 'bg-[#FAF5EF] text-stone-600 border border-[#E8DFC2]/35 hover:bg-white'
                      }`}
                    >
                      {tab === 'Tous' ? 'Tous les documents' : tab}
                    </button>
                  ))}
                </div>

                {/* Small search field input */}
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    id="doc-search-text"
                    type="text"
                    placeholder="Rechercher par locataire ou..."
                    className="w-full pl-9 pr-4 py-2.5 bg-[#FAF5EF] border border-[#E8DFC2]/45 rounded-xl text-xs focus:outline-none focus:border-[#9C4323]"
                  />
                </div>
              </div>

              {/* Document rows */}
              <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden text-xs divide-y divide-[#F3ECE5]">
                {documents
                  .filter(d => docFilter === 'Tous' || d.category === docFilter)
                  .map((d) => (
                    <div key={d.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left font-semibold text-stone-700">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 bg-[#FCFAF7] border border-[#E8DFC2]/20 rounded-xl shrink-0 text-[#9C4323]">
                          <FolderOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[#2F2B28]">{d.title}</h4>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">Locataire : <b>{d.locataire}</b> • Signé le {d.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-center md:text-right font-mono text-[10px]">
                        <div>
                          <span className="text-[#A2978B] block">TAILLE</span>
                          <span className="text-[#2F2B28] font-bold mt-0.5 block">{d.size}</span>
                        </div>
                        <div>
                          <span className="text-[#A2978B] block">VALIDITÉ</span>
                          <span className={`inline-block mt-0.5 px-2.5 py-0.5 rounded-full font-sans font-bold text-[9px] ${
                            d.validity === 'Actif' || d.validity === 'Validé' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                          }`}>
                            {d.validity}
                          </span>
                        </div>

                        {/* Interactive action callbacks */}
                        <div className="flex gap-2">
                          <button 
                            onClick={() => alert(`Téléchargement du contrat : ${d.title}`)}
                            className="p-2 text-stone-600 hover:text-[#9C4323] hover:bg-[#FAF5EF] rounded-xl transition-all font-sans font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Télécharger</span>
                          </button>
                          <button 
                            onClick={() => alert(`Lien de partage généré pour : ${d.title}`)}
                            className="p-2 text-stone-600 hover:text-[#9C4323] hover:bg-[#FAF5EF] rounded-xl transition-all font-sans font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Share2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Partager</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Drag & Drop simulated uploader matches bottom of Image 4 */}
              <div 
                onClick={handleDocumentUpload}
                className="border-2 border-dashed border-[#E8DFC2]/45 rounded-3xl p-10 bg-[#FCFAF7] hover:bg-white hover:border-[#9C4323]/50 transition-all flex flex-col items-center justify-center text-center cursor-pointer relative"
              >
                {isUploading ? (
                  <div className="space-y-4">
                    <RefreshCw className="w-10 h-10 text-[#9C4323] animate-spin mx-auto" />
                    <p className="text-xs font-bold text-[#2F2B28] font-sans">Indexation et chiffrement en cours...</p>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs font-semibold">
                    <div className="p-3 bg-white rounded-full border border-[#E8DFC2]/20 inline-block shadow-sm">
                      <UploadCloud className="w-8 h-8 text-[#9C4323]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2F2B28] font-serif">Ajouter un nouveau document</h4>
                      <p className="text-[#8E8071] max-w-sm mx-auto mt-1 leading-relaxed">
                        Glissez et déposez vos fichiers ici, ou parcourez votre ordinateur pour uploader un nouveau contrat ou état des lieux.
                      </p>
                    </div>
                    <button className="px-5 py-2 bg-white hover:bg-stone-900 border border-[#E8DFC2] text-stone-800 hover:text-white rounded-xl text-xs font-bold shadow-sm transition-all focus:outline-none cursor-pointer">
                      Parcourir les fichiers
                    </button>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW E: LOCATAIRES (Image 5) */}
        {/* ========================================== */}
        {activeTab === 'tenants' && (
          <motion.div
            key="lh-view-tenants"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8 text-left"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest font-black text-[#9C4323] uppercase">LOGISTIQUE RESIDENTIELLE</span>
              <h1 className="font-serif text-3xl font-extrabold text-[#2F2B28] mt-1 tracking-tight">Gestion des Locataires</h1>
              <p className="text-sm text-[#8E8071] mt-0.5 font-sans">Supervisez vos résidents, suivez les flux de trésorerie et maintenez l'excellence de votre parc immobilier.</p>
            </div>

            {/* Key stats row matching Image 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">REVENU MENSUEL</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">14.250 €</p>
                <span className="text-[10px] text-emerald-700 font-semibold inline-block mt-0.5">+4.2% ce mois</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">LOCATAIRES</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">24</p>
                <span className="text-[10px] text-stone-500 font-semibold inline-block mt-0.5">100% Occupation</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC2]/30 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase">TRUST SCORE MOY.</span>
                <p className="text-2xl font-serif font-black text-[#2F2B28] mt-1">94/100</p>
                <div className="w-full bg-stone-100 h-2 rounded-full mt-3 overflow-hidden flex">
                  <div className="bg-[#9C4323]" style={{ width: '94%' }} />
                </div>
              </div>
            </div>

            {/* Simulated Active List of Tenants table precisely matches Image 5 */}
            <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden p-6 space-y-6 text-xs text-stone-700 relative">
              
              {/* Header and tools row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F3ECE5] pb-3">
                <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Liste Active</h3>
                <div className="flex gap-2 font-semibold">
                  <button className="px-3.5 py-1.5 border border-[#E8DFC2] text-stone-600 rounded-lg hover:bg-[#FAF5EF]">
                    Filtrer
                  </button>
                  <button onClick={() => alert("Dossier CSV des locataires exporté avec succès.")} className="px-3.5 py-1.5 border border-[#E8DFC2] text-stone-600 rounded-lg hover:bg-[#FAF5EF]">
                    Exporter CSV
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="divide-y divide-[#F3ECE5] font-semibold">
                
                {tenants.map(t => (
                  <div 
                    key={t.id} 
                    onClick={() => setFocusedTenantId(t.id)}
                    className={`py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-all rounded-xl px-4 ${
                      focusedTenantId === t.id ? 'bg-[#FCFAF7] border border-[#E8DFC2]/15' : 'hover:bg-[#FAF5EF]/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-orange-100 text-[#9C4323] flex items-center justify-center font-bold font-serif rounded-full shrink-0">
                        {t.name.split(' ').map(x=>x.charAt(0)).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2F2B28]">{t.name}</h4>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">{t.email}</p>
                      </div>
                    </div>

                    <div className="flex-1 max-w-xs md:px-8">
                      <p className="text-[#2F2B28] font-bold">{t.property}</p>
                      <p className="text-[10px] text-[#8E8071] mt-0.5">{t.residentOf}</p>
                    </div>

                    <div className="flex items-center gap-6 md:justify-end text-right">
                      <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono tracking-wider font-bold ${
                        t.status === 'À JOUR' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                      }`}>
                        {t.status}
                      </span>
                      <div>
                        <span className="text-[#A2978B] block text-[9px]">TRUST SCORE</span>
                        <span className="font-black text-stone-800">{t.score}</span>
                      </div>

                      {/* Relance button matches Image 5 */}
                      <div className="flex gap-2">
                        {t.status.includes('RETARD') && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              alert(`Relance officielle envoyée à ${t.name} concernant les impayés.`);
                            }}
                            className="px-3.5 py-1.5 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-[10px] rounded-lg transition-colors cursor-pointer"
                          >
                            ▷ Relance
                          </button>
                        )}
                        <button className="p-1.5 hover:bg-stone-100 text-[#8E8071] rounded-lg">
                          ✉
                        </button>
                        <button className="p-1.5 hover:bg-stone-100 text-[#8E8071] rounded-lg">
                          👁
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Brown Add Button matches Image 5 */}
              <button 
                onClick={() => alert("Ajout de locataire direct via formulaire d'invitation.")}
                className="absolute bottom-6 right-6 p-4 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-full shadow-lg hover:scale-105 transition-all text-sm font-bold z-10 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Bottom Tenant Focus section matches bottom of Image 5 */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Focus Locataire : {focusedTenant.name}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-semibold">
                
                {/* Historique des Paiements (left width: 7 cols) */}
                <div className="lg:col-span-8 bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4 text-left">
                  <h4 className="font-mono text-[9px] text-[#8E8071] tracking-widest font-bold uppercase pb-2 border-b border-[#F3ECE5]/60">
                    HISTORIQUE DES PAIEMENTS
                  </h4>

                  <div className="divide-y divide-[#F3ECE5] text-xs">
                    <div className="py-3 flex justify-between items-center text-[#2F2B28]">
                      <div>
                        <p className="font-bold">Loyer Octobre 2023</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 05/10/2023</p>
                      </div>
                      <p className="font-serif font-bold text-emerald-800 text-sm">1.250,00 €</p>
                    </div>

                    <div className="py-3 flex justify-between items-center text-[#2F2B28]">
                      <div>
                        <p className="font-bold">Loyer Septembre 2023</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 02/09/2023</p>
                      </div>
                      <p className="font-serif font-bold text-emerald-800 text-sm">1.250,00 €</p>
                    </div>

                    <div className="py-3 flex justify-between items-center text-rose-800">
                      <div>
                        <p className="font-bold text-rose-800">Loyer Août 2023</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 12/08/2023 (En retard)</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif font-bold text-sm">1.250,00 €</p>
                        <span className="text-[9px] text-rose-800 block mt-0.5 font-mono font-bold">+15€ Pénalités</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right note of conciergerie Card matches bottom-right of Image 5 */}
                <div className="lg:col-span-4 bg-[#9C4323] text-white p-6.5 rounded-3xl flex flex-col justify-between text-left min-h-[220px]">
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono tracking-widest text-orange-200 font-bold uppercase">Note de Conciergerie</span>
                    <p className="text-xs text-[#FCFAF7]/90 leading-relaxed font-semibold">
                      "{noteContent}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FCFAF7]/15">
                    <button 
                      onClick={() => {
                        const newNote = prompt("Modifier la note de conciergerie :", noteContent);
                        if (newNote !== null) {
                          setNoteContent(newNote);
                        }
                      }}
                      className="w-full py-2 bg-white hover:bg-stone-950 hover:text-white text-[#9C4323] rounded-xl text-center text-[10px] font-bold uppercase tracking-widest shadow transition-colors cursor-pointer"
                    >
                      Modifier la note
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW F: PUBLIER UNE ANNONCE (Image 6) */}
        {/* ========================================== */}
        {activeTab === 'add_property' && (
          <motion.div
            key="lh-view-add-property"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-2xl mx-auto text-left"
          >
            <div className="bg-white rounded-[32px] p-8 border border-[#E8DFC2]/30 shadow-xl space-y-6">
              
              {/* Stepper info row matches Image 6 */}
              <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase border-b border-[#F3ECE5] pb-4">
                <span className="text-[#9C4323]">ÉTAPE 2 SUR 3</span>
                <span className="text-[#8E8071]">Détails & Médias</span>
              </div>

              <div>
                <h1 className="font-serif text-3xl font-black text-stone-900 leading-tight">Publiez votre annonce</h1>
                <p className="text-xs text-[#8E8071] mt-1 pr-6 leading-relaxed">
                  Partagez les détails de votre propriété d'exception avec notre communauté exigeante.
                </p>
              </div>

              <form onSubmit={handleAddNewProperty} className="space-y-6 text-xs font-semibold text-stone-700">
                
                {/* Photographies & Vidéos section matches Image 6 */}
                <div className="space-y-2.5 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">📸 Photographies & Vidéos</span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 border-2 border-dashed border-[#FAF5EF] rounded-2xl p-6 bg-[#FCFAF7] flex flex-col items-center justify-center text-center">
                      <UploadCloud className="w-8 h-8 text-stone-300" />
                      <span className="text-[11px] font-bold text-stone-500 mt-2 block">Glissez-déposez vos images haute résolution</span>
                      <span className="text-[9px] text-[#A2978B] font-mono block mt-0.5">PNG, JPG ou MP4 (max. 50 Mo)</span>
                    </div>

                    <div className="rounded-2xl overflow-hidden relative border border-[#E8DFC2]/30 shadow-sm h-32 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80" 
                        alt="Villa interior kitchen" 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        type="button"
                        onClick={() => alert("Image supprimée du brouillon d'annonce.")}
                        className="absolute top-2 right-2 bg-stone-900/60 hover:bg-stone-900 p-1.5 rounded-full text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="lh-add-title" className="text-[9px] font-mono tracking-widest text-[#8E8071] uppercase font-bold block">Titre de l'Annonce</label>
                    <input 
                      id="lh-add-title" 
                      type="text" 
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="ex: Villa d'architecte avec vue sur mer" 
                      className="w-full px-4.5 py-3.5 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-xs font-sans text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="lh-add-desc" className="text-[9px] font-mono tracking-widest text-[#8E8071] uppercase font-bold block">Description Détaillée</label>
                    <textarea 
                      id="lh-add-desc" 
                      rows={3}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Décrivez le charme unique, les matériaux et l'environnement..." 
                      className="w-full px-4.5 py-3.5 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-xs font-sans text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="lh-add-price" className="text-[9px] font-mono tracking-widest text-[#8E8071] uppercase font-bold block">PRIX (PAR NUIT / SÉJOUR)</label>
                      <div className="relative">
                        <input 
                          id="lh-add-price" 
                          type="number" 
                          value={newPrice}
                          onChange={(e) => setNewPrice(e.target.value)}
                          className="w-full pl-4.5 pr-12 py-3.5 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-xs text-stone-900 focus:outline-none"
                        />
                        <span className="absolute right-4 top-3.5 text-stone-400 font-mono">€ EUR</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="lh-add-type" className="text-[9px] font-mono tracking-widest text-[#8E8071] uppercase font-bold block">Type de Propriété</label>
                      <select 
                        id="lh-add-type" 
                        value={newType}
                        onChange={(e) => setNewType(e.target.value)}
                        className="w-full px-4 py-3.5 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-xs focus:outline-none text-stone-800"
                      >
                        <option>Appartement de luxe</option>
                        <option>Villa Prestige</option>
                        <option>Chalet Alpin</option>
                        <option>Manoir Historique</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Premium Featured Gold Box matches bottom of Image 6 */}
                <div className="bg-[#FCFAF7] border border-[#E8DFC2] p-5.5 rounded-2xl flex items-center justify-between text-left gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#9C4323] text-white rounded-xl shrink-0">
                      <Sparkles className="w-5 h-5 text-amber-100" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#2F2B28]">Mise en avant Premium</h4>
                      <p className="text-[10px] text-[#8E8071] mt-0.5 max-w-sm font-sans">
                        Boostez la visibilité de votre annonce. Elle apparaîtra en tête des recherches et dans notre newsletter "Sélection du Concierge".
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-mono font-bold text-[#9C4323]">+45€</span>
                    <button
                      type="button"
                      onClick={() => setPremiumFeatured(!premiumFeatured)}
                      className={`w-11 h-6 rounded-full transition-all relative cursor-pointer ${premiumFeatured ? 'bg-[#9C4323]' : 'bg-stone-300'}`}
                    >
                      <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${premiumFeatured ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                </div>

                {/* Stepper Footer inputs matches Image 6 */}
                <div className="pt-6 border-t border-[#F3ECE5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    type="button" 
                    onClick={() => alert("Brouillon d'annonce enregistré.")}
                    className="text-stone-500 hover:text-stone-900 text-xs font-bold uppercase font-mono tracking-widest self-start sm:self-center"
                  >
                    Sauvegarder le Brouillon
                  </button>
                  
                  <div className="flex gap-3 justify-end w-full sm:w-auto">
                    <button 
                      type="button" 
                      onClick={() => setActiveTab('dashboard')}
                      className="px-5 py-3 border border-[#E8DFC2] rounded-xl text-xs font-bold hover:bg-[#FAF5EF] transition-colors"
                    >
                      Retour
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
                    >
                      Continuer
                    </button>
                  </div>
                </div>

              </form>

            </div>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW G: SUCCÈS PUBLIE (Image 10) */}
        {/* ========================================== */}
        {activeTab === 'success' && (
          <motion.div
            key="lh-view-success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-md mx-auto text-center space-y-8 animate-fadeIn text-stone-800"
          >
            <div className="space-y-3">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-[#9C4323] mx-auto border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h1 className="font-serif text-3xl font-black text-[#2F2B28]">Annonce publiée avec succès</h1>
                <p className="text-xs text-[#8E8071]">Félicitations ! Votre bien est désormais visible par notre communauté exclusive.</p>
              </div>
            </div>

            {/* Premium success preview card matches Image 10 */}
            <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-4 shadow-lg text-left relative overflow-hidden">
              <div className="h-56 rounded-2xl overflow-hidden relative bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=500&q=80" 
                  alt="Villa Mirabel success state" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#9C4323] text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded">
                  ACTIF
                </span>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">{newTitle}</h3>
                    <p className="text-xs text-[#8E8071] mt-0.5">📍 {newCity}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-serif text-xl font-bold text-[#9C4323]">{newPrice} €</p>
                    <span className="text-[9px] text-[#8E8071] font-mono">/nuit</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center border-t border-[#F3ECE5] pt-4 text-xs font-semibold text-stone-600">
                  <div>
                    <span className="text-[9px] text-[#8E8071] font-mono uppercase block">Chambres</span>
                    <span className="text-stone-950 mt-0.5 block">4 Chambres</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#8E8071] font-mono uppercase block">Bains</span>
                    <span className="text-stone-950 mt-0.5 block">3 Bains</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#8E8071] font-mono uppercase block">Surface</span>
                    <span className="text-stone-950 mt-0.5 block">240 m²</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Actions */}
            <div className="flex gap-3">
              <button 
                onClick={() => alert("Chargement de la page de l'annonce devant la communauté...")}
                className="flex-1 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-xs rounded-xl shadow-sm transition-colors text-center cursor-pointer"
              >
                Voir l'annonce
              </button>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="flex-1 py-3 border border-[#E8DFC2] text-stone-700 bg-[#FCFAF7] hover:bg-white rounded-xl text-xs font-bold shadow-sm transition-colors text-center cursor-pointer"
              >
                Retour au tableau de bord
              </button>
            </div>

          </motion.div>
        )}

        {/* ========================================== */}
        {/* COMPACT SUB VIEWS (12 SPÉCIAL LESSONS) */}
        {/* ========================================== */}
        {activeTab === 'demo_txn' && (
          <motion.div key="lh-demo-txn" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <TransactionDetailScreen onBack={() => setActiveTab('dashboard')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO UNPAID */}
        {/* ========================================== */}
        {activeTab === 'demo_unpaid' && (
          <motion.div key="lh-demo-unpaid" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <UnpaidDetailScreen onBack={() => setActiveTab('dashboard')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO PAY OK */}
        {/* ========================================== */}
        {activeTab === 'demo_pay_ok' && (
          <motion.div key="lh-demo-pay-ok" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PaymentSuccessScreen onHome={() => setActiveTab('dashboard')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO PROP CLIENT */}
        {/* ========================================== */}
        {activeTab === 'demo_prop_client' && (
          <motion.div key="lh-demo-prop-client" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PropertyDetailClientScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO DOC CLIENT */}
        {/* ========================================== */}
        {activeTab === 'demo_doc_client' && (
          <motion.div key="lh-demo-doc-client" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <DocumentPortalClientScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO CHECKOUT */}
        {/* ========================================== */}
        {activeTab === 'demo_checkout' && (
          <motion.div key="lh-demo-checkout" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <CheckoutScreen onConfirm={() => setActiveTab('demo_pay_ok')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO CHAT */}
        {/* ========================================== */}
        {activeTab === 'demo_chat' && (
          <motion.div key="lh-demo-chat" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <ChatScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO NOTIF */}
        {/* ========================================== */}
        {activeTab === 'demo_notif' && (
          <motion.div key="lh-demo-notif" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <NotificationsScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO PROFILE */}
        {/* ========================================== */}
        {activeTab === 'demo_profile' && (
          <motion.div key="lh-demo-profile" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <ProfileScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO EMPTY */}
        {/* ========================================== */}
        {activeTab === 'demo_empty' && (
          <motion.div key="lh-demo-empty" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <SearchEmptyScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO PAY FAIL */}
        {/* ========================================== */}
        {activeTab === 'demo_pay_fail' && (
          <motion.div key="lh-demo-pay-fail" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PaymentFailedScreen onRetry={() => setActiveTab('demo_checkout')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO CREDIT */}
        {/* ========================================== */}
        {activeTab === 'demo_credit' && (
          <motion.div key="lh-demo-credit" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <CreditSimulatorScreen />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO TRUST SCORE */}
        {/* ========================================== */}
        {activeTab === 'demo_trust_score' && (
          <motion.div key="lh-demo-trust-score" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <TrustScoreScreen onExplore={() => setActiveTab('demo_catalogue')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO BAIL SIGNATURE */}
        {/* ========================================== */}
        {activeTab === 'demo_bail_sig' && (
          <motion.div key="lh-demo-bail-sig" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <BailSignatureScreen onBack={() => setActiveTab('dashboard')} onSignedSuccessful={() => setActiveTab('demo_pay_ok')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO RESERVATION SENT */}
        {/* ========================================== */}
        {activeTab === 'demo_res_sent' && (
          <motion.div key="lh-demo-res-sent" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <ReservationSentScreen onBackDocs={() => setActiveTab('demo_doc_client')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO PROP PRESTIGE */}
        {/* ========================================== */}
        {activeTab === 'demo_prop_prestige' && (
          <motion.div key="lh-demo-prop-prestige" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PrestigePropertyDetailScreen onReserve={() => setActiveTab('demo_res_sent')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO CATALOGUE PRESTIGE */}
        {/* ========================================== */}
        {activeTab === 'demo_catalogue' && (
          <motion.div key="lh-demo-catalogue" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PrestigeCatalogueScreen onSelectProperty={() => setActiveTab('demo_prop_prestige')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO IDENTITY KYC */}
        {/* ========================================== */}
        {activeTab === 'demo_kyc' && (
          <motion.div key="lh-demo-kyc" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <IdentityVerificationScreen onComplete={() => setActiveTab('demo_trust_score')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO LOGIN */}
        {/* ========================================== */}
        {activeTab === 'demo_login' && (
          <motion.div key="lh-demo-login" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PhoneLoginScreen onContinue={() => setActiveTab('demo_otp')} />
          </motion.div>
        )}

        {/* ========================================== */}
        {/* VIEW: DEMO OTP */}
        {/* ========================================== */}
        {activeTab === 'demo_otp' && (
          <motion.div key="lh-demo-otp" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <SecurityOTPScreen onConfirm={() => setActiveTab('dashboard')} />
          </motion.div>
        )}

      </AnimatePresence>

      {/* Corporate signature footer */}
      <footer className="text-center font-mono text-[9px] text-[#A2978B] pt-6 border-t border-[#E8DFC2]/15 select-none">
        © 2024 L'Habitation Conciergerie. Tous droits réservés. Vos documents sont chiffrés de bout en bout.
      </footer>

    </div>
  );
}
