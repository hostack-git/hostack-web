import { useState } from 'react'
import { COLORS, FONTS, TYPOGRAPHY, CONTENT } from '../data/tokens'

const ChevronIcon = ({ open }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CrossIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

function AccordionCard({ label, accent, items, Icon, iconColor, tagColor, tagBg, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 2px 20px rgba(0,79,89,0.07)',
      borderTop: `3px solid ${accent}`,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: FONTS.sans,
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 26, height: 26, borderRadius: '50%',
            backgroundColor: tagBg, color: tagColor,
          }}>
            <Icon />
          </span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: tagColor }}>
            {label}
          </span>
        </div>
        <span style={{ color: accent }}>
          <ChevronIcon open={open} />
        </span>
      </button>

      <div style={{ maxHeight: open ? '800px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <div style={{ borderTop: `1px solid rgba(0,79,89,0.07)` }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 14,
              padding: '16px 20px',
              borderBottom: i < items.length - 1 ? `1px solid rgba(0,79,89,0.05)` : 'none',
              alignItems: 'flex-start',
            }}>
              <span style={{ color: iconColor, flexShrink: 0, marginTop: 3, display: 'inline-flex' }}>
                <Icon />
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.inkMid, marginBottom: 3, lineHeight: 1.3 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.55 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DesktopCard({ label, accent, items, Icon, iconColor, tagColor, bgHeader }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 2px 20px rgba(0,79,89,0.07)',
      borderTop: `3px solid ${accent}`,
    }}>
      <div style={{
        padding: '18px 28px 16px',
        borderBottom: `1px solid rgba(0,79,89,0.07)`,
        backgroundColor: bgHeader,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 26, height: 26, borderRadius: '50%',
          backgroundColor: accent === COLORS.teal ? 'rgba(0,79,89,0.10)' : 'rgba(122,158,164,0.15)',
          color: tagColor,
        }}>
          <Icon />
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: tagColor }}>
          {label}
        </span>
      </div>
      <div>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, padding: '16px 28px',
            borderBottom: i < items.length - 1 ? `1px solid rgba(0,79,89,0.05)` : 'none',
            alignItems: 'flex-start',
          }}>
            <span style={{ color: iconColor, flexShrink: 0, marginTop: 3, display: 'inline-flex' }}>
              <Icon />
            </span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.inkMid, marginBottom: 3, lineHeight: 1.3 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.55 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CaseStudy({ bp }) {
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'

  return (
    <section id="case-study" style={{
      width: '100%',
      backgroundColor: COLORS.surface2,
      padding: isMobile ? '64px 20px' : isTablet ? '80px 40px' : '100px 64px',
      fontFamily: FONTS.sans,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? 40 : 52 }}>
          <div style={{ ...TYPOGRAPHY.eye, color: COLORS.teal, marginBottom: 16 }}>
            {CONTENT.caseStudy.eyebrow}
          </div>
          <h2 style={{
            fontFamily: FONTS.sans,
            fontSize: isMobile ? 30 : isTablet ? 38 : 48,
            fontWeight: 700,
            color: COLORS.tealDeep,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: 16,
            maxWidth: 680,
          }}>
            {CONTENT.caseStudy.headline}
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.inkSoft, lineHeight: 1.65, maxWidth: 640 }}>
            {CONTENT.caseStudy.sub}
          </p>
        </div>

        {/* Transformation bar */}
        <div style={{
          backgroundColor: COLORS.tealDeep,
          borderRadius: 14,
          padding: isMobile ? '24px 20px' : '32px 44px',
          marginBottom: isMobile ? 20 : 32,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 16 : 40,
          alignItems: isMobile ? 'flex-start' : 'center',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 8 }}>
              Before
            </div>
            <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 300, color: '#ffffff', lineHeight: 1.45, fontFamily: FONTS.sans }}>
              Manager online every morning.{' '}
              <span style={{ fontWeight: 600 }}>Everything runs through one person.</span>
            </div>
          </div>
          <div style={{
            fontSize: isMobile ? 20 : 26, color: COLORS.neon, opacity: 0.55, flexShrink: 0,
            transform: isMobile ? 'rotate(90deg)' : 'none',
          }}>→</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.neon, opacity: 0.65, marginBottom: 8 }}>
              After Hostack
            </div>
            <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 300, color: '#ffffff', lineHeight: 1.45, fontFamily: FONTS.sans }}>
              Team runs the shift.{' '}
              <span style={{ fontWeight: 600, color: COLORS.neon }}>Manager checks one dashboard.</span>
            </div>
          </div>
        </div>

        {/* Before / After — accordion on mobile, side-by-side on desktop */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            <AccordionCard
              label="Before"
              accent={COLORS.inkFaint}
              items={CONTENT.caseStudy.before}
              Icon={CrossIcon}
              iconColor={COLORS.inkFaint}
              tagColor={COLORS.inkSoft}
              tagBg="rgba(122,158,164,0.14)"
              defaultOpen={false}
            />
            <AccordionCard
              label="After Hostack"
              accent={COLORS.teal}
              items={CONTENT.caseStudy.after}
              Icon={CheckIcon}
              iconColor={COLORS.teal}
              tagColor={COLORS.teal}
              tagBg="rgba(0,79,89,0.10)"
              defaultOpen={true}
            />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            <DesktopCard
              label="Before"
              accent={COLORS.inkFaint}
              items={CONTENT.caseStudy.before}
              Icon={CrossIcon}
              iconColor={COLORS.inkFaint}
              tagColor={COLORS.inkSoft}
              bgHeader="#fafafa"
            />
            <DesktopCard
              label="After Hostack"
              accent={COLORS.teal}
              items={CONTENT.caseStudy.after}
              Icon={CheckIcon}
              iconColor={COLORS.teal}
              tagColor={COLORS.teal}
              bgHeader="#f0faf9"
            />
          </div>
        )}

        {/* Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 10 : 16,
          marginBottom: isMobile ? 32 : 44,
        }}>
          {CONTENT.caseStudy.metrics.map((m, i) => (
            <div key={i} style={{
              backgroundColor: '#ffffff',
              borderRadius: 12,
              padding: isMobile ? '20px 16px' : '28px 24px',
              boxShadow: '0 2px 16px rgba(0,79,89,0.06)',
              borderTop: `3px solid ${COLORS.teal}`,
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? 6 : 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, lineHeight: 1 }}>
                <span style={{
                  fontSize: isMobile ? 28 : 36,
                  fontWeight: 700,
                  color: COLORS.teal,
                  letterSpacing: '-0.02em',
                  fontFamily: FONTS.sans,
                }}>
                  {m.value}
                </span>
                {m.sup && (
                  <span style={{ fontSize: isMobile ? 13 : 16, fontWeight: 500, color: COLORS.teal, marginBottom: isMobile ? 3 : 5 }}>
                    {m.sup}
                  </span>
                )}
              </div>
              <div style={{ fontSize: isMobile ? 12 : 13, fontWeight: 600, color: COLORS.tealDeep, lineHeight: 1.35 }}>
                {m.label}
              </div>
              {!isMobile && (
                <div style={{ fontSize: 12, color: COLORS.inkFaint, lineHeight: 1.5, marginTop: 2 }}>
                  {m.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Live proof */}
        <div style={{ marginBottom: isMobile ? 32 : 44, textAlign: isMobile ? 'left' : 'center' }}>
          <a
            href={CONTENT.caseStudy.liveProof.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.teal,
              textDecoration: 'none',
              padding: '11px 22px',
              border: `1.5px solid ${COLORS.teal}`,
              borderRadius: 6,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.teal; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.teal }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              backgroundColor: COLORS.neon, flexShrink: 0,
              animation: 'pulse-live-cs 2s ease-in-out infinite',
            }} />
            {CONTENT.caseStudy.liveProof.label} ↗
          </a>
        </div>

        {/* Quote */}
        <div style={{
          backgroundColor: COLORS.teal,
          borderRadius: 14,
          padding: isMobile ? '36px 24px' : '52px 56px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -16, left: 28,
            fontSize: 160, fontWeight: 700,
            color: 'rgba(255,255,255,0.06)',
            lineHeight: 1, fontFamily: 'Georgia, serif',
            userSelect: 'none', pointerEvents: 'none',
          }}>
            "
          </div>
          <p style={{
            fontFamily: FONTS.sans,
            fontSize: isMobile ? 17 : 22,
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.65,
            color: '#ffffff',
            marginBottom: 24,
            position: 'relative',
            maxWidth: 680,
          }}>
            "{CONTENT.caseStudy.quote.text}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', fontFamily: FONTS.sans }}>
                {CONTENT.caseStudy.quote.author}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2, fontFamily: FONTS.sans }}>
                {CONTENT.caseStudy.quote.role}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse-live-cs {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,248,212,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(74,248,212,0); }
        }
      `}</style>
    </section>
  )
}
