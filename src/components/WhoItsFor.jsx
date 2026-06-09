import { COLORS, FONTS, CONTENT } from '../data/tokens';

export default function WhoItsFor({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  return (
    <section id="who-its-for" style={{ width: '100%', backgroundColor: COLORS.surface2, padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '100px 64px', fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.teal, marginBottom: 14 }}>{CONTENT.whoItsFor.eyebrow}</div>
          <h2 style={{ fontSize: isMobile ? 28 : isTablet ? 36 : 42, fontWeight: 700, color: COLORS.tealDeep, lineHeight: 1.15, maxWidth: 680 }}>{CONTENT.whoItsFor.headline}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: 14, padding: isMobile ? 24 : 32, boxShadow: '0 2px 12px rgba(0,79,89,0.06)', borderTop: `3px solid ${COLORS.teal}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: COLORS.surface3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.teal, fontSize: 16, fontWeight: 700 }}>✓</div>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.tealDeep, letterSpacing: '0.04em' }}>This is for you if…</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTENT.whoItsFor.rightFit.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: COLORS.teal, flexShrink: 0, marginTop: 2 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  <span style={{ fontSize: 14, color: COLORS.inkMid, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: 14, padding: isMobile ? 24 : 32, boxShadow: '0 2px 12px rgba(0,79,89,0.06)', borderTop: `3px solid ${COLORS.inkFaint}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.inkFaint, fontSize: 16, fontWeight: 700 }}>✕</div>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: '0.04em' }}>Not right for you if…</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTENT.whoItsFor.wrongFit.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: COLORS.inkFaint, flexShrink: 0, marginTop: 2 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                  <span style={{ fontSize: 14, color: COLORS.inkFaint, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
