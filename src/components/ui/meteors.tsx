import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { generateRandomNumber } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}

const Meteor = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[50%] bg-blue-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent",
        className
      )}
    ></div>
  );
};

export const Meteors = ({ number = 10 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<{ top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    const styles = [...new Array(Math.min(number, 10))].map(() => ({
      top: generateRandomNumber(-20, 80) + "%",
      left: generateRandomNumber(-20, 80) + "%",
      delay: generateRandomNumber(0, 2000) + "ms",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <Meteor
          key={idx}
          className="absolute"
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.delay,
          }}
        />
      ))}
    </>
  );
};