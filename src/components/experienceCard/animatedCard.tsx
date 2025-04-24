'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

interface AnimatedCardProps {
  children: ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, 
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;