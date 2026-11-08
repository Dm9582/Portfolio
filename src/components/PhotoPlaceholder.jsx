import { Camera } from 'lucide-react';
import { asset } from '../utils/asset';

/**
 * Shows the portrait when one is supplied in the data file; otherwise displays
 * a deliberately designed placeholder with crop marks and a monogram.
 */
export default function PhotoPlaceholder({ src, name, role, className = '' }) {
  if (src) {
    return (
      <div
        className={`aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line ${className}`}
      >
        <img
          src={asset(src)}
          alt={`Portrait of ${name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photo placeholder for ${name}, ${role}`}
      className={`group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card ${className}`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgb(var(--c-accent)/0.16),transparent_52%),radial-gradient(circle_at_80%_90%,rgb(var(--c-accent)/0.08),transparent_45%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-4 rounded-[1.25rem] border border-dashed border-line/80"
        aria-hidden="true"
      />

      <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        Portrait
      </span>
      <span className="absolute right-6 top-6 font-mono text-[10px] text-muted">01</span>

      <div className="relative flex h-full flex-col items-center justify-center px-8 pb-20 pt-10 text-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full border border-accent/25 bg-accent/10">
          <span className="font-display text-4xl font-semibold tracking-tight text-accent">
            DK
          </span>
          <span className="absolute -bottom-2 -right-2 grid h-9 w-9 place-items-center rounded-full border border-line bg-bg text-muted shadow-card">
            <Camera className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <p className="mt-6 font-display text-lg font-medium">Photo coming soon</p>
        <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-muted">
          A portrait will live here. The layout is already sized for it.
        </p>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-line bg-bg/75 px-4 py-3 backdrop-blur-md">
        <div className="text-left">
          <p className="text-sm font-semibold leading-tight">{name}</p>
          <p className="mt-0.5 text-[11px] text-muted">{role}</p>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      </div>
    </div>
  );
}
