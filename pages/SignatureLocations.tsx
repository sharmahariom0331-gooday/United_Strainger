
import React from 'react';

interface SignatureLocationsProps {
  onVisitHouseClick?: () => void;
}

const SignatureLocations: React.FC<SignatureLocationsProps> = ({ onVisitHouseClick }) => {
  const topGrid = [
    { city: 'Barcelona', area: 'Gothic Quarter', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600' },
    { city: 'Oaxaca City', area: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAJDpOUT5JRPhPVmMvB1w8QMEoZpzT9TdUt78ieqUPEx0kc0J2Men9NWNERvf58oMCnV2Y4uTLUIBSPTWZAnpLvGsTTgFJAMhg0JE6tQUnLHSNhP1aVGUJ_-wYXbPyh7MuOeEqOp8f5yqGlKe4TFByEIWNMkPqYTwzPJT5VJD9LfYkl2SZcMVsqm1LSfHip00RPhiZkDF5dsJDlU2qR7XeL8PCi_dNwtBX9uLgBz-KbUjk6E4qT9cIFmLnok18SK8iz-Zqf8RHmE' },
    { city: 'Ericeira', area: 'Praia do Sul', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600' },
    { city: 'Madeira', area: 'Ponta do Sol', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600' }
  ];

  const bottomGrid = [
    { city: 'Lisbon', area: 'Cais do Sodre', img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600' },
    { city: 'Mexico City', area: 'Roma Sur', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600' },
    { city: 'Bali', area: 'Pererenan', img: 'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=600' },
    { city: 'San Francisco', area: 'Mission', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600' }
  ];

  return (
    <div className="fade-in bg-white min-h-screen">
      {/* SECTION 2 (Top) - Black Hero Header */}
      <section className="bg-black text-white w-full py-32 md:py-52 flex flex-col items-center justify-center text-center px-6 pt-[140px]">
        <div className="max-w-[1400px]">
          <h1 className="font-condensed font-black tracking-tighter leading-[0.8] text-[15vw] md:text-[11.5rem] uppercase mb-16">
            Work anywhere.<br />
            <span className="italic">Live differently.</span>
          </h1>
          <p className="font-condensed font-black uppercase tracking-[0.4em] text-lg md:text-2xl text-white opacity-100 max-w-5xl leading-tight border-t-2 border-white/20 pt-10 mx-auto">
            EDITORIAL HOSPITALITY FOR THE GLOBAL CREATIVE CLASS.
          </p>
        </div>
      </section>

      {/* SECTION 1 (Below) - Signature Grid with specific Title */}
      <section className="bg-[#FAF9F6] py-24 pb-40">
        <div className="max-w-full mx-auto">
          {/* Header Area exactly as Screenshot Crop */}
          <div className="text-center mb-24 px-4 space-y-2">
             <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 normal-case tracking-normal">Signature Locations</h1>
             <div className="flex flex-col items-center">
                <h2 className="text-sm md:text-md font-display text-primary tracking-[0.4em] uppercase font-black italic mb-6">SIGNATURE</h2>
                <p className="text-[14px] md:text-[16px] text-gray-500 font-sans font-light max-w-lg leading-relaxed">
                  Homes designed by Outsite for remote work,<br className="hidden md:block" /> community and slow travel.
                </p>
             </div>
          </div>

          {/* Top Row Grid - Matched to images in first screenshot */}
          <div className="flex flex-col md:flex-row gap-[2px] mb-[2px]">
            {topGrid.map((loc, i) => (
              <div key={i} className="flex-1 relative group cursor-pointer overflow-hidden aspect-[4/5] md:h-[680px]">
                <img src={loc.img} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105" alt={loc.city} />
                
                {/* Navigation UI Mockups from screenshots */}
                {i === 0 && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-primary text-xl">chevron_left</span>
                  </div>
                )}
                {i === 3 && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  </div>
                )}

                {/* Specific Label per card */}
                <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                  <p className="text-[11px] font-condensed font-black uppercase tracking-[0.2em] leading-none">
                    {loc.city} {loc.area ? ` — ${loc.area}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row Grid - Matched to images in first screenshot */}
          <div className="flex flex-col md:flex-row gap-[2px]">
            {bottomGrid.map((item, i) => (
              <div key={i} className="flex-1 relative group cursor-pointer overflow-hidden aspect-[4/5] md:h-[580px]">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105" alt={item.city} />
                
                {/* Interaction UI */}
                {i === 0 && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">chevron_left</span>
                  </div>
                )}
                {i === 3 && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  </div>
                )}

                <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                  <p className="text-[11px] font-condensed font-black uppercase tracking-[0.2em] leading-none">
                    {item.city} — {item.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <button className="fixed bottom-10 right-10 bg-[#121212] text-white px-7 py-4 rounded-full shadow-2xl z-[500] hover:scale-105 transition-transform flex items-center gap-3 border border-white/10 group">
         <span className="material-symbols-outlined text-2xl font-light">chat_bubble</span>
         <span className="font-sans font-bold text-sm tracking-tight pr-1">Help</span>
         <div className="absolute -top-1 -right-1 bg-ace-orange w-3.5 h-3.5 rounded-full animate-pulse shadow-sm border-2 border-white"></div>
      </button>
    </div>
  );
};

export default SignatureLocations;
