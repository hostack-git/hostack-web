import { COLORS, FONTS, TYPOGRAPHY, CONTENT } from '../data/tokens';

export default function HowItWorks({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  const sectionStyle = {
    width: '100%',
    backgroundColor: COLORS.tealDeep,
    padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '100px 64px',
    fontFamily: FONTS.sans,
    color: COLORS.surface,
  };

  const innerStyle = { maxWidth: 1100, margin: '0 auto' };

  const eyebrowStyle = {
    ...TYPOGRAPHY.eye,
    color: COLORS.neon,
    marginBottom: 16,
  };

  const headlineStyle = {
    ...TYPOGRAPHY.h2,
    fontSize: isMobile ? 28 : isTablet ? 36 : 42,
    color: COLORS.surface,
    marginBottom: 12,
  };

  const subStyle = {
    fontSize: isMobile ? 14 : 16,
    color: 'rgba(255,255,255,0.60)',
    marginBottom: isMobile ? 48 : 64,
    lineHeight: 1.6,
  };

  return (
    <section id="how-it-works" style={sectionStyle}>
      <div style={innerStyle}>
        <div style={eyebrowStyle}>{CONTENT.howItWorks.eyebrow}</div>
        <h2 style={headlineStyle}>{CONTENT.howItWorks.headline}</h2>
        <p style={subStyle}>{CONTENT.howItWorks.sub}</p>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', position: 'relative' }}>
          {CONTENT.howItWorks.steps.map((step, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: isMobile ? '32px 0' : '0 40px 0 0',
                borderLeft: isMobile ? `2px solid ${i === 0 ? COLORS.neon : 'rgba(74,248,212,0.20)'}` : 'none',
                borderTop: !isMobile ? `2px solid ${i === 0 ? COLORS.neon : 'rgba(74,248,212,0.20)'}` : 'none',
                paddingLeft: isMobile ? 28 : 0,
                paddingTop: !isMobile ? 28 : 0,
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute',
                top: isMobile ? 36 : -7,
                left: isMobile ? -7 : '50%',
                transform: isMobile ? 'translateY(0)' : 'translateX(-50%)',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: i === 0 ? COLORS.neon : 'rgba(74,248,212,0.35)',
                border: `2px solid ${COLORS.tealDeep}`,
              }} />

              <div style={{ fontSize: isMobile ? 36 : 40, fontWeight: 200, color: 'rgba(74,248,212,0.25)', lineHeight: 1, marginBottom: 8, fontFamily: FONTS.sans }}>
                {step.number}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.neon, marginBottom: 10 }}>
                {step.phase}
              </div>
              <div style={{ fontSize: isMobile ? 18 : 20, fontWeight: 600, color: COLORS.surface, marginBottom: 12 }}>
                {step.title}
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, marginBottom: 20 }}>
                {step.body}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', backgroundColor: 'rgba(74,248,212,0.10)', border: `1px solid rgba(74,248,212,0.22)`, borderRadius: 20, fontSize: 12, color: COLORS.neon, fontWeight: 500 }}>
                <span style={{ fontSize: 10 }}>✓</span>
                {step.deliverable}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: isMobile ? 48 : 64, textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.50)', letterSpacing: '0.04em' }}>
          4–6 weeks on-site or remote · One fixed fee · €99/month after
        </div>
      </div>
    </section>
  );
}
