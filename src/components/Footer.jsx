import { ArrowUp, Mail } from 'lucide-react';
import resume from '../data/resume';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/70 bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />
      <div className="container-shell py-12 sm:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Back to home">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 font-display text-[13px] font-semibold tracking-tight">
                DK
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight">
                Dhruv Kumar<span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Computer Science Engineering student at VIT Bhopal University, focused on
              full-stack development and building efficient, user-focused software.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <SocialLinks />
            <a
              href={`mailto:${resume.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {resume.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted">
            © {year} Dhruv Kumar. Designed &amp; built with React, Tailwind CSS and Framer Motion.
          </p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-2 text-xs font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
