
import React, { useState, useRef, useEffect } from 'react';
import AmenitiesModal from '../components/AmenitiesModal';

const PropertyDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SPACE');
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const spaceRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const quoteFormRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (tab: string, ref: React.RefObject<HTMLDivElement | null>) => {
    setActiveTab(tab);
    if (ref.current) {
      const yOffset = -220; 
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleRequestQuote = () => {
    setShowQuoteForm(true);
    // Timeout to allow the element to render before scrolling
    setTimeout(() => {
      if (quoteFormRef.current) {
        quoteFormRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const roomCards = [
    {
      title: "MASTER ROOM WITH TERRACE AND SEA VIEW",
      desc: "Private Room with Private Bathroom",
      bed: "Double",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600"
    },
    {
      title: "LARGE DOUBLE ROOM ENSUITE WITH TERRACE AND SEA VIEW",
      desc: "Private Room with Private Bathroom",
      bed: "Double",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600"
    },
    {
      title: "DOUBLE ROOM ENSUITE WITH BALCONY AND SEA VIEW",
      desc: "Private Room with Private Bathroom",
      bed: "Double",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600"
    },
    {
      title: "DOUBLE ROOM ENSUITE WITH SEA VIEW",
      desc: "Private Room with Private Bathroom",
      bed: "Double",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600"
    },
    {
      title: "DOUBLE ROOM ENSUITE",
      desc: "Private Room with Private Bathroom",
      bed: "Double",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600"
    }
  ];

  return (
    <div className="fade-in bg-white min-h-screen">
      <div className="bg-[#FAF9F6]">
        {/* Title Area */}
        <header className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
          <p className="font-condensed font-black text-[11px] md:text-[13px] tracking-widest text-primary/40 uppercase mb-4">BY OUTSITE</p>
          <h1 className="text-5xl md:text-[6.5rem] font-display text-primary leading-none tracking-tight mb-8 uppercase">Ibiza - Es Canar</h1>
          <div className="flex items-center gap-6 text-[14px] font-sans font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary FILL">star</span>
              <span className="font-bold text-primary">4.3</span>
              <span className="opacity-60">(18 reviews)</span>
            </div>
            <span className="opacity-20">•</span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Art Deco Beach House • Relaxed Balearic Vibes • Ocean Views</span>
          </div>
        </header>

        {/* Gallery Section */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12">
           <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 aspect-[16/9] md:aspect-[21/9]">
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Ibiza Main" />
                 <button className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary shadow-sm hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-sm">grid_view</span> See all photos
                 </button>
              </div>
              <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="overflow-hidden rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors cursor-pointer" />
              </div>
           </div>
        </section>

        {/* Floating Booking Bar */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-12">
          <div className="bg-white border border-gray-100 rounded-sm flex items-stretch w-full max-w-[1100px] shadow-[0_15px_60px_rgba(0,0,0,0.06)] overflow-hidden h-[85px] mx-auto">
            <div className="flex-[1.2] px-8 flex flex-col justify-center border-r border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
              <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Location</label>
              <span className="text-[14px] font-sans font-bold text-primary truncate">Ibiza - Es Canar</span>
            </div>
            <div className="flex-1 px-8 flex flex-col justify-center border-r border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
              <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Check-in</label>
              <span className="text-[14px] font-sans font-bold text-gray-300">Add dates</span>
            </div>
            <div className="flex-1 px-8 flex flex-col justify-center border-r border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
              <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Check-out</label>
              <span className="text-[14px] font-sans font-bold text-gray-300">Add dates</span>
            </div>
            <div className="flex-1 px-8 flex flex-col justify-center hover:bg-gray-50 cursor-pointer transition-colors group">
              <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Guests</label>
              <span className="text-[14px] font-sans font-bold text-primary">One guest</span>
            </div>
            <div className="p-2 flex items-center justify-center pr-4">
              <button className="bg-primary text-white w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-black transition-all shadow-lg active:scale-95 group">
                <span className="material-symbols-outlined text-[24px]">search</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Tab Navigation Navigation (Sticky) */}
      <nav className="border-b border-gray-100 sticky top-[75px] md:top-[95px] z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex gap-10">
           {['SPACE', 'ROOMS & PRICES', 'EXPERIENCE', 'LOCATION', 'REVIEWS', 'THINGS TO KNOW'].map(tab => (
             <button 
               key={tab} 
               onClick={() => scrollToSection(tab, tab === 'SPACE' ? spaceRef : tab === 'ROOMS & PRICES' ? roomsRef : tab === 'EXPERIENCE' ? experienceRef : locationRef)}
               className={`text-[11px] font-condensed font-black uppercase tracking-[0.2em] py-8 border-b-2 whitespace-nowrap transition-all ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-300 hover:text-primary'}`}
             >
               {tab}
             </button>
           ))}
        </div>
      </nav>

      {/* Detailed Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 space-y-48">
        
        {/* Space Section */}
        <section ref={spaceRef} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <p className="font-condensed font-black text-[13px] tracking-[0.2em] text-primary/40 uppercase mb-8">THE SPACE</p>
              <h2 className="text-5xl md:text-6xl font-display text-primary leading-[0.9] tracking-tighter italic">
                Ibizan escape with island views.
              </h2>
            </div>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed max-w-xl">
              A breezy, modern getaway with wide Mediterranean views. Multiple terraces and sea-facing balconies overlook the Es Canar — the ideal setting for sunset drinks with new friends. During the day, stay cool in the air-conditioned workspace or pop into one of the cafes nearby.
            </p>
          </div>

          <div className="space-y-16">
            <h3 className="text-[14px] font-condensed font-black text-primary uppercase tracking-[0.2em]">What's included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
               <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">wifi</span>
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold text-primary">High-Speed Wi-Fi</h4>
                    <p className="text-[13px] text-gray-400 font-sans font-light leading-relaxed">Reliable, fast internet throughout the house — perfect for calls, coworking, and streaming.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">check_circle</span>
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold text-primary">Self check-in</h4>
                    <p className="text-[13px] text-gray-400 font-sans font-light leading-relaxed">Flexible, easy arrivals with secure self check-in at all Outsite locations.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">groups</span>
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold text-primary">Community Events</h4>
                    <p className="text-[13px] text-gray-400 font-sans font-light leading-relaxed">Join weekly activities, meet fellow members, and connect with new people wherever you are.</p>
                  </div>
               </div>
            </div>
            <button 
              onClick={() => setIsAmenitiesOpen(true)} 
              className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-condensed font-black uppercase tracking-[0.15em] hover:bg-gray-800 transition-all shadow-sm active:scale-95"
            >
              Show all 12 amenities
            </button>
          </div>
        </section>

        {/* Rooms Section */}
        <section ref={roomsRef} className="py-24 border-t border-gray-100">
           <h2 className="text-4xl md:text-5xl font-display text-primary mb-12 tracking-tight italic">Rooms</h2>
           <p className="text-[13px] font-sans font-medium text-gray-400 mb-12 flex items-center gap-2">
             <span className="material-symbols-outlined text-[18px]">bed</span> 25 Private Rooms with Private Bathroom
           </p>
           
           <div className="bg-[#FAF9F6] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 mb-16 rounded-sm">
              <div className="flex-1 border-r border-gray-200 pr-6 flex items-center gap-4 text-[13px] font-bold uppercase tracking-widest cursor-pointer">
                 <span className="material-symbols-outlined">calendar_today</span> Add dates → Add dates
              </div>
              <div className="flex-1 flex items-center gap-4 text-[13px] font-bold uppercase tracking-widest cursor-pointer">
                 <span className="material-symbols-outlined">person</span> One guest <span className="material-symbols-outlined ml-auto">expand_more</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {roomCards.map((room, i) => (
                <div key={i} className="flex flex-col group border-b border-gray-100 pb-12">
                   <div className="aspect-[16/10] overflow-hidden rounded-sm relative shadow-sm mb-8">
                      <img src={room.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={room.title} />
                      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined">chevron_left</span></button>
                         <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined">chevron_right</span></button>
                      </div>
                      <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md"><span className="material-symbols-outlined text-[18px]">grid_view</span></button>
                   </div>
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-[15px] font-condensed font-black text-primary leading-tight uppercase tracking-widest">{room.title}</h3>
                        <p className="text-[13px] text-gray-400 font-sans font-medium">{room.desc}</p>
                      </div>
                      <div className="flex items-center gap-6 text-[12px] text-gray-400 font-medium font-sans uppercase">
                        <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">king_bed</span> {room.bed}</div>
                        <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">groups</span> Sleeps {room.sleeps}</div>
                      </div>
                      <p className="text-[13px] text-gray-500 font-sans font-light leading-relaxed">
                        Large private room with one queen size bed, ensuite private bathroom, desk, clothing rack, living area and a rooftop terrace with sea view.
                      </p>
                      <div className="flex items-center gap-4 pt-4">
                        <button className="bg-white border border-gray-200 text-primary px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-50">Select Dates</button>
                        <p className="text-[11px] text-gray-400 font-sans">Select dates to see availability and detailed pricing</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-20 bg-[#DDE4E6] p-10 md:p-14 text-center space-y-4">
              <h4 className="text-[15px] font-condensed font-black text-primary uppercase tracking-[0.2em]">STAY LONGER, SAVE MORE</h4>
              <p className="text-[14px] text-primary/60 font-sans font-medium">Members save 15% on trips of 7+ nights, 30% on 30+ night trips and 35% on 60+ night trips.</p>
           </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-24 border-t border-gray-100 text-center">
           <p className="font-condensed font-black text-[11px] tracking-[0.2em] text-primary/40 uppercase mb-4">EXPERIENCE</p>
           <h2 className="text-5xl md:text-[5.5rem] font-display text-primary leading-[0.9] tracking-tighter mb-8 italic">
             Island Life in Spain
           </h2>
           <p className="text-[14px] text-gray-500 font-sans mb-20 uppercase tracking-widest">Remote work, real life in Ibiza</p>
           
           <div className="relative group overflow-hidden max-w-[1200px] mx-auto">
             <div className="flex gap-8 px-12">
                <div className="flex-1 space-y-12 text-left">
                   <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                      <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800" className="w-full h-full object-cover" alt="Cala Nova" />
                   </div>
                   <div className="space-y-4">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">NEAR + PLAY</p>
                      <h4 className="text-[20px] font-condensed font-black text-primary uppercase">CALA NOVA</h4>
                      <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                        No big breaks, but a mellow spot for paddleboard mornings or beginner surf 25 mins from Outsite.
                      </p>
                   </div>
                </div>
                <div className="flex-1 space-y-12 text-left">
                   <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                      <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800" className="w-full h-full object-cover" alt="Sa Talaia" />
                   </div>
                   <div className="space-y-4">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">EXPLORE OUTDOORS</p>
                      <h4 className="text-[20px] font-condensed font-black text-primary uppercase">HIKE TO SA TALAIA</h4>
                      <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                        Ibiza's highest point is worth the trip for 360 island views.
                      </p>
                   </div>
                </div>
             </div>
             <button className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"><span className="material-symbols-outlined">chevron_left</span></button>
             <button className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"><span className="material-symbols-outlined">chevron_right</span></button>
           </div>
        </section>

        {/* Location Section */}
        <section ref={locationRef} className="py-24 border-t border-gray-100 text-center">
           <p className="font-condensed font-black text-[11px] tracking-[0.2em] text-primary/40 uppercase mb-4">LOCATION</p>
           <h2 className="text-5xl md:text-6xl font-display text-primary leading-[0.9] tracking-tighter mb-12 italic">
             Chilled out coastal town in Ibiza
           </h2>
           <p className="text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10">
             Es Canar is a relaxed town that sits on a golden horseshoe shaped beach on Ibiza's east coast. Playa Es Canar is the closest beach, a 3-min walk from Outsite — perfect for morning dips or taking out a...
           </p>
           <button className="text-primary font-bold uppercase tracking-widest text-[11px] border-b-2 border-primary pb-1 flex items-center gap-2 mx-auto hover:opacity-70 transition-opacity">
              Read more <span className="material-symbols-outlined text-[16px]">expand_more</span>
           </button>
        </section>
      </div>

      {/* Groups & Teams Section */}
      <section className="flex flex-col md:flex-row border-t border-gray-100">
        <div className="flex-1 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Group having dinner at sunset" 
          />
        </div>
        <div className="flex-1 bg-[#F2EFE6] p-12 md:p-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-6xl md:text-8xl font-serif text-primary mb-8 lowercase italic tracking-tight leading-none">groups & teams</h2>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed mb-12 max-w-md">
            Looking for a space for a group of friends, family, or office? Request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-white/50 transition-all">
              Discover Outsite for teams
            </button>
            <button 
              onClick={handleRequestQuote}
              className="px-10 py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg"
            >
              Request a quote
            </button>
          </div>
        </div>
      </section>

      {/* Team Retreat Quote Form - Appears on Click */}
      {showQuoteForm && (
        <section ref={quoteFormRef} className="py-24 px-6 md:px-24 bg-[#FAF9F6] border-t border-gray-100 fade-in">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-left space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-primary italic lowercase tracking-tight leading-none">Get a Team Retreat Quote</h2>
              <p className="text-lg text-gray-500 font-sans font-light leading-relaxed max-w-2xl">
                Looking for a place to host your next company or team Retreat? Fill in the form below and we'll get back to you within two business days.
              </p>
            </div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">First Name*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Last Name*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Email*</label>
                  <input type="email" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Phone Number*</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Company Name*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Group Size*</label>
                  <input type="number" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest block mb-4">Preferred Location</label>
                <p className="text-[11px] text-gray-400 font-sans italic mb-6">Select more than one location to receive multiple quotes.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    { loc: 'Amsterdam', size: 'Up to 75 people' },
                    { loc: 'Paris', size: 'Up to 150 people' },
                    { loc: 'Ibiza - Es Canar', size: 'Up to 25 people' },
                    { loc: 'Marrakesh', size: 'Up to 20 people' },
                    { loc: 'San Francisco - Pacific Heights', size: 'Up to 9 people' },
                    { loc: 'Los Cabos', size: 'Up to 12 people' },
                    { loc: 'Mexico City - Roma Sur', size: 'Up to 35 people' },
                    { loc: 'Porto - Mouco', size: 'Up to 77 people' },
                    { loc: 'Basque Country - Bidart', size: 'Up to 15 people' },
                    { loc: 'Vienna', size: 'Up to 128 people' }
                  ].map((item, i) => (
                    <label key={i} className="flex items-start gap-4 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 border-gray-300 text-primary focus:ring-0 rounded-sm mt-1" />
                      <div className="space-y-0.5">
                        <span className="text-[14px] font-bold text-primary group-hover:text-primary/60 transition-colors">{item.loc}</span>
                        <p className="text-[11px] text-gray-400 font-sans">{item.size}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Other Locations</label>
                <input type="text" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Check In*</label>
                  <input type="date" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans uppercase text-[12px] text-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Check Out*</label>
                  <input type="date" className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans uppercase text-[12px] text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">What kind of sleeping arrangements do you need for your team (number of rooms and/or beds)?*</label>
                <textarea className="w-full bg-white border border-gray-200 py-4 px-6 h-40 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans resize-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">Can you give us more information about your company and the purpose of your team retreat?*</label>
                <textarea className="w-full bg-white border border-gray-200 py-4 px-6 h-40 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans resize-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">Do you have a budget in mind? If so, what is your budget per person per night?</label>
                <textarea className="w-full bg-white border border-gray-200 py-4 px-6 h-40 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white py-6 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[16px] hover:bg-black transition-colors shadow-2xl mt-12">
                Send
              </button>
            </form>
          </div>
        </section>
      )}

      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} />
      <div className="h-20"></div>
    </div>
  );
};

export default PropertyDetails;
