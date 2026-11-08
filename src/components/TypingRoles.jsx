import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Typewriter that cycles through the roles listed in resume.js.
 * A static, screen-reader-friendly role is rendered by the Hero.
 */
export default function TypingRoles({ roles }) {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex % roles.length];

    if (!isDeleting && characterCount === currentRole.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1700);
      return () => clearTimeout(pause);
    }

    if (isDeleting && characterCount === 0) {
      setIsDeleting(false);
      setRoleIndex((index) => (index + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? 42 : 82;
    const timer = setTimeout(() => {
      setCharacterCount((count) => count + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [characterCount, isDeleting, prefersReducedMotion, roleIndex, roles]);

  const currentRole = roles[roleIndex % roles.length];
  const visibleText = prefersReducedMotion ? roles[0] : currentRole.slice(0, characterCount);

  return (
    <span aria-hidden="true" className="inline-flex items-center">
      <span>{visibleText}</span>
      <span
        className="ml-1 inline-block h-[0.95em] w-[2px] rounded-full bg-accent align-[-0.08em] animate-blink motion-reduce:animate-none"
        aria-hidden="true"
      />
    </span>
  );
}
