"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { SplineScene } from "./spline-scene"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    controls,
    cards,
  }: {
    controls: any
    cards: Array<{
      image: string;
      title: string;
    }>;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1000 : 1400
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = (cylinderWidth / (2 * Math.PI)) * 1.2
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Auto-rotation
    useEffect(() => {
      let animationId: number;
      const autoRotate = () => {
        rotation.set(rotation.get() + 0.2);
        animationId = requestAnimationFrame(autoRotate);
      };
      
      autoRotate();
      return () => cancelAnimationFrame(animationId);
    }, [rotation]);

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Centered Robot - Fixed size and no interaction */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-10 pointer-events-none">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        <motion.div
          className="relative flex h-full origin-center justify-center"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`key-${card.title}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
            >
              <motion.div
                className="pointer-events-none w-[180px] h-[100px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
                initial={{ filter: "blur(0px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              >
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel() {
  const controls = useAnimation()
  
  const sponsorCards = [
    {
      title: "Supabase",
      image: "https://pbs.twimg.com/profile_images/1822981431586439168/7xkKXRGQ_400x400.jpg"
    },
    {
      title: "Netlify",
      image: "https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png"
    },
    {
      title: "Cloudfare",
      image: "https://pbs.twimg.com/profile_images/1600539069217480704/RzK50Sks_400x400.jpg"
    },
    {
      title: "Sentry",
      image: "https://pbs.twimg.com/profile_images/1778495572238086150/qDkInWXX_400x400.png"
    },
    {
      title: "Loops",
      image: "https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg"
    },
    {
      title: "Algorand Foundation",
      image: "https://pbs.twimg.com/profile_images/1805829136381861889/0fI5Zrbv_400x400.jpg"
    },
    {
      title: "Bolt.new",
      image: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
    },
    {
      title: "Stackblitz",
      image: "https://pbs.twimg.com/profile_images/1880708699624542208/QTb9LC0L_400x400.jpg"
    },
  ];

  const cards = useMemo(() => sponsorCards, []);

  return (
    <motion.div layout className="relative">
      <div className="relative h-[400px] w-full">
        <Carousel
          controls={controls}
          cards={cards}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };