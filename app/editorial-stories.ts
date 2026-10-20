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

export const editorialStories: Record<'ultraman' | '1984', EditorialStory> = {
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
