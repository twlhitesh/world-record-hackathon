import Lenis from '@studio-freight/lenis';

const SCROLL_CONFIG = {
  duration: 1.8, // Increased from 1.2 for slower scrolling
  easing: (t: number) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 
      ? 0 
      : t === 1 
      ? 1 
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.6, // Reduced from 0.8 for slower scrolling
  smoothTouch: true,
  touchMultiplier: 1.2, // Reduced from 1.5 for slower scrolling
  infinite: false,
  lerp: 0.08, // Reduced from 0.1 for smoother scrolling
  syncTouch: true,
  syncTouchLerp: 0.04,
  touchInertiaMultiplier: 35,
  wheelInertiaMultiplier: 40,
  normalizeWheel: true,
  autoResize: true
};

let rafId: number | null = null;
let scrollTimeout: number;
let lenis: any = null;
let isScrolling = false;
let lastScrollTime = 0;
const SCROLL_THROTTLE = 1000 / 120; // 120fps for ultra-smooth scrolling

const optimizedRAF = (callback: (time: number) => void) => {
  let lastTime = performance.now();
  let frame = 0;
  
  const animate = (currentTime: number) => {
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime >= SCROLL_THROTTLE) {
      callback(currentTime);
      lastTime = currentTime;
    }
    
    frame = requestAnimationFrame(animate);
  };
  
  frame = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(frame);
};

const debounce = (fn: Function, wait: number) => {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => fn.apply(null, args), wait);
  };
};

export const initSmoothScroll = () => {
  if (lenis) {
    lenis.destroy();
  }

  lenis = new Lenis(SCROLL_CONFIG);

  // Optimize scroll handling
  const handleScroll = () => {
    const now = performance.now();
    if (!isScrolling) {
      isScrolling = true;
      document.documentElement.classList.add('is-scrolling');
    }

    if (now - lastScrollTime >= SCROLL_THROTTLE) {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      
      scrollTimeout = requestAnimationFrame(() => {
        lenis.raf(now);
        lastScrollTime = now;
      });
    }
  };

  // Handle scroll end
  const handleScrollEnd = debounce(() => {
    isScrolling = false;
    document.documentElement.classList.remove('is-scrolling');
  }, 150);

  // Handle resize with debounce
  const handleResize = debounce(() => {
    if (lenis) {
      lenis.resize();
    }
  }, 200);

  const cleanup = optimizedRAF((time: number) => {
    lenis.raf(time);
  });

  // Add event listeners with passive flag for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('scroll', handleScrollEnd, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  
  // Handle smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href')!);
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 2, // Increased from 1.5 for slower anchor scrolling
          easing: (t: number) => 1 - Math.pow(1 - t, 5)
        });
      }
    });
  });

  return {
    lenis,
    cleanup: () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      cleanup();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
    }
  };
};