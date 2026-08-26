'use client'

import { useState } from 'react'

const submissions = [
  {
    number: '01',
    label: 'GAME EXPERIENCE REFLECTION',
    title: '从“为了赢”到“为了感受”',
    body: '一篇基于个人游戏经历的反思：从 Counter-Strike 1.6、Call of Duty、PUBG 到 Apex Legends，梳理游戏如何从童年竞争转向成年后的情绪支持、自由感与连接感。',
    file: '/assets/masters/arin6904/game-experience-reflection.docx',
    fileLabel: '打开反思文档 ↗',
  },
  {
    number: '02',
    label: 'SERIOUS GAME DESIGN CONCEPT',
    title: 'Life.exe：在信息过载中做出选择',
    body: '一项小组严肃游戏概念。Life.exe 是一款像素风格的模拟 / 策略游戏，通过 NewsNow、VidBox、ShopEZ、InvestPro、JobBoard 等信息与生活应用，把信息素养、心理健康、财务决策和跨文化适应连接成一个相互影响的系统。',
    file: '/assets/masters/arin6904/serious-game-life-exe.pdf',
    fileLabel: '查看 Serious Game 概念 PDF ↗',
  },
  {
    number: '03',
    label: 'GAME ANALYSIS',
    title: '当“聪明的玩法”越过规则边界',
    body: '一篇围绕 2014 DreamHack Winter Fnatic 对 LDLC 比赛中 “olofboost” 事件的游戏分析，讨论 glitch、metagame、电竞观赛可读性，以及规则与伦理之间的张力。',
    file: '/assets/masters/arin6904/game-analysis-olofboost.pdf',
    fileLabel: '查看游戏分析 PDF ↗',
  },
  {
    number: '04',
    label: 'MIXED REALITY REPORT',
    title: '用 VR 重新接近吴哥遗产',
    body: '一份面向 Angkor Heritage Trust 的行业反思报告，提出“Lost Angkor”沉浸式 VR 中心，将遗产保护、游客教育与非接触式参与放在同一个体验方案中，同时评估真实性、卫生、吞吐量与晕动症等限制。',
    file: '/assets/masters/arin6904/mixed-reality-lost-angkor.pdf',
    fileLabel: '查看混合现实报告 PDF ↗',
  },
]

const workflow = [
  ['01 / COURSE BRIEF', '从游戏研究走向混合现实实践', 'ARIN6904 Games and Mixed Realities 通过游戏研究、严肃游戏、游戏设计、游戏文化、电竞伦理与混合现实等主题，训练我从玩家经验、规则系统和技术媒介之间理解互动体验。'],
  ['02 / POSITION', '把玩家经验作为研究入口', '我从自己的游戏经历出发，记录竞争、疲惫、自由感和文化迁移如何改变我对游戏的期待，再把个人感受连接到游戏研究中的更大问题。'],
  ['03 / ANALYSE', '从具体事件拆解规则与观看', '通过对 “olofboost” 赛事视频的分析，我把一个具体的比赛事件拆分为 glitch、metagame、观众判断与 legibility，练习以理论阅读支撑对互动系统的批判性判断。'],
  ['04 / PROPOSE', '把 VR 作为保护与参与的中介', '在混合现实报告中，我将遗产保护中的“减少物理接触”与游客“希望深入参与”的矛盾，转化为一个可讨论的 VR 中心提案，并明确它的伦理和运营边界。'],
  ['05 / REFLECT', '从作品判断走向媒介责任', '四份作业共同形成一条学习线索：互动体验不只关乎好不好玩，也关乎规则如何塑造行为、技术如何改变观看，以及设计如何对文化、真实性和公共影响负责。'],
]

export function MasterArin6904({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(0)
  const current = submissions[active]

  return <section className="detail-page master-detail master-arin6904">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 03</span><span>FIRST SEMESTER / COURSE WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">ARIN6904 / GAMES AND MIXED REALITIES</p><h1>Games &amp;<br /><em>Mixed Realities</em></h1></div><p className="detail-lead">以玩家经验、游戏规则与混合现实为线索，展示我如何从个人体验进入批判性研究，再将研究转译为面向真实文化遗产问题的 VR 方案。</p></div>
    <div className="detail-facts"><span><b>课程</b>ARIN6904 Games and Mixed Realities</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>作业</b>反思 / 概念 / 分析 / 报告</span><span><b>重点</b>严肃游戏、电竞伦理与 VR 提案</span></div>

    <div className="workflow-intro"><p className="kicker">A COURSE-BASED WORKFLOW</p><h2>从玩家经验，到混合现实提案</h2><p>本页按课程任务组织内容：先说明这门课研究什么，再展示我的参与方式、作业判断与最终文档。四项作业分别对应个人反思、严肃游戏概念、游戏分析与混合现实提案。</p></div>
    <div className="workflow-grid arin-workflow">{workflow.map(([kicker, title, body]) => <article key={kicker} className="workflow-step"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>

    <div className="detail-story"><article><p className="kicker">MY PARTICIPATION / RESEARCHER</p><h2>以三种尺度参与课程</h2><p>我分别从个人经验、具体赛事和行业情境进入课程：先理解自己为什么玩游戏，再分析游戏系统如何产生争议，最后把 VR 放入遗产保护的真实限制中进行评估。</p></article><article><p className="kicker">PORTFOLIO EDIT / SELECTION</p><h2>把论文也作为设计能力的证据</h2><p>这些作品不以视觉成品为主，而以问题意识、理论分析、结构化表达和方案判断为重点。它们补充了我在界面、设计思维之外的研究与叙事能力。</p></article></div>

    <section className="arin-submissions" aria-labelledby="arin-submissions-title"><div className="section-intro"><p className="kicker">SELECTED SUBMISSIONS / 03</p><h2 id="arin-submissions-title">课程作业</h2><p className="section-description">点击每一项查看对应作业的简介与原始提交文件。</p></div><div className="arin-submission-layout"><nav className="arin-submission-nav" aria-label="ARIN6904 作业导航">{submissions.map((item, index) => <button key={item.number} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><span>{item.label}</span></button>)}</nav><article className="arin-submission-detail"><p className="kicker">{current.label}</p><h3>{current.title}</h3><p>{current.body}</p><a className="master-report-link is-static" href={current.file} target="_blank" rel="noreferrer">{current.fileLabel}</a></article></div></section>

    <div className="detail-end"><span>END OF MASTER PROJECT 03</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
