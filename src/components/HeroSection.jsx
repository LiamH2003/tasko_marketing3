import monster from '../assets/tasko_monster.png'
import hero from '../assets/BackgroundHero2.webp'
import { getIconSrc } from '../utils/iconMap'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" style={{backgroundImage: `url(${hero})`}}>
        <div className="hero__bg-dots" />
        <div className="hero__bg-grad" />
      </div>

      <div className="hero__inner">
        {/* Left: Copy */}
        <div className="hero__copy">
          <div className="hero__badge">
            <div className="hero__badge-dot" />
            Trusted by families worldwide
          </div>

          <h1 className="hero__title">
            Your child's growth,<br />
            <em>visible in real time.</em>
          </h1>

          <p className="hero__subtitle">
            Tasko helps children aged 9 to 12 build healthy routines,
            track their emotions, and grow with their own monster companion,
            all while you stay informed without micromanaging.
          </p>

          <div className="hero__actions">
            <a href="#cta" className="btn btn--primary btn--lg">
              Start for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how" className="btn btn--outline btn--lg">
              See how it works
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-avatars">
              {['👨', '👩', '👨', '👩', '👨'].map((e, i) => (
                <div key={i} className="hero__trust-avatar">
                  <img src={getIconSrc(e)} alt="Family" style={{width: '24px', height: '24px', objectFit: 'contain'}} />
                </div>
              ))}
            </div>
            <div className="hero__trust-text">
              <strong>2,400+ families</strong> already using Tasko<br />
              <span style={{display: 'inline-flex', gap: '2px', alignItems: 'center', color: 'var(--warning-400)', fontSize: '14px', letterSpacing: '1px'}}>
                ★★★★★
              </span> 4.9 average rating
            </div>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="hero__visual">
          <div className="hero__bg-ring hero__bg-ring--1" />
          <div className="hero__bg-ring hero__bg-ring--2" />
          <div className="hero__bg-ring hero__bg-ring--3" />

          {/* Phone */}
          <div className="hero__phone-wrap">
            <div className="hero__phone">
              <div className="hero__phone-screen">

                {/* Status bar */}
                <div className="hero__phone-status">
                  <span>9:41</span>
                  <span style={{display:'flex',gap:'3px',alignItems:'center'}}>
                    <svg width="12" height="9" viewBox="0 0 17 12" fill="none"><rect x="0" y="8" width="3" height="4" rx="1" fill="#fafbf6"/><rect x="4" y="5" width="3" height="7" rx="1" fill="#fafbf6"/><rect x="8" y="2" width="3" height="10" rx="1" fill="#fafbf6"/><rect x="12" y="0" width="3" height="12" rx="1" fill="#fafbf6"/></svg>
                    <svg width="14" height="9" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#fafbf6" strokeOpacity="0.35"/><rect x="2" y="2" width="16" height="8" rx="2" fill="#fafbf6"/></svg>
                  </span>
                </div>

                {/* Greeting */}
                <div style={{width:'100%',padding:'4px 0 2px',display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
                  <div>
                    <div style={{fontSize:'8px',color:'var(--blue-700)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Good afternoon ☀️</div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'14px',color:'var(--white-400)'}}>Emma</div>
                  </div>
                  <div style={{width:'20px',height:'20px',borderRadius:'6px',background:'rgba(73,201,213,0.1)',border:'0.5px solid rgba(73,201,213,0.25)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#49c9d5" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#49c9d5" strokeWidth="1.5"/></svg>
                  </div>
                </div>

                {/* Monster */}
                <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center',margin:'4px 0 2px'}}>
                  <div style={{position:'absolute',width:'70px',height:'70px',borderRadius:'50%',background:'radial-gradient(circle,rgba(73,201,213,0.2) 0%,transparent 70%)',animation:'pulse-glow 3s ease-in-out infinite'}}/>
                  <img
                    src={monster}
                    alt="Blub"
                    style={{width:'64px',height:'64px',objectFit:'contain',filter:'drop-shadow(0 4px 12px rgba(73,201,213,0.5))',animation:'float 3.5s ease-in-out infinite',position:'relative',zIndex:1}}
                  />
                </div>

                <div className="hero__phone-name">Blub</div>
                <div className="hero__phone-level">Level 4 · 340 / 500 EXP</div>

                {/* Quote bubble */}
                <div style={{background:'rgba(73,201,213,0.08)',border:'0.5px solid rgba(73,201,213,0.2)',borderRadius:'10px',padding:'6px 10px',margin:'4px 0',fontSize:'9px',color:'var(--white-400)',textAlign:'center',fontStyle:'italic',lineHeight:'1.4'}}>
                  "Today we go for it together! 💪"
                </div>

                {/* Day progress */}
                <div className="hero__phone-bar-label" style={{marginTop:'4px'}}>
                  <span>Today's progress</span>
                  <span style={{color:'var(--blue-400)',fontWeight:600}}>3/5</span>
                </div>
                <div className="hero__phone-bar">
                  <div className="hero__phone-bar-fill" />
                </div>

                {/* Mood strip */}
                <div style={{width:'100%',margin:'6px 0 4px'}}>
                  <div style={{fontSize:'8px',color:'var(--white-900)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'5px'}}>How are you feeling?</div>
                  <div style={{display:'flex',gap:'4px',justifyContent:'space-between'}}>
                    {[
                      {emoji:'😄',label:'Great'},
                      {emoji:'🙂',label:'Good'},
                      {emoji:'😐',label:'Meh'},
                      {emoji:'😔',label:'Sad'},
                      {emoji:'😤',label:'Mad'},
                    ].map((m,i) => (
                      <div key={i} style={{
                        flex:1,
                        display:'flex',flexDirection:'column',alignItems:'center',gap:'2px',
                        padding:'5px 2px',
                        background: i===1 ? 'rgba(73,201,213,0.18)' : 'rgba(73,201,213,0.05)',
                        border: i===1 ? '1px solid var(--blue-400)' : '0.5px solid rgba(73,201,213,0.12)',
                        borderRadius:'7px',
                      }}>
                        <img src={getIconSrc(m.emoji)} alt={m.label} style={{width: '14px', height: '14px', objectFit: 'contain'}} />
                        <span style={{fontSize:'7px',color: i===1 ? 'var(--blue-300)' : 'var(--white-900)'}}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next task */}
                <div style={{width:'100%',marginTop:'4px'}}>
                  <div style={{fontSize:'8px',color:'var(--white-900)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Next up</div>
                  <div className="hero__phone-task">
                    <div className="hero__phone-task-icon">
                      <img src={getIconSrc('📚')} alt="Homework" style={{width: '16px', height: '16px', objectFit: 'contain'}} />
                    </div>
                    <div className="hero__phone-task-text">
                      <div className="hero__phone-task-name">Homework</div>
                      <div className="hero__phone-task-meta">16:00 · 45 min · +30 EXP</div>
                    </div>
                    <div style={{width:'20px',height:'20px',borderRadius:'6px',background:'var(--blue-400)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="8" height="8" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="#1f1e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
