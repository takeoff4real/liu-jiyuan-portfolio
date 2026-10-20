const journey = [
  { title: '一起到达', child: '观察入口与花园，决定是否进入。', mother: '先确认活动范围、座位与离开路线。', response: '入口光带提示边界，保留先观察的空间。' },
  { title: '开始探索', child: '自主移动，发现路径与植物的回应。', mother: '选择外围座位，坐下后仍能观察孩子。', response: '个人路径对应个人行动，不要求母亲同步操作。' },
  { title: '各自参与', child: '继续探索，也可以与他人的路径产生联系。', mother: '保持照看；可坐姿加入，也可以只休息。', response: '不同强度的参与可以共存，共同区域呈现彼此联系。' },
  { title: '一起离开', child: '停下探索，回到母亲身边。', mother: '按家庭节奏结束，不必等待集体任务。', response: '痕迹逐步消退，空间继续回应其他参与者。' },
];

export function WhisperSpatialPlan() {
  return <div className="whisper-spatial-layout">
    <figure className="whisper-plan-figure">
      <svg viewBox="0 0 560 490" role="img" aria-labelledby="whisper-plan-title whisper-plan-desc">
        <title id="whisper-plan-title">共享花园的空间分区与照看视线示意</title>
        <desc id="whisper-plan-desc">入口位于下方，儿童探索区域在中央，休息座位位于右侧外围。虚线扇形表示从座位朝向中央的预期观察范围，外围保留通行与退出路径。这是空间关系示意，非实测平面图。</desc>
        <defs><linearGradient id="whisper-garden-fill" x2="1" y2="1"><stop stopColor="#d9eee8"/><stop offset="1" stopColor="#c9dfef"/></linearGradient></defs>
        <rect x="38" y="28" width="484" height="396" rx="28" fill="#edf2f6" stroke="#c6d1dd" strokeWidth="2"/>
        <rect x="65" y="55" width="430" height="342" rx="20" fill="none" stroke="#bccbd7" strokeDasharray="5 7"/>
        <rect x="105" y="91" width="295" height="263" rx="65" fill="url(#whisper-garden-fill)"/>
        <path d="M450 210 123 115 123 337Z" fill="#e4cba8" opacity=".19"/>
        <path d="m450 210-327-95m327 95-327 127m327-127-215 21" stroke="#b69261" strokeWidth="1.5" strokeDasharray="5 6" fill="none"/>
        <path d="M133 388H79V69H433" fill="none" stroke="#8c9eaf" strokeWidth="2" strokeLinecap="round"/>
        <path d="m426 63 9 6-9 6" fill="none" stroke="#8c9eaf" strokeWidth="2"/>
        <rect x="429" y="110" width="43" height="73" rx="12" fill="#efe0c9" stroke="#c6ac85"/>
        <rect x="429" y="238" width="43" height="73" rx="12" fill="#efe0c9" stroke="#c6ac85"/>
        <circle cx="450" cy="210" r="11" fill="#aa865a" stroke="#fff" strokeWidth="3"/>
        <circle cx="223" cy="208" r="10" fill="#5b9e95" stroke="#fff" strokeWidth="3"/>
        <circle cx="306" cy="280" r="10" fill="#648fbc" stroke="#fff" strokeWidth="3"/>
        <path d="M198 279q-32-52 25-71m83 72q-13-54-58-44" fill="none" stroke="#6fa89d" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8"/>
        <text x="249" y="151" textAnchor="middle" fill="#44766f" fontSize="17">儿童探索区</text>
        <text x="450" y="345" textAnchor="middle" fill="#8b714f" fontSize="15">外围休息</text>
        <rect x="157" y="412" width="112" height="24" fill="#edf2f6"/>
        <path d="M211 455v-69m-6 8 6-8 6 8" fill="none" stroke="#7b93b1" strokeWidth="2"/>
        <text x="243" y="461" fill="#70869e" fontSize="15">入口 / 返回</text>
      </svg>
      <figcaption>依据课程空间构想整理 · 非实测比例；虚线为预期照看视线，需在真实场地验证。</figcaption>
    </figure>
    <div className="whisper-plan-notes">
      <div><span>01 / EXPLORE</span><h4>把探索留在中央</h4><p>用连续的反馈区域承接孩子的移动，避免把探索路线引向座位或通道。</p></div>
      <div><span>02 / REST &amp; WATCH</span><h4>坐下，也能关注孩子</h4><p>外围座位朝向活动区。休息不等于停止照看，母亲仍可按需起身回应。</p></div>
      <div><span>03 / MOVE FREELY</span><h4>不把退出变成任务</h4><p>在探索区与座位之间保留通行关系，不要求完成共同动作才能离开。</p></div>
    </div>
  </div>;
}

export function WhisperDualJourney() {
  return <div className="whisper-dual-journey">
    <ol>{journey.map((step, index) => <li key={step.title}><span className="whisper-journey-step">0{index + 1}</span><h4>{step.title}</h4><dl><div className="journey-child"><dt>孩子</dt><dd>{step.child}</dd></div><div className="journey-mother"><dt>母亲</dt><dd>{step.mother}</dd></div><div className="journey-response"><dt>设计回应</dt><dd>{step.response}</dd></div></dl></li>)}</ol>
    <p className="whisper-source">根据课程双线旅程与新版交互逻辑整理，为预期使用情境，不代表已验证的情绪改善或看护效果。</p>
  </div>;
}
