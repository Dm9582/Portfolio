import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Soft accent glow that follows the pointer on desktop. It sits behind the page
 * content and is disabled for touch devices and reduced-motion users.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const update = () => setHasFinePointer(query.matches);

    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!hasFinePointer || prefersReducedMotion) return;

    const element = glowRef.current;
    if (!element) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isVisible) {
        currentX = targetX;
        currentY = targetY;
        isVisible = true;
        element.style.opacity = '1';
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      element.style.opacity = '0';
    };

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    frame = requestAnimationFrame(animateGlow);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [hasFinePointer, prefersReducedMotion]);

  if (!hasFinePointer || prefersReducedMotion) return null;

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
