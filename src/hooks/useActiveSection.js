import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the middle of the viewport so the
 * navbar can highlight it. Uses rAF-throttled scroll reads instead of a
 * constantly firing IntersectionObserver callback.
 */
export function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) current = id;
      }

      // When the page is at the very bottom, always highlight the last section.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActiveSection(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return activeSection;
}
