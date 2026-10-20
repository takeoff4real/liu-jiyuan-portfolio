'use client';

import PortfolioImage from '../PortfolioImage';

import { useRef, useState } from 'react';

const photos = [
  { src: '/assets/about/portrait-corridor.jpg', alt: '站在灯光长廊中的个人照片', position: '48% 65%' },
  { src: '/assets/about/portrait-harbour.jpg', alt: '海港夜景前的个人照片', position: 'center' },
  { src: '/assets/about/portrait-city.png', alt: '城市灯光前的个人近照', position: 'center' },
  { src: '/assets/about/project-moment.jpg', alt: '围绕笔记本电脑进行项目展示的现场照片', position: 'center' },
  { src: '/assets/about/class-group.png', alt: '教室中的集体合照', position: '36% center', fit: 'cover' as const },
];

export default function AboutPhotoGallery() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const change = (direction: number) => setActive(index => (index + direction + photos.length) % photos.length);

  return <section className="about-photo-gallery resume-reveal" aria-label="个人照片相册" aria-roledescription="轮播" tabIndex={0}
    onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); change(event.key === 'ArrowRight' ? 1 : -1);
      }
    }}>
    <div className="about-photo-space" onTouchStart={event => {
      touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }} onTouchEnd={event => {
      if (!touchStart.current) return;
      const dx = event.changedTouches[0].clientX - touchStart.current.x;
      const dy = event.changedTouches[0].clientY - touchStart.current.y;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) change(dx < 0 ? 1 : -1);
      touchStart.current = null;
    }} onTouchCancel={() => { touchStart.current = null; }}>
      {photos.map((photo, index) => <div key={photo.src} className={`about-photo-slide${index === active ? ' is-active' : ''}`} aria-hidden={index !== active}>
        <PortfolioImage src={photo.src} alt={photo.alt} style={{ objectPosition: photo.position, objectFit: 'fit' in photo ? photo.fit : 'cover' }} draggable={false} decoding="async" />
      </div>)}
    </div>
    <div className="about-photo-controls">
      <button type="button" aria-label="上一张照片" onClick={() => change(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg></button>
      <div className="about-photo-dots">{photos.map((photo, index) => <button key={photo.src} type="button" aria-label={`查看第 ${index + 1} 张照片`} aria-current={index === active ? 'true' : undefined} onClick={() => setActive(index)}><span /></button>)}</div>
      <button type="button" aria-label="下一张照片" onClick={() => change(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg></button>
    </div>
    <span className="about-photo-status" aria-live="polite" aria-atomic="true">照片 {active + 1} / {photos.length}</span>
  </section>;
}
