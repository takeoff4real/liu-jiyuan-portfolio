type Category = 'featured' | 'projects' | 'experiments';
export type Project = {
  id: string; slug: string; number: string; title: string; subtitle: string; type: string;
  category: Exclude<Category, 'featured'>; featured?: boolean; image: string;
  accent: 'lime' | 'cyan' | 'coral'; intro: string;
  sections: { title: string; body: string }[]; gallery: string[];
};

export const projects: Project[] = [
  {
    id: 'mima', slug: 'whisper-grove', number: '01', title: 'Whisper Grove Corner', subtitle: 'Catenary × Cube',
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
    id: 'myco', slug: 'myco', number: '02', title: 'MyCo', subtitle: 'Pop-up × Harbour exploration',
    type: '交互与服务体验 · 进行中', category: 'projects', featured: true, accent: 'lime',
    image: '/assets/myco/cover-source-20261021.png',
    intro: '以线下快闪活动为主体，通过海港探索、集章与纪念品连接到访体验；网页版以简短试玩帮助访客理解活动。',
    sections: [], gallery: [],
  },
  {
    id: 'xiaoxinsi', slug: 'xiaoxinsi', number: '03', title: '小心思 IP', subtitle: 'Character & brand system',
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
    id: 'ultraman', slug: 'ultraman', number: '04', title: 'ULTRAMAN', subtitle: '奥特曼角色图鉴',
    type: '编辑与装帧设计 · 独立课程作业', category: 'projects', accent: 'coral', image: '/assets/binding-design/home-cover-stack-white-v1.png',
    intro: '2022 年独立完成的课程作业。因为喜欢奥特曼，我以昭和复古风为主要设计方向，将角色影像、标题字形与资料排版组织成角色图鉴。',
    sections: [
      { title: '角色信息架构', body: '不同页面围绕角色形象、人物关系与背景资料建立层级，让大量图文内容保持可读，并形成连续的角色档案。' },
      { title: '视觉系统', body: '红白主色、银色角色影像、斜切构图和重复字形贯穿全书，在统一识别中为不同角色保留各自的页面节奏。' },
    ],
    gallery: ['/assets/binding-design/gallery/03.jpg', '/assets/binding-design/gallery/08.jpg', '/assets/binding-design/gallery/12.jpg'],
  },
  {
    id: '1984', slug: '1984', number: '05', title: '1984', subtitle: 'George Orwell · Book redesign',
    type: '书籍装帧 · 独立课程作业', category: 'projects', featured: true, accent: 'coral', image: '/assets/1984/home-cover-centered-v1.png',
    intro: '围绕乔治·奥威尔《1984》的监视、逃离与审查主题，重新设计封面、书脊、封底、正文版式与实体包装，建立一套红、黑、灰与米白构成的视觉系统。',
    sections: [
      { title: '把监视转化为封面叙事', body: '摄像头、探照光束、奔跑人物与 EXIT 标识共同构成视觉线索，把“被观看”和“试图逃离”的关系集中到封面上。' },
      { title: '从平面延伸到书籍对象', body: '设计继续延伸至书脊、封底、正文、封套与盒装展示，使主题语言不仅存在于单张封面，而是贯穿阅读与拿取过程。' },
    ],
    gallery: ['/assets/1984/cover-spread.png', '/assets/1984/book-interior.png', '/assets/1984/mockup-box.png'],
  },
  {
    id: 'boogie', slug: 'boogie-woogie-grid', number: '05', title: 'Boogie Woogie Grid', subtitle: 'Time, rhythm and rules',
    type: '创意编程 · 团队项目', category: 'experiments', accent: 'lime', image: '/assets/masters/slides/idea9103/design-document/slide-01.jpg',
    intro: '从蒙德里安的网格节奏出发，用代码、时间与状态规则探索一套会持续变化的视觉系统。',
    sections: [{ title: '我的分支', body: '作品集聚焦时间驱动的动画逻辑，以及视觉元素如何在规则中产生节奏。' }],
    gallery: ['/assets/masters/slides/idea9103/design-document/slide-06.jpg', '/assets/masters/slides/idea9103/design-document/slide-10.jpg'],
  },
  {
    id: 'choice', slug: 'make-your-choice', number: '06', title: 'Make Your Choice', subtitle: 'Design research',
    type: '设计研究 · 团队项目', category: 'experiments', accent: 'cyan', image: '/assets/masters/idea9106-final/page-02.jpg',
    intro: '从研究、洞察到概念表达，记录团队如何把开放议题逐步转化为可以讨论的设计方向。',
    sections: [{ title: '过程价值', body: '重点不是展示每一页过程，而是说明关键判断如何改变问题定义和最终概念。' }],
    gallery: ['/assets/masters/idea9106-final/page-08.jpg', '/assets/masters/idea9106-final/page-15.jpg'],
  },
  {
    id: 'media', slug: 'interaction-experiments', number: '07', title: 'Interaction Experiments', subtitle: 'Sound, image and prototype',
    type: '交互媒介实验', category: 'experiments', accent: 'coral', image: '/assets/masters/slides/recording-final/slide-12.jpg',
    intro: '把声音、动态图像与交互机制组合为可体验的概念原型，测试不同媒介如何共同塑造感受。',
    sections: [{ title: '实验方法', body: '用短周期原型验证感知和反馈，再把有效的部分组织成更完整的体验。' }],
    gallery: ['/assets/masters/slides/recording-final/slide-04.jpg', '/assets/masters/slides/recording-final/slide-09.jpg'],
  },
];

export const projectHref = (project: Project) => `/projects/${project.slug}`;

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);
