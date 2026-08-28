'use client'

import { useParams } from 'next/navigation'
import { BindingDesignDetail, Header, MasterDetail, ProjectDetail, ProjectGalleryDetail } from '../../page'
import { MasterIdea9105 } from '../../master-idea9105'
import { MasterIdea9106 } from '../../master-idea9106'
import { MasterArin6904 } from '../../master-arin6904'
import { MasterIdea9202 } from '../../master-idea9202'
import { MasterDesn9002 } from '../../master-desn9002'
import { MasterIdea9103 } from '../../master-idea9103'
import { MasterCmpn5006 } from '../../master-cmpn5006'

export default function ProjectSlugPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const goHome = () => {
    if (document.referrer.startsWith(window.location.origin)) {
      window.history.back()
      return
    }
    window.location.href = '/#undergraduate-work'
  }
  const isMaster = slug.startsWith('master-')
  if (!isMaster && slug === 'binding-design') return <><Header onProjects={goHome} /><main><BindingDesignDetail onBack={goHome} /></main></>
  return <><Header onProjects={goHome} /><main>{isMaster ? slug.slice('master-'.length) === 'idea9103' ? <MasterIdea9103 onBack={goHome} /> : slug.slice('master-'.length) === 'idea9105' ? <MasterIdea9105 onBack={goHome} /> : slug.slice('master-'.length) === 'idea9106' ? <MasterIdea9106 onBack={goHome} /> : slug.slice('master-'.length) === 'arin6904' ? <MasterArin6904 onBack={goHome} /> : slug.slice('master-'.length) === 'idea9202' ? <MasterIdea9202 onBack={goHome} /> : slug.slice('master-'.length) === 'desn9002' ? <MasterDesn9002 onBack={goHome} /> : slug.slice('master-'.length) === 'cmpn5006' ? <MasterCmpn5006 onBack={goHome} /> : <MasterDetail slug={slug.slice('master-'.length)} onBack={goHome} /> : slug === '1984' ? <ProjectDetail onBack={goHome} /> : <ProjectGalleryDetail slug={slug} onBack={goHome} />}</main></>
}
