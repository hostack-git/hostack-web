import { useState } from 'react'
import { COLORS, FONTS, TYPOGRAPHY, CONTENT } from '../data/tokens'

export default function Apply({ bp }) {
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'

  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    propertyName: '',
    propertyType: 'hostel',
    teamSize: '',
    biggestChallenge: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePillSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/founder-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us at hello@hostack.co')
      }
    } catch {
      setError('Connection error. Please try again or email us at hello@hostack.co')
    } finally {
      setIsLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: 'rgba(8,78,89,0.6)',
    border: `1px solid rgba(74,248,212,0.20)`,
    borderRadius: 6,
    color: COLORS.surface,
    fontSize: 14,
    fontFamily: FONTS.sans,
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 8,
    color: COLORS.surface,
  }

  const pillStyle = (selected) => ({
    padding: '7px 16px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    border: `1.5px solid ${selected ? COLORS.neon : 'rgba(74,248,212,0.25)'}`,
    backgroundColor: selected ? COLORS.neonSoft : 'transparent',
    color: selected ? COLORS.neon : 'rgba(255,255,255,0.65)',
    transition: 'all 0.15s ease',
    fontFamily: FONTS.sans,
  })

  const teamSizes = ['1–5', '5–15', '15–30', '30+']
  const propertyTypes = ['Hostel', 'Coliving', 'Both', 'Other']

  return (
    <section id="apply" style={{ backgroundColor: COLORS.tealDeep, color: COLORS.surface, padding: isMobile ? '64px 24px 80px' : isTablet ? '80px 40px' : '100px 64px', fontFamily: FONTS.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: isMobile ? 'left' : 'center', marginBottom: 52 }}>
          <div style={{ ...TYPOGRAPHY.eye, color: COLORS.neon, marginBottom: 16 }}>{CONTENT.apply.eyebrow}</div>
          <h2 style={{ ...TYPOGRAPHY.h2, fontSize: isMobile ? 30 : isTablet ? 38 : 46, color: COLORS.surface, marginBottom: 16 }}>{CONTENT.apply.headline}</h2>
          <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: 520, margin: isMobile ? '0' : '0 auto' }}>{CONTENT.apply.sub}</p>
        </div>

        <div style={{ maxWidth: 680, margin: '0 auto', background: 'rgba(4,78,89,0.35)', border: `1px solid rgba(74,248,212,0.20)`, borderRadius: 16, padding: isMobile ? 24 : 44, backdropFilter: 'blur(16px)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.neon, marginBottom: 12 }}>{CONTENT.apply.successTitle}</div>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>{CONTENT.apply.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
              {error && (
                <div style={{ gridColumn: '1/-1', padding: '12px 16px', backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid #EF4444', borderRadius: 6, color: '#FCA5A5', fontSize: 13 }}>{error}</div>
              )}
              <div>
                <label style={labelStyle}>Your name *</label>
                <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required style={inputStyle} placeholder="Full name"
                  onFocus={e => e.target.style.borderColor = COLORS.neon} onBlur={e => e.target.style.borderColor = 'rgba(74,248,212,0.20)'} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="you@example.com"
                  onFocus={e => e.target.style.borderColor = COLORS.neon} onBlur={e => e.target.style.borderColor = 'rgba(74,248,212,0.20)'} />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={labelStyle}>Property name & location *</label>
                <input type="text" name="propertyName" value={formData.propertyName} onChange={handleChange} required style={inputStyle} placeholder="e.g., The Nest Hostel · Lisbon, Portugal"
                  onFocus={e => e.target.style.borderColor = COLORS.neon} onBlur={e => e.target.style.borderColor = 'rgba(74,248,212,0.20)'} />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={labelStyle}>Property type *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {propertyTypes.map(t => (
                    <button key={t} type="button" style={pillStyle(formData.propertyType === t.toLowerCase())} onClick={() => handlePillSelect('propertyType', t.toLowerCase())}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={labelStyle}>Team size (staff + volunteers) *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {teamSizes.map(s => (
                    <button key={s} type="button" style={pillStyle(formData.teamSize === s)} onClick={() => handlePillSelect('teamSize', s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={labelStyle}>What's your biggest ops headache right now?</label>
                <textarea name="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange}
                  style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                  placeholder="Tell us what's eating your time every day — the messier the better."
                  onFocus={e => e.target.style.borderColor = COLORS.neon} onBlur={e => e.target.style.borderColor = 'rgba(74,248,212,0.20)'} />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <button type="submit" disabled={isLoading}
                  style={{ width: '100%', padding: '15px', backgroundColor: COLORS.neon, color: COLORS.tealDeep, border: 'none', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, fontFamily: FONTS.sans, transition: 'opacity 0.2s ease' }}
                  onMouseEnter={e => !isLoading && (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = isLoading ? '0.7' : '1')}>
                  {isLoading ? 'Sending…' : CONTENT.apply.formButtonLabel}
                </button>
              </div>
            </form>
          )}
        </div>

        {!submitted && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.40)', marginBottom: 14 }}>
              Prefer to talk first?
            </p>
            <a
              href={CONTENT.apply.calendlyHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.neon,
                textDecoration: 'none',
                padding: '12px 28px',
                border: `1.5px solid ${COLORS.neon}`,
                borderRadius: 6,
                transition: 'all 0.2s ease',
                fontFamily: FONTS.sans,
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.neon; e.currentTarget.style.color = COLORS.tealDeep }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.neon }}
            >
              {CONTENT.apply.calendlyLabel} →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
