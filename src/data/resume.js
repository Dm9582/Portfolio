/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Everything shown on the site comes from this file. Edit content here — no
 *  component changes required.
 *
 *  Content is taken from "Dhruv-Kumar-Resume-Updated.pdf". Nothing was invented.
 *  Items that were missing are marked with a comment and listed in README.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const resume = {
  // ── Identity ───────────────────────────────────────────────────────────────
  name: 'Dhruv Kumar',
  firstName: 'Dhruv',
  lastName: 'Kumar',
  initials: 'DK',
  headline: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'React Developer', 'Software Engineer', 'CSE Student'],
  tagline: 'Building efficient, user-focused software solutions.',
  availability: 'Open to Software Development roles',

  // Add a photo to /public (e.g. /portrait.jpg) and set this to "portrait.jpg".
  // When null, a designed placeholder is shown.
  photo: null,

  summary: [
    'Computer Science Engineering student with a strong foundation in programming, software development, and problem-solving.',
    'Proficient in JavaScript, React, Node.js, Express.js, SQL, and Git, with an interest in full-stack development and building efficient, user-focused software solutions.',
    'Seeking a Software Development role to apply technical skills and grow as a software professional.',
  ],

  // ── Contact & links (URLs extracted from the PDF annotations) ──────────────
  contact: {
    email: 'dhruv95682@gmail.com',
    phone: '+9565145878',
    phoneHref: 'tel:+9565145878',
    github: 'https://github.com/Dm9582',
    linkedin: 'https://www.linkedin.com/in/dhruv-kumar-6338481b7/',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/Dm9582', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruv-kumar-6338481b7/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:dhruv95682@gmail.com', icon: 'mail' },
  ],

  // Resume file lives in /public. Replace it without touching any component.
  resumeFile: 'resume.pdf',

  // ── Quick stats (all verifiable from the resume) ───────────────────────────
  // "Years of experience" is intentionally not claimed — only one internship is listed.
  stats: [
    { value: 1, label: 'Virtual internship', decimals: 0 },
    { value: 2, label: 'Projects built', decimals: 0 },
    { value: 18, label: 'Technologies & tools', decimals: 0 },
    { value: 8.67, label: 'Current CGPA', decimals: 2 },
  ],

  // ── Skills ─────────────────────────────────────────────────────────────────
  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'code',
      description: 'Interfaces that feel clear and responsive.',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: 'server',
      description: 'APIs and server-side logic.',
      items: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      id: 'database',
      title: 'Database',
      icon: 'database',
      description: 'Structured data and queries.',
      items: ['SQL'],
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: 'wrench',
      description: 'Tools I use to build and collaborate.',
      items: ['Git', 'GitHub', 'VS Code'],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: 'terminal',
      description: 'Languages I use for problem-solving and scripting.',
      items: ['C++', 'Python'],
    },
    {
      id: 'servicenow',
      title: 'ServiceNow',
      icon: 'workflow',
      description: 'Platform tools explored during my virtual internship.',
      items: [
        'Visual Task Boards',
        'Service Catalog',
        'Knowledge Management',
        'Workflow Studio',
        'Platform Analytics',
      ],
      featured: true,
    },
  ],

  // ── Experience ─────────────────────────────────────────────────────────────
  experience: [
    {
      id: 'servicenow',
      role: 'ServiceNow Virtual Internship Program',
      company: 'SmartBridge & ServiceNow',
      period: 'May 2026 – June 2026',
      location: 'Remote',
      bullets: [
        'Completed a hands-on virtual internship focused on ServiceNow platform fundamentals, workflow automation, incident management, and platform analytics.',
        'Gained practical experience with ServiceNow tools including Visual Task Boards, Service Catalog, Knowledge Management, Workflow Studio, and Platform Analytics.',
        'Engaged in real-world learning activities and guided sessions to develop enterprise workflow and IT service management skills.',
      ],
      tags: ['ServiceNow', 'Workflow Automation', 'ITSM', 'Platform Analytics'],
    },
  ],

  // ── Projects ───────────────────────────────────────────────────────────────
  // Deployment links verified on 7 Nov 2026.
  // MedSync is deployed to Vercel in demo mode from the GitHub repository.
  // EDUCHECK: README deployment URL is live; the repo homepage field is stale.
  projects: [
    {
      id: 'medsync',
      title: 'MedSync',
      subtitle: 'Hospital Management System',
      period: 'Nov 2025 – Feb 2026',
      overview:
        'A hospital management platform for handling patients, doctors, and appointment scheduling.',
      bullets: [
        'Managed patients, doctors, and appointment scheduling.',
        'Implemented secure user authentication and RESTful APIs.',
        'Developed a responsive frontend using React.',
      ],
      // Tags reflect only what the resume states.
      tags: ['React', 'RESTful APIs', 'Authentication'],
      repo: 'https://github.com/Dm9582/MedSync',
      // Verified live deployment (demo mode).
      live: 'https://medsync-hospital.vercel.app',
      visual: 'hospital',
    },
    {
      id: 'educheck',
      title: 'EDUCHECK',
      subtitle: 'Education Management System',
      period: 'March 2025 – Sept 2025',
      overview:
        'An education platform with real-time communication, attendance tracking, and course tools for teachers.',
      bullets: [
        'Built real-time chat and attendance tracking modules.',
        'Added profile management and assignment systems.',
        'Enabled course management for teachers.',
      ],
      // The resume does not list EDUCHECK's stack, so these describe modules only.
      tags: ['Real-time chat', 'Attendance', 'Course management'],
      repo: 'https://github.com/Dm9582/EDUCHECK',
      // Verified live deployment from the repository README.
      live: 'https://educheck-rust.vercel.app',
      visual: 'education',
    },
  ],

  // ── Education ──────────────────────────────────────────────────────────────
  education: [
    {
      id: 'vit-bhopal',
      qualification: 'Computer Science Engineering',
      institution: 'VIT Bhopal University',
      period: '2023 – 2027',
      score: 'CGPA 8.67',
      current: true,
    },
    {
      id: 'class-xii',
      qualification: 'XII (CBSE)',
      institution: 'Army Public School',
      period: '2022',
      score: '87%',
    },
    {
      id: 'class-x',
      qualification: 'X (CBSE)',
      institution: 'Army Public School',
      period: '2020',
      score: '88.4%',
    },
  ],

  // ── Certifications ─────────────────────────────────────────────────────────
  certifications: [
    {
      id: 'google-it-support',
      name: 'Google IT Support Certificate',
      issuer: 'Google',
      year: '2026',
    },
    {
      id: 'servicenow-micro',
      name: 'Micro-Certification - Welcome to ServiceNow (Zurich)',
      issuer: 'ServiceNow',
      year: '2026',
    },
  ],

  // The resume has no achievements section, so it is intentionally omitted.
  achievements: [],
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default resume;
