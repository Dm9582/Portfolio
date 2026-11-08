import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress bar pinned above the navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-accent/40 via-accent to-accent"
      style={{ scaleX }}
    />
  );
}
