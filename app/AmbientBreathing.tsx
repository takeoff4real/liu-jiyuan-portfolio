'use client';

import { useEffect, useRef, useState } from 'react';

const palette = ['#91baff', '#f3a6bb', '#a8d9c2', '#c1a4ed', '#f1c18b'];

export default function AmbientBreathing({ variant, randomized = false }: { variant: 'work' | 'about' | 'contact'; randomized?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [colors, setColors] = useState([palette[0], palette[1]]);
  const [paused, setPaused] = useState(false);
  const [glows, setGlows] = useState([{ left: -8, top: 15, color: palette[0], duration: 14, delay: -3 }, { left: 82, top: 65, color: palette[1], duration: 18, delay: -8 }]);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    observer.observe(node.parentElement ?? node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!randomized) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const distribute = () => {
      const count = Math.min(18, Math.max(2, Math.ceil(parent.getBoundingClientRect().height / 650) * 2));
      const bands = count / 2;
      setGlows(Array.from({ length: count }, (_, index) => ({
        left: index % 2 ? 72 + Math.random() * 20 : -12 + Math.random() * 24,
        top: (Math.floor(index / 2) + .12 + Math.random() * .65) / bands * 100,
        color: palette[Math.floor(Math.random() * palette.length)],
        duration: 12 + Math.random() * 8,
        delay: -Math.random() * 12,
      })));
    };
    const visibility = () => setPaused(document.hidden);
    const observer = new ResizeObserver(distribute);
    observer.observe(parent); distribute(); visibility();
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, [randomized]);
  const changeColor = (index: number) => setColors(current => current.map((color, i) => {
    if (i !== index) return color;
    const options = palette.filter(option => option !== color);
    return options[Math.floor(Math.random() * options.length)];
  }));
  return <span ref={ref} className={`ambient-breathing ambient-${variant}${randomized ? ' ambient-random' : ''}${active && !paused ? ' is-active' : ''}`} aria-hidden="true">
    {randomized ? glows.map((glow, index) => <i key={index} style={{ left: `${glow.left}%`, top: `${glow.top}%`, backgroundColor: glow.color, animationDuration: `${glow.duration}s`, animationDelay: `${glow.delay}s` }} onAnimationIteration={() => setGlows(current => current.map((item, itemIndex) => {
      if (itemIndex !== index) return item;
      const choices = palette.filter(color => color !== item.color);
      return { ...item,
        left: index % 2 ? 72 + Math.random() * 20 : -12 + Math.random() * 24,
        top: (Math.floor(index / 2) + .12 + Math.random() * .65) / (current.length / 2) * 100,
        color: choices[Math.floor(Math.random() * choices.length)],
      };
    }))} />) : colors.map((color, index) => <i key={index} style={{ backgroundColor: color }} onAnimationIteration={() => changeColor(index)} />)}
  </span>;
}
