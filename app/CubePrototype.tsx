'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';

type Participant = { id: number; x: number; y: number };
type Trace = Participant & { time: number };
const traceLifetime = 12000;
const cells = Array.from({ length: 96 }, (_, index) => ({ x: (index % 12 + .5) / 12, y: (Math.floor(index / 12) + .5) / 8 }));

function distanceToConnection(point: { x: number; y: number }, start: Trace, end: Trace) {
  const dx = (end.x - start.x) * 1.4, dy = end.y - start.y;
  const length = dx * dx + dy * dy;
  const amount = length ? Math.max(0, Math.min(1, (((point.x - start.x) * 1.4) * dx + (point.y - start.y) * dy) / length)) : 0;
  return Math.hypot((point.x - start.x) * 1.4 - amount * dx, point.y - start.y - amount * dy);
}

export default function CubePrototype() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [selected, setSelected] = useState(1);
  const [moved, setMoved] = useState(false);
  const [traces, setTraces] = useState<Trace[]>([]);
  const [now, setNow] = useState(0);
  const drag = useRef<{ pointerId: number; personId: number; offsetX: number; offsetY: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const count = participants.length;
  const state = count === 0 ? '无人待机' : count === 1 ? '单人回应' : '共同变化';
  const hasTraces = traces.length > 0;
  const firstTraces = traces.filter(trace => trace.id === 1);
  const secondTraces = traces.filter(trace => trace.id === 2);
  const firstEnd = firstTraces.at(-1);
  const secondEnd = secondTraces.at(-1);
  const connected = Boolean(firstEnd && secondEnd);
  const meaning = count === 0
    ? hasTraces ? { title: '行动结束，留下的花园正在慢慢淡去。', body: '痕迹短暂保留，表示刚才有人在这里参与过；离开不需要完成任务。' } : { title: '你的移动，会为花园留下一段生长路径。', body: '一个人也可以探索。另一位加入并留下路径后，两段路径会共同连接花园。' }
    : connected
      ? { title: '两段行动，共同连接了一片花园。', body: count === 2 ? '彩色路径分别记录两人的移动；中间浅色区域由两份贡献共同形成。各自移动，观察这片共同区域如何变化。' : '另一位已经离开，但双方留下的贡献会短暂保留。你可以继续探索，也可以停下来观察。' }
      : hasTraces
        ? { title: '彩色路径记录了刚才的移动。', body: count === 2 ? '另一位也移动一次后，两段路径之间会出现共同形成的区域。无需靠近或同时动作。' : '这是一个人留下的贡献。邀请另一位加入，看看两份贡献会产生什么变化。' }
        : { title: '先留下一段属于自己的路径。', body: '拖动圆点，彩色痕迹会记录移动经过的位置；两位各自行动后，共同区域才会出现。' };

  useEffect(() => {
    if (!hasTraces) return;
    const timer = window.setInterval(() => {
      const time = Date.now();
      setNow(time);
      setTraces(current => current.filter(trace => time - trace.time < traceLifetime));
    }, 200);
    return () => window.clearInterval(timer);
  }, [hasTraces]);

  function join() {
    if (count >= 2) return;
    const id = participants.some(person => person.id === 1) ? 2 : 1;
    setTraces(current => current.filter(trace => trace.id !== id));
    setParticipants([...participants, { id, x: id === 1 ? .3 : .7, y: .55 }]);
    setSelected(id);
  }

  function leave() {
    const remaining = participants.filter(person => person.id !== selected);
    setParticipants(remaining);
    setSelected(remaining[0]?.id ?? 1);
  }

  function move(x: number, y: number, personId = selected) {
    const person = participants.find(person => person.id === personId);
    if (!person) return;
    const next = { id: personId, x: Math.max(.06, Math.min(.94, x)), y: Math.max(.08, Math.min(.92, y)) };
    if (Math.hypot(next.x - person.x, next.y - person.y) < .003) return;
    const time = Date.now();
    setNow(time);
    setParticipants(current => current.map(person => person.id === personId ? next : person));
    setTraces(current => {
      const recent = current.filter(trace => time - trace.time < traceLifetime);
      const own = recent.filter(trace => trace.id === personId);
      const other = recent.filter(trace => trace.id !== personId);
      const start = own.length ? own : [{ ...person, time }];
      return [...other, ...[...start, { ...next, time }].slice(-80)];
    });
    setMoved(true);
  }

  function beginDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current || (event.pointerType === 'mouse' && event.button !== 0)) return;
    const marker = event.target instanceof Element ? event.target.closest('[data-participant-id]') : null;
    const person = participants.find(person => person.id === Number(marker?.getAttribute('data-participant-id')));
    if (!person) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.preventDefault();
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { pointerId: event.pointerId, personId: person.id, offsetX: (event.clientX - bounds.left) / bounds.width - person.x, offsetY: (event.clientY - bounds.top) / bounds.height - person.y };
    setSelected(person.id);
    setDragging(true);
  }

  function dragMove(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    move((event.clientX - bounds.left) / bounds.width - current.offsetX, (event.clientY - bounds.top) / bounds.height - current.offsetY, current.personId);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function keys(event: KeyboardEvent<HTMLDivElement>) {
    const person = participants.find(person => person.id === selected);
    if (!person || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    move(person.x + (event.key === 'ArrowRight' ? .05 : event.key === 'ArrowLeft' ? -.05 : 0), person.y + (event.key === 'ArrowDown' ? .05 : event.key === 'ArrowUp' ? -.05 : 0));
  }

  return (
    <section className="cube-prototype" aria-labelledby="cube-prototype-title">
      <header className="cube-prototype-heading">
        <div><span className="story-label">CUBE / LOW-FIDELITY PROTOTYPE</span><h2 id="cube-prototype-title">留下我的痕迹，<br />看见我们的连接。</h2></div>
        <p>低保真交互原型 · 鼠标、触屏与键盘模拟<br />我用个人路径与共同区域表达参与关系，检查用户能否看懂自己的行动如何影响画面，再推进真实花园视觉与空间追踪。</p>
      </header>
      <div className="cube-prototype-states" aria-label="三个演示状态">
        {['无人待机', '单人回应', '共同变化'].map((name, index) => <span key={name} aria-current={count === index ? 'step' : undefined}><small>0{index + 1}</small>{name}</span>)}
      </div>
      <div className="cube-prototype-controls">
        <button type="button" onClick={join} disabled={count === 2}>{count === 0 ? '模拟第一位靠近' : count === 1 ? '模拟第二位加入' : '两位已加入'}</button>
        {participants.map(person => <button type="button" key={person.id} aria-pressed={selected === person.id} onClick={() => setSelected(person.id)}>移动参与者 {person.id}</button>)}
        <button type="button" disabled={!count} onClick={leave}>所选参与者离开</button>
        <button type="button" onClick={() => { setParticipants([]); setTraces([]); setSelected(1); setMoved(false); }}>重新开始</button>
      </div>
      <p className="cube-prototype-instruction" id="cube-prototype-help">{count ? `按住 P1 或 P2 圆点拖动，松开即停；也可聚焦网格，用方向键移动参与者 ${selected}。让两位各自移动一次，观察痕迹之间的连接。` : '先模拟一位参与者靠近，再按住圆点拖动，观察自己留下的痕迹。'}</p>
      <div className="cube-trace-legend" aria-label="痕迹图例"><span className="trace-legend-one">P1 移动留下的路径 · 实线</span><span className="trace-legend-two">P2 移动留下的路径 · 虚线</span><span>浅色连接区 · 两份贡献共同形成</span></div>
      <div className="cube-meaning" id="cube-meaning"><h3>{meaning.title}</h3><p>{meaning.body}</p></div>
      <div className={`cube-prototype-field${dragging ? ' is-dragging' : ''}`} role="group" aria-label="花园局部反馈模拟区域" aria-describedby="cube-prototype-help cube-meaning" tabIndex={0} onKeyDown={keys}
        onPointerDown={beginDrag} onPointerMove={dragMove} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}>
        <div className="cube-prototype-grid" aria-hidden="true">{cells.map((cell, index) => {
          const first = participants.find(person => person.id === 1);
          const second = participants.find(person => person.id === 2);
          const intensity = (person?: Participant) => person ? Math.max(0, 1 - Math.hypot((cell.x - person.x) * 1.4, cell.y - person.y) / .3) : 0;
          const a = intensity(first), b = intensity(second);
          const shared = firstEnd && secondEnd ? Math.max(0, 1 - distanceToConnection(cell, firstEnd, secondEnd) / .12) * Math.max(0, 1 - (now - Math.min(firstEnd.time, secondEnd.time)) / traceLifetime) : 0;
          return <span key={index} style={{ backgroundColor: shared > .12 || (a > .05 && b > .05) ? '#e2eeb6' : a > b ? '#cce883' : b > .05 ? '#92c8ed' : '#77816f', opacity: .15 + Math.max(a, b, shared * .75) * .85 }} />;
        })}</div>
        <svg className="cube-traces" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
          {[firstTraces, secondTraces].map((group, groupIndex) => <g key={groupIndex} className={`cube-trace-group trace-person-${groupIndex + 1}`}>
            {group.slice(1).map((trace, index) => <line key={`${trace.time}-${index}`} x1={group[index].x * 1000} y1={group[index].y * 1000} x2={trace.x * 1000} y2={trace.y * 1000} opacity={Math.max(0, 1 - (now - trace.time) / traceLifetime)} />)}
          </g>)}
          {firstEnd && secondEnd && <g opacity={Math.max(0, 1 - (now - Math.min(firstEnd.time, secondEnd.time)) / traceLifetime)}>
            <line className="cube-shared-bed" x1={firstEnd.x * 1000} y1={firstEnd.y * 1000} x2={secondEnd.x * 1000} y2={secondEnd.y * 1000} />
            <line className="cube-shared-connection" data-testid="shared-connection" x1={firstEnd.x * 1000} y1={firstEnd.y * 1000} x2={secondEnd.x * 1000} y2={secondEnd.y * 1000} />
          </g>}
        </svg>
        {participants.map(person => <span key={person.id} className={`cube-participant participant-${person.id}`} data-participant-id={person.id} style={{ left: `${person.x * 100}%`, top: `${person.y * 100}%` }} aria-hidden="true">P{person.id}</span>)}
        {!count && <span className="cube-prototype-idle" aria-hidden="true">等待靠近</span>}
      </div>
      <p className="cube-prototype-status" role="status">{state} · {connected ? '共同痕迹可见：两人的行动留下了连接，不要求靠近或同步。' : count === 0 ? hasTraces ? '参与者已离开，留下的痕迹逐渐消退。' : '无参与者，保持低亮度。' : count === 1 ? '移动可留下个人痕迹；停止后仍可观察。' : '两位可独立探索，各自移动后形成共同连接。'}{moved && count > 0 ? '已模拟移动。' : ''}</p>
      <p className="cube-trace-timing">演示痕迹约 12 秒内逐渐消退，松手或退出不会立即抹除。这个时长是原型参数，实际空间中的节奏仍需验证。</p>
      <div className="cube-prototype-check"><h3>从操作清楚，到意义清楚</h3><p><strong>首轮：</strong>我发现移向按钮时，参与者会跟随光标跑走。改为按住圆点拖动后，我再次试用，确认操作问题已经解决。</p><p><strong>第二轮：</strong>我发现参与者需要讲解，才能明确痕迹与连线的含义。因此，我加入了状态提示与浅色共同区域。</p><p><strong>再次试用：</strong>修改后，我收到参与者已经理解含义的反馈。这是本轮屏幕原型的初步结果。</p><p><strong>下一步：</strong>我将继续推进花园的视觉表达，并验证真实空间中的身体追踪、无障碍参与和多人安全。</p></div>
    </section>
  );
}
