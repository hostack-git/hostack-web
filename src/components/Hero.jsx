import { COLORS, FONTS, TYPOGRAPHY, CONTENT } from '../data/tokens'

export default function Hero({ bp }) {
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'

  const handleScroll = (anchor) => {
    const el = document.querySelector(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const containerStyle = {
    backgroundColor: COLORS.tealDeep,
    color: COLORS.surface,
    padding: isMobile ? '80px 24px 64px' : isTablet ? '100px 32px 80px' : '120px 64px 100px',
    minHeight: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: isMobile ? 'flex-start' : 'center',
    textAlign: isMobile ? 'left' : 'center',
    fontFamily: FONTS.sans,
  }

  const badgeStyle = {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    color: COLORS.neon,
    marginBottom: 40,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }

  const neonDotStyle = {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: COLORS.neon,
    display: 'inline-block',
    flexShrink: 0,
    animation: 'pulse-dot 2s ease-in-out infinite',
  }

  const h1Style = {
    ...TYPOGRAPHY.h1,
    fontSize: isMobile ? 32 : isTablet ? 44 : 56,
    fontWeight: 300,
    color: COLORS.surface,
    marginBottom: 16,
    lineHeight: 1.12,
    maxWidth: isMobile ? '100%' : '860px',
  }

  const h2Style = {
    ...TYPOGRAPHY.h2,
    fontSize: isMobile ? 22 : isTablet ? 28 : 34,
    fontWeight: 400,
    color: COLORS.neon,
    marginBottom: 28,
    maxWidth: isMobile ? '100%' : '700px',
  }

  const subStyle = {
    fontSize: isMobile ? 15 : 17,
    lineHeight: 1.65,
    color: 'rgba(255,255,255,0.72)',
    marginBottom: 52,
    maxWidth: isMobile ? '100%' : '640px',
    fontFamily: FONTS.sans,
  }

  const ctaContainerStyle = {
    display: 'flex',
    gap: isMobile ? 12 : 16,
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: 80,
    width: isMobile ? '100%' : 'auto',
  }

  const primaryButtonStyle = {
    padding: isMobile ? '14px 20px' : '14px 32px',
    backgroundColor: COLORS.neon,
    color: COLORS.teal,
    border: 'none',
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: FONTS.sans,
    width: isMobile ? '100%' : 'auto',
  }

  const secondaryButtonStyle = {
    padding: isMobile ? '14px 20px' : '14px 28px',
    backgroundColor: 'transparent',
    color: COLORS.neon,
    border: `1.5px solid rgba(74,248,212,0.5)`,
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: FONTS.sans,
    width: isMobile ? '100%' : 'auto',
  }

  const statsRowStyle = {
    display: 'flex',
    gap: 0,
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '100%' : 'auto',
    maxWidth: '700px',
    borderTop: `1px solid rgba(74,248,212,0.15)`,
    paddingTop: 40,
  }

  const statItemStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'flex-start' : 'center',
    padding: isMobile ? '16px 0' : '0 32px',
    borderRight: !isMobile ? `1px solid rgba(74,248,212,0.15)` : 'none',
    borderBottom: isMobile ? `1px solid rgba(74,248,212,0.10)` : 'none',
    gap: 6,
  }

  return (
    <>
      <section style={containerStyle} id="hero">
        <div style={badgeStyle}>
          <span style={neonDotStyle} />
          {CONTENT.hero.badge}
        </div>

        <h1 style={h1Style}>{CONTENT.hero.h1}</h1>
        <h2 style={h2Style}>{CONTENT.hero.h2}</h2>

        <p style={subStyle}>{CONTENT.hero.sub}</p>

        <div style={ctaContainerStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            onClick={() => handleScroll(CONTENT.hero.ctaAnchor)}
          >
            {CONTENT.hero.cta}
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.neon; e.currentTarget.style.color = COLORS.neon }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(74,248,212,0.5)'; e.currentTarget.style.color = COLORS.neon }}
            onClick={() => handleScroll(CONTENT.hero.ctaSubAnchor)}
          >
            {CONTENT.hero.ctaSub} →
          </button>
        </div>

        <div style={statsRowStyle}>
          {CONTENT.hero.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                ...statItemStyle,
                borderRight: !isMobile && i < CONTENT.hero.stats.length - 1 ? `1px solid rgba(74,248,212,0.15)` : 'none',
                paddingLeft: !isMobile && i === 0 ? 0 : (!isMobile ? 32 : 0),
                paddingRight: !isMobile && i === CONTENT.hero.stats.length - 1 ? 0 : (!isMobile ? 32 : 0),
              }}
            >
              <span style={{ fontSize: isMobile ? 22 : 26, fontWeight: 600, color: COLORS.neon, fontFamily: FONTS.sans }}>{stat.value}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,248,212,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(74,248,212,0); }
        }
      `}</style>
    </>
  )
}
