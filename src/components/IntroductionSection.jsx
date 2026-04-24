import { useScrollAnim } from '../hooks/useScrollAnim'
import screen1 from '../assets/ts1.png'
import screen2 from '../assets/ts2.png'
import screen3 from '../assets/ts3.png'
import screen4 from '../assets/ts4.png'
import { getIconSrc } from '../utils/iconMap'

export default function IntroductionSection() {
  const ref = useScrollAnim()

  const steps = [
    {
      num: '1',
      title: 'Set up in minutes',
      text: 'Create a family and invite your children with a simple code. Set your routines with chosen days and times in under 5 minutes.',
    },
    {
      num: '2',
      title: 'Kids pick their monster',
      text: 'Your child chooses their Tasko companion. This is their buddy that grows, evolves, and earns new looks as they complete their routines.',
    },
    {
      num: '3',
      title: 'Routines run themselves',
      text: 'Each day the app shows their tasks. Kids check them off at their own pace. The monster gets EXP, and you see progress in real time.',
    },
    {
      num: '4',
      title: 'Emotions, tracked gently',
      text: 'A quick mood check-in appears on the home screen. It takes 5 seconds. Over time you build a picture of how your child is really doing.',
    },
    {
      num: '5',
      title: 'Stay informed, not intrusive',
      text: 'Your dashboard shows trends, not surveillance. You\'ll notice when something\'s off before it becomes a problem.',
    },
  ]

  return (
    <section className="section section--light" id="how">
      <div className="container" ref={ref}>
        <div className="how__layout">
          {/* Left: steps */}
          <div className="anim-hidden">
            <div className="section__tag">How it works</div>
            <h2 className="section__title" style={{marginBottom:'36px'}}>
              From signup to <em>daily calm</em><br />in one afternoon.
            </h2>
            <div className="how__steps">
              {steps.map((s, i) => (
                <div key={i} className="how__step">
                  <div className="how__step-left">
                    <div className="how__step-num">{s.num}</div>
                    <div className="how__step-line" />
                  </div>
                  <div className="how__step-body">
                    <div className="how__step-title">{s.title}</div>
                    <div className="how__step-text">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: screen previews */}
          <div className="anim-hidden" style={{animationDelay:'0.2s'}}>
            <div className="how__screens-grid">
              {[screen1, screen2, screen3, screen4].map((screen, i) => (
                <div key={i} className="how__screen-item">
                  <img src={screen} alt={`Screen ${i + 1}`} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
