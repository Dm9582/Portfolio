import { ArrowUpRight, CalendarDays, Quote, Target } from 'lucide-react';
import resume from '../data/resume';
import ButtonLink from '../components/ButtonLink';
import Counter from '../components/Counter';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import SectionHeading from '../components/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad relative border-t border-line/60"
    >
      <div className="container-shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          titleId="about-title"
          title="Building a strong foundation in software."
          description="A quick look at where I am, what I care about, and the numbers behind the work so far."
        />

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <PhotoPlaceholder
              src={resume.photo}
              name={resume.name}
              role={resume.headline}
            />

            <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Currently
                  </p>
                  <p className="mt-0.5 text-sm font-medium">Computer Science Engineering</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted">
                2023–2027
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Quote className="h-8 w-8 text-accent/60" aria-hidden="true" />
              <p className="mt-5 text-pretty font-display text-xl leading-relaxed text-fg sm:text-2xl sm:leading-relaxed">
                {resume.summary[0]}
              </p>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                {resume.summary[1]}
              </p>

              <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-accent/15 bg-accent/[0.05] p-4 sm:p-5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Target className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted">{resume.summary[2]}</p>
              </div>

              <div className="mt-7">
                <ButtonLink href="#experience" variant="ghost" icon={ArrowUpRight}>
                  See my experience
                </ButtonLink>
              </div>
            </Reveal>

            <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {resume.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="group h-full rounded-2xl border border-line bg-surface/60 p-5 transition-colors duration-300 hover:border-accent/30 hover:bg-surface/90 sm:p-6">
                    <p className="font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                      <Counter value={stat.value} decimals={stat.decimals} />
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
