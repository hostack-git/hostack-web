// ============================================================
// HOSTACK DESIGN TOKENS — Edit here to change the whole site
// ============================================================

export const COLORS = {
  teal:        '#004F59',
  tealDark:    '#052f36',
  tealDeep:    '#031e23',
  tealMid:     '#084e59',
  turquoise:   '#00BFB3',
  neon:        '#4af8d4',
  neonSoft:    'rgba(74,248,212,0.12)',
  neonMid:     'rgba(74,248,212,0.25)',
  glass:       'rgba(4,78,89,0.45)',
  glassDark:   'rgba(3,30,35,0.65)',
  glassLight:  'rgba(74,248,212,0.06)',
  glassBorder: 'rgba(74,248,212,0.15)',
  surface:     '#ffffff',
  surface2:    '#f4f8f8',
  surface3:    '#e6f0f1',
  ink:         '#0d1f22',
  inkMid:      '#1e3a3f',
  inkSoft:     '#4a6e74',
  inkFaint:    '#7a9ea4',
  border:      'rgba(8,78,89,0.10)',
  borderStrong:'rgba(8,78,89,0.20)',
  success:     '#10B981',
  warning:     '#F59E0B',
  error:       '#EF4444',
};

export const FONTS = {
  sans: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'DM Mono', 'JetBrains Mono', monospace",
};

export const TYPOGRAPHY = {
  h1:  { fontFamily: "'DM Sans', sans-serif", fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.08 },
  h2:  { fontFamily: "'DM Sans', sans-serif", fontWeight: 300, letterSpacing: '0.06em', lineHeight: 1.1 },
  h3:  { fontFamily: "'DM Sans', sans-serif", fontWeight: 400, letterSpacing: '0.07em' },
  h4:  { fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '0.08em' },
  eye: { fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" },
  mono:{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' },
};

export const CONTENT = {

  nav: {
    links: [
      { label: 'How it works', anchor: '#how-it-works' },
      { label: 'Case Study',   anchor: '#case-study' },
      { label: 'Who it\'s for', anchor: '#who-its-for' },
    ],
    cta: 'Apply now',
    ctaAnchor: '#apply',
  },

  hero: {
    badge: 'Co-Build Program · 3 spots · 2026–2027',
    h1: 'Hostack is becoming the ops OS for every hostel and coliving in Europe.',
    h2: 'Right now, we\'re co-building it with 3 properties.',
    sub: 'You get a fully custom ops system built around your property — your workflows, your team, your guests. We get the battle-tested product. Once we open to the world, this level of customization won\'t exist again.',
    cta: 'Apply to co-build',
    ctaAnchor: '#apply',
    ctaSub: 'See the Torridonia case study',
    ctaSubAnchor: '#case-study',
    stats: [
      { value: '#0',       label: 'Torridonia · Scotland · Live since 2026' },
      { value: '3 spots',  label: 'Oct 2026 – Mar 2027' },
      { value: '€99/mo',   label: 'After implementation' },
    ],
  },

  problem: {
    eyebrow: 'The reality of hostel ops',
    headline: 'WhatsApp is not an operating system.',
    sub: 'Between the OTA inboxes, the guest messages, the staff questions, and the constant context-switching — you\'re not running your operation. You\'re drowning in it.',
    pains: [
      {
        icon: 'inbox',
        title: 'Three platforms. Zero clarity.',
        body: 'Booking.com, Hostelworld, Airbnb — each with their own inbox, their own messages, their own timeline. A guest question slips through and you\'re the one apologizing.',
      },
      {
        icon: 'users',
        title: 'Volunteer churn resets you every month.',
        body: 'New Workaway or Worldpackers arrivals start from zero. Nothing is documented. You spend a full week re-explaining the same routines to every new team.',
      },
      {
        icon: 'phone',
        title: 'You\'re glued to your phone.',
        body: 'Guests asking about check-in times. Staff unsure what to do next. Every gap in the process lands in your DMs. There\'s no such thing as a real day off.',
      },
      {
        icon: 'clock',
        title: 'Ops eats the time you meant for everything else.',
        body: 'Coordinating handovers. Chasing updates. Answering the same questions you\'ve answered fifty times. The work of running ops blocks the work of building something.',
      },
    ],
    differentiator: {
      headline: 'This isn\'t a software problem. It\'s a systems problem.',
      body: 'You don\'t need another app to manage. You need the system itself built around your operation — your SOPs documented, your team trained, your communication centralized. That\'s what co-build does.',
    },
  },

  howItWorks: {
    eyebrow: 'How Co-Build works',
    headline: 'Four to six weeks. Documented ops. A system that outlasts us.',
    sub: 'Available on-site (we come to you) or remote with local support — both options work.',
    steps: [
      {
        number: '01',
        phase: 'Weeks 1–2',
        title: 'Ops Audit',
        body: 'We shadow your team — on-site or via daily calls and async docs. Every task, handoff, and point of friction gets mapped. The things held together by memory and goodwill become visible.',
        deliverable: 'Full ops audit document',
      },
      {
        number: '02',
        phase: 'Weeks 2–4',
        title: 'Build & Install',
        body: 'We write your SOPs, configure Hostack for your property, and train your team. New volunteers onboard via QR code. Guest requests route to staff automatically. Nothing runs through you.',
        deliverable: 'Hostack live · SOPs in system · Team trained',
      },
      {
        number: '03',
        phase: 'After we leave',
        title: 'It keeps running',
        body: 'Your team runs shifts from the Staff App. You check the morning dashboard. New arrivals onboard themselves. 30-day direct support line included — no ticket queue.',
        deliverable: '30 days direct support',
      },
    ],
  },

  caseStudy: {
    eyebrow: 'Case Study · #0 · Torridonia',
    headline: 'The manager stopped being the operating system.',
    sub: 'Torridonia is a creative hub for travelers from around the world in the Scottish Highlands. 12 volunteers, rotating every few weeks. Managing and developing it since late 2025 — the place where Hostack was born in early 2026.',
    before: [
      { title: 'Manager as the bottleneck', desc: 'Every handover, question, or gap in the shift lands in one person\'s WhatsApp. No real day off exists.' },
      { title: 'New volunteer = a lost week', desc: '2–3 days per new arrival to get up to speed. Nothing is documented. The whole cycle repeats every rotation.' },
      { title: 'Guest requests buried in group chat', desc: 'Sent to WhatsApp. No assigned owner, no follow-up. Problems surface only after guests notice.' },
      { title: 'Daily briefing sent by hand', desc: 'The manager writes and sends updates to each volunteer every morning. At 12 people, that\'s the first hour of every day — gone.' },
    ],
    after: [
      { title: 'One dashboard. Full picture.', desc: 'One glance every morning — what happened overnight, who\'s on shift, what needs attention. Nothing to ask, nothing to send.' },
      { title: 'New volunteer: productive in under an hour', desc: 'QR code on arrival. SOPs, shift context, checklist — all there. No one-on-one walkthrough required.' },
      { title: 'Requests go to a task, not a chat', desc: 'Routed automatically to the staff task list. Assigned, tracked, closed. The manager sees it only if it escalates.' },
      { title: 'Briefings pushed automatically at shift start', desc: 'The Staff App sends the daily brief. 30 seconds to read. Nothing to write, nothing to follow up on.' },
    ],
    metrics: [
      { value: '3 hrs',  sup: '',    label: 'Manager time freed every morning',    desc: 'From manual WhatsApp briefings and follow-ups to one dashboard check. Every day.' },
      { value: '<1',     sup: 'hr',  label: 'New volunteer onboarding time',        desc: 'Previously 2–3 days of hand-holding per arrival. Now independent from hour one.' },
      { value: '0',      sup: '',    label: 'Briefings sent by the manager',        desc: 'From 12 manual messages every morning to zero. The system handles it automatically.' },
      { value: '100',    sup: '%',   label: 'Team adoption — nobody dropped off',   desc: '12 rotating volunteers since launch. Every single person has used it from day one.' },
    ],
    liveProof: {
      label: 'See the Staff App in action →',
      href: '/demo',
    },
    quote: {
      text: 'The dashboard is the first thing I check every morning. It tells me exactly what happened overnight and what needs my attention today. I don\'t need to ask anyone anything.',
      author: 'Felix',
      role: 'Torridonia, Scottish Highlands',
    },
  },

  whatYouGet: {
    eyebrow: 'What\'s included',
    headline: 'One implementation. Everything to make it stick — and keep running.',
    deliverables: [
      { icon: 'doc',      title: 'Ops Audit Document',        body: 'Written record of your current workflows, gaps, and recommendations.' },
      { icon: 'list',     title: 'Custom SOPs',               body: 'Standard operating procedures written for your property and team.' },
      { icon: 'settings', title: 'Hostack Configuration',     body: 'System built for your property: guest flows, task types, team structure.' },
      { icon: 'users',    title: 'Team Training',             body: 'Every staff member and volunteer trained before we leave.' },
      { icon: 'qr',       title: 'Volunteer Onboarding QR',   body: 'New arrivals onboard themselves — no manager required.' },
      { icon: 'support',  title: '30-Day Support Line',       body: 'Direct line post-implementation. No ticket queue, no waiting.' },
    ],
    roadmapCallout: {
      headline: 'Why this matters now.',
      body: 'Once Hostack launches as a self-serve SaaS, every operator gets the same standard product. Co-Build partners get the only fully custom implementation we\'ll ever do — built around their specific operation. Your €99/month rate is locked for life.',
    },
  },

  whoItsFor: {
    eyebrow: 'Who this is for',
    headline: 'Independent hostels and colivings running on WhatsApp and goodwill.',
    rightFit: [
      'Independent hostel or coliving, 5–50 beds',
      '3–20 staff or Workaway / Worldpackers volunteers',
      'Managing ops via WhatsApp and spreadsheets',
      'Manager is the bottleneck — everything runs through one person',
      'Based in Europe (on-site) or open to remote with local support',
    ],
    wrongFit: [
      'Part of a hotel chain with a dedicated ops team',
      'Looking for a self-serve SaaS to figure out yourself',
      'Need immediate results — implementation takes 4–6 weeks',
      'Not open to working closely with an external team',
    ],
  },

  founderSection: {
    eyebrow: 'Built by an operator, for operators',
    body: '5 years managing hostels and colivings across Europe. Currently at Torridonia in the Scottish Highlands. Hostack was built because it was the tool I needed — and no one had built it yet. The Co-Build Program exists because the only way to build the right product is to build it from the inside.',
    name: 'Jorge Ibáñez',
    role: 'Founder, Hostack',
  },

  pricing: {
    eyebrow: 'Investment',
    headline: 'One implementation. One subscription. One rate, locked for life.',
    sub: 'Co-Build partners lock in their subscription rate before the SaaS launches. It won\'t change when we open to the world.',
    price: '€99',
    period: '/ month',
    priceNote: 'After implementation',
    feeNote: 'One-time implementation fee — discussed on application, based on property size and scope.',
    includes: [
      'Ops Audit Document',
      'Custom SOPs for your property',
      'Hostack configured for your team',
      'Full team training',
      'Volunteer onboarding QR',
      '30-day post-implementation support',
    ],
    spotsNote: '3 properties · Oct 2026 – Mar 2027',
    ctaPrimary: 'Apply for Co-Build',
    ctaPrimaryAnchor: '#apply',
    ctaSecondary: 'Book a discovery call',
    ctaSecondaryHref: 'https://calendly.com/jorgebtco/cobu',
  },

  apply: {
    eyebrow: 'Apply',
    headline: 'Tell us about your property.',
    sub: 'We review every application personally. If it\'s a good fit, we\'ll send a scoped proposal within 48 hours.',
    spotsLeft: 3,
    totalSpots: 3,
    formButtonLabel: 'Send application',
    successTitle: 'Application received.',
    successBody: 'We\'ll review it personally and reach out within 48 hours with next steps or a proposal.',
    calendlyLabel: 'Prefer to talk first? Book a 30-min discovery call',
    calendlyHref: 'https://calendly.com/jorgebtco/cobu',
  },

  footer: {
    tagline: 'Operations built from the inside out.',
    sub: 'Made by operators, for operators.',
    available: 'Accepting Co-Build applications for 2026–2027',
    links: [
      { label: 'How it works',  href: '#how-it-works' },
      { label: 'Case Study',    href: '#case-study' },
      { label: 'Who it\'s for', href: '#who-its-for' },
      { label: 'Apply',         href: '#apply' },
      { label: 'Contact',       href: 'mailto:hello@hostack.co' },
    ],
    copyright: `© ${new Date().getFullYear()} Hostack. All rights reserved.`,
  },
};
