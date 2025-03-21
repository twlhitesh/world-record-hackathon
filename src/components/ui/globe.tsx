import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<any>(null);

  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  }, []);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        if (globeRef.current) {
          globeRef.current.width = width * 2;
          globeRef.current.height = width * 2;
        }
      }
    };

    const initGlobe = () => {
      if (!canvasRef.current) return;
      width = canvasRef.current.offsetWidth;

      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 12,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.5, 1],
        glowColor: [0.1, 0.5, 1],
        scale: 1.1,
        offset: [0, 0],
        markers: [
          { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
          { location: [40.7128, -74.0060], size: 0.1 },  // New York
          { location: [51.5074, -0.1278], size: 0.1 },   // London
          { location: [35.6762, 139.6503], size: 0.1 },  // Tokyo
          { location: [-33.8688, 151.2093], size: 0.1 }, // Sydney
          { location: [48.8566, 2.3522], size: 0.1 },    // Paris
        ],
        onRender: (state: any) => {
          if (!pointerInteracting.current) {
            phi += 0.003;
          }
          state.phi = phi + pointerInteractionMovement.current / 200;
        },
      });
    };

    const resizeObserver = new ResizeObserver(onResize);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    initGlobe();

    return () => {
      resizeObserver.disconnect();
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <div className={cn("relative w-full aspect-square", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX);
          e.currentTarget.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          updatePointerInteraction(null);
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          updatePointerInteraction(null);
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          updateMovement(e.clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            updateMovement(e.touches[0].clientX);
          }
        }}
      />
    </div>
  );
}