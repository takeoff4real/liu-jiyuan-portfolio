'use client'
import { PortfolioImage } from './portfolio-image'

import { useEffect, useState } from 'react'

type Slide = { src: string; alt: string }

export function SlideCarousel({ slides, className = '', visibleCount = 2 }: { slides: Slide[]; className?: string; visibleCount?: 2 | 4 | 5 }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const maxIndex = Math.max(0, slides.length - visibleCount)
  const canGoBack = active > 0
  const canGoForward = active < maxIndex

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setActive(0)
      setLightbox(null)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [slides.length, visibleCount])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % slides.length)
      if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? slides.length - 1 : (value - 1 + slides.length) % slides.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightbox, slides.length])

  return <div className={`slide-carousel slide-carousel--idea9202-style ${className}`} style={{ '--slide-visible-count': visibleCount } as React.CSSProperties} aria-label="横向作品浏览" aria-roledescription="carousel">
    <div className="slide-carousel-viewport">
      <div className="slide-carousel-track" style={{ transform: `translateX(calc(-${active} * (var(--slide-item-width) + 18px)))` }}>
        {slides.map((slide, index) => <button type="button" className="slide-carousel-item" onClick={() => setLightbox(index)} aria-label={`放大查看：${slide.alt}`} key={slide.src}>
          <PortfolioImage src={slide.src} alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />
        </button>)}
      </div>
    </div>
    {slides.length > visibleCount && <div className="slide-carousel-controls">
      <button type="button" className="pixel-slide-button" onClick={() => setActive((value) => Math.max(0, value - 1))} disabled={!canGoBack} aria-label="上一张图片">←</button>
      <span className="slide-carousel-count" aria-live="polite" aria-label="当前图片范围">{String(Math.min(active + visibleCount, slides.length)).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
      <button type="button" className="pixel-slide-button" onClick={() => setActive((value) => Math.min(maxIndex, value + 1))} disabled={!canGoForward} aria-label="下一张图片">→</button>
    </div>}
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="全屏作品查看" onClick={() => setLightbox(null)}><button type="button" className="close-lightbox" onClick={() => setLightbox(null)} aria-label="关闭全屏查看">×</button><button type="button" className="lightbox-nav lightbox-nav-prev" onClick={(event) => { event.stopPropagation(); setLightbox((value) => value === null ? slides.length - 1 : (value - 1 + slides.length) % slides.length) }} aria-label="上一张">←</button><PortfolioImage src={slides[lightbox].src} alt={slides[lightbox].alt} onClick={(event) => event.stopPropagation()} /><button type="button" className="lightbox-nav lightbox-nav-next" onClick={(event) => { event.stopPropagation(); setLightbox((value) => value === null ? 0 : (value + 1) % slides.length) }} aria-label="下一张">→</button><div className="lightbox-caption">{String(lightbox + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} · {slides[lightbox].alt}<span>← → 切换　ESC 关闭</span></div></div>}
  </div>
}
