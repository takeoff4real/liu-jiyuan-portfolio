'use client';

import { useEffect, useRef, useState } from 'react';
import './book-editorial.css';

type BookStory = {
  theme:'ultra'|'orwell'; label:string; deck:string;
  meta:{label:string;value:string}[];
  feature:{title:string};
  principles:{number:string;title:string;body:string}[];
  strip:{image:string;caption:string}[];
  systemTitle:string;systemBody:string[];ending:string;reflection:string;
};
const dimensions:Record<string,[number,number]>={
  '/assets/1984/cover-spread.png':[1053,745],
  '/assets/1984/mockup-book-clean.png':[620,500],
  '/assets/1984/book-interior.png':[1053,745],
  '/assets/1984/mockup-box.png':[1053,745],
  '/assets/1984/mockup-jacket.png':[1053,745],
  '/assets/1984/process/page-14.jpg':[1754,1241],
};

export default function BookEditorialCaseStudy({story,title,returnHref}:{story:BookStory;title:string;returnHref:string}){
  const rootRef=useRef<HTMLDivElement>(null),trackRef=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0),[scrolled,setScrolled]=useState(false);
  const isUltra=story.theme==='ultra';
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const jump=(event:React.MouseEvent<HTMLAnchorElement>,id:string)=>{event.preventDefault();const el=rootRef.current?.querySelector<HTMLElement>(`#${id}`);if(el){el.tabIndex=-1;el.focus({preventScroll:true});el.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});}};
  const turn=(direction:number)=>{
    const track=trackRef.current;if(!track)return;const index=Math.max(0,Math.min(story.strip.length-1,active+direction));const items=track.children;
    track.scrollTo({left:(items[index] as HTMLElement).offsetLeft-(items[0] as HTMLElement).offsetLeft,behavior:reduced()?'instant':'smooth'});
  };
  const updatePage=()=>{const track=trackRef.current;if(!track)return;const items=Array.from(track.children) as HTMLElement[];const first=items[0];let nearest=0;items.forEach((el,i)=>{if(Math.abs(el.offsetLeft-first.offsetLeft-track.scrollLeft)<Math.abs(items[nearest].offsetLeft-first.offsetLeft-track.scrollLeft))nearest=i;});setActive(nearest);};
  useEffect(()=>{
    const root=rootRef.current;if(!root)return;const onScroll=()=>setScrolled(window.scrollY>280);onScroll();window.addEventListener('scroll',onScroll,{passive:true});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.03});
    if(!reduced())root.querySelectorAll('.be-copy,.be-principles,.be-gallery figure').forEach(el=>{el.classList.add('be-reveal');observer.observe(el);});
    return()=>{window.removeEventListener('scroll',onScroll);observer.disconnect();};
  },[]);
  const hero=isUltra?'/assets/binding-design/stack-cutout-v1.png':'/assets/1984/home-cover.png';
  const prefix=isUltra?'book-ultra':'book-orwell';
  return <div ref={rootRef} className={`detail-shell be-case be-${story.theme}`} aria-label={`${title} 项目详情`}>
    <div className="be-bar"><span>刘纪元 <span aria-hidden="true">×</span> <strong>{title}</strong></span><a href={returnHref}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>返回作品</a></div>
    <article>
      <header className="be-hero"><span className="be-eyebrow">{story.label}</span><h1>{isUltra?<>以昭和复古，<br/>让角色逐一登场。</>:<>将监控的压迫感，<br/>转化为书籍叙事。</>}</h1><p>{story.deck}</p><nav className="be-links" aria-label="项目章节"><a href={`#${prefix}-idea`} onClick={e=>jump(e,`${prefix}-idea`)}>设计思路 <span aria-hidden="true">↓</span></a><a href={`#${prefix}-work`} onClick={e=>jump(e,`${prefix}-work`)}>作品展示 <span aria-hidden="true">↓</span></a><a href={`#${prefix}-system`} onClick={e=>jump(e,`${prefix}-system`)}>书籍系统 <span aria-hidden="true">↓</span></a></nav><figure className="be-hero-art"><img src={hero} width={isUltra?1536:1338} height={isUltra?1024:1176} alt={isUltra?'ULTRAMAN 红白封面的书堆展示，不展示内页':'1984 书籍封面与实体场景展示'} fetchPriority="high"/></figure></header>
      <section className="be-overview be-pad" aria-label="项目概况"><dl className="be-meta">{story.meta.map(item=><div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>
      <section className="be-section be-pad" id={`${prefix}-idea`} aria-labelledby={`${prefix}-idea-title`}><div className="be-copy"><span className="be-eyebrow">01 / 设计思路</span><h2 id={`${prefix}-idea-title`}>{story.feature.title}</h2><p>{isUltra?'因为喜欢奥特曼，我选择独立完成这套角色图鉴。以昭和复古风统一方向，再用角色影像、标题字形与图文层级组织连续跨页。':'因为喜欢《1984》，我选择以“监控的压迫感”为主线：摄像头、光束与奔跑人物构成封面叙事，再将这一主题延伸到内页和包装。'}</p></div><ol className="be-principles">{story.principles.map(item=><li key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></li>)}</ol></section>
      <section className="be-section be-pad" id={`${prefix}-work`} aria-labelledby={`${prefix}-work-title`}><div className="be-copy"><span className="be-eyebrow">02 / 作品展示</span><h2 id={`${prefix}-work-title`}>{isUltra?'按原稿顺序，连续阅读角色图鉴。':'从封面到包装，延续同一条视线。'}</h2><p>{isUltra?'完整保留 16 张画板。横向滑动、使用下方按钮，或聚焦画板后按左右方向键浏览。':'完整展示封面、书脊、封底、正文与包装，保留各张作品的原始比例。'}</p></div>
        {isUltra&&<div className="be-page-controls"><span role="status" aria-live="polite" aria-atomic="true">{String(active+1).padStart(2,'0')} / 16</span><div><button onClick={()=>turn(-1)} disabled={active===0} aria-label="上一张奥特曼画板"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button><button onClick={()=>turn(1)} disabled={active===15} aria-label="下一张奥特曼画板"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button></div></div>}
        <div ref={trackRef} className={isUltra?'be-track':'be-gallery'} onScroll={isUltra?updatePage:undefined} tabIndex={isUltra?0:undefined} role={isUltra?'region':undefined} aria-label={isUltra?'奥特曼完整跨页，支持横向滚动与方向键浏览':undefined} onKeyDown={e=>{if(isUltra&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();turn(e.key==='ArrowRight'?1:-1);}}}>
          {story.strip.map((item,index)=>{const [width,height]=isUltra?[2000,1453]:dimensions[item.image];return <figure key={item.image}><img src={item.image} width={width} height={height} alt={isUltra?`ULTRAMAN 原稿画板 ${index+1}，共16张`:item.caption} loading="lazy"/><figcaption>{item.caption}</figcaption></figure>;})}
        </div>
      </section>
      <section className="be-section be-pad" id={`${prefix}-system`} aria-labelledby={`${prefix}-system-title`}><div className="be-copy"><span className="be-eyebrow">03 / 书籍系统</span><h2 id={`${prefix}-system-title`}>{story.systemTitle.replace('\n','')}</h2>{story.systemBody.map(text=><p key={text}>{text}</p>)}</div></section>
      <section className="be-section be-ending be-pad" aria-labelledby={`${prefix}-ending-title`}><div className="be-copy"><span className="be-eyebrow">04 / 项目回顾</span><h2 id={`${prefix}-ending-title`}>{story.ending.replace('\n','')}</h2><p>{story.reflection}</p></div><a className="be-end" href={returnHref}>返回项目选集</a></section>
    </article>
    <button className={`be-back-top${scrolled?' is-visible':''}`} type="button" aria-label="回到项目顶部" aria-hidden={!scrolled||undefined} inert={!scrolled?true:undefined} onClick={()=>window.scrollTo({top:0,behavior:reduced()?'instant':'smooth'})}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 14 5-5 5 5"/></svg></button>
  </div>;
}
