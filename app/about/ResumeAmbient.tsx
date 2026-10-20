'use client';

import { useEffect, useState } from 'react';

const palette = ['#91baff', '#f3a6bb', '#a8d9c2', '#c1a4ed', '#f1c18b'];
const initialGlows = [
  { left: -8, top: 8, color: palette[0], duration: 15, delay: -4 },
  { left: 82, top: 52, color: palette[1], duration: 19, delay: -10 },
  { left: -14, top: 72, color: palette[2], duration: 17, delay: -8 },
  { left: 87, top: -8, color: palette[3], duration: 21, delay: -1 },
];

export default function ResumeAmbient() {
  const [glows, setGlows] = useState(initialGlows);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    setGlows(current => current.map((glow, index) => ({ ...glow,
      left: index % 2 ? 77 + Math.random() * 16 : -20 + Math.random() * 18,
      top: -10 + Math.random() * 90,
      color: palette[Math.floor(Math.random() * palette.length)],
    })));
    const visibility = () => setPaused(document.hidden);
    visibility(); document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, []);

  return <div className={`resume-ambient${paused ? ' is-paused' : ''}`} aria-hidden="true">
    {glows.map((glow, index) => <i key={index} style={{ left: `${glow.left}%`, top: `${glow.top}%`, backgroundColor: glow.color, animationDuration: `${glow.duration}s`, animationDelay: `${glow.delay}s` }}
      onAnimationIteration={() => setGlows(current => current.map((item, itemIndex) => {
        if (itemIndex !== index) return item;
        const colors = palette.filter(color => color !== item.color);
        return { ...item, left: index % 2 ? 77 + Math.random() * 16 : -20 + Math.random() * 18,
          top: -10 + Math.random() * 90, color: colors[Math.floor(Math.random() * colors.length)] };
      }))} />)}
  </div>;
}
