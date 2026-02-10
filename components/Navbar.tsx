
import React, { useState, useRef, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  onLocationsClick: (pinned: boolean) => void;
  onLocationsHover: (isOpen: boolean) => void;
  onTripsClick: () => void;
  onDealsClick: () => void;
  onWhatIsOutsiteClick: () => void;
  onGiftCardsClick: () => void;
  onBusinessClick: () => void;
  onTeamRetreatsClick: () => void;
  onRealEstatePartnersClick: () => void;
  onMembershipClick: () => void;
  onSignatureLocationsClick: () => void;
  onCuratedLocationsClick: () => void;
  onPlacesToStayClick: () => void;
  onHomeClick: () => void;
  isHome: boolean;
}

const BOOKING_CITIES = [
  'Athens', 'Barcelona', 'Lisbon', 'London', 'Madrid', 'Mexico City', 'New York', 'Paris', 'Rome'
];

const CalendarDropdown = ({ 
  selectedDay, 
  onSelect 
}: { 
  selectedDay: number; 
  onSelect: (day: number) => void 
}) => {
  const daysInMonth = 28;
  return (
    <div 
      className="absolute top-full left-0 right-0 md:left-[-1px] md:w-[calc(100%+2px)] bg-white border border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-[#222] text-white px-6 py-4 flex items-center justify-between border-b border-black">
        <div className="flex-1 text-center">
          <span className="font-condensed font-black text-2xl tracking-tighter uppercase">February 2026</span>
        </div>
        <span className="material-symbols-outlined text-[20px] cursor-pointer hover:opacity-70">chevron_right</span>
      </div>
      <div className="grid grid-cols-7 text-center pt-6 pb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <span key={d} className="font-condensed font-black text-base uppercase tracking-widest text-black">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 p-2 mb-4">
        {[31, 1].map((d, i) => (
          <div key={`prev-${i}`} className="h-12 flex items-center justify-center text-gray-200 font-sans text-lg">{i === 0 ? 31 : i}</div>
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const isSelected = day === selectedDay;
          return (
            <button
              key={day}
              onClick={() => onSelect(day)}
              className={`h-12 w-full flex items-center justify-center font-sans text-lg transition-colors
                ${isSelected ? 'bg-[#222] text-white font-bold' : 'text-black hover:bg-gray-100'}
              `}
            >
              {day}
            </button>
          );
        })}
        {[...Array(5)].map((_, i) => (
          <div key={`next-${i}`} className="h-12 flex items-center justify-center text-gray-200 font-sans text-lg">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ 
  onLocationsClick, onLocationsHover, onTripsClick, onDealsClick, onWhatIsOutsiteClick,
  onMembershipClick, onSignatureLocationsClick, onCuratedLocationsClick,
  onPlacesToStayClick, onHomeClick, onBusinessClick, isHome,
  onGiftCardsClick, onRealEstatePartnersClick, onTeamRetreatsClick
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [checkInDay, setCheckInDay] = useState(7);
  const [checkOutDay, setCheckOutDay] = useState(8);
  
  // New states for Business dropdown
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);
  const [isBusinessPinned, setIsBusinessPinned] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsBusinessPinned(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => setActiveDropdown(activeDropdown === name ? null : name);

  const LogoBox = ({ color = "black", size = "normal" }: { color?: string, size?: "normal" | "large" }) => (
    <div className={`border-[3px] border-${color} p-1 inline-block shrink-0`}>
      <h2 className={`font-condensed font-black ${size === 'large' ? 'text-2xl' : 'text-xl'} leading-none text-center tracking-tighter text-${color} uppercase`}>UNITED<br/>STRANGERS</h2>
    </div>
  );

  const handleBusinessClick = () => {
    setIsBusinessPinned(!isBusinessPinned);
  };

  const showBusinessDropdown = isBusinessHovered || isBusinessPinned;

  return (
    <nav className="relative w-full z-[100] bg-white border-b border-black text-black" ref={navRef}>
      <div className="bg-[#BCECE0] text-primary text-[12px] font-condensed font-black py-3 text-center uppercase tracking-wider flex items-center justify-center gap-2 md:hidden">
        <span className="material-symbols-outlined text-[16px]">local_offer</span>
        10% OFF • FEBRUARY LAST MINUTE DEALS <span className="underline ml-1 cursor-pointer">Learn More</span>
      </div>

      <div className="flex h-[75px] md:h-[95px] items-stretch border-b border-black">
        <div onClick={onHomeClick} className="w-[150px] md:w-[200px] shrink-0 border-r border-black flex items-center justify-center cursor-pointer p-2">
          <LogoBox />
        </div>

        <div className="hidden lg:flex flex-1 items-stretch">
          <div className="flex items-center px-12 gap-12 border-r border-black">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onLocationsClick(true)}
              onMouseEnter={() => onLocationsHover(true)}
              onMouseLeave={() => onLocationsHover(false)}
            >
              <span className="material-symbols-outlined text-[20px] font-black group-hover:translate-y-1 transition-transform">expand_more</span>
              <span className="font-condensed font-black text-[30px] uppercase tracking-tighter">Locations</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[14px] font-black font-condensed uppercase tracking-widest">EN</span>
              <span className="material-symbols-outlined text-[18px] font-black">expand_more</span>
            </div>
          </div>

          <div className="flex-1 flex items-stretch divide-x divide-black bg-[#EAE8E4]/50">
            <div onClick={() => toggleDropdown('booking-location')} className={`flex-1 px-8 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'booking-location' ? 'bg-white' : ''}`}>
              <span className="booking-label">Location</span>
              <div className="flex items-center justify-between">
                 <span className="booking-value truncate font-sans font-bold">{selectedLocation || 'CHOOSE LOCATION *'}</span>
                 <span className="material-symbols-outlined text-[20px] font-black">expand_more</span>
              </div>
              {activeDropdown === 'booking-location' && (
                <div className="absolute top-full left-[-1px] w-[calc(100%+2px)] bg-white border border-black shadow-2xl z-[150]">
                  {BOOKING_CITIES.map((city) => (
                    <button key={city} onClick={(e) => { e.stopPropagation(); setSelectedLocation(city); setActiveDropdown(null); }}
                      className="w-full px-8 py-5 text-left text-[16px] font-condensed font-black hover:bg-gray-50 border-b border-gray-100 uppercase tracking-widest">
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div onClick={() => toggleDropdown('check-in')} className={`flex-1 px-8 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'check-in' ? 'bg-white' : ''}`}>
              <span className="booking-label">Check In</span>
              <span className="booking-value font-sans font-bold">February {checkInDay}, 2026</span>
              {activeDropdown === 'check-in' && <CalendarDropdown selectedDay={checkInDay} onSelect={(day) => { setCheckInDay(day); setActiveDropdown(null); }} />}
            </div>

            <div onClick={() => toggleDropdown('check-out')} className={`flex-1 px-8 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'check-out' ? 'bg-white' : ''}`}>
              <span className="booking-label">Check Out</span>
              <span className="booking-value font-sans font-bold">February {checkOutDay}, 2026</span>
              {activeDropdown === 'check-out' && <CalendarDropdown selectedDay={checkOutDay} onSelect={(day) => { setCheckOutDay(day); setActiveDropdown(null); }} />}
            </div>

            <div className="flex-1 px-8 flex flex-col justify-center cursor-pointer hover:bg-white">
              <span className="booking-label">Guests</span>
              <span className="booking-value font-sans font-bold">1 Adult, 0 Children</span>
            </div>

            <button className="bg-ace-orange px-12 flex items-center justify-center hover:bg-orange-500 transition-colors shrink-0">
              <span className="font-condensed font-black text-2xl uppercase tracking-tighter text-black leading-tight">BOOK<br/>NOW</span>
            </button>
          </div>
        </div>

        <div className="lg:hidden flex-1 flex items-center justify-end px-8 gap-6">
          <button onClick={() => setIsMobileMenuOpen(true)} className="flex items-center gap-3 bg-white border border-gray-300 rounded-full pl-4 pr-5 py-2 shadow-sm">
            <span className="material-symbols-outlined text-[24px] text-gray-600">person</span>
            <span className="material-symbols-outlined text-[24px] text-gray-600">menu</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex bg-white h-[65px] items-center px-14 gap-12 border-b border-black">
        <button 
          onClick={() => onLocationsClick(true)} 
          onMouseEnter={() => onLocationsHover(true)}
          onMouseLeave={() => onLocationsHover(false)}
          className="nav-item-bottom"
        >
          LOCATIONS <span className="material-symbols-outlined text-[20px] font-black">expand_more</span>
        </button>
        <button onClick={onTripsClick} className="nav-item-bottom">TRIPS</button>
        <button onClick={onDealsClick} className="nav-item-bottom">DEALS</button>
        <button onClick={onWhatIsOutsiteClick} className="nav-item-bottom">WHAT IS UNITED STRANGERS <span className="material-symbols-outlined text-[20px] font-black">expand_more</span></button>
        
        {/* Updated FOR BUSINESS with Hover and Pinned State */}
        <div className="relative h-full flex items-center">
          <button 
            onMouseEnter={() => setIsBusinessHovered(true)}
            onMouseLeave={() => setIsBusinessHovered(false)}
            onClick={handleBusinessClick}
            className={`nav-item-bottom h-full ${showBusinessDropdown ? 'text-blue-600' : ''}`}
          >
            FOR BUSINESS <span className="material-symbols-outlined text-[20px] font-black">expand_more</span>
          </button>

          {showBusinessDropdown && (
            <div 
              onMouseEnter={() => setIsBusinessHovered(true)}
              onMouseLeave={() => setIsBusinessHovered(false)}
              className="absolute top-[calc(100%+1px)] left-0 min-w-[280px] bg-white border border-black shadow-[0_15px_60px_rgba(0,0,0,0.15)] rounded-md py-6 z-[200] animate-in fade-in slide-in-from-top-2 duration-200"
            >
              {isBusinessPinned && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsBusinessPinned(false); }}
                  className="absolute top-3 right-3 text-gray-400 hover:text-black transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              )}
              <div className="flex flex-col">
                <button 
                  onClick={() => { onTeamRetreatsClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[17px] font-sans font-medium text-primary tracking-tight">Team Retreats</span>
                </button>
                <button 
                  onClick={() => { onBusinessClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[17px] font-sans font-medium text-primary tracking-tight">Business Memberships</span>
                </button>
                <button 
                  onClick={() => { onRealEstatePartnersClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[17px] font-sans font-medium text-primary tracking-tight">Real Estate Partners</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button onClick={onMembershipClick} className="nav-item-bottom border-b-2 border-black pb-1">BECOME A MEMBER</button>
      </div>
    </nav>
  );
};

export default Navbar;
