import { useScrollAnim } from '../hooks/useScrollAnim'
import { getIconSrc } from '../utils/iconMap'

export default function AppPromisesSection() {
  const ref = useScrollAnim()

  const features = [
    {
      icon: '📋',
      title: 'Visual daily routines',
      text: 'Kids see their day in one clear view: morning, afternoon, and evening. Tasks are checked off themselves, building real ownership and reducing morning conflict.',
    },
    {
      icon: '🎮',
      title: 'A monster that grows with them',
      text: 'Every completed routine earns EXP for their personal monster companion. It evolves visually, unlocks outfits, and reflects their genuine effort, not perfection.',
    },
    {
      icon: '�',
      title: 'Mood check-ins in 5 seconds',
      text: 'A gentle daily prompt asks how they\'re feeling. No pressure, no long forms. Just a quick emotional pulse you can review to spot patterns over time.',
    },
    {
      icon: '🎯',
      title: 'Focus mode with calm music',
      text: 'Built-in focus timer with ambient soundscapes helps children stay on task during homework. No distractions, no notifications: just pure focus.',
    },
    {
      icon: '🔒',
      title: 'Parent dashboard with privacy',
      text: 'You see progress, mood trends, and routine completion, but not every detail. Your child keeps their privacy while you get the signals that matter.',
    },
    {
      icon: '💚',
      title: 'Honesty over perfection',
      text: 'The system rewards honest effort, not flawless performance. Lying causes a minor, parent-configurable consequence that teaches integrity, not fear.',
    },
  ]

  return (
    <section className="section" id="features">
      <div className="container" ref={ref}>
        <div className="section__header anim-hidden">
          <div className="section__tag">What Tasko does</div>
          <h2 className="section__title">
            Everything your child needs.<br />
            <em>Everything you need too.</em>
          </h2>
          <p className="section__subtitle">
            Designed with child psychologists in mind. Built around autonomy,
            emotional safety, and the kind of motivation that actually lasts.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card anim-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="feature-card__icon">
                <img src={getIconSrc(f.icon)} alt={f.title} style={{width: '32px', height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="feature-card__title">{f.title}</div>
              <div className="feature-card__text">{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
