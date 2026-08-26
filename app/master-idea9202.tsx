'use client'

import { useState } from 'react'

const submissions = [
  { number: '01', label: 'SCOPE REVIEW', title: '先理解场地，再定义体验问题', body: 'Assessment 1 以 MAP mima 的 The Cube 与 The Catenary 为场地，比较六个沉浸式光与媒体装置案例，建立从案例研究、场地条件到体验机会的范围判断。', file: '/assets/masters/idea9202/scope-review.pdf', fileLabel: '查看 Scope Review 原始提交 ↗' },
  { number: '02', label: 'PRELIMINARY CONCEPTS', title: '让儿童探索与母亲休息同时发生', body: 'Assessment 2 将目标人群聚焦到 Mothers Club：通过人物画像、场地研究和多轮概念测试，探索 BLOOM、Living Canopy、Water Garden 与 Whisper Grove Corner 等方向，逐渐收敛空间与互动逻辑。', file: '/assets/masters/idea9202/preliminary-concepts.pdf', fileLabel: '查看 Preliminary Concepts 原始提交 ↗' },
  { number: '03', label: 'CLIENT PROPOSAL', title: '把研究转化为 MAP mima 的双场地提案', body: 'Assessment 3 完成面向客户的提案：以 Catenary 的 GROVE 和 Cube 的 Whisper Grove Corner 为最终场地方案，并补充交互故事板、空间逻辑、测试迭代与团队分工。', file: '/assets/masters/idea9202/client-proposal.pdf', fileLabel: '查看 Client Proposal 原始提交 ↗' },
]

const workflow = [
  ['01 / COURSE BRIEF', '从体验设计进入真实场地', 'Experience Design Studio 以真实公共文化场地为对象，要求从研究、概念、原型和测试出发，提出能够回应用户与客户需要的空间体验。我的项目选择 MAP mima / Multi-Arts Pavilion mima，重点处理 The Cube 与 The Catenary 两种不同媒介空间。'],
  ['02 / SCOPE REVIEW', '用案例研究建立设计范围', '我比较了 Archive Dreaming、Rain Room、Borderless、Waterlicht、Pulse Topology 和 The Bay Lights，分析沉浸式作品如何组织身体行动、观众关系、场地记忆与光媒介，为后续方案提供参照。'],
  ['03 / SITE & PEOPLE', '从场地和照护关系发现问题', '项目将 Speers Point Park 的家庭型公共环境与 MAP mima 的空间条件结合起来，聚焦带孩子参加活动的母亲。研究关注儿童需要探索和刺激，而母亲需要休息、监督、安全感与轻松的社交连接。'],
  ['04 / REFRAME', '把“母亲的休息”也设计成体验', '团队把问题重新表述为：如何将 MAP mima 转化为一种低刺激、可共同使用的沉浸环境，让儿童自由互动，同时让母亲能够休息、保持观察并获得温和的情绪连接。'],
  ['05 / TEST & ITERATE', '用测试修正互动节奏', '测试暴露出操作负担、反馈不一致、信息拥挤和身体疲劳等问题。方案随后简化互动路径，加入呼吸式光线引导、分层反馈、动态声景、统一互动语法与更清晰的区域逻辑。'],
  ['06 / FINAL PROPOSAL', '两个空间，回应同一个照护问题', '最终提案将户外 Catenary 发展为 GROVE，将室内 Cube 发展为 Whisper Grove Corner。两者都不把母亲当作被动旁观者，而是让儿童的探索与母亲的休息通过光、声音和空间关系保持联系。'],
]

const clientProposalSlides = Array.from({ length: 24 }, (_, index) => ({
  src: `/assets/masters/idea9202/client-proposal-slides/slide-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `IDEA9202 Assessment 3 Client Proposal 第 ${index + 1} 页`,
}))

export function MasterIdea9202({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(2)
  const current = submissions[active]
  return <section className="detail-page master-detail master-idea9202">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 05</span><span>SECOND SEMESTER / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">IDEA9202 / EXPERIENCE DESIGN STUDIO</p><h1>MAP mima<br /><em>Mothers Club</em></h1></div><p className="detail-lead">一个面向 MAP mima / Multi-Arts Pavilion mima 的体验设计提案。项目围绕 Mothers Club，研究如何让儿童的探索、母亲的休息与公共文化空间在同一套沉浸式体验中共存。</p></div>
    <div className="detail-facts"><span><b>课程</b>IDEA9202 Experience Design Studio</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>场地</b>MAP mima · Lake Macquarie</span><span><b>形式</b>小组项目 / Client Proposal</span></div>

    <div className="workflow-intro"><p className="kicker">A COMPLETE EXPERIENCE DESIGN WORKFLOW</p><h2>从场地研究，到可被共同使用的沉浸体验</h2><p>本页按三份正式提交文件整理课程过程，并把最终提案拆成场地、用户、互动和迭代四个层次。页面中的描述只依据 Canvas 提交内容，不把早期概念误写成最终作品。</p></div>
    <div className="workflow-grid idea9202-workflow">{workflow.map(([kicker, title, body]) => <article key={kicker} className="workflow-step"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>

    <div className="detail-story"><article><p className="kicker">MY PARTICIPATION / JIYUAN LIU</p><h2>我负责把互动逻辑落到 Cube 的体验里</h2><p>在小组项目中，我负责像素头像签到系统、动态粒子与灯光反馈、场景过渡，以及 Cube 内部的用户寻路、空间引导和现场互动逻辑；同时参与人物画像、SWOT 分析、空间流线、交互原型、用户测试、设备调试和最终呈现。</p></article><article><p className="kicker">FINAL WORK / TWO SITES</p><h2>GROVE 与 Whisper Grove Corner</h2><p>GROVE 将 Catenary 变成带有悬挂光柱和波浪座椅的户外路径：儿童经过时光柱随脚步升起，母亲在旁边休息并保持观察。Whisper Grove Corner 则把 Cube 变成低刺激的 360° 沉浸空间，以像素宠物、星空、花园和动作反馈支持儿童探索与母亲恢复。</p></article></div>

    <section className="detail-story idea9202-final"><article><p className="kicker">CUBE / EXPERIENCE DIRECTIONS</p><h2>三个互动脚本，构成室内提案的体验层</h2><p><b>Celestial Explorer</b> 通过星座、行星和协作手势支持儿童学习；<b>Magic Garden</b> 让儿童的动作促使植物、昆虫和光线变化，并让母亲的呼吸与静止影响附近花朵；<b>Pixel Recognition</b> 通过无接触面部识别生成像素宠物，在单人和多人状态下产生跟随、互动与消散。</p></article></section>

    <section className="idea9202-slide-section" aria-labelledby="idea9202-slides-title"><div className="section-intro"><p className="kicker">ASSESSMENT 3 / CLIENT PROPOSAL</p><h2 id="idea9202-slides-title">Client Proposal<br /><em>完整页面展示</em></h2><p className="section-description">Assessment 3 的 24 页 A2 提案按原始顺序直接呈现。点击任意页面可放大查看。</p></div><div className="idea9202-slide-stack">{clientProposalSlides.map((slide) => <a key={slide.src} href={slide.src} target="_blank" rel="noreferrer"><img src={slide.src} alt={slide.alt} loading="lazy" /></a>)}</div><a className="master-report-link is-static" href="/assets/masters/idea9202/client-proposal.pdf" target="_blank" rel="noreferrer">打开原始 PDF ↗</a></section>

    <section className="arin-submissions idea9202-submissions" aria-labelledby="idea9202-submissions-title"><div className="section-intro"><p className="kicker">SELECTED SUBMISSIONS / 03</p><h2 id="idea9202-submissions-title">课程作业与原始提交文件</h2><p className="section-description">点击每一项查看该阶段的简介与原始 PDF。A3 中提到的概念视频未作为 Canvas 附件提供，因此页面不虚构视频入口。</p></div><div className="arin-submission-layout"><nav className="arin-submission-nav" aria-label="IDEA9202 作业导航">{submissions.map((item, index) => <button key={item.number} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><span>{item.label}</span></button>)}</nav><article className="arin-submission-detail"><p className="kicker">{current.label}</p><h3>{current.title}</h3><p>{current.body}</p><a className="master-report-link is-static" href={current.file} target="_blank" rel="noreferrer">{current.fileLabel}</a></article></div></section>
    <div className="detail-end"><span>END OF MASTER PROJECT 05</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
