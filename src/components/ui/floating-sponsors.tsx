import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

interface SponsorItem {
  name: string;
  image: string;
  href: string;
}

export const FloatingSponsors = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: SponsorItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingSponsorsDesktop items={items} className={desktopClassName} />
      <FloatingSponsorsMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingSponsorsMobile = ({
  items,
  className,
}: {
  items: SponsorItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="sponsors"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                  className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10"
      >
        <span className="text-xs font-medium text-blue-400">More</span>
      </button>
    </div>
  );
};

const FloatingSponsorsDesktop = ({
  items,
  className,
}: {
  items: SponsorItem[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-20 gap-6 items-end rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 px-6 pb-4",
        className
      )}
    >
      {items.map((item) => (
        <SponsorContainer mouseX={mouseX} key={item.name} {...item} />
      ))}
    </motion.div>
  );
};

function SponsorContainer({
  mouseX,
  name,
  image,
  href,
}: {
  mouseX: MotionValue;
  name: string;
  image: string;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative border border-white/10"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-3 py-1.5 whitespace-pre rounded-md bg-neutral-900/90 backdrop-blur-sm border border-white/10 text-white absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-sm"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
    </a>
  );
}