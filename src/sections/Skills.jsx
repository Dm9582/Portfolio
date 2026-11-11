import {
  Code2,
  Database,
  Server,
  Terminal,
  Workflow,
  Wrench,
} from 'lucide-react';
import resume from '../data/resume';
import SectionHeading from '../components/SectionHeading';
import { Stagger, StaggerItem } from '../components/Reveal';

const ICONS = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
  terminal: Terminal,
  workflow: Workflow,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-pad relative border-t border-line/60"
    >
      <div className="container-shell">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          titleId="skills-title"
          title="The tools I use to turn ideas into working software."
          description="Frontend, backend, programming languages, databases, and the ServiceNow platform tools I explored during my internship."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, index) => {
            const Icon = ICONS[group.icon];
            return (
              <StaggerItem key={group.id}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/90 hover:shadow-card">
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/10"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6">
                      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                    </span>
                    <span className="font-mono text-[10px] text-muted/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-lg font-medium">{group.title}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-bg/50 px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 group-hover:border-accent/20 group-hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {group.featured ? (
                    <span className="relative mt-6 w-fit rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Internship experience
                    </span>
                  ) : null}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
