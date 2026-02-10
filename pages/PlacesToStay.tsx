
import React, { useState } from 'react';

interface Property {
  id: number;
  location: string;
  name: string;
  city: string;
  rating: string | number;
  priceNightly: string;
  priceMonthly: string;
  image: string;
  type: 'SIGNATURE' | 'CURATED';
  isNew?: boolean;
  discount?: string;
  lat: number;
  lng: number;
}

const properties: Property[] = [
  { id: 1, location: "Costa Rica", name: "PLAYA", city: "SANTA TERESA", rating: 4.8, priceNightly: "$113", priceMonthly: "$3,450", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', discount: '10% OFF', lat: 9.641, lng: -85.170 },
  { id: 2, location: "Portugal", name: "GUINCHO", city: "CASCAIS", rating: 4.5, priceNightly: "$84", priceMonthly: "$2,012", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 38.729, lng: -9.472 },
  { id: 3, location: "United States", name: "CHELSEA", city: "NEW YORK", rating: 4.3, priceNightly: "$104", priceMonthly: "$2,324", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', discount: '30% OFF', lat: 40.746, lng: -74.001 },
  { id: 4, location: "United States", name: "ENCINITAS GRANDVIEW", city: "SAN DIEGO", rating: 4.8, priceNightly: "$145", priceMonthly: "$3,300", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 33.064, lng: -117.307 },
  { id: 5, location: "Sri Lanka", name: "WELIGAMA", city: "SRI LANKA", rating: "New", priceNightly: "$86", priceMonthly: "$2,003", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k", type: 'CURATED', isNew: true, lat: 5.972, lng: 80.428 },
  { id: 6, location: "United States", name: "ENCINITAS PONTO", city: "SAN DIEGO", rating: 4.3, priceNightly: "$145", priceMonthly: "$2,003", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 33.090, lng: -117.311 },
  { id: 7, location: "France", name: "BORDEAUX", city: "BORDEAUX", rating: 4.3, priceNightly: "$53", priceMonthly: "$1,328", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 44.837, lng: -0.579 },
  { id: 8, location: "Portugal", name: "SAGRES", city: "ALGARVE", rating: 4.4, priceNightly: "$66", priceMonthly: "$1,526", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 37.009, lng: -8.939 },
  { id: 9, location: "United States", name: "MISSION", city: "SAN FRANCISCO", rating: 4.6, priceNightly: "$150", priceMonthly: "$3,274", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 37.759, lng: -122.414 },
  { id: 10, location: "United States", name: "TRAVIS HEIGHTS", city: "AUSTIN", rating: 4.7, priceNightly: "$121", priceMonthly: "$2,605", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 30.247, lng: -97.740 },
  { id: 11, location: "Costa Rica", name: "MARAMAR", city: "SANTA TERESA", rating: 4.6, priceNightly: "$125", priceMonthly: "$2,889", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 9.642, lng: -85.172 },
  { id: 12, location: "Morocco", name: "MARRAKESH", city: "MARRAKESH", rating: 4.5, priceNightly: "$58", priceMonthly: "$2,074", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 31.629, lng: -7.981 },
  { id: 13, location: "Portugal", name: "MOUCO", city: "PORTO", rating: "New", priceNightly: "$56", priceMonthly: "$2,044", image: "https://images.unsplash.com/photo-1555854817-57739d8995a0?q=80&w=800&auto=format&fit=crop", type: 'CURATED', isNew: true, lat: 41.157, lng: -8.629 },
  { id: 14, location: "United States", name: "GOLDEN HILL", city: "SAN DIEGO", rating: 4.4, priceNightly: "$113", priceMonthly: "$2,044", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 32.721, lng: -117.142 },
  { id: 15, location: "Mexico", name: "OAXACA CITY", city: "MEXICO", rating: 4.7, priceNightly: "$57", priceMonthly: "$1,736", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAJDpOUT5JRPhPVmMvB1w8QMEoZpzT9TdUt78ieqUPEx0kc0J2Men9NWNERvf58oMCnV2Y4uTLUIBSPTWZAnpLvGsTTgFJAMhg0JE6tQUnLHSNhP1aVGUJ_-wYXbPyh7MuOeEqOp8f5yqGlKe4TFByEIWNMkPqYTwzPJT5VJD9LfYkl2SZcMVsqm1LSfHip00RPhiZkDF5dsJDlU2qR7XeL8PCi_dNwtBX9uLgBz-KbUjk6E4qT9cIFmLnok18SK8iz-Zqf8RHmE", type: 'SIGNATURE', lat: 17.073, lng: -96.726 },
  { id: 16, location: "Indonesia", name: "UBUD", city: "BALI", rating: "New", priceNightly: "$46", priceMonthly: "$1,837", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", type: 'CURATED', isNew: true, lat: -8.506, lng: 115.262 },
  { id: 17, location: "Portugal", name: "PRAIA DO SUL", city: "ERICEIRA", rating: 4.9, priceNightly: "$59", priceMonthly: "$1,454", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", type: 'SIGNATURE', lat: 38.963, lng: -9.418 },
  { id: 18, location: "Bulgaria", name: "SOFIA", city: "SOFIA", rating: "New", priceNightly: "$2,648", priceMonthly: "$2,648", image: "https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=800&auto=format&fit=crop", type: 'CURATED', isNew: true, lat: 42.697, lng: 23.321 }
];

interface PlacesToStayProps {
  onPropertyClick: () => void;
}

const PlacesToStay: React.FC<PlacesToStayProps> = ({ onPropertyClick }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="fade-in bg-white min-h-screen relative">
      {/* Top Banner (hidden on mobile) */}
      <div className="hidden md:flex bg-[#BCECE0] text-primary text-[12px] font-condensed font-black py-3 text-center uppercase tracking-wider items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[16px]">local_offer</span>
        10% OFF • FEBRUARY LAST MINUTE DEALS <span className="underline ml-1 cursor-pointer">Learn More</span>
      </div>

      {/* Page Header */}
      <section className="pt-12 md:pt-16 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-primary leading-tight tracking-tighter uppercase italic">
              Anywhere <span className="text-gray-400 font-sans text-sm md:text-lg font-medium ml-2 normal-case tracking-normal">(51 properties)</span>
            </h1>
            <p className="text-gray-400 text-[14px] font-sans font-light mt-2">
              Select your travel dates to see live availability and pricing across the collection.
            </p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] font-condensed pt-0.5">Filters</span>
          </button>
        </div>
      </section>

      {!showMap ? (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 pb-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {properties.map((prop) => (
            <div key={prop.id} className="group cursor-pointer flex flex-col" onClick={onPropertyClick}>
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-6 shadow-sm">
                <img src={prop.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={prop.name} />
                
                {/* Badges Layout matching screenshot */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-2.5 py-1 text-[9px] font-condensed font-black uppercase tracking-widest rounded-sm shadow-sm ${prop.type === 'SIGNATURE' ? 'bg-[#E6B48F] text-white' : 'bg-[#BCECE0] text-primary'}`}>
                    {prop.type}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  {prop.discount && (
                    <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                       <span className="text-[9px] font-black uppercase font-condensed tracking-widest text-primary leading-none">● {prop.discount}</span>
                    </div>
                  )}
                  {prop.isNew && (
                    <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#FF8F42]" />
                       <span className="text-[9px] font-black uppercase font-condensed tracking-widest text-primary leading-none">NEW</span>
                    </div>
                  )}
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[0, 1, 2, 3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white shadow-sm' : 'bg-white/40'}`} />)}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[18px] font-condensed font-black text-primary leading-tight uppercase tracking-tight">
                      {prop.city} — {prop.name}
                    </h3>
                    <p className="text-[13px] text-gray-500 font-sans font-light uppercase tracking-widest mt-1">{prop.location}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {typeof prop.rating === 'string' ? (
                      <span className="text-[11px] font-bold text-[#FF8F42] uppercase tracking-wider flex items-center gap-1">● {prop.rating}</span>
                    ) : (
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] FILL text-primary">star</span>
                        <span className="text-[13px] font-bold font-sans">{prop.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-50 mt-4">
                  <span className="text-[15px] font-sans font-light text-primary">
                    From <span className="font-bold">{prop.priceNightly}</span>/night - <span className="font-bold">{prop.priceMonthly}</span>/month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Map View Integration Mockup */
        <div className="w-full h-[calc(100vh-160px)] relative bg-[#E5E3DF] overflow-hidden animate-in fade-in duration-500">
           <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.17,41.38,2/1200x800?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwMHgyeG84dXYycHBoZ3oifQ.rJcP_RA_94y-uI7Y9yv44A')] bg-cover bg-center" />
           {properties.map((prop, idx) => (
             <div key={prop.id} className="absolute animate-in zoom-in duration-500" style={{ top: `${15 + (idx * 8)}%`, left: `${10 + (idx * 12)}%` }}>
                <button onClick={onPropertyClick} className="bg-white border-2 border-primary rounded-full px-4 py-1.5 shadow-2xl flex items-center gap-2 hover:scale-110 active:scale-95 transition-all group">
                   <span className="text-[13px] font-sans font-black text-primary leading-none">{prop.priceNightly}</span>
                   <div className="w-8 h-8 rounded-full overflow-hidden hidden group-hover:block transition-all animate-in slide-in-from-left-2 border border-gray-100">
                      <img src={prop.image} className="w-full h-full object-cover" />
                   </div>
                </button>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary mx-auto"></div>
             </div>
           ))}
        </div>
      )}

      {/* Floating Booking Search Bar at Bottom matching screenshot design */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[250] w-full max-w-[1000px] px-6">
        <div className="bg-white shadow-[0_15px_60px_rgba(0,0,0,0.15)] rounded-full p-2 flex items-center border border-gray-100 backdrop-blur-md bg-white/95">
          <div className="flex flex-1 divide-x divide-gray-100">
            <div className="px-8 flex-1 flex flex-col justify-center cursor-pointer hover:bg-gray-50/50 rounded-l-full transition-colors h-14">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Location</span>
              <span className="text-[13px] font-bold text-primary">Anywhere</span>
            </div>
            <div className="px-8 flex-1 flex flex-col justify-center cursor-pointer hover:bg-gray-50/50 transition-colors h-14">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Check-in</span>
              <span className="text-[13px] font-bold text-gray-300">Add dates</span>
            </div>
            <div className="px-8 flex-1 flex flex-col justify-center cursor-pointer hover:bg-gray-50/50 transition-colors h-14">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Check-out</span>
              <span className="text-[13px] font-bold text-gray-300">Add dates</span>
            </div>
            <div className="px-8 flex-1 flex flex-col justify-center cursor-pointer hover:bg-gray-50/50 transition-colors h-14">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Guests</span>
              <span className="text-[13px] font-bold text-primary flex items-center justify-between">One guest <span className="material-symbols-outlined text-[18px] text-gray-400">expand_more</span></span>
            </div>
          </div>
          <button className="bg-black w-14 h-14 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-lg active:scale-95 ml-2">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
        </div>
      </div>

      {/* Floating Map/List Toggle */}
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[240]">
        <button 
          onClick={() => setShowMap(!showMap)}
          className="bg-black text-white px-8 py-3.5 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-[22px]">
            {showMap ? 'format_list_bulleted' : 'map'}
          </span>
          <span className="font-condensed font-black text-[15px] uppercase tracking-[0.2em] pt-0.5">
            {showMap ? 'List' : 'Map'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlacesToStay;
