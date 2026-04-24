import { useScrollAnim } from '../hooks/useScrollAnim'
import { getIconSrc } from '../utils/iconMap'

export default function CompetitorComparisonSection() {
  const ref = useScrollAnim()

  const features = [
    'Visual daily routines',
    'Monster companion (EXP system)',
    'Mood tracker for children',
    'Focus mode with calm music',
    'Parent dashboard',
    'No ads or push notifications to kids',
    'Honesty reward system',
    'Privacy-first design',
    'Designed for ages 9 to 12',
  ]

  const cols = [
    {
      name: 'Our pick Tasko',
      highlight: true,
      vals: [true, true, true, true, true, true, true, true, true],
    },
    {
      name: 'Generic to-do apps',
      highlight: false,
      vals: [false, false, false, false, false, false, false, false, false],
    },
    {
      name: 'Screen time tools',
      highlight: false,
      vals: [true, false, false, false, true, false, false, true, false],
    },
  ]

  return (
    <section className="section section--alt" id="compare" ref={ref}>
      <div className="container">
        <div className="section__header anim-hidden">
          <div className="section__tag">Why Tasko</div>
          <h2 className="section__title">Not just another routine app.</h2>
          <p className="section__subtitle">
            Most tools are either gamified distractions or rigid parental controls.
            Tasko is the first to combine routine, emotion, and motivation in one place.
          </p>
        </div>

        <div className="anim-hidden" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'separate',borderSpacing:'0 0'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',padding:'16px 20px',fontFamily:'var(--font-body)',fontSize:'12px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--white-900)',fontWeight:700,width:'40%'}}>
                  Feature
                </th>
                {cols.map((c, i) => (
                  <th key={i} style={{
                    padding:'16px 20px',
                    fontFamily:'var(--font-display)',
                    fontSize:'16px',
                    color: c.highlight ? 'var(--blue-400)' : 'var(--white-700)',
                    textAlign:'center',
                    background: c.highlight ? 'rgba(8,145,178,0.08)' : 'transparent',
                    borderTop: c.highlight ? '2px solid var(--blue-400)' : '2px solid transparent',
                    borderRadius: c.highlight ? '12px 12px 0 0' : '0',
                  }}>
                    {c.highlight && <span style={{fontSize:'11px',display:'block',color:'var(--blue-400)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}><img src={getIconSrc('⭐')} alt="Star" style={{width: '12px', height: '12px'}} /> Our pick</span>}
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, fi) => (
                <tr key={fi}>
                  <td style={{
                    padding:'14px 20px',
                    fontSize:'14px',
                    color:'var(--white-700)',
                    borderBottom:'1px solid rgba(8,145,178,0.08)',
                  }}>
                    {feat}
                  </td>
                  {cols.map((c, ci) => (
                    <td key={ci} style={{
                      padding:'14px 20px',
                      textAlign:'center',
                      background: c.highlight ? 'rgba(8,145,178,0.05)' : 'transparent',
                      borderBottom:'1px solid rgba(8,145,178,0.08)',
                      fontSize:'18px',
                    }}>
                      {c.vals[fi]
                        ? <span style={{color:'var(--success-400)'}}>✓</span>
                        : <span style={{color:'var(--white-900)',opacity:0.4}}>—</span>
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
