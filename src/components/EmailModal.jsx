import { useState } from 'react'
import { useScrollAnim } from '../hooks/useScrollAnim'
import logo from '../assets/TaskoTrackerLogo.svg'

export default function EmailModal() {
  const ref = useScrollAnim()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <div className="cta-section__bg" />
      <div className="container" style={{ position: 'relative' }}>

        {/* Monster mascot */}
        <div style={{ marginBottom: '24px' }}>
          <img
            src={logo}
            alt="Tasko mascot"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 28px rgba(73,201,213,0.5))',
              animation: 'float 3.5s ease-in-out infinite',
              display: 'inline-block',
            }}
          />
        </div>

        {!submitted ? (
          <>
            <h2 className="cta-section__title anim-hidden">
              Ready to bring more<br />
              <em>calm to your household?</em>
            </h2>
            <p className="cta-section__sub anim-hidden">
              Join thousands of families who've already made mornings easier.
              Start free without a credit card.
            </p>

            <form
              onSubmit={handleSubmit}
              className="anim-hidden"
              style={{
                display: 'flex',
                gap: '12px',
                maxWidth: '480px',
                margin: '0 auto 16px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div style={{ flex: '1', minWidth: '240px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  placeholder="Enter your email address"
                  style={{
                    width: '100%',
                    height: '52px',
                    background: 'var(--gray-500)',
                    border: `0.5px solid ${error ? 'var(--error-300)' : 'rgba(73,201,213,0.35)'}`,
                    borderRadius: '10px',
                    padding: '0 18px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--white-400)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--blue-400)'}
                  onBlur={(e) => e.target.style.borderColor = error ? 'var(--error-300)' : 'rgba(73,201,213,0.35)'}
                />
                {error && (
                  <div style={{ fontSize: '12px', color: 'var(--error-300)', marginTop: '6px', textAlign: 'left' }}>
                    {error}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn--primary" style={{ height: '52px', padding: '0 28px', fontSize: '16px' }}>
                Get early access
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>

            <div className="cta-section__actions anim-hidden" style={{ marginBottom: '16px' }}>
              <a href="#" className="btn btn--outline" style={{ height: '48px' }}>
                Download on App Store
              </a>
              <a href="#" className="btn btn--outline" style={{ height: '48px' }}>
                Get on Google Play
              </a>
            </div>

            <p className="cta-section__note">
              Free plan available · No ads · Cancel anytime
            </p>
          </>
        ) : (
          <div
            style={{
              maxWidth: '480px',
              margin: '0 auto',
              padding: '48px 32px',
              background: 'rgba(73,201,213,0.08)',
              border: '1px solid rgba(73,201,213,0.3)',
              borderRadius: '20px',
              textAlign: 'center',
              animation: 'fade-up 0.5s ease both',
            }}
          >
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--white-400)', marginBottom: '12px' }}>
              You're on the list!
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--white-700)', lineHeight: '1.6', marginBottom: '24px' }}>
              We'll send your early access link to <strong style={{ color: 'var(--blue-400)' }}>{email}</strong>.
              In the meantime, share Tasko with other parents who'd love calmer mornings.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn btn--outline" style={{ height: '44px', fontSize: '14px' }}>
              Back
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
