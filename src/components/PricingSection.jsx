import { useScrollAnim } from '../hooks/useScrollAnim'

export default function PricingSection() {
  const ref = useScrollAnim()

  const plans = [
    {
      name: 'Free',
      desc: 'Everything you need to get started with Tasko.',
      price: '€0',
      period: '/ forever',
      featured: false,
      cta: 'Start free',
      features: [
        { text: 'Full child interface + 3D monster', ok: true },
        { text: 'Daily routines setup & tracking', ok: true },
        { text: 'Realtime parent dashboard', ok: true },
        { text: 'Mood tracker & focus mode', ok: true },
        { text: 'Honesty check', ok: true },
        { text: 'Weekly & monthly reports', ok: false },
        { text: 'Predictive focus & stress detection', ok: false },
        { text: 'Special routines (exams, holidays)', ok: false },
      ],
    },
    {
      name: 'Premium',
      desc: 'Advanced insights and customization for deeper support.',
      price: '€9.99',
      period: '/ month',
      featured: true,
      badge: 'Recommended',
      cta: 'Start free trial',
      features: [
        { text: 'Everything from Free', ok: true },
        { text: 'Weekly & monthly reports', ok: true },
        { text: 'Predictive focus & stress detection', ok: true },
        { text: 'Special routines (exams, holidays)', ok: true },
        { text: 'Priority support', ok: true },
        { text: 'Export & backup data', ok: true },
      ],
    },
  ]

  return (
    <section className="section section--light" id="pricing" ref={ref}>
      <div className="container">
        <div className="section__header anim-hidden">
          <div className="section__tag">Pricing</div>
          <h2 className="section__title">Simple, honest pricing.</h2>
          <p className="section__subtitle">
            Start free. Upgrade when you see the difference.
            No ads, ever. No hidden costs.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pricing-card anim-hidden${p.featured ? ' pricing-card--featured' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {p.badge && <div className="pricing-card__badge">{p.badge}</div>}
              <div className="pricing-card__name">{p.name}</div>
              <div className="pricing-card__desc">{p.desc}</div>
              <div className="pricing-card__price">
                <span className="pricing-card__price-amount">{p.price}</span>
                <span className="pricing-card__price-period">{p.period}</span>
              </div>
              <ul className="pricing-card__features">
                {p.features.map((f, fi) => (
                  <li key={fi} className="pricing-card__feature">
                    <span className={`pricing-card__feature-icon${f.ok ? '' : '--muted'}`}>
                      {f.ok ? '✓' : '—'}
                    </span>
                    <span style={!f.ok ? {color:'var(--white-900)',opacity:0.5} : {}}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`btn btn--${p.featured ? 'primary' : 'outline'}`}
                style={{width:'100%',justifyContent:'center'}}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{textAlign:'center',fontSize:'14px',color:'var(--white-900)',marginTop:'32px'}}>
          Annual billing available to save 20%. Cancel anytime. No credit card required for the free plan.
        </p>
      </div>
    </section>
  )
}
