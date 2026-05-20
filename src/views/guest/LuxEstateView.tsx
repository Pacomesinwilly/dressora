import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  AlertOctagon, 
  CheckCircle, 
  FileCheck2, 
  User, 
  Search, 
  ChevronRight, 
  Sliders, 
  HelpCircle, 
  Sparkles, 
  Building, 
  ArrowLeft,
  X,
  CreditCard,
  UserCheck2,
  Trash2,
  FileSpreadsheet,
  Settings
} from 'lucide-react';

export default function LuxEstateView() {
  // LuxEstate Navigation tabs: 'revenues' | 'tenant_profile' | 'impayes'
  const [luxSubTab, setLuxSubTab] = useState<'revenues' | 'tenant_profile' | 'impayes'>('revenues');

  // Available interactive values
  const [luxBalance, setLuxBalance] = useState(24450.00);
  const [copiedInvoiceId, setCopiedInvoiceId] = useState<string | null>(null);

  // Default transactions
  const [transactions, setTransactions] = useState([
    { id: 'tx-1', tenant: 'Marc Lefebvre', prop: 'Appartement Haussmannien', date: '12 Juin', amount: 1450, status: 'CONFORME' },
    { id: 'tx-2', tenant: 'Sarah Benali', prop: 'Studio Bastille', date: '10 Juin', amount: 980, status: 'CONFORME' },
    { id: 'tx-3', tenant: 'Juliette Dubois', prop: 'Loft Marais', date: '08 Juin', amount: 2100, status: 'EN ATTENTE' }
  ]);

  // Selected tenant values matches Image 8 (Profil Locataire)
  const [selectedTenantName, setSelectedTenantName] = useState('Julien Beaumont');
  const [tenantNotes, setTenantNotes] = useState("Locataire exemplaire. Toujours à l'heure, prend grand soin de la résidence Rivoli.");
  const [selectedTenantScore, setSelectedTenantScore] = useState(820); // 820/1000

  // Impayés listing matches Image 9
  const [unpaidTotal, setUnpaidTotal] = useState(14250);
  const [unpaidList, setUnpaidList] = useState([
    { id: 'unpaid-1', name: 'Elena Marini', prop: 'Villa Terracotta', days: 45, due: 7250, status: 'Critique' },
    { id: 'unpaid-2', name: 'Jean-Marc Dupont', prop: 'Le Loft', days: 30, due: 4200, status: 'Relancé' },
    { id: 'unpaid-3', name: 'Sophie Laurent', prop: 'Studio Bastille', days: 15, due: 2800, status: 'Rappel 1' }
  ]);

  const handleWithdrawFunds = () => {
    if (luxBalance <= 0) {
      alert("Aucun fonds disponible au retrait pour le moment.");
      return;
    }
    const amount = luxBalance;
    setLuxBalance(0);
    alert(`Transfert de ${amount.toLocaleString('fr-FR')} € initié de LuxEstate vers votre compte bancaire enregistré. Transfert instantané certifié.`);
  };

  const handleMailingAllDefaulters = () => {
    const names = unpaidList.map(u => u.name).join(', ');
    alert(`Mise en demeure et relances réglementaires expédiées automatiquement par e-mail et SMS aux locataires identifiés : ${names}.`);
  };

  return (
    <div id="luxestate-root" className="space-y-8 select-none font-sans text-left">
      
      {/* LUXESTATE SHARED RESPONSIVE NAVIGATION HEADER */}
      <header className="bg-[#191615] text-[#F3ECE5] border border-stone-800 px-6 py-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <span className="font-serif text-2.5xl font-black text-[#9C4323] tracking-widest uppercase">
            LuxEstate
          </span>
          
          {/* Sub Navigation Bar - matches tab design of Images 7, 8, 9 */}
          <nav className="flex gap-4 md:gap-6 text-xs font-semibold overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button 
              onClick={() => setLuxSubTab('revenues')} 
              className={`pb-1 border-b-2 transition-all cursor-pointer ${luxSubTab === 'revenues' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent text-stone-400 hover:text-white'}`}
            >
              Suivi des Revenus
            </button>
            <button 
              onClick={() => setLuxSubTab('tenant_profile')} 
              className={`pb-1 border-b-2 transition-all cursor-pointer ${luxSubTab === 'tenant_profile' ? 'text-[#9C4323] border-[#9C4323] font-bold' : 'border-transparent text-stone-400 hover:text-white'}`}
            >
              Profil Locataire
            </button>
            <button 
              onClick={() => setLuxSubTab('impayes')} 
              className={`pb-1 border-b-2 transition-all cursor-pointer ${luxSubTab === 'impayes' ? 'text-rose-500 border-rose-500 font-bold' : 'border-transparent text-stone-400 hover:text-rose-400'}`}
            >
              Gestion des Impayés
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-[#E8DFC2] uppercase font-black bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-lg">
            PREMIUM OWNER
          </span>
        </div>
      </header>

      {/* LUXESTATE NAVIGATION SUB VIEWS */}
      <AnimatePresence mode="wait">
        
        {/* ========================================================= */}
        {/* VIEW 1: SUIVI DES REVENUS (Image 7) */}
        {/* ========================================================= */}
        {luxSubTab === 'revenues' && (
          <motion.div
            key="lux-revenues-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">LuxEstate Finances</span>
              <h1 className="font-serif text-3.5xl font-black text-stone-900 tracking-tight mt-1">Tableau de Bord Financier</h1>
              <p className="text-sm text-[#8E8071] mt-0.5">Visualisez vos revenus locatifs, gérez vos versements et suivez l'évolution de votre patrimoine immobilier.</p>
            </div>

            {/* Incomes & Detailed incomes graph Row matching Image 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Solde Card */}
              <div className="lg:col-span-5 bg-stone-950 text-white p-8 rounded-[32px] border border-stone-850 shadow-xl flex flex-col justify-between min-h-[300px]">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#8E8071] font-bold block">SOLDE DISPONIBLE</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-serif font-black">{luxBalance.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                  </div>
                  <span className="text-xs text-emerald-500 font-semibold block pt-1">+15% ce mois-ci</span>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={handleWithdrawFunds}
                    className="w-full py-4 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    Retirer les fonds
                  </button>
                </div>
              </div>

              {/* Right Chart Box: Revenu Mensuel Détaillé */}
              <div className="lg:col-span-7 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE5]">
                  <div>
                    <span className="text-[10px] text-[#8E8071] font-mono block uppercase">REVENU MENSUEL DÉTAILLÉ</span>
                    <h4 className="font-serif text-lg font-bold text-stone-900 mt-0.5">Revenus vs Charges</h4>
                  </div>
                  <div className="flex gap-2 text-[10px] font-semibold text-stone-600">
                    <span className="px-2.5 py-1 bg-[#FAF5EF] rounded-lg text-[#9C4323]">Trimestriel</span>
                  </div>
                </div>

                {/* Vertical twin bars details precisely mimicking Image 7 */}
                <div className="h-44 flex items-end justify-between text-[10px] font-mono text-[#8E8071] pt-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1.5 items-end">
                      <div className="w-4 bg-[#9C4323] rounded-t h-20" />
                      <div className="w-4 bg-stone-300 rounded-t h-8" />
                    </div>
                    <span>JAN</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1.5 items-end">
                      <div className="w-4 bg-[#9C4323] rounded-t h-28" />
                      <div className="w-4 bg-stone-300 rounded-t h-12" />
                    </div>
                    <span>FEV</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1.5 items-end">
                      <div className="w-4 bg-[#9C4323] rounded-t h-24" />
                      <div className="w-4 bg-stone-300 rounded-t h-10" />
                    </div>
                    <span>MAR</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1.5 items-end">
                      <div className="w-4 bg-[#9C4323] rounded-t h-32" />
                      <div className="w-4 bg-stone-300 rounded-t h-14" />
                    </div>
                    <span>AVR</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1.5 items-end">
                      <div className="w-4 bg-[#1F1B19] rounded-t h-40" />
                      <div className="w-4 bg-[#9C4323] rounded-t h-16" />
                    </div>
                    <span>MAI</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Split layout: transactions table Left & lateral actions Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Transactions Board List */}
              <div className="lg:col-span-8 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-4">
                <div className="border-b border-[#F3ECE5] pb-3">
                  <h3 className="font-serif text-lg font-bold text-stone-900">Transactions Récentes</h3>
                </div>

                <div className="divide-y divide-[#F3ECE5] text-xs font-semibold text-stone-700">
                  {transactions.map(t => (
                    <div key={t.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-stone-900">{t.tenant}</p>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">{t.prop} • {t.date}</p>
                      </div>

                      <div className="text-right flex items-center gap-4">
                        <p className="font-serif font-bold text-[#9C4323] text-base">+{t.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</p>
                        <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono tracking-wider font-bold ${
                          t.status === 'CONFORME' ? 'bg-emerald-50 text-emerald-850' : 'bg-amber-50 text-amber-850'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lateral Command Shortcuts matching Image 7 */}
              <div className="lg:col-span-4 bg-[#FAF5EF] p-8 rounded-[32px] border border-[#E8DFC2]/45 shadow-sm flex flex-col justify-between min-h-[220px]">
                <div className="space-y-4">
                  <span className="text-[9px] uppercase tracking-wider text-[#9C4323] font-bold font-mono">Shortcuts</span>
                  <p className="text-xs font-semibold text-stone-700">Gérez vos biens et vos actions prioritaires.</p>
                </div>

                <div className="space-y-2.5 pt-4 text-xs font-bold w-full">
                  <button 
                    onClick={() => alert("Ajout de nouveau bien direct.")}
                    className="w-full py-3 bg-[#1F1B19] hover:bg-[#9C4323] text-white rounded-xl transition-all shadow-sm text-center font-mono text-[9px] tracking-widest uppercase cursor-pointer"
                  >
                    + NOUVEAU BIEN
                  </button>
                  <button 
                    onClick={() => alert("Mise en relation directe conciergerie.")}
                    className="w-full py-3 bg-white hover:bg-[#FAF5EF] border border-[#E8DFC2] text-stone-600 rounded-xl transition-all text-center font-mono text-[9px] tracking-widest uppercase cursor-pointer"
                  >
                    CONCIERGE
                  </button>
                  <button 
                    onClick={() => alert("Accès aux informations de virement SEPA.")}
                    className="w-full py-3 bg-[#FAF5EF] hover:bg-stone-200 border border-stone-300 text-stone-800 rounded-xl transition-all text-center font-mono text-[9px] tracking-widest uppercase cursor-pointer"
                  >
                    PARAMÈTRES BANCAIRES
                  </button>
                </div>
              </div>

            </div>

          </motion.div>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: PROFIL LOCATAIRE - JULIEN BEAUMONT (Image 8) */}
        {/* ========================================================= */}
        {luxSubTab === 'tenant_profile' && (
          <motion.div
            key="lux-tenant-profile-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#9C4323] font-bold uppercase block">LuxEstate Locataires</span>
              <h1 className="font-serif text-3.5xl font-black text-stone-900 tracking-tight mt-1">Profil Locataire</h1>
              <p className="text-sm text-[#8E8071] mt-0.5">Consultez l'historique de paiement, les documents de solvabilité et les notes de vos résidents.</p>
            </div>

            {/* Selection bar */}
            <div className="bg-white border border-[#E8DFC2]/30 p-4.5 rounded-2xl flex items-center justify-between gap-4 text-xs font-semibold text-stone-700">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8071]">Locataire Sélectionné :</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => { setSelectedTenantName('Julien Beaumont'); setSelectedTenantScore(820); setTenantNotes("Locataire exemplaire. Toujours à l'heure, prend grand soin de la résidence Rivoli."); }}
                  className={`px-4 py-2 rounded-xl border font-bold cursor-pointer ${selectedTenantName === 'Julien Beaumont' ? 'bg-[#9C4323] text-white border-transparent' : 'bg-[#FCFAF7] border-[#E8DFC2]'}`}
                >
                  Julien Beaumont
                </button>
                <button 
                  onClick={() => { setSelectedTenantName('Audrey Lemoine'); setSelectedTenantScore(940); setTenantNotes("Locataire privilège. Profil d'élite vérifié."); }}
                  className={`px-4 py-2 rounded-xl border font-bold cursor-pointer ${selectedTenantName === 'Audrey Lemoine' ? 'bg-[#9C4323] text-white border-transparent' : 'bg-[#FCFAF7] border-[#E8DFC2]'}`}
                >
                  Audrey Lemoine
                </button>
              </div>
            </div>

            {/* Profile info & scores layout block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-stone-700">
              
              {/* Profile card (Left width: 8 cols) */}
              <div className="lg:col-span-8 bg-white p-8 rounded-[32px] border border-[#E8DFC2]/30 shadow-sm space-y-8 text-left">
                
                {/* Hero profile identifier matches Image 8 */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#F3ECE5]">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden ring-4 ring-[#9C4323]/10 shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" 
                        alt="Julien Beaumont Profile" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-black text-stone-900 leading-tight">{selectedTenantName}</h3>
                      <p className="text-xs text-[#8E8071] mt-0.5 font-medium uppercase tracking-wider font-mono">Locataire depuis le 12 Mai 2021</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#8E8071] font-mono block uppercase">LOYER MENSUEL</span>
                    <span className="text-2xl font-serif font-black text-[#9C4323]">2 450,00 € / mois</span>
                  </div>
                </div>

                {/* Score section and arc graphic */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs font-semibold">
                  
                  {/* Confidence Score Circle */}
                  <div className="md:col-span-4 bg-[#FAF5EF] p-5.5 rounded-2xl border border-[#E8DFC2]/25 text-center flex flex-col justify-center items-center gap-3">
                    <span className="text-[9px] uppercase tracking-wider text-[#8E8071] font-mono block">SCORE DE CONFIANCE</span>
                    <div className="w-24 h-24 rounded-full border-4 border-[#9C4323] flex items-center justify-center relative">
                      <p className="font-bold text-[#2F2B28] text-lg font-mono leading-none">{selectedTenantScore}</p>
                      <span className="absolute bottom-2 font-mono text-[7px] text-[#8E8071] leading-none">/ 1000</span>
                    </div>
                    <span className="px-3 py-1 bg-[#1F1B19] text-white text-[8px] font-mono font-bold uppercase rounded">
                      Très Fiable
                    </span>
                  </div>

                  {/* Historical payments timeline */}
                  <div className="md:col-span-8 space-y-4">
                    <p className="text-[9px] uppercase tracking-widest text-[#8E8071] font-bold font-mono">HISTORIQUE DES PAIEMENTS</p>
                    
                    <div className="divide-y divide-[#F3ECE5] text-xs">
                      <div className="py-2.5 flex justify-between items-center text-stone-850">
                        <div>
                          <p className="font-bold">Loyer Octobre 2023</p>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 05 Octobre 2023</p>
                        </div>
                        <p className="font-serif font-bold text-emerald-800">+2 450,00 €</p>
                      </div>

                      <div className="py-2.5 flex justify-between items-center text-stone-850">
                        <div>
                          <p className="font-bold">Loyer Septembre 2023</p>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 02 Septembre 2023</p>
                        </div>
                        <p className="font-serif font-bold text-emerald-800">+2 450,00 €</p>
                      </div>

                      <div className="py-2.5 flex justify-between items-center text-stone-850">
                        <div>
                          <p className="font-bold">Loyer Août 2023</p>
                          <p className="text-[10px] text-[#8E8071] mt-0.5">Payé le 01 Août 2023</p>
                        </div>
                        <p className="font-serif font-bold text-emerald-800">+2 450,00 €</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Sidebar metadata columns: (Right width: 4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Documents provided box matches Image 8 */}
                <div className="bg-white p-6.5 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-4">
                  <h4 className="font-serif text-base font-bold text-stone-900 border-b border-[#F3ECE5] pb-2">Documents fournis</h4>
                  
                  <div className="divide-y divide-[#F3ECE5] text-xs font-semibold text-stone-700">
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-stone-800 leading-snug">Contrat de Bail signé.pdf</p>
                        <span className="text-[9px] text-[#8E8071] font-mono uppercase block mt-0.5">1.4 MB</span>
                      </div>
                      <button onClick={()=>alert("Téléchargement du bail")} className="p-1.5 hover:bg-stone-150 rounded-lg">
                        ⬇
                      </button>
                    </div>

                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-stone-800 leading-snug">Pièce d'Identité.jpg</p>
                        <span className="text-[9px] text-[#8E8071] font-mono uppercase block mt-0.5">2.1 MB</span>
                      </div>
                      <button onClick={()=>alert("Téléchargement de la pièce d'identité")} className="p-1.5 hover:bg-stone-150 rounded-lg">
                        ⬇
                      </button>
                    </div>

                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-stone-800 leading-snug">Justificatif de domicile.pdf</p>
                        <span className="text-[9px] text-[#8E8071] font-mono uppercase block mt-0.5">0.8 MB</span>
                      </div>
                      <button onClick={()=>alert("Téléchargement du justificatif")} className="p-1.5 hover:bg-stone-150 rounded-lg">
                        ⬇
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notes & Actions matches Image 8 */}
                <div className="bg-[#9C4323] text-white p-6 rounded-3xl flex flex-col justify-between min-h-[180px]">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono tracking-widest text-[#E8DFC2] font-black uppercase">NOTES & ACTIONS</span>
                    <p className="text-xs text-[#FCFAF7] leading-relaxed font-semibold">
                      "{tenantNotes}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex gap-2.5">
                    <button 
                      onClick={() => alert(`Message direct adressé à ${selectedTenantName}.`)}
                      className="flex-1 py-1.5 bg-white text-[#9C4323] font-bold text-[10px] rounded-lg tracking-wider text-center uppercase"
                    >
                      Relancer le locataire
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        )}

        {/* ========================================================= */}
        {/* VIEW 3: GESTION DES IMPAYÉS (Image 9) */}
        {/* ========================================================= */}
        {luxSubTab === 'impayes' && (
          <motion.div
            key="lux-impayes-tab"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="space-y-8"
          >
            {/* Warning block matches banner layout of Image 9 */}
            <div className="bg-rose-50 border border-rose-300 rounded-[28px] p-6.5 text-left relative overflow-hidden flex items-start gap-4">
              <div className="p-3 bg-rose-600 text-white rounded-2xl shrink-0 mt-0.5 shadow">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-rose-800 font-extrabold tracking-wider block uppercase">ALERTE TRÉSORERIE CRITIQUE</span>
                <h2 className="text-2xl font-serif font-black text-rose-950">
                  TOTAL DES IMPAYÉS : {unpaidTotal.toLocaleString('fr-FR')} €
                </h2>
                <p className="text-xs text-rose-800 leading-relaxed font-semibold">
                  +8% d'impayés ce mois-ci / 8 locataires sont actuellement en retard critique dans leur réglementation de loyer.
                </p>
              </div>
            </div>

            {/* List of locataires en retard matches Image 9 */}
            <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden p-6 space-y-6 text-xs text-stone-700 relative text-left">
              <div className="flex justify-between items-center border-b border-[#F3ECE5] pb-3">
                <h3 className="font-serif text-lg font-bold text-stone-900">Locataires en Retard Actif</h3>
                
                {/* Send overall mail button matches Image 9 */}
                <button 
                  onClick={handleMailingAllDefaulters}
                  className="px-4.5 py-2 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl transition-colors cursor-pointer text-xs"
                >
                  ✉ Relancer tout le monde
                </button>
              </div>

              {/* Unpaid table */}
              <div className="divide-y divide-[#F3ECE5] font-semibold">
                {unpaidList.map(u => (
                  <div key={u.id} className="py-4.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-rose-50 text-rose-850 flex items-center justify-center font-bold rounded-full shrink-0 border border-rose-200">
                        ⚠
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{u.name}</h4>
                        <p className="text-[10px] text-[#8E8071] mt-0.5">Propriété : <b>{u.prop}</b></p>
                      </div>
                    </div>

                    <div className="text-left md:text-center shrink-0">
                      <span className="text-[#A2978B] block text-[9px] font-mono">DURÉE DU RETARD</span>
                      <span className="font-bold text-rose-800 hover:underline">{u.days} Jours actifs</span>
                    </div>

                    <div className="text-right flex items-center gap-6">
                      <div>
                        <span className="text-[#A2978B] block text-[9px] font-mono">BALANCE DUE</span>
                        <span className="font-serif font-black text-rose-900 text-base">{u.due.toLocaleString('fr-FR')} €</span>
                      </div>

                      {/* Relance individual actions */}
                      <button 
                        onClick={() => {
                          alert(`Procedure contentieuse initiée à l'égard de ${u.name}. Une notification huissier a été scellée.`);
                          // Filter out or update status
                          setUnpaidList(prev => prev.map(item => item.id === u.id ? { ...item, status: 'Procédure' } : item));
                        }}
                        className="px-4 py-2 bg-stone-900 hover:bg-stone-850 text-white rounded-lg transition-colors text-[10px] font-mono tracking-wider uppercase cursor-pointer shrink-0"
                      >
                        {u.status === 'Procédure' ? 'PROCÉDURE LANCÉE' : 'LANCER PROCÉDURE'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Default trend lines / help advice box */}
            <div className="bg-[#FAF5EF] border border-[#E8DFC2]/30 p-8 rounded-3xl text-left grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-950">Garantie Loyers Impayés (GLI)</h4>
                <p className="text-xs text-stone-600 leading-relaxed leading-relaxed-snug pr-4">
                  Pour tout retard supérieur à 30 jours, notre assurance prend le relais et crédite immédiatement 100% du montant du loyer sur votre solde disponible.
                </p>
              </div>
              <button 
                onClick={() => alert("Lancement de la procédure de déclaration de sinistre GLI auprès de Terracotta Assurances.")}
                className="py-3 bg-white border border-[#E8DFC2] text-stone-800 font-bold rounded-xl text-center text-xs hover:bg-white/80 transition-colors shadow-sm cursor-pointer"
              >
                Déclarer un Sinistre GLI
              </button>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

      <footer className="text-center font-mono text-[9px] text-stone-500 pt-6">
        © 2024 LuxEstate Elite Property Services. Protected by Block Escrow & AI Debt Mitigation.
      </footer>

    </div>
  );
}
