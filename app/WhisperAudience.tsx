const needs = [
  { number: '01', title: '休息与照看需要同时发生', need: '母亲需要坐下休息，也需要关注不同孩子的位置与活动。', response: '将休息位置朝向活动区，把清晰视线作为空间分区的重要条件。', source: 'PERSONA / Needs' },
  { number: '02', title: '不同孩子需要不同的参与层次', need: '课程分析面向 6—12 岁儿童，考虑感官探索、社交与认知探索等不同需求。', response: '户外通过不同触达高度与个人、多人反馈提供参与层次；室内区分中央探索与外围停留。', source: 'Family and Social Structure / Target Audience' },
  { number: '03', title: '共同参与不应限制个人节奏', need: '家庭需要在探索、观察与休息之间切换，而不是一直同步行动。', response: '让母亲不必持续参与，也保留停留与退出的选择，使不同强度的参与可以共存。', source: 'Challenges / Individual Autonomy' },
];

export default function WhisperAudience() {
  return <div className="whisper-audience" aria-labelledby="whisper-audience-title">
    <div className="whisper-section-heading"><span className="whisper-audience-label">AUDIENCE / NEEDS</span><h3 id="whisper-audience-title">一次家庭出行，两种不同的需要。</h3><p>课程画像以一位需要同时照看不同年龄孩子的母亲为情境：孩子希望探索，母亲则需要在保持照看的同时，拥有片刻自己的时间。</p></div>
    <p className="whisper-audience-scenario">课程设计画像 · 用于梳理需求，不作为真实访谈记录。</p>
    <ol className="whisper-needs-list">{needs.map(item=><li key={item.number}><div className="whisper-need-title"><span>{item.number}</span><h4>{item.title}</h4></div><dl><div><dt>需求</dt><dd>{item.need}</dd></div><div><dt>设计回应</dt><dd>{item.response}</dd></div></dl><small>{item.source}</small></li>)}</ol>
    <p className="whisper-source">依据 Figma 中的用户画像、家庭与儿童需求分析及自主参与讨论整理。</p>
  </div>;
}
