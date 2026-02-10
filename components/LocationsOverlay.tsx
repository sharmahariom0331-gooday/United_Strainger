
import React, { useState } from 'react';

interface LocationsOverlayProps {
  onClose: () => void;
  onCityClick: (city: string) => void;
  onExploreMapClick: () => void;
  isPinned?: boolean;
}

interface CityData {
  name: string;
  type: 's' | 'c';
}

interface CountryData {
  name: string;
  region: string;
  cities: CityData[];
}

const countriesData: CountryData[] = [
  // Europe Data
  {
    name: "Portugal",
    region: "Europe",
    cities: [
      { name: "Algarve - Sagres", type: "s" },
      { name: "Algarve - Vilamoura", type: "s" },
      { name: "Cascais - Guincho", type: "s" },
      { name: "Ericeira - Centro", type: "s" },
      { name: "Ericeira - Praia do Sul", type: "s" },
      { name: "Lisbon - Cais do Sodre", type: "s" },
      { name: "Lisbon - Intendente", type: "s" },
      { name: "Madeira - Ponta do Sol", type: "s" },
      { name: "Porto - Mouco", type: "c" }
    ]
  },
  {
    name: "France",
    region: "Europe",
    cities: [
      { name: "Bordeaux", type: "s" },
      { name: "Paris", type: "c" }
    ]
  },
  {
    name: "Austria",
    region: "Europe",
    cities: [{ name: "Vienna", type: "c" }]
  },
  {
    name: "Bulgaria",
    region: "Europe",
    cities: [{ name: "Sofia", type: "c" }]
  },
  {
    name: "Denmark",
    region: "Europe",
    cities: [{ name: "Copenhagen", type: "c" }]
  },
  {
    name: "Netherlands",
    region: "Europe",
    cities: [{ name: "Amsterdam", type: "c" }]
  },
  {
    name: "Spain",
    region: "Europe",
    cities: [
      { name: "Barcelona - Gothic Quarter", type: "s" },
      { name: "Ibiza - Es Canar", type: "s" }
    ]
  },
  {
    name: "United Kingdom",
    region: "Europe",
    cities: [
      { name: "London - Canary Wharf", type: "c" },
      { name: "London - Westbourne Park", type: "c" }
    ]
  },
  // Latin America Data
  {
    name: "Colombia",
    region: "Latin America",
    cities: [
      { name: "Medellín - El Poblado", type: "s" },
      { name: "Medellín - Manila", type: "s" }
    ]
  },
  {
    name: "Costa Rica",
    region: "Latin America",
    cities: [
      { name: "Playa Grande", type: "c" },
      { name: "Santa Teresa - Maramar", type: "s" },
      { name: "Santa Teresa - Playa", type: "s" }
    ]
  },
  {
    name: "Mexico",
    region: "Latin America",
    cities: [
      { name: "Los Cabos", type: "s" },
      { name: "Mexico City - Colonia San Miguel", type: "s" },
      { name: "Mexico City - Roma Sur", type: "s" },
      { name: "Oaxaca City", type: "s" }
    ]
  },
  {
    name: "Nicaragua",
    region: "Latin America",
    cities: [{ name: "San Juan del Sur", type: "s" }]
  },
  {
    name: "Puerto Rico",
    region: "Latin America",
    cities: [
      { name: "Puerto Rico - Aguadilla", type: "s" },
      { name: "Puerto Rico - Ocean Park", type: "s" }
    ]
  },
  // United States Data
  {
    name: "California",
    region: "United States",
    cities: [
      { name: "Los Angeles - Venice Beach Dell", type: "s" },
      { name: "Los Angeles - Venice Beach Lincoln", type: "s" },
      { name: "San Diego - Encinitas Avocado", type: "s" },
      { name: "San Diego - Encinitas Grandview", type: "s" },
      { name: "San Diego - Encinitas Ponto", type: "s" },
      { name: "San Diego - Golden Hill", type: "s" },
      { name: "San Francisco - Mission", type: "s" },
      { name: "San Francisco - Pacific Heights", type: "s" }
    ]
  },
  {
    name: "Colorado",
    region: "United States",
    cities: [
      { name: "Boulder - North Boulder", type: "s" }
    ]
  },
  {
    name: "New York",
    region: "United States",
    cities: [
      { name: "New York - Chelsea", type: "s" },
      { name: "New York - Manhattan Midtown", type: "s" }
    ]
  },
  {
    name: "Texas",
    region: "United States",
    cities: [
      { name: "Austin - Bouldin Creek", type: "s" },
      { name: "Austin - Travis Heights", type: "s" }
    ]
  },
  // Africa Data
  {
    name: "Morocco",
    region: "Africa",
    cities: [
      { name: "Marrakesh", type: "s" }
    ]
  },
  {
    name: "South Africa",
    region: "Africa",
    cities: [
      { name: "Cape Town - Camps Bay", type: "c" },
      { name: "Cape Town - Green Point", type: "c" }
    ]
  },
  // Asia Data (From newest screenshot)
  {
    name: "Indonesia",
    region: "Asia",
    cities: [
      { name: "Bali - Pererenan", type: "s" },
      { name: "Bali - Ubud", type: "c" }
    ]
  },
  {
    name: "Singapore",
    region: "Asia",
    cities: [
      { name: "Singapore", type: "c" }
    ]
  },
  {
    name: "Sri Lanka",
    region: "Asia",
    cities: [
      { name: "Sri Lanka - Weligama", type: "c" }
    ]
  }
];

const LocationsOverlay: React.FC<LocationsOverlayProps> = ({ onClose, onCityClick, onExploreMapClick, isPinned }) => {
  const [activeRegion, setActiveRegion] = useState('Europe');
  const regions = ["All", "Europe", "Latin America", "United States", "Africa", "Asia"];

  const filteredCountries = activeRegion === 'All' 
    ? countriesData 
    : countriesData.filter(c => c.region === activeRegion);

  return (
    <div 
      className={`fixed inset-0 z-[500] bg-black/30 backdrop-blur-[1px] flex justify-center items-start pt-24 px-4 overflow-hidden animate-in fade-in duration-200 ${isPinned ? 'pointer-events-auto' : 'pointer-events-none'}`} 
      onClick={onClose}
    >
      <div 
        className="bg-white shadow-2xl w-full max-w-[1400px] flex overflow-hidden h-[85vh] animate-in slide-in-from-top-4 duration-300 rounded-sm pointer-events-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        {isPinned && (
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 z-[210] bg-[#121212] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-black transition-all shadow-lg active:scale-90"
            title="Close"
          >
            <span className="material-symbols-outlined text-[15px]">close</span>
          </button>
        )}

        {/* Left Sidebar */}
        <div className="w-[300px] bg-white p-12 flex flex-col shrink-0 border-r border-gray-100">
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              {regions.map((region) => (
                <button 
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`block text-[18px] font-sans transition-colors text-left font-medium ${activeRegion === region ? 'text-primary border-b-2 border-primary w-fit pb-1 font-bold' : 'text-primary/70 hover:text-primary'}`}
                >
                  {region}
                </button>
              ))}
            </div>
            
            <button 
              onClick={onExploreMapClick}
              className="mt-12 bg-[#121212] text-white rounded-full px-10 py-4 text-[15px] font-bold tracking-tight hover:bg-black transition-all shadow-lg active:scale-95"
            >
              Explore on map
            </button>
          </div>

          {/* Legend Section */}
          <div className="pt-10 space-y-6 border-t border-gray-50">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-6 h-6 rounded-full bg-[#E6B48F] flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white text-[10px] font-bold font-sans">s</span>
              </div>
              <div className="leading-tight">
                <p className="text-[15px] font-bold text-primary font-sans">Signature</p>
                <p className="text-[13px] text-gray-400 font-sans font-light">Operated by Outsite</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-6 h-6 rounded-full bg-[#BCECE0] flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-primary text-[12px] font-bold font-sans">c</span>
              </div>
              <div className="leading-tight">
                <p className="text-[15px] font-bold text-primary font-sans">Curated</p>
                <p className="text-[13px] text-gray-400 font-sans font-light">Operated by trusted partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Grid - Dynamically adjusted for all views */}
        <div className="flex-1 bg-white p-10 overflow-y-auto no-scrollbar relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <div key={country.name} className={`bg-[#FAF9F6] rounded-sm p-8 border border-gray-100/50 hover:shadow-md transition-shadow ${(country.name === 'Portugal' || country.name === 'California') ? 'lg:col-span-2' : ''}`}>
                <h4 className="text-[20px] font-bold text-primary mb-6 font-sans tracking-tight">{country.name}</h4>
                <div className={`grid ${(country.name === 'Portugal' || country.name === 'California') ? 'grid-cols-1 md:grid-cols-2 gap-x-12' : 'grid-cols-1'} gap-y-4`}>
                  {country.cities.map((city) => (
                    <div 
                      key={city.name} 
                      onClick={() => { onCityClick(city.name); onClose(); }}
                      className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-transform"
                    >
                      <span className="text-[15px] text-primary/80 group-hover:text-primary transition-colors font-medium font-sans">
                        {city.name}
                      </span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${city.type === 's' ? 'bg-[#E6B48F]' : 'bg-[#BCECE0]'}`}>
                        <span className={`text-[9px] font-bold font-sans ${city.type === 's' ? 'text-white' : 'text-primary'}`}>
                          {city.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default LocationsOverlay;
