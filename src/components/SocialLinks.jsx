import { Github, Linkedin, Mail } from 'lucide-react';
import resume from '../data/resume';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

/**
 * Compact social icon row. Labels are always available to screen readers and
 * shown as native tooltips on hover.
 */
export default function SocialLinks({ items = resume.socials, className = '' }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        if (!Icon) return null;
        const external = item.href.startsWith('http');

        return (
          <li key={item.label}>
            <a
              href={item.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
              title={item.label}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <Icon
                className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
