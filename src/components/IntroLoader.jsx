import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/** First-load brand intro. Runs once per browser session and never scrolls. */
export default function IntroLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const seen = sessionStorage.getItem('dk-intro-seen');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return !seen && !reduced;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('dk-intro-seen', '1');
      } catch {
        // Non-critical if session storage is unavailable.
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && !prefersReducedMotion ? (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div
            className="absolute h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-6 text-center"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-accent/10 font-display text-2xl font-semibold tracking-tight text-accent shadow-glow">
              DK
            </div>
            <p className="mt-6 font-display text-lg font-medium tracking-tight">Dhruv Kumar</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted">
              Full-Stack Developer
            </p>

            <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full w-full origin-left rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="sr-only">Loading</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
