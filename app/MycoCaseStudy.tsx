'use client';

import PortfolioImage from './PortfolioImage';

import { useState } from 'react';
import './myco-case.css';

const activities = [
  { number: '01', title: '掷骰开启参与', body: '在现场游戏区选择角色棋子，掷骰移动，查看落点对应的奖品，再向工作人员兑奖。', touchpoint: '棋盘 / 棋子 / 骰子 / 兑奖券' },
  { number: '02', title: '沿海港探索集章', body: '领取探索护照，查看地图，在不同点位完成任务、收集印章，最后返回兑奖处核对。', touchpoint: '探索护照 / 场地地图 / 纪念印章' },
  { number: '03', title: '留下自己的回忆', body: '用活动照片与留言记录到访。照片墙展示需要单独取得同意，也保留仅作个人留念的选择。', touchpoint: '照片留念卡 / 留言 / 展示同意选项' },
  { number: '04', title: '给再次到访一个理由', body: '用好友邀请和每周限定纪念品延续活动；具体日期、数量和奖励规则仍随项目推进细化。', touchpoint: '好友邀请卡 / 限定款展示 / 核销记录' },
];

const journey = [
  { title: '发现', action: '看到社交媒体或活动宣传', support: '活动海报与快闪视觉', purpose: '知道这里有什么值得来' },
  { title: '了解', action: '通过网页短暂体验活动', support: '海港探索体验网页', purpose: '先理解玩法与活动内容' },
  { title: '参与', action: '到场玩棋盘、探索、集章', support: '实体物料与工作人员', purpose: '清楚从哪里开始、下一步做什么' },
  { title: '带走', action: '兑换纪念品或留下回忆', support: '兑奖券与留念卡', purpose: '让参与留下可见的记忆' },
  { title: '再访', action: '关注限定活动或邀请朋友', support: '限定款与好友邀请', purpose: '为下一次到访提供线索' },
];

export default function MycoCaseStudy() {
  const [demoOpen, setDemoOpen] = useState(false);
  return <div className="detail-shell myco-case" aria-label="MyCo 项目详情">
    <a className="detail-back" href="/#project-myco">← 返回作品</a>
    <article>
      <header className="myco-hero myco-pad">
        <div className="myco-hero-copy"><span className="myco-kicker">MYCO / BLUEGREEN</span><p className="myco-status">进行中的团队项目</p><h1>一次海港冒险，<br />一场快闪相遇。</h1><p>我们以线下快闪为主体，将游戏、场地探索与纪念品串成参与体验；再用一个简短网页，让访客先认识这里的活动。</p><a href="#myco-web" onClick={e => { e.preventDefault(); document.getElementById('myco-web')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>看看体验如何展开 <span aria-hidden="true">↘</span></a></div>
        <figure><PortfolioImage src="/assets/myco/board.webp" alt="MyCo 海港探索棋盘概念，鸭嘴兽角色与红色快闪集装箱连接不同活动站点" fetchPriority="high" /><figcaption>海港探索视觉与棋盘概念 · 非现场活动照片</figcaption></figure>
      </header>

      <section className="myco-summary myco-pad" aria-label="项目概况"><dl><div><dt>场地</dt><dd>Sub Base Platypus · 悉尼</dd></div><div><dt>项目方向</dt><dd>线下快闪 × 活动体验</dd></div><div><dt>数字触点</dt><dd>活动介绍与简短试玩</dd></div><div><dt>当前阶段</dt><dd>持续设计中 · 已开展用户测试</dd></div></dl></section>

      <section className="myco-section myco-pad myco-context" aria-labelledby="myco-context-title">
        <span className="myco-kicker">01 / WHY A POP-UP</span><div className="myco-heading"><h2 id="myco-context-title">让“来看看”，<br />变成“我也想参与”。</h2><div><p>我们围绕 Sub Base Platypus 的到访与参与展开设计，主要面向北悉尼及周边年轻的中文使用者及其家庭，也考虑来悉尼旅行的中文访客。</p><p>早期方向涉及材料交换、菌丝体工作坊和数字平台。随着项目推进，我们把重心转向更具体的活动：访客为什么来、到场后做什么，以及什么值得带走与分享。</p></div></div>
        <blockquote>如何通过快闪活动与游戏化探索，让中文访客愿意来到 Sub Base Platypus，并从短暂停留走向主动参与？</blockquote>
        <div className="myco-research"><span>研究中的线索</span><p>团队记录的社交平台反馈提到：希望提前看见能做出的东西、把成果作为纪念带走，也对材料安全和再次参与的理由提出疑问。这些探索性反馈帮助我们调整方向，不代表所有居民或游客的意见。</p></div>
      </section>

      <section className="myco-section myco-pad myco-journey" aria-labelledby="myco-journey-title">
        <span className="myco-kicker">02 / CONNECTING THE TOUCHPOINTS</span><div className="myco-heading"><h2 id="myco-journey-title">网页负责解释，<br />参与发生在线下。</h2><p>我们将宣传、了解、到场参与与离开后的联系放在同一条旅程里。网页是其中的介绍触点，不替代现场活动，也不承担真实兑奖。</p></div>
        <ol className="myco-journey-list">{journey.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.action}</p><small>{step.support}</small><p className="myco-purpose">{step.purpose}</p></li>)}</ol><p className="myco-note">预期参与路径 · 设计方案，不代表实际客流或回访结果。</p>
      </section>

      <section className="myco-section myco-pad myco-activities" aria-labelledby="myco-activities-title">
        <span className="myco-kicker">03 / THE ON-SITE EXPERIENCE</span><div className="myco-heading"><h2 id="myco-activities-title">把活动变成<br />看得懂的行动。</h2><p>现场掷骰游戏提供轻松的参与入口；景区探索集章让访客走向不同点位。两者相互补充，但各有自己的步骤与实体物料。</p></div>
        <div className="myco-activity-grid">{activities.map(activity => <article key={activity.number}><span>{activity.number}</span><h3>{activity.title}</h3><p>{activity.body}</p><small>{activity.touchpoint}</small></article>)}</div>
        <div className="myco-image-pair"><figure><PortfolioImage src="/assets/myco/packaging.webp" alt="MyCo 包装概念，以鸭嘴兽、红色集装箱和海港等高线统一视觉语言" loading="lazy" /><figcaption>包装与视觉延展 · 概念效果图</figcaption></figure><figure><PortfolioImage src="/assets/myco/stickers.webp" alt="MyCo 鸭嘴兽角色与活动图形贴纸设计" loading="lazy" /><figcaption>角色与活动图形 · 作为跨触点识别线索</figcaption></figure></div>
      </section>

      <section className="myco-section myco-pad myco-web" id="myco-web" aria-labelledby="myco-web-title">
        <span className="myco-kicker">04 / A PLAYABLE INTRODUCTION</span><div className="myco-heading"><h2 id="myco-web-title">先玩一小段，<br />再认识这场快闪。</h2><div><p>比起一次读完全部活动说明，我们用鸭嘴兽角色、掷骰移动和站点反馈，把介绍拆成可以逐步发现的小片段。</p><p>它的用途是帮助用户简要理解快闪店的流程和活动，而不是复刻现场规则。网页中的收藏、奖励与回忆属于演示体验，不等于线下权益。</p></div></div>
        <figure className="myco-web-preview"><PortfolioImage src="/assets/myco/web-preview.webp" alt="MyCo 网页介绍体验，左侧为海港棋盘，右侧为掷骰提示和故事收藏" loading="lazy" /><figcaption>可操作的网页介绍体验 · 与现场实体活动分开呈现</figcaption></figure>
        <div className="myco-web-decisions"><div><h3>角色带路</h3><p>用同一鸭嘴兽角色连接棋盘、站点与提示。</p></div><div><h3>逐步发现</h3><p>通过移动和打开站点，分次接触活动信息。</p></div><div><h3>反馈可见</h3><p>用即时反馈与旅行册记录本次网页探索。</p></div></div>
        <details className="myco-demo" onToggle={event => setDemoOpen(event.currentTarget.open)}><summary>体验海港探索网页 <span aria-hidden="true">↗</span></summary>{demoOpen && <div className="myco-demo-body"><p>这是活动介绍演示。游玩记录仅保存在当前浏览器；不进行真实预约、交易或兑奖。</p><a href="/assets/myco/harbour-introduction.html" target="_blank" rel="noreferrer">在新标签页打开 ↗</a><iframe title="MyCo 海港探索活动介绍体验" src="/assets/myco/harbour-introduction.html" sandbox="allow-scripts allow-same-origin" /></div>}</details>
      </section>

      <section className="myco-section myco-pad myco-progress" aria-labelledby="myco-progress-title"><span className="myco-kicker">05 / WORK IN PROGRESS</span><div className="myco-heading"><h2 id="myco-progress-title">已有参与体验，<br />也保留真实的进度。</h2><div><p>我们已开展用户测试，项目仍在继续。当前方案把活动流程、棋盘与配套物料，以及可试玩的网页介绍连接起来。</p><p>我们尚未将这些设计表述为已经运营的快闪店，也不把网页试玩等同于实体场景验证。活动奖励、日期、数量与执行规则仍随项目推进完善。</p></div></div>
        <p className="myco-source">内容依据：团队 FigJam 方案、现有设计素材与网页体验。图像为项目概念视觉，非已落地现场照片。</p><a className="myco-return" href="/#project-myco">返回作品选集 <span aria-hidden="true">↗</span></a>
      </section>
    </article>
  </div>;
}
