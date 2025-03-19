import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.1, 0.5, 1],
  glowColor: [0.1, 0.5, 1],
  offset: [0, 0],
  scale: 0.95,
  markers: [
    // Major tech hubs with larger markers
    { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
    { location: [40.7128, -74.0060], size: 0.1 }, // New York
    { location: [51.5074, -0.1278], size: 0.1 },  // London
    { location: [35.6762, 139.6503], size: 0.1 }, // Tokyo
    
    // Secondary hubs with medium markers
    { location: [52.5200, 13.4050], size: 0.08 }, // Berlin
    { location: [19.0760, 72.8777], size: 0.08 }, // Mumbai
    { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
    { location: [55.7558, 37.6173], size: 0.08 }, // Moscow
    
    // Emerging tech centers with smaller markers
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    { location: [-23.5505, -46.6333], size: 0.06 }, // São Paulo
    { location: [30.0444, 31.2357], size: 0.06 }, // Cairo
    { location: [39.9042, 116.4074], size: 0.06 }, // Beijing
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const globeRef = useRef<any>(null)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.0008
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
      if (globeRef.current) {
        globeRef.current.width = width * 2
        globeRef.current.height = width * 2
      }
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onResize)
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current)
    }

    width = canvasRef.current?.offsetWidth || 1000
    globeRef.current = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    requestAnimationFrame(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    })

    return () => {
      resizeObserver.disconnect()
      globeRef.current?.destroy()
    }
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[900px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}