import { Reveal } from './Reveal';

/**
 * Consistent section header: eyebrow, index, title and optional description.
 * `titleId` is used by the section's aria-labelledby attribute.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  titleId,
  className = '',
}) {
  return (
    <Reveal className={`mb-12 sm:mb-16 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-medium tracking-widest text-accent">
          {index}
        </span>
        <span className="eyebrow-line" aria-hidden="true" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,390px)] lg:items-end">
        <h2
          id={titleId}
          className="max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.9rem]"
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base lg:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
