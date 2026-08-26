const bindHorizontalWheel = () => {
  if (typeof window === 'undefined' || (window as Window & { __portfolioWheelBound?: boolean }).__portfolioWheelBound) return
  ;(window as Window & { __portfolioWheelBound?: boolean }).__portfolioWheelBound = true
  document.addEventListener('wheel', (event) => {
    const target = event.target as HTMLElement | null
    const gallery = target?.closest<HTMLElement>('.master-gallery:has(img[src*="idea9106-final"]), .detail-page:has(img[src*="binding-design"]) .gallery, .desn9002-slide-stack, .cmpn5006-slide-stack, .idea9103-slide-stack')
    if (!gallery || gallery.scrollWidth <= gallery.clientWidth) return
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
    event.preventDefault()
    gallery.scrollBy({ left: event.deltaY, behavior: 'smooth' })
  }, { passive: false })
}

bindHorizontalWheel()
