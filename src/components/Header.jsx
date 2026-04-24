import { useState } from 'react'
import logo from '../assets/TaskoTrackerLogo.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'For parents', href: '#parents' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <img src={logo} alt="TaskoTracker" className="nav__logo-icon" />
            <span className="nav__logo-text">Tasko<span>Tracker</span></span>
          </a>

          <ul className="nav__links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav__cta">
            <a href="#cta" className="btn btn--primary" style={{height:'40px',padding:'0 20px',fontSize:'14px'}}>
              Get started for free
            </a>
          </div>

          <button
            className="nav__mobile-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`nav__mobile-menu${menuOpen ? ' nav__mobile-menu--open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#cta" className="btn btn--primary" style={{width:'100%',justifyContent:'center'}} onClick={() => setMenuOpen(false)}>
          Get started for free
        </a>
      </div>
    </>
  )
}
