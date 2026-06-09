import { COLORS, FONTS, CONTENT } from '../data/tokens';

export default function FounderSection({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  return (
    <section id="founder" style={{ width: '100%', backgroundColor: COLORS.teal, padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '80px 64px', fontFamily: FONTS.sans, color: '#ffffff' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 28 : 48, alignItems: isMobile ? 'flex-start' : 'center' }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.neon, marginBottom: 4 }}>
            {CONTENT.founderSection.eyebrow}
          </div>
        </div>
        <div>
          <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', marginBottom: 20 }}>
            "{CONTENT.founderSection.body}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 1, height: 32, backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{CONTENT.founderSection.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{CONTENT.founderSection.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
