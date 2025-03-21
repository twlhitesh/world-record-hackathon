import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Header } from '@/components/ui/header';
import { Spinner } from '@/components/ui/spinner';

// Lazy load all sections with loading priority
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const SponsorsSection = lazy(() => import('./components/sections/SponsorsSection'));
const EventInfoSection = lazy(() => import('./components/sections/EventInfoSection'));
const PrizesSection = lazy(() => import('./components/sections/PrizesSection'));
const JudgesSection = lazy(() => import('./components/sections/JudgesSection'));
const BoltSection = lazy(() => import('./components/sections/BoltSection'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Render sections based on device type
  const renderSections = () => {
    if (isMobile) {
      return (
        <>
          <HeroSection />
          <EventInfoSection />
          <PrizesSection />
          <JudgesSection />
          <BoltSection />
          <SponsorsSection />
        </>
      );
    }

    return (
      <>
        <HeroSection />
        <SponsorsSection />
        <EventInfoSection />
        <PrizesSection />
        <JudgesSection />
        <BoltSection />
      </>
    );
  };

  return (
    <ErrorBoundary>
      <div className="bg-black text-white selection:bg-blue-500 selection:text-white antialiased">
        <Header />
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <Spinner size="lg" />
          </div>
        }>
          {renderSections()}
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;