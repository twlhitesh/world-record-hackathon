import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  useEffect(() => {
    // Report loading performance metrics
    const reportLoadingMetric = () => {
      if (window.performance && window.performance.mark) {
        window.performance.mark('spinner-start');
        
        return () => {
          window.performance.mark('spinner-end');
          window.performance.measure(
            'spinner-duration',
            'spinner-start',
            'spinner-end'
          );
          
          const measures = window.performance.getEntriesByName('spinner-duration');
          if (measures.length > 0) {
            console.log(`Loading duration: ${measures[0].duration}ms`);
          }
        };
      }
    };

    const cleanup = reportLoadingMetric();
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-blue-500",
        size === "sm" && "h-4 w-4 border-2",
        size === "md" && "h-8 w-8 border-3",
        size === "lg" && "h-12 w-12 border-4",
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}