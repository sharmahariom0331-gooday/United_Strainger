
import React, { useState } from 'react';
import WaitlistModal from '../components/WaitlistModal';

interface TripsProps {
  onTripDetailClick?: (location: string) => void;
  onStoryClick?: () => void;
}

const Trips: React.FC<TripsProps> = ({ onTripDetailClick, onStoryClick }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tripCalendar = [
    {
      id: 1,
      title: "THE COASTAL RETREAT",
      location: "SAGRES",
      desc: "Go off the beaten path and connect with nature in the Algarve.",
      dates: "Mar 29 → Apr 26, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 2,
      title: "DESERT & DESIGN",
      location: "MARRAKESH",
      desc: "Desert energy meets design-led calm.",
      dates: "Apr 26 → May 24, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 3,
      title: "SAN JUAN",
      location: "SAN JUAN",
      desc: "Sun, salsa, surf, soul. Explore the colorful streets of the oldest city in the US.",
      dates: "May 31 → Jun 14, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    },
    {
      id: 4,
      title: "SURF CAMP",
      location: "AGUADILLA",
      desc: "Surf. Sun. Slow mornings by the sea. The ultimate tropical productivity boost.",
      dates: "Jun 14 → Jun 28, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    }
  ];

  const handleButtonClick = (trip: any) => {
    if (trip.buttonText === "Join waitlist") {
      setIsWaitlistOpen(true);
    } else {
      onTripDetailClick?.(trip.location);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Hero Section - Video Background */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-surfing-the-waves-5627/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-white editorial-heading mb-6 leading-none !text-[12vw] md:!text-[9rem]">United Strangers Trips</h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl opacity-90 leading-relaxed font-display italic">
            Curated one-month journeys for remote professionals who work and live - anywhere.
          </p>
        </div>
      </section>

      {/* 2026 Trips Calendar */}
      <section className="py-24 px-6 md:px-24 bg-[#F9F7F2]">
        <h2 className="text-6xl font-display mb-20 tracking-tighter italic">2026 Trips Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 max-w-[1400px] mx-auto">
          {tripCalendar.map((trip) => (
            <div key={trip.id} className="group cursor-pointer" onClick={() => handleButtonClick(trip)}>
              <div className="aspect-[1.4/1] overflow-hidden mb-8 relative bg-gray-200 shadow-sm rounded-sm">
                <img src={trip.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={trip.title}/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-white font-condensed font-black text-7xl md:text-9xl tracking-tighter opacity-80 group-hover:opacity-100 transition-all drop-shadow-2xl">{trip.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="label-bold !text-xl tracking-widest">{trip.title}</h3>
                <p className="text-gray-500 font-sans font-light text-[15px] leading-relaxed max-w-lg">{trip.desc}</p>
                <div className="flex flex-col text-[14px] font-condensed font-black text-gray-400">
                  <span>{trip.dates}</span>
                  <span>{trip.nights}</span>
                </div>
                <div className="pt-4">
                  <button className={`w-full py-4 font-condensed font-black uppercase tracking-[0.2em] text-[11px] transition-all rounded-full ${trip.buttonType === 'solid' ? 'bg-primary text-white hover:bg-black' : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'}`}>{trip.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Community"/>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white p-12 md:p-16 max-w-2xl shadow-2xl rounded-sm border border-gray-100 text-center relative">
               <div className="flex justify-center mb-10">
                 <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl -mt-24 md:-mt-32" alt="Lane"/>
               </div>
               <p className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-display italic mb-10">
                 "I booked a month in Lisbon with United Strangers because I was tired of being alone — and somehow found the opposite of loneliness. I went from working in silence to sharing dinners, boat rides, and spontaneous beach days with people from all over the world. United Strangers didn't just give me a place to stay — it reminded me how good it feels to make community wherever you are."
               </p>
               <h5 className="label-bold !text-sm mb-1">LANE</h5>
               <p className="text-[11px] text-gray-400 font-condensed font-bold uppercase tracking-widest">Head of Content, Zapier</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-48 bg-[#FAF9F6]"></div>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default Trips;
