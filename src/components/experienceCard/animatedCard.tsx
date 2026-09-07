"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
}

/**
 * Renders an <li> so cards stay valid children of the surrounding <ul>.
 * Falls back to no motion when the visitor asks for reduced motion.
 */
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.li>
  );
};

export default AnimatedCard;
