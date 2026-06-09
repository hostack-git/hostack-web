import { COLORS, FONTS, CONTENT } from '../data/tokens';

const InboxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ICON_MAP = { inbox: InboxIcon, users: UsersIcon, phone: PhoneIcon, clock: ClockIcon };

export default function Problem({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  const sectionStyle = {
    width: '100%',
    backgroundColor: COLORS.surface2,
    padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '100px 64px',
    fontFamily: FONTS.sans,
  };

  const innerStyle = { maxWidth: 1100, margin: '0 auto' };

  const eyebrowStyle = {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: COLORS.teal,
    marginBottom: 16,
  };

  const headlineStyle = {
    fontSize: isMobile ? 30 : isTablet ? 38 : 44,
    fontWeight: 700, color: COLORS.tealDeep,
    lineHeight: 1.15, marginBottom: 16, maxWidth: 640,
  };

  const subStyle = {
    fontSize: isMobile ? 15 : 17,
    color: COLORS.inkSoft, lineHeight: 1.65,
    marginBottom: 48, maxWidth: 620,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: 20, marginBottom: 40,
  };

  return (
    <section id="problem" style={sectionStyle}>
      <div style={innerStyle}>
        <div style={eyebrowStyle}>{CONTENT.problem.eyebrow}</div>
        <h2 style={headlineStyle}>{CONTENT.problem.headline}</h2>
        <p style={subStyle}>{CONTENT.problem.sub}</p>

        <div style={gridStyle}>
          {CONTENT.problem.pains.map((pain, i) => {
            const Icon = ICON_MAP[pain.icon] || InboxIcon;
            return (
              <div key={i} style={{
                backgroundColor: '#ffffff',
                padding: isMobile ? 20 : 24,
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,79,89,0.07)',
                borderLeft: `4px solid ${COLORS.teal}`,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  backgroundColor: COLORS.surface3,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: COLORS.teal, flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.tealDeep }}>{pain.title}</div>
                <div style={{ fontSize: 14, color: COLORS.inkSoft, lineHeight: 1.55 }}>{pain.body}</div>
              </div>
            );
          })}
        </div>

        <div style={{
          backgroundColor: COLORS.teal,
          color: '#ffffff',
          padding: isMobile ? '28px 24px' : '36px 40px',
          borderRadius: 14,
          borderLeft: `4px solid ${COLORS.neon}`,
        }}>
          <div style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, marginBottom: 12 }}>
            {CONTENT.problem.differentiator.headline}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)' }}>
            {CONTENT.problem.differentiator.body}
          </div>
        </div>
      </div>
    </section>
  );
}
