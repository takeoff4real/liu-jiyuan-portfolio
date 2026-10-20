'use client';

import { useEffect, useRef, useState } from 'react';
import './name-doodle.css';

const signatures = [
  { text: '刘纪元', lang: 'zh-Hans', font: 'Doodle Han', size: 148, color: '#a5f500', image: '/assets/signatures/simplified-original.png' },
  { text: 'Liu Jiyuan', lang: 'en', font: 'Doodle Latin', size: 139, color: '#ff00b8' },
  { text: '劉紀元', lang: 'zh-Hant', font: 'Doodle Japanese', size: 148, color: '#00d9f5', image: '/assets/signatures/traditional-original.png' },
  { text: 'リウ・ジーユエン', lang: 'ja', font: 'Doodle Japanese', size: 66, color: '#b43dff' },
  { text: '류지위안', lang: 'ko', font: 'Doodle Korean', size: 150, color: '#ff6820' },
  { text: 'Лю Цзиюань', lang: 'ru', font: 'Doodle Latin', size: 111, color: '#ec00ff' },
  { text: 'ليو جي يوان', lang: 'ar', font: 'Doodle Arabic', size: 116, color: '#00ef9a' },
  { text: 'लियू जीयुआन', lang: 'hi', font: 'Doodle Hindi', size: 96, color: '#d6ed00' },
  { text: 'หลิว จี้หยวน', lang: 'th', font: 'Doodle Thai', size: 108, color: '#00baff' },
  { text: 'Лю Цзіюань', lang: 'uk', font: 'Doodle Latin', size: 111, color: '#ff286c' },
];

export default function NameDoodle() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    Promise.allSettled(signatures.map(item => {
      if (item.image) {
        const image = new Image(); image.src = item.image;
        return image.decode();
      }
      return document.fonts.load(`400 30px "${item.font}"`, item.text);
    })).then(() => { if (mounted) setReady(true); });
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReduced(media.matches);
    const visibility = () => setTabVisible(!document.hidden);
    motion(); visibility();
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    if (ref.current) observer.observe(ref.current);
    return () => { mounted = false; observer.disconnect(); media.removeEventListener('change', motion); document.removeEventListener('visibilitychange', visibility); };
  }, []);

  useEffect(() => {
    if (!ready || !visible || paused || reduced || !tabVisible) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % signatures.length), 1020);
    return () => window.clearInterval(timer);
  }, [ready, visible, paused, reduced, tabVisible]);

  return <div ref={ref} className="name-doodle" data-active-language={signatures[active].lang} data-ready={ready}>
    <div role="img" aria-label="刘纪元：以多种文字音译、荧光记号笔手写风格依次显示的签名">
      <svg viewBox="0 0 640 260" fill="none" aria-hidden="true" focusable="false">
        <defs>{signatures.filter(item => 'image' in item).map(item => <filter key={item.lang} id={`signature-ink-${item.lang}`} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -.2126 -.7152 -.0722 0 1" result="ink-alpha" />
          <feComponentTransfer in="ink-alpha" result="ink-mask"><feFuncA type="linear" slope={item.lang === 'zh-Hans' ? 4 : 1} /></feComponentTransfer>
          <feComposite in="ink-mask" in2="SourceAlpha" operator="in" result="bounded-ink" />
          <feFlood floodColor={item.color} result="ink-color" />
          <feComposite in="ink-color" in2="bounded-ink" operator="in" />
        </filter>)}</defs>
        {signatures.map((item, index) => <g key={item.lang} className={`name-signature${index === active ? ' is-current' : ''}`} data-language={item.lang} style={{ color: item.color }}>
          {'image' in item ? <image href={item.image} x="80" y="30" width="480" height="152" preserveAspectRatio="xMidYMid meet" filter={`url(#signature-ink-${item.lang})`} /> : <text x="320" y="153" textAnchor="middle" transform="rotate(-5 320 133)" lang={item.lang} direction={item.lang === 'ar' ? 'rtl' : undefined}
            fontSize={item.size} fontFamily={item.font} fill={item.color} stroke={item.color} strokeWidth={item.lang === 'ja' ? 1.7 : 1.1} paintOrder="stroke" strokeLinecap="round" strokeLinejoin="round">{item.text}</text>}
        </g>)}
      </svg>
    </div>
    {!reduced && <button type="button" className="name-doodle-toggle" aria-label={paused ? '继续名字切换' : '暂停名字切换'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      <svg viewBox="0 0 20 20" aria-hidden="true">{paused ? <path d="m7 5 8 5-8 5Z" /> : <path d="M7 5v10M13 5v10" />}</svg>
    </button>}
  </div>;
}
