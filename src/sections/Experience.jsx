import { ArrowRight, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';
import resume from '../data/resume';
import ButtonLink from '../components/ButtonLink';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad relative border-t border-line/60"
    >
      <div className="container-shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          titleId="experience-title"
          title="Where I put theory into practice."
          description="A hands-on virtual internship focused on enterprise workflows, platform fundamentals, and IT service management."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="self-start lg:sticky lg:top-28">
            <p
              className="font-display text-7xl font-semibold leading-none tracking-tighter text-line sm:text-8xl"
              aria-hidden="true"
            >
              2026
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              May — June · Remote
            </p>
            <h3 className="mt-4 max-w-xs font-display text-xl font-medium leading-snug sm:text-2xl">
              Enterprise workflow experience.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Guided, real-world learning across incident management, automation and platform
              analytics — directly from the ServiceNow ecosystem.
            </p>
            <div className="mt-6">
              <ButtonLink href="#projects" variant="secondary" icon={ArrowRight}>
                View the projects
              </ButtonLink>
            </div>
          </Reveal>

          <div className="relative border-l border-line pl-7 sm:pl-10">
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgb(var(--c-accent)/0.1)]"
              aria-hidden="true"
            />

            {resume.experience.map((job) => (
              <Reveal key={job.id} delay={0.08}>
                <article className="relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 shadow-card transition-colors duration-300 hover:border-accent/30 sm:p-8">
                  <div
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/[0.06] blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 font-display text-sm font-semibold text-accent">
                        SN
                      </span>
                      <div>
                        <h3 className="text-balance font-display text-lg font-semibold leading-snug sm:text-xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{job.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/50 px-3 py-1.5 text-[11px] text-muted">
                        <CalendarDays className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/50 px-3 py-1.5 text-[11px] text-muted">
                        <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="relative mt-7 space-y-3.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-muted">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-line/70 pt-5">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            <span
              className="absolute -left-[3px] bottom-0 h-1.5 w-1.5 rounded-full bg-line"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
