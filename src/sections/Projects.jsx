import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';
import resume from '../data/resume';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';

const VISUALS = {
  hospital: HeartPulse,
  education: GraduationCap,
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad relative border-t border-line/60"
    >
      <div className="container-shell">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          titleId="projects-title"
          title="Selected projects, built end to end."
          description="Two management systems that put my full-stack skills to work. Repository links come straight from my resume."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {resume.projects.map((project, index) => {
            const Icon = VISUALS[project.visual] ?? HeartPulse;

            return (
              <StaggerItem key={project.id} className="h-full">
                <TiltCard className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/90 hover:shadow-card">
                    {/* Project visual — decorative, built from CSS only */}
                    <div
                      className="relative h-52 overflow-hidden border-b border-line sm:h-56"
                      aria-hidden="true"
                    >
                      <div className="bg-hero-grid absolute inset-0 opacity-60" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgb(var(--c-accent)/0.18),transparent_55%)]" />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/60 to-transparent" />

                      <div className="relative flex h-full flex-col justify-between p-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
                            Project {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="rounded-full border border-line bg-bg/60 px-3 py-1 text-[10px] text-muted backdrop-blur-sm">
                            {project.period}
                          </span>
                        </div>

                        <div className="flex items-end justify-between">
                          <span className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent shadow-glow backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                            <Icon className="h-8 w-8" />
                          </span>
                          <span className="font-display text-7xl font-semibold leading-none tracking-tighter text-fg/5 sm:text-8xl">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-2xl font-semibold tracking-tight">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-accent">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="mt-1 hidden rounded-lg border border-line p-2 text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent sm:block">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted">{project.overview}</p>

                      <ul className="mt-4 space-y-2">
                        {project.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:text-[13px]"
                          >
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[10px] font-medium text-muted"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-5">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-75"
                        >
                          <Github className="h-4 w-4" aria-hidden="true" />
                          Source code
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>

                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                          >
                            Live demo
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        ) : (
                          <span
                            className="inline-flex cursor-not-allowed items-center gap-1.5 text-[11px] text-muted/60"
                            title="This project does not currently have a public live deployment."
                          >
                            Live demo unavailable
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-line bg-surface/30 px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">Explore my repositories on GitHub.</p>
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent"
          >
            Visit my GitHub
            <motion.span
              className="grid h-7 w-7 place-items-center rounded-full border border-line"
              whileHover={{ x: 2, y: -2 }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
