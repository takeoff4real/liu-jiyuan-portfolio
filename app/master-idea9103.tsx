'use client'

import { useState } from 'react'
import { SlideCarousel } from './slide-carousel'

const submissions = [
  { number: '01', label: 'FINAL DESIGN DOCUMENT', title: '把 Mondrian 的网格变成可运行的系统', body: 'Creative Coding 的 final submission 以 Piet Mondrian 的 Broadway Boogie Woogie 为主要视觉参照，将画面中的网格、色块与节奏转译为 p5.js 中可被组织、拆分和动画化的代码结构。页面展示真实的小组设计文档，并保留原始 ZIP 提交。', file: '/assets/masters/idea9103-design-document.pdf', fileLabel: '打开 Design Document PDF ↗', folder: 'design-document', count: 15 },
]

const workflow = [
  ['01 / COURSE BRIEF', '代码是创作媒介，不只是执行工具', '课程要求以 p5.js 完成一个可运行的创意编码作品：小组先共同建立视觉基础，每位成员再用不同的动画方法发展个人版本，并用设计文档说明研究、技术计划、实现过程、代码结构与 GitHub 链接。'],
  ['02 / RESEARCH', '从 Broadway Boogie Woogie 读取节奏', 'Group E 选择 Piet Mondrian 的 Broadway Boogie Woogie 作为主要参照，关注曼哈顿网格、彩色分区与 boogie-woogie 音乐之间的节奏关系，把静态绘画理解为一个可以被重新编码的视觉系统。'],
  ['03 / STRUCTURE', '把画面拆成可复用的模块', '设计文档将实现拆成网格、色块、线路和动画逻辑，并强调使用 functions 与 classes 保持代码可读、可调整、可被小组成员继续扩展。'],
  ['04 / ANIMATION', '让规则、时间与随机性产生变化', '课程允许以 audio、time-based、Perlin noise / randomness 或 user input 驱动动画。这样的限制让个人版本在共享视觉基础上保持差异，也把静态构图转成实时行为。'],
  ['05 / IMPLEMENTATION', '从小组基础到个人 final work', '文档记录从研究、技术计划到不同阶段输出的过程，并要求说明实际实现与原计划之间的变化。最终展示重点应放在运行中的 p5.js prototype，以及它如何回应原作的结构与节奏。'],
  ['06 / DELIVERY', '让代码、说明与提交彼此对应', 'Final submission 由设计文档、每位成员的 functioning prototype、README、代码注释和 GitHub 链接构成。本页直接呈现设计文档，并提供原始 ZIP 以便继续追溯。'],
]

const slides = Array.from({ length: 15 }, (_, index) => ({ src: `/assets/masters/slides/idea9103/design-document/slide-${String(index + 1).padStart(2, '0')}.jpg`, alt: `IDEA9103 Design Document 第 ${index + 1} 页` }))

export function MasterIdea9103({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(0)
  const current = submissions[active]
  return <section className="detail-page master-detail master-idea9103">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 04</span><span>FIRST SEMESTER / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">IDEA9103 / CREATIVE CODING</p><h1>Creative<br /><em>Coding</em></h1></div><p className="detail-lead">一项以 p5.js 为创作媒介的生成式视觉实验。Group E 从 Piet Mondrian 的 Broadway Boogie Woogie 出发，把网格、色块和节奏转译成可拆分、可动画化、可被不同成员继续发展的代码系统。</p></div>
    <div className="detail-facts"><span><b>课程</b>IDEA9103 Creative Coding</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>小组</b>Tutorial 04 · Group E</span><span><b>成果</b>Design Document / p5.js prototype</span></div>
    <div className="workflow-intro"><p className="kicker">A COMPLETE CREATIVE CODING WORKFLOW</p><h2>从绘画研究，到可运行的视觉系统</h2><p>本页按课程 brief 与 Group E 的 final design document 组织内容。设计文档是目前收到的 Creative Coding final work 文件，页面不把未随 ZIP 提供的 prototype 文件虚构成可下载成果。</p></div>
    <div className="workflow-grid idea9103-workflow">{workflow.map(([kicker, title, body]) => <article key={kicker} className="workflow-step"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
    <div className="detail-story"><article><p className="kicker">DESIGN POSITION / 01</p><h2>用代码重建绘画的节奏</h2><p>这个项目的核心不是复制原画，而是把原画中可被观察的结构——网格、分区、颜色和运动感——转成一套能够持续变化的规则。</p></article><article><p className="kicker">FINAL WORK / 02</p><h2>Group E Design Document</h2><p>设计文档集中呈现研究与 inspiration、technical planning、implementation、technical overview 和交付说明，是目前这份 final submission 中最完整的过程与方法记录。</p><a className="master-report-link is-static" href="https://github.com/dlua0926/IDEA9103_Group-E" target="_blank" rel="noreferrer">打开 Group E GitHub ↗</a></article></div>
    <section className="arin-submissions idea9103-submissions" aria-labelledby="idea9103-submissions-title"><div className="section-intro"><p className="kicker">FINAL SUBMISSION / 01</p><h2 id="idea9103-submissions-title">设计文档与原始提交</h2><p className="section-description">点击作业名称查看说明；下方直接展示设计文档页面，原始 ZIP 同时保留。</p></div><div className="arin-submission-layout"><nav className="arin-submission-nav" aria-label="IDEA9103 作业导航">{submissions.map((item, index) => <button key={item.number} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><span>{item.label}</span></button>)}</nav><article className="arin-submission-detail"><p className="kicker">{current.label}</p><h3>{current.title}</h3><p>{current.body}</p><a className="master-report-link is-static" href={current.file} target="_blank" rel="noreferrer">{current.fileLabel}</a><a className="master-report-link is-static" href="/assets/masters/idea9103-final.zip" target="_blank" rel="noreferrer">打开原始 ZIP 提交 ↗</a></article></div><SlideCarousel slides={slides} className="idea9103-slide-stack" /></section>
    <div className="detail-end"><span>END OF MASTER PROJECT 04</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
