'use client'

import { ResumePanel } from '../page'

export default function CVPage() {
  const close = () => {
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <ResumePanel onClose={close} />
}
