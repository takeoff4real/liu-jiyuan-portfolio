'use client';

import { useEffect, useRef } from 'react';

export default function PortfolioMotion({ refreshKey }: { refreshKey: string }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const resetCursorRef = useRef<(() => void) | null>(null);
  useEffect(() => {
    resetCursorRef.current?.();
  }, [refreshKey]);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add('custom-cursor-ready');
    let targetX = -120;
    let targetY = -120;
    let ringX = -120;
    let ringY = -120;
    let frame = 0;
    let pointerInside = false;
    let suppressUntilMove = false;

    const clearLabel = () => {
      ring.classList.remove('has-label', 'is-active');
      label.textContent = '';
    };
    const resetCursor = () => { suppressUntilMove = true; clearLabel(); };
    resetCursorRef.current = resetCursor;

    // Resolve the element under the pointer now, not the target of an old event.
    const syncCursor = () => {
      if (!pointerInside || document.hidden) return;
      const element = document.elementFromPoint(targetX, targetY);
      if (!element || element.closest('iframe')) {
        dot.classList.remove('is-visible');
        ring.classList.remove('is-visible');
        clearLabel();
        return;
      }
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
      const interactive = element.closest<HTMLElement>('a, button, summary, [data-cursor-label]');
      const unavailable = interactive?.closest('[inert], [aria-hidden="true"], :disabled');
      const cursorLabel = !suppressUntilMove && !unavailable ? interactive?.dataset.cursorLabel ?? '' : '';
      ring.classList.toggle('is-active', Boolean(interactive && !unavailable && !suppressUntilMove));
      ring.classList.toggle('has-label', Boolean(cursorLabel));
      if (label.textContent !== cursorLabel) label.textContent = cursorLabel;
    };

    const updateCursor = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      if (Math.abs(event.clientX - targetX) + Math.abs(event.clientY - targetY) > .5) suppressUntilMove = false;
      pointerInside = true;
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');

      syncCursor();
    };

    const hideCursor = () => {
      pointerInside = false;
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible', 'is-active', 'has-label');
      label.textContent = '';
    };
    const leaveWindow = (event: PointerEvent) => { if (!event.relatedTarget) hideCursor(); };
    const visibilityChanged = () => { if (document.hidden) hideCursor(); };

    const animate = () => {
      syncCursor();
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', updateCursor, { passive: true });
    window.addEventListener('pointerdown', resetCursor, { passive: true });
    window.addEventListener('pointerout', leaveWindow, { passive: true });
    window.addEventListener('blur', hideCursor);
    document.addEventListener('visibilitychange', visibilityChanged);
    document.documentElement.addEventListener('mouseleave', hideCursor);
    frame = window.requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('custom-cursor-ready');
      window.removeEventListener('pointermove', updateCursor);
      window.removeEventListener('pointerdown', resetCursor);
      window.removeEventListener('pointerout', leaveWindow);
      window.removeEventListener('blur', hideCursor);
      document.removeEventListener('visibilitychange', visibilityChanged);
      if (resetCursorRef.current === resetCursor) resetCursorRef.current = null;
      document.documentElement.removeEventListener('mouseleave', hideCursor);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelector = [
      '.hero-copy', '.hero-status', '.showcase-heading', '.home-project',
      '.firefly-about > div', 'footer > *', '.story-hero-copy', '.story-meta > div',
      '.mima-context > *', '.story-section > *', '.story-turn > *', '.story-experience > *',
      '.story-system > *', '.story-reflection > *', '.xiaoxinsi-hero-copy', '.xiaoxinsi-hero-visual',
      '.xiaoxinsi-meta > div', '.xiaoxinsi-brief > *', '.xiaoxinsi-characters > *',
      '.xiaoxinsi-identity > *', '.xiaoxinsi-scenes > *', '.xiaoxinsi-applications > *',
      '.xiaoxinsi-ending > *', '.editorial-hero-copy', '.editorial-meta > div',
      '.editorial-brief > *', '.editorial-feature-copy', '.editorial-principles > *',
      '.editorial-film > *', '.editorial-system > *', '.editorial-ending > *', '.detail > *'
    ].join(',');
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    nodes.forEach((node, index) => {
      node.classList.add('motion-reveal');
      node.style.setProperty('--reveal-order', String(index % 4));
    });

    if (reducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.03, rootMargin: '0px 0px -7% 0px' });

    nodes.forEach((node) => observer.observe(node));

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.showcase-card'));
    const cleanups = cards.map((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--tilt-x', `${(-y * 1.4).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${(x * 1.8).toFixed(2)}deg`);
        card.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`);
      };
      const reset = () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', reset);
      return () => {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', reset);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [refreshKey]);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"><span ref={labelRef} /></div>
    </>
  );
}
