import { useState, useEffect } from 'react'
import { useScrollAnim } from '../hooks/useScrollAnim'
import lifestyle1 from '../assets/lifestyle.webp'
import lifestyle2 from '../assets/lifestyle2.webp'
import lifestyle3 from '../assets/lifestyle3.webp'
import { getIconSrc } from '../utils/iconMap'

export default function ProblemStatementSection() {
  const ref = useScrollAnim()
  const [currentImage, setCurrentImage] = useState(0)
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  const images = [lifestyle1, lifestyle2, lifestyle3]

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteraction
      if (timeSinceInteraction > 5000) {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [lastInteraction, images.length])

  const handleIndicatorClick = (index) => {
    setCurrentImage(index)
    setLastInteraction(Date.now())
  }

  const pains = [
    {
      icon: '😩',
      title: 'Mornings are a battlefield',
      text: 'Getting kids to follow their morning routine feels like negotiating every single day. You end up exhausted before the day even begins.',
    },
    {
      icon: '📵',
      title: 'Screen time spirals',
      text: 'Screen time rules vanish the moment you look away. Without structure, kids drift. You feel like the villain for setting limits.',
    },
    {
      icon: '💭',
      title: 'You don\'t really know how they\'re feeling',
      text: 'Your child goes quiet. Something\'s off, but they won\'t say what. You\'re left to guess, hoping they\'ll open up.',
    },
    {
      icon: '🏆',
      title: 'Reward systems stop working',
      text: 'Sticker charts lose their shine after two weeks. You need something that evolves with your child and keeps them genuinely motivated.',
    },
  ]

  return (
    <section className="section section--alt" id="problem">
      <div className="container" ref={ref}>
        <div className="problem__grid">
          {/* Left: copy */}
          <div className="anim-hidden">
            <div className="section__tag">The challenge</div>
            <h2 className="section__title">
              Parenting a child aged 9 to 12<br />
              is <em>genuinely hard.</em>
            </h2>
            <p className="section__subtitle" style={{marginBottom:'36px'}}>
              They're too old for hand-holding, too young for full independence.
              You need a tool that respects their autonomy while giving you
              the oversight that keeps everyone calmer.
            </p>
            <div className="problem__pains">
              {pains.map((p, i) => (
                <div key={i} className="problem__pain">
                  <div className="problem__pain-icon"><img src={getIconSrc(p.icon)} alt={p.title} style={{width: '32px', height: '32px', objectFit: 'contain'}} /></div>
                  <div>
                    <div className="problem__pain-title">{p.title}</div>
                    <div className="problem__pain-text">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="anim-hidden" style={{animationDelay:'0.2s'}}>
            <div className="problem__image-area">
              <div className="problem__image-placeholder"><img key={currentImage} src={images[currentImage]} alt="Lifestyle" /></div>
              <div className="problem__image-indicators">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`problem__image-indicator ${i === currentImage ? 'problem__image-indicator--active' : ''}`}
                    onClick={() => handleIndicatorClick(i)}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
