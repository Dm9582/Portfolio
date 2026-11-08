import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
} from 'lucide-react';
import resume from '../data/resume';
import { asset } from '../utils/asset';
import ButtonLink from '../components/ButtonLink';
import HeroBackground from '../components/HeroBackground';
import SocialLinks from '../components/SocialLinks';
import TypingRoles from '../components/TypingRoles';
import { EASE } from '../components/Reveal';

const RESUME_URL = asset(resume.resumeFile);

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  // Wait for the intro overlay before playing the hero entrance. If the intro
  // was already shown this session (or is disabled), start immediately.
  const [entranceDelay] = useState(() => {
    if (typeof window === 'undefined') return 0;
    try {
      const introSeen = sessionStorage.getItem('dk-intro-seen');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return !introSeen && !reduced ? 1.45 : 0.05;
    } catch {
      return 0.05;
    }
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <HeroBackground />

      <div className="container-shell relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: entranceDelay },
              },
            }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.07] px-3.5 py-1.5 text-[11px] font-medium text-muted sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {resume.availability}
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeUp}
              className="mt-6 text-balance font-display text-[clamp(3.3rem,9vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
            >
              <span className="text-gradient">Dhruv Kumar</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex min-h-[2.25rem] flex-wrap items-center gap-x-2 text-lg sm:text-2xl"
            >
              <span className="text-muted">I&apos;m a</span>
              <span className="font-display font-medium text-fg">
                <span className="sr-only">{resume.roles[0]}</span>
                <TypingRoles roles={resume.roles} />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            >
              {resume.tagline}{' '}
              <span className="text-fg">Currently studying Computer Science Engineering at VIT Bhopal University.</span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects" icon={ArrowRight}>
                View Projects
              </ButtonLink>
              <ButtonLink
                href={RESUME_URL}
                download="Dhruv-Kumar-Resume.pdf"
                variant="secondary"
                icon={Download}
              >
                Download Resume
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost" icon={Mail}>
                Contact Me
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <span className="h-px w-9 bg-line" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                Find me on
              </span>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Code card visual */}
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: entranceDelay + 0.18, ease: EASE }}
            className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
          >
            <div
              className="absolute -inset-8 rounded-[3rem] bg-accent/[0.08] blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-7 -bottom-4 top-7 rotate-2 rounded-2xl border border-line/60 bg-surface/40"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-card backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-line/80 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                  <Code2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  dhruv.js
                </div>
                <span className="font-mono text-[10px] text-muted/60">portfolio</span>
              </div>

              <div className="overflow-x-auto px-4 py-5 font-mono text-[12px] leading-7 sm:px-5 sm:text-[13px]">
                <div className="min-w-max space-y-0.5">
                  <CodeLine number="01">
                    <span className="text-accent">const</span>{' '}
                    <span className="text-fg">dhruv</span> <span className="text-muted">=</span>{' '}
                    <span className="text-muted">{'{'}</span>
                  </CodeLine>
                  <CodeLine number="02">
                    <span className="text-muted">role:</span>{' '}
                    <span className="text-accent">&quot;Full-Stack Developer&quot;</span>
                    <span className="text-muted">,</span>
                  </CodeLine>
                  <CodeLine number="03">
                    <span className="text-muted">education:</span>{' '}
                    <span className="text-accent">&quot;CSE @ VIT Bhopal&quot;</span>
                    <span className="text-muted">,</span>
                  </CodeLine>
                  <CodeLine number="04">
                    <span className="text-muted">stack:</span> <span className="text-muted">[</span>
                  </CodeLine>
                  <CodeLine number="05" indent>
                    <span className="text-accent">&quot;React&quot;</span>
                    <span className="text-muted">, </span>
                    <span className="text-accent">&quot;Node.js&quot;</span>
                    <span className="text-muted">,</span>
                  </CodeLine>
                  <CodeLine number="06" indent>
                    <span className="text-accent">&quot;Express&quot;</span>
                    <span className="text-muted">, </span>
                    <span className="text-accent">&quot;SQL&quot;</span>
                  </CodeLine>
                  <CodeLine number="07">
                    <span className="text-muted">],</span>
                  </CodeLine>
                  <CodeLine number="08">
                    <span className="text-muted">building:</span>{' '}
                    <span className="text-accent">&quot;user-focused software&quot;</span>
                    <span className="text-muted">,</span>
                  </CodeLine>
                  <CodeLine number="09">
                    <span className="text-muted">openToWork:</span>{' '}
                    <span className="text-accent">true</span>
                    <span className="text-muted">,</span>
                  </CodeLine>
                  <CodeLine number="10">
                    <span className="text-muted">{'};'}</span>
                  </CodeLine>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-line/80 px-4 py-3.5">
                <span className="flex items-center gap-2 text-[11px] text-muted">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {resume.availability}
                </span>
                <a
                  href={`mailto:${resume.contact.email}`}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-accent transition-opacity hover:opacity-70"
                  aria-label={`Email ${resume.name}`}
                >
                  Say hello
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Floating facts from the resume */}
            <div className="absolute -right-2 top-24 flex animate-float items-center gap-2.5 rounded-xl border border-line bg-bg/90 px-3.5 py-2.5 shadow-card backdrop-blur-md sm:-right-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold leading-none">8.67</span>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted">
                  CGPA
                </span>
              </span>
            </div>

            <div
              className="absolute -left-2 bottom-12 flex animate-float items-center gap-2.5 rounded-xl border border-line bg-bg/90 px-3.5 py-2.5 shadow-card backdrop-blur-md sm:-left-5"
              style={{ animationDelay: '-2.5s' }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent">
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold leading-none">2</span>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted">
                  Projects built
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-5 mx-auto hidden w-fit flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-muted transition-colors hover:text-accent lg:flex"
      >
        Scroll to explore
        <span className="grid h-8 w-8 place-items-center rounded-full border border-line">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}

function CodeLine({ number, children, indent = false }) {
  return (
    <div className="flex gap-3">
      <span className="select-none text-[10px] leading-7 text-muted/30">{number}</span>
      <span className={indent ? 'pl-4' : ''}>{children}</span>
    </div>
  );
}
