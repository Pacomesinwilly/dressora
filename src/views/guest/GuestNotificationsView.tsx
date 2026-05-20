import React from 'react';

export default function GuestNotificationsView() {
  return (
    <div className="bg-[#F8F9FB] font-sans text-left space-y-6 max-w-2xl mx-auto pb-12 pt-4">
      
      {/* Top Header - Elevated Living styling */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-bold text-base text-stone-900">Elevated Living</h1>
        </div>
        <button className="text-[#0047FF] text-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        </button>
      </div>

      <div className="flex justify-between items-end pb-2">
        <div>
          <h2 className="text-3xl font-bold text-stone-900">Notifications</h2>
          <p className="text-sm text-stone-500 mt-1">Stay updated with your latest activities</p>
        </div>
        <button className="text-[#0047FF] font-bold text-sm text-right w-24">Mark all as read</button>
      </div>

      {/* PAYMENT REMINDERS */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block pl-1">PAYMENT REMINDERS</span>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex flex-col gap-4 relative">
          <div className="absolute right-4 top-5 w-2 h-2 rounded-full bg-[#0047FF]"></div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEF2FF] text-[#0047FF] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <div>
              <div className="flex justify-between items-center w-full pr-4">
                <h3 className="font-bold text-stone-900 text-sm">Rent Payment Due</h3>
                <span className="text-xs text-stone-400">2m ago</span>
              </div>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">Your payment for Suite 402 is due in 3 days. Ensure your wallet is funded.</p>
            </div>
          </div>
          <div className="flex gap-3 pl-16">
            <button className="px-5 py-2 bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-sm rounded-xl">Pay Now</button>
            <button className="px-5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm rounded-xl">Details</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
            <div className="flex justify-between items-center w-full">
              <h3 className="font-bold text-stone-900 text-sm">Utility Bill Confirmed</h3>
              <span className="text-xs text-stone-400">5h ago</span>
            </div>
            <p className="text-sm text-stone-500 mt-1 leading-relaxed">Transaction #4902 for electricity was successfully processed. View your receipt in the dashboard.</p>
          </div>
        </div>
      </div>

      {/* SCORE UPDATES */}
      <div className="space-y-3 pt-2">
        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block pl-1">SCORE UPDATES</span>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex gap-4 relative">
          <div className="absolute right-4 top-5 w-2 h-2 rounded-full bg-[#0047FF]"></div>
          <div className="w-12 h-12 rounded-full bg-[#E0FBE8] text-[#00C853] flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div>
            <div className="flex justify-between items-center w-full pr-4">
              <h3 className="font-bold text-stone-900 text-sm">Trust Score Increase</h3>
              <span className="text-xs text-stone-400">1d ago</span>
            </div>
            <p className="text-sm text-stone-600 mt-1 leading-relaxed">Great job! Your Trust Score has increased by 12 points following your consistent on-time payments.</p>
          </div>
        </div>
      </div>

      {/* CREDIT OFFERS */}
      <div className="space-y-3 pt-2">
        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block pl-1">CREDIT OFFERS</span>
        
        <div className="bg-white rounded-[24px] shadow-sm border border-stone-100 overflow-hidden">
          <div className="h-32 bg-stone-900 relative">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Penthouse" className="w-full h-full object-cover opacity-50" />
            <span className="absolute top-4 left-4 bg-[#FFD54F] text-stone-900 font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">EXCLUSIVE</span>
            <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-[#FFB300] text-2xl">⭐</span>
            </div>
          </div>
          <div className="p-6 pt-10 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-stone-900 text-sm">Upgrade Your Credit Limit</h3>
              <span className="text-xs text-stone-400">2d ago</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">Based on your recent rental history, you are eligible for a credit expansion up to $15,000.</p>
            <button className="w-full py-3.5 bg-[#111827] hover:bg-black text-white font-bold text-sm rounded-xl">Apply in 1-Click</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex gap-4">
          <div className="w-12 h-12 rounded-full bg-[#FFF8E1] text-[#FFB300] flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
          </div>
          <div>
            <div className="flex justify-between items-center w-full">
              <h3 className="font-bold text-stone-900 text-sm">Referral Bonus: $50 Credit</h3>
              <span className="text-xs text-stone-400">3d ago</span>
            </div>
            <p className="text-sm text-stone-600 mt-1 leading-relaxed">Invite a friend to Elevated Living and get $50 towards your next month's service fees.</p>
          </div>
        </div>
      </div>

      <div className="py-8 flex flex-col items-center justify-center text-stone-300">
        <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span className="text-xs">No older notifications</span>
      </div>

    </div>
  );
}
