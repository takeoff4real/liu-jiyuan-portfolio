'use client'

import { Header, ProjectDetail } from '../../page'

export default function Work1984Page() {
  const goHome = () => { window.location.href = '/' }
  return <><Header onProjects={goHome} /><main><ProjectDetail onBack={goHome} /></main></>
}
