'use client'

import { useState } from 'react'
import { SlideCarousel } from './slide-carousel'

const assignments = [
  { number: '01', label: 'DIGITAL TRANSFORMATION CRITIQUE', title: '从 BlackBerry 的失败，理解数字转型为何失速', body: '研究报告以 BlackBerry 为案例，分析触屏革命、用户需求变化、竞争压力和组织惯性如何共同造成转型失败，并总结设计师与组织可以采取的策略。', file: '/assets/masters/desn9002/a1.pdf', fileLabel: '打开 A1 研究报告 PDF ↗', folder: 'a1', count: 8 },
  { number: '02A', label: 'POSTER EXHIBITION', title: 'BlackBerry Horizon：工业数字孪生的安全转型', body: 'A3 海报把策略压缩成一条清晰的 PREDICT / NEUTRALISE / HEAL 逻辑，提出以 BlackBerry QNX、生成式 AI、边缘计算和 AR / VR 构成安全的工业元宇宙平台。', file: '/assets/masters/desn9002/a2-poster.pdf', fileLabel: '打开 A2 Poster PDF ↗', folder: 'a2-poster', count: 1 },
  { number: '02B', label: 'IN-CLASS PRESENTATION', title: '把研究判断转化为可被说服的提案', body: '课堂演示继续说明 BlackBerry Horizon 的背景、问题、方案、核心战略、价值和实施路线，将海报中的视觉概念发展为面向企业的五分钟提案。', file: '/assets/masters/desn9002/a2-presentation.pdf', fileLabel: '打开 A2 Presentation PDF ↗', folder: 'a2-presentation', count: 7 },
  { number: '03', label: 'STRATEGY PROPOSAL', title: '从产品供应商到工业元宇宙平台', body: '最终视觉报告提出 BlackBerry Horizon：以数字孪生、QNX、BlackBerry IVY、Sentinel AI 和 XR 远程维护构成一个安全优先的工业空间计算平台，并给出执行、风险与伦理路线。', file: '/assets/masters/desn9002/a3.pdf', fileLabel: '打开 A3 Strategy Proposal PDF ↗', folder: 'a3', count: 11 },
]

const workflow = [
  ['01 / COURSE BRIEF', '理解数字革命如何改变设计问题', 'DESN9002 要求我从数字转型、Emerging Technologies 与组织策略出发，研究一个企业的变化，再提出有研究基础、可执行并考虑伦理影响的数字转型方案。'],
  ['02 / CRITIQUE', 'BlackBerry 的问题不是缺少技术', 'A1 通过 BlackBerry 案例分析触屏革命、应用生态、消费用户需求和组织决策惯性，判断它为何无法及时从安全硬件优势转向完整的用户体验与软件生态。'],
  ['03 / OPPORTUNITY', '从 QNX 的隐藏价值寻找新位置', '研究将 BlackBerry 当前的 QNX 安全能力视为转型基础，把企业从隐形组件供应商重新定位为工业数字孪生与空间计算中的可信安全层。'],
  ['04 / STRATEGY', 'BlackBerry Horizon', '最终策略面向重型制造与汽车装配，将实时传感器数据、数字孪生、边缘计算、生成式 AI 和 AR / VR 远程维护组织为一个统一系统。'],
  ['05 / SYSTEM', 'PREDICT / NEUTRALISE / HEAL', 'P-N-H 是方案的核心运行逻辑：先从遥测数据预测风险，再由边缘节点隔离和缓解威胁，最后通过 XR 引导现场人员完成修复并更新数字孪生。'],
  ['06 / ROADMAP', '从试点到平台生态', '方案分为基础建设、EV 工厂试点和规模化平台三个阶段，并讨论人才、技术延迟、保守型客户、数据主权与工业 App Store 等执行条件。'],
  ['07 / ETHICS', '数字转型也必须对人负责', '最终提案加入 human-in-the-loop 安全机制和 reskilling fund，回应自动化决策、工人转型、算法责任与数字基础设施环境影响。'],
]

const slides = (folder: string, count: number) => Array.from({ length: count }, (_, index) => {
  const slideNumber = folder === 'a3' ? String(index + 1).padStart(2, '0') : String(index + 1)
  return { src: `/assets/masters/desn9002/slides/${folder}/slide-${slideNumber}.jpg`, alt: `DESN9002 ${folder} 第 ${index + 1} 页` }
})

export function MasterDesn9002({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(3)
  const current = assignments[active]
  return <section className="detail-page master-detail master-desn9002">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 06</span><span>SECOND SEMESTER / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">DESN9002 / DESIGNING FOR THE DIGITAL REVOLUTION</p><h1>BlackBerry<br /><em>Horizon</em></h1></div><p className="detail-lead">一组从数字转型批判走向战略提案的课程作品。项目以 BlackBerry 为案例，研究企业如何从移动硬件时代的领导者，转向一个面向工业数字孪生、空间计算与安全服务的平台。</p></div>
    <div className="detail-facts"><span><b>课程</b>DESN9002 Designing for the Digital Revolution</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>案例</b>BlackBerry / QNX</span><span><b>成果</b>研究报告、海报、演示、视觉战略报告</span></div>

    <div className="workflow-intro"><p className="kicker">A COMPLETE DIGITAL TRANSFORMATION WORKFLOW</p><h2>从失败案例，到可执行的工业元宇宙战略</h2><p>本页按课程的三项 Assessment 组织内容：先批判一个真实转型案例，再以海报和演示提出方向，最后形成包含系统、路线、价值与伦理的完整视觉战略提案。</p></div>
    <div className="workflow-grid desn9002-workflow">{workflow.map(([kicker, title, body]) => <article key={kicker} className="workflow-step"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>

    <div className="detail-story"><article><p className="kicker">DESIGN POSITION / 01</p><h2>把数字转型看成系统重构</h2><p>这个项目让我不再把数字化理解为增加一个新功能，而是从用户、组织、技术生态、商业模式和社会影响一起判断一个企业是否真正完成转型。</p></article><article><p className="kicker">FINAL WORK / 02</p><h2>BlackBerry Horizon</h2><p>最终方案将 BlackBerry 的安全遗产转译为工业场景中的可信基础设施：让工厂数据、维护决策和远程协作在可追踪、可保护的系统中连接起来。</p></article></div>

    <section className="arin-submissions desn9002-submissions" aria-labelledby="desn9002-submissions-title"><div className="section-intro"><p className="kicker">SELECTED SUBMISSIONS / 04</p><h2 id="desn9002-submissions-title">课程作业与原始提交</h2><p className="section-description">点击作业名称切换说明；下方同步展示对应的原始提交页面。</p></div><div className="arin-submission-layout"><nav className="arin-submission-nav" aria-label="DESN9002 作业导航">{assignments.map((item, index) => <button key={item.number} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><span>{item.label}</span></button>)}</nav><article className="arin-submission-detail"><p className="kicker">{current.label}</p><h3>{current.title}</h3><p>{current.body}</p><a className="master-report-link is-static" href={current.file} target="_blank" rel="noreferrer">{current.fileLabel}</a></article></div><SlideCarousel slides={slides(current.folder, current.count)} className="desn9002-slide-stack" /></section>

    <div className="detail-end"><span>END OF MASTER PROJECT 06</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
