import { useScrollAnim } from '../hooks/useScrollAnim'

export default function StatsSection() {
  const ref = useScrollAnim()
  const stats = [
    { num: '2,400+', label: 'Families using Tasko daily' },
    { num: '94%', label: 'Parents report less morning conflict' },
    { num: '3.2×', label: 'More routines completed vs. paper systems' },
    { num: '9 to 12', label: 'Age range designed with experts' },
  ]

  return (
    <section className="section section--alt" ref={ref}>
      <div className="container">
        <div className="section__header anim-hidden" style={{marginBottom: '60px'}}>
          <h2 className="section__title">
            Not just another<br />
            <em>routine app.</em>
          </h2>
        </div>
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card anim-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-card__num">{s.num}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
