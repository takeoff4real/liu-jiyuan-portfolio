'use client'

import { useState } from 'react'

type Slide = { src: string; alt: string }

export function SlideCarousel({ slides, className = '' }: { slides: Slide[]; className?: string }) {
  const [active, setActive] = useState(0)
  const visibleCount = 2
  const maxIndex = Math.max(0, slides.length - visibleCount)
  const canGoBack = active > 0
  const canGoForward = active < maxIndex

  return <div className={`slide-carousel ${className}`} aria-label="横向作品浏览">
    <div className="slide-carousel-viewport">
      <div className="slide-carousel-track" style={{ transform: `translateX(calc(-${active} * (50% + 9px)))` }}>
        {slides.map((slide) => <a className="slide-carousel-item" href={slide.src} target="_blank" rel="noreferrer" key={slide.src}>
          <img src={slide.src} alt={slide.alt} loading="lazy" />
        </a>)}
      </div>
    </div>
    <div className="slide-carousel-controls">
      <button type="button" className="pixel-slide-button" onClick={() => setActive((value) => Math.max(0, value - 1))} disabled={!canGoBack} aria-label="上一张图片">←</button>
      <span className="slide-carousel-count">{String(Math.min(active + visibleCount, slides.length)).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
      <button type="button" className="pixel-slide-button" onClick={() => setActive((value) => Math.min(maxIndex, value + 1))} disabled={!canGoForward} aria-label="下一张图片">→</button>
    </div>
  </div>
}
