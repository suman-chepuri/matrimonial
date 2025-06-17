import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import FeaturedProfiles from './components/FeaturedProfiles';
import SuccessStories from './components/SuccessStories';
import MembershipPlans from './components/MembershipPlans';
import TrustSafety from './components/TrustSafety';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={openAuthModal} />
      <Hero onGetStarted={() => openAuthModal('register')} />
      <SearchSection />
      <FeaturedProfiles onProfileClick={setSelectedProfile} />
      <SuccessStories />
      <MembershipPlans onSelectPlan={() => openAuthModal('register')} />
      <TrustSafety />
      <Footer />
      
      {isAuthModalOpen && (
        <AuthModal
          mode={authMode}
          onClose={() => setIsAuthModalOpen(false)}
          onSwitchMode={setAuthMode}
        />
      )}
      
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

export default App;