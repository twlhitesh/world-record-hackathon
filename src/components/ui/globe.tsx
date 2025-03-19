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
           // North America
  { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
  { location: [40.7128, -74.0060], size: 0.1 },  // New York
  { location: [34.0522, -118.2437], size: 0.1 }, // Los Angeles
  { location: [41.8781, -87.6298], size: 0.1 },  // Chicago
  { location: [49.2827, -123.1207], size: 0.1 }, // Vancouver
  { location: [45.5017, -73.5673], size: 0.1 },  // Montreal
  { location: [29.7604, -95.3698], size: 0.1 },  // Houston
  { location: [25.7617, -80.1918], size: 0.1 },  // Miami
  { location: [32.7767, -96.7970], size: 0.1 },  // Dallas
  { location: [33.4484, -112.0740], size: 0.1 }, // Phoenix

  // Europe
  { location: [51.5074, -0.1278], size: 0.1 },   // London
  { location: [48.8566, 2.3522], size: 0.1 },    // Paris
  { location: [52.5200, 13.4050], size: 0.1 },   // Berlin
  { location: [55.7558, 37.6173], size: 0.1 },   // Moscow
  { location: [41.3851, 2.1734], size: 0.1 },    // Barcelona
  { location: [45.4642, 9.1900], size: 0.1 },    // Milan
  { location: [59.3293, 18.0686], size: 0.1 },   // Stockholm
  { location: [50.0755, 14.4378], size: 0.1 },   // Prague
  { location: [60.1695, 24.9354], size: 0.1 },   // Helsinki
  { location: [53.3498, -6.2603], size: 0.1 },   // Dublin

  // Asia
  { location: [35.6762, 139.6503], size: 0.1 },  // Tokyo
  { location: [39.9042, 116.4074], size: 0.1 },  // Beijing
  { location: [31.2304, 121.4737], size: 0.1 },  // Shanghai
  { location: [28.7041, 77.1025], size: 0.1 },   // Delhi
  { location: [19.0760, 72.8777], size: 0.1 },   // Mumbai
  { location: [23.8103, 90.4125], size: 0.1 },   // Dhaka
  { location: [1.3521, 103.8198], size: 0.1 },   // Singapore
  { location: [13.7563, 100.5018], size: 0.1 },  // Bangkok
  { location: [10.7769, 106.7009], size: 0.1 },  // Ho Chi Minh City
  { location: [3.1390, 101.6869], size: 0.1 },   // Kuala Lumpur
  { location: [41.0082, 28.9784], size: 0.1 },   // Istanbul

  // Middle East
  { location: [25.276987, 55.296249], size: 0.1 }, // Dubai
  { location: [31.7683, 35.2137], size: 0.1 },   // Jerusalem
  { location: [24.7136, 46.6753], size: 0.1 },   // Riyadh
  { location: [30.0444, 31.2357], size: 0.1 },   // Cairo
  { location: [33.8886, 35.4955], size: 0.1 },   // Beirut

  // Africa
  { location: [-1.2921, 36.8219], size: 0.1 },   // Nairobi
  { location: [-26.2041, 28.0473], size: 0.1 },  // Johannesburg
  { location: [6.5244, 3.3792], size: 0.1 },     // Lagos
  { location: [9.0579, 7.4951], size: 0.1 },     // Abuja
  { location: [-34.6037, -58.3816], size: 0.1 }, // Buenos Aires

  // Oceania
  { location: [-33.8688, 151.2093], size: 0.1 }, // Sydney
  { location: [-37.8136, 144.9631], size: 0.1 }, // Melbourne
  { location: [-36.8485, 174.7633], size: 0.1 }, // Auckland

  // South America
  { location: [-22.9068, -43.1729], size: 0.1 }, // Rio de Janeiro
  { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
  { location: [-12.0464, -77.0428], size: 0.1 }, // Lima
  { location: [-34.6118, -58.4173], size: 0.1 }, // Buenos Aires
  { location: [-0.1807, -78.4678], size: 0.1 },  // Quito
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
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-100"
        style={{
          filter: "brightness(1.2) contrast(1.2)",
          transform: "scale(1.05)",
        }}
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
