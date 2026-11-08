import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import resume, { navItems } from '../data/resume';
import { useActiveSection } from '../hooks/useActiveSection';
import { asset } from '../utils/asset';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = navItems.map((item) => item.id);
const RESUME_URL = asset(resume.resumeFile);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const onDesktop = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keep keyboard and screen-reader focus inside the open navigation menu.
    const backgroundNodes = [
      document.querySelector('.skip-link'),
      document.getElementById('main'),
      document.querySelector('footer'),
    ].filter(Boolean);
    backgroundNodes.forEach((node) => {
      node.inert = true;
    });

    window.addEventListener('keydown', onKeyDown);
    desktopQuery.addEventListener?.('change', onDesktop);
    menuRef.current?.querySelector('a')?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktopQuery.removeEventListener?.('change', onDesktop);
      document.body.style.overflow = previousOverflow;
      backgroundNodes.forEach((node) => {
        node.inert = false;
      });
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
          isScrolled
            ? 'border-line/80 bg-bg/80 shadow-[0_10px_40px_-30px_rgb(0_0_0/0.8)]'
            : 'border-transparent bg-bg/40'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-shell flex h-16 items-center justify-between gap-4 lg:h-20"
        >
          <a
            href="#home"
            aria-label="Dhruv Kumar — home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 font-display text-[13px] font-semibold tracking-tight transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
              DK
            </span>
            <span className="hidden font-display text-[15px] font-medium tracking-tight sm:block">
              Dhruv Kumar<span className="text-accent">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full border border-accent/20 bg-accent/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={RESUME_URL}
              download="Dhruv-Kumar-Resume.pdf"
              className="hidden min-h-[40px] items-center gap-2 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-accent-contrast shadow-[0_10px_30px_-16px_rgb(var(--c-accent)/0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 lg:inline-flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-fg transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              aria-hidden="true"
              onClick={() => {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-16 z-40 bg-bg/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full z-50 px-4 pb-4 lg:hidden"
            >
              <div className="rounded-2xl border border-line bg-bg/95 p-3 shadow-card backdrop-blur-xl">
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        aria-current={isActive ? 'location' : undefined}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-muted hover:bg-raised/70 hover:text-fg'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-accent/60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={RESUME_URL}
                download="Dhruv-Kumar-Resume.pdf"
                onClick={closeMenu}
                className="mt-2 flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
