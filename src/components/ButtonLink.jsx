import { motion } from 'framer-motion';

const VARIANTS = {
  primary:
    'bg-accent text-accent-contrast shadow-[0_14px_38px_-18px_rgb(var(--c-accent)/0.85)] hover:bg-accent/90 hover:shadow-[0_18px_44px_-18px_rgb(var(--c-accent)/0.9)]',
  secondary:
    'border border-line bg-surface/60 text-fg hover:border-accent/40 hover:bg-raised/80',
  ghost:
    'border border-transparent text-muted hover:bg-raised/70 hover:text-fg',
};

/**
 * Accessible CTA link with shared sizing and hover motion. Renders an <a> so it
 * works with keyboard navigation, downloads and external links.
 */
export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  download,
  external,
  onClick,
  ...rest
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      download={download || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className={`group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 sm:px-6 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {Icon ? (
        <Icon
          className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6"
          aria-hidden="true"
        />
      ) : null}
      <span>{children}</span>
    </motion.a>
  );
}
