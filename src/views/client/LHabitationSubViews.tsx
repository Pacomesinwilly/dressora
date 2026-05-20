import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle, AlertTriangle, Play, HelpCircle, 
  Download, FileSpreadsheet, Trash2, Mail, Phone, ShieldCheck,
  ChevronRight, Calendar, Info, Send, Smile, Paperclip, Bell, 
  MapPin, Check, Sliders, ToggleLeft, ToggleRight, UserCircle2, 
  FolderOpen, Eye, CreditCard, Lock, RefreshCw, Sparkles, Building2
} from 'lucide-react';

// ============================================================================
// 1. TRANSACTION DETAILS SCREEN
// ============================================================================
export function TransactionDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm">
      <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold text-[#9C4323] hover:underline mb-2">
        <ArrowLeft className="w-4 h-4" /> Retour aux transactions
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-[#F3ECE5]">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-[#8E8071] font-bold">DETAIL DE LA TRANSACTION #PAY-82910</span>
          <h2 className="font-serif text-2xl font-black text-stone-900 mt-1">Loyer Mensuel - Octobre 2023</h2>
          <p className="text-xs text-stone-500 mt-0.5">📍 Appartement Haussmannien • 12 Rue de Rivoli, Paris</p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-105">
            <CheckCircle className="w-3.5 h-3.5" /> Viré sur votre compte
          </span>
          <p className="text-[10px] text-stone-400 mt-1">Reçu le 05 Octobre 2023</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FCFAF7] border border-[#E8DFC2]/25 p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-mono text-stone-500 uppercase font-bold">Montant réglé par le locataire</p>
            <p className="text-3xl font-serif font-black text-[#9C4323]">2 450,00 €</p>
          </div>
          <div className="mt-4 p-3.5 bg-white rounded-xl border border-stone-200/50 text-xs text-stone-600 leading-relaxed">
            Ce montant inclut les charges locatives ordinaires et les services de conciergerie premium souscrits par le locataire.
          </div>
        </div>

        <div className="bg-white border border-[#E8DFC2]/30 p-5 rounded-2xl flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=150&q=80" 
            alt="Room" 
            className="w-16 h-16 rounded-xl object-cover shrink-0" 
          />
          <div className="text-xs">
            <p className="font-serif font-bold text-stone-900 text-sm">Marc-Antoine D.</p>
            <p className="text-stone-500">Locataire depuis Janvier 2022</p>
            <button className="mt-2.5 px-3 py-1.5 bg-stone-900 text-white font-bold text-[10.5px] rounded-lg hover:bg-stone-850">
              Contacter le locataire
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-serif text-sm font-bold text-stone-800">Répartition automatique</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-850 flex items-center justify-center font-bold">€</span>
              <div>
                <p className="text-xs font-bold text-stone-900">Versé au propriétaire</p>
                <p className="text-[10px] text-stone-500">Virement effectué compte ****4291</p>
              </div>
            </div>
            <p className="text-sm font-bold font-serif text-emerald-700">2 327,50 €</p>
          </div>
          <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-orange-50 text-orange-800 flex items-center justify-center font-bold">%</span>
              <div>
                <p className="text-xs font-bold text-stone-900">Frais de Conciergerie</p>
                <p className="text-[10px] text-stone-500">Commission L'Habitation (5%)</p>
              </div>
            </div>
            <p className="text-sm font-bold font-serif text-[#9C4323]">122,50 €</p>
          </div>
        </div>
        <div className="w-full h-2 rounded-full bg-stone-100 flex overflow-hidden">
          <div className="bg-[#9C4323] h-full" style={{ width: '95%' }} />
          <div className="bg-orange-300 h-full" style={{ width: '5%' }} />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 font-semibold px-1">
          <span>95% SOLDE PROPRIÉTAIRE</span>
          <span>5% SERVICE FEES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
        <div className="space-y-3">
          <h4 className="font-bold text-xs text-stone-800 uppercase font-mono tracking-wider">Suivi de transfert</h4>
          <div className="space-y-3 text-xs pl-2.5 border-l-2 border-stone-200">
            <div className="relative pl-5">
              <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 bg-emerald-600 rounded-full" />
              <p className="font-bold text-stone-900">Virement ordonné par le locataire</p>
              <p className="text-[10px] text-stone-500">01 Oct. 2023 • 09:12</p>
            </div>
            <div className="relative pl-5">
              <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 bg-emerald-600 rounded-full" />
              <p className="font-bold text-stone-900">Fonds certifiés par le séquestre</p>
              <p className="text-[10px] text-stone-500">02 Oct. 2023 • 14:45</p>
            </div>
            <div className="relative pl-5">
              <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 bg-emerald-600 rounded-full" />
              <p className="font-bold text-stone-900">Transaction créditée sur votre banque</p>
              <p className="text-[10px] text-stone-500">05 Oct. 2023 • 10:20</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FCFAF7] p-5 rounded-2xl flex flex-col justify-center gap-3">
          <button className="w-full py-2.5 bg-white border border-[#E8DFC2] text-xs font-bold text-stone-700 rounded-xl hover:bg-stone-50 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Télécharger la quittance
          </button>
          <button className="w-full py-2.5 bg-white border border-[#E8DFC2] text-xs font-bold text-stone-700 rounded-xl hover:bg-stone-50 flex items-center justify-center gap-2">
            <FileSpreadsheet className="w-4 h-4" /> Facture de commission
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. UNPAID MANAGEMENT (DOSSIER DETAIL)
// ============================================================================
export function UnpaidDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm">
      <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold text-[#9C4323] hover:underline mb-2">
        <ArrowLeft className="w-4 h-4" /> Retour au suivi d'impayés
      </button>

      <div className="bg-[#FAF0ED] border border-[#FA9E82]/30 p-4 rounded-xl flex items-start gap-4">
        <div className="p-2 bg-[#9C4323] text-white rounded-lg">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs">
          <p className="font-bold text-[#9C4323] text-sm">Alerte : Dossier en impayé critique</p>
          <p className="text-stone-700 mt-1">Le loyer de la Résidence du Parc (Apt 4B) accuse 42 jours de retard insolvable.</p>
        </div>
        <span className="px-3 py-1 bg-red-100 text-[#9C4323] text-[9px] font-mono font-bold uppercase rounded">
          Retard : 42 Jours
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-[#FCFAF7] border border-[#E8DFC2]/15 p-5 rounded-2xl text-center space-y-4">
          <div className="w-20 h-20 rounded-full mx-auto overflow-hidden bg-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=200&q=80" 
              alt="Avatar" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h3 className="font-serif text-lg font-black text-stone-900">Jean-Marc Dupuis</h3>
            <p className="text-[10px] text-stone-500 font-mono mt-0.5 uppercase tracking-wider">Locataire depuis Mars 2021</p>
          </div>
          <div className="text-xs text-stone-700 space-y-1.5 pt-3 border-t border-[#E8DFC2]/20 text-left">
            <p>📍 Résidence du Parc, Apt 4B, Paris</p>
            <p>✉ jm.dupuis@email.com</p>
            <p>📞 +33 6 12 34 56 78</p>
          </div>
          <div className="pt-4 border-t border-[#E8DFC2]/20">
            <span className="text-[9px] font-mono text-stone-500 block">SCORE DE FIABILITE</span>
            <span className="text-xl font-bold text-rose-700">35 / 100</span>
            <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2">
              <div className="bg-rose-600 h-full rounded-full" style={{ width: '35%' }} />
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-stone-200 rounded-xl text-center shadow-sm">
              <span className="text-[9px] text-stone-500 font-mono">PRINCIPAL IMPORTE</span>
              <p className="text-lg font-serif font-black text-[#9C4323] mt-1">1 250,50 €</p>
            </div>
            <div className="p-4 bg-white border border-stone-200 rounded-xl text-center shadow-sm">
              <span className="text-[9px] text-stone-500 font-mono">PENALITES</span>
              <p className="text-lg font-serif font-black text-yellow-600 mt-1">200,00 €</p>
            </div>
            <div className="p-4 bg-white border border-stone-200 rounded-xl text-center shadow-sm">
              <span className="text-[9px] text-stone-500 font-mono">MANQUEMENTS</span>
              <p className="text-lg font-serif font-black text-stone-900 mt-1">1 Échéance</p>
            </div>
          </div>

          <div className="bg-[#FCFAF7] border border-[#E8DFC2]/20 p-5 rounded-2xl">
            <h4 className="font-serif text-sm font-bold text-stone-800 border-b border-[#F3ECE5] pb-2.5">Historique des évènements</h4>
            <div className="space-y-4 text-xs mt-3.5 pl-3.5 border-l-2 border-rose-300">
              <div className="relative pl-4">
                <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 bg-rose-600 rounded-full" />
                <p className="font-bold text-stone-900">12 Février 2024 • Procédure Contentieuse activée</p>
                <p className="text-stone-500 mt-0.5">Dossier transmis au cabinet d'huissier partenaire pour relance formelle.</p>
              </div>
              <div className="relative pl-4 text-stone-500">
                <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 bg-stone-400 rounded-full" />
                <p className="font-bold text-stone-750">25 Janvier 2024 • Seconde relance envoyée</p>
                <p className="mt-0.5">Email substantiel et lettre recommandée électronique sans réponse.</p>
              </div>
              <div className="relative pl-4 text-stone-500">
                <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 bg-stone-400 rounded-full" />
                <p className="font-bold text-stone-750">05 Janvier 2024 • Échéance rejetée par la banque</p>
                <p className="mt-0.5">Prélèvement rejeté pour solde insuffisant.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <button className="flex-1 py-3 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-850">Envoyer une relance</button>
            <button className="flex-1 py-3 bg-white border border-stone-300 text-stone-850 text-xs font-bold rounded-xl hover:bg-stone-50">Appeler le locataire</button>
            <button className="flex-1 py-3 bg-[#9C4323] text-white text-xs font-bold rounded-xl hover:bg-[#85351a]">Engager recouvrement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. PAYMENT SUCCESS DIALOG
// ============================================================================
export function PaymentSuccessScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="bg-white rounded-[32px] border border-[#E8DFC2]/30 shadow-xl overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row min-h-[400px]">
      <div className="md:w-5/12 relative bg-stone-900 p-8 flex flex-col justify-end text-white text-left overflow-hidden min-h-[180px] md:min-h-auto">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80" 
            alt="Success deco" 
            className="w-full h-full object-cover opacity-35" 
          />
        </div>
        <div className="relative z-10 space-y-2">
          <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40"><CheckCircle className="w-5 h-5" /></span>
          <h2 className="font-serif text-2xl font-black text-white leading-tight">C'est confirmé.</h2>
          <p className="text-xs text-stone-200">Nous préparons tout au diapason de vos attentes.</p>
        </div>
      </div>

      <div className="md:w-7/12 p-8 text-left space-y-6 flex flex-col justify-center">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-[#9C4323] font-bold">CONFIANCE & PLAISIR</span>
          <h1 className="font-serif text-3xl font-black text-stone-900 mt-1">Paiement Réussi</h1>
          <p className="text-xs text-stone-500 leading-relaxed mt-1">Votre transaction de réservation de séjour de prestige a été validée d'un ordre parfait.</p>
        </div>

        <div className="p-5 bg-[#FCFAF7] border border-[#E8DFC2]/20 rounded-2xl text-xs space-y-2.5">
          <p className="flex justify-between">
            <span className="text-stone-500">Référence</span>
            <span className="font-mono font-bold text-stone-900">#LH-8294-02X</span>
          </p>
          <p className="flex justify-between">
            <span className="text-stone-500">Prestation</span>
            <span className="font-bold text-stone-900">Séjour Suite Signature</span>
          </p>
          <p className="flex justify-between">
            <span className="text-stone-500">Date de virement</span>
            <span className="font-bold text-stone-900">24 Mai 2024</span>
          </p>
          <div className="pt-2.5 border-t border-[#F3ECE5] flex justify-between items-center">
            <span className="text-stone-500">Montant Total</span>
            <span className="text-xl font-serif font-black text-[#9C4323]">1 450,00 €</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold text-xs rounded-xl shadow-sm">
            Télécharger le reçu
          </button>
          <button onClick={onHome} className="flex-1 py-3 border border-[#E8DFC2] text-stone-700 bg-white hover:bg-[#FCFAF7] font-bold text-xs rounded-xl">
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. PROPERTY DETAIL (CLIENT VIEW)
// ============================================================================
export function PropertyDetailClientScreen() {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm">
      <div className="h-64 rounded-2xl overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
          alt="Living room" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent flex items-end p-6">
          <div className="text-white space-y-1">
            <span className="px-3.5 py-1 bg-[#9C4323] text-white text-[9px] font-mono font-bold uppercase rounded-lg">MON BIEN SOUS CONTRAT</span>
            <h2 className="font-serif text-2xl font-black mt-1.5">L'Appartement Saint-Germain</h2>
            <p className="text-xs text-stone-200">📍 42 Rue du Bac, 75007 Paris, France</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-6">
          <div className="bg-[#FAF0ED] p-4 rounded-xl border border-[#FA9E82]/20 text-xs flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#9C4323] shrink-0" />
            <p className="text-stone-850">L'entretien de la ventilation est planifié pour le <span className="font-bold text-stone-900">28 Mai 2024</span> entre 9h00 et 12h00.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-stone-200 rounded-xl space-y-2 text-xs">
              <span className="w-8 h-8 rounded-lg bg-[#FAF5EF] text-[#9C4323] flex items-center justify-center shrink-0">🛠</span>
              <h4 className="font-serif font-bold text-stone-950 text-sm">Signaler un incident</h4>
              <p className="text-stone-500">Un problème de chauffage ou plomberie ? Nos équipes conciergerie interviennent.</p>
              <button onClick={() => alert("Formulaire de ticket incident ouvert.")} className="text-[#9C4323] font-bold hover:underline block pt-2">Ouvrir un ticket →</button>
            </div>

            <div className="p-5 border border-stone-200 rounded-xl space-y-2 text-xs">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-850 flex items-center justify-center shrink-0">✓</span>
              <h4 className="font-serif font-bold text-stone-950 text-sm">État des lieux numérique</h4>
              <p className="text-stone-500">Consultez et complétez les relevés certifiés de votre entrée dans l'appartement.</p>
              <button className="text-emerald-700 font-bold hover:underline block pt-2">Consulter le dossier PDF →</button>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-stone-800 mb-3">Dernières interventions & Services</h4>
            <div className="divide-y divide-stone-100 text-xs">
              <p className="py-2.5 flex justify-between text-stone-700"><span>🔧 Entretien annuel chaudière</span> <span className="text-emerald-700 font-bold">Option Complétée</span></p>
              <p className="py-2.5 flex justify-between text-stone-700"><span>🪟 Nettoyage de la baie vitrée</span> <span className="text-amber-700 font-bold">En attente d'intervention</span></p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-[#FCFAF7] border border-[#E8DFC2]/30 p-5 rounded-2xl text-xs space-y-4">
          <h4 className="font-bold text-stone-900 tracking-wider">CONTRAT DE SPECTACLE</h4>
          <div className="space-y-3">
            <div>
              <span className="text-stone-500 block uppercase font-mono text-[9px]">PÉRIODE</span>
              <p className="text-stone-900 font-semibold mt-0.5 font-sans">12 Octobre 2023 — 12 Octobre 2024</p>
            </div>
            <div>
              <span className="text-stone-500 block uppercase font-mono text-[9px]">Loyer Mensuel</span>
              <p className="text-2xl font-serif font-black text-[#9C4323] mt-0.5">2 450 € <span className="text-xs font-mono font-normal">/ mois</span></p>
            </div>
          </div>
          <button className="w-full py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl shadow-sm transition-colors text-center mt-2 cursor-pointer">
            Prochain loyer : 01 Juin
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. DOCUMENTS (CLIENT PORTAL VIEW)
// ============================================================================
export function DocumentPortalClientScreen() {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm text-xs">
      <div>
        <h2 className="font-serif text-2xl font-black text-stone-900">Coffre-fort Documents Locataire</h2>
        <p className="text-stone-500">Fichiers contractuels certifiés et quittances téléchargeables.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 bg-[#FCFAF7] border border-[#E8DFC2]/25 rounded-2xl flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 bg-amber-100 text-[#9C4323] font-bold font-mono tracking-wider text-[9px] uppercase rounded">DOCUMENT PRINCIPAL</span>
            <h3 className="font-serif text-xl font-bold text-stone-900 pt-1">Contrat de Bail Officiel</h3>
            <p className="text-stone-600 leading-relaxed">Le bail définit et formalise les accords conclus de loyer, la durée, le montant prévisionnel et les services de conciergerie inclus.</p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-[#9C4323] text-white font-bold rounded-xl hover:bg-[#85351a]">Télécharger PDF</button>
            <button className="px-4 py-2 border border-[#E8DFC2] text-stone-700 bg-white hover:bg-stone-50 rounded-xl">Voir en ligne</button>
          </div>
        </div>

        <div className="p-5 border border-stone-200 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 pb-2.5 border-b border-stone-100">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h4 className="font-serif font-bold text-stone-900">Assurance Habitation</h4>
          </div>
          <div className="space-y-1">
            <p className="text-stone-500 uppercase font-mono text-[9px]">ID CONTRAT</p>
            <p className="font-bold text-stone-900">AXA-2024 / Valide</p>
          </div>
          <button className="w-full py-2 border border-stone-300 rounded-lg hover:bg-stone-50 text-stone-700 font-bold">Renouveler l'attestation</button>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-stone-100">
        <h3 className="font-serif text-lg font-bold text-stone-900">Vos Quittances Locatives</h3>
        <div className="border border-stone-200 rounded-2xl divide-y divide-stone-150">
          <div className="p-4 flex justify-between items-center text-stone-700 font-semibold bg-[#FCFAF7]/50">
            <span>Avril 2024</span> <span className="text-emerald-700">PAYÉ</span> <span>2 450,00 €</span> <Download className="w-4 h-4 cursor-pointer text-stone-500 hover:text-stone-900" />
          </div>
          <div className="p-4 flex justify-between items-center text-stone-700 font-semibold">
            <span>Mars 2024</span> <span className="text-emerald-700">PAYÉ</span> <span>2 450,00 €</span> <Download className="w-4 h-4 cursor-pointer text-stone-500 hover:text-stone-900" />
          </div>
          <div className="p-4 flex justify-between items-center text-stone-700 font-semibold bg-[#FCFAF7]/50">
            <span>Février 2024</span> <span className="text-emerald-700">PAYÉ</span> <span>2 450,00 €</span> <Download className="w-4 h-4 cursor-pointer text-stone-500 hover:text-stone-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 6. CHECKOUT FLOW / BOOKING TRANSACTION PAGE
// ============================================================================
export function CheckoutScreen({ onConfirm }: { onConfirm: () => void }) {
  const [payMethod, setPayMethod] = useState<'card' | 'transfer'>('card');
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm text-xs">
      <div>
        <h2 className="font-serif text-3xl font-black text-stone-900">Finaliser votre réservation</h2>
        <p className="text-stone-500">Valider vos coordonnées et procédez au paiement sécurisé de la caution et du premier loyer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-3">
            <h3 className="font-bold text-stone-800 uppercase font-mono text-[10px]">Méthode de Paiement</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setPayMethod('card')} 
                className={`p-4 border rounded-xl flex items-center gap-3 transition-colors ${payMethod === 'card' ? 'border-[#9C4323] bg-[#FAF5EF]' : 'border-stone-200'}`}
              >
                <CreditCard className="w-5 h-5 text-[#9C4323]" />
                <span className="font-bold">Carte Bancaire</span>
              </button>
              <button 
                onClick={() => setPayMethod('transfer')} 
                className={`p-4 border rounded-xl flex items-center gap-3 transition-colors ${payMethod === 'transfer' ? 'border-[#9C4323] bg-[#FAF5EF]' : 'border-stone-200'}`}
              >
                <Building2 className="w-5 h-5 text-[#9C4323]" />
                <span className="font-bold">Virement (SEPA)</span>
              </button>
            </div>
          </div>

          <div className="bg-[#FCFAF7] border border-[#E8DFC2]/25 p-5 rounded-xl space-y-4">
            <h4 className="font-bold text-stone-900">Informations de facturation</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-stone-500 block">Nom complet</label>
                <input type="text" defaultValue="JEAN DUPONT" className="w-full p-2.5 mt-1 border border-stone-200 rounded-lg outline-none bg-white text-xs" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-stone-500 block">Numéro de carte</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-2.5 mt-1 border border-stone-200 rounded-lg outline-none bg-white text-xs" />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-stone-500 block">CVC / Exp</label>
                  <input type="text" placeholder="123 / MM-YY" className="w-full p-2.5 mt-1 border border-stone-200 rounded-lg outline-none bg-white text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-stone-50 border border-stone-200 p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="h-32 rounded-xl overflow-hidden bg-stone-100">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80" alt="Home" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-amber-700 font-bold uppercase">Suite Provençale #2</span>
              <h4 className="font-serif text-lg font-black text-stone-900">La Suite Provençale</h4>
              <p className="text-stone-500 text-[11px]">📍 Provence, France</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-200 text-stone-600">
              <p className="flex justify-between"><span>Dépôt de garantie</span> <span>2 900,00 €</span></p>
              <p className="flex justify-between"><span>Loyer Octobre</span> <span>1 450,00 €</span></p>
              <p className="flex justify-between"><span>Frais de dossier conciergerie</span> <span>125,00 €</span></p>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-stone-900 font-bold text-sm">
                <span>Total dû</span> <span className="text-[#9C4323]">4 475,00 €</span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-2 text-center">
            <button onClick={onConfirm} className="w-full py-3.5 bg-[#9C4323] text-white font-bold rounded-xl shadow hover:bg-[#85351a]">
              Confirmer & Régler 4 475 €
            </button>
            <p className="text-[9px] text-stone-400 mt-2 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Chiffrement SSL de niveau militaire 256 bits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 7. COMPACT INTEGRATED CHAIT SYSTEM
// ============================================================================
export function ChatScreen() {
  const [messages, setMessages] = useState([
    { s: 'r', t: 'Bonjour Leonel ! Félicitations pour la location de votre Villa Azure. Je suis Julien, votre concierge attitré. Je voulais m\'assurer que l\'organisation du ménage de départ vous convient.' },
    { s: 's', t: 'Bonjour Julien, merci beaucoup ! Oui, s\'il est possible d\'intervenir le Samedi 25 Mai à partir de 10h00, ce serait parfait.' },
    { s: 'r', t: 'C\'est noté ! L\'équipe sera sur place assurément d\'un grand soin.' }
  ]);
  const [inp, setInp] = useState('');

  const send = () => {
    if (!inp) return;
    setMessages(prev => [...prev, { s: 's', t: inp }]);
    setInp('');
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 overflow-hidden max-w-4xl mx-auto h-[400px] md:h-[500px] flex flex-col shadow-sm text-xs">
      <div className="w-1/3 border-r border-[#E8DFC2]/30 bg-[#FCFAF7] hidden sm:block p-4">
        <h3 className="font-serif font-black text-[#2F2B28] text-sm mb-4">Messages & Concierge</h3>
        <div className="space-y-2">
          <div className="p-3 bg-white border border-[#E8DFC2]/65 rounded-xl cursor-pointer">
            <p className="font-bold text-stone-950 flex justify-between"><span>Julien Morel</span> <span className="text-[9px] font-mono text-emerald-700">LIVE</span></p>
            <p className="text-[10px] text-stone-500 truncate mt-0.5">C'est noté ! L'équipe...</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full bg-white text-left">
        <div className="p-4 border-b border-stone-100 flex justify-between items-center bg-[#FCFAF7]/40">
          <div>
            <p className="font-serif font-bold text-stone-900 text-sm">Julien Morel</p>
            <p className="text-[10px] text-emerald-700 font-bold">• Concierge Exclusif L'Habitation</p>
          </div>
          <Phone className="w-4 h-4 cursor-pointer text-stone-500 hover:text-stone-900" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.s === 's' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 max-w-sm rounded-2xl ${m.s === 's' ? 'bg-[#9C4323] text-white' : 'bg-stone-100 text-stone-850'}`}>
                <p className="leading-relaxed">{m.t}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-stone-100 flex items-center gap-2">
          <input 
            type="text" 
            value={inp} 
            onChange={(e) => setInp(e.target.value)} 
            placeholder="Écrivez votre message..." 
            className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl outline-none" 
          />
          <button onClick={send} className="p-2.5 bg-[#9C4323] text-white rounded-xl hover:bg-[#85351a]">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. NOTIFICATIONS CENTER
// ============================================================================
export function NotificationsScreen() {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-3xl mx-auto shadow-sm text-xs">
      <div className="flex justify-between items-center pb-3 border-b border-stone-100">
        <div>
          <h2 className="font-serif text-2xl font-black text-stone-900">Centre de Notifications</h2>
          <p className="text-stone-400">Restez informé de l'activité de vos biens en temps réel.</p>
        </div>
        <button className="px-3 py-1.5 border border-stone-200 rounded-lg font-bold text-stone-600 hover:bg-stone-50">Tout archiver</button>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] font-bold text-[#9C4323] font-mono tracking-wider">AUJOURD'HUI</p>
        <div className="p-5 bg-[#FCFAF7] border border-[#E8DFC2]/25 rounded-2xl flex items-start gap-4 shadow-sm">
          <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl shrink-0">€</div>
          <div className="space-y-1">
            <h4 className="font-bold text-stone-900 text-sm">Paiement reçu : Loyer Octobre</h4>
            <p className="text-stone-600 leading-relaxed">Le règlement de 1 250,00 € pour l'appartement "Le Mistral" a été validé d'un ordre parfait. Votre quittance est accessible.</p>
            <div className="flex gap-3 pt-2">
              <button className="px-3.5 py-1.5 bg-[#9C4323] text-white font-bold rounded-lg leading-none text-[10.5px]">Quittance PDF</button>
              <button className="px-3.5 py-1.5 border border-stone-300 rounded-lg font-bold text-[10.5px] leading-none text-stone-600">Archiver</button>
            </div>
          </div>
        </div>

        <div className="p-5 bg-white border border-stone-250 rounded-2xl flex items-start gap-4 shadow-sm">
          <div className="p-2 bg-amber-50 text-amber-800 rounded-xl shrink-0">⭐</div>
          <div className="space-y-1">
            <h4 className="font-bold text-stone-900 text-sm">Offre de Financement Spéciale</h4>
            <p className="text-stone-600 leading-relaxed">Grâce à votre excellent historique récurrent, accédez à un refinancement à taux préférentiel de 1.85%.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 9. RECIPIENT PROFILE
// ============================================================================
export function ProfileScreen() {
  const [prefAlert, setPrefAlert] = useState(true);
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-3xl mx-auto shadow-sm text-xs">
      <div className="flex items-center gap-4 pb-4 border-b border-stone-100">
        <UserCircle2 className="w-12 h-12 text-[#9C4323]" />
        <div>
          <h2 className="font-serif text-2xl font-black text-stone-900">Mon Profil</h2>
          <p className="text-stone-500">Gérez vos préférences confidentielles et de sécurité.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-[#FCFAF7] border border-[#E8DFC2]/25 rounded-2xl space-y-4">
          <h4 className="font-serif font-bold text-stone-900 text-sm">Préférences de Notification</h4>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-stone-950">Avis d'échéance par SMS</p>
                <p className="text-[10px] text-stone-500">Rappels de virement locataires</p>
              </div>
              <button onClick={() => setPrefAlert(!prefAlert)} className="text-[#9C4323]">
                {prefAlert ? <CheckCircle className="w-5 h-5" /> : <p className="text-stone-400">OFF</p>}
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 border border-stone-200 rounded-2xl space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm">Sécurité & Confidentialité</h4>
          <button className="w-full text-left py-2 border-b border-stone-100 font-bold hover:text-[#9C4323]">Double Authentification →</button>
          <button className="w-full text-left py-2 border-b border-stone-100 font-bold hover:text-[#9C4323]">Changer mon mot de passe →</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 10. NO PROPERTIES FOUND / EMPTY SEARCH STATE
// ============================================================================
export function SearchEmptyScreen() {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-8 space-y-8 text-left max-w-4xl mx-auto shadow-sm text-xs">
      <div className="text-center max-w-md mx-auto py-8 space-y-4">
        <span className="w-12 h-12 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center mx-auto text-lg">🔎</span>
        <h3 className="font-serif text-xl font-bold text-stone-900">Aucun bien ne correspond à vos critères</h3>
        <p className="text-stone-500 leading-relaxed">Nous n'avons trouvé aucune propriété selon les filtres spécifiés. Essayez d'alléger vos critères d'acquisition.</p>
        <button onClick={() => alert("Filtres réinitialisés.")} className="px-5 py-2.5 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-850">
          Réinitialiser les filtres
        </button>
      </div>

      <div className="border-t border-stone-150 pt-6 space-y-4">
        <h4 className="font-serif font-bold text-stone-800">Résidences d'exceptions recommandées</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-4 border rounded-xl flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80" alt="Res" className="w-16 h-16 rounded-xl object-cover shrink-0" />
            <div>
              <p className="font-serif font-bold text-stone-950">Maison d'Esthète Luberon</p>
              <p className="text-stone-500">📍 Gordes, France</p>
              <p className="text-[#9C4323] font-bold mt-1">4 800,00 € / semaine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 11. PAYMENT FAILED DIALOG
// ============================================================================
export function PaymentFailedScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="bg-white rounded-[32px] border border-rose-100/30 overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row shadow-xl min-h-[380px]">
      <div className="md:w-5/12 bg-rose-50 p-8 flex flex-col justify-end text-rose-800 text-left min-h-[160px] md:min-h-auto">
        <div className="space-y-3">
          <span className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">!</span>
          <h2 className="font-serif text-2xl font-black leading-tight">Échec du paiement.</h2>
          <p className="text-xs text-rose-700">Votre réservation pour Suite Provençale expire temporairement sous 15 minutes.</p>
        </div>
      </div>

      <div className="md:w-7/12 p-8 text-left space-y-6 flex flex-col justify-center text-xs">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-rose-700 font-bold uppercase">Transaction interrompue</span>
          <h1 className="font-serif text-3xl font-black text-stone-900 mt-1">Échec de validation</h1>
          <p className="text-stone-500 leading-relaxed mt-1">Votre émetteur de paiement a refusé la transaction. Merci de réessayer avec une autre carte de paiement.</p>
        </div>

        <div className="p-4 bg-stone-50 rounded-xl space-y-2">
          <p className="flex justify-between"><span>Référence transaction</span> <span className="font-mono font-bold">#HAB-88291-TX</span></p>
          <p className="flex justify-between"><span>Montant requis</span> <span className="font-serif font-bold text-[#9C4323]">1 250,00 €</span></p>
        </div>

        <div className="flex gap-3 pt-2">
          <button onClick={onRetry} className="flex-1 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-bold rounded-xl shadow">Réessayer</button>
          <button onClick={() => alert("Contacter la Conciergerie Premium")} className="flex-1 py-3 border border-stone-200 hover:bg-stone-50 rounded-xl text-stone-700 font-bold text-center">Contacter le support</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 12. CREDIT SIMULATOR
// ============================================================================
export function CreditSimulatorScreen() {
  const [loan, setLoan] = useState(25000);
  const [duration, setDuration] = useState(24);

  const interestRate = 4.85 / 12 / 100;
  const numPay = duration;
  const rawMonthly = loan * (interestRate * Math.pow(1 + interestRate, numPay)) / (Math.pow(1 + interestRate, numPay) - 1);
  const formattedMonthly = numPay > 0 ? rawMonthly.toFixed(2) : (loan/12).toFixed(2);

  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC2]/30 p-6 md:p-8 space-y-6 text-left max-w-4xl mx-auto shadow-sm text-xs">
      <div>
        <h2 className="font-serif text-2xl font-black text-stone-900">Simulateur de crédit immobilier</h2>
        <p className="text-stone-500">Ajustez vos conditions d'emprunt pour déceler votre puissance d'acquisition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-3.5">
            <div className="flex justify-between font-bold text-stone-850">
              <span>Montant du prêt requis</span>
              <span className="text-[#9C4323]">{loan.toLocaleString('fr-FR')} €</span>
            </div>
            <input 
              type="range" 
              min={10000} 
              max={500000} 
              step={1000} 
              value={loan} 
              onChange={(e) => setLoan(Number(e.target.value))} 
              className="w-full accent-[#9C4323] h-1.5 bg-stone-100 rounded-full" 
            />
          </div>

          <div className="space-y-2.5">
            <span className="font-bold text-stone-850 uppercase font-mono text-[9px]">Durée de remboursement</span>
            <div className="grid grid-cols-4 gap-2">
              {[12, 24, 36, 48].map((m) => (
                <button 
                  key={m} 
                  onClick={() => setDuration(m)} 
                  className={`py-2.5 rounded-lg border font-bold text-center ${duration === m ? 'border-[#9C4323] bg-[#FAF5EF] text-[#9C4323]' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}
                >
                  {m} Mois
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-[#FCFAF7] border border-[#E8DFC2]/30 p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] tracking-wider text-stone-500 font-mono font-bold block">VOTRE MENSUALITE ESTIMEE</span>
            <p className="text-3xl font-serif font-black text-[#9C4323]">{Number(formattedMonthly).toLocaleString('fr-FR')} € <span className="text-xs font-mono font-normal">/ mois</span></p>

            <div className="space-y-2.5 pt-4 border-t border-[#F3ECE5] text-stone-600 leading-none">
              <p className="flex justify-between"><span>Taux TAEG Fixe</span> <span className="font-bold text-stone-900">4.85 %</span></p>
              <p className="flex justify-between"><span>Montant total capitalisé</span> <span className="font-bold text-stone-900">{(loan).toLocaleString('fr-FR')} €</span></p>
              <p className="flex justify-between"><span>Coût total des échéances</span> <span className="font-bold text-stone-900">{(rawMonthly * duration - loan).toFixed(2)} €</span></p>
            </div>
          </div>

          <button onClick={() => alert("Demande de principe envoyée au courtier.")} className="w-full py-3.5 bg-[#9C4323] text-white font-bold rounded-xl mt-6">
            Déposer une demande en 2 min
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 13. TRUST SCORE SCREEN (IMAGE 1)
// ============================================================================
export function TrustScoreScreen({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Score Board Card */}
        <div className="bg-white rounded-[32px] border border-[#E8DFC2]/30 p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Dial Graphic */}
          <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
            {/* Circle backdrop */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="#F5EFE6" strokeWidth="12" fill="transparent" />
              <circle 
                cx="96" 
                cy="96" 
                r="80" 
                stroke="#9C4323" 
                strokeWidth="12" 
                fill="transparent" 
                strokeDasharray={2 * Math.PI * 80}
                strokeDashoffset={2 * Math.PI * 80 * (1 - 820 / 1000)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-5xl font-serif font-black text-[#2F2B28]">820</span>
              <span className="block text-[10px] tracking-wider text-emerald-700 font-mono font-bold mt-1 uppercase">EXCELLENT</span>
            </div>
          </div>

          <div className="text-left space-y-4 flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-[#2F2B28] leading-tight">Votre Indice de Confiance</h2>
            <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
              Votre score a augmenté de <span className="text-[#9C4323] font-bold">+45 points</span> ce mois-ci. Continuez ainsi pour débloquer des services exclusifs de conciergerie premium.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-4 font-semibold py-1.5 rounded-full text-xs bg-[#FAF5EF] text-[#9C4323] border border-[#E8DFC2]/40">
                🛡 Profil Vérifié
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 font-semibold py-1.5 rounded-full text-xs bg-stone-100 text-stone-700">
                ⏱ 3 Ans d’Historique
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Points Positifs */}
          <div className="bg-white rounded-[24px] border border-[#E8DFC2]/30 p-6 md:p-8 text-left space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FAF5EF] text-[#9C4323] flex items-center justify-center font-bold">📈</span>
              <h3 className="font-serif text-xl font-black text-[#2F2B28]">Points Positifs</h3>
            </div>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#9C4323] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#2F2B28]">Paiements Ponctuels</p>
                  <p className="text-stone-500 mt-0.5">24 mois de loyers réglés sans incident.</p>
                  <p className="text-emerald-700 font-mono font-bold mt-1">+120 pts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#9C4323] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#2F2B28]">Dossier Complet</p>
                  <p className="text-stone-500 mt-0.5">Tous les justificatifs sont à jour et vérifiés.</p>
                  <p className="text-emerald-700 font-mono font-bold mt-1">+80 pts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#9C4323] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#2F2B28]">Garantie Or</p>
                  <p className="text-stone-500 mt-0.5">Support de cautionnement premium actif.</p>
                  <p className="text-emerald-700 font-mono font-bold mt-1">+50 pts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Axes de Progression */}
          <div className="bg-white rounded-[24px] border border-[#E8DFC2]/30 p-6 md:p-8 text-left space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-stone-100 text-[#8E8071] flex items-center justify-center font-bold">⚖</span>
              <h3 className="font-serif text-xl font-black text-[#2F2B28]">Axes de Progression</h3>
            </div>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8E8071] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-stone-800">Revenus Freelance</p>
                  <p className="text-stone-500 mt-0.5">Stabilité à confirmer sur le prochain trimestre.</p>
                  <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] font-bold rounded mt-1.5">En attente</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8E8071] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-stone-800">Identité Numérique</p>
                  <p className="text-stone-500 mt-0.5">Connectez FranceConnect pour booster votre score.</p>
                  <p className="text-[#9C4323] font-mono font-bold mt-1 hover:underline cursor-pointer">+30 pts possibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages Débloqués Row */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-left">
            <h3 className="font-serif text-2xl font-black text-[#2F2B28]">Avantages Débloqués</h3>
            <button className="text-xs font-bold text-[#9C4323] hover:underline" onClick={() => alert("Tous les avantages")}>Voir tout →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#E8DFC2]/25 p-6 rounded-2xl text-left flex flex-col justify-between h-48 relative">
              <span className="absolute top-4 right-4 text-xl">🏆</span>
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-emerald-800 uppercase px-2 py-0.5 bg-emerald-50 rounded">Débloqué</span>
                <h4 className="font-serif font-bold text-stone-900 text-lg pt-2">Zéro Dépôt</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Accédez à des locations sans dépôt de garantie initial requis.</p>
              </div>
              <div className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 mt-4">
                <CheckCircle className="w-3.5 h-3.5" /> ÉLIGIBLE
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E8DFC2]/25 p-6 rounded-2xl text-left flex flex-col justify-between h-48 relative">
              <span className="absolute top-4 right-4 text-xl">🛎</span>
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-emerald-800 uppercase px-2 py-0.5 bg-emerald-50 rounded">Débloqué</span>
                <h4 className="font-serif font-bold text-stone-900 text-lg pt-2">Concierge Dédié</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Assistance prioritaire 24/7 pour toute demande immobilière.</p>
              </div>
              <div className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 mt-4">
                <CheckCircle className="w-3.5 h-3.5" /> ÉLIGIBLE
              </div>
            </div>

            {/* Card 3 (Locked) */}
            <div className="bg-white/70 border border-stone-200/60 p-6 rounded-2xl text-left flex flex-col justify-between h-48 relative opacity-75">
              <span className="absolute top-4 right-4 text-xl gray-scale">⭐</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-stone-400 text-lg">Assurance Offerte</h4>
                <p className="text-xs text-stone-400 leading-relaxed">Votre assurance multirisque habitation prise en charge pat L'Habitation.</p>
              </div>
              <div className="text-[10px] font-mono text-stone-500 font-bold flex items-center gap-1.5 mt-4">
                🔒 Atteindre 900 pts
              </div>
            </div>
          </div>
        </div>

        {/* Promo banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 flex items-end p-6 md:p-10 text-left text-white shadow-xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Promo room" 
              className="w-full h-full object-cover brightness-[0.4]" 
            />
          </div>
          <div className="relative z-10 space-y-3 max-w-xl">
            <span className="text-[10px] font-mono tracking-wider bg-[#9C4323] px-3.5 py-1 rounded-full uppercase font-bold text-white">PROCHAINE ÉTAPE</span>
            <h3 className="font-serif text-2xl md:text-3xl font-black text-white leading-tight">Prêt pour votre prochaine demeure d'exception ?</h3>
            <button onClick={onExplore} className="px-5 py-2.5 bg-white text-stone-950 hover:bg-stone-50 font-bold text-xs rounded-xl shadow-md transition-all">
              Explorer les biens premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 14. DIGITAL LEASE SIGNATURE SCREEN (IMAGE 4)
// ============================================================================
export function BailSignatureScreen({ onBack, onSignedSuccessful }: { onBack: () => void, onSignedSuccessful: () => void }) {
  const [step, setStep] = useState(1);
  const [readContrat, setReadContrat] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [sigPoints, setSigPoints] = useState<string[]>([]);
  const [isSigning, setIsSigning] = useState(false);

  const handleSign = () => {
    if (!readContrat || !acceptTerms) {
      alert("Veuillez valider la lecture et l'acceptation de toutes les clauses de sécurisation.");
      return;
    }
    onSignedSuccessful();
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-6 font-sans text-left">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center bg-white/40 p-3 rounded-2xl border border-stone-200/50">
          <div>
            <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider">TRANSACTION SÉCURISÉE</span>
            <h2 className="font-serif text-2xl font-black text-[#2F2B28] mt-0.5">Signature du bail de location</h2>
            <p className="text-xs text-stone-500">📍 Appartement Haussmannien - 12 Avenue Montaigne, Paris</p>
          </div>
          <div className="flex gap-2.5">
            <button onClick={() => alert("Bail téléchargé")} className="px-4 py-2 border border-stone-200 hover:bg-stone-50 text-xs font-bold text-stone-700 bg-white rounded-xl">
              Télécharger le projet
            </button>
            <button onClick={() => alert("Assistance conciergerie")} className="px-4 py-2 bg-stone-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 hover:bg-stone-900">
              📞 Assistance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Scrollable actual lease text */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200/60 shadow-sm p-6 md:p-10 h-[650px] overflow-y-auto font-serif text-sm space-y-8 relative leading-relaxed text-stone-850">
            {/* Header branding in paper */}
            <div className="border-b border-stone-100 pb-6 text-center">
              <h1 className="text-3xl font-black text-[#9C4323] tracking-tight">L'Habitation</h1>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#8E8071] mt-1 font-bold">GESTION IMMOBILIÈRE DE PRESTIGE</p>
              
              <div className="mt-8 flex justify-between text-[11px] text-stone-500 font-mono text-left">
                <div>
                  <p className="font-bold">CONTRAT N° : LHB-2024-8902</p>
                  <p>Date d’émission : 24 Mai 2024</p>
                </div>
                <div className="text-right">
                  <p>BAIL DE COPROPRIÉTÉ</p>
                  <p>PAGE 1 / 14</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-[#2F2B28] text-center uppercase tracking-wide py-4 border-y border-stone-100/50">
              CONTRAT DE LOCATION
            </h2>

            <div className="space-y-6 text-stone-750">
              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#2F2B28] tracking-tight">ARTICLE 1 : DÉSIGNATION DES PARTIES</h3>
                <p>
                  Le présent contrat est conclu entre <span className="font-bold">SCI MONTAIGNE LUXURY</span>, représentée par L’Habitation Conciergerie, désignée comme "Le Bailleur", et l'occupant désigné ci-après comme "Le Preneur".
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#2F2B28] tracking-tight">ARTICLE 2 : OBJET DU CONTRAT</h3>
                <p>
                  Le Bailleur donne en location au Preneur les locaux situés au <span className="font-bold">12 Avenue Montaigne, 75008 Paris</span>, consistant en un appartement de 5 pièces d’une surface habitable de 185m², incluant une cave et deux places de parking sécurisées.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#2F2B28] tracking-tight">ARTICLE 3 : DURÉE ET LOYER</h3>
                <p>
                  Le bail est consenti pour une durée de 3 années commençant le <span className="font-bold">1er Juin 2024</span>. Le loyer mensuel est fixé à <span className="font-bold">8 400,00 €</span> (huit mille quatre cents euros), payable d'avance le premier jour de chaque mois.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#2F2B28] tracking-tight">ARTICLE 4 : DÉPÔT DE GARANTIE</h3>
                <p>
                  À titre de garantie de l'exécution de ses obligations, le Preneur verse ce jour la somme de <span className="font-bold">16 800,00 €</span>, correspondant à deux mois de loyer hors charges.
                </p>
              </section>
            </div>

            {/* Shaded footer page effect */}
            <div className="sticky bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-2">
              <span className="text-[11px] font-mono text-stone-400 font-bold bg-white/95 px-4 py-1.5 rounded-full border shadow-sm">
                Le texte complet se poursuit sur les pages suivantes...
              </span>
            </div>
          </div>

          {/* Right: Signature and verification boxes */}
          <div className="lg:col-span-4 space-y-6 text-xs">
            {/* Securisation Tracker Card */}
            <div className="bg-white border border-[#E8DFC2]/30 rounded-2xl p-6 text-left space-y-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">✔️</span>
                <h3 className="font-serif text-lg font-black text-[#2F2B28]">Sécurisation</h3>
              </div>
              <div className="space-y-3 pl-1 font-sans">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center font-bold text-[10px]">1</span>
                  <span className="text-stone-700 font-medium">Lecture du contrat</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-850 border border-orange-200/50 flex items-center justify-center font-bold text-[10px]">2</span>
                  <span className="text-stone-700 font-semibold text-[#9C4323]">Acceptation des clauses</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <span className="w-5 h-5 rounded-full bg-stone-100 border border-stone-200/50 flex items-center justify-center font-bold text-[10px]">3</span>
                  <span>Signature électronique</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3.5">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={readContrat} 
                    onChange={(e) => setReadContrat(e.target.checked)}
                    className="mt-0.5 rounded accent-[#9C4323] w-4 h-4 cursor-pointer" 
                  />
                  <span className="text-stone-600 leading-tight">Je reconnais avoir pris connaissance de l'intégralité des clauses du bail de location et de ses annexes.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={acceptTerms} 
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-0.5 rounded accent-[#9C4323] w-4 h-4 cursor-pointer" 
                  />
                  <span className="text-stone-600 leading-tight">J'accepte les conditions générales d'utilisation du service de signature électronique certifiée.</span>
                </label>
              </div>
            </div>

            {/* Signature Pad */}
            <div className="bg-[#FAF5EF]/50 border border-[#E8DFC2]/30 rounded-2xl p-6 text-left space-y-4 shadow-sm">
              <span className="text-[10px] text-[#9C4323] font-mono uppercase tracking-wider font-bold block">Espace de signature</span>
              <div className="bg-white rounded-xl border border-stone-200 h-36 flex flex-col items-center justify-center gap-2 cursor-crosshair hover:bg-stone-50 transition-colors relative">
                <span className="text-2xl text-stone-300">✍️</span>
                <p className="text-stone-400 font-mono text-[9px] uppercase tracking-wider">Dessinez votre signature ici</p>
                <div className="absolute inset-0 bg-transparent" />
              </div>

              <button 
                onClick={handleSign}
                disabled={!readContrat || !acceptTerms}
                className={`w-full py-4 rounded-xl text-white font-black text-center transition-all shadow-md ${readContrat && acceptTerms ? 'bg-[#9C4323] hover:bg-[#85351a] cursor-pointer' : 'bg-stone-300 cursor-not-allowed text-stone-500'}`}
              >
                Signer le document
              </button>

              <p className="text-stone-400 text-[9px] text-center leading-relaxed">
                En cliquant sur signer, vous apposez une signature numérique ayant la même valeur juridique qu’une signature manuscrite selon l’article 1367 du Code Civil.
              </p>
            </div>

            <div className="bg-stone-900 text-white rounded-2xl p-4 flex items-center justify-between border border-stone-800">
              <span className="text-[10px] font-mono tracking-wider font-bold">CERTIFIÉ EIDAS</span>
              <span className="text-[9px] text-stone-400 uppercase">Authentification forte active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 15. RESERVATION SENT CONFIRMATION SCREEN (IMAGE 5)
// ============================================================================
export function ReservationSentScreen({ onBackDocs }: { onBackDocs: () => void }) {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-8 font-sans text-left">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Success checkmark banner */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
            ✓
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-black text-[#2F2B28] leading-tight mt-4">Demande de réservation envoyée</h1>
          <p className="text-xs md:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
            Merci d'avoir choisi L'Habitation. Votre demande pour « La Villa des Oliviers » est en cours de traitement par votre hôte.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Reservation Summary */}
          <div className="md:col-span-7 bg-white rounded-3xl border border-stone-200/50 p-6 md:p-8 space-y-6 shadow-sm">
            <span className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAF5EF] rounded">RÉSUMÉ DE LA RÉSERVATION</span>
            <h2 className="font-serif text-2xl font-black text-[#2F2B28]">La Villa des Oliviers, Provence</h2>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-100 text-xs">
              <div>
                <p className="text-stone-400 font-mono uppercase text-[9px]">ARRIVÉE</p>
                <p className="text-stone-900 font-bold text-sm mt-1">14 Octobre 2024</p>
                <p className="text-stone-500 mt-0.5">À partir de 15:00</p>
              </div>
              <div>
                <p className="text-stone-400 font-mono uppercase text-[9px]">DÉPART</p>
                <p className="text-stone-900 font-bold text-sm mt-1">21 Octobre 2024</p>
                <p className="text-stone-500 mt-0.5">Avant 11:00</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-2xl text-xs">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=150&q=80" 
                alt="Host avatar" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <p className="font-bold text-stone-900">Hébergé par Jean-Pierre</p>
                <p className="text-stone-500">Répond généralement en moins d'une heure</p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-stone-400 font-mono uppercase text-[9px]">TOTAL ESTIMÉ</p>
                <p className="text-3xl font-serif font-black text-[#9C4323] mt-1">1 450,00 €</p>
              </div>
              <button onClick={onBackDocs} className="px-5 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white font-black text-xs rounded-xl shadow cursor-pointer">
                Voir mes documents
              </button>
            </div>
          </div>

          {/* Next Steps & Image banner */}
          <div className="md:col-span-5 space-y-6 text-xs">
            <div className="bg-white border border-[#E8DFC2]/30 rounded-3xl p-6 text-left space-y-5 shadow-sm">
              <span className="text-[10px] text-[#9C4323] font-mono uppercase tracking-wider font-bold">💬 Prochaines étapes</span>
              <div className="space-y-4 pl-1 text-stone-700 font-sans leading-relaxed">
                <p className="flex gap-2"><span className="font-mono font-bold text-[#9C4323]">1.</span> L’hôte examine votre profil d'acquisition et vos dates sous 24h.</p>
                <p className="flex gap-2"><span className="font-mono font-bold text-[#9C4323]">2.</span> Une fois validé, vous recevrez un lien de paiement sécurisé par e-mail.</p>
                <p className="flex gap-2"><span className="font-mono font-bold text-[#9C4323]">3.</span> Le guide d’accueil numérique de L’Habitation sera débloqué.</p>
              </div>
            </div>

            {/* Provence lavender image */}
            <div className="relative rounded-3xl overflow-hidden h-52 flex items-end p-5 text-white shadow-xl">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" 
                  alt="Luberon" 
                  className="w-full h-full object-cover brightness-[0.7]" 
                />
              </div>
              <div className="relative z-10">
                <span className="text-[9px] font-mono tracking-wider font-bold uppercase text-[#FAF5EF] bg-transparent">DESTINATION</span>
                <p className="font-serif text-lg font-black text-white mt-0.5">Gordes, Luberon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Help footer */}
        <div className="pt-8 border-t border-stone-150 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p className="font-serif font-bold text-stone-900 text-sm">Besoin d'assistance ?</p>
            <p className="text-stone-500 mt-1">Notre conciergerie est disponible 24/7 pour répondre à vos questions.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => alert("Lancer le chat")} className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-850 font-bold rounded-xl">💬 Chatter avec nous</button>
            <button onClick={() => alert("Appeler le support")} className="px-4 py-2 border border-stone-200 hover:bg-stone-50 text-stone-700 bg-white font-bold rounded-xl">📞 Nous appeler</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 16. PRESTIGE PROPERTY DETAIL SCREEN (IMAGE 6)
// ============================================================================
export function PrestigePropertyDetailScreen({ onReserve, onVirtualVisit }: { onReserve: () => void, onVirtualVisit?: () => void }) {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-8 font-sans text-left">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Beautiful multi-image gallery grid (1 big left, 3 right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-64 md:h-[450px] rounded-3xl overflow-hidden shadow-sm">
          {/* Large main image */}
          <div className="md:col-span-2 relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Main estate design" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Small images vertically right */}
          <div className="hidden md:flex flex-col gap-3 h-full">
            <div className="h-1/2 rounded-r-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" 
                alt="Bedroom visual" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="h-1/2 rounded-r-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" 
                alt="Terrace pool visual" 
                className="w-full h-full object-cover" 
              />
              <button 
                onClick={() => alert("Toutes les photos")} 
                className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-white/95 text-stone-900 border border-stone-200 font-bold text-[11px] rounded-xl hover:bg-white shadow"
              >
                Voir toutes les photos
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-black text-[#2F2B28]">La Bastide des Oliviers</h1>
              <p className="text-stone-500 text-sm mt-1">Saint-Rémy-de-Provence, France • ⭐ 4.98</p>
            </div>

            {/* Icons indicators */}
            <div className="grid grid-cols-4 gap-2 text-center py-4 border-y border-stone-100 text-stone-600 font-sans text-xs">
              <div>
                <p className="font-mono text-[10px] uppercase font-semibold text-stone-400">Voyageurs</p>
                <p className="font-bold text-stone-900 text-sm mt-1">8 Adultes</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase font-semibold text-stone-400">Chambres</p>
                <p className="font-bold text-stone-900 text-sm mt-1">4 Suites</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase font-semibold text-stone-400">Salles de bain</p>
                <p className="font-bold text-stone-900 text-sm mt-1">3 Salles</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase font-semibold text-stone-400">Surface</p>
                <p className="font-bold text-stone-900 text-sm mt-1">240 m²</p>
              </div>
            </div>

            {/* Description context */}
            <div className="text-sm text-stone-600 leading-relaxed space-y-3 font-sans">
              <p>
                Niché au cœur des Alpilles, cet authentique mas provençal du XVIIIe siècle a été restauré avec une élégance contemporaine. Entre murs de pierre sèche et jardins parfumés, La Bastide des Oliviers offre une parenthèse enchantée où le luxe se fait discret.
              </p>
              <p>
                Profitez d'une piscine chauffée à débordement et d'un service de conciergerie haut de gamme dédié pour une expérience sur-mesure.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="font-serif text-lg font-black text-[#2F2B28]">Équipements d'exception</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center gap-3">
                  <span className="text-xl">🏊‍♀️</span> <div><p className="font-bold text-stone-900">Piscine chauffée</p></div>
                </div>
                <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center gap-3">
                  <span className="text-xl">📶</span> <div><p className="font-bold text-stone-900">Fibre optique</p></div>
                </div>
                <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center gap-3">
                  <span className="text-xl">❄️</span> <div><p className="font-bold text-stone-900">Climatisation</p></div>
                </div>
                <div className="p-4 bg-[#FCFAF7] border border-[#E8DFC2]/25 rounded-xl flex items-center gap-3">
                  <span className="text-xl">🔥</span> <div><p className="font-bold text-stone-900">Cheminée</p></div>
                </div>
                <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center gap-3">
                  <span className="text-xl">🚗</span> <div><p className="font-bold text-stone-900">Parking privé</p></div>
                </div>
                <div className="p-4 bg-white border border-stone-150 rounded-xl flex items-center gap-3">
                  <span className="text-xl">🤵</span> <div><p className="font-bold text-[#9C4323]">Chef à domicile</p></div>
                </div>
              </div>
            </div>

            {/* Maps placeholders as requested */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <h3 className="font-serif text-lg font-black text-[#2F2B28]">Emplacement</h3>
              <div className="bg-[#1A3026] h-60 rounded-3xl relative overflow-hidden flex items-center justify-center border border-stone-250">
                {/* Beautiful custom topography mapping representation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FAF5EF_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full text-stone-400 opacity-20" viewBox="0 0 400 200">
                    <path d="M10 80 Q 77.5 10, 145 80 T 280 80 T 415 80" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M10 110 Q 77.5 40, 145 110 T 280 110 T 415 110" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M10 140 Q 77.5 70, 145 140 T 280 140 T 415 140" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <p className="relative font-serif font-black text-[#FAF5EF] text-lg lg:text-md px-6 text-center">
                  À 10 minutes du centre historique et des marchés locaux.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Pricing calculation card */}
          <div className="lg:col-span-4 space-y-6 text-xs">
            <div className="bg-white border border-[#E8DFC2]/30 rounded-[28px] p-6 text-left space-y-5 shadow-sm">
              <div className="flex justify-between items-baseline">
                <p className="text-2xl font-serif font-black text-[#2F2B28]">850 € <span className="text-xs font-sans font-normal text-stone-500">/ nuit</span></p>
                <span className="text-xs text-amber-500 font-semibold">⭐ 4.98</span>
              </div>

              {/* Pseudo Dates Container */}
              <div className="border border-stone-200 rounded-xl divide-y divide-stone-200">
                <div className="grid grid-cols-2 divide-x divide-stone-200 text-stone-500 font-mono text-[9px] uppercase font-bold">
                  <div className="p-3">
                    <span>Arrivée</span>
                    <p className="text-stone-900 font-sans text-xs font-semibold mt-1">12 Mai 2024</p>
                  </div>
                  <div className="p-3">
                    <span>Départ</span>
                    <p className="text-stone-900 font-sans text-xs font-semibold mt-1">19 Mai 2024</p>
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-stone-500 font-mono text-[9px] uppercase font-bold">Voyageurs</span>
                  <p className="text-stone-900 text-xs font-semibold mt-1">4 Adultes, 2 Enfants</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button onClick={onReserve} className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 font-black text-center text-white rounded-xl shadow cursor-pointer text-xs">
                  Réserver directement
                </button>
                {onVirtualVisit && (
                  <button onClick={onVirtualVisit} className="w-full py-3.5 bg-[#9C4323] hover:bg-[#85351a] font-black text-center text-white rounded-xl shadow cursor-pointer text-xs flex items-center justify-center gap-2">
                    <Compass className="w-4 h-4" /> Visite Virtuelle (2 000 FCFA)
                  </button>
                )}
              </div>

              <div className="space-y-2.5 pt-3 border-t border-stone-100 text-stone-500 leading-none">
                <p className="flex justify-between"><span>850 € x 7 nuits</span> <span className="font-bold text-stone-850">5 950 €</span></p>
                <p className="flex justify-between"><span>Frais de conciergerie</span> <span className="font-bold text-stone-850">120 €</span></p>
                <p className="flex justify-between"><span>Taxes de séjour</span> <span className="font-bold text-stone-850">45 €</span></p>
                <div className="pt-3 border-t border-stone-150 flex justify-between text-sm text-stone-900 font-bold">
                  <span>Total</span> <span className="text-lg text-[#9C4323] font-serif font-black">6 115 €</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/50 border border-emerald-100/40 rounded-xl text-[10px] text-emerald-800 leading-normal font-medium">
                🛡 Annulation gratuite jusqu'à 48h avant l'arrivée. Garantie L'Habitation incluse.
              </div>
            </div>

            {/* Host info premium card */}
            <div className="bg-white border border-stone-200/50 p-5 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                  alt="Co-Host" 
                  className="w-11 h-11 rounded-full object-cover shrink-0" 
                />
                <div className="text-left leading-tight">
                  <p className="font-black text-stone-900 text-sm">Marie-Claire</p>
                  <p className="text-stone-500 text-[10px]">Hôte Conciergerie Exclusive</p>
                </div>
              </div>
              <button onClick={() => alert("Formulaire contact")} className="w-full py-2 bg-stone-50 border border-stone-200 hover:bg-stone-100 font-bold text-stone-700 rounded-lg">
                Contacter la conciergerie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 17. PRESTIGE DIRECTORY CATALOGUE SCREEN (IMAGE 7)
// ============================================================================
export function PrestigeCatalogueScreen({ onSelectProperty }: { onSelectProperty: (id: string) => void }) {
  const categories = ['Villas de Luxe', 'Appartements', 'Domaines', 'Piscines Infinies'];
  const [activeCat, setActiveCat] = useState('Villas de Luxe');

  const list = [
    { 
      id: 'celeste', 
      title: 'La Villa Céleste', 
      loc: 'Saint-Jean-Cap-Ferrat, France', 
      price: '2 450', 
      rating: '4.98', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      tag: 'Signature Collection' 
    },
    { 
      id: 'beletage', 
      title: 'Le Bel Étage', 
      loc: '8ème Arrondissement, Paris', 
      price: '890', 
      rating: '4.95', 
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      tag: 'PREMIUM' 
    },
    { 
      id: 'sommet', 
      title: 'Chalet Sommet', 
      loc: 'Courchevel 1850, Alpes', 
      price: '1 200', 
      rating: '5.0', 
      img: 'https://images.unsplash.com/photo-1518019355312-0a902df550d2?auto=format&fit=crop&w=600&q=80',
      tag: 'Cozy Haven' 
    },
    { 
      id: 'loftmarais', 
      title: 'Loft Marais', 
      loc: 'Le Marais, Paris', 
      price: '450', 
      rating: 'New', 
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      tag: 'Nouveau' 
    },
    { 
      id: 'bastide', 
      title: 'Bastide d’Or', 
      loc: 'Gordes, Provence', 
      price: '720', 
      rating: '4.96', 
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
      tag: 'Heritage Style' 
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-8 font-sans text-left">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search header layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-serif text-3xl font-black text-[#2F2B28]">Propriétés d'exception</h1>
            <p className="text-stone-500 text-xs mt-0.5">Plus de 120 villas et appartements sélectionnés pour votre confort à travers la France.</p>
          </div>
          <div className="flex gap-2.5">
            <button className="px-4 py-2 border border-stone-200 hover:bg-stone-50 text-xs font-bold text-stone-700 bg-white rounded-xl flex items-center gap-1.5 shadow-sm">
              ⚙️ Filtres
            </button>
            <button className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md">
              🗺️ Carte
            </button>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex gap-2 pb-1 overflow-x-auto scrollbar-none text-xs">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2.5 rounded-full border font-bold transition-all whitespace-nowrap cursor-pointer ${activeCat === cat ? 'bg-[#9C4323] text-white border-[#9C4323] shadow-sm' : 'bg-white text-stone-600 border-stone-200/60 hover:bg-stone-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Curated Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectProperty(item.id)}
              className="bg-white rounded-[24px] border border-stone-200/55 overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="relative h-60 w-full bg-stone-100 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                />
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-850 flex items-center justify-center font-bold text-lg pointer-events-auto border shadow-sm">
                  ❤️
                </button>
                {item.tag && (
                  <span className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-[#FAF5EF]/95 text-[#9C4323] border border-[#E8DFC2]/30 text-[9px] font-mono uppercase tracking-wider font-bold rounded-lg shadow-sm">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-5 space-y-1.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif font-black text-stone-900 text-base">{item.title}</h3>
                  <span className="font-bold text-stone-500 text-[11px]">⭐ {item.rating}</span>
                </div>
                <p className="text-stone-400 font-medium">{item.loc}</p>
                <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                  <span className="text-stone-500 font-medium">Tarif estimé</span>
                  <p className="text-base font-serif font-black text-[#9C4323]">{item.price} € <span className="text-[10px] font-sans font-normal text-stone-500">/ nuit</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 18. KYC IDENTITY VERIFICATION VIEW (IMAGE 8)
// ============================================================================
export function IdentityVerificationScreen({ onComplete }: { onComplete: () => void }) {
  const [completeStep, setCompleteStep] = useState(false);
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 p-4 md:p-8 space-y-6 font-sans text-left">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h2 className="font-serif text-3xl font-black text-[#2F2B28]">Vérification d'identité</h2>
          <p className="text-stone-500 text-xs mt-0.5">Afin de garantir la sécurité de nos échanges et de finaliser votre dossier, veuillez procéder à la vérification KYC.</p>
        </div>

        {/* Step Alert Banner */}
        <div className="bg-[#FAF5EF] border border-[#E8DFC2]/30 p-4 rounded-2xl flex items-start gap-3 text-xs leading-relaxed">
          <span className="text-lg">✔️</span>
          <div>
            <p className="font-serif font-bold text-[#9C4323] text-sm">Dossier en cours</p>
            <p className="text-stone-700">Étape 2 sur 3 : Nous avons besoin de vos pièces justificatives et d’une validation biométrique.</p>
          </div>
        </div>

        {/* KYC Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* File Upload Zone */}
          <div className="bg-white border border-[#E8DFC2]/30 rounded-3xl p-6 md:p-8 text-left space-y-5 shadow-sm text-xs">
            <span className="text-lg">📂</span>
            <h3 className="font-serif text-lg font-black text-stone-900 pb-1 border-b">Pièce d'identité</h3>
            <p className="text-[#8E8071] leading-relaxed">Téléchargez une copie recto/verso de votre carte d'identité ou passeport en cours de validité.</p>
            
            <div className="border-2 border-dashed border-[#E8DFC2]/70 bg-[#FCFAF7]/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:bg-stone-50 transition-colors">
              <span className="text-3xl">📤</span>
              <p className="font-semibold text-stone-800">GLISSER-DÉPOSER OU PARCOURIR</p>
              <p className="text-stone-400 text-[10px]">JPG, PNG ou PDF (Max 5MB)</p>
            </div>

            {/* Document validation badge mockup */}
            <div className="p-3 bg-emerald-50 border border-emerald-100/40 rounded-xl flex items-center justify-between text-[11px] font-medium text-emerald-800">
              <span className="flex items-center gap-1.5">📇 CNI_Recto.jpg</span>
              <span>✔️ Vérifié</span>
            </div>
          </div>

          {/* Facial Biometric Biopass Scan */}
          <div className="bg-white border border-[#E8DFC2]/30 rounded-3xl p-6 md:p-8 text-left space-y-5 shadow-sm text-xs">
            <span className="text-lg">📷</span>
            <h3 className="font-serif text-lg font-black text-stone-900 pb-1 border-b">Vérification faciale</h3>
            <p className="text-[#8E8071] leading-relaxed">Positionnez votre visage au centre du cadre pour une reconnaissance biométrique instantanée.</p>

            {/* Camera View mockup frame */}
            <div className="relative rounded-2xl overflow-hidden h-60 bg-stone-950 flex items-center justify-center border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                alt="Portrait match template" 
                className="w-full h-full object-cover opacity-60 filter grayscale brightness-75" 
              />
              {/* Circular Target overlay as in Image 8 */}
              <div className="absolute w-44 h-44 rounded-full border-2 border-red-500/80 pointer-events-none flex items-center justify-center">
                <div className="w-full h-[1px] bg-red-400" />
              </div>
            </div>

            <div className="flex gap-2.5">
              <button onClick={() => alert("Annulé")} className="flex-1 py-3 text-stone-700 bg-stone-100 hover:bg-stone-200 text-xs font-bold rounded-xl text-center">
                Annuler
              </button>
              <button onClick={onComplete} className="flex-1 py-3 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-black rounded-xl shadow cursor-pointer text-center">
                Finaliser la vérification
              </button>
            </div>
          </div>
        </div>

        {/* GDPR compliance info cards as shown in Image 8 */}
        <div className="pt-6 border-t border-stone-100 grid grid-cols-1 md:grid-cols-10 gap-6 items-center">
          <div className="md:col-span-7 bg-white rounded-2xl p-6 border text-left space-y-3 shadow-sm text-xs">
            <h4 className="font-serif font-black text-stone-900">🛡️ Protection de vos données</h4>
            <p className="text-stone-500 leading-relaxed">
              Vos informations sont chiffrées de bout en bout et traitées conformément aux normes RGPD. L'Habitation ne partage jamais vos documents d'identité avec des tiers sans votre consentement explicite.
            </p>
            <div className="flex flex-wrap gap-2 text-[9px] font-mono text-stone-500 uppercase">
              <span className="px-2.5 py-1 bg-stone-100 rounded">AES-256 bits</span>
              <span className="px-2.5 py-1 bg-stone-100 rounded">ISO 27001</span>
              <span className="px-2.5 py-1 bg-stone-100 rounded">GDPR Compliant</span>
            </div>
          </div>

          <div className="md:col-span-3 bg-[#9C4323] text-white rounded-2xl p-6 border text-left space-y-4 shadow-sm text-xs flex flex-col justify-between h-[160px]">
            <div>
              <p className="font-serif font-black text-sm">Besoin d'aide ?</p>
              <p className="text-stone-200 mt-1">Nos conseillers pour vous accompagner dans votre démarche KYC.</p>
            </div>
            <button onClick={() => alert("Lancer le chat")} className="w-full py-2.5 bg-white text-stone-900 hover:bg-stone-50 font-black rounded-lg text-center cursor-pointer">
              LANCER LE CHAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 19. REVOLUTIONARY LOGIN GATEWAY (IMAGE 9)
// ============================================================================
export function PhoneLoginScreen({ onContinue }: { onContinue: (phone: string) => void }) {
  const [phone, setPhone] = useState('+33 6 00 00 00 00');
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 flex flex-col justify-between font-sans relative">
      <header className="px-8 py-5 border-b border-stone-200/50 flex justify-between items-center text-xs bg-white/40 sticky top-0">
        <span className="font-serif font-black text-2xl text-[#9C4323] tracking-tight">L'Habitation</span>
        <button className="text-stone-600 font-bold hover:underline" onClick={() => alert("Aide")}>BESOIN D’AIDE ?</button>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 p-4 md:p-8">
        {/* Left arched elegant aesthetic banner */}
        <div className="w-full md:w-1/2 relative h-64 md:h-[500px] rounded-[36px] overflow-hidden shadow-xl hidden md:flex items-end p-8 text-white">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
              alt="Arch visual representation" 
              className="w-full h-full object-cover brightness-[0.55]" 
            />
          </div>
          <div className="relative z-10 space-y-4 text-left max-w-sm">
            <h1 className="font-serif text-3xl md:text-4xl font-black text-white leading-tight">L'art de vivre, réinventé pour vous.</h1>
            <p className="text-xs text-[#FAF5EF] leading-relaxed">Une expérience de conciergerie sur-mesure, alliant tradition et modernité technologique.</p>
          </div>
        </div>

        {/* Right standard input card */}
        <div className="w-full md:w-1/2 max-w-md bg-white border border-[#E8DFC2]/30 p-8 rounded-[32px] text-left space-y-6 shadow-sm">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-[#9C4323] font-bold uppercase">BIENVENUE</span>
            <h2 className="font-serif text-3xl font-black text-stone-900 mt-1">Commencez votre séjour</h2>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">Veuillez saisir votre numéro de téléphone pour accéder à votre espace personnel.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-stone-400 block mb-1">Numéro de téléphone</label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs text-stone-400">📞</span>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl outline-none font-sans text-stone-850 text-xs bg-stone-50/50" 
                />
              </div>
            </div>

            <button 
              onClick={() => onContinue(phone)} 
              className="w-full py-3.5 bg-[#9C4323] hover:bg-[#85351a] text-white font-black text-xs rounded-xl shadow transition-all cursor-pointer text-center"
            >
              Continuer
            </button>
          </div>

          <p className="text-stone-400 text-[10px] leading-relaxed text-center">
            En continuant, vous acceptez nos <span className="text-stone-700 font-bold hover:underline cursor-pointer">Conditions Générales</span> et notre <span className="text-stone-700 font-bold hover:underline cursor-pointer">Politique de Confidentialité</span>.
          </p>

          <div className="pt-6 border-t border-stone-100 text-center space-y-4">
            <span className="text-[9px] font-mono tracking-wider text-stone-400 uppercase font-bold block">OU S’IDENTIFIER AVEC</span>
            <div className="flex justify-center gap-3.5">
              <button onClick={() => onContinue('+33 6 12 34 56 78')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50">✉️</button>
              <button onClick={() => onContinue('+33 6 11 22 33 44')} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50">👉🏽</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t text-[10px] text-stone-500 font-mono tracking-wider flex justify-between px-8 bg-white/10 uppercase">
        <span>© 2024 L'Habitation Conciergerie de Luxe.</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:underline">Contact</span>
          <span className="cursor-pointer hover:underline">Mentions Légales</span>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// 20. SECURITY OTP PASSKEY VERIFICATION (IMAGE 10)
// ============================================================================
export function SecurityOTPScreen({ onConfirm }: { onConfirm: () => void }) {
  const [inpValue, setInpValue] = useState('000000');
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-850 flex flex-col justify-between font-sans relative">
      <header className="px-8 py-5 text-center text-xs">
        <span className="font-serif font-black text-2xl text-[#9C4323] tracking-tight">L'Habitation</span>
        <p className="text-[9px] font-mono uppercase tracking-widest text-[#8E8071] mt-0.5 font-bold">SÉCURITÉ & CONFIDENTIALITÉ</p>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-4xl mx-auto w-full gap-8 p-4">
        {/* Verification Container card */}
        <div className="flex-1 bg-white border border-[#E8DFC2]/30 p-8 rounded-[32px] text-center space-y-6 shadow-sm max-w-md mx-auto relative">
          <span className="mx-auto w-12 h-12 rounded-xl bg-[#FAF5EF] text-[#9C4323] flex items-center justify-center font-bold text-lg">🔒</span>
          
          <div className="space-y-1">
            <h2 className="font-serif text-2xl font-black text-stone-900">Vérification de sécurité</h2>
            <p className="text-xs text-stone-500 leading-relaxed">Nous avons envoyé un code de confirmation à 6 chiffres à votre adresse e-mail.</p>
          </div>

          {/* 6 circle input mockup */}
          <div className="flex justify-center gap-2.5 py-2">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="w-11 h-14 rounded-xl border border-stone-200 bg-[#FAF5EF]/20 flex items-center justify-center font-bold text-lg">
                •
              </div>
            ))}
          </div>

          <button onClick={onConfirm} className="w-full py-3.5 bg-[#9C4323] hover:bg-[#85351a] text-white font-black text-xs rounded-xl shadow cursor-pointer text-center">
            Confirmer le code
          </button>

          <div className="space-y-1 text-[11px] font-sans">
            <p className="text-stone-400">Vous n’avez pas reçu le code ?</p>
            <p onClick={() => alert("Code renvoyé")} className="text-[#9C4323] font-bold cursor-pointer hover:underline">
              🔄 Renvoyer un nouveau code
            </p>
          </div>
        </div>

        {/* Small deco visual room banner left */}
        <div className="w-56 h-48 rounded-2xl overflow-hidden shadow-md hidden lg:block sticky bottom-8">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" alt="Small decor room" className="w-full h-full object-cover" />
        </div>
      </main>

      <footer className="py-5 text-[10px] text-stone-400 font-mono tracking-wider flex justify-center gap-8 bg-transparent">
        <span>👨🏽‍💻 Aide & Support</span>
        <span>|</span>
        <span>🛡️ Espace sécurisé</span>
      </footer>
    </div>
  );
}

