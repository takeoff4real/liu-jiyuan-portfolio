'use client';

import { useEffect, useRef, useState } from 'react';
import CubePrototype from './CubePrototype';
import { WhisperSpatialPlan, WhisperDualJourney } from './WhisperSpatial';
import WhisperFigmaDetails from './WhisperFigmaDetails';
import WhisperAudience from './WhisperAudience';
import './whisper-case.css';
import './whisper-editorial.css';

const originalMaterials = [
  { image: '01-initial-concept.png', width:716, height:480, title: 'Catenary 初步概念', caption: '团队课程图稿 · 悬挂单元与触摸互动的早期构想。' },
  { image: '02-iteration-sketch.png', width:708, height:472, title: 'Catenary 方案推演', caption: '团队课程图稿 · 探索路径、休息与反馈的关系。' },
  { image: '07-storyboard.png', width:807, height:371, title: 'Cube 早期手绘故事板', caption: '团队课程图稿 · 原有引导式体验，供对照后续自主参与方向。' },
  { image: '13-cube-experience-flow.png', width:839, height:509, title: 'Cube 原体验流程', caption: '团队课程图稿 · 原提案的多阶段体验结构。' },
  { image: '08-technical-system.png', width:1573, height:1076, title: 'Catenary 技术构想', caption: '团队课程图稿 · 结构、感应与材料构想，非部署记录。' },
  { image: '10-cube-spatial-system.png', width:1479, height:694, title: 'Cube 空间与系统构想', caption: '团队课程图稿 · 空间分区与追踪、投影关系。' },
  { image: '09-cube-overview.png', width:709, height:476, title: 'Cube 原空间总览', caption: '团队课程图稿 · 原多主题空间，后续收敛为共享花园。' },
];

const cubeScenes = [
  { title: '进入', alt: '概念情境第一帧：儿童与照护者在入口观察低亮度的花园投影', action: '儿童与照护者在入口停留，先观察空间。', feedback: '低亮度花园与入口光带提示可以进入的区域。', intention: '我让第一步可被发现，同时保留先观察的选择。' },
  { title: '独立探索', alt: '概念情境第二帧：儿童移动留下浅绿色生长路径，照护者在外围坐着观察', action: '儿童自由移动，照护者在外围坐着观察。', feedback: '移动路径留下浅绿色痕迹，对应的花园区域逐步回应。', intention: '我把个人行动与反馈对应起来，让照护者保持视线与休息。' },
  { title: '共同参与', alt: '概念情境第三帧：照护者坐着加入，青色与浅绿色贡献共同连接投影花园', action: '照护者通过小幅坐姿动作加入，儿童继续探索。', feedback: '两种贡献保持可辨认，同时连接成共同变化的花园。', intention: '我让不同参与强度产生联系，双方都可随时停下或退出。' },
];

function CubeStoryFrame({ index, alt }: { index: number; alt: string }) {
  return <div className="whisper-story-frame"><img src="/assets/masters/mima/story/cube-family-storyboard-v1.webp" alt={alt} loading="lazy" width={2172} height={724} style={{ left: `${index * -100}%` }} /></div>;
}

export default function WhisperCaseStudy() {
  const [prototypeOpen, setPrototypeOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const jump = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = shellRef.current?.querySelector<HTMLElement>(`#${id}`);
    if (!target) return;
    if (target instanceof HTMLDetailsElement) { target.open = true; setPrototypeOpen(true); }
    const focusTarget = target.querySelector<HTMLElement>('summary') ?? target;
    if (!focusTarget.hasAttribute('tabindex') && focusTarget.tagName !== 'SUMMARY') focusTarget.tabIndex = -1;
    focusTarget.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  };
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const update = () => setScrolled(window.scrollY > 280);
    update();
    window.addEventListener('scroll', update, { passive: true });
    const nodes = shell.querySelectorAll<HTMLElement>('.whisper-section-heading,.whisper-scene-pair,.whisper-review-pair,.whisper-mechanisms,.whisper-storyboard-heading,.whisper-storyboard-grid,.whisper-iteration,.whisper-outcomes');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .03 });
    if (!reduced) nodes.forEach(node => { node.classList.add('whisper-reveal'); observer.observe(node); });
    return () => { window.removeEventListener('scroll', update); observer.disconnect(); };
  }, []);

  return (
    <div ref={shellRef} className="detail-shell mima-shell whisper-case whisper-editorial" aria-label="Whisper Grove Corner 项目详情">
      <div className="whisper-case-bar"><span>刘纪元 <span aria-hidden="true">×</span> <strong>Whisper Grove Corner</strong></span><a className="detail-back" href="/#project-mima"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>返回作品</a></div>
      <article className="whisper-article">
        <header className="whisper-hero">
          <div className="whisper-hero-grid" aria-hidden="true" />
          <div className="whisper-hero-copy"><span className="whisper-eyebrow">WHISPER GROVE CORNER · MAP MIMA</span><h1>让家庭以各自的节奏，<br />共同唤起一座花园。</h1><p>让孩子自主互动，让母亲坐下休息，也能随时看见孩子。</p><nav className="whisper-hero-links" aria-label="项目章节"><a href="#whisper-context" onClick={event => jump(event, 'whisper-context')}>场景与问题 <span aria-hidden="true">↓</span></a><a href="#whisper-decision" onClick={event => jump(event, 'whisper-decision')}>设计决策 <span aria-hidden="true">↓</span></a><a href="#whisper-prototype" onClick={event => jump(event, 'whisper-prototype')}>交互原型 <span aria-hidden="true">↓</span></a></nav></div>
          <figure className="whisper-hero-art whisper-space-hero"><CubeStoryFrame index={1} alt="共享花园概念主场景：孩子在投影花园内探索，照护者在外围座位观察" /><div className="whisper-hero-annotations"><span>THE SHARED GARDEN</span><p>孩子探索。<br />母亲休息。<br />彼此仍在视线里。</p><small>室内 Cube · 新版体验概念</small></div><figcaption>AI辅助概念情境 · 非实景照片</figcaption></figure>
        </header>

        <section className="whisper-overview whisper-pad" aria-labelledby="whisper-overview-title">
          <h2 className="whisper-sr-only" id="whisper-overview-title">项目摘要</h2>
          <dl className="whisper-meta"><div><dt>项目周期</dt><dd>2026.02 起 · 4个月</dd></div><div><dt>团队</dt><dd>4人课程项目</dd></div><div><dt>我的角色</dt><dd>交互设计师</dd></div><div><dt>工具</dt><dd>Figma · Photoshop</dd></div></dl>
          <p className="whisper-launch"><span>项目进展</span>Whisper Grove Corner 计划于2028年在 MAP mima 投入使用。</p>
          <div className="whisper-snapshot">
            <div><h3>项目回应</h3><p>团队以户外 Catenary 与室内 Cube 构成双场景提案。我在课程提交后，继续将 Cube 的交互主线收敛为“移动唤起花园”。</p></div>
            <div><h3>我的贡献</h3><p>我负责交互设计与视觉引导，梳理互动流程、动作反馈和意义提示，并通过低保真原型逐步调整体验。</p><a className="whisper-contribution-link" href="#whisper-decision" onClick={event => jump(event, 'whisper-decision')}>查看我对参与路径与反馈规则的调整 ↓</a></div>
            <div><h3>目前进展</h3><p>团队已完成课程提案；个人后续迭代包含屏幕原型与两轮修改，真实空间体验仍待验证。</p></div>
          </div>
        </section>

        <section className="whisper-section whisper-context whisper-pad" id="whisper-context" aria-labelledby="whisper-context-title">
          <span className="whisper-eyebrow">01 / CONTEXT</span>
          <div className="whisper-venue-intro whisper-partnership"><h3>悉尼大学 × Lake Macquarie City Council</h3><p>本项目是悉尼大学与 Lake Macquarie 市议会合作的课程项目。我们围绕 MAP mima 的真实场地，提出连接儿童互动、母亲休息与照看的体验方案。</p><p className="whisper-venue-source">合作背景来源：<a href="https://arts.lakemac.com.au/files/sharedassets/arts/map/map-eois/map-eoi-immersive-experience_web.pdf" target="_blank" rel="noreferrer">市议会 MAP mima 官方征集文件（2022，第4页）↗</a>。文件记载，Catenary 装置由场馆与悉尼大学 Design Lab 合作建设。</p></div>
          <div className="whisper-venue-intro"><h3>MAP mima 是什么？</h3><p>MAP mima（Multi-Arts Pavilion, mima）是一处融合艺术与科技的多艺术场馆，位于 Lake Macquarie 湖畔的 Speers Point Park。The Cube 承载 360° 沉浸式投影；户外 Catenary 则通过灯光连接湖畔步道。</p><p className="whisper-venue-source">场地资料：<a href="https://www.nsw.gov.au/visiting-and-exploring-nsw/locations-and-attractions/multi-arts-pavilion-mima" target="_blank" rel="noreferrer">NSW Government 场馆介绍 ↗</a><span aria-hidden="true"> · </span><a href="https://arts.lakemac.com.au/files/sharedassets/arts/v/1/map/map-eois/eoi-map-mima-summer-commission-2024-v1.pdf" target="_blank" rel="noreferrer">Lake Macquarie City Council 官方资料 ↗</a></p></div>
          <WhisperAudience />
          <div className="whisper-section-heading"><h2 id="whisper-context-title">孩子可以互动，<br />母亲可以休息，也看得见孩子。</h2><p>我们的目标不是让数字装置代替看护，而是在同一场地里，让孩子主动探索与母亲休息、照看能够同时发生。</p></div>
          <div className="whisper-scene-pair">
            <figure><img src="/assets/masters/mima/story/04-mother-child.png" width={527} height={449} alt="原提案中儿童探索与照护者停留的户外概念情境" loading="lazy" /><figcaption><strong>Catenary / 户外</strong><span>通过移动触发光线支持孩子探索，并将休息点与可观察的活动区域联系起来。</span><small>原课程概念图 · 非实景部署</small></figcaption></figure>
            <figure><img src="/assets/masters/mima/home-cover.png" width={1337} height={1176} alt="MAP mima 场地路径概念地图，连接户外 Catenary 与室内 Cube" loading="lazy" /><figcaption><strong>从户外路径到室内花园</strong><span>Catenary 承接户外探索，Cube 提供室内体验。两个场景回应同一个目标，但保留各自的互动方式。</span><small>场地路径概念图 · 非测绘图</small></figcaption></figure>
          </div>
        </section>

        <section className="whisper-section whisper-outdoor whisper-pad" aria-labelledby="whisper-outdoor-title">
          <span className="whisper-eyebrow">CATENARY / 团队课程方案</span>
          <div className="whisper-section-heading"><h2 id="whisper-outdoor-title">先发现光，再发现自己的影响。</h2><p>课程阶段的户外方案通过不同高度的悬挂灯光，让儿童从观察走向靠近与触发，再逐步发现多人共同参与时的变化。母亲可以在附近停留、观察，不必跟随每一次操作。</p></div>
          <figure className="whisper-outdoor-story"><div className="whisper-outdoor-strip" tabIndex={0} role="region" aria-label="连续六格户外故事板，可横向滚动"><img src="/assets/masters/mima/story/catenary-handdrawn-sequence.png" width={3300} height={600} alt="Figma 原手绘六格故事板：发现灯光、靠近触发、灯光回应、更多家庭加入、多人共同触发、形成整体灯光效果" loading="lazy" /></div><figcaption>团队课程图稿 · Living Canopy 户外概念故事板；与下方 Cube 迭代分开呈现。<span className="whisper-swipe-hint">左右滑动查看完整过程 →</span></figcaption></figure>
          <ol className="whisper-outdoor-steps"><li><span>01 / 发现</span><p>安静的光线提示这里可以探索。</p></li><li><span>02 / 触发</span><p>靠近或触摸后，看见局部回应。</p></li><li><span>03 / 连接</span><p>更多人加入，局部光线形成共同变化。</p></li></ol>
          <WhisperFigmaDetails />
        </section>

        <section className="whisper-section whisper-review whisper-pad" aria-labelledby="whisper-review-title">
          <span className="whisper-eyebrow">02 / REVIEW &amp; REFRAMING</span>
          <div className="whisper-section-heading"><h2 id="whisper-review-title">技术有依据，<br />参与路径还不够清楚。</h2><p>导师的两轮反馈让我意识到，技术可行并不意味着用户知道如何参与。因此，我把后续迭代的重点放在 Cube 的自主参与上。</p></div>
          <div className="whisper-review-pair">
            <article><span>A2 / 初步概念</span><h3>技术探索细致，概念与研究支撑仍可加强。</h3><p>评审肯定技术选择的具体程度与可行性思考，同时建议提高概念原创性、补充参考依据，并统一故事板及说明图片来源。</p><p>导师还要求考虑一位母亲同时照顾多名儿童时的群体行为、安全与可用性。</p></article>
            <article><span>A3 / 最终提案</span><h3>Catenary 较成熟，Cube 需要收敛。</h3><p>评审认可 Catenary 与任务的联系。Cube 的互动启动方式不明确，依赖教育人员引导，像素化身、花园与学习区之间也缺少连贯关系。</p><p>这使“用户如何开始，以及不同内容为什么在一起”成为后续设计重点。</p></article>
          </div>
          <p className="whisper-source">反馈摘要：Nina Edward · Canvas A2、A3 课程评审。</p>
        </section>

        <section className="whisper-section whisper-decision whisper-pad" id="whisper-decision" aria-labelledby="whisper-decision-title">
          <span className="whisper-eyebrow">03 / CUBE · 个人后续迭代</span>
          <h2 id="whisper-decision-title">用一条花园主线，<br />串起个人行动与共同参与。</h2>
          <p className="whisper-decision-intro">我将 Cube 的主线收敛为“移动唤起花园”：一个人可以探索，两个人的贡献产生连接，停止或退出后仍能短暂看见留下的变化。</p>
          <div className="whisper-spatial-heading whisper-section-heading"><h3>空间先分工，参与才不互相打扰。</h3><p>保留课程构想中“中央探索、外围休息”的关系，用同一座花园连接不同参与强度。</p></div>
          <WhisperSpatialPlan />
          <ol className="whisper-mechanisms"><li><span>01</span><h3>留下自己的痕迹</h3><p>移动经过的位置留下短暂路径，使行动与反馈可以对应。</p></li><li><span>02</span><h3>看见共同贡献</h3><p>两位各自行动后，路径之间形成浅色区域，表达共同产生的变化。</p></li><li><span>03</span><h3>可以停留与退出</h3><p>不要求靠近或同步完成动作。痕迹逐渐消退，其他人的体验继续。</p></li></ol>
          <p className="whisper-flow" aria-label="互动流程：进入、发现、行动、共同反馈、退出">进入<span aria-hidden="true">→</span>发现<span aria-hidden="true">→</span>行动<span aria-hidden="true">→</span>共同反馈<span aria-hidden="true">→</span>退出</p>
          <div className="whisper-storyboard" aria-labelledby="whisper-storyboard-title">
            <div className="whisper-storyboard-heading"><h3 id="whisper-storyboard-title">从进入空间，到共同留下变化。</h3><p>我用同一视角呈现三种参与状态，说明人的行动如何对应空间反馈。</p></div>
            <div className="whisper-storyboard-grid">{cubeScenes.map((scene, index) => <figure key={scene.title}>
              <CubeStoryFrame index={index} alt={scene.alt} />
              <figcaption><h4><span>0{index + 1}</span>{scene.title}</h4><dl><div><dt>人的行动</dt><dd>{scene.action}</dd></div><div><dt>空间反馈</dt><dd>{scene.feedback}</dd></div><div><dt>设计意图</dt><dd>{scene.intention}</dd></div></dl></figcaption>
            </figure>)}</div>
            <p className="whisper-source">个人后续迭代 · AI辅助概念情境，非实景照片或部署记录。</p>
          </div>
          <div className="whisper-journey-heading whisper-section-heading"><h3>同一段体验，两条不同的节奏。</h3><p>从到达到离开，将母亲、孩子的行动与环境回应并排梳理。</p></div>
          <WhisperDualJourney />
        </section>

        <section className="whisper-section whisper-iterations whisper-pad" aria-labelledby="whisper-iterations-title">
          <span className="whisper-eyebrow">04 / FEEDBACK TO ITERATION</span>
          <div className="whisper-section-heading"><h2 id="whisper-iterations-title">先让操作可控，<br />再让反馈有意义。</h2><p>通过屏幕试用，我发现了两个不同层面的问题：操作会误触，以及视觉关系需要额外讲解。我分别进行了两轮修改。</p></div>
          <article className="whisper-iteration">
            <div className="whisper-iteration-copy"><span>ITERATION 01 / 操作边界</span><h3>移向按钮时，参与者跟着跑走。</h3><p>我最初把鼠标经过网格直接映射为移动，试用时发现，操作按钮的动作也会改变参与者位置。</p><p><strong>我的修改：</strong>改为按住圆点拖动，松开即停，同时保留按钮切换与方向键控制。</p><p className="whisper-feedback">修改后，我再次试用，确认移动鼠标点击按钮不再带走参与者。</p></div>
            <figure className="whisper-comparison"><div className="whisper-before"><small>修改前</small><strong>鼠标经过网格</strong><span aria-hidden="true">↓</span><p>参与者持续跟随<br />移向按钮也改变位置</p></div><div className="whisper-after"><small>修改后</small><strong>按住圆点拖动</strong><span aria-hidden="true">↓</span><p>松开即停<br />按钮操作保持位置</p></div><figcaption>交互逻辑示意，非试用过程截图。</figcaption></figure>
          </article>
          <article className="whisper-iteration">
            <div className="whisper-iteration-copy"><span>ITERATION 02 / 意义表达</span><h3>看见了痕迹与连线，却需要解释它们的含义。</h3><p>第二轮试用中，我发现参与者在讲解后能够理解个人痕迹、彼此的影响与退出后的变化。需要改进的是视觉含义的表达。</p><p><strong>我的修改：</strong>加入状态提示，将路径说明为个人行动留下的贡献，并把两者之间的网格呈现为浅色共同区域。</p><p className="whisper-feedback">我让动作、视觉变化与意义在同一状态中出现，减少对口头讲解的依赖。</p></div>
            <figure className="whisper-comparison"><div className="whisper-before"><small>修改前</small><strong>彩色痕迹与点线</strong><span aria-hidden="true">↓</span><p>能看到变化<br />共同关系依赖讲解</p></div><div className="whisper-after"><small>修改后</small><strong>个人路径与共同区域</strong><span aria-hidden="true">↓</span><p>状态提示说明含义<br />浅色区域表现共同贡献</p></div><figcaption>反馈表达示意；当前版本可在下方原型中体验。</figcaption></figure>
          </article>
          <details className="whisper-disclosure whisper-prototype-disclosure" id="whisper-prototype" onToggle={event => setPrototypeOpen(event.currentTarget.open)}>
            <summary><span>展开交互原型</span><small>鼠标拖动、触屏与方向键 · 展开后开始</small></summary>
            {prototypeOpen && <CubePrototype />}
          </details>
        </section>

        <section className="whisper-section whisper-results whisper-pad" aria-labelledby="whisper-results-title">
          <span className="whisper-eyebrow">05 / OUTCOME &amp; NEXT QUESTIONS</span>
          <div className="whisper-section-heading"><h2 id="whisper-results-title">从“会发生变化”，<br />推进到“理解为什么变化”。</h2><p>我把导师指出的交互问题转化为一条核心流程，再通过屏幕试用逐步调整操作与反馈表达。</p></div>
          <div className="whisper-outcomes"><article><span>屏幕试用</span><h3>参与者已理解痕迹与共同区域的含义。</h3><p>修改提示和视觉反馈后，我再次邀请参与者体验，并收到已经理解含义的反馈。这为本轮调整提供了初步支持。</p></article><article><span>下一步</span><h3>从屏幕模型走向真实场地。</h3><p>我将进一步检查真实空间中的入口发现、身体追踪、坐姿参与，以及一位照护者带多名儿童时的视线、等待与退出。</p></article></div>
          <p className="whisper-learning">我的收获：技术探索提供实现方向，试用反馈则揭示了参与者理解体验的实际障碍。每一轮修改都需要明确回应一个可观察的问题。</p>
        </section>

        <section className="whisper-archive whisper-pad" aria-label="补充图稿">
          <details className="whisper-disclosure whisper-archive-disclosure" onToggle={event => setArchiveOpen(event.currentTarget.open)}>
            <summary><span>查看原课程图稿与技术构想</span><small>Catenary × Cube · {originalMaterials.length}张补充图稿</small></summary>
            {archiveOpen && <div className="whisper-archive-grid">{originalMaterials.map(item => <figure key={item.image}><img src={`/assets/masters/mima/story/${item.image}`} width={item.width} height={item.height} style={{aspectRatio:`${item.width} / ${item.height}`}} alt={item.title} loading="lazy" /><figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption></figure>)}</div>}
          </details>
          <a className="whisper-end" href="/#project-mima">返回项目选集</a>
        </section>
      </article>
      <button className={`whisper-back-top${scrolled ? ' is-visible' : ''}`} type="button" aria-label="回到项目顶部" aria-hidden={!scrolled || undefined} inert={!scrolled ? true : undefined} onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 14 5-5 5 5" /></svg></button>
    </div>
  );
}
