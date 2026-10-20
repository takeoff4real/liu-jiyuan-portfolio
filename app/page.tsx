'use client';

import { useEffect, useRef, useState } from 'react';
import WhisperCaseStudy from './WhisperCaseStudy';
import XiaoxinsiCaseStudy from './XiaoxinsiCaseStudy';
import BookEditorialCaseStudy from './BookEditorialCaseStudy';
import MycoCaseStudy from './MycoCaseStudy';
import AmbientBreathing from './AmbientBreathing';
import PortfolioNavigation from './PortfolioNavigation';
import NameDoodle from './NameDoodle';
import IcpFiling from './IcpFiling';
import './xiaoxinsi-layout.css';
import './orwell-layout.css';
import './ultraman-layout.css';
import './portfolio-polish.css';
import './homepage-vertical.css';

type Category = 'featured' | 'projects' | 'experiments';
type Project = {
  id: string; number: string; title: string; subtitle: string; type: string;
  category: Exclude<Category, 'featured'>; featured?: boolean; image: string;
  accent: 'lime' | 'cyan' | 'coral'; intro: string;
  sections: { title: string; body: string }[]; gallery: string[];
};

const projects: Project[] = [
  {
    id: 'mima', number: '01', title: 'Whisper Grove Corner', subtitle: 'Catenary × Cube',
    type: '体验设计 · 团队项目', category: 'projects', featured: true, accent: 'lime',
    image: '/assets/masters/mima/home-cover-composite-v2.png',
    intro: '由户外 Catenary 光影路径与室内 Cube 沉浸空间组成的双场景体验。两套系统分别回应移动、停留、学习与共同参与，并让儿童与照护者都能找到自己的参与方式。',
    sections: [
      { title: '双场景体验框架', body: 'Catenary 将移动与休息组织成户外光影路径；Cube 通过沉浸屏幕、手势和多人反馈形成室内探索空间。' },
      { title: '从概念到系统', body: '提案同时呈现两种场景的氛围、交互行为与技术结构，使完整体验能够被讨论、评估与继续推进。' },
    ],
    gallery: ['/assets/masters/mima/title.jpg', '/assets/masters/mima/iteration.jpg', '/assets/masters/mima/technical-system.jpg'],
  },
  {
    id: 'myco', number: '02', title: 'MyCo', subtitle: 'Pop-up × Harbour exploration',
    type: '交互与服务体验 · 进行中', category: 'projects', featured: true, accent: 'lime',
    image: '/assets/myco/packaging.webp',
    intro: '以线下快闪活动为主体，通过海港探索、集章与纪念品连接到访体验；网页版以简短试玩帮助访客理解活动。',
    sections: [], gallery: [],
  },
  {
    id: 'xiaoxinsi', number: '03', title: '小心思 IP', subtitle: 'Character & brand system',
    type: 'IP 与品牌设计 · 团队毕业设计', category: 'projects', featured: true, accent: 'coral',
    image: '/assets/ip-xiaoxin/covers/xiaoxinsi-composite-v2.png',
    intro: '面向儿童与亲子，以“让大人重新看见孩子的世界”为核心，将《小王子》的角色灵感延展为品牌视觉。我负责外观设计、Logo设计和排版。',
    sections: [
      { title: '两个角色，一段关系', body: '小王子与小狐狸并非两张孤立插画；皇冠、爱心、拥抱和相互陪伴的动作共同建立叙事线索。' },
      { title: '从角色到品牌触点', body: '角色语言进入包装、数字屏幕、印刷物与生活周边，并根据载体调整构图、信息密度与观看距离。' },
    ],
    gallery: ['/assets/ip-xiaoxin/gallery/07-frame.jpg', '/assets/ip-xiaoxin/gallery/10-brochure.jpg', '/assets/ip-xiaoxin/gallery/13-banner.jpg'],
  },
  {
    id: 'ultraman', number: '04', title: 'ULTRAMAN', subtitle: '奥特曼角色图鉴',
    type: '编辑与装帧设计 · 独立课程作业', category: 'projects', accent: 'coral', image: '/assets/binding-design/home-cover-stack-white-v1.png',
    intro: '2022 年独立完成的课程作业。因为喜欢奥特曼，我以昭和复古风为主要设计方向，将角色影像、标题字形与资料排版组织成角色图鉴。',
    sections: [
      { title: '角色信息架构', body: '不同页面围绕角色形象、人物关系与背景资料建立层级，让大量图文内容保持可读，并形成连续的角色档案。' },
      { title: '视觉系统', body: '红白主色、银色角色影像、斜切构图和重复字形贯穿全书，在统一识别中为不同角色保留各自的页面节奏。' },
    ],
    gallery: ['/assets/binding-design/gallery/03.jpg', '/assets/binding-design/gallery/08.jpg', '/assets/binding-design/gallery/12.jpg'],
  },
  {
    id: '1984', number: '05', title: '1984', subtitle: 'George Orwell · Book redesign',
    type: '书籍装帧 · 独立课程作业', category: 'projects', featured: true, accent: 'coral', image: '/assets/1984/home-cover-centered-v1.png',
    intro: '围绕乔治·奥威尔《1984》的监视、逃离与审查主题，重新设计封面、书脊、封底、正文版式与实体包装，建立一套红、黑、灰与米白构成的视觉系统。',
    sections: [
      { title: '把监视转化为封面叙事', body: '摄像头、探照光束、奔跑人物与 EXIT 标识共同构成视觉线索，把“被观看”和“试图逃离”的关系集中到封面上。' },
      { title: '从平面延伸到书籍对象', body: '设计继续延伸至书脊、封底、正文、封套与盒装展示，使主题语言不仅存在于单张封面，而是贯穿阅读与拿取过程。' },
    ],
    gallery: ['/assets/1984/cover-spread.png', '/assets/1984/book-interior.png', '/assets/1984/mockup-box.png'],
  },
  {
    id: 'boogie', number: '05', title: 'Boogie Woogie Grid', subtitle: 'Time, rhythm and rules',
    type: '创意编程 · 团队项目', category: 'experiments', accent: 'lime', image: '/assets/masters/slides/idea9103/design-document/slide-01.jpg',
    intro: '从蒙德里安的网格节奏出发，用代码、时间与状态规则探索一套会持续变化的视觉系统。',
    sections: [{ title: '我的分支', body: '作品集聚焦时间驱动的动画逻辑，以及视觉元素如何在规则中产生节奏。' }],
    gallery: ['/assets/masters/slides/idea9103/design-document/slide-06.jpg', '/assets/masters/slides/idea9103/design-document/slide-10.jpg'],
  },
  {
    id: 'choice', number: '06', title: 'Make Your Choice', subtitle: 'Design research',
    type: '设计研究 · 团队项目', category: 'experiments', accent: 'cyan', image: '/assets/masters/idea9106-final/page-02.jpg',
    intro: '从研究、洞察到概念表达，记录团队如何把开放议题逐步转化为可以讨论的设计方向。',
    sections: [{ title: '过程价值', body: '重点不是展示每一页过程，而是说明关键判断如何改变问题定义和最终概念。' }],
    gallery: ['/assets/masters/idea9106-final/page-08.jpg', '/assets/masters/idea9106-final/page-15.jpg'],
  },
  {
    id: 'media', number: '07', title: 'Interaction Experiments', subtitle: 'Sound, image and prototype',
    type: '交互媒介实验', category: 'experiments', accent: 'coral', image: '/assets/masters/slides/recording-final/slide-12.jpg',
    intro: '把声音、动态图像与交互机制组合为可体验的概念原型，测试不同媒介如何共同塑造感受。',
    sections: [{ title: '实验方法', body: '用短周期原型验证感知和反馈，再把有效的部分组织成更完整的体验。' }],
    gallery: ['/assets/masters/slides/recording-final/slide-04.jpg', '/assets/masters/slides/recording-final/slide-09.jpg'],
  },
];

const showcaseProjects = projects.filter((project) => project.featured || project.id === 'ultraman');
const composedHomeIds = ['mima', 'xiaoxinsi', 'ultraman'];
const editorialHomeProjects = showcaseProjects.filter(project => project.id === 'ultraman' || project.id === '1984');
const editorialHomePresentation: Record<string, { description: string; image: string }> = {
  ultraman: { description: '我以昭和复古风整理角色影像与资料，设计一本连续阅读的奥特曼角色图鉴。', image: '/assets/binding-design/stack-cutout-v1.png' },
  '1984': { description: '我将“监视”的压迫感转化为数字、光束与图像关系，贯穿封面、书脊与装帧。', image: '/assets/1984/home-cover-centered-v1.png' },
};

const showcaseLines: Record<string, string> = {
  mima: '让户外路径与室内沉浸空间共同回应家庭参与',
  myco: '用一次海港冒险，打开线下快闪的参与体验',
  xiaoxinsi: '让大人重新看见孩子的世界',
  ultraman: '用角色图鉴组织经典特摄的视觉与叙事',
  '1984': '把监视、审查与逃离转化为完整书籍系统',
};

const homeProjectDetails: Record<string, { tags: string[]; year: string; role: string }> = {
  mima: { tags: ['空间交互', '家庭参与', '视觉引导'], year: '2026', role: '交互与视觉引导' },
  myco: { tags: ['线下快闪', '海港探索', '活动引导'], year: '进行中', role: '团队项目' },
  xiaoxinsi: { tags: ['角色设计', 'Logo', '品牌应用'], year: '2023', role: '外观 · Logo · 排版' },
  ultraman: { tags: ['昭和复古', '角色图鉴', '编辑设计'], year: '2022', role: '独立完成' },
  '1984': { tags: ['监视与压迫', '封面叙事', '书籍装帧'], year: '2022', role: '独立完成' },
};

function LegacyMimaCaseStudy({ close }: { close: () => void }) {
  return (
    <div className="detail-shell mima-shell" role="dialog" aria-modal="true" aria-label="MAP mima 项目详情">
      <button className="detail-back" onClick={close}>关闭</button>
      <article className="mima-story">
        <header className="story-hero">
          <img src="/assets/masters/mima/home-cover.png" alt="MAP mima 场地路径与导航概念图" />
          <div className="story-hero-shade" />
          <div className="story-hero-copy">
            <span>EXPERIENCE DESIGN · MAP MIMA</span>
            <h1>Catenary–<br />Grove</h1>
            <p>一段让儿童自由探索，也让照护者安心停留的夜间光影路径。</p>
          </div>
        </header>

        <section className="story-meta" aria-label="项目概况">
          <div><span>项目类型</span><strong>体验设计 / 交互装置</strong></div>
          <div><span>场地</span><strong>MAP mima · Speers Point Park</strong></div>
          <div><span>合作方式</span><strong>团队项目</strong></div>
          <div><span>参与环节</span><strong>研究 · 概念 · 交互 · 呈现</strong></div>
        </section>

        <section className="story-section story-opening">
          <div className="story-label">01 / THE BRIEF</div>
          <div className="story-split">
            <h2>一个共享空间，<br />两种同时发生的需求。</h2>
            <div className="story-copy">
              <p>MAP mima 位于 Lake Macquarie 的公共文化与休闲环境中。项目要求我们思考：沉浸体验如何从室内延伸到公园，并真正服务在场的人。</p>
              <p>我们没有把“家庭”视为一个需求完全一致的整体。儿童希望移动、触碰和得到即时反馈；照护者则需要休息、保持视线联系，同时不必持续介入。</p>
            </div>
          </div>
          <div className="story-question"><span>DESIGN QUESTION</span><p>如何让儿童的自主探索与照护者的休息，在同一段体验中自然共存？</p></div>
        </section>

        <section className="story-section story-tension">
          <div className="story-label">02 / THE TENSION</div>
          <h2>问题不是缺少互动，<br />而是互动只照顾了其中一方。</h2>
          <div className="tension-grid">
            <div><b>CHILD</b><h3>自由探索</h3><p>直觉动作、即时反馈、可以独立发现的路径。</p></div>
            <div><b>CAREGIVER</b><h3>安心停留</h3><p>可见性、休息位置，以及不过度介入的陪伴。</p></div>
            <div className="tension-result"><b>SHARED NEED</b><h3>共同在场</h3><p>两种体验不互相打断，却能通过光的变化感知彼此。</p></div>
          </div>
        </section>

        <section className="story-section story-iteration">
          <div className="story-label">03 / FIRST ATTEMPT</div>
          <div className="story-split">
            <h2>第一版让孩子得到回应，<br />却让照护者留在体验之外。</h2>
            <div className="story-copy"><p>早期方案以悬挂单元和触摸互动为核心。儿童可以主动触发灯光，但照护者主要停留在座椅上观看，双方之间没有真正形成可感知的联系。</p><p>与此同时，低位触摸和悬挂结构带来了安全、耐候与维护上的疑问。问题促使我们重新定义互动：它不应该依赖完成任务，而应该自然发生在移动与停留之间。</p></div>
          </div>
          <div className="sketch-grid">
            <figure><img src="/assets/masters/mima/story/01-initial-concept.png" alt="Catenary–Grove 第一版概念草图" /><figcaption>第一版：儿童触发装置，照护者主要旁观</figcaption></figure>
            <figure><img src="/assets/masters/mima/story/02-iteration-sketch.png" alt="Catenary–Grove 第二版迭代草图" /><figcaption>迭代方向：把休息区也纳入反馈关系</figcaption></figure>
          </div>
        </section>

        <section className="story-turn">
          <div className="story-label">04 / THE TURNING POINT</div>
          <h2>转折不在于增加更多装置，<br />而在于让反馈跨越两个人的位置。</h2>
          <div className="principle-grid">
            <div><span>01</span><h3>从触摸改为接近</h3><p>降低操作门槛，也减少户外装置被拉扯和碰撞的风险。</p></div>
            <div><span>02</span><h3>从单点改为路径</h3><p>灯条沿移动方向连续变化，让行走本身成为互动。</p></div>
            <div><span>03</span><h3>从旁观改为连接</h3><p>座椅底部同步回应儿童区域，让照护者也能感知现场变化。</p></div>
          </div>
        </section>

        <section className="story-section story-experience">
          <div className="story-label">05 / THE EXPERIENCE</div>
          <h2>同一条路径，随着参与人数产生不同强度的回应。</h2>
          <div className="experience-grid">
            <figure><img src="/assets/masters/mima/story/03-quiet-state.png" alt="Catenary–Grove 安静待机状态" /><figcaption><b>Quiet state</b><span>无人靠近时，以低亮度维持环境氛围。</span></figcaption></figure>
            <figure><img src="/assets/masters/mima/story/04-mother-child.png" alt="儿童探索、照护者在座椅休息的使用场景" /><figcaption><b>One family</b><span>儿童移动触发灯光，座椅区域同步产生回应。</span></figcaption></figure>
            <figure><img src="/assets/masters/mima/story/05-shared-activation.png" alt="多个家庭共同参与时的灯光状态" /><figcaption><b>Shared activation</b><span>多人参与时，路径形成更丰富但仍柔和的色彩节奏。</span></figcaption></figure>
          </div>
        </section>

        <section className="story-section story-flow">
          <div className="story-label">06 / BEHAVIOUR FLOW</div>
          <div className="story-split">
            <h2>体验不要求学习流程，<br />它从一次靠近开始。</h2>
            <div className="story-copy"><p>系统覆盖无人使用、单个儿童进入、多个家庭共同参与，以及逐步回到待机状态。每个状态都延续同一套规则，避免用户寻找说明或完成固定任务。</p><p>情境序列帮助我们检查一个关键问题：当现场同时出现儿童、照护者和路过者时，反馈是否仍然容易理解。</p></div>
          </div>
          <div className="behaviour-steps">
            <div><span>01</span><h3>待机</h3><p>灯条保持低亮度，路径仍然安全可见。</p></div>
            <div><span>02</span><h3>靠近</h3><p>感应器识别移动，附近灯光逐渐抬升。</p></div>
            <div><span>03</span><h3>同步</h3><p>儿童区域与座椅区域通过色彩变化产生联系。</p></div>
            <div><span>04</span><h3>归位</h3><p>活动结束后，系统缓慢回到安静状态。</p></div>
          </div>
        </section>

        <section className="story-system">
          <div className="story-label">07 / SYSTEM</div>
          <div className="story-split">
            <h2>把柔和的体验语言，<br />转化为可解释的系统。</h2>
            <div className="story-copy"><p>运动与距离感应器检测位置变化，控制器把信号转化为灯条、互动花朵与座椅灯光的不同状态。</p><p>方案进一步考虑低压供电、防水组件、圆角边缘、儿童安全高度和材料选择，使概念不只停留在氛围图中。</p></div>
          </div>
          <figure><img src="/assets/masters/mima/story/08-technical-system.png" alt="Catenary–Grove 技术系统、材料与安全设计" /><figcaption>装置结构、交互逻辑、系统架构、材料与安全</figcaption></figure>
        </section>

        <section className="story-reflection">
          <div className="story-label">08 / REFLECTION</div>
          <h2>好的公共互动，不需要所有人做同一件事，也能让他们感到彼此相连。</h2>
          <div className="reflection-copy"><p>Catenary–Grove 最重要的变化，是从“为儿童设计一个互动装置”转向“为家庭设计一种共同在场的关系”。</p><p>目前成果仍是提案级设计。下一步需要在真实场地验证夜间可达性、照明干扰、多人同时参与、季节天气、维护成本与无障碍使用，而不是用未经测试的数据证明效果。</p></div>
          <button onClick={close}>返回项目选集</button>
        </section>
      </article>
    </div>
  );
}

function MimaCaseStudy({ close }: { close: () => void }) {
  return <WhisperCaseStudy close={close} />;
}


type EditorialStory = {
  theme: 'ultra' | 'orwell';
  label: string;
  title: string;
  titleBreak: string;
  deck: string;
  hero: string;
  heroPosition?: string;
  meta: { label: string; value: string }[];
  briefTitle: string;
  briefBody: string[];
  question: string;
  feature: { image?: string; label: string; title: string; alt?: string; textOnly?: boolean };
  principles: { number: string; title: string; body: string }[];
  strip: { image: string; caption: string; crop: 'natural' | 'square' | 'portrait'; focus?: string }[];
  systemTitle: string;
  systemBody: string[];
  systemImages: { image: string; caption: string; alt: string }[];
  ending: string;
  reflection: string;
};

const editorialStories: Record<'ultraman' | '1984', EditorialStory> = {
  ultraman: {
    theme: 'ultra',
    label: '2022 · 独立课程作业 · ULTRAMAN',
    title: 'ULTRA',
    titleBreak: 'MAN',
    deck: '因为喜欢奥特曼，我独立完成这套角色图鉴，以昭和复古风组织角色影像、标题与阅读节奏。',
    hero: '/assets/binding-design/home-cover.png',
    heroPosition: 'center 48%',
    meta: [
      { label: '项目年份', value: '2022' },
      { label: '项目形式', value: '课程作业 · 独立完成' },
      { label: '我的贡献', value: '全部设计' },
      { label: '核心设计方向', value: '昭和复古风' },
    ],
    briefTitle: '把对奥特曼的喜爱，\n转化为昭和复古的视觉表达。',
    briefBody: [
      '因为喜欢奥特曼，我选择在这次课程作业中设计角色图鉴。最重要的设计决定是采用昭和复古风，让经典角色影像、红白配色和醒目的标题成为整本书的视觉线索。',
      '我负责全部设计。在排版中，我通过角色主图、名称和背景资料建立阅读层级，再用不同的图像尺度、重复字形与斜向构图调整跨页节奏。',
    ],
    question: '如何在昭和复古的视觉基调下，让角色有鲜明的登场方式，也让资料保持清楚可读？',
    feature: {
      image: '/assets/binding-design/gallery/08.jpg',
      label: 'THE VISUAL IDEA',
      title: '用昭和复古，串起角色的登场。',
      alt: 'ULTRAMAN 双角色红白编辑跨页',
    },
    principles: [
      { number: '01', title: '昭和复古基调', body: '我用红白色块、经典角色影像和醒目字形组织页面，让复古方向落实到具体的视觉元素。' },
      { number: '02', title: '标题与构图', body: '放大的英文与日文标识、重复字形和斜向切面，让静态跨页也具有角色登场的张力。' },
      { number: '03', title: '先识别，再阅读', body: '角色名、主图与身份信息形成稳定入口，人物经历和关系资料则进入第二阅读层级。' },
    ],
    strip: Array.from({ length: 16 }, (_, index) => ({
      image: `/assets/binding-design/sequence/${String(index + 1).padStart(2, '0')}.jpg`,
      caption: `${String(index + 1).padStart(2, '0')} / 16`,
      crop: 'natural' as const,
    })),
    systemTitle: '稳定的识别元素，\n让每个跨页可以自由变化。',
    systemBody: [
      '每个角色都从清晰的身份入口开始：角色名称、代表性影像，以及与人间体或故事背景相关的文字。读者先完成识别，再根据兴趣进入更长的资料。',
      '在这个基础上，页面通过全幅肖像、切割边界、留白与红色信息块建立不同速度。系统负责连贯，构图负责让角色真正“登场”。',
    ],
    systemImages: [
      { image: '/assets/binding-design/gallery/03.jpg', caption: '人物形态：图像先建立关系，文字补充背景', alt: 'ULTRAMAN 人物形态档案页面' },
      { image: '/assets/binding-design/gallery/12.jpg', caption: '角色档案：大图、名称与传记形成阅读顺序', alt: 'ULTRAMAN 角色档案页面' },
    ],
    ending: '统一不是把每一页做成一样，\n而是让变化仍然属于同一个世界。',
    reflection: '在这次独立完成的课程作业中，我负责全部设计，将对奥特曼的喜爱转化为具体的编辑与装帧表达。我以昭和复古风统一视觉方向，同时用图文层级和跨页变化平衡角色展示与资料阅读。',
  },
  '1984': {
    theme: 'orwell',
    label: '2022 · 独立课程作业 · BOOK REDESIGN',
    title: '19',
    titleBreak: '84',
    deck: '从对《1984》的喜爱出发，我独立完成这套书籍设计，将“监控”的压迫感转化为封面、内页与包装的视觉主线。',
    hero: '/assets/1984/home-cover.png',
    heroPosition: 'center 43%',
    meta: [
      { label: '项目年份', value: '2022' },
      { label: '项目形式', value: '课程作业 · 独立完成' },
      { label: '我的贡献', value: '全部设计：封面 · 内页 · 包装' },
      { label: '核心设计决定', value: '呈现“监控”的压迫感' },
    ],
    briefTitle: '如何让一本关于监视的小说，\n在被打开之前就让人感到被观看？',
    briefBody: [
      '因为喜欢《1984》，我选择在这次课程作业中重新设计这本书。我最想表达的不是某个具体情节，而是“监控”带来的压迫感：即使没有看见监视者，也仿佛始终处于视线之中。',
      '我把摄像头、探照光束、奔跑人物与 EXIT 标识组合成同一场景：读者看见一个试图离开的人，也同时占据了监视者的位置。',
    ],
    question: '能否让“看”与“被看”同时发生，并让这种不适感贯穿整本书？',
    feature: {
      label: 'THE COVER IDEA',
      title: '光束既是视线，也是牢笼。',
      textOnly: true,
    },
    principles: [
      { number: '01', title: '监视', body: '摄像头与眼睛成为反复出现的视线符号，让读者无法真正离开观察关系。' },
      { number: '02', title: '逃离', body: '探照光束、奔跑剪影与 EXIT 形成连续动作，但出口始终处在控制之中。' },
      { number: '03', title: '控制', body: '砖红、黑、灰与米白限制色彩，巨型数字与严格网格建立制度般的压迫感。' },
    ],
    strip: [
      { image: '/assets/1984/cover-spread.png', caption: '封面、书脊与封底的连续叙事', crop: 'natural' },
      { image: '/assets/1984/mockup-book-clean.png', caption: '封面成为第一层叙事', crop: 'square', focus: 'center' },
      { image: '/assets/1984/book-interior.png', caption: '正文延续受控的阅读秩序', crop: 'natural' },
      { image: '/assets/1984/mockup-box.png', caption: '视觉语言进入盒装与展示', crop: 'square', focus: 'center' },
      { image: '/assets/1984/mockup-jacket.png', caption: '重复图形形成外部包装节奏', crop: 'natural' },
      { image: '/assets/1984/process/page-14.jpg', caption: '标题页与出版信息的克制层级', crop: 'natural' },
    ],
    systemTitle: '一个母题，\n从封面持续进入书籍内部。',
    systemBody: [
      '封面、书脊与封底被当作连续的叙事表面：巨型书名负责远距离识别，摄像头和光束制造视线方向，封底则用人物与眼睛继续“被观察”的关系。',
      '内页回到更克制的双栏网格，并保留眼睛、红色页码与章节节点作为提示。外封、盒装和展示物继续使用相同母题，使作品不是一张封面，而是一件完整书籍对象。',
    ],
    systemImages: [
      { image: '/assets/1984/book-interior.png', caption: '正文系统：双栏文本、页码与眼睛符号', alt: '1984 正文双栏版式' },
      { image: '/assets/1984/mockup-box.png', caption: '实体延展：盒装展示延续封面母题', alt: '1984 书籍盒装设计' },
    ],
    ending: '封面不是小说的插图，\n而是读者进入故事前遇到的第一套权力结构。',
    reflection: '在这次独立完成的课程作业中，我负责全部设计，将自己对小说的理解落实到封面、正文和包装。我以“监控的压迫感”统一视觉表达：封面用视线与光束制造张力，内页则用较克制的版式组织阅读，让主题表达与信息清晰度同时存在。',
  },
};

function EditorialCaseStudy({ project, close }: { project: Project; close: () => void }) {
  return <BookEditorialCaseStudy story={editorialStories[project.id as 'ultraman' | '1984']} title={project.title} close={close} />;
}

function PortfolioMotion({ refreshKey }: { refreshKey: string }) {
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

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.classList.toggle('detail-open', Boolean(selected));
    if (!selected) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
    if (!dialog) return;
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>('a[href],button:not(:disabled),input,textarea,select,summary,iframe,[tabindex]:not([tabindex="-1"])')).filter(el => el.getClientRects().length && !el.closest('[inert]'));
    const frame = requestAnimationFrame(() => focusable()[0]?.focus({ preventScroll: true }));
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setSelected(null); }
      if (event.key === 'Tab') {
        const items = focusable();
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { event.preventDefault(); first?.focus(); }
      }
    };
    const retainFocus = (event: FocusEvent) => { if (!dialog.contains(event.target as Node)) focusable()[0]?.focus({ preventScroll: true }); };
    window.addEventListener('keydown', close);
    document.addEventListener('focusin', retainFocus);
    return () => { document.body.classList.remove('detail-open'); cancelAnimationFrame(frame); window.removeEventListener('keydown', close); document.removeEventListener('focusin', retainFocus); if (previousFocus?.isConnected) requestAnimationFrame(() => previousFocus.focus({ preventScroll: true })); };
  }, [selected]);

  return (
    <main>
      <PortfolioNavigation detailOpen={Boolean(selected)} />
      <div className="portfolio-home vertical-home" inert={selected ? true : undefined} aria-hidden={selected ? true : undefined}>

      <section className="firefly-hero" id="top">
        <div className="hero-light-field" aria-hidden="true"><div className="hero-light hero-light-red" /><div className="hero-light hero-light-blue" /><div className="hero-light hero-light-green" /></div>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-overline">刘纪元 / 视觉与交互设计</p>
          <h1>把复杂信息，转化为清晰体验。<br /><em>用视觉与交互，连接人与设计。</em></h1>
          <div className="hero-bottom">
            <p className="home-introduction">视觉传达设计背景，现于悉尼大学学习交互设计与电子艺术。<br />正在寻找交互与体验设计相关机会。</p>
            <a href="#work">查看项目</a>
          </div>
          <NameDoodle />
        </div>
        <div className="hero-status"><i /> AVAILABLE FOR OPPORTUNITIES</div>
      </section>

      <section className="showcase" id="work" aria-label="项目选集">
        <AmbientBreathing variant="work" randomized />
        <div className="home-project-list">
          {showcaseProjects.filter(project => project.id !== 'ultraman' && project.id !== '1984').map(project => <button key={project.id} id={`project-${project.id}`} className={`home-project home-project-${project.id}${composedHomeIds.includes(project.id) ? ' home-project-composed' : ''}`} aria-label={`查看 ${project.title} 项目`} onClick={() => setSelected(project)}>
            <span className="home-project-image"><img src={project.image} alt={project.id === 'mima' ? 'Whisper Grove Corner：地图串联 Catenary 户外光影路径与 Cube 室内共享花园的概念封面' : project.id === 'xiaoxinsi' ? '小心思 IP：小王子与小狐狸角色、Logo、包装与折页主视觉' : project.id === 'ultraman' ? 'ULTRAMAN：白色背景上的闭合书册堆叠与红白封面' : `${project.title} 项目封面`} /></span>
            {!composedHomeIds.includes(project.id) && <span className="home-project-copy"><span className="home-project-type">{project.type}</span><span className="home-project-title">{project.title}</span><span className="home-project-description">{showcaseLines[project.id]}</span><span className="home-project-tags">{homeProjectDetails[project.id].tags.map(tag => <span key={tag}>{tag}</span>)}</span><span className="home-project-meta"><span>{homeProjectDetails[project.id].year}<span className="home-project-role">{homeProjectDetails[project.id].role}</span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></span></span>}
          </button>)}
        </div>
        <section className="other-projects" id="other-projects" aria-labelledby="other-projects-title">
          <div className="other-projects-heading"><span>视觉与编辑设计</span><h2 id="other-projects-title">Other Projects</h2></div>
          <div className="other-projects-grid">{editorialHomeProjects.map(project => <button key={project.id} id={`project-${project.id}`} className={`home-project other-project other-project-${project.id}`} aria-label={`查看 ${project.title} 项目`} onClick={() => setSelected(project)}>
            <span className="other-project-copy"><span className="other-project-title">{project.title}</span><span className="other-project-description">{editorialHomePresentation[project.id].description}</span><span className="other-project-tags">{homeProjectDetails[project.id].tags.map(tag => <span key={tag}>{tag}</span>)}</span></span>
            <span className="other-project-art"><span className={project.id === '1984' ? 'other-book-crop' : 'other-stack-frame'}><img src={editorialHomePresentation[project.id].image} alt={project.id === 'ultraman' ? 'ULTRAMAN 红白封面的闭合书册堆叠' : '1984 闭合书册，封面以光束、摄像头与奔跑人物表现监视与逃离'} /></span></span>
          </button>)}</div>
        </section>
      </section>

      <section className="firefly-about" id="about">
        <AmbientBreathing variant="about" randomized />
        <div><span className="section-tag">ABOUT / 关于</span><h2>视觉是入口，<br />理解才是目的。</h2></div>
        <div className="about-text"><p>我拥有视觉传达设计背景，目前在悉尼大学学习交互与电子艺术。我关注信息如何被理解、体验如何被记住，以及视觉系统如何跨媒介保持一致。</p><div className="skill-list"><span>视觉系统</span><span>UI/UX</span><span>编辑设计</span><span>互动体验</span></div><a className="resume-link" href="/about#resume">查看完整简历</a></div>
      </section>

      <section className="portfolio-contact" id="contact"><AmbientBreathing variant="contact" randomized /><div><span>CONTACT / 联系</span><h2>聊聊设计，<br />或下一个合作机会。</h2></div><a href="mailto:Ljy4real@foxmail.com">Ljy4real@foxmail.com <span aria-hidden="true">↗</span></a></section>

      <footer className="home-footer"><AmbientBreathing variant="contact" randomized /><p>刘纪元 · Visual &amp; Interaction Design<a className="font-license-credit" href="/fonts/OPPOSans-License.txt">本网站使用 OPPO Sans 字体 · 字体许可</a><IcpFiling /></p><a href="#top">回到顶部</a></footer>
      </div>

      {selected?.id === 'mima' && <MimaCaseStudy close={() => setSelected(null)} />}
      {selected?.id === 'myco' && <MycoCaseStudy close={() => setSelected(null)} />}
      {selected?.id === 'xiaoxinsi' && <XiaoxinsiCaseStudy close={() => setSelected(null)} />}
      {selected && (selected.id === 'ultraman' || selected.id === '1984') && <EditorialCaseStudy project={selected} close={() => setSelected(null)} />}
      {selected && selected.id !== 'myco' && selected.id !== 'mima' && selected.id !== 'xiaoxinsi' && selected.id !== 'ultraman' && selected.id !== '1984' && (
        <div className="detail-shell" role="dialog" aria-modal="true" aria-label={`${selected.title} 项目详情`}>
          <button className="detail-back" onClick={() => setSelected(null)}>关闭</button>
          <article className={`detail accent-${selected.accent}`}>
            <div className="detail-meta"><span>{selected.number} · {selected.type}</span><span>精选案例</span></div>
            <figure className="detail-cover"><img src={selected.image} alt={`${selected.title} 项目封面`} /></figure>
            <p className="detail-kicker">{selected.subtitle}</p><h1>{selected.title}</h1><p className="detail-intro">{selected.intro}</p>
            {selected.sections.map((section) => <section className="detail-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
            <div className="detail-gallery">{selected.gallery.map((image, index) => <img key={image} src={image} alt={`${selected.title} 项目画面 ${index + 1}`} />)}</div>
            <button className="detail-end" onClick={() => setSelected(null)}>返回作品索引</button>
          </article>
        </div>
      )}
      <PortfolioMotion refreshKey={selected?.id ?? 'home'} />
    </main>
  );
}
