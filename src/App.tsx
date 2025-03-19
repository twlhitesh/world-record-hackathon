import React, { lazy, Suspense } from 'react';
import { IconBolt } from '@tabler/icons-react';
import { Header } from '@/components/ui/header';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Lazy load all sections with loading priority
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const BoltSection = lazy(() => import('./components/sections/BoltSection'));
const EventInfoSection = lazy(() => import('./components/sections/EventInfoSection'));
const PrizesSection = lazy(() => import('./components/sections/PrizesSection'));
const JudgesSection = lazy(() => import('./components/sections/JudgesSection'));
const SponsorsSection = lazy(() => import('./components/sections/SponsorsSection'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white antialiased">
      <ErrorBoundary>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <BoltSection />
          <EventInfoSection />
          <PrizesSection />
          <JudgesSection />
          <SponsorsSection />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;