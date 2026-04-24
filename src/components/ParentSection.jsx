import { useScrollAnim } from '../hooks/useScrollAnim'
import screen1 from '../assets/ts5.png'
import screen2 from '../assets/ts6.png'
import screen3 from '../assets/ts7.png'
import screen4 from '../assets/ts8.png'
import { getIconSrc } from '../utils/iconMap'

export default function ParentSection() {
  const ref = useScrollAnim()

  const perks = [
    { icon: '📄', title: 'Routine completion overview', text: 'See which tasks your child completed, when, and how consistently. All without hovering.' },
    { icon: '�', title: 'Mood trend insights', text: 'Track emotional patterns over days and weeks. Spot when something might be off before it escalates.' },
    { icon: '✏️', title: 'You set the rules', text: 'Create and edit routines, set times, configure the honesty system. Your child can request new routines and you approve them.' },
    { icon: '🔐', title: 'Privacy by design', text: 'Your child has their own space. You see patterns and progress, not every private thought. Trust works both ways.' },
    { icon: '🔔', title: 'No addictive mechanics', text: 'No push notifications to kids, no ads, no social comparison. Tasko is designed to be used, then put down.' },
  ]

  return (
    <section className="section" id="parents" ref={ref}>
      <div className="container">
        <div className="parent__layout">
          {/* Left: copy */}
          <div className="anim-hidden">
            <div className="section__tag">For parents</div>
            <h2 className="section__title">
              Insight without<br />
              <em>surveillance.</em>
            </h2>
            <p className="section__subtitle">
              Tasko gives you the overview you need to support your child
              without becoming the app police. Your child stays in control.
              You stay informed.
            </p>
            <div className="parent__perks">
              {perks.map((p, i) => (
                <div key={i} className="parent__perk">
                  <div className="parent__perk-icon"><img src={getIconSrc(p.icon)} alt={p.title} style={{width: '28px', height: '28px', objectFit: 'contain'}} /></div>
                  <div>
                    <div className="parent__perk-title">{p.title}</div>
                    <div className="parent__perk-text">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: screen previews */}
                    <div className="anim-hidden" style={{animationDelay:'0.2s', height: '100%'}}>
                      <div className="how__screens-grid">
                        {[screen1, screen2, screen3, screen4].map((screen, i) => (
                          <div key={i} className="how__screen-item">
                            <img src={screen} alt={`Screen ${4+i + 1}`} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                          </div>
                        ))}
                      </div>
                    </div>
        </div>
      </div>
    </section>
  )
}
