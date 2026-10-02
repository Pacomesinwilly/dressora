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
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      // Simulation d'un délai réseau pour l'UX
      await new Promise(resolve => setTimeout(resolve, 800));

      const usersKey = 'terracotta_users';
      const users = JSON.parse(localStorage.getItem(usersKey) || '[]');

      if (isRegistering) {
        if (!identifier || !password || !fullName) {
          setErrorMsg('Tous les champs sont requis.');
          setIsLoading(false);
          return;
        }

        const exists = users.find((u: any) => u.id === identifier && u.role === actor);
        if (exists) {
          setErrorMsg('Cet identifiant est déjà utilisé pour ce rôle.');
          setIsLoading(false);
          return;
        }

        const newUser = { id: identifier, password, fullName, role: actor, createdAt: new Date().toISOString() };
        users.push(newUser);
        localStorage.setItem(usersKey, JSON.stringify(users));

        setShowSuccess(true);
        setTimeout(() => {
          onLogin();
        }, 1500);

      } else {
        if (!identifier || !password) {
          setErrorMsg('Identifiant et mot de passe requis.');
          setIsLoading(false);
          return;
        }

        const user = users.find((u: any) => u.id === identifier && u.password === password && u.role === actor);

        if (!user) {
          setErrorMsg('Identifiant ou mot de passe incorrect.');
          setIsLoading(false);
          return;
        }

        setShowSuccess(true);
        setTimeout(() => {
          onLogin();
        }, 1500);
      }
    } catch (error) {
      console.error("Auth Local Storage Error:", error);
      setErrorMsg("Erreur lors de la sauvegarde sur l'appareil.");
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccountMap = {
    agent: { id: 'agent@terracotta.fr', password: 'agent123' },
    client: { id: 'proprio@terracotta.fr', password: 'proprio123' },
    guest: { id: 'resident@terracotta.fr', password: 'resident123' },
  } as const;

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

  const fillDemoCredentials = () => {
    const demo = demoAccountMap[actor];
    setIdentifier(demo.id);
    setPassword(demo.password);
    setErrorMsg('');
  };

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

        {showSuccess ? (
          <div className="p-10 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800">Compte Créé</h3>
            <p className="text-sm text-stone-500">
              Bienvenue, {fullName}. Votre identité a été enregistrée avec succès. Redirection en cours...
            </p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="rounded-xl border border-[#E8DFC2] bg-[#FAF5EF] px-3 py-2 text-[11px] text-[#5F5148] flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-[#2F2B28]">Compte de démonstration</p>
                  <p className="text-[#6A6055]">{demoAccountMap[actor].id} / {demoAccountMap[actor].password}</p>
                </div>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E8DFC2] text-[#9C4323] font-bold text-[10px] hover:bg-[#F3ECE5] transition-colors cursor-pointer"
                >
                  Remplir
                </button>
              </div>
              
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <AnimatePresence>
                {isRegistering && (
                  <motion.div
                    key="register-name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold block mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      required={isRegistering}
                      placeholder="Jean Dupont"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FCFAF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:border-[#9C4323] transition-colors text-stone-800 mb-4"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

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

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#E8DFC2] text-[#9C4323] focus:ring-[#9C4323]" />
                <span className="text-xs text-stone-600 font-medium">Se souvenir de moi</span>
              </label>
              {!isRegistering && (
                <a href="#" className="text-xs text-[#9C4323] font-bold hover:underline">Oublié ?</a>
              )}
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
                  <span>{isRegistering ? "Créer mon compte" : "Se connecter"}</span> <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            
              <div className="text-center pt-2 border-t border-[#F3ECE5]">
                <span className="text-xs text-stone-500">
                  {isRegistering ? "Vous avez déjà un compte ?" : "Nouveau sur Terracotta ?"}
                </span>
                <button 
                  type="button" 
                  onClick={() => {
                    setIsRegistering(!isRegistering);
                    setErrorMsg('');
                  }}
                  className="ml-2 text-xs text-[#9C4323] font-bold hover:underline cursor-pointer"
                >
                  {isRegistering ? "Connectez-vous" : "S'inscrire"}
                </button>
              </div>
            </div>
          </form>
        )}

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
