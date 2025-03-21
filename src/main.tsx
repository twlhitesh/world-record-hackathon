import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { initSmoothScroll } from './lib/smooth-scroll';
import { Spinner } from './components/ui/spinner';
import './index.css';

// Preload critical assets and components
const preloadAssets = async () => {
  // Preload Spline scene
  try {
    await import('@splinetool/runtime');
    // Remove direct fetch of spline scene as it's not needed for preloading
  } catch (error) {
    console.error('Failed to preload Spline runtime:', error);
  }

  const assets = [
    '/vite.svg',
    'https://rsms.me/inter/inter.css',
    'https://rsms.me/inter/font-files/Inter-roman.var.woff2?v=3.19'
  ];

  assets.forEach(url => {
    const link = document.createElement('link');
    link.rel = url.endsWith('.css') ? 'preload' : 'prefetch';
    link.as = url.endsWith('.css') ? 'style' : 'image';
    link.href = url;
    if (url.includes('rsms.me')) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images with high priority
  const criticalImages = [
    'https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg',
    'https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png',
    'https://pbs.twimg.com/profile_images/1600539069217480704/RzK50Sks_400x400.jpg'
  ];

  const imagePromises = criticalImages.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  try {
    await Promise.all(imagePromises);
  } catch (error) {
    console.error('Failed to preload some images:', error);
  }
};

// Preload critical components with priority
const preloadComponents = () => {
  const criticalComponents = [
    () => import('./components/sections/HeroSection'),
    () => import('./components/sections/SponsorsSection'),
    () => import('./components/sections/BoltSection'),
  ];
  
  criticalComponents.forEach(component => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = component.toString().match(/import\(['"](.+?)['"]\)/)?.[1] || '';
    document.head.appendChild(link);
  });
};

// Initialize performance monitoring
const initPerformanceMonitoring = () => {
  if ('PerformanceObserver' in window) {
    // Monitor LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor FID
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor CLS
    const clsObserver = new PerformanceObserver((list) => {
      let clsScore = 0;
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      });
      console.log('CLS:', clsScore);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Start preloading immediately
preloadAssets();

// Lazy load the App component with enhanced preloading
const App = lazy(() => {
  preloadComponents();
  initPerformanceMonitoring();
  return import('./App');
});

// Initialize smooth scroll with optimized settings
const { cleanup } = initSmoothScroll();

// Create root with concurrent features
const root = createRoot(document.getElementById('root')!);

// Render app with enhanced Suspense and AnimatePresence
root.render(
  <StrictMode>
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    }>
      <AnimatePresence mode="wait" initial={false}>
        <App />
      </AnimatePresence>
    </Suspense>
  </StrictMode>
);

// Cleanup smooth scroll on unmount
window.addEventListener('beforeunload', cleanup);