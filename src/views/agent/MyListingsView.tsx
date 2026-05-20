import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  UploadCloud, 
  MapPin, 
  Eye, 
  Send, 
  WifiOff, 
  RefreshCw, 
  Headphones, 
  FileText,
  Trash2,
  Check,
  AlertCircle
} from 'lucide-react';
import { PropertyListing } from '../../domain/entities/types';

interface MyListingsViewProps {
  listings: PropertyListing[];
  onAddListing: (newProp: PropertyListing) => void;
  onDeleteListing: (id: string) => void;
}

export default function MyListingsView({ listings, onAddListing, onDeleteListing }: MyListingsViewProps) {
  // Navigation internal mode
  const [listingSubTab, setListingSubTab] = useState<'create' | 'status'>('create');
  
  // Last published listing for celebration view matching mockup 6
  const [lastPublishedListing, setLastPublishedListing] = useState<PropertyListing | null>(null);

  // States for 'Listing Status' demo view toggles
  const [statusDemoMode, setStatusDemoMode] = useState<'normal' | 'empty' | 'error'>('normal');

  // Form States
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [surface, setSurface] = useState('');
  const [exactAddress, setExactAddress] = useState('12 Boulevard de la Croisette');
  const [city, setCity] = useState('Cannes');
  const [description, setDescription] = useState('');
  
  // High-res media custom simulator states
  const [prefilledImages, setPrefilledImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  ]);
  const [isUploadingSim, setIsUploadingSim] = useState(false);
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  // Address Geolocation simulation
  const handleUseCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setExactAddress(`Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`);
          setCity("Position GPS Actuelle");
        },
        () => {
          // Fallback if blocked
          setExactAddress("8 Boulevard des Pyrénées");
          setCity("Pau, France");
        }
      );
    } else {
      setExactAddress("8 Boulevard des Pyrénées");
      setCity("Pau, France");
    }
  };

  // Submit Listing Form action
  const handleSubmitListing = (status: 'active' | 'draft') => {
    if (!title || !price || !surface) {
      setFormFeedback("Erreur : Veuillez remplir le titre, le prix et la surface.");
      setTimeout(() => setFormFeedback(null), 3000);
      return;
    }

    const newProperty: PropertyListing = {
      id: `prop-${Date.now()}`,
      title,
      price: Number(price),
      surface: Number(surface),
      description: description || "Aucune description prestige spécifiée.",
      exactAddress,
      city,
      images: prefilledImages.length > 0 ? prefilledImages : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
      coverImage: prefilledImages[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      status: status,
      createdDate: new Date().toISOString().split('T')[0]
    };

    onAddListing(newProperty);
    
    // Clear states
    setTitle('');
    setPrice('');
    setSurface('');
    setDescription('');
    
    if (status === 'active') {
      setLastPublishedListing(newProperty);
    } else {
      setFormFeedback("Succès : Le brouillon prestige a été enregistré !");
      setTimeout(() => setFormFeedback(null), 3000);
    }
  };

  const handleSimulateUpload = () => {
    setIsUploadingSim(true);
    setTimeout(() => {
      const moreImages = [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
      ];
      // pick one randomly
      const picked = moreImages[Math.floor(Math.random() * moreImages.length)];
      if (!prefilledImages.includes(picked)) {
        setPrefilledImages(prev => [...prev, picked]);
      }
      setIsUploadingSim(false);
    }, 1000);
  };

  return (
    <div id="listings-view" className="space-y-8">
      {/* Sub menu controls */}
      <div id="listings-sub-header" className="flex items-center justify-between pb-3 border-b border-[#E8DFC2]/30">
        <div className="flex gap-4">
          <button
            id="subtab-create-annonce"
            onClick={() => setListingSubTab('create')}
            className={`pb-2.5 text-sm font-semibold transition-all relative ${
              listingSubTab === 'create' 
                ? 'text-[#9C4323] border-b-2 border-[#9C4323]' 
                : 'text-[#8E8071] hover:text-[#2F2B28]'
            }`}
          >
            Création d'Annonce Rapide
          </button>
          
          <button
            id="subtab-status-annonce"
            onClick={() => setListingSubTab('status')}
            className={`pb-2.5 text-sm font-semibold transition-all relative ${
              listingSubTab === 'status' 
                ? 'text-[#9C4323] border-b-2 border-[#9C4323]' 
                : 'text-[#8E8071] hover:text-[#2F2B28]'
            }`}
          >
            États de Gestion / Listing Status
          </button>
        </div>

        <div className="text-xs text-[#8E8071] font-mono uppercase bg-[#F3ECE5] px-3 py-1 rounded-full font-bold">
          Terracotta Reserve Listings Engine
        </div>
      </div>

      <AnimatePresence mode="wait">
        {listingSubTab === 'create' && lastPublishedListing ? (
          <motion.div
            key="publish-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-8 border border-[#E8DFC2]/30 shadow-xl space-y-8 text-left max-w-2xl mx-auto"
          >
            {/* Checked success header */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-[#9C4323] shadow-md border border-amber-100">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#9C4323] font-black uppercase">
                  Félicitations !
                </span>
                <h2 className="font-serif text-3xl font-black text-[#2F2B28]">
                  Annonce publiée avec succès !
                </h2>
                <p className="text-xs text-[#8E8071]">
                  Votre annonce exclusive est désormais visible par tous les membres certifiés de la réserve.
                </p>
              </div>
            </div>

            {/* Visual representation card of generated listing */}
            <div className="border border-[#E8DFC2]/30 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row bg-[#FCFAF7]">
              <div className="md:w-1/3 aspect-[4/3] md:aspect-auto bg-stone-100">
                <img 
                  src={lastPublishedListing.coverImage} 
                  alt={lastPublishedListing.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-mono tracking-wider font-bold uppercase rounded-full">
                    Active • Visite autorisée
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#2F2B28]">
                    {lastPublishedListing.title}
                  </h4>
                  <p className="text-xs text-[#8E8071] line-clamp-2">
                    {lastPublishedListing.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[#EADFD5]/40 text-xs">
                  <div>
                    <span className="text-[9px] text-[#A2978B] font-mono block">VALEUR PRESTIGE</span>
                    <span className="font-serif font-black text-[#9C4323] text-sm">
                      {lastPublishedListing.price.toLocaleString('fr-FR')} €
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#A2978B] font-mono block">SURFACE ACTIVE</span>
                    <span className="font-bold text-stone-800 text-sm">
                      {lastPublishedListing.surface} m²
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#A2978B] font-mono block">LOCALISATION</span>
                    <span className="font-bold text-stone-800 text-sm">
                      {lastPublishedListing.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tip Box */}
            <div className="p-4.5 bg-amber-50/45 border border-amber-150/40 rounded-2xl flex items-start gap-3 text-xs text-[#714E29]">
              <span className="text-xl">💡</span>
              <p className="leading-relaxed">
                <span className="font-bold">Pro Tip:</span> Partagez cette fiche par WhatsApp ou e-mail directement à vos contacts d’élite pour accélérer les visites d'achat de 45% ce trimestre.
              </p>
            </div>

            {/* Action buttons footer */}
            <div className="pt-4 border-t border-[#F3ECE5] flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={() => alert(`Copie du lien d'invitation exclusive : https://terracotta-reserve.com/listing/${lastPublishedListing.id}`)}
                className="px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold transition-all hover:bg-stone-800 flex items-center gap-1.5 cursor-pointer"
              >
                Partager l'Annonce
              </button>
              
              <button
                type="button"
                onClick={() => setLastPublishedListing(null)}
                className="px-6 py-2.5 border border-[#E8DFC2] text-[#6A6055] rounded-xl text-xs font-bold transition-all hover:bg-[#F3ECE5] cursor-pointer"
              >
                Créer une autre annonce
              </button>

              <button
                type="button"
                onClick={() => {
                  setLastPublishedListing(null);
                  setListingSubTab('status');
                }}
                className="px-6 py-2.5 bg-[#9C4323] text-white rounded-xl text-xs font-bold transition-all hover:bg-[#85351a] cursor-pointer"
              >
                Gérer mes annonces
              </button>
            </div>

          </motion.div>
        ) : listingSubTab === 'create' && (
          <motion.div
            key="create-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Form Info Notification */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2F2B28] tracking-tight">
                  Création d'Annonce Rapide
                </h2>
                <p className="text-sm text-[#8E8071] font-sans mt-0.5">
                  Publiez votre bien de luxe en quelques minutes avec notre flux optimisé.
                </p>
              </div>

              {formFeedback && (
                <div id="form-feedback-pill" className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm animate-bounce ${
                  formFeedback.startsWith('Erreur') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  {formFeedback.startsWith('Erreur') ? <AlertCircle className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  {formFeedback}
                </div>
              )}
            </div>

            {/* SECTION 1: Médias Haute Résolution */}
            <section id="section-media" className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#9C4323] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2F2B28]">
                  Médias Haute Résolution
                </h3>
              </div>

              {/* Dropzone mockup */}
              <div 
                id="dropzone" 
                onClick={handleSimulateUpload}
                className="border-2 border-dashed border-[#E8DFC2] hover:border-[#9C4323] bg-[#FDFBF7] p-8 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors group"
              >
                <div className="p-3 bg-orange-50 rounded-full group-hover:scale-110 transition-transform mb-3">
                  <UploadCloud className="w-8 h-8 text-[#9C4323]" />
                </div>
                <p className="text-[#2F2B28] font-semibold text-sm">
                  Glissez-déposez vos photos et vidéos
                </p>
                <p className="text-xs text-[#8E8071] mt-1 mb-4">
                  Format recommandé: 4K, 16:9. Minimum 10 photos pour une visibilité optimale.
                </p>
                <button
                  type="button"
                  id="browse-files-btn"
                  className="px-5 py-2 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-medium rounded-xl transition-all shadow-sm"
                >
                  {isUploadingSim ? 'Chargement...' : 'Parcourir les fichiers'}
                </button>
              </div>

              {/* Preloaded thumbnails with cover highlights */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {prefilledImages.map((imgUrl, idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden group aspect-[4/3] border border-[#E8DFC2]/40 bg-stone-50">
                    <img 
                      src={imgUrl} 
                      alt={`Upload preview ${idx}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {idx === 0 && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-[#9C4323] text-[9px] font-mono font-bold text-white uppercase rounded shadow">
                        Image de couverture
                      </span>
                    )}
                    <button
                      id={`delete-uploaded-${idx}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPrefilledImages(prev => prev.filter((_, i) => i !== idx));
                      }}
                      className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-red-700 text-white rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                
                {/* Simulated add box */}
                <button
                  id="add-placeholder-img-btn"
                  onClick={handleSimulateUpload}
                  className="rounded-xl border border-dashed border-[#E8DFC2] flex flex-col items-center justify-center text-[#8E8071] hover:text-[#9C4323] hover:bg-orange-50/20 transition-all aspect-[4/3] cursor-pointer"
                >
                  <Plus className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Ajouter</span>
                </button>
              </div>
            </section>

            {/* SECTION 2: Informations du Bien */}
            <section id="section-info" className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#9C4323] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2F2B28]">
                  Informations du Bien
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 space-y-1.5">
                  <label htmlFor="title-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                    Titre de l'Annonce
                  </label>
                  <input
                    id="title-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="ex: Villa d'Exception avec Vue Mer à Cannes"
                    className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9C4323]/40 focus:border-[#9C4323] transition-all text-[#2F2B28] placeholder-[#B6AFA6]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="price-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                    Prix (€)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-[#8E8071]">€</span>
                    <input
                      id="price-input"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="2 450 000"
                      className="w-full pl-8 pr-4 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9C4323]/40 focus:border-[#9C4323] transition-all text-[#2F2B28]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="surface-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                    Surface Habitable (m²)
                  </label>
                  <div className="relative">
                    <input
                      id="surface-input"
                      type="number"
                      value={surface}
                      onChange={(e) => setSurface(e.target.value)}
                      placeholder="320"
                      className="w-full pl-4 pr-12 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9C4323]/40 focus:border-[#9C4323] transition-all text-[#2F2B28]"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-xs text-[#8E8071]">m²</span>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label htmlFor="desc-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                    Description Prestige
                  </label>
                  <textarea
                    id="desc-input"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Décrivez les atouts uniques de ce bien : matériaux, vue, architecture..."
                    className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9C4323]/40 focus:border-[#9C4323] transition-all text-[#2F2B28] placeholder-[#B6AFA6]"
                  />
                </div>
              </div>
            </section>

            {/* SECTION 3: Emplacement Stratégique */}
            <section id="section-location" className="bg-white p-6 rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#9C4323] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2F2B28]">
                  Emplacement Stratégique
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="address-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                      Adresse Exacte
                    </label>
                    <input
                      id="address-input"
                      type="text"
                      value={exactAddress}
                      onChange={(e) => setExactAddress(e.target.value)}
                      placeholder="12 Boulevard de la Croisette"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="city-input" className="text-xs font-bold text-[#8E8071] uppercase tracking-wide">
                      Ville
                    </label>
                    <input
                      id="city-input"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Cannes"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E8DFC2] rounded-xl text-sm focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    id="gps-btn"
                    onClick={handleUseCurrentPosition}
                    className="flex items-center gap-2 text-xs font-semibold text-[#9C4323] hover:text-[#85351a] transition-colors pt-2 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-[#9C4323]" />
                    Utiliser ma position actuelle
                  </button>
                </div>

                {/* Simulated luxury vector map styled exactly as mockup */}
                <div className="relative rounded-2xl overflow-hidden h-52 bg-[#E1EEF4] border border-[#E8DFC2]/40 shadow-inner group">
                  {/* Styled canvas art mimicking shoreline mountains */}
                  <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#FAF5EF] to-[#D5EDF8]">
                    {/* Mountains in golden tones */}
                    <div className="absolute bottom-0 right-0 w-full h-[60%] bg-[#ecdcc5] rounded-tl-[80%] transform translate-y-6 rotate-[2deg] opacity-70" />
                    <div className="absolute bottom-0 right-0 w-[80%] h-[50%] bg-[#dfceb5] rounded-tl-[60%] transform translate-y-8" />
                    
                    {/* Blue waters styling */}
                    <div className="absolute bottom-0 left-0 w-[60%] h-[35%] bg-gradient-to-r from-[#8EC4F2]/50 to-transparent rounded-tr-[120px]" />
                    
                    {/* Map pointer */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-[#9C4323] text-white flex items-center justify-center p-1 border-2 border-white shadow-lg animate-bounce select-none">
                        <MapPin className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="bg-white/95 px-2.5 py-1 rounded text-[9px] font-mono tracking-wider font-bold shadow-md text-[#2F2B28] uppercase mt-1">
                        {city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Form Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3 border-t border-[#E8DFC2]/20">
              <button
                type="button"
                id="btn-draft"
                onClick={() => handleSubmitListing('draft')}
                className="px-6 py-3 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] font-semibold text-xs rounded-xl transition-all cursor-pointer"
              >
                Enregistrer le Brouillon
              </button>
              
              <button
                type="button"
                id="btn-preview"
                onClick={() => {
                  if (!title) {
                    alert("Entrez au moins le titre pour prévisualiser l'annonce.");
                    return;
                  }
                  alert(`Aperçu Prestige ouvert :\n- Titre : ${title}\n- Prix : ${price} €\n- Surface : ${surface} m²`);
                }}
                className="px-6 py-3 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                Aperçu de l'Annonce
              </button>

              <button
                type="button"
                id="btn-publish"
                onClick={() => handleSubmitListing('active')}
                className="px-7 py-3 bg-[#9C4323] hover:bg-[#85351a] text-[#FBF9F4] font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 group"
              >
                Publier Immédiatement
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {listingSubTab === 'status' && (
          <motion.div
            key="status-sim"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header + Demo Toggles */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2F2B28] tracking-tight">
                  Listing Status & Fault Simulation
                </h2>
                <p className="text-sm text-[#8E8071] font-sans">
                  Observez comment l'application gère les pannes réseaux et les états de base de données vides.
                </p>
              </div>

              {/* Demo Buttons */}
              <div className="bg-[#EFE7DD] p-1.5 rounded-xl border border-[#DCD0C3] flex gap-1 self-start sm:self-center">
                <button
                  id="btn-status-normal"
                  onClick={() => setStatusDemoMode('normal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusDemoMode === 'normal' 
                      ? 'bg-white text-[#9C4323] shadow-sm' 
                      : 'text-[#6A6055] hover:text-[#2F2B28]'
                  }`}
                >
                  Normal
                </button>
                <button
                  id="btn-status-empty"
                  onClick={() => setStatusDemoMode('empty')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusDemoMode === 'empty' 
                      ? 'bg-white text-[#9C4323] shadow-sm' 
                      : 'text-[#6A6055] hover:text-[#2F2B28]'
                  }`}
                >
                  View Empty
                </button>
                <button
                  id="btn-status-error"
                  onClick={() => setStatusDemoMode('error')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    statusDemoMode === 'error' 
                      ? 'bg-white text-[#9C4323] shadow-sm' 
                      : 'text-[#6A6055] hover:text-[#2F2B28]'
                  }`}
                >
                  View Error
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {statusDemoMode === 'empty' && (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white p-12 text-center rounded-3xl border border-[#E8DFC2]/30 shadow-sm space-y-6 flex flex-col items-center"
                >
                  {/* Sun shadow isometric vector illustration mimicking screen 6 */}
                  <div className="relative w-48 h-40 bg-[#FAF4ED] rounded-2xl flex items-center justify-center overflow-hidden border border-[#EACEC0]/20 shadow-inner">
                    <svg className="w-36 h-36 text-stone-300" viewBox="0 0 100 100" fill="none">
                      {/* Isometric blocks drawing */}
                      <polygon points="50,15 85,32 50,50 15,32" fill="#EADED2" />
                      <polygon points="50,50 85,32 85,72 50,90" fill="#DFCEB8" />
                      <polygon points="50,50 15,32 15,72 50,90" fill="#EFE5D9" />
                      {/* Direct sun shadow projection */}
                      <polygon points="50,50 62,44 62,84 50,90" fill="#2A2522" fillOpacity="0.08" />
                      {/* Windows elements */}
                      <rect x="25" y="45" width="6" height="15" fill="#FAF5F0" transform="skewY(-15) uppercase" />
                      <rect x="68" y="47" width="6" height="15" fill="#FAF5F0" transform="skewY(15) uppercase" />
                    </svg>
                  </div>

                  <div className="max-w-md space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#2F2B28]">
                      Prêt pour votre première inscription ?
                    </h3>
                    <p className="text-sm text-[#8E8071] leading-relaxed">
                      Votre portefeuille est actuellement vide. Commencez à bâtir votre collection de propriétés d'exception pour les présenter à vos clients privilégiés.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      id="empty-action-add"
                      onClick={() => setListingSubTab('create')}
                      className="px-5 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      Ajouter une propriété
                    </button>
                    <button
                      id="empty-action-import"
                      onClick={() => alert("Simulation d'importation csv/xml d'annonces.")}
                      className="px-5 py-2.5 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] text-xs font-semibold rounded-xl transition-all cursor-pointer"
                    >
                      Importer des données
                    </button>
                  </div>
                </motion.div>
              )}

              {statusDemoMode === 'error' && (
                <motion.div
                  key="error-state"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-[#FFF6F3] p-12 text-center rounded-3xl border border-red-100 shadow-sm space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center animate-pulse">
                      <WifiOff className="w-7 h-7" />
                    </div>
                  </div>

                  <div className="max-w-md space-y-2">
                    <span className="inline-block px-2.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold font-mono uppercase rounded-full">
                      Erreur de connexion
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2F2B28] mt-1">
                      Oups ! Impossible de charger les données
                    </h3>
                    <p className="text-sm text-[#6A6055] leading-relaxed">
                      Nous avons rencontré un problème lors de la récupération de vos listes de propriétés. Cela peut être dû à une interruption momentanée de votre connexion ou à une maintenance de nos serveurs.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      id="error-action-retry"
                      onClick={() => setStatusDemoMode('normal')}
                      className="px-5 py-2.5 bg-[#9C4323] hover:bg-[#85351a] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Réessayer maintenant
                    </button>
                    <button
                      id="error-action-support"
                      onClick={() => alert("Signalement envoyé à l'équipe tech.")}
                      className="px-5 py-2.5 border border-[#E8DFC2] text-[#6A6055] hover:bg-[#F3ECE5] text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Headphones className="w-3.5 h-3.5" />
                      Contacter le support
                    </button>
                  </div>
                </motion.div>
              )}

              {statusDemoMode === 'normal' && (
                <motion.div
                  key="normal-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Active list grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {listings.map((prop) => (
                      <div key={prop.id} className="bg-white rounded-3xl border border-[#E8DFC2]/30 shadow-sm overflow-hidden flex flex-col justify-between group">
                        <div>
                          <div className="h-56 relative overflow-hidden bg-stone-100">
                            <img 
                              src={prop.coverImage} 
                              alt={prop.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className={`px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-lg uppercase shadow ${
                                prop.status === 'active' ? 'bg-[#9C4323] text-white' : 'bg-[#E3D3C1] text-[#2F2B28]'
                              }`}>
                                {prop.status === 'active' ? 'Publiée' : 'Brouillon'}
                              </span>
                            </div>
                            
                            <button
                              id={`delete-prop-btn-${prop.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                if(confirm("Voulez-vous vraiment supprimer cette annonce exclusive ?")) {
                                  onDeleteListing(prop.id);
                                }
                              }}
                              className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-red-50 text-red-700 hover:text-red-800 rounded-xl transition-colors shadow"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="p-6 space-y-3">
                            <p className="text-xs text-[#8E8071] font-medium flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#9C4323]" />
                              {prop.city} — {prop.exactAddress}
                            </p>
                            <h4 className="font-serif text-lg font-bold text-[#2F2B28] line-clamp-1">{prop.title}</h4>
                            <p className="text-xs text-[#6A6055] line-clamp-2">{prop.description}</p>
                          </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-[#F3ECE5] mt-4 flex justify-between items-center bg-[#FDFBF7]/80">
                          <div>
                            <p className="text-[10px] uppercase font-bold text-[#8E8071] tracking-wider leading-none">Valeur Prestige</p>
                            <p className="text-base font-serif font-black text-[#9C4323] mt-1">
                              {prop.price.toLocaleString('fr-FR')} {prop.city.includes('York') ? '$' : '€'}
                            </p>
                          </div>
                          
                          <div className="text-right text-[10px] text-[#8E8071] font-mono">
                            <p>Surface : {prop.surface} m²</p>
                            <p>Créée : {prop.createdDate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Status panel as shown in screen 6 */}
            <div id="status-bottom-stats" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-[#FAF5EF] p-5 rounded-2xl border border-[#E8DFC2]/30 flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8E8071]">Total Active</span>
                <span className="text-3xl font-serif font-bold text-[#2F2B28] mt-1">
                  {statusDemoMode === 'normal' ? listings.filter(l => l.status === 'active').length : 0}
                </span>
              </div>
              <div className="bg-[#FAF5EF] p-5 rounded-2xl border border-[#E8DFC2]/30 flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8E8071]">Pending Reviews</span>
                <span className="text-3xl font-serif font-bold text-[#2F2B28] mt-1">
                  {statusDemoMode === 'normal' ? listings.filter(l => l.status === 'draft').length : 0}
                </span>
              </div>
              <div className="bg-[#FAF5EF] p-5 rounded-2xl border border-[#E8DFC2]/30 flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8E8071]">Success Rate</span>
                <span className="text-3xl font-serif font-bold text-[#2F2B28] mt-1">
                  {statusDemoMode === 'normal' ? '100%' : '--%'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
