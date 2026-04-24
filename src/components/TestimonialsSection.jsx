import { useScrollAnim } from '../hooks/useScrollAnim'
import { getIconSrc } from '../utils/iconMap'

export default function TestimonialsSection() {
  const ref = useScrollAnim()

  const testimonials = [
    {
      stars: '★★★★★',
      text: '"My son actually reminds me to open Tasko now. We haven\'t had a single argument about homework since we started. I genuinely didn\'t think that was possible."',
      name: 'Sophie V.',
      role: 'Mother of 2, Antwerp',
      avatar: '👩',
    },
    {
      stars: '★★★★★',
      text: '"The mood tracker changed everything. I noticed Emma had been marking "tired" every Tuesday for three weeks. Turns out her sport schedule was too heavy. I never would have caught that."',
      name: 'Thomas M.',
      role: 'Father of 3, Ghent',
      avatar: '👨',
    },
    {
      stars: '★★★★★',
      text: '"I love that it\'s not addictive. My daughter uses it, does her tasks, and moves on. It\'s designed to be used, then put down."',
      name: 'Marie D.',
      role: 'Mother of 1, Brussels',
      avatar: '👩',
    },
  ]

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="container">
        <div className="section__header anim-hidden">
          <div className="section__tag">What parents say</div>
          <h2 className="section__title">
            Real families.<br /><em>Real calm.</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card anim-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="testimonial-card__stars">{t.stars}</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar"><img src={getIconSrc(t.avatar)} alt={t.name} style={{width: '32px', height: '32px', objectFit: 'contain'}} /></div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
