import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  cascade?: boolean;
}

export function Reveal({ children, delay = 0, className, direction = "up", cascade = false }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { x: 40, y: 0 };
      case "right": return { x: -40, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const initialOffset = getDirectionOffset();

  return (
    <div ref={ref} className={cn("overflow-hidden block", className)}>
      <motion.div
        initial={{ opacity: 0, ...initialOffset }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
