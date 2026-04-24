import { useEffect, useRef } from 'react'

export function useScrollAnim() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Animate all direct children with anim-hidden class
    const targets = el.querySelectorAll('.anim-hidden')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}
