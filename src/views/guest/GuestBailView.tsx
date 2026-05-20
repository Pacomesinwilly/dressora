import React, { useState } from 'react';

export default function GuestBailView() {
  const [signatureDone, setSignatureDone] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="bg-[#FAF8F5] font-sans text-left space-y-6 max-w-2xl mx-auto pb-12">
      
      {/* Top Header - LuxeRent styling adapted to Terracotta */}
      <div className="flex items-center gap-3 pb-2 border-b border-stone-200">
        <button className="text-[#0055FF] font-bold text-xl">←</button>
        <h1 className="font-bold text-xl text-stone-900 flex-1">LuxeRent</h1>
        <div className="w-8 h-8 rounded-full bg-stone-300 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Blue Alert Banner */}
      <div className="bg-[#E6F0FF] rounded-xl p-5 flex items-start gap-4">
        <div className="p-2 bg-[#0055FF] rounded-full text-white shrink-0 mt-0.5">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <div>
          <h2 className="text-[#0044CC] font-bold text-base">Dossier validé</h2>
          <p className="text-stone-600 text-sm mt-1">Votre candidature a été acceptée. Veuillez signer le bail.</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex justify-between items-center px-2">
        <div className="w-1/3 text-center">
          <div className="h-1 bg-[#0055FF] rounded-full mx-1 mb-2"></div>
          <span className="text-xs font-bold text-[#0055FF]">Dossier</span>
        </div>
        <div className="w-1/3 text-center">
          <div className="h-1 bg-[#0055FF] rounded-full mx-1 mb-2"></div>
          <span className="text-xs font-bold text-[#0055FF]">Validation</span>
        </div>
        <div className="w-1/3 text-center">
          <div className="h-1 bg-[#0055FF] rounded-full mx-1 mb-2"></div>
          <span className="text-xs font-bold text-[#0055FF]">Signature</span>
        </div>
      </div>

      {/* Document Section */}
      <div className="pt-2 flex justify-between items-end">
        <h2 className="text-2xl font-bold text-stone-900">Bail de location</h2>
        <span className="text-xs font-bold text-stone-500">Version PDF - 12 pages</span>
      </div>

      <div className="bg-stone-100 rounded-2xl p-6 border border-stone-200 flex justify-center relative">
        <div className="bg-white w-full max-w-sm rounded-xl shadow-sm border border-stone-200 p-8 space-y-6">
          {/* Fake PDF skeleton */}
          <div className="h-4 w-1/2 bg-stone-200 rounded"></div>
          <div className="h-12 w-full bg-stone-100 rounded"></div>
          <div className="space-y-2 mt-6">
            <div className="h-2 w-full bg-stone-100 rounded"></div>
            <div className="h-2 w-5/6 bg-stone-100 rounded"></div>
            <div className="h-2 w-4/6 bg-stone-100 rounded"></div>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="h-24 flex-1 bg-stone-50 border border-stone-100 border-dashed rounded"></div>
            <div className="h-24 flex-1 bg-stone-50 border border-stone-100 border-dashed rounded"></div>
          </div>
          <div className="space-y-2 mt-6">
            <div className="h-2 w-full bg-stone-100 rounded"></div>
            <div className="h-2 w-3/4 bg-stone-100 rounded"></div>
          </div>
        </div>
        <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow border border-stone-100 text-[#0055FF] font-bold text-sm flex items-center gap-2">
          <span>↗</span> Agrandir
        </button>
      </div>

      {/* Signature Zone */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900">Zone de signature</h3>
        <p className="text-sm text-stone-500">Veuillez signer à l'intérieur du cadre ci-dessous à l'aide de votre doigt ou d'un stylet.</p>
        
        <div 
          className="h-48 border-2 border-dashed border-stone-200 rounded-xl bg-stone-50 flex items-center justify-center cursor-crosshair relative"
          onClick={() => setSignatureDone(true)}
        >
          {!signatureDone ? (
            <span className="text-4xl text-stone-300">✍️</span>
          ) : (
            <svg className="w-full h-full text-stone-800 p-4 opacity-50" viewBox="0 0 200 100">
              <path d="M 20 80 Q 50 10 100 50 T 180 20" fill="transparent" stroke="currentColor" strokeWidth="3" />
            </svg>
          )}
        </div>

        <div className="flex justify-between items-center text-sm">
          <button onClick={() => setSignatureDone(false)} className="text-red-500 font-bold flex items-center gap-1">
            <span>🗑</span> Effacer
          </button>
          <span className="text-emerald-500 font-bold text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Sécurisé par LuxeSign™
          </span>
        </div>
      </div>

      {/* Confirmation Checkbox */}
      <label className="flex items-start gap-4 cursor-pointer p-2">
        <input 
          type="checkbox" 
          checked={accepted} 
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-stone-300 accent-[#0055FF]" 
        />
        <span className="text-sm text-stone-600 leading-relaxed flex-1">
          Je certifie avoir pris connaissance des conditions générales du bail et accepte l'utilisation de la signature électronique conformément à la réglementation eIDAS.
        </span>
      </label>

      {/* Submit Button */}
      <button 
        disabled={!signatureDone || !accepted}
        onClick={() => alert("Signature confirmée ! Le bail est maintenant actif.")}
        className={`w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all ${signatureDone && accepted ? 'bg-[#0055FF] hover:bg-[#0044CC]' : 'bg-stone-300'}`}
      >
        Confirmer la signature ✓
      </button>

    </div>
  );
}
