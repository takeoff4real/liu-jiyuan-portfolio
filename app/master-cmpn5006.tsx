'use client'

import { useState } from 'react'
import { SlideCarousel } from './slide-carousel'

const submissions = [
  { number: '01', label: 'PORTFOLIO PROPOSAL', title: '先定义声音作品集的范围与听觉体验', body: '第一份提交是小组的 pitch deck proposal：计划制作至少四种不同的短音频产品，明确作品类型、艺术愿景、录音方法、技术与空间需求，以及成员分工。', file: '/assets/masters/recording-portfolio/a1-proposal.pdf', fileLabel: '打开 Portfolio Proposal PDF ↗', folder: 'recording-a1', count: 7 },
  { number: '02', label: 'FIRST TRACK + REFLECTION', title: '用一次录音检验设备、空间与后期边界', body: '第一条音轨提交要求在不依赖复杂 EQ 或效果的情况下，使用基础设备完成尽可能高质量的录音，并通过视频反思记录计划、录音过程、成功与困难，以及对后续作品集的调整。', file: '/assets/masters/recording-portfolio/a2-link.docx', fileLabel: '打开 A2 提交说明 DOCX ↗', folder: '', count: 0 },
  { number: '03', label: 'FINAL FULL PORTFOLIO', title: 'A Day Indoors：用日常环境组织声音叙事', body: '最终作品集以 A Day Indoors 为标题，围绕共同声音叙事与日常室内环境展开，结合录音产品、视觉目录、工作流程、反思与最终音频入口，形成一份面向听众的完整作品集。', file: '/assets/masters/recording-portfolio/final-portfolio.pdf', fileLabel: '打开 Final Portfolio PDF ↗', folder: 'recording-final', count: 12 },
]

const workflow = [
  ['01 / COURSE BRIEF', '把录音当成独立的设计成果', 'CMPN5006 要求建立一个至少四种、总时长至少六分钟的对比性声音作品集。录音需要经过编辑与混音，以专业广播标准呈现，并配合个人 Process Diary 说明过程。'],
  ['02 / PROPOSAL', '先建立声音作品的组合关系', '提案阶段不是单独规划一条音轨，而是思考不同 recording products 如何共同组成一个有艺术愿景、听觉体验和商业提案感的 portfolio。'],
  ['03 / RECORD', '从真实环境中获取声音', '第一条音轨以基础录音设备完成，重点放在环境、设备摆位、声学、主体与背景的平衡，以及录音现场对最终质量的影响。'],
  ['04 / REFLECT', '把成功与困难变成下一轮决策', '视频反思要求展示录音现场、说明成员参与、分享成功与困难，并解释第一次录音之后如何调整未来的 portfolio 计划。'],
  ['05 / FINAL MIX', '让声音产品达到可交付状态', '最终作品集要求音频被编辑、混音并以无压缩格式交付，同时让文件命名、链接、采样率、位深和呈现方式保持专业与可追溯。'],
  ['06 / PROCESS DIARY', '同时记录技术与协作经验', '个人 Process Diary 需要包含 track list、作品说明、DAW 工作截图、录音现场照片、最终声音链接，以及对协作、技术与创作经验的个人反思。'],
]

const finalSlides = Array.from({ length: 12 }, (_, index) => ({ src: `/assets/masters/slides/recording-final/slide-${String(index + 1).padStart(2, '0')}.jpg`, alt: `CMPN5006 Final Portfolio 第 ${index + 1} 页` }))
const proposalSlides = Array.from({ length: 7 }, (_, index) => ({ src: `/assets/masters/slides/recording-a1/slide-${String(index + 1).padStart(2, '0')}.jpg`, alt: `CMPN5006 Portfolio Proposal 第 ${index + 1} 页` }))

export function MasterCmpn5006({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(2)
  const current = submissions[active]
  const activeSlides = current.folder === 'recording-final' ? finalSlides : current.folder === 'recording-a1' ? proposalSlides : []
  return <section className="detail-page master-detail master-cmpn5006">
    <div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / 07</span><span>SECOND SEMESTER / FINAL WORK</span></div>
    <div className="detail-heading"><div><p className="kicker">CMPN5006 / RECORDING PORTFOLIO</p><h1>A Day<br /><em>Indoors</em></h1></div><p className="detail-lead">一个以日常室内环境为叙事线索的声音作品集。页面从课程要求、提案和第一次录音出发，最终回到 A Day Indoors 的完整视觉与声音交付。</p></div>
    <div className="detail-facts"><span><b>课程</b>CMPN5006 Recording Portfolio</span><span><b>时间</b>硕士课程 · 2025–2027</span><span><b>形式</b>小组作品集 / 个人过程记录</span><span><b>成果</b>Proposal、音轨、反思、Final Portfolio</span></div>
    <div className="workflow-intro"><p className="kicker">A COMPLETE RECORDING PORTFOLIO WORKFLOW</p><h2>从录音提案，到可以被聆听的作品集</h2><p>页面按真实 Canvas 提交整理：提案建立作品范围，第一条音轨验证录音方法，最终作品集将声音、视觉目录和过程反思组织为一份可交付的 portfolio。</p></div>
    <div className="workflow-grid cmpn5006-workflow">{workflow.map(([kicker, title, body]) => <article key={kicker} className="workflow-step"><p className="kicker">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
    <div className="detail-story"><article><p className="kicker">LISTENING POSITION / 01</p><h2>让室内空间成为声音叙事的一部分</h2><p>A Day Indoors 将录音从“捕捉声音”推进到“组织听觉经验”：麦克风、空间、人物、光线和日常动作共同构成作品的叙事材料。</p></article><article><p className="kicker">FINAL WORK / 02</p><h2>最终交付同时面向听众与评审</h2><p>最终 PDF 既是作品集的视觉入口，也提供最终音频与原始音频入口。页面额外加入可直接播放的本地 WAV 与反思视频，方便浏览者快速理解作品如何被制作。</p></article></div>
    <section className="recording-media" aria-labelledby="recording-media-title"><div className="section-intro"><p className="kicker">LISTEN</p><h2 id="recording-media-title">第一次作品音轨</h2><p className="section-description">这条 WAV 音轨来自 Canvas 的 A2 提交。视频反思不再放入作品集页面。</p></div><div className="recording-media-grid"><article><p className="kicker">FIRST TRACK</p><h3>第一次作品音轨</h3><audio controls preload="metadata" src="/assets/masters/recording-portfolio/a2-track.wav">你的浏览器不支持音频播放。</audio></article></div></section>
    <section className="arin-submissions cmpn5006-submissions" aria-labelledby="cmpn5006-submissions-title"><div className="section-intro"><p className="kicker">SUBMISSIONS / 03</p><h2 id="cmpn5006-submissions-title">课程作业与原始提交</h2><p className="section-description">点击每一项查看对应说明；Final Portfolio 的页面会直接展示在下方。</p></div><div className="arin-submission-layout"><nav className="arin-submission-nav" aria-label="CMPN5006 作业导航">{submissions.map((item, index) => <button key={item.number} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><span>{item.label}</span></button>)}</nav><article className="arin-submission-detail"><p className="kicker">{current.label}</p><h3>{current.title}</h3><p>{current.body}</p><a className="master-report-link is-static" href={current.file} target="_blank" rel="noreferrer">{current.fileLabel}</a></article></div>{activeSlides.length > 0 && <SlideCarousel slides={activeSlides} className="cmpn5006-slide-stack" />}</section>
    <div className="detail-end"><span>END OF MASTER PROJECT 07</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>
  </section>
}
