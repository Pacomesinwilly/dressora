import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle, 
  User, 
  Building, 
  ArrowDownToLine, 
  FileSpreadsheet, 
  HelpCircle, 
  MessageSquare,
  AlertCircle,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  CreditCard,
  ShieldCheck,
  Award,
  DollarSign,
  ArrowUpRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { INITIAL_TRANSACTIONS } from '../../infrastructure/mock/mockData';

interface CommissionsViewProps {
  portalMode?: 'agent' | 'client' | 'guest';
}

export default function CommissionsView({ portalMode = 'client' }: CommissionsViewProps) {
  // Navigation inside view
  const [activeAgentSubTab, setActiveAgentSubTab] = useState<'overview' | 'wallet' | 'validation'>('overview');
  const [tenantContacted, setTenantContacted] = useState(false);
  const [selectedHistoricalTransactionId, setSelectedHistoricalTransactionId] = useState<string>('t-1');

  // Owner Mode data (L'Habitation)
  const transaction = INITIAL_TRANSACTIONS[0];

  // Agent Mode mockups data
  const agentBalance = 12450000; // in FCFA (equals roughly ~19,000 EUR)
  const [withdrawAmount, setWithdrawAmount] = useState('1500000');
  const [payoutMethod, setPayoutMethod] = useState<'bank' | 'momo'>('bank');
  
  // Custom interactive trigger states
  const [showPayoutSuccessAlert, setShowPayoutSuccessAlert] = useState(false);

  const agentCompletedDeals = [
    {
      id: 'deal-1',
      title: 'Villa Terracotta',
      client: 'Jean Dupont',
      amountLease: 32500,
      commission: 2450,
      performance: '98%',
      date: '24 Mai 2026',
      status: 'Transfert effectué'
    },
    {
      id: 'deal-2',
      title: 'The Azure Penthouse',
      client: 'Eleanor Vance',
      amountLease: 28000,
      commission: 1980,
      performance: '100%',
      date: '18 Mai 2026',
      status: 'Transfert effectué'
    },
    {
      id: 'deal-3',
      title: 'Modern Penthouse Sud',
      client: 'Sophia Martinez',
      amountLease: 14500,
      commission: 725,
      performance: '95%',
      date: '10 Mai 2026',
      status: 'Transfert effectué'
    }
  ];

  const handleWithdrawRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayoutSuccessAlert(true);
    setTimeout(() => {
      setShowPayoutSuccessAlert(false);
    }, 5000);
  };

  return (
    <div id="commissions-view-root" className="space-y-6 text-left">
      
      {/* ========================================== */}
      {/* 1. AGENT PORTAL MODE: SUIVI DES COMMISSIONS */}
      {/* ========================================== */}
      {portalMode === 'agent' && (
        <div className="space-y-8">
          
          {/* Breadcrumb bread / subtab selections */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC2]/30 text-xs">
            <div className="flex items-center gap-2 text-[#8E8071]">
              <span className="uppercase tracking-wider font-mono text-[10px]">Commissions</span>
              <span className="text-[#B6AFA6]">/</span>
              <span className="font-semibold text-[#9C4323] uppercase tracking-wider font-mono text-[10px]">Tableau de Bord Elite</span>
            </div>

            <div className="flex gap-4">
              <button
                id="agent-subtab-overview"
                onClick={() => setActiveAgentSubTab('overview')}
                className={`text-xs font-bold uppercase tracking-wider font-mono ${activeAgentSubTab === 'overview' ? 'text-[#9C4323] underline' : 'text-[#8E8071] hover:text-[#2F2B28]'}`}
              >
                Suivi Financier
              </button>
              <button
                id="agent-subtab-validation"
                onClick={() => setActiveAgentSubTab('validation')}
                className={`text-xs font-bold uppercase tracking-wider font-mono ${activeAgentSubTab === 'validation' ? 'text-[#9C4323] underline' : 'text-[#8E8071] hover:text-[#2F2B28]'}`}
              >
                Validation Location
              </button>
              <button
                id="agent-subtab-wallet"
                onClick={() => setActiveAgentSubTab('wallet')}
                className={`text-xs font-bold uppercase tracking-wider font-mono ${activeAgentSubTab === 'wallet' ? 'text-[#9C4323] underline' : 'text-[#8E8071] hover:text-[#2F2B28]'}`}
              >
                Retraits / Wallet
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* AGENT VIEW A: OVERVIEW & GAINS GRAPHIC (mockups 8 & 9) */}
            {activeAgentSubTab === 'overview' && (
              <motion.div
                key="agent-fin-overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                
                {/* Title and stats blocks header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl font-extrabold text-[#2F2B28] tracking-tight">Suivi des Commissions</h2>
                    <p className="text-sm text-[#8E8071]">Consultez vos indicateurs de rémunération d'élite en un coup d'œil.</p>
                  </div>
                  
                  {/* Payout demand quick redirection */}
                  <button
                    onClick={() => setActiveAgentSubTab('wallet')}
                    className="px-5 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-bold transition-all shrink-0 shadow-sm"
                  >
                    Demander un Retrait (Wallet)
                  </button>
                </div>

                {/* Primary financial numbers widgets grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">SOLDE ENCOURS DISPONIBLE</span>
                    <span className="text-3xl font-serif font-black text-[#9C4323] block mt-2">
                       {agentBalance.toLocaleString('fr-FR')} FCFA
                    </span>
                    <div className="pt-2.5 mt-2.5 border-t border-[#F3ECE5] flex items-center justify-between text-xs text-[#8E8071]">
                      <span>Environ 19 000.00 €</span>
                      <span className="text-emerald-700 font-semibold">• Sûreté Escrow Active</span>
                    </div>
                  </div>

                  <div className="bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">COMMISSIONS MENSUELLES (MAI)</span>
                    <span className="text-3xl font-serif font-black text-stone-900 block mt-2">
                       + 5 155.00 €
                    </span>
                    <div className="pt-2.5 mt-2.5 border-t border-[#F3ECE5] flex items-center justify-between text-xs text-stone-700">
                      <span>3 contrats validés</span>
                      <span className="text-[#9C4323] font-bold">+ 14.5% vs Avril</span>
                    </div>
                  </div>

                  <div className="bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold uppercase block">PERFORMANCE SCORE MOYEN</span>
                    <span className="text-3xl font-serif font-black text-emerald-800 block mt-2">
                       97.6%
                    </span>
                    <div className="pt-2.5 mt-2.5 border-t border-[#F3ECE5] flex items-center justify-between text-xs text-emerald-800">
                      <span>Satisfaction client certifiée</span>
                      <Award className="w-4 h-4 text-emerald-600 fill-current" />
                    </div>
                  </div>

                </div>

                {/* Curve Gains chart trend block exactly mimicking mockup 8 */}
                <div className="bg-[#1F1B19] text-white p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#E8DFC2] font-black uppercase">KPI PERFORMANCE</span>
                      <h4 className="font-serif text-xl font-bold">Évolution des Gains en Commission</h4>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-[#E8DFC2]">
                      <TrendingUp className="w-3.5 h-3.5 text-[#9C4323]" />
                      <span>Croissance Annuelle 2026</span>
                    </div>
                  </div>

                  {/* Render dynamic premium graph using pure SVG */}
                  <div className="h-44 relative bg-stone-900/40 rounded-2xl border border-white/5 overflow-hidden p-4 flex flex-col justify-end">
                    <svg className="w-full h-full absolute inset-0 z-0 p-2" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9C4323" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#9C4323" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Gradient fill */}
                      <path 
                        d="M 0 100 Q 50 80 100 90 T 200 60 T 300 45 T 400 20 T 500 10 L 500 120 L 0 120 Z" 
                        fill="url(#chartGradient)" 
                      />
                      {/* Stroke line */}
                      <path 
                        d="M 0 100 Q 50 80 100 90 T 200 60 T 300 45 T 400 20 T 500 10" 
                        fill="none" 
                        stroke="#9C4323" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                      {/* Data Dots with glow */}
                      <circle cx="100" cy="90" r="4.5" fill="#E8DFC2" stroke="#9C4323" strokeWidth="2" />
                      <circle cx="200" cy="60" r="4.5" fill="#E8DFC2" stroke="#9C4323" strokeWidth="2" />
                      <circle cx="300" cy="45" r="4.5" fill="#E8DFC2" stroke="#9C4323" strokeWidth="2" />
                      <circle cx="400" cy="20" r="4.5" fill="#E8DFC2" stroke="#9C4323" strokeWidth="2" />
                      <circle cx="500" cy="10" r="4.5" fill="#fff" stroke="#9C4323" strokeWidth="3" />
                    </svg>
                    
                    {/* Horizontal axis grid values */}
                    <div className="relative z-10 w-full flex justify-between px-2 text-[9px] font-mono text-[#8E8071] border-t border-white/5 pt-1">
                      <span>Jan</span>
                      <span>Fév</span>
                      <span>Mar</span>
                      <span>Avr</span>
                      <span>Mai (Prévu)</span>
                    </div>
                  </div>
                </div>

                {/* History list of completed luxury placements */}
                <div className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[#F3ECE5]">
                    <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Signatures et Gains Récents</h3>
                    <span className="text-xs text-[#8E8071] font-mono">Terracotta Certified Deal Tracker</span>
                  </div>

                  <div className="divide-y divide-[#EADFD5]/30 text-xs text-[#2F2B28]">
                    {agentCompletedDeals.map((deal) => (
                      <div key={deal.id} className="py-4.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-[#FAF5EF] rounded-xl flex items-center justify-center text-[#9C4323]">
                            <Building className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-[#2F2B28]">{deal.title}</h5>
                            <p className="text-[11px] text-[#8E8071] mt-0.5">Locataire : <b>{deal.client}</b> • Bail Global: {deal.amountLease.toLocaleString('fr-FR')} €</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs">
                          <div className="text-right">
                            <span className="text-[10px] text-stone-400 block font-mono">COMMISSION GAGNÉE</span>
                            <span className="font-bold text-[#9C4323] text-base">+{deal.commission.toLocaleString('fr-FR')} €</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveAgentSubTab('validation');
                            }}
                            className="px-4 py-2 bg-stone-900 hover:bg-stone-850 text-white font-bold rounded-lg text-[10px]"
                          >
                            FICHE DE VALIDATION
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* AGENT VIEW B: RENTAL CELEBRATION VALIDATION SHEET (mockup 0) */}
            {activeAgentSubTab === 'validation' && (
              <motion.div
                key="agent-rental-validation"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="max-w-xl mx-auto"
              >
                
                <div className="bg-white rounded-3xl p-8 border border-[#E8DFC2]/30 shadow-xl space-y-8 text-left relative">
                  
                  {/* Validation success header */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 shadow border border-emerald-100">
                      <CheckCircle className="w-9 h-9 stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#9C4323] font-black uppercase">TERRACOTTA CONFIRMED DEAL</span>
                      <h2 className="font-serif text-3xl font-black text-[#2F2B28]">Location Validée !</h2>
                      <p className="text-xs text-[#8E8071]">Signature numérique cryptographique validée sur bloc territorial de Cannes.</p>
                    </div>
                  </div>

                  {/* Summary variables mirroring mockup 0 */}
                  <div className="bg-[#FCFAF7] border border-[#E8DFC2]/30 rounded-2xl p-6 space-y-4">
                    
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#F3ECE5]">
                      <div>
                        <span className="text-[10px] text-[#A2978B] font-mono block">COMMISSION AGENT CRÉDITÉE</span>
                        <span className="font-serif font-black text-[#9C4323] text-2xl">+ 2 450.00 €</span>
                      </div>
                      <span className="px-3 py-1 bg-[#1F1B19] text-white text-[9px] font-mono font-bold uppercase rounded-lg">
                        Prestige Plan
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs pt-1">
                      <div>
                        <span className="text-[#A2978B] block text-[9px] font-mono">MONTANT GLOBAL BAIL:</span>
                        <span className="font-bold text-[#2F2B28]">32 500,00 € (Net bailleur)</span>
                      </div>
                      <div>
                        <span className="text-[#A2978B] block text-[9px] font-mono">DÉPÔT DE GARANTIE:</span>
                        <span className="font-bold text-[#2F2B28]">15 000,00 € (Sécurisé Escrow)</span>
                      </div>
                      <div>
                        <span className="text-[#A2978B] block text-[9px] font-mono">LOCATAIRE SIGNATAIRE:</span>
                        <span className="font-bold text-[#2F2B28]">Eleanor Vance (Identité Capturée)</span>
                      </div>
                      <div>
                        <span className="text-[#A2978B] block text-[9px] font-mono">SATISFACTION CLIENT:</span>
                        <span className="font-bold text-emerald-800">Satisfait à 100% (Verifié via app)</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance indicator stamp */}
                  <div className="p-4.5 bg-amber-50/45 border border-amber-100 rounded-2xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-stone-900 font-mono">
                        98%
                      </div>
                      <div>
                        <p className="font-bold text-[#2F2B28]">Score de Performance d'Elite</p>
                        <p className="text-[10px] text-[#8E8071]">Fidélité client et rapidité d'exécution territoriale.</p>
                      </div>
                    </div>
                    <Award className="w-5 h-5 text-amber-600 fill-current shrink-0" />
                  </div>

                  {/* Foot actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F3ECE5]">
                    <button
                      onClick={() => alert("Impression du dossier scellé avec l'empreinte de la blockchain territorale.")}
                      className="flex-1 py-3 bg-stone-900 hover:bg-stone-850 text-white text-xs font-bold rounded-xl text-center cursor-pointer"
                    >
                      Imprimer le Scellé
                    </button>
                    <button
                      onClick={() => setActiveAgentSubTab('overview')}
                      className="px-5 py-3 border border-[#E8DFC2] text-stone-600 text-xs font-bold rounded-xl text-center hover:bg-[#F3ECE5] cursor-pointer"
                    >
                      Retour
                </button>
                  </div>

                </div>

              </motion.div>
            )}

            {/* AGENT VIEW C: RETRAIT & WALLET PAYOUTS (mockup 4) */}
            {activeAgentSubTab === 'wallet' && (
              <motion.div
                key="agent-wallet-payouts"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl mx-auto"
              >
                
                <div className="bg-white rounded-3xl p-8 border border-[#E8DFC2]/30 shadow-xl text-left space-y-6">
                  
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">WALLET INTEGRATED FLOW</span>
                    <h3 className="font-serif text-2xl font-black text-[#2F2B28] mt-1">Wallet & Payouts</h3>
                    <p className="text-xs text-[#8E8071] mt-1 leading-relaxed">
                      Effectuez des retraits instantanés de vos gains depuis votre réserve de séquestre sécurisée de commissions.
                    </p>
                  </div>

                  {/* Balance recap and request input */}
                  {showPayoutSuccessAlert ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-2xl flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold font-mono text-[10px] block mb-1 uppercase">RETRAIT EXPÉDIÉ AVEC SUCCÈS !</span>
                        Votre demande de virement d'un montant de <span className="font-bold text-stone-900">{Number(withdrawAmount).toLocaleString('fr-FR')} FCFA</span> a été traitée en priorité absolue. Les fonds seront disponibles sous 10 minutes.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleWithdrawRequest} className="space-y-6">
                      
                      {/* Big balance display */}
                      <div className="bg-[#FCFAF7] border border-[#E8DFC2]/30 p-6 rounded-2xl text-center">
                        <span className="text-[10px] text-[#8E8071] font-mono">SOLDE DISPONIBLE AU RETRAIT</span>
                        <p className="text-3xl font-serif font-black text-[#9C4323] mt-1">12 450 000 FCFA</p>
                        <p className="text-[10px] text-[#8E8071] mt-1.5 font-mono">Protection Escrow ACTIVE • Pas de frais additionnels applicables</p>
                      </div>

                      {/* Amount picker */}
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-[#8E8071] font-mono uppercase block">Saisir le montant du transfert (FCFA) :</label>
                        <input
                          id="withdraw-amount-picker"
                          type="number"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          placeholder="Ex: 1500000"
                          className="w-full px-4 py-3 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none font-mono focus:border-[#9C4323] text-stone-900"
                        />
                      </div>

                      {/* Transfer channel choice selection */}
                      <div className="space-y-2.5">
                        <label className="text-[9px] font-bold text-[#8E8071] font-mono uppercase block">Méthode de réception sécurisée :</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setPayoutMethod('bank')}
                            className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                              payoutMethod === 'bank' 
                                ? 'bg-amber-50/45 border-[#9C4323] text-[#2F2B28]' 
                                : 'bg-white border-[#E8DFC2]/45 text-stone-500 hover:bg-[#FAF5EF]'
                            }`}
                          >
                            <CreditCard className="w-5 h-5 text-[#9C4323]" />
                            <span className="text-xs font-bold leading-none">Virement Bancaire (Rapatriement)</span>
                            <span className="text-[9px] font-mono opacity-80 leading-snug">SOGE / SG Bank Account Sûre</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPayoutMethod('momo')}
                            className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                              payoutMethod === 'momo' 
                                ? 'bg-amber-50/45 border-[#9C4323] text-[#2F2B28]' 
                                : 'bg-white border-[#E8DFC2]/45 text-stone-500 hover:bg-[#FAF5EF]'
                            }`}
                          >
                            <RefreshCw className="w-5 h-5 text-orange-600" />
                            <span className="text-xs font-bold leading-none">MTN MoMo / Moov Money</span>
                            <span className="text-[9px] font-mono opacity-80 leading-snug">+229 Escrow instantané</span>
                          </button>
                        </div>
                      </div>

                      {/* Secure guidelines banner */}
                      <div className="p-3 bg-stone-900 text-stone-200 border border-stone-850 rounded-xl flex items-center gap-3 text-xs leading-relaxed">
                        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                        <p>
                          <b>Authentification requise :</b> Le versement se fait sur votre compte titulaire vérifié. Tout retrait supérieur à 5 000 000 FCFA est sujet à une liveness biométrique forcée.
                        </p>
                      </div>

                      {/* Form footer */}
                      <div className="flex gap-3 justify-end pt-4 border-t border-[#F3ECE5]">
                        <button
                          type="button"
                          onClick={() => setActiveAgentSubTab('overview')}
                          className="px-5 py-2.5 border border-[#E8DFC2] text-stone-500 rounded-xl text-xs font-bold hover:bg-[#FAF5EF]"
                        >
                          Retour financier
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white rounded-xl text-xs font-bold shadow-sm"
                        >
                          Valider le Payout instantané
                        </button>
                      </div>

                    </form>
                  )}

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      )}

      {/* ========================================== */}
      {/* 2. OWNER PORTAL MODE: L'HABITATION PORTAL  */}
      {/* ========================================== */}
      {portalMode === 'client' && (
        <div className="space-y-6">
          
          {/* L'Habitation Custom Top Ribbon */}
          <div className="bg-white border-b border-[#F3ECE5] px-6 py-4 rounded-2xl flex items-center justify-between shadow-sm select-none">
            <div className="flex items-center gap-6">
              <span className="font-serif text-xl font-black text-[#9C4323] tracking-tight">
                L'Habitation
              </span>
              <nav className="hidden md:flex gap-6 text-xs font-semibold text-[#8E8071]">
                <span className="hover:text-[#2F2B28] cursor-pointer" onClick={() => alert("Indexation de l'exploration territoriale.")}>Explorer</span>
                <span className="hover:text-[#2F2B28] cursor-pointer" onClick={() => alert("Messagerie d'élite ouverte.")}>Messages</span>
                <span className="text-[#9C4323] border-b-2 border-[#9C4323] pb-1 cursor-pointer">Paiements</span>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Bell className="w-4.5 h-4.5 text-[#8E8071]" />
              <div className="w-8 h-8 rounded-full bg-[#FCFAF7] border border-[#E8DFC2] overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=81&q=80" 
                  alt="Owner" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Mini Sidebar */}
            <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 space-y-6 shadow-sm">
              <div>
                <h4 className="font-serif text-base font-bold text-[#2F2B28]">Bienvenue</h4>
                <p className="text-xs text-[#8E8071]">Votre conciergerie L'Habitation</p>
              </div>

              <div className="space-y-1 font-sans text-xs text-left">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-[#6A6055] hover:bg-[#F3ECE5]/30 rounded-xl cursor-pointer" onClick={() => alert("Recherche...")}>
                  <Search className="w-4 h-4 text-[#8E8071]" />
                  Recherche
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-[#6A6055] hover:bg-[#F3ECE5]/30 rounded-xl cursor-pointer" onClick={() => alert("Ouvrir messagerie locataire")}>
                  <MessageSquare className="w-4 h-4 text-[#8E8071]" />
                  Messages
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-[#6A6055] hover:bg-[#F3ECE5]/30 rounded-xl cursor-pointer" onClick={() => alert("Documents bails et factures")}>
                  <FileSpreadsheet className="w-4 h-4 text-[#8E8071]" />
                  Documents
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 bg-[#FAF5EF] text-[#9C4323] font-bold rounded-xl cursor-pointer">
                  <Building className="w-4 h-4" />
                  Paiements
                </button>
              </div>

              <button
                id="l-habitation-add-bien-owner"
                onClick={() => alert("Formulaire d'ajout de bien direct propriétaire.")}
                className="w-full py-2.5 px-4 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-bold rounded-xl shadow transition-colors cursor-pointer"
              >
                Ajouter un bien
              </button>
            </div>

            {/* Right Main Container (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Breadcrumb info back link */}
              <div 
                className="flex items-center gap-1 text-xs text-[#8E8071] hover:text-[#9C4323] transition-colors cursor-pointer" 
                onClick={() => alert("Retour à l'index des propriétés.")}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour aux transactions</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">
                    DÉTAILS DE LA TRANSACTION #{transaction.id.toUpperCase()}
                  </span>
                  <h2 className="font-serif text-3xl font-extrabold text-[#2F2B28] leading-tight-snug">
                    {transaction.title}
                  </h2>
                  <p className="text-xs text-[#8E8071]">
                    {transaction.propertyTitle} • {transaction.address}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 uppercase select-none">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Viré sur votre compte
                  </span>
                  <p className="text-[10px] text-[#8E8071] font-mono mt-1">Reçu le {transaction.receivedDate}</p>
                </div>
              </div>

              {/* Grid with net details and Tenant profile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                <div className="md:col-span-7 bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#8E8071] font-bold">
                      Montant total réglé par le locataire
                    </p>
                    <p className="text-4xl font-serif font-black text-[#2F2B28] mt-2">
                      {transaction.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </p>
                  </div>

                  <div className="p-3 bg-orange-50/45 border border-orange-100/50 rounded-2xl flex items-start gap-2.5 text-xs text-[#2F2B28]">
                    <AlertCircle className="w-4.5 h-4.5 text-[#9C4323] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Ce montant inclut les charges locatives et les services de conciergerie prestige souscrits par le locataire à West Village.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm flex flex-col justify-between items-center text-center">
                  <div className="h-40 w-full rounded-2xl overflow-hidden bg-stone-100 relative group mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80" 
                      alt="Residence Rivoli Profile" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#231E1B]/70 text-[9px] font-mono tracking-widest text-[#FBF9F4] font-bold uppercase rounded z-10 select-none">
                      Résidence Rivoli
                    </div>
                  </div>

                  {/* Tenant name and action */}
                  <div className="w-full space-y-4">
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden ring-2 ring-orange-100 shrink-0">
                        <img 
                          src={transaction.recipientAvatar} 
                          alt={transaction.recipientName} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-[#2F2B28] leading-none">{transaction.recipientName}</h5>
                        <p className="text-[9px] text-[#8E8071] font-medium uppercase tracking-wider mt-0.5 leading-none">Locataire depuis {transaction.recipientSince}</p>
                      </div>
                    </div>

                    <button
                      id="btn-contact-locataire-p"
                      onClick={() => {
                        setTenantContacted(true);
                        alert(`Message instantané pré-rédigé envoyé à ${transaction.recipientName} concernant son loyer de l’appartement Rivoli.`);
                      }}
                      className={`w-full py-2.5 bg-[#FCFAF7] border ${tenantContacted ? 'border-emerald-600 text-emerald-700' : 'border-[#E8DFC2] text-[#6A6055]'} rounded-xl text-[10px] tracking-widest font-bold uppercase transition-colors cursor-pointer`}
                    >
                      {tenantContacted ? 'Message Envoyé' : 'CONTACTER LE LOCATAIRE'}
                    </button>
                  </div>
                </div>

              </div>

              {/* Automatic rental distribution */}
              <div className="bg-white p-8 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2F2B28]">Répartition automatique</h3>
                  <p className="text-xs text-[#8E8071] mt-0.5 font-sans">Flipping de loyer géré par contrat intelligent Terracotta Reserve.</p>
                </div>

                <div className="divide-y divide-[#EADFD5]/40 text-xs">
                  <div className="py-3.5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700 font-bold">✓</span>
                      <div>
                        <p className="font-bold text-[#2F2B28]">Versé au propriétaire</p>
                        <p className="text-[10px] text-[#8E8071]">Virement effectué sur votre compte ****4291</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-800 text-base">
                        {transaction.netReceived.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </p>
                      <span className="text-[10px] text-emerald-700 tracking-wider font-mono font-bold uppercase">NET REÇU</span>
                    </div>
                  </div>

                  <div className="py-3.5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 bg-stone-100 rounded-xl text-[#2F2B28] font-semibold">%</span>
                      <div>
                        <p className="font-bold text-[#2F2B28]">Commission L'Habitation</p>
                        <p className="text-[10px] text-[#8E8071]">Frais de service et assurance inclus (5%)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#2F2B28] text-base">
                        {transaction.platformCommissionAmount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </p>
                      <span className="text-[10px] text-[#8E8071] tracking-wider font-mono font-bold uppercase">TVA INCLUSE</span>
                    </div>
                  </div>
                </div>

                {/* Grid stats tracking net versus platform percent */}
                <div className="space-y-2">
                  <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#E6DCD2]">
                    <div className="bg-[#9C4323] h-full" style={{ width: '95%' }} />
                    <div className="bg-[#C2B9AF] h-full" style={{ width: '5%' }} />
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-wide text-[#8E8071] font-bold">
                    <span>95% VOTRE PART</span>
                    <span>5% FRAIS GUIDE PLATEFORME</span>
                  </div>
                </div>
              </div>

              {/* Timeline follow-up and legal downloads grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm text-xs space-y-4">
                  <h4 className="font-bold uppercase tracking-wider text-[#8E8071] text-[10px] font-mono">SUIVI DU TRANSFERT</h4>
                  
                  <div className="space-y-4.5 pl-3.5 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EADFD5]">
                    {transaction.transferSteps.map((step, idx) => (
                      <div key={idx} className="relative flex gap-4">
                        <span className="w-4.5 h-4.5 bg-[#9C4323] border border-white rounded-full flex items-center justify-center text-white text-[9px] z-10 shrink-0 font-bold select-none">✓</span>
                        <div>
                          <h5 className="font-bold text-[#2F2B28]">{step.label}</h5>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">{step.date} • {step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4 text-xs font-semibold">
                  <h4 className="font-bold uppercase tracking-wider text-[#8E8071] text-[10px] font-mono">ACTIONS DISPONIBLES</h4>
                  
                  <div className="divide-y divide-[#EADFD5]/40 text-left">
                    <button 
                      onClick={() => alert("Génération de la quittance de loyer d'architecte Rivoli en PDF...")}
                      className="w-full py-3 hover:text-[#9C4323] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <ArrowDownToLine className="w-4.5 h-4.5 text-[#8E8071]" />
                        Télécharger la quittance
                      </span>
                      <ChevronRight className="w-4.5 h-4.5 text-[#8E8071]" />
                    </button>

                    <button 
                      onClick={() => alert("Génération de la facture fiscale de commission de service...")}
                      className="w-full py-3 hover:text-[#9C4323] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <FileSpreadsheet className="w-4.5 h-4.5 text-[#8E8071]" />
                        Facture de commission
                      </span>
                      <ChevronRight className="w-4.5 h-4.5 text-[#8E8071]" />
                    </button>

                    <button 
                      onClick={() => alert("Ouverture du support conciergerie direct L'Habitation.")}
                      className="w-full py-3 hover:text-[#9C4323] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4.5 h-4.5 text-[#8E8071]" />
                        Besoin d'aide ?
                      </span>
                      <ChevronRight className="w-4.5 h-4.5 text-[#8E8071]" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* Corporate footer info */}
      <div className="text-center font-mono text-[9px] text-[#A2978B] pt-4 select-none">
        © 2026 Terracotta Reserve • L'Habitation Partner Ecosystem. Tous droits réservés.
      </div>

    </div>
  );
}
