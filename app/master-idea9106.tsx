'use client'

import { useEffect, useState } from 'react'

const images = Array.from({ length: 17 }, (_, index) => ({
  src: `/assets/masters/idea9106-final/page-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `Make Your Choice 最终展示页面 ${String(index + 1).padStart(2, '0')}`,
}))

const workflow = [
  {
    kicker: '01 / BRIEF',
    title: '让可持续行为更友好、更值得参与',
    body: '课程项目要求团队围绕设计问题展开研究、概念生成、原型制作与测试迭代，并在最终展示中说明设计思维过程与方案如何产生改变。',
  },
  {
    kicker: '02 / RESEARCH',
    title: '从国际学生的真实处境理解问题',
    body: '项目聚焦悉尼大学国际学生使用可重复使用杯的行为。研究讨论了文化习惯、语言障碍与环保意识之间的关系，而不是把问题简单归结为缺少奖励。',
  },
  {
    kicker: '03 / REFRAME',
    title: '从“如何让学生使用”转向“如何让行为变得友好”',
    body: '通过团队讨论与反思，问题被重新定义为：如何让可持续行为变得更容易理解、更有文化亲和力，也更值得参与。这一转向成为后续概念发展的依据。',
  },
  {
    kicker: '04 / CONCEPT',
    title: '奖励机制与母语教育视频结合',
    body: '最终概念将奖励机制与母语教育视频结合，让用户先理解可持续行为的意义，再通过反馈与激励形成参与动力。方案同时回应了不同文化背景用户的理解需要。',
  },
  {
    kicker: '05 / PROTOTYPE',
    title: '用低保真原型验证体验是否成立',
    body: '团队按照课程要求制作可用于测试的低保真原型，并围绕核心功能制定测试计划与任务。原型的重点不是视觉完成度，而是验证用户是否能理解并完成关键行为。',
  },
  {
    kicker: '06 / TEST',
    title: '在 User Testing Fair 中收集反馈',
    body: '团队进行可用性测试，观察用户完成任务的过程，并结合观察、访谈或 SUS 等方式整理反馈。测试结果用于支持下一阶段的设计调整。',
  },
  {
    kicker: '07 / ITERATE',
    title: '让信息、激励与行动路径更清晰',
    body: '项目根据测试与团队反馈持续调整内容组织、信息表达和互动路径，逐步把一个关于环保的想法发展为更容易理解和参与的体验方案。',
  },
  {
    kicker: '08 / FINAL WORK',
    title: 'Make Your Choice',
    body: '最终成果呈现一套面向国际学生的可持续饮品选择互动体验，将教育信息、行为激励和参与反馈组织在同一条体验路径中。',
  },
]

export function MasterIdea9106({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const current = lightbox === null ? null : images[lightbox]

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % images.length)
      if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? images.length - 1 : (value - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightbox])

  return <section className="detail-page master-detail master-idea9106">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 02</span><span>第一学期 / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">IDEA9106 / DESIGN THINKING</p><h1>Make Your Choice</h1></div><p className="detail-lead">一个面向悉尼大学国际学生的可持续饮品选择互动体验。项目通过奖励机制与母语教育视频，降低理解障碍，鼓励用户使用可重复使用杯。</p></div>
    <div className="detail-facts"><span><b>课程</b>IDEA9106 Design Thinking</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>形式</b>团队项目 / Final Presentation</span><span><b>重点</b>研究、原型、测试与迭代</span></div>
    <div className="workflow-intro"><p className="kicker">A COMPLETE DESIGN THINKING WORKFLOW</p><h2>从模糊问题，到可参与的可持续选择</h2><p>这不是单独展示最终页面，而是把 assignment 中的课程任务、研究判断、原型测试和最终成果串成一条完整的设计过程。</p></div>
    <div className="workflow-grid">{workflow.map((item) => <article key={item.kicker} className="workflow-step"><p className="kicker">{item.kicker}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    <div className="detail-story"><article><p className="kicker">MY PARTICIPATION / 09</p><h2>在团队中把反馈转化为设计判断</h2><p>我参与了问题定义、概念讨论、原型发展与用户测试。通过团队成员的不同文化视角和反复反馈，我逐渐学会把不确定性视为探索空间，并将反馈转化为更具体的设计调整。</p></article><article><p className="kicker">REFLECTION / 10</p><h2>从理性解决问题，到反思性设计实践</h2><p>这次项目让我认识到，设计问题并不只有一个正确答案。真正重要的是理解行为背后的文化、情绪与环境因素，再通过原型和测试逐步验证方案。</p></article></div>
    <div className="gallery master-gallery idea9106-gallery">{images.map((image, index) => <button className="gallery-item" key={image.src} onClick={() => setLightbox(index)} aria-label={`全屏查看：${image.alt}`}><img src={image.src} alt={image.alt} loading={index < 3 ? 'eager' : 'lazy'} /><span className="zoom-hint">放大 <b>↗</b></span></button>)}</div>
    <div className="detail-end"><span>END OF MASTER PROJECT 02</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
    {current && <div className="lightbox" role="dialog" aria-modal="true" aria-label="全屏作品查看" onClick={() => setLightbox(null)}><button className="close-lightbox" onClick={() => setLightbox(null)} aria-label="关闭全屏查看">×</button><img src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption">{String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {current.alt}<span>← → 切换　ESC 关闭</span></div></div>}
  </section>
}
