import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, User, Key, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginScreenProps {
  actor: 'agent' | 'client' | 'guest';
  onLogin: () => void;
  onBack: () => void;
}

export default function LoginScreen({ actor, onLogin, onBack }: LoginScreenProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500); // Simulate network request
  };

  const config = {
    agent: {
      title: 'Elite Agent Portal',
      subtitle: 'Accédez à votre tableau de bord professionnel.',
      icon: <User className="w-8 h-8 text-white" />,
      color: 'bg-stone-900',
      btnColor: 'bg-[#9C4323] hover:bg-[#85351a]',
      placeholderId: 'ID Agent ou Email',
    },
    client: {
      title: 'L\'Habitation Propriétaire',
      subtitle: 'Gérez vos biens d\'exception et suivez vos rendements.',
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: 'bg-[#9C4323]',
      btnColor: 'bg-stone-900 hover:bg-black',
      placeholderId: 'Email Propriétaire',
    },
    guest: {
      title: 'Portail Locataire',
      subtitle: 'Votre conciergerie privée et suivi de dossier.',
      icon: <Key className="w-8 h-8 text-white" />,
      color: 'bg-[#8E8071]',
      btnColor: 'bg-[#9C4323] hover:bg-[#85351a]',
      placeholderId: 'Numéro de Téléphone ou Email',
    }
  }[actor];

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#FAF5EF] to-transparent z-0" />
      
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 text-stone-500 hover:text-stone-900 font-bold text-sm flex items-center gap-2 z-20 cursor-pointer transition-colors"
      >
        ← Retour aux portails
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[32px] border border-[#E8DFC2]/50 shadow-xl overflow-hidden z-10"
      >
        <div className={`${config.color} p-8 flex flex-col items-center text-center space-y-4`}>
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/10">
            {config.icon}
          </div>
          <div className="text-white">
            <h2 className="font-serif text-2xl font-bold">{config.title}</h2>
            <p className="text-white/80 text-sm mt-1">{config.subtitle}</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold block mb-1">Identifiant</label>
              <input 
                type="text" 
                required
                placeholder={config.placeholderId}
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                className="w-full px-4 py-3 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:border-[#9C4323] transition-colors text-stone-800"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold block mb-1">Mot de passe</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:border-[#9C4323] transition-colors text-stone-800"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-[#E8DFC2] text-[#9C4323] focus:ring-[#9C4323]" />
              <span className="text-xs text-stone-600 font-medium">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-xs text-[#9C4323] font-bold hover:underline">Oublié ?</a>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${config.btnColor} ${isLoading ? 'opacity-70' : ''}`}
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Se connecter <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="bg-[#FAF5EF] p-4 text-center border-t border-[#E8DFC2]/50">
          <p className="text-[10px] text-stone-500 font-mono flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Connexion sécurisée et cryptée de bout en bout
          </p>
        </div>
      </motion.div>
    </div>
  );
}
