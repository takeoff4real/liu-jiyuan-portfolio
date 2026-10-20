'use client';

import { useEffect, useState } from 'react';
import './portfolio-navigation.css';

type Destination = 'home' | 'work' | 'about' | 'resume';
function NavIcon({ kind }: { kind: Destination }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'home' && <path d="M3 10a3 3 0 0 1 1.15-2.36l6-4.7a3 3 0 0 1 3.7 0l6 4.7A3 3 0 0 1 21 10v8a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-4a3 3 0 0 0-6 0v4a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3Z" />}
    {kind === 'work' && <><path d="m14 5 5 5M4 21l3.5-.6a3 3 0 0 0 1.6-.8L20 8.7a3.3 3.3 0 0 0-4.7-4.7L4.4 14.9a3 3 0 0 0-.8 1.6L3 20a.9.9 0 0 0 1 1Z" /><path d="m5 3 .6 1.9L7.5 5.5l-1.9.6L5 8l-.6-1.9-1.9-.6 1.9-.6Z M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" fill="currentColor" stroke="none" /></>}
    {kind === 'about' && <><circle cx="12" cy="6.5" r="3.5" /><path d="M5 19c0-1.2.6-2.1 1.7-2.5a15 15 0 0 1 10.6 0A2.6 2.6 0 0 1 19 19v2H5Z" /></>}
    {kind === 'resume' && <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h6M9 9h1" /></>}
  </svg>;
}
export default function PortfolioNavigation({ detailOpen, page = 'home' }: { detailOpen: boolean; page?: 'home' | 'about' }) {
  const destinations: { id: Destination; label: string; href: string }[] = [
    { id: 'home', label: '首页', href: page === 'home' ? '#top' : '/#top' },
    { id: 'work', label: '作品', href: page === 'home' ? '#work' : '/#work' },
    { id: 'about', label: '关于', href: page === 'about' ? '#about' : '/about' },
    { id: 'resume', label: '简历', href: page === 'about' ? '#resume' : '/about#resume' },
  ];
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<Destination>('home');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setCompact(previous => previous ? y > 100 : y > 160);
      if (page === 'about') {
        const resume = document.getElementById('resume');
        setActive(resume && resume.getBoundingClientRect().top < innerHeight * .45 ? 'resume' : 'about');
        return;
      }
      const about = document.getElementById('about');
      const work = document.getElementById('work');
      setActive(about && about.getBoundingClientRect().top < innerHeight * .5 ? 'about' : work && work.getBoundingClientRect().top < innerHeight * .55 ? 'work' : 'home');
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, [page]);
  useEffect(() => { if (compact || detailOpen) setMenuOpen(false); }, [compact, detailOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.portfolio-menu-toggle')?.focus(); } };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menuOpen]);
  const go = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    if (!href.startsWith('#')) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const topHidden = compact || detailOpen;
  const dockHidden = !compact || detailOpen;
  return <>
    <header className={`portfolio-top-nav${topHidden ? ' is-away' : ''}`} aria-hidden={topHidden || undefined} inert={topHidden ? true : undefined}>
      <nav className="portfolio-top-inner" aria-label="顶部导航">
        <a className="portfolio-nav-brand" href={destinations[0].href} onClick={event => go(event, destinations[0].href)}><span className="portfolio-personal-mark" aria-hidden="true" /><span>刘纪元</span><span className="portfolio-nav-divider" aria-hidden="true" /><span className="portfolio-nav-specialty">视觉与交互设计</span></a>
        <div className="portfolio-top-links"><a href={destinations[1].href} onClick={event => go(event, destinations[1].href)}>作品</a><a href={destinations[2].href} onClick={event => go(event, destinations[2].href)}>关于</a><a href="#contact" onClick={event => go(event, '#contact')}>联系</a><a href={destinations[3].href} onClick={event => go(event, destinations[3].href)}>简历</a></div>
        <button className={`portfolio-menu-toggle${menuOpen ? ' is-open' : ''}`} aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'} aria-expanded={menuOpen} aria-controls="portfolio-mobile-menu" onClick={() => setMenuOpen(value => !value)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
      </nav>
      {menuOpen && <nav className="portfolio-mobile-menu" id="portfolio-mobile-menu" aria-label="手机导航">{destinations.map(item => <a key={item.id} href={item.href} onClick={event => go(event, item.href)}><NavIcon kind={item.id} />{item.label}</a>)}<a href="#contact" onClick={event => go(event, '#contact')}>联系我 ↗</a></nav>}
    </header>
    <nav className={`portfolio-dock${dockHidden ? '' : ' is-visible'}`} aria-label="悬浮导航" aria-hidden={dockHidden || undefined} inert={dockHidden ? true : undefined}>
      <div className="portfolio-dock-inner">{destinations.map(item => <a key={item.id} className="portfolio-dock-link" href={item.href} aria-label={item.label} aria-current={item.id === active ? 'location' : undefined} onClick={event => go(event, item.href)}><span className="portfolio-dock-icon"><NavIcon kind={item.id} /></span><span className="portfolio-dock-label" aria-hidden="true">{item.label}</span></a>)}</div>
    </nav>
    <button type="button" className={`portfolio-back-top${compact && !detailOpen ? ' is-visible' : ''}`} aria-label="回到顶部" title="回到顶部" aria-hidden={!compact || detailOpen || undefined} inert={!compact || detailOpen ? true : undefined} onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 14 5-5 5 5" /></svg>
    </button>
  </>;
}
