import { useEffect, useRef } from 'react'

/**
 * A three-layer custom cursor:
 *  - a glowing core dot that tracks the pointer instantly
 *  - a magnetic ring that eases toward the pointer and grows on interactive elements
 *  - a contextual label pulled from `data-cursor` attributes
 *
 * The divs are ALWAYS rendered so the refs exist before the effect runs;
 * behaviour is simply disabled on coarse-pointer (touch) devices.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    // Disable on touch / coarse-pointer devices — restore native cursor.
    if (!window.matchMedia('(pointer: fine)').matches) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      label.style.display = 'none'
      document.documentElement.style.cursor = 'auto'
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      label.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, calc(-50% - 44px))`

      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, [data-cursor], input, textarea, .cursor-target',
      ) as HTMLElement | null

      if (interactive) {
        ring.classList.add('hovering')
        const text = interactive.getAttribute('data-cursor')
        if (text) {
          label.textContent = text
          label.classList.add('show')
        } else {
          label.classList.remove('show')
        }
      } else {
        ring.classList.remove('hovering')
        label.classList.remove('show')
      }
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.2
      ringY += (mouseY - ringY) * 0.2
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    const onDown = () => ring.classList.add('clicking')
    const onUp = () => ring.classList.remove('clicking')
    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={labelRef} className="cursor-label" />
    </>
  )
}
