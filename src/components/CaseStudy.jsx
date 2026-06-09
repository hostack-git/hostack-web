import { COLORS, FONTS, CONTENT } from '../data/tokens';

const iconSvg = (name) => {
  const map = {
    clock: (<svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke={COLORS.teal} strokeWidth="2" /><path d="M16 8V16L22 22" stroke={COLORS.teal} strokeWidth="2" strokeLinecap="round" /></svg>),
    zap:   (<svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M13 2L22 14H13L19 30L8 16H16L13 2Z" stroke={COLORS.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    rocket:(<svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 2L20 12H30L22 18L26 28L16 22L6 28L10 18L2 12H12L16 2Z" stroke={COLORS.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    check: (<svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke={COLORS.teal} strokeWidth="2" /><path d="M10 16L14 20L22 12" stroke={COLORS.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  };
  return map[name] || null;
};

const metricIcons = ['clock', 'zap', 'rocket', 'check'];

export default function CaseStudy({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  return (
    <section id="case-study" style={{ width: '100%', backgroundColor: COLORS.surface2, padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '100px 64px', fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.teal, marginBottom: 14 }}>{CONTENT.caseStudy.eyebrow}</div>
          <h2 style={{ fontSize: isMobile ? 28 : isTablet ? 36 : 44, fontWeight: 700, color: COLORS.tealDeep, lineHeight: 1.15, marginBottom: 16, maxWidth: 700 }}>{CONTENT.caseStudy.headline}</h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.inkSoft, lineHeight: 1.65, maxWidth: 680 }}>{CONTENT.caseStudy.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, marginBottom: 48 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: 12, padding: isMobile ? 24 : 32, boxShadow: '0 2px 12px rgba(0,79,89,0.06)', borderTop: `3px solid ${COLORS.inkFaint}` }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.inkFaint, marginBottom: 20 }}>Before</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTENT.caseStudy.before.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: COLORS.inkFaint, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: 14, color: COLORS.inkSoft, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: 12, padding: isMobile ? 24 : 32, boxShadow: '0 2px 12px rgba(0,79,89,0.06)', borderTop: `3px solid ${COLORS.teal}` }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.teal, marginBottom: 20 }}>After Hostack</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTENT.caseStudy.after.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: COLORS.teal, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: COLORS.inkSoft, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? 16 : 24, marginBottom: 48 }}>
          {CONTENT.caseStudy.metrics.map((m, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: isMobile ? '20px 16px' : 28, boxShadow: '0 2px 12px rgba(0,79,89,0.06)', borderTop: `3px solid ${COLORS.teal}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: COLORS.teal, lineHeight: 1 }}>{m.value}</span>
                <span style={{ flexShrink: 0 }}>{iconSvg(metricIcons[i])}</span>
              </div>
              <p style={{ fontSize: 12, color: COLORS.inkSoft, lineHeight: 1.45, margin: 0 }}>{m.label}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 40, textAlign: isMobile ? 'left' : 'center' }}>
          <a href={CONTENT.caseStudy.liveProof.href} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: COLORS.teal, textDecoration: 'none', padding: '10px 20px', border: `1.5px solid ${COLORS.teal}`, borderRadius: 6, transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.teal; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.teal; }}
          >
            <span style={{ fontSize: 10 }}>●</span>
            {CONTENT.caseStudy.liveProof.label} ↗
          </a>
        </div>

        <div style={{ backgroundColor: COLORS.teal, color: '#ffffff', padding: isMobile ? '36px 24px' : '52px 48px', borderRadius: 14, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, left: 24, opacity: 0.12 }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="#ffffff">
              <path d="M12 12C7.58 12 4 15.58 4 20V32C4 36.42 7.58 40 12 40C16.42 40 20 36.42 20 32V20C20 15.58 16.42 12 12 12Z" />
              <path d="M36 12C31.58 12 28 15.58 28 20V32C28 36.42 31.58 40 36 40C40.42 40 44 36.42 44 32V20C44 15.58 40.42 12 36 12Z" />
            </svg>
          </div>
          <p style={{ fontSize: isMobile ? 18 : 22, fontStyle: 'italic', lineHeight: 1.65, color: '#ffffff', marginBottom: 20, position: 'relative', zIndex: 1 }}>
            "{CONTENT.caseStudy.quote.text}"
          </p>
          <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            — {CONTENT.caseStudy.quote.author} · {CONTENT.caseStudy.quote.role}
          </p>
        </div>

      </div>
    </section>
  );
}
