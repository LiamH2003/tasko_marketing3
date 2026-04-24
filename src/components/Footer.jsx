import logo from '../assets/TaskoTrackerLogo.svg'
import { getIconSrc } from '../utils/iconMap'

export default function Footer() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'For parents', href: '#parents' },
        { label: 'How it works', href: '#how' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Privacy policy', href: '#' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer__inner">
          {/* Brand column */}
          <div>
            <a href="#" className="nav__logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <img src={logo} alt="TaskoTracker" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--white-400)', marginLeft: '10px' }}>
                Tasko<span style={{ color: 'var(--blue-400)' }}>Tracker</span>
              </span>
            </a>
            <p className="footer__brand-text">
              A psychologically grounded routine & wellbeing instrument,
              designed for children aged 9 to 12 and their parents. Not a game.
              Not a to-do app. Something better.
            </p>
            <div className="footer__social">
              {[
                { label: 'X', icon: '𝕏' },
                { label: 'Instagram', icon: '📷' },
                { label: 'LinkedIn', icon: '🔗' },
              ].map((s, i) => (
                <a key={i} href="#" className="footer__social-btn" title={s.label}>
                  <img src={getIconSrc(s.icon)} alt={s.label} style={{width: '20px', height: '20px', objectFit: 'contain'}} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="footer__col-title">{col.title}</div>
              <ul className="footer__col-links">
                {col.links.map((l, li) => (
                  <li key={li}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">© 2026 TaskoTracker. All rights reserved.</div>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
