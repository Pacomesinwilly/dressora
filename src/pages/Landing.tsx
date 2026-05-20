import React from 'react';
import { Building2, User, Key } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingProps {
  onSelectActor: (actor: 'agent' | 'client' | 'guest') => void;
}

export default function Landing({ onSelectActor }: LandingProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-[#9C4323] rounded-2xl text-[#FBF9F4] shadow-lg mb-6">
            <Building2 className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2F2B28] mb-4">
            Terracotta Reserve
          </h1>
          <p className="text-[#8E8071] text-lg max-w-2xl mx-auto">
            Sélectionnez votre portail de connexion pour accéder à votre espace dédié.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Agent Card */}
          <button 
            onClick={() => onSelectActor('agent')}
            className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#E8DFC2]/50 shadow-sm hover:shadow-xl hover:border-[#9C4323]/30 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#F3ECE5] group-hover:bg-[#9C4323] flex items-center justify-center transition-colors mb-6">
              <User className="w-8 h-8 text-[#9C4323] group-hover:text-white transition-colors" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#2F2B28] mb-2">Elite Agent</h2>
            <p className="text-sm text-[#8E8071] text-center">
              Gérez vos annonces, vos leads et vos visites depuis l'espace professionnel.
            </p>
          </button>

          {/* Client / Owner Card */}
          <button 
            onClick={() => onSelectActor('client')}
            className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#E8DFC2]/50 shadow-sm hover:shadow-xl hover:border-[#9C4323]/30 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#F3ECE5] group-hover:bg-[#9C4323] flex items-center justify-center transition-colors mb-6">
              <Building2 className="w-8 h-8 text-[#9C4323] group-hover:text-white transition-colors" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#2F2B28] mb-2">Propriétaire</h2>
            <p className="text-sm text-[#8E8071] text-center">
              Accédez à L'Habitation pour suivre la gestion de vos biens d'exception.
            </p>
          </button>

          {/* Guest / Tenant Card */}
          <button 
            onClick={() => onSelectActor('guest')}
            className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#E8DFC2]/50 shadow-sm hover:shadow-xl hover:border-[#9C4323]/30 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#F3ECE5] group-hover:bg-[#9C4323] flex items-center justify-center transition-colors mb-6">
              <Key className="w-8 h-8 text-[#9C4323] group-hover:text-white transition-colors" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#2F2B28] mb-2">Résident / Invité</h2>
            <p className="text-sm text-[#8E8071] text-center">
              Gérez votre location, vos demandes et explorez les services LuxEstate.
            </p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
