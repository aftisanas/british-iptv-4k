"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "span" | "li";
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  y = 20,
  duration,
  as = "div",
}: MotionRevealProps) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
      transition={{ delay, ...(duration ? { duration } : {}) }}
      className={className}
    >
      {children}
    </Component>
  );
}
