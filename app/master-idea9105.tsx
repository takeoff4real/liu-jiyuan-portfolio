'use client'
import { SlideCarousel } from './slide-carousel'

import { useState } from 'react'

const images = ['main.png','action.png','detail.png','map.png','emergency.png','edu.png','plan1.png','login.png','Frame.png','Frame-5.png','Frame-7.png','Frame-8.png'].map((name) => ({ src: `/assets/masters/aussie-emergency/${name}`, alt: `AUSSIE EMERGENCY 最终界面 · ${name}` }))

const workflow = [
  { kicker: '01 / BRIEF', title: '把灾害信息转化为可行动的数字体验', body: '课程围绕界面设计的方法、结构与交互表达展开，要求将研究洞察转化为清晰、可用且能够被测试和迭代的数字界面方案。' },
  { kicker: '02 / CONTEXT', title: '面向澳大利亚社区的应急准备', body: 'AUSSIE EMERGENCY 聚焦灾害准备与应急情境，将实时预警、地图信息、行动指引和家庭协作组织到同一套跨设备体验中。' },
  { kicker: '03 / RESEARCH', title: '先理解压力下的信息需求', body: '项目重点关注用户在紧急情境下如何快速判断风险、找到可信信息并执行下一步。研究与评估因此成为信息层级和流程设计的依据。' },
  { kicker: '04 / STRUCTURE', title: '建立从预警到行动的任务路径', body: '设计将实时灾害地图、分级警报、灾害详情、行动卡片、应急教育和家庭计划拆分为相互关联的界面模块，降低用户寻找信息的成本。' },
  { kicker: '05 / INTERACTION', title: '让复杂信息保持清晰、可读', body: '通过页面层级、状态反馈与行动导向的组件组织内容，使用户能够从“知道发生了什么”继续进入“现在应该做什么”。' },
  { kicker: '06 / PROTOTYPE', title: '从结构到高保真界面', body: '设计过程从信息组织和页面结构逐步推进到最终界面，持续检查不同页面之间的关系、导航逻辑和跨设备体验。' },
  { kicker: '07 / EVALUATION', title: '用评估推动设计迭代', body: '项目将研究判断和评估结果转化为界面调整，重点检视信息是否易于理解、行动路径是否明确，以及系统是否能够支持家庭协作。' },
  { kicker: '08 / FINAL WORK', title: 'AUSSIE EMERGENCY', body: '最终成果是一套面向灾害准备与应急行动的跨设备界面系统，让用户在压力下仍能快速理解情境并采取行动。' },
]

export function MasterIdea9105({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<'web' | 'poster'>('web')
  return <section className="detail-page master-detail master-idea9105">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 02</span><span>第一学期 / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">IDEA9105 / INTERFACE DESIGN</p><h1>AUSSIE EMERGENCY</h1></div><p className="detail-lead">一个面向澳大利亚社区的灾害准备与应急体验平台。最终方案把实时预警、地图信息、行动指引和家庭协作整合为一套跨设备界面系统。</p></div>
    <div className="detail-facts"><span><b>课程</b>IDEA9105 Interface Design</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>形式</b>界面系统 / Final Work</span><span><b>重点</b>信息架构、交互路径与评估</span></div>
    <div className="workflow-intro"><p className="kicker">A COMPLETE INTERFACE DESIGN WORKFLOW</p><h2>从灾害信息，到可以执行的下一步</h2><p>作品以研究、结构和交互为线索，展示如何把复杂的应急信息组织成清晰、可读并支持行动的数字体验。</p></div>
    <div className="workflow-grid">{workflow.map((item) => <article key={item.kicker} className="workflow-step"><p className="kicker">{item.kicker}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    <div className="detail-story"><article><p className="kicker">POSTER CONCEPT / 09</p><h2>让紧急信息在压力下仍然可读、可行动</h2><p>Poster 不是对作品的简单汇总，而是将灾害情境、研究判断与设计回应压缩成一条易于理解的视觉叙事。通过清晰的信息层级和行动导向的组织方式，海报先建立问题意识，再说明用户下一步可以如何准备与应对。</p></article><article><p className="kicker">MY PARTICIPATION / 10</p><h2>以系统而非单张界面解决问题</h2><p>我参与了界面结构、信息层级、页面路径和最终呈现的整理，重点将分散的应急信息组织为连贯的任务流程，并通过最终界面和 Poster 共同说明设计判断。</p></article></div>
    <nav className="master-view-switch" aria-label="切换 9105 作品详情"><button className={view === 'web' ? 'is-active' : ''} onClick={() => setView('web')}>WEB DESIGN <span>网页设计详情</span></button><button className={view === 'poster' ? 'is-active' : ''} onClick={() => setView('poster')}>POSTER <span>研究与评估海报</span></button></nav>
    {view === 'poster' ? <section className="master-poster-view" aria-label="AUSSIE EMERGENCY 研究与评估 poster"><iframe src="/assets/masters/aussie-emergency/research-report.pdf#view=FitH" title="AUSSIE EMERGENCY 研究与评估 poster" /></section> : <SlideCarousel slides={images} layout="masonry" visibleCount={2} className="idea9105-slide-stack" />}
    <div className="detail-end"><span>END OF MASTER PROJECT 02</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
