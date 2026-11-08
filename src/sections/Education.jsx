import { Award, BookOpen, Download, GraduationCap } from 'lucide-react';
import resume from '../data/resume';
import { asset } from '../utils/asset';
import ButtonLink from '../components/ButtonLink';
import SectionHeading from '../components/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';

const RESUME_URL = asset(resume.resumeFile);

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-pad relative border-t border-line/60"
    >
      <div className="container-shell">
        <SectionHeading
          index="05"
          eyebrow="Education & certifications"
          titleId="education-title"
          title="The foundation behind the work."
          description="Formal education and certifications that support how I build, learn, and solve problems."
        />

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <Reveal className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Education
              </h3>
              <span className="font-mono text-[10px] text-muted/60">03 records</span>
            </Reveal>

            <Stagger className="space-y-4">
              {resume.education.map((item, index) => (
                <StaggerItem key={item.id}>
                  <article
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
                      item.current
                        ? 'border-accent/20 bg-accent/[0.035] hover:border-accent/35'
                        : 'border-line bg-surface/60 hover:border-accent/25 hover:bg-surface/90'
                    }`}
                  >
                    {item.current ? (
                      <span
                        className="absolute right-0 top-0 h-24 w-24 bg-accent/[0.08] blur-2xl"
                        aria-hidden="true"
                      />
                    ) : null}

                    <div className="relative flex gap-4">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
                          item.current
                            ? 'border-accent/20 bg-accent/10 text-accent'
                            : 'border-line bg-bg/50 text-muted'
                        }`}
                      >
                        {index === 0 ? (
                          <GraduationCap className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <BookOpen className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1.5">
                          <div>
                            <h4 className="font-display text-base font-semibold leading-snug sm:text-lg">
                              {item.qualification}
                            </h4>
                            <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                          </div>
                          <span className="rounded-full border border-line bg-bg/40 px-2.5 py-1 font-mono text-[10px] text-muted">
                            {item.period}
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                            {item.score}
                          </span>
                          {item.current ? (
                            <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                              In progress
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Certifications
              </h3>
              <span className="font-mono text-[10px] text-muted/60">02 earned</span>
            </Reveal>

            <Stagger className="space-y-4">
              {resume.certifications.map((certification) => (
                <StaggerItem key={certification.id}>
                  <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-surface/90">
                    <div
                      className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/[0.06] blur-2xl transition-colors duration-500 group-hover:bg-accent/[0.1]"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <Award className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
                        {certification.year}
                      </span>
                    </div>
                    <p className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      Certification
                    </p>
                    <h4 className="relative mt-2 text-balance font-display text-base font-semibold leading-snug">
                      {certification.name}
                    </h4>
                    <p className="relative mt-2 text-sm text-muted">
                      Issued by {certification.issuer}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-4" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-accent/25 bg-accent/[0.04] p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold">Prefer the one-page version?</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      Download the original resume this portfolio is based on.
                    </p>
                  </div>
                </div>
                <ButtonLink
                  href={RESUME_URL}
                  download="Dhruv-Kumar-Resume.pdf"
                  variant="secondary"
                  icon={Download}
                  className="mt-5 w-full"
                >
                  Download Resume
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
