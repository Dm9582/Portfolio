import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import resume from '../data/resume';
import { asset } from '../utils/asset';
import ButtonLink from '../components/ButtonLink';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

const RESUME_URL = asset(resume.resumeFile);
const EMPTY_FORM = { name: '', email: '', message: '' };
const FIELD_ORDER = ['name', 'email', 'message'];

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: resume.contact.email,
    href: `mailto:${resume.contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: resume.contact.phone,
    href: resume.contact.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'in/dhruv-kumar-6338481b7',
    href: resume.contact.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@Dm9582',
    href: resume.contact.github,
    icon: Github,
    external: true,
  },
];

function validateField(field, value) {
  const trimmed = value.trim();

  if (field === 'name' && trimmed.length < 2) {
    return 'Please enter your name (at least 2 characters).';
  }
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  if (field === 'message' && trimmed.length < 10) {
    return 'Please add a message of at least 10 characters.';
  }
  return '';
}

function validateForm(values) {
  return FIELD_ORDER.reduce((result, field) => {
    result[field] = validateField(field, values[field]);
    return result;
  }, {});
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState(`mailto:${resume.contact.email}`);
  const successRef = useRef(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      requestAnimationFrame(() => document.getElementById(`contact-${firstInvalid}`)?.focus());
      return;
    }

    const subject = `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;
    const url = `mailto:${resume.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoUrl(url);
    setSent(true);
    window.location.href = url;
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setSent(false);
    requestAnimationFrame(() => document.getElementById('contact-name')?.focus());
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad relative overflow-hidden border-t border-line/60"
    >
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-shell relative">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          titleId="contact-title"
          title="Let's build something useful."
          description="Open to a Software Development role, a project, or a conversation about full-stack development."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
              I&apos;m currently seeking a Software Development role. If you have an opportunity or
              an idea in mind, the fastest way to reach me is by email.
            </p>

            <ul className="mt-7 space-y-3">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface/80"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-bg/50 text-muted transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-medium text-fg">
                          {link.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <ButtonLink
                href={RESUME_URL}
                download="Dhruv-Kumar-Resume.pdf"
                variant="secondary"
                icon={Download}
              >
                Download Resume
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface/60 p-6 shadow-card sm:p-8">
              {sent ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[22rem] flex-col items-center justify-center text-center outline-none"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    Your email app should be opening.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    The message is ready to review and send. If nothing opened, email me directly
                    at{' '}
                    <a
                      href={`mailto:${resume.contact.email}`}
                      className="font-medium text-accent link-underline"
                    >
                      {resume.contact.email}
                    </a>
                    .
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <ButtonLink href={mailtoUrl}>Open email app</ButtonLink>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/30 hover:text-fg"
                    >
                      Write another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-display text-lg font-semibold">Send a message</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      Fill in the form and it will open your email app with the message ready to
                      send.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="mt-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block text-xs font-medium text-fg"
                        >
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          placeholder="Your name"
                          className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors duration-200 focus:border-accent focus:ring-2 focus:ring-accent/15 ${
                            errors.name ? 'border-red-500/60' : 'border-line'
                          }`}
                        />
                        {errors.name ? (
                          <p
                            id="contact-name-error"
                            role="alert"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block text-xs font-medium text-fg"
                        >
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          placeholder="you@example.com"
                          className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors duration-200 focus:border-accent focus:ring-2 focus:ring-accent/15 ${
                            errors.email ? 'border-red-500/60' : 'border-line'
                          }`}
                        />
                        {errors.email ? (
                          <p
                            id="contact-email-error"
                            role="alert"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-medium text-fg"
                      >
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        placeholder="Tell me a little about the role or project..."
                        className={`w-full resize-y rounded-xl border bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors duration-200 focus:border-accent focus:ring-2 focus:ring-accent/15 ${
                          errors.message ? 'border-red-500/60' : 'border-line'
                        }`}
                      />
                      {errors.message ? (
                        <p
                          id="contact-message-error"
                          role="alert"
                          className="mt-2 text-xs text-red-600 dark:text-red-400"
                        >
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                      className="group mt-5 inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast shadow-[0_14px_38px_-18px_rgb(var(--c-accent)/0.85)] transition-colors hover:bg-accent/90"
                    >
                      <Send
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                      Send message
                    </motion.button>

                    <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
                      No data is stored on this site. This opens your email client.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
