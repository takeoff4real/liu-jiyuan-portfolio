'use client'

import { useEffect, useState } from 'react'

export function MasterProgress({ label }: { label: string }) {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const page = document.querySelector<HTMLElement>('.master-detail')
      if (!page) return
      const start = page.getBoundingClientRect().top + window.scrollY
      const end = page.getBoundingClientRect().bottom + window.scrollY
      const top = window.scrollY
      const range = Math.max(1, end - start - window.innerHeight)
      setVisible(top > start + 80 && top < end - 120)
      setProgress(Math.min(1, Math.max(0, (top - start) / range)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!visible) return null
  return <aside className="directory-progress master-progress" aria-label={`${label} 浏览进度`}><span className="directory-progress-label">{label}</span><div className="directory-progress-track"><i style={{ height: `${Math.max(8, progress * 100)}%` }} /></div><span className="directory-progress-count">SCROLL</span></aside>
}
