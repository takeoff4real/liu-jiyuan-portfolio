'use client';

import { useEffect, useRef, useState } from 'react';
import './xiaoxinsi-editorial.css';

const applications = [
  { file:'01-packaging.jpg', caption:'柔性包装 / 留白与角色识别', width:6000, height:4500 },
  { file:'05-food-box.jpg', caption:'食品包装 / 正反面的连续叙事', width:6000, height:4500 },
  { file:'10-brochure.jpg', caption:'折页 / 场景、角色与品牌故事', width:6000, height:4500 },
  { file:'13-banner.jpg', caption:'竖幅物料 / 完整场景中的小故事', width:6000, height:4500 },
  { file:'14-mug.jpg', caption:'生活物件 / 轻量的标志表达', width:6000, height:4500 },
  { file:'15-watch.jpg', caption:'小尺寸屏幕 / 保留核心识别', width:1920, height:1080 },
];

function Artwork({ file, caption, width=6000, height=4500 }: { file:string; caption:string; width?:number; height?:number }) {
  return <figure className="xx-artwork"><img src={`/assets/ip-xiaoxin/gallery/${file}`} alt={caption} width={width} height={height} loading="lazy"/><figcaption>{caption}</figcaption></figure>;
}

export default function XiaoxinsiCaseStudy({ close }: { close:()=>void }) {
  const shell=useRef<HTMLDivElement>(null);
  const [scrolled,setScrolled]=useState(false);
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const jump=(event:React.MouseEvent<HTMLAnchorElement>,id:string)=>{
    event.preventDefault();const target=shell.current?.querySelector<HTMLElement>(`#${id}`);if(!target)return;
    target.tabIndex=-1;target.focus({preventScroll:true});target.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});
  };
  useEffect(()=>{
    const root=shell.current;if(!root)return;const update=()=>setScrolled(root.scrollTop>280);root.addEventListener('scroll',update,{passive:true});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{root,threshold:.03});
    if(!reduced())root.querySelectorAll('.xx-section-copy,.xx-artwork,.xx-principles').forEach(node=>{node.classList.add('xx-reveal');observer.observe(node);});
    return()=>{root.removeEventListener('scroll',update);observer.disconnect();};
  },[]);
  return <div ref={shell} className="detail-shell xx-case" role="dialog" aria-modal="true" aria-label="小心思 IP 项目详情">
    <div className="xx-case-bar"><span>刘纪元 <span aria-hidden="true">×</span> <strong>小心思 IP</strong></span><button onClick={close}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>返回作品</button></div>
    <article>
      <header className="xx-hero">
        <span className="xx-eyebrow">小心思 / IP &amp; BRAND IDENTITY</span>
        <h1>让大人重新看见<br/>孩子的世界。</h1>
        <p>以儿童的想象力为起点，把亲近与陪伴转化为品牌视觉。</p>
        <nav className="xx-hero-links" aria-label="项目章节"><a href="#xx-concept" onClick={e=>jump(e,'xx-concept')}>品牌概念 <span aria-hidden="true">↓</span></a><a href="#xx-identity" onClick={e=>jump(e,'xx-identity')}>角色与标志 <span aria-hidden="true">↓</span></a><a href="#xx-applications" onClick={e=>jump(e,'xx-applications')}>跨媒介应用 <span aria-hidden="true">↓</span></a></nav>
        <figure className="xx-hero-art"><img src="/assets/ip-xiaoxin/covers/xiaoxinsi-main-2026-10-07.png" width={1448} height={1086} alt="小心思主视觉：浅蓝背景上的小王子与小狐狸角色展板" fetchPriority="high"/></figure>
      </header>

      <section className="xx-overview xx-pad" aria-label="项目概况">
        <dl className="xx-meta"><div><dt>项目年份</dt><dd>2023</dd></div><div><dt>项目形式</dt><dd>团队合作 · 毕业设计</dd></div><div><dt>我的贡献</dt><dd>外观设计 · Logo设计 · 排版</dd></div><div><dt>面向人群</dt><dd>儿童 · 亲子</dd></div></dl>
        <div className="xx-section-copy xx-summary"><h2>我的角色</h2><p>在团队毕业设计中，我负责外观设计、Logo设计和排版，将品牌概念转化为角色外观、标志与不同触点中的画面表达。</p></div>
      </section>

      <section className="xx-section xx-pad" id="xx-concept" aria-labelledby="xx-concept-title">
        <div className="xx-section-copy"><span className="xx-eyebrow">01 / 品牌概念</span><h2 id="xx-concept-title">把抽象议题，变成可感知的品牌。</h2><p>我从成年人容易忽略儿童想象力这一现实切入，把“让大人重新看见孩子的世界”作为品牌核心，面向儿童与亲子展开视觉表达。</p><p>“小心思”包含“小孩子的心思”和“亲密的小世界”两层含义，让名称同时承担记忆点、情绪和叙事入口。</p></div>
        <blockquote className="xx-name-idea"><span>小孩子的心思</span><span aria-hidden="true">×</span><span>亲密的小世界</span></blockquote>
      </section>

      <section className="xx-section xx-pad" id="xx-identity" aria-labelledby="xx-identity-title">
        <div className="xx-section-copy"><span className="xx-eyebrow">02 / 角色与标志</span><h2 id="xx-identity-title">让角色成为识别与叙事的入口。</h2><p>角色灵感来自《小王子》。皇冠、深灰卷发与绿色披肩构成小王子的外观特征；橙色轮廓与大尾巴则让小狐狸保持清晰识别。</p></div>
        <Artwork file="07-frame.jpg" caption="团队毕业设计 / 小王子与小狐狸的角色设定与表情"/>
        <div className="xx-logo-row"><figure className="xx-artwork xx-logo"><img src="/assets/ip-xiaoxin/mark.png" width={1366} height={768} alt="小心思品牌标志：带皇冠的蜗牛与狐狸组合" loading="lazy"/><figcaption>品牌标志 / 我的 Logo 设计</figcaption></figure><div className="xx-section-copy"><h3>从角色，延展到视觉语言。</h3><p>我负责 Logo 设计与画面排版，将角色特征转化为可用于不同尺寸的品牌识别。圆润轮廓、双角色情境和暖色锚点，贯穿标志与应用。</p></div></div>
        <ol className="xx-principles"><li><span>01</span><h3>圆润轮廓</h3><p>角色、爱心与标志共享柔软曲线，保持亲和感。</p></li><li><span>02</span><h3>双角色情境</h3><p>单个角色负责识别，双角色并置时讲述陪伴与回应。</p></li><li><span>03</span><h3>暖色锚点</h3><p>橙、珊瑚红与黄色建立记忆点，绿色和深灰平衡画面。</p></li></ol>
      </section>

      <section className="xx-section xx-pad" aria-labelledby="xx-scenes-title">
        <div className="xx-section-copy"><span className="xx-eyebrow">03 / 场景叙事</span><h2 id="xx-scenes-title">角色，也生活在一段段小故事里。</h2><p>夜晚、睡眠、气球与流星等情境扩展了角色的情绪，让品牌不只依靠静态标志表达。</p></div>
        <div className="xx-scenes"><Artwork file="11-macbook-air.jpg" caption="场景叙事 / 夜晚与想象"/><div className="xx-grid"><Artwork file="09-iphone.jpg" caption="移动端视觉应用 / 角色陪伴"/><Artwork file="06-mac-studio.jpg" caption="桌面端视觉应用 / 连续内容"/></div></div>
        <p className="xx-note">屏幕展示为品牌视觉应用，不作为独立的 UX 产品案例。</p>
      </section>

      <section className="xx-section xx-pad" id="xx-applications" aria-labelledby="xx-applications-title">
        <div className="xx-section-copy"><span className="xx-eyebrow">04 / 跨媒介应用</span><h2 id="xx-applications-title">让概念适配，而不是让画面照搬。</h2><p>我通过外观与排版调整，将核心概念延展到包装、折页、展示物料和数字画面，在不同尺寸中保留清晰、亲近的品牌表达。</p></div>
        <div className="xx-grid xx-application-grid">{applications.map(item=><Artwork key={item.file} {...item}/>)}</div>
      </section>

      <section className="xx-section xx-ending xx-pad" aria-labelledby="xx-ending-title">
        <div className="xx-section-copy"><span className="xx-eyebrow">05 / 项目回顾</span><h2 id="xx-ending-title">从问题定义，走向具体的视觉表达。</h2><p>这次团队毕业设计让我练习如何把抽象议题，落实为角色外观、品牌标志、画面层级与跨媒介应用。对我而言，系统化不是增加应用数量，而是让不同触点仍然回应同一个品牌核心。</p></div>
        <button className="xx-end" onClick={close}>返回项目选集</button>
      </section>
    </article>
    <button className={`xx-back-top${scrolled?' is-visible':''}`} type="button" aria-label="回到项目顶部" aria-hidden={!scrolled||undefined} inert={!scrolled?true:undefined} onClick={()=>shell.current?.scrollTo({top:0,behavior:reduced()?'instant':'smooth'})}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 14 5-5 5 5"/></svg></button>
  </div>;
}
