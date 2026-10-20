'use client';

import { useEffect, useState } from 'react';

export default function PortfolioLoader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    let finished = false;
    let dismissTimer: ReturnType<typeof setTimeout>;
    const images = Array.from(document.querySelectorAll<HTMLImageElement>(
      '.showcase-main img, .showcase-prev img, .showcase-next img',
    ));
    const sources = [...new Set(images.map(image => image.currentSrc || image.src).filter(Boolean))];
    const tasks: Promise<unknown>[] = [document.fonts.ready, ...sources.map(src => new Promise<void>(resolve => {
      const image = new Image();
      image.onload = () => { image.decode().catch(() => {}).then(resolve); };
      image.onerror = () => resolve();
      image.src = src;
    }))];
    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      setLeaving(true);
      dismissTimer = setTimeout(() => { if (!cancelled) setVisible(false); }, 320);
    };
    // Slow or failed resources must never trap visitors behind the loading screen.
    const deadline = setTimeout(finish, 8000);
    Promise.all(tasks.map(task => task.finally(() => {
      completed += 1;
      if (!cancelled) setProgress(Math.round(completed / tasks.length * 100));
    }))).then(() => { clearTimeout(deadline); finish(); });
    return () => { cancelled = true; clearTimeout(deadline); clearTimeout(dismissTimer); };
  }, []);

  if (!visible) return null;
  return <div className={`portfolio-loader${leaving ? ' is-leaving' : ''}`} aria-hidden={leaving || undefined}>
    <div className="portfolio-loader-inner">
      <span className="portfolio-loader-name">LIU JIYUAN</span>
      <div className="portfolio-loader-track" role="progressbar" aria-label="首屏资源加载进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <span className="portfolio-loader-value" aria-hidden="true">{progress.toString().padStart(2, '0')}%</span>
    </div>
  </div>;
}
