export default function SeoTextSection() {
  const faqs = [
    {
      q: 'What age is Tasko designed for?',
      a: 'Tasko is specifically designed for children aged 9 to 12 — the tween years when kids are developing independence but still need structure. Unlike generic to-do apps, every feature is tailored to this developmental stage, from the monster companion system to the mood check-in prompts.',
    },
    {
      q: 'Is Tasko safe for children?',
      a: 'Yes. Tasko is built privacy-first: no ads, no push notifications directed at children, no social comparison features, and no data sold to third parties. Parents control the routines and settings, while children enjoy a safe, focused space that is designed to be used and then put down.',
    },
    {
      q: 'How does the monster companion work?',
      a: 'Each child picks a personal monster companion at signup. Every completed routine earns EXP (experience points) for their monster. As EXP accumulates, the monster levels up, evolves visually, and unlocks new outfits and looks. This gives children a meaningful, long-term motivation that grows with their effort — not a simple sticker-chart that loses its novelty after a week.',
    },
    {
      q: 'What does the parent dashboard show?',
      a: "The parent dashboard gives you an overview of routine completion rates, mood trends over time, and focus session data. It is designed to surface the signals that matter — like a child who consistently marks feeling tired on school mornings — without exposing every detail of your child's private check-ins. You stay informed without hovering.",
    },
    {
      q: 'Can I try Tasko for free?',
      a: 'Yes. The free plan includes the full child interface with the monster companion, daily routine setup and tracking, a real-time parent dashboard, mood tracking, focus mode, and the honesty check system. You can upgrade to Premium at any time to unlock weekly and monthly reports, predictive focus and stress detection, and special routines for exams or holidays.',
    },
    {
      q: 'What makes Tasko different from other routine apps?',
      a: 'Most routine apps are either gamified in ways that create screen addiction, or rigid parental control tools that kids resent. Tasko combines routine, emotion tracking, and intrinsic motivation in one place — designed with child psychology principles at its core. The honesty system, privacy-first parent dashboard, and evolving monster companion are features you will not find in any other wellbeing app for children.',
    },
  ]

  return (
    <section
      className="section section--light"
      id="faq"
      aria-label="Frequently asked questions about Tasko"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <div className="section__header" style={{ marginBottom: '48px' }}>
          <div className="section__tag">FAQ</div>
          <h2 className="section__title">Common questions</h2>
          <p className="section__subtitle">
            Everything parents want to know before getting started with Tasko.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{
                background: 'rgba(73,201,213,0.04)',
                border: '1px solid rgba(73,201,213,0.12)',
                borderRadius: '14px',
                padding: '24px 28px',
              }}
            >
              <h3
                itemProp="name"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '17px',
                  color: 'var(--white-400)',
                  marginBottom: '10px',
                  lineHeight: '1.35',
                }}
              >
                {faq.q}
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  itemProp="text"
                  style={{
                    fontSize: '14px',
                    color: 'var(--white-700)',
                    lineHeight: '1.7',
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}