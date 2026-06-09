import { COLORS, FONTS, CONTENT } from '../data/tokens';

const deliverableIcons = {
  doc:     (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
  list:    (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
  settings:(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>),
  users:   (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  qr:      (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M17 17h4"/><path d="M21 14v3"/></svg>),
  support: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
};

export default function WhatYouGet({ bp }) {
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  return (
    <section id="what-you-get" style={{ width: '100%', backgroundColor: '#ffffff', padding: isMobile ? '64px 24px' : isTablet ? '80px 40px' : '100px 64px', fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.teal, marginBottom: 14 }}>{CONTENT.whatYouGet.eyebrow}</div>
          <h2 style={{ fontSize: isMobile ? 28 : isTablet ? 36 : 42, fontWeight: 700, color: COLORS.tealDeep, lineHeight: 1.15, maxWidth: 640 }}>{CONTENT.whatYouGet.headline}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
          {CONTENT.whatYouGet.deliverables.map((d, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, padding: isMobile ? 20 : 24, backgroundColor: COLORS.surface2, borderRadius: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: COLORS.surface3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.teal, flexShrink: 0 }}>
                {deliverableIcons[d.icon]}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: COLORS.tealDeep, marginBottom: 6 }}>{d.title}</div>
                <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.55 }}>{d.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: COLORS.tealDeep, color: '#ffffff', padding: isMobile ? '28px 24px' : '36px 44px', borderRadius: 14, borderLeft: `4px solid ${COLORS.neon}`, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, alignItems: isMobile ? 'flex-start' : 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(74,248,212,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.neon, flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.neon, marginBottom: 8 }}>{CONTENT.whatYouGet.roadmapCallout.headline}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65 }}>{CONTENT.whatYouGet.roadmapCallout.body}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
