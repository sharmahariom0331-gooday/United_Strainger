
import React, { useState, useEffect } from 'react';
import { SIGNATURE_LOCATIONS, CURATED_LOCATIONS } from '../constants';

interface HomeProps {
  onPropertyClick: () => void;
  onBecomeMemberClick: () => void;
  onExploreAllClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onPropertyClick, onBecomeMemberClick, onExploreAllClick }) => {
  const [curatedIndex, setCuratedIndex] = useState(0);
  
  useEffect(() => {
    const curatedInterval = setInterval(() => {
      setCuratedIndex((prev) => (prev + 1) % CURATED_LOCATIONS.length);
    }, 5000);
    return () => clearInterval(curatedInterval);
  }, []);

  const whyCards = [
    {
      title: "COMMUNITY ON TAP",
      desc: "Meet a community of remote workers, choosing to live and work anywhere.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "FLEXIBLE STAYS, AMAZING DESTINATIONS",
      desc: "Stay from 3 nights to 3 months in the best destinations for remote workers.",
      img: "https://images.unsplash.com/photo-1543783230-278358633ef2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "KEEP YOUR ROUTINE, CHANGE THE VIEW",
      desc: "Keep your routine with yoga, surf, and fitness options in every location.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full bg-black overflow-hidden cursor-pointer" onClick={onPropertyClick}>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
          <source src="https://cdn.coverr.co/videos/coverr-walking-around-the-city-7679/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
          <div className="max-w-[1400px]">
            <h1 className="text-white font-condensed font-black tracking-tighter leading-[0.85] drop-shadow-2xl mb-8 md:mb-12 text-[15vw] md:text-[9vw] uppercase">
              Work anywhere.<br/><span className="italic">Live differently.</span>
            </h1>
            <p className="font-condensed font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-lg md:text-2xl text-white opacity-90 mx-auto max-w-4xl">
              EDITORIAL HOSPITALITY FOR THE GLOBAL CREATIVE CLASS.
            </p>
          </div>
        </div>
      </section>

      {/* Why United Strangers? Section */}
      <section className="py-24 md:py-36 bg-white overflow-hidden border-b border-ace-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <h2 className="text-5xl md:text-[5.5rem] font-serif text-primary mb-16 md:mb-24 tracking-tighter">Why United Strangers?</h2>
          
          <div className="flex gap-10 overflow-x-auto md:grid md:grid-cols-3 no-scrollbar pb-8 snap-x snap-mandatory">
            {whyCards.map((card, i) => (
              <div key={i} className="min-w-[85%] md:min-w-0 snap-center space-y-8">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm shadow-sm">
                   <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-condensed font-black uppercase tracking-tighter leading-none">{card.title}</h3>
                  <p className="text-lg md:text-2xl text-gray-500 font-sans font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Houses */}
      <section className="py-24 md:py-36 border-b border-ace-border bg-white">
        <div className="px-8 md:px-16 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-6 md:gap-10">
          <div>
            <span className="font-condensed font-black uppercase tracking-widest text-xl md:text-3xl mb-3 md:mb-8 block text-primary/60">Our Houses</span>
            <h2 className="font-condensed font-black tracking-tighter leading-[0.85] text-primary text-5xl md:text-[7rem] uppercase italic">Around the world.</h2>
          </div>
          <button onClick={onExploreAllClick} className="editorial-link !text-2xl">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-y border-ace-border divide-ace-border">
          {SIGNATURE_LOCATIONS.map((loc) => (
            <div key={loc.id} onClick={onPropertyClick} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-10 md:p-14 bg-white group-hover:bg-ace-gray-bg/20 transition-colors border-t border-ace-border min-h-[180px] md:min-h-[260px]">
                <span className="font-condensed font-black uppercase tracking-widest text-[12px] md:text-[14px] text-primary/40 mb-3 md:mb-6 block">{loc.city}</span>
                <h3 className="font-condensed font-black tracking-tighter group-hover:italic transition-all leading-none text-4xl md:text-6xl uppercase">{loc.name}</h3>
                <div className="mt-6">
                  <span className="editorial-link">Visit House</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURATED SECTION */}
      <section className="py-24 md:py-36 bg-background-beige border-b border-ace-border">
        <div className="text-center mb-16 px-8">
          <h2 className="text-5xl md:text-8xl font-condensed font-black italic mb-6 md:mb-8 tracking-[0.1em] md:tracking-[0.2em] uppercase">CURATED</h2>
          <p className="text-lg md:text-2xl font-sans font-light text-gray-500 max-w-4xl mx-auto leading-relaxed">
            See more of the world with United Strangers Curated, a selection of the best-in-class independent stays for remote workers.
          </p>
        </div>
        <div className="relative group overflow-hidden">
          <div className="flex gap-4 md:gap-6 transition-transform duration-1000 ease-in-out px-8 md:px-16"
            style={{ transform: `translateX(-${curatedIndex * (window.innerWidth < 768 ? 75 : 25)}%)` }}>
            {[
              { city: 'London', area: 'Canary Wharf', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600' },
              { city: 'Sofia', area: '', img: 'https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=600' },
              { city: 'Cape Town', area: 'Green Point', img: 'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=600' },
              { city: 'Bali', area: 'Ubud', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600' }
            ].map((loc, idx) => (
              <div key={idx} className="min-w-[75%] md:min-w-[24%] shrink-0 cursor-pointer relative" onClick={onPropertyClick}>
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={loc.img} className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105" alt={loc.city} />
                  <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white drop-shadow-xl">
                    <h4 className="text-3xl md:text-5xl font-condensed font-black uppercase tracking-tighter">{loc.city}</h4>
                    <span className="editorial-link !text-white !border-white text-[12px] mt-3 inline-block">Visit Location</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="py-24 md:py-40 px-8 md:px-24 bg-background-beige border-b border-ace-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-28">
          <div className="space-y-10 md:space-y-14">
            <div>
              <p className="text-[14px] font-condensed font-black text-gray-400 mb-4 md:mb-6 tracking-[0.2em] uppercase">JOIN THE CLUB</p>
              <h2 className="text-[56px] md:text-[100px] font-condensed font-black text-primary leading-[0.9] mb-8 md:mb-12 tracking-tighter uppercase italic">For people who live everywhere.</h2>
              <p className="text-xl md:text-2xl text-gray-500 font-sans font-light">
                The only Membership for remote workers around the world. Secure your place today.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white border border-black p-10 md:p-14 flex flex-col justify-between">
               <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-condensed font-black text-2xl">S</div>
                      <h4 className="text-[13px] font-black uppercase tracking-widest font-condensed">YEARLY</h4>
                    </div>
                    <div className="text-right">
                       <p className="text-4xl font-condensed font-black">$199</p>
                       <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest font-condensed">Yearly</p>
                    </div>
                  </div>
               </div>
               <button onClick={onBecomeMemberClick} className="w-full bg-black text-white py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] mt-10">Apply now</button>
            </div>
            <div className="flex-1 bg-white border border-black p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
               <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#EAB308] flex items-center justify-center font-condensed font-black text-2xl">S</div>
                      <h4 className="text-[13px] font-black uppercase tracking-widest font-condensed">LIFETIME</h4>
                    </div>
                    <div className="text-right">
                       <p className="text-4xl font-condensed font-black">$999</p>
                       <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest font-condensed">Once</p>
                    </div>
                  </div>
               </div>
               <button onClick={onBecomeMemberClick} className="w-full bg-black text-white py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] mt-10">Apply now</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Help Button */}
      <button className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-2xl z-[500] hover:scale-110 transition-transform flex items-center gap-2">
         <span className="material-symbols-outlined">chat_bubble</span>
         <span className="font-sans font-bold text-sm pr-2">Help</span>
      </button>
    </div>
  );
};

export default Home;
