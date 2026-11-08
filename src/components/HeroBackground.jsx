const PARTICLES = [
  { left: '9%', top: '24%', size: 3, duration: 9, delay: -2 },
  { left: '17%', top: '68%', size: 2, duration: 11, delay: -5 },
  { left: '28%', top: '38%', size: 4, duration: 13, delay: -1 },
  { left: '38%', top: '78%', size: 2, duration: 8, delay: -4 },
  { left: '56%', top: '18%', size: 3, duration: 10, delay: -6 },
  { left: '64%', top: '58%', size: 2, duration: 12, delay: -3 },
  { left: '73%', top: '30%', size: 4, duration: 9, delay: -7 },
  { left: '82%', top: '72%', size: 2, duration: 14, delay: -2 },
  { left: '91%', top: '42%', size: 3, duration: 11, delay: -5 },
  { left: '47%', top: '52%', size: 2, duration: 10, delay: -8 },
];

/** Decorative hero backdrop: aurora shapes, grid and lightweight particles. */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Aurora glow */}
      <div className="absolute -right-32 top-[-10%] h-[36rem] w-[36rem] animate-pulse-soft rounded-full bg-accent/[0.13] blur-[130px]" />
      <div
        className="absolute -left-40 bottom-[-10%] h-[30rem] w-[30rem] animate-pulse-soft rounded-full bg-accent/[0.08] blur-[120px]"
        style={{ animationDelay: '-4s' }}
      />

      {/* Fine grid */}
      <div className="bg-hero-grid absolute inset-0 opacity-50" />

      {/* Orbit rings behind the code card */}
      <div className="absolute right-[4%] top-[16%] hidden h-[30rem] w-[30rem] rounded-full border border-line/60 lg:block" />
      <div className="absolute right-[8%] top-[22%] hidden h-[24rem] w-[24rem] rounded-full border border-dashed border-line/50 lg:block" />
      <div className="absolute right-[12%] top-[28%] hidden h-[18rem] w-[18rem] rounded-full border border-accent/10 lg:block" />

      {/* Floating particles */}
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute animate-float rounded-full bg-accent/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Vignette into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
