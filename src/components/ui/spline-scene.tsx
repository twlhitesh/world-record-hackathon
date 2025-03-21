'use client'

import { Suspense, lazy, useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Spinner } from './spinner';
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Only load Spline when section is in view
  const shouldLoadSpline = inView || isLoaded;

  // Handle Spline load complete
  const handleSplineLoad = () => {
    setIsLoaded(true);
    
    // Access the Spline application instance
    const app = splineRef.current;
    if (app) {
      // Disable default camera behaviors
      if (app.camera) {
        app.camera.controls.enabled = false;
        app.camera.controls.enableZoom = false;
        app.camera.controls.enablePan = false;
        app.camera.controls.enableRotate = false;
      }

      // Disable any automatic animations
      if (app.animations) {
        app.animations.forEach((animation: any) => {
          animation.stop();
        });
      }
    }
  };

  return (
    <div ref={ref} className={className}>
      <AnimatePresence mode="wait">
        {shouldLoadSpline ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Suspense 
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <Spinner size="lg" />
                </div>
              }
            >
              <Spline
                ref={splineRef}
                scene={scene}
                onLoad={handleSplineLoad}
                style={{
                  width: '100%',
                  height: '100%',
                  // Prevent any unwanted interactions
                  pointerEvents: 'none',
                  // Ensure hardware acceleration
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                  willChange: 'transform'
                }}
              />
            </Suspense>
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}