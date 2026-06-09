import { COLORS, FONTS, TYPOGRAPHY, CONTENT } from '../data/tokens'

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function Pricing({ bp }) {
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'

  const handleNavigate = (href) => window.open(href, '_blank', 'noopener noreferrer')
  const handleScroll = (anchor) => {
    const el = document.querySelector(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" style={{ backgroundColor: COLORS.tealDeep, color: COLORS.surface, padding: isMobile ? '64px 24px' : isTablet ? '80px 32px' : '100px 64px', fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ ...TYPOGRAPHY.eye, color: COLORS.neon, marginBottom: 16 }}>{CONTENT.pricing.eyebrow}</div>
          <h2 style={{ ...TYPOGRAPHY.h2, fontSize: isMobile ? 28 : isTablet ? 36 : 44, color: COLORS.surface, maxWidth: 640, margin: '0 auto 16px' }}>{CONTENT.pricing.headline}</h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 560, margin: '0 auto' }}>{CONTENT.pricing.sub}</p>
        </div>

        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div style={{ backgroundColor: COLORS.teal, borderRadius: 16, padding: isMobile ? '32px 24px' : '44px 48px', border: `2px solid ${COLORS.neon}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', backgroundColor: COLORS.neon, color: COLORS.tealDeep, padding: '4px 16px', borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {CONTENT.pricing.spotsNote}
            </div>

            <div style={{ textAlign: 'center', marginBottom: 32, marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 4, marginBottom: 6 }}>
                <span style={{ fontSize: isMobile ? 52 : 64, fontWeight: 200, color: COLORS.neon, lineHeight: 1 }}>{CONTENT.pricing.price}</span>
                <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.70)', marginBottom: 10 }}>{CONTENT.pricing.period}</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.60)', marginBottom: 8 }}>{CONTENT.pricing.priceNote}</div>
              <div style={{ display: 'inline-block', fontSize: 12, color: COLORS.neon, padding: '6px 14px', backgroundColor: 'rgba(74,248,212,0.10)', borderRadius: 20, border: `1px solid rgba(74,248,212,0.22)` }}>
                {CONTENT.pricing.feeNote}
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)', marginBottom: 16 }}>Includes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CONTENT.pricing.includes.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: COLORS.neon, flexShrink: 0 }}><CheckIcon /></span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button style={{ width: '100%', padding: '15px', backgroundColor: COLORS.neon, color: COLORS.tealDeep, border: 'none', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: FONTS.sans, marginBottom: 12, transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              onClick={() => handleScroll(CONTENT.pricing.ctaPrimaryAnchor)}>
              {CONTENT.pricing.ctaPrimary}
            </button>

            <button style={{ width: '100%', padding: '13px', backgroundColor: 'transparent', color: COLORS.neon, border: `1.5px solid rgba(74,248,212,0.40)`, borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FONTS.sans, transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.neon }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(74,248,212,0.40)' }}
              onClick={() => handleNavigate(CONTENT.pricing.ctaSecondaryHref)}>
              {CONTENT.pricing.ctaSecondary} ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
