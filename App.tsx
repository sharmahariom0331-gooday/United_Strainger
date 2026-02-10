
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Trips from './pages/Trips';
import TripDetail from './pages/TripDetail';
import MarrakeshTrip from './pages/MarrakeshTrip';
import CommunityStory from './pages/CommunityStory';
import Deals from './pages/Deals';
import DealDetail from './pages/DealDetail';
import AboutUs from './pages/AboutUs';
import GiftCards from './pages/GiftCards';
import MobileApp from './pages/MobileApp';
import Business from './pages/Business';
import RealEstatePartners from './pages/RealEstatePartners';
import BecomeAMember from './pages/BecomeAMember';
import SignIn from './pages/SignIn';
import SignatureLocations from './pages/SignatureLocations';
import CuratedLocations from './pages/CuratedLocations';
import PlacesToStay from './pages/PlacesToStay';
import WhatIsOutsite from './pages/WhatIsOutsite';
import TeamRetreats from './pages/TeamRetreats';
import LocationsOverlay from './components/LocationsOverlay';
import WorkModule from './components/WorkModule';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isLocationsPinned, setIsLocationsPinned] = useState(false);
  const [isWorkModuleOpen, setIsWorkModuleOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLocations();
        setIsWorkModuleOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    closeLocations();
    setIsWorkModuleOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLocationsClick = (pinned: boolean) => {
    setIsLocationsOpen(true);
    setIsLocationsPinned(pinned);
  };

  const handleLocationsHover = (isOpen: boolean) => {
    if (!isLocationsPinned) {
      setIsLocationsOpen(isOpen);
    }
  };

  const closeLocations = () => {
    setIsLocationsOpen(false);
    setIsLocationsPinned(false);
  };

  return (
    <div className="relative min-h-screen">
      {currentPage !== 'signin' && (
        <Navbar 
          onLocationsClick={handleLocationsClick}
          onLocationsHover={handleLocationsHover}
          onTripsClick={() => navigateTo('trips')}
          onDealsClick={() => navigateTo('deals')}
          onWhatIsOutsiteClick={() => navigateTo('what-is-united-strangers')}
          onGiftCardsClick={() => navigateTo('gift-cards')}
          onMobileAppClick={() => navigateTo('mobile-app')}
          onBusinessClick={() => navigateTo('business')}
          onTeamRetreatsClick={() => navigateTo('team-retreats')}
          onRealEstatePartnersClick={() => navigateTo('real-estate-partners')}
          onMembershipClick={() => navigateTo('membership')}
          onSignatureLocationsClick={() => navigateTo('signature-locations')}
          onCuratedLocationsClick={() => navigateTo('curated-locations')}
          onPlacesToStayClick={() => navigateTo('places-to-stay')}
          onHomeClick={() => navigateTo('home')}
          isHome={currentPage === 'home'}
        />
      )}

      <main className="min-h-screen">
        {currentPage === 'home' && (
          <Home 
            onPropertyClick={() => navigateTo('details')} 
            onBecomeMemberClick={() => navigateTo('membership')}
            onExploreAllClick={() => navigateTo('places-to-stay')}
          />
        )}
        {currentPage === 'trips' && <Trips onTripDetailClick={(loc) => navigateTo(loc === 'SAGRES' ? 'trip-detail' : 'trip-marrakesh')} onStoryClick={() => navigateTo('community-story')} />}
        {currentPage === 'trip-detail' && <TripDetail />}
        {currentPage === 'trip-marrakesh' && <MarrakeshTrip />}
        {currentPage === 'community-story' && <CommunityStory onBack={() => navigateTo('trips')} />}
        {currentPage === 'deals' && (
          <Deals 
            onBecomeMemberClick={() => navigateTo('membership')} 
            onViewDealClick={() => navigateTo('deal-detail')}
            onBookAStayClick={() => navigateTo('places-to-stay')}
          />
        )}
        {currentPage === 'deal-detail' && <DealDetail onBookNowClick={() => navigateTo('details')} />}
        {currentPage === 'about-us' && <AboutUs />}
        {currentPage === 'what-is-united-strangers' && <WhatIsOutsite onBecomeMemberClick={() => navigateTo('membership')} />}
        {currentPage === 'gift-cards' && <GiftCards />}
        {currentPage === 'mobile-app' && <MobileApp />}
        {currentPage === 'business' && <Business />}
        {currentPage === 'team-retreats' && <TeamRetreats />}
        {currentPage === 'real-estate-partners' && <RealEstatePartners />}
        {currentPage === 'membership' && <BecomeAMember onApplyClick={() => navigateTo('signin')} />}
        {currentPage === 'signin' && <SignIn />}
        {currentPage === 'signature-locations' && <SignatureLocations onVisitHouseClick={() => navigateTo('details')} />}
        {currentPage === 'curated-locations' && <CuratedLocations onExploreClick={() => navigateTo('places-to-stay')} onLocationClick={() => navigateTo('details')} />}
        {currentPage === 'places-to-stay' && <PlacesToStay onPropertyClick={() => navigateTo('details')} />}
        {currentPage === 'details' && <PropertyDetails />}
      </main>

      {currentPage !== 'signin' && <Footer />}

      {isLocationsOpen && (
        <LocationsOverlay 
          onClose={closeLocations} 
          onCityClick={() => navigateTo('places-to-stay')}
          onExploreMapClick={() => navigateTo('places-to-stay')}
          isPinned={isLocationsPinned}
        />
      )}
      <WorkModule isOpen={isWorkModuleOpen} onClose={() => setIsWorkModuleOpen(false)} />
    </div>
  );
};

export default App;
