'use client'
import { PortfolioImage } from './portfolio-image'

import { useEffect, useState } from 'react'
import './globals.css'
import { MasterIdea9105 } from './master-idea9105'
import { MasterIdea9106 } from './master-idea9106'
import { MasterArin6904 } from './master-arin6904'
import { MasterIdea9202 } from './master-idea9202'
import { MasterDesn9002 } from './master-desn9002'
import { MasterIdea9103 } from './master-idea9103'
import { MasterCmpn5006 } from './master-cmpn5006'
import { SlideCarousel } from './slide-carousel'
import { MasterProgress } from './master-progress'

type Project = { number: string; slug: string; title: string; titleEn: string; type: string; year: string; image: string; description?: string; active?: boolean }
const projects: Project[] = [
  { number: '01', slug: '1984', title: '《1984》书籍装帧设计', titleEn: 'Book design / George Orwell', type: '书籍装帧', year: '本科项目 · 2019–2023', image: '/assets/1984/mockup-book-clean.png', description: '以反乌托邦文本为线索，通过封面、封套、内页与装帧结构组织压迫感与阅读秩序。', active: true },
  { number: '02', slug: 'xiaoxin-ip', title: '小心思 IP / 公益品牌设计', titleEn: 'IP identity & applications', type: 'IP / 品牌设计', year: '本科项目 · 2019–2023', image: '/assets/ip-xiaoxin/macbook-brand.jpg', description: '以“小心思”的双关概念为核心，从孩子的视角理解世界，让成年人重新看见儿童想象力的丰富与自由。' },
  { number: '03', slug: 'binding-design', title: '装订与编辑设计', titleEn: 'Binding & editorial studies', type: '装订 / 编辑设计', year: '本科项目 · 2019–2023', image: '/assets/thumbs/binding-design.jpg', description: '围绕纸张、页面与装订关系展开编辑实验，在连续阅读中呈现版式、节奏与实体结构。' },
  { number: '04', slug: 'sdg-posters', title: '联合国可持续发展目标海报', titleEn: 'Poster series / SDGs', type: '海报设计', year: '本科项目 · 2019–2023', image: '/assets/sdg/gallery/06.jpg', description: '以可持续发展目标为议题，通过统一的图像语言与动态海报表达公共议题的视觉张力。' },
  { number: '05', slug: 'san-jin', title: '三金西瓜霜海报设计', titleEn: 'Campaign posters', type: '海报设计', year: '本科项目 · 2019–2023', image: '/assets/thumbs/san-jin.png', description: '以产品视觉和高对比色彩为基础，探索传统药品信息在海报中的图像化表达与传播层级。' },
  { number: '06', slug: 'photography', title: '摄影作品', titleEn: 'Photography studies', type: '摄影 / 影像', year: '本科项目 · 2019–2023', image: '/assets/thumbs/photography.jpg', description: '从城市、自然与日常观察出发，通过光线、结构和瞬间捕捉记录空间中的情绪与视觉关系。' },
  { number: '07', slug: 'hand-drawing', title: '手绘作品', titleEn: 'Illustration studies', type: '插画 / 手绘', year: '本科项目 · 2019–2023', image: '/assets/thumbs/hand-drawn.jpg', description: '以寓言、成语与人物情境为练习对象，通过手绘线条、动作和构图建立画面的叙事性。' },
  { number: '08', slug: 'other-design', title: '其它版式与视觉练习', titleEn: 'Layout & visual studies', type: '版式 / 视觉练习', year: '本科项目 · 2019–2023', image: '/assets/thumbs/other-selected.jpg', description: '将包装、图像构成与版式实验并置，通过材质、色彩与文字比例练习视觉重点的控制。' },
]
type MasterProject = { number: string; slug: string; title: string; titleEn: string; type: string; year: string; image: string; description: string; brief: string; required?: boolean }
const masterProjects: MasterProject[] = [
  { number: '01', slug: 'idea9106', title: 'Design Thinking', titleEn: 'IDEA9106', type: '第一学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '/assets/masters/idea9106-final/page-01.jpg', description: 'Make Your Choice：面向国际学生的可持续饮品选择互动体验。', brief: '课程以设计思维为框架，强调从问题理解、用户洞察和概念生成出发，通过迭代形成有依据的最终设计提案。', required: true },
  { number: '02', slug: 'idea9105', title: 'Interface Design', titleEn: 'IDEA9105', type: '第一学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '/assets/masters/aussie-emergency/main.png', description: 'AUSSIE EMERGENCY：将灾害预警、行动指引与家庭协作整合为跨设备应急体验。', brief: '课程围绕界面设计的方法、结构与交互表达展开，要求将研究洞察转化为清晰、可用且可评估的数字界面方案。', required: true },
  { number: '03', slug: 'arin6904', title: 'Games and Mixed Realities', titleEn: 'ARIN6904', type: '第一学期 / COURSE WORK', year: '硕士课程 · 2025–2027', image: '', description: '以玩家经验、游戏规则与混合现实为线索，从个人反思、游戏分析走向面向文化遗产保护的 VR 方案。', brief: '课程探索游戏机制与混合现实体验的结合，关注空间、参与方式和交互叙事如何共同构成体验。' },
  { number: '04', slug: 'idea9103', title: 'Creative Coding', titleEn: 'IDEA9103', type: '第一学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '', description: '以 Piet Mondrian 的 Broadway Boogie Woogie 为参照，将网格、色块与节奏转译为 p5.js 创意编码系统。', brief: '课程以代码作为创作媒介，探索生成、动画、规则和实时反馈在视觉与交互设计中的应用。' },
  { number: '05', slug: 'idea9202', title: 'Experience Design Studio', titleEn: 'IDEA9202', type: '第二学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '', description: 'MAP mima Mothers Club：围绕儿童探索与母亲休息，提出 Cube 与 Catenary 的沉浸式体验方案。', brief: '以 MAP mima / Multi-Arts Pavilion mima 为真实场地，经过范围研究、用户与场地分析、概念测试和客户提案，发展 GROVE 与 Whisper Grove Corner 两个最终空间方案。', required: true },
  { number: '06', slug: 'desn9002', title: 'Designing for the Digital Revolution', titleEn: 'DESN9002', type: '第二学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '', description: 'BlackBerry Horizon：从数字转型批判出发，提出面向工业数字孪生与空间计算的安全战略。', brief: '以 BlackBerry 为案例，从转型失败的研究报告、工业元宇宙海报与课堂演示，发展到包含系统架构、实施路线和伦理考量的视觉战略提案。' },
  { number: '07', slug: 'cmpn5006', title: 'Recording Portfolio', titleEn: 'CMPN5006', type: '第二学期 / FINAL WORK', year: '硕士课程 · 2025–2027', image: '', description: 'A Day Indoors：以日常室内环境为线索，组织录音产品、声音叙事、视觉目录与制作反思。', brief: '课程以录音作品集为成果形式，关注声音记录、编辑、组织与呈现，以及作品集叙事的完整性。' },
  { number: '10', slug: 'idea9301', title: 'Graduation Studio', titleEn: 'IDEA9301', type: '第三学期 / COURSE WORK', year: '硕士课程 · 2025–2027', image: '', description: '', brief: '', required: true },
  { number: '08', slug: 'desn9004', title: 'Practices of Design Innovation', titleEn: 'DESN9004', type: '第三学期 / COURSE WORK', year: '硕士课程 · 2025–2027', image: '', description: '', brief: '' },
  { number: '09', slug: 'idea9201', title: 'Experience Design Laboratory', titleEn: 'IDEA9201', type: '第三学期 / COURSE WORK', year: '硕士课程 · 2025–2027', image: '', description: '', brief: '' },
]
const detailImages = [
  { src: '/assets/1984/mockup-book-clean.png', alt: '《1984》软封效果图' },
  { src: '/assets/1984/process/page-01.jpg', alt: '《1984》项目封面与标题页' },
  { src: '/assets/1984/process/page-02.jpg', alt: '《1984》作品背景与设计说明' },
  { src: '/assets/1984/cover-spread.png', alt: '《1984》封面、书脊与封底' },
  { src: '/assets/1984/process/page-04.jpg', alt: '《1984》封套正反面设计' },
  { src: '/assets/1984/process/page-05.jpg', alt: '《1984》扉页与目录设计' },
  { src: '/assets/1984/process/page-06.jpg', alt: '《1984》前言与版权页设计' },
  { src: '/assets/1984/process/page-07.jpg', alt: '《1984》正文版式设计' },
  { src: '/assets/1984/book-interior.png', alt: '《1984》正文实体效果图' },
  { src: '/assets/1984/mockup-box.png', alt: '《1984》书籍整体效果图' },
  { src: '/assets/1984/mockup-jacket.png', alt: '《1984》封套内页效果图' },
  { src: '/assets/1984/process/page-10.jpg', alt: '《1984》封套内页展示效果图' },
  { src: '/assets/1984/process/page-13.jpg', alt: '《1984》前言与目录效果图' },
  { src: '/assets/1984/process/page-14.jpg', alt: '《1984》扉页与版权页效果图' },
]
const uniqueImages = <T extends { src: string }>(images: T[]) => images.filter((image, index, all) => all.findIndex((item) => item.src === image.src) === index)
const projectDetailData: Record<string, { lead: string; images: { src: string; alt: string; thumbSrc?: string; optimizedSrc?: string }[]; story?: { kicker: string; title: string; body: string }[] }> = {
  'xiaoxin-ip': {
    lead: '这是一项以儿童想象力为主题的 IP / 公益品牌设计，包含品牌命名、标志、包装、宣传物料和数字端应用。项目展示我如何把抽象的公益概念转译成统一、亲和且可延展的视觉系统。',
    story: [
      { kicker: '01 / PROBLEM', title: '把抽象议题转成可感知的品牌', body: '我从成年人容易忽略儿童想象力这一现实切入，将“让大人重新看见孩子的世界”转化为清晰的品牌核心，训练自己从问题定义走向视觉表达。' },
      { kicker: '02 / STRATEGY', title: '用双关概念建立识别点', body: '我把“小心思”拆解为“小孩子的心思”和“亲密的小世界”两层含义，让品牌名称同时承担记忆点、情绪和叙事入口。' },
      { kicker: '03 / SYSTEM', title: '让概念适配不同触点', body: '我将核心概念延展到包装、海报、折页和数字界面，在不同尺寸与媒介中保持轻盈、亲近且可识别，体现从概念到应用的系统化能力。' },
    ],
    images: [
      { src: '/assets/ip-xiaoxin/gallery/07-frame.jpg', alt: '小心思主题海报装裱展示' },
      { src: '/assets/ip-xiaoxin/gallery/02-mark.png', alt: '小心思 IP 标志' },
      { src: '/assets/ip-xiaoxin/gallery/01-packaging.jpg', alt: '小心思包装应用' },
      { src: '/assets/ip-xiaoxin/gallery/03-can.jpg', alt: '小心思罐装包装应用' },
      { src: '/assets/ip-xiaoxin/gallery/04-pouch.jpg', alt: '小心思袋装包装应用' },
      { src: '/assets/ip-xiaoxin/gallery/05-food-box.jpg', alt: '小心思食品盒包装应用' },
      { src: '/assets/ip-xiaoxin/gallery/06-mac-studio.jpg', alt: '小心思桌面端展示' },
      { src: '/assets/ip-xiaoxin/gallery/08-ipad.jpg', alt: '小心思平板端展示' },
      { src: '/assets/ip-xiaoxin/gallery/09-iphone.jpg', alt: '小心思手机端展示' },
      { src: '/assets/ip-xiaoxin/gallery/10-brochure.jpg', alt: '小心思折页应用' },
      { src: '/assets/ip-xiaoxin/gallery/11-macbook-air.jpg', alt: '小心思笔记本端展示' },
      { src: '/assets/ip-xiaoxin/gallery/12-macbook.jpg', alt: '小心思折页与文案展示' },
      { src: '/assets/ip-xiaoxin/gallery/13-banner.jpg', alt: '小心思悬挂横幅应用' },
      { src: '/assets/ip-xiaoxin/gallery/14-mug.jpg', alt: '小心思杯具应用' },
      { src: '/assets/ip-xiaoxin/gallery/15-watch.jpg', alt: '小心思穿戴设备应用' },
    ],
  },
  'sdg-posters': { lead: '这是一组围绕联合国可持续发展目标创作的主题海报，使用图像、文字和动态效果传达公共议题。项目展示我如何将不同议题组织成具有统一识别和视觉张力的海报系列。', story: [{ kicker: '01 / WORK', title: '一组以公共议题为主题的动态海报', body: '作品围绕联合国可持续发展目标展开，将海报作为静态与动态兼具的传播载体。不同主题通过图像、文字与动势建立共同识别。' }, { kicker: '02 / APPROACH', title: '用统一规则承载不同议题', body: '我在系列中控制版式、色彩和图像关系，让不同主题保持差异的同时形成整体。动态效果服务于信息强调与观看节奏，而不是额外装饰。' }, { kicker: '03 / PRESENTATION', title: '先看系列关系，再进入单张动效', body: '页面先加载轻量静态首帧，浏览者可以先比较整体视觉系统；点击单张后再加载动态版本，重点观察海报的层级、节奏和议题表达。' }], images: [6, 1, 2, 3, 4, 5, 7].map((number) => { const id = String(number).padStart(2, '0'); const originalAsset = `${id}.gif`; const optimizedAsset = number === 4 || number === 6 ? `${id}-optimized.webp` : undefined; return { src: `/assets/sdg/${originalAsset}`, optimizedSrc: optimizedAsset ? `/assets/sdg/${optimizedAsset}` : undefined, thumbSrc: `/assets/sdg/gallery/${id}.jpg`, alt: `联合国可持续发展目标海报 ${id}` } }) },
  'san-jin': { lead: '这是一组围绕三金西瓜霜产品创作的宣传海报，使用产品信息、图像和高对比色彩构成传播画面。项目展示我如何在同一产品主题下建立多种视觉表达，同时保持信息清晰和品牌识别。', story: [{ kicker: '01 / WORK', title: '一组围绕产品主题的海报设计练习', body: '作品以三金西瓜霜为视觉对象，使用多张海报探索产品信息、图像构成和文字层级在同一主题下的不同表达。' }, { kicker: '02 / APPROACH', title: '在强烈对比中保持信息清楚', body: '我通过红黑、珊瑚红和紫色等不同色彩方向，比较画面的注意力分配，同时保留产品名称与主要信息的可读性。' }, { kicker: '03 / PRESENTATION', title: '从主视觉到系列差异', body: '页面以红黑海报作为首图，再展示其余画面，方便招聘者先看到最明确的视觉判断，再比较我对色彩、构图和传播层级的控制。' }], images: [{ src: '/assets/san-jin/poster-02.png', alt: '三金西瓜霜红黑海报' }, { src: '/assets/san-jin/poster-01.png', alt: '三金西瓜霜珊瑚红海报' }, { src: '/assets/san-jin/poster-03.png', alt: '三金西瓜霜紫色海报' }] },
  'hand-drawing': { lead: '这是一组围绕寓言与成语故事完成的手绘插画，表现人物动作、情绪和叙事瞬间。项目展示我从零构建画面主体、情境氛围和视觉叙事的能力。', story: [{ kicker: '01 / WORK', title: '一组以寓言与成语为线索的手绘插画', body: '作品通过人物、动作和场景呈现叙事片段，是我本科阶段对线条、构图和画面叙事的视觉练习。' }, { kicker: '02 / APPROACH', title: '从故事理解走向画面组织', body: '我将文字情境拆解为人物关系、动作和视觉焦点，再用手绘线条与明暗关系组织阅读顺序。' }, { kicker: '03 / PRESENTATION', title: '观察造型、动作与叙事节奏', body: '详情页按图像序列展示完整练习，重点呈现我如何建立主体、控制画面重心，并让单幅画面承载清晰的情境。' }], images: Array.from({ length: 10 }, (_, index) => ({ src: `/assets/hand-drawing/gallery/drawing-${String(index + 1).padStart(2, '0')}.jpg`, alt: `手绘作品 ${String(index + 1).padStart(2, '0')}` })) },
  'photography': { lead: '这是一组以城市、自然、动物和日常观察为主题的摄影作品，结合黑白影像与彩色画面记录不同空间中的光线、结构和情绪。项目展示我通过取景、光线、色彩和瞬间捕捉建立视觉叙事的能力。', story: [{ kicker: '01 / WORK', title: '一组来自日常观察的摄影作品', body: '作品记录城市、自然、动物与生活场景中的光线和结构，包含黑白与彩色影像，是本科阶段的摄影与视觉观察练习。' }, { kicker: '02 / APPROACH', title: '用取景和光线建立观看关系', body: '我通过留白、对比、几何结构和瞬间捕捉组织画面，让环境本身成为叙事的一部分，而不是只记录对象。' }, { kicker: '03 / PRESENTATION', title: '让影像之间形成观看节奏', body: '详情页采用瀑布流保留不同画幅的原始比例，招聘者可以连续比较我对空间、色彩和情绪的控制。' }], images: Array.from({ length: 24 }, (_, index) => ({ src: `/assets/photography/gallery/${String(index + 1).padStart(2, '0')}.jpg`, alt: `摄影作品 ${String(index + 1).padStart(2, '0')}` })) },
  'binding-design': { lead: '这是一项围绕奥特曼系列展开的装订与编辑设计，通过角色资料、影像与文字编排建立一条从初代到爱迪的阅读线索。项目展示我如何处理长篇信息、人物顺序和系列视觉识别，让内容在纸面上形成连续的编辑节奏。', story: [{ kicker: '01 / WORK', title: '一套围绕奥特曼系列的装订与编辑设计', body: '作品将角色资料、图像和文字整理为连续的纸面阅读体验，按初代到爱迪的出场顺序组织内容。' }, { kicker: '02 / APPROACH', title: '把系列信息转成可阅读的秩序', body: '我通过人物顺序、版面节奏和装订关系建立内容结构，让长篇系列材料既保持识别度，也能被逐页理解。' }, { kicker: '03 / PRESENTATION', title: '观察编辑系统如何落到实体页面', body: '页面以横向 Slide 展示完整设计，重点呈现封面、页面编排、图文关系与连续翻阅中的视觉节奏。' }], images: ['01.jpg','09.jpg','10.jpg','11.jpg','12.jpg','15.jpg','16.jpg','02.jpg','03.jpg','06.jpg','07.jpg','13.jpg','14.jpg','04.jpg','05.jpg','08.jpg'].map((name, index) => ({ src: `/assets/binding-design/gallery/${name}`, alt: `奥特曼系列装订与编辑设计页面 ${String(index + 1).padStart(2, '0')}` })) },
  'app-design': { lead: '这是一套面向电商浏览与购物流程的 APP 页面设计，包含首页、搜索、商品、购物袋和账户管理等界面。项目展示我如何从信息架构、用户任务和页面状态出发，建立清晰且可复用的界面系统。', story: [{ kicker: '01 / STRUCTURE', title: '先梳理用户要完成的任务', body: '我将首页、搜索、分类和商品详情拆解为连续的信息路径，重点处理入口、层级和返回关系，让用户能够快速理解下一步操作。' }, { kicker: '02 / FLOW', title: '覆盖关键使用状态', body: '我围绕浏览、加入购物袋、订单管理和账户登录等场景组织页面，使界面设计不仅停留在单张视觉稿，而是回应完整的使用流程。' }, { kicker: '03 / UI SYSTEM', title: '在统一规则中保持页面差异', body: '我通过导航、卡片、文字层级和按钮状态建立可复用的界面规则，同时根据不同任务调整信息密度，体现 UI 设计与交互逻辑的结合。' }], images: Array.from({ length: 17 }, (_, index) => ({ src: `/assets/gunfetch-app/gallery/${String(index + 1).padStart(2, '0')}.jpg`, alt: `APP 页面设计练习 ${String(index + 1).padStart(2, '0')}` })) },
  'other-design': { lead: '这是由包装视觉、图像构成和版式实验组成的综合设计练习，涉及茶包装、药品视觉和主题图像等不同方向。项目展示我如何通过材质、色彩、文字和图像比例控制画面的视觉重点。', story: [{ kicker: '01 / WORK', title: '一组包装、图像构成与版式练习', body: '作品并置茶包装、药品视觉和主题图像等不同练习，记录我在本科阶段对包装呈现、图像构成和版式组织的探索。' }, { kicker: '02 / APPROACH', title: '在不同媒介中控制视觉重点', body: '我通过材质感、色彩关系、文字比例和图像位置建立主次，练习让不同主题在有限画面中保持清晰。' }, { kicker: '03 / PRESENTATION', title: '比较不同题材下的视觉判断', body: '详情页保留选定作品并按瀑布流展示，便于招聘者快速比较我在包装、图形和版式之间切换时的执行能力。' }], images: Array.from({ length: 7 }, (_, index) => ({ src: `/assets/other-selected/gallery/${String(index + 1).padStart(2, '0')}.jpg`, alt: `其它版式与视觉练习 ${String(index + 1).padStart(2, '0')}` })) },
}

// Keep the original GIFs as the source of truth, but use the existing lightweight
// animated WebP derivatives for the two posters that already have them.
projectDetailData['sdg-posters'].images = projectDetailData['sdg-posters'].images.map((image) => image.optimizedSrc ? { ...image, src: image.optimizedSrc } : image)

export function BindingDesignDetail({ onBack, onSwitch }: { onBack: () => void; onSwitch: (slug: string) => void }) {
  const images = uniqueImages(projectDetailData['binding-design'].images)
  return <section className="detail-page"><div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>PROJECT 03 / 08</span><span>装订 / 编辑设计</span></div><div className="detail-heading"><div><p className="kicker">03 / EDITORIAL SERIES</p><h1>装订与<br /><em>编辑设计</em></h1></div><p className="detail-lead">这是一项围绕奥特曼系列展开的装订与编辑设计，通过角色资料、影像与文字编排建立一条从初代到爱迪的阅读线索。项目展示我如何处理长篇信息、人物顺序和系列视觉识别，让内容在纸面上形成连续的编辑节奏。</p></div><div className="detail-facts"><span><b>项目类型</b>装订 / 编辑设计</span><span><b>项目时间</b>本科项目 · 2019–2023</span><span><b>展示方式</b>横向 Slide · 每次 2 张</span></div><SlideCarousel slides={images} className="binding-design-slide-stack" /><div className="detail-end"><span>END OF PROJECT 03</span><button onClick={onBack}>查看全部作品 <span>↗</span></button><ProjectSwitch currentSlug="binding-design" onSwitch={onSwitch} /></div></section>
}
function LightboxMouseControls() {
  useEffect(() => {
    const addControls = () => {
      document.querySelectorAll<HTMLElement>('.lightbox').forEach((lightbox) => {
        if (lightbox.querySelector('.lightbox-nav')) return
        const createButton = (side: 'prev' | 'next', label: string, key: 'ArrowLeft' | 'ArrowRight') => {
          const button = document.createElement('button')
          button.type = 'button'
          button.className = `lightbox-nav lightbox-nav-${side}`
          button.setAttribute('aria-label', label)
          button.textContent = side === 'prev' ? '←' : '→'
          button.addEventListener('click', (event) => { event.stopPropagation(); window.dispatchEvent(new KeyboardEvent('keydown', { key })) })
          lightbox.appendChild(button)
        }
        createButton('prev', '上一张', 'ArrowLeft')
        createButton('next', '下一张', 'ArrowRight')
      })
    }
    addControls()
    const observer = new MutationObserver(addControls)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])
  return null
}
export function Header({ onProjects }: { onProjects: () => void }) { return <><header className="site-header"><a className="wordmark" href="#top" aria-label="返回首页">LIU JIYUAN<span>.</span></a><nav aria-label="主导航"><a href="#undergraduate-work" onClick={onProjects}>作品 / Work</a><a href="#about">关于 / About</a></nav><a className="contact-link" href="mailto:Ljy4real@foxmail.com">联系 / Contact <span aria-hidden="true">↗</span></a></header><LightboxMouseControls /><MasterProgress label="MASTER / DETAIL" /><MasterProgress label="UNDERGRAD / DETAIL" selector=".detail-page:not(.master-detail)" /></> }
export function ResumePanel({ onClose }: { onClose: () => void }) { const [closing, setClosing] = useState(false); useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = '' } }, []); const requestClose = () => { if (closing) return; setClosing(true); window.setTimeout(onClose, 420) }; return <div className={closing ? 'resume-overlay is-closing' : 'resume-overlay'} role="dialog" onClick={requestClose} aria-modal="true" aria-labelledby="resume-panel-title"><div className="resume-panel" onClick={(event) => event.stopPropagation()}><div className="resume-panel-top"><span>CURRICULUM VITAE / 2026</span><button onClick={requestClose} aria-label="关闭简历">关闭 ×</button></div><div className="resume-intro"><PortfolioImage src="/assets/resume-profile.jpg" alt="刘纪元证件照" /><div><p className="kicker">LIU JIYUAN / 刘纪元</p><h2 id="resume-panel-title">视觉 / 交互设计师</h2><p>湖北文理学院视觉传达设计本科，悉尼大学交互设计与电子艺术硕士在读。</p><div className="resume-contact"><a href="mailto:Ljy4real@foxmail.com">Ljy4real@foxmail.com</a><span>15549066877</span><span>期望城市：武汉</span></div></div></div><div className="resume-body"><section><p className="kicker">PROFILE / 个人优势</p><p>具备视觉传达与交互设计背景，熟悉 UI 设计、品牌全案与用户调研方法，能够独立完成从概念到界面的完整设计。熟练使用 AI 生图与作图工具，具备 Vibe Coding 能力及基础前端开发能力。</p><p>对新潮事物敏感，热衷探索新兴电子产品与前沿技术；在校期间参与商业品牌合作与政府数字艺术体验项目，设计作品曾获高分评级并被教授选为教学范例。</p></section><section><p className="kicker">SKILLS / 专业技能</p><div className="resume-skill-grid"><div><b>设计工具</b><span>Figma · InDesign · Illustrator · Photoshop · CorelDRAW · Sketch · AE · Procreate</span></div><div><b>交互与前端</b><span>JavaScript · HTML5 · 交互原型 · 用户流程</span></div><div><b>视觉与摄影</b><span>摄影、影像调色、Lightroom / Photoshop 后期</span></div><div><b>研究方法</b><span>AEIOU 观察法、共情图、用户旅程图、服务蓝图</span></div></div></section><section><p className="kicker">EDUCATION / 教育经历</p><article className="resume-entry"><div><b>悉尼大学</b><span>交互设计与电子艺术 · 硕士</span></div><time>2025–2027</time><p>专业课程包括设计思维、数字革命设计、创意编程、界面设计、体验设计、游戏与混合现实、音频作品制作。参与校园生态平台与 Lake Macquarie City Council MAP mima 合作项目。</p></article><article className="resume-entry"><div><b>湖北文理学院</b><span>视觉传达设计 · 本科</span></div><time>2019–2023</time><p>专业成绩优异，平均分 87；参与品牌全案、数字界面、包装、海报及联合国可持续发展目标相关项目。</p></article></section><section className="resume-columns"><div><p className="kicker">AWARDS / 荣誉奖项</p><p>大广赛三等奖<br />校内设计大赛二等奖<br />USYD ADP Innovation &amp; Design Excellence Award<br />优秀教学案例入选（USYD ADP）<br />毕业设计优秀作品奖<br />优秀毕业论文</p></div><div><p className="kicker">QUALIFICATION / 资格证书</p><p>普通话二级甲等<br />Pearson Test of English 63分<br />计算机一级</p></div></section><section><p className="kicker">INTERESTS / 兴趣爱好</p><p>关注前沿科技、VR / AR 硬件、智能穿戴设备与 AIGC；通过空间摄影记录城市建筑、室内光影与人文触点，并持续探索游戏与交互艺术的视觉表达。</p></section></div><div className="resume-panel-footer"><a href="/刘纪元-视觉_交互设计.pdf" download>下载原始简历 PDF ↓</a></div></div></div> }
function MasterWorkSection({ onOpenMaster }: { onOpenMaster: (slug: string) => void }) { const [openSemesters, setOpenSemesters] = useState<string[]>([]); const translations: Record<string, string> = { arin6904: '游戏与混合现实', idea9103: '创意编程', idea9105: '界面设计', idea9106: '设计思维', desn9002: '数字革命设计', cmpn5006: '录音作品集', idea9202: '体验设计工作室', desn9004: '设计创新实践', idea9201: '体验设计实验室', idea9301: '毕业设计工作室' }; const semesters = [{ id: 'semester-1', label: '第一学期', courses: masterProjects.slice(0, 4) }, { id: 'semester-2', label: '第二学期', courses: masterProjects.slice(4, 7) }, { id: 'semester-3', label: '第三学期', courses: masterProjects.slice(7) }]; useEffect(() => { const nodes = Array.from(document.querySelectorAll<HTMLElement>('.master-semester')); if (!nodes.length) return; const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { const id = (entry.target as HTMLElement).dataset.semester; if (id) setOpenSemesters((current) => current.includes(id) ? current : [...current, id]) } }), { threshold: .35 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect() }, []); useEffect(() => { const nodes = Array.from(document.querySelectorAll<HTMLElement>('.master-semester, .master-semester .master-row')); nodes.forEach((node) => node.classList.add('scroll-reveal')); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: .12, rootMargin: '-6% 0px -6% 0px' }); nodes.forEach((node) => observer.observe(node)); return () => { observer.disconnect(); nodes.forEach((node) => node.classList.remove('scroll-reveal', 'is-visible')) } }, [openSemesters.length]); return <section className="master-section" id="master-work" aria-labelledby="master-heading"><div className="section-intro"><p className="kicker">MASTER’S STUDIES / 2025–2027</p><h2 id="master-heading">硕士作品与<br /><em>论文研究。</em></h2><p className="section-description">按照学习阶段建立课程目录。每门课程将作为独立的二级目录，作品与研究材料将在后续整理后加入。</p></div><div className="master-semesters-grid">{semesters.map((semester) => { const isOpen = openSemesters.includes(semester.id); return <section className={isOpen ? 'master-semester is-open' : 'master-semester'} data-semester={semester.id} key={semester.id}><div className="semester-toggle" aria-hidden="true"><span><b>{semester.label}</b><small>{String(semester.courses.length).padStart(2, '0')} COURSES</small></span></div>{isOpen && <div className="master-list" id={`${semester.id}-courses`}>{semester.courses.map((project) => <article className={project.required ? 'master-row is-required' : 'master-row'} key={project.slug}><span className="project-number">{project.number}</span><div className="master-project-copy"><p className="project-description">课程内容待整理</p></div><div className="master-title-block"><h3><span className="project-title-link course-title"><span className="course-title-en">{project.title}</span><span className="course-title-zh">{translations[project.slug]}</span></span></h3><p>{project.titleEn}</p></div><div className="project-meta"><span>{project.required ? '必修 / CORE' : '课程目录'}</span><span>{project.year}</span></div></article>)}</div>}</section> })}</div></section> }
function MasterWorkSectionV2({ onOpenMaster }: { onOpenMaster: (slug: string) => void }) {
  const [openSemesters, setOpenSemesters] = useState<string[]>(['semester-1', 'semester-2', 'semester-3'])
  const translations: Record<string, string> = {
    arin6904: '游戏与混合现实',
    idea9103: '创意编程',
    idea9105: '界面设计',
    idea9106: '设计思维',
    desn9002: '数字革命设计',
    cmpn5006: '录音作品集',
    idea9202: '体验设计工作室',
    desn9004: '设计创新实践',
    idea9201: '体验设计实验室',
    idea9301: '毕业设计工作室',
  }
  const semesters = [
    { id: 'semester-1', label: '第一学期', courses: masterProjects.slice(0, 4) },
    { id: 'semester-2', label: '第二学期', courses: masterProjects.slice(4, 7) },
    { id: 'semester-3', label: '第三学期', courses: masterProjects.slice(7) },
  ]

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.master-semester'))
    if (!nodes.length) return
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).dataset.semester
        if (id) setOpenSemesters((current) => current.includes(id) ? current : [...current, id])
      }
    }), { threshold: .35 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.master-semester-v2, .master-semester-v2 .master-row'))
    nodes.forEach((node) => node.classList.add('scroll-reveal'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: .12, rootMargin: '-6% 0px -6% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => {
      observer.disconnect()
      nodes.forEach((node) => node.classList.remove('scroll-reveal', 'is-visible'))
    }
  }, [openSemesters.length])

  return (
    <section className="master-section" id="master-work" aria-labelledby="master-heading">
      <div className="section-intro">
        <p className="kicker">MASTER’S STUDIES / 2025–2027</p>
        <h2 id="master-heading">硕士作品与<br /><em>论文研究。</em></h2>
        <p className="section-description">硕士阶段，我开始把用户研究置于视觉形式之前：先理解真实的人、情境与需求，再用设计回应问题。这个转变让我不只关注作品是否好看，也关注它是否清晰、可用，并真正支持用户完成目标。</p>
      </div>
      <div className="master-semesters-grid">
        {semesters.map((semester) => {
          const isOpen = openSemesters.includes(semester.id)
          const isThirdSemester = semester.id === 'semester-3'
          return (
            <section className={isOpen ? 'master-semester master-semester-v2 is-open' : 'master-semester master-semester-v2'} data-semester={semester.id} key={semester.id}>
              <div className="semester-toggle" aria-hidden="true">
                <span><b>{semester.label}</b><small>{String(semester.courses.length).padStart(2, '0')} COURSES</small></span>
              </div>
              {isOpen && <div className="master-list" id={`${semester.id}-courses`}>
                {semester.courses.map((project) => {
                  const finalWork = !isThirdSemester && (project.slug === 'idea9105' || project.slug === 'idea9106')
                  return (
                    <article
                      className={project.required ? 'master-row is-required' : 'master-row'}
                      key={project.slug}
                      role={finalWork ? 'link' : undefined}
                      tabIndex={finalWork ? 0 : undefined}
                      onClick={() => finalWork && onOpenMaster(project.slug)}
                      onKeyDown={(event) => {
                        if (finalWork && (event.key === 'Enter' || event.key === ' ')) {
                          event.preventDefault()
                          onOpenMaster(project.slug)
                        }
                      }}
                    >
                      <span className="project-number">{project.number}</span>
                      <div className="master-project-copy">
                        <p className="project-description">{project.description || ''}</p>
                      </div>
                      <div className="master-title-block">
                        <h3><span className="project-title-link course-title"><span className="course-title-en">{project.title}</span><span className="course-title-zh">{translations[project.slug]}</span></span></h3>
                        <p>{project.titleEn}</p>
                      </div>
                      <div className="project-meta">
                        <span>{project.required ? '必修 / CORE' : '课程目录'}</span>
                        <span>{project.year}</span>
                      </div>
                    </article>
                  )
                })}
              </div>}
            </section>
          )
        })}
      </div>
    </section>
  )
}
function DirectoryProgress() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const undergraduate = document.getElementById('undergraduate-work')
      const master = document.getElementById('master-work')
      if (!undergraduate || !master) return
      const start = undergraduate.getBoundingClientRect().top + window.scrollY
      const end = master.getBoundingClientRect().bottom + window.scrollY
      const viewportTop = window.scrollY
      const viewportBottom = viewportTop + window.innerHeight
      const isInDirectory = viewportBottom > start + 120 && viewportTop < end - 120
      const range = Math.max(1, end - start - window.innerHeight)
      setVisible(isInDirectory)
      setProgress(Math.min(1, Math.max(0, (viewportTop - start) / range)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!visible) return null
  return <aside className="directory-progress" aria-label="作品目录浏览进度"><span className="directory-progress-label">INDEX</span><div className="directory-progress-track"><i style={{ height: `${Math.max(8, progress * 100)}%` }} /></div><span className="directory-progress-count">01—09</span></aside>
}
function Home({ onOpenProject, onOpenMaster }: { onOpenProject: (slug: string) => void; onOpenMaster: (slug: string) => void }) {
  useEffect(() => { const button = document.createElement('button'); button.className = 'top-button'; button.type = 'button'; button.setAttribute('aria-label', '回到顶部'); button.innerHTML = '回到顶部 <span aria-hidden="true">↑</span>'; const update = () => { const section = document.getElementById('undergraduate-work'); const threshold = section ? Math.max(360, section.offsetTop - 140) : 500; button.classList.toggle('is-visible', window.scrollY > threshold); button.tabIndex = window.scrollY > threshold ? 0 : -1; button.setAttribute('aria-hidden', String(window.scrollY <= threshold)) }; const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }); button.addEventListener('click', onClick); document.body.appendChild(button); update(); window.addEventListener('scroll', update, { passive: true }); return () => { button.removeEventListener('click', onClick); window.removeEventListener('scroll', update); button.remove() } }, [])
  const [resumeOpen, setResumeOpen] = useState(false); const visible = projects
  useEffect(() => { const list = document.querySelector('.master-section'); if (!list) return; const openCourse = (event: Event) => { const target = event.target as HTMLElement; const row = target.closest('.master-row'); if (!row || row.getAttribute('role') === 'link') return; const code = row.querySelector('.master-title-block > p')?.textContent?.trim(); const course = masterProjects.find((item) => item.titleEn === code); if (course) onOpenMaster(course.slug) }; list.addEventListener('click', openCourse); return () => list.removeEventListener('click', openCourse) }, [onOpenMaster])
  useEffect(() => { const list = document.querySelector('.work-section .project-list'); if (!list) return; const openRow = (event: Event) => { const target = event.target as HTMLElement; if (target.closest('button,a')) return; const row = target.closest('.project-row'); const title = row?.querySelector('.project-title-link')?.textContent; const project = projects.find((item) => item.title === title); if (project) onOpenProject(project.slug) }; list.addEventListener('click', openRow); return () => list.removeEventListener('click', openRow) }, [onOpenProject])
  useEffect(() => { const targets = document.querySelectorAll<HTMLElement>('.hero, .degree-entries, .work-section, .project-row, .master-section, .master-row, .about-section, .site-footer'); targets.forEach((target) => target.classList.add('scroll-reveal')); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.08, rootMargin: '-6% 0px -6% 0px' }); targets.forEach((target) => observer.observe(target)); return () => { observer.disconnect(); targets.forEach((target) => target.classList.remove('scroll-reveal', 'is-visible')) } }, [])
  return <><DirectoryProgress /><section className="hero" id="top"><div className="hero-meta"><span>PORTFOLIO / 2026</span><span>VISUAL COMMUNICATION</span><button className="resume-logo" onClick={() => setResumeOpen(true)} aria-label="打开在线简历">CV<span>↗</span></button></div><div className="hero-main"><p className="kicker">刘纪元 / LIU JIYUAN</p><h1>让视觉<br /><em>留下证据。</em></h1><p className="hero-note">视觉 / 交互设计师，关注书籍、海报、品牌与数字体验。<br />以图像为主角，以秩序组织叙事。</p></div><a className="scroll-cue" href="#work">向下浏览 <span>↓</span></a><div className="hero-index">01 <span>/</span> 08</div></section><section className="degree-entries" aria-label="作品阶段"><a className="degree-entry degree-entry-active" href="#undergraduate-work"><span className="kicker">01 / UNDERGRADUATE</span><strong>本科作品</strong><span>视觉传达 / 2019–2023 ↘</span></a><a className="degree-entry" href="#master-work"><span className="kicker">02 / MASTER’S STUDIES</span><strong>硕士作品</strong><span>交互设计、研究与论文 ↘</span></a></section><section className="work-section" id="undergraduate-work"><div className="section-intro"><h2>作品目录<span>。</span></h2><p className="section-description">先展示能够代表我核心能力的书籍、品牌与 IP、海报和编辑设计，再延伸到摄影、手绘与视觉练习；进入详情页后，可以看到作品性质、设计判断和最终呈现。</p></div><div className="project-list">{visible.map((project) => <article className={project.active ? 'project-row project-active' : 'project-row'} key={project.slug}><span className="project-number">{project.number}</span><div className="project-image-wrap"><PortfolioImage src={project.image} alt={`${project.title}预览`} loading={project.number === '01' ? 'eager' : 'lazy'} fetchPriority={project.number === '01' ? 'high' : 'auto'} /><button className="view-project" onClick={() => onOpenProject(project.slug)} aria-label={`打开${project.title}`}>查看项目 <span>↗</span></button></div><div className="project-copy"><h3><button className="project-title-link" onClick={() => onOpenProject(project.slug)}>{project.title}</button></h3><p>{project.titleEn}</p>{project.description && <p className="project-description">{project.description}</p>}</div><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div></article>)}</div></section><MasterWorkSectionV2 onOpenMaster={onOpenMaster} /><section className="about-section" id="about"><p className="kicker">PROFILE / RESUME</p><div className="about-grid"><h2>把复杂的<br /><em>信息变得清楚。</em></h2><div><p>视觉 / 交互设计师，具备视觉传达与交互设计背景，熟悉品牌全案、UI 设计、用户研究与基础前端原型开发。</p><div className="about-facts"><span>教育经历 / EDUCATION</span><span>悉尼大学 · 交互设计与电子艺术 · 硕士 · 2025–2027</span><span>湖北文理学院 · 视觉传达设计 · 本科 · 2019–2023</span><span>Figma · Adobe · JavaScript</span></div><div className="about-actions"><a className="text-link" href="mailto:Ljy4real@foxmail.com">Ljy4real@foxmail.com <span>↗</span></a><a className="text-link" href="/刘纪元-视觉_交互设计.pdf" download>下载简历 <span>↓</span></a></div></div></div></section><footer className="site-footer"><span>LIU JIYUAN / PORTFOLIO</span><span>© 2026</span></footer>{resumeOpen && <ResumePanel onClose={() => setResumeOpen(false)} />}</>
}
export function ProjectDetail({ onBack, onSwitch }: { onBack: () => void; onSwitch: (slug: string) => void }) {
  const images = uniqueImages(detailImages); const [lightbox, setLightbox] = useState<number | null>(null); const [gridMode, setGridMode] = useState(false); const current = lightbox === null ? null : images[lightbox]
  useEffect(() => { if (lightbox === null) return; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(null); if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % images.length); if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? images.length - 1 : (value - 1 + images.length) % images.length) }; window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' } }, [lightbox, images.length])
  return <section className="detail-page"><div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>PROJECT 01 / 08</span><span>BOOK DESIGN</span></div><div className="detail-heading"><div><p className="kicker">01 / EDITORIAL OBJECT</p><h1>《1984》<br /><em>书籍装帧设计</em></h1></div><p className="detail-lead">这是一项以乔治·奥威尔《1984》为文本基础的书籍装帧设计，包含封面、封套、内页和实体效果。项目展示我如何把文学主题转译为可阅读的书籍系统，并兼顾概念表达、信息组织与实体阅读体验。</p></div><div className="detail-facts"><span><b>项目类型</b>书籍装帧 / 编辑设计</span><span><b>项目时间</b>本科项目 · 2019–2023</span><span><b>设计内容</b>封面、封套、内页、效果图</span></div><GalleryToggle gridMode={gridMode} onToggle={() => setGridMode((value) => !value)} /><div className={gridMode ? "gallery gallery-grid-9" : "gallery"}>{images.map((image, index) => <button className={index === 0 ? 'gallery-item gallery-wide' : 'gallery-item'} key={image.src} onClick={() => setLightbox(index)} aria-label={`全屏查看：${image.alt}`}><PortfolioImage src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} /><span className="zoom-hint">放大 <b>↗</b></span></button>)}</div><div className="detail-end"><span>END OF PROJECT 01</span><button onClick={onBack}>查看全部作品 <span>↗</span></button><ProjectSwitch currentSlug="1984" onSwitch={onSwitch} /></div>{current && <div className="lightbox" role="dialog" aria-modal="true" aria-label="全屏作品查看" onClick={() => setLightbox(null)}><button className="close-lightbox" onClick={() => setLightbox(null)} aria-label="关闭全屏查看">×</button><PortfolioImage src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption">{String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {current.alt}<span>← → 切换　ESC 关闭</span></div></div>}</section>
}
function GalleryToggle({ gridMode, onToggle }: { gridMode: boolean; onToggle: () => void }) { return <button className="gallery-toggle" onClick={onToggle} aria-pressed={gridMode} aria-label={gridMode ? '切换为 1×1 大图模式' : '切换为 9×9 网格模式'}>{gridMode ? '1×1' : '9×9'}<span>{gridMode ? '大图' : '网格'}</span></button> }
function ProjectSwitch({ currentSlug, onSwitch }: { currentSlug: string; onSwitch: (slug: string) => void }) {
  const [atBottom, setAtBottom] = useState(false)
  useEffect(() => { const update = () => setAtBottom(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 160); update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) } }, [])
  const index = projects.findIndex((item) => item.slug === currentSlug); const previous = index > 0 ? projects[index - 1] : null; const nextProject = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null
  return <nav className={atBottom ? 'detail-switch detail-switch-bottom' : 'detail-switch detail-switch-floating'} aria-label="切换项目">{previous ? <button onClick={() => onSwitch(previous.slug)}>← {previous.title}</button> : <span /> }<span>{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>{nextProject ? <button onClick={() => onSwitch(nextProject.slug)}>{nextProject.title} →</button> : <span />}</nav>
}
export function ProjectGalleryDetail({ slug, onBack, onSwitch }: { slug: string; onBack: () => void; onSwitch: (slug: string) => void }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0]
  const detail = projectDetailData[slug] ?? { lead: '这是一个以视觉组织和执行为核心的设计项目。项目展示我如何从内容理解出发，建立清晰的视觉层级并完成可交付的设计呈现。', images: [{ src: project.image, alt: `${project.title}预览` }] }
  const images = uniqueImages(detail.images)
  const [lightbox, setLightbox] = useState<number | null>(null); const [gridMode, setGridMode] = useState(false); const current = lightbox === null ? null : images[lightbox]
  const useBindingSlide = slug === 'binding-design' && !gridMode
  useEffect(() => { document.body.classList.toggle('is-1984-detail', slug === '1984'); return () => document.body.classList.remove('is-1984-detail') }, [slug])
  useEffect(() => { if (lightbox === null) return; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(null); if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % images.length); if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? images.length - 1 : (value - 1 + images.length) % images.length) }; window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' } }, [lightbox, images.length])
  return <section className="detail-page"><div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>PROJECT {project.number} / 08</span><span>{project.type}</span></div><div className="detail-heading"><div><p className="kicker">{project.number} / SELECTED PROJECT</p><h1>{project.title}</h1></div><p className="detail-lead">{detail.lead}</p></div><div className="detail-facts"><span><b>项目类型</b>{project.type}</span><span><b>项目时间</b>{project.year}</span><span><b>能力侧重</b>概念表达、信息组织与视觉执行</span></div>{slug === 'sdg-posters' && <p className="gif-notice">GIF MOTION SERIES / 本系列海报均为 GIF 动态图，可点击查看动态效果。</p>}{detail.story && <div className="detail-story">{detail.story.map((item) => <article key={item.kicker}><p className="kicker">{item.kicker}</p><h2>{item.title}</h2><p>{item.body}</p></article>)}</div>}<GalleryToggle gridMode={gridMode} onToggle={() => setGridMode((value) => !value)} /><div className={gridMode ? "gallery gallery-grid-9" : (slug === 'sdg-posters' ? 'gallery gallery-poster' : slug === 'photography' ? 'gallery gallery-photography' : slug === 'packaging-visual' ? 'gallery gallery-packaging' : 'gallery')}>{images.map((image, index) => <button className={index === 0 && slug !== 'sdg-posters' && slug !== 'photography' && slug !== 'packaging-visual' ? 'gallery-item gallery-wide' : 'gallery-item'} key={image.src} onClick={() => setLightbox(index)} aria-label={`全屏查看：${image.alt}`}><PortfolioImage src={image.thumbSrc ?? image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} /><span className="zoom-hint">放大 <b>↗</b></span></button>)}</div><div className="detail-end"><span>END OF PROJECT {project.number}</span><button onClick={onBack}>查看全部作品 <span>↗</span></button><ProjectSwitch currentSlug={slug} onSwitch={onSwitch} /></div>{current && <div className="lightbox" role="dialog" aria-modal="true" aria-label="全屏作品查看" onClick={() => setLightbox(null)}><button className="close-lightbox" onClick={() => setLightbox(null)} aria-label="关闭全屏查看">×</button><PortfolioImage src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption">{String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} · {current.alt}<span>← → 切换　ESC 关闭</span></div></div>}</section>
}
export function MasterDetail({ slug, onBack }: { slug: string; onBack: () => void }) { const project = masterProjects.find((item) => item.slug === slug) ?? masterProjects[0]; const data: Record<string, { lead: string; images: { src: string; alt: string }[]; link?: { href: string; label: string }; story?: { kicker: string; title: string; body: string }[] }> = {
  idea9105: { lead: 'AUSSIE EMERGENCY 是一个面向澳大利亚社区的灾害准备与应急体验平台。最终方案把实时预警、地图信息、行动指引和家庭协作整合为一套跨设备界面系统。', story: [{ kicker: 'COURSE BRIEF / 01', title: '把研究转化为清晰、可评估的界面方案', body: '本课程围绕界面设计的方法、结构与交互表达展开，要求将研究洞察转化为清晰、可用且能够被测试和迭代的数字体验。' }, { kicker: 'POSTER CONCEPT / 02', title: '让紧急信息在压力下仍然可读、可行动', body: 'Poster 不是对作品的简单汇总，而是将灾害情境、研究判断与设计回应压缩成一条易于理解的视觉叙事。通过清晰的信息层级和行动导向的组织方式，海报先建立问题意识，再说明用户下一步可以如何准备与应对，最终指向 AUSSIE EMERGENCY 作为支持行动的应急体验系统。' }, { kicker: 'FINAL WORK / 03', title: '把“知道”转化为“行动”', body: '最终成果重点呈现实时灾害地图、分级警报、灾害详情、准备进度与家庭应急计划，帮助用户在紧急情境下快速理解并执行下一步。' }, { kicker: 'DESIGN FOCUS / 04', title: '以系统而非单张界面解决问题', body: '我通过页面层级、行动卡片和跨设备信息同步组织完整任务路径，展示从用户研究、线框图到高保真原型和评估迭代的界面设计能力。' }], images: ['main.png','action.png','detail.png','map.png','emergency.png','edu.png','plan1.png','login.png','Frame.png','Frame-5.png','Frame-7.png','Frame-8.png'].map((name) => ({ src: `/assets/masters/aussie-emergency/${name}`, alt: `AUSSIE EMERGENCY 最终界面 · ${name}` })) },
  idea9106: { lead: 'Make Your Choice 是一个面向悉尼大学国际学生的可持续饮品选择互动体验。最终成果将多语言信息、校园设施地图、奖励机制和社区互动结合起来，鼓励用户在日常饮品消费中做出更可持续的选择。', story: [{ kicker: 'COURSE BRIEF / 01', title: '以设计思维推进从问题到方案的迭代', body: '本课程以设计思维为框架，强调问题理解、用户洞察、概念生成和测试迭代，并将这些过程组织为有依据的最终设计提案。' }, { kicker: 'FINAL WORK / 02', title: '让环保信息变成可参与的选择', body: '最终展示围绕“了解问题—探索校园设施—做出选择—获得反馈”的体验路径展开，重点呈现互动学习、地图导航和激励机制。' }, { kicker: 'ITERATION / 03', title: '根据测试反馈调整体验', body: '用户测试后，我重新处理了 NEXT 按钮位置、校园地图信息、设施标识和激励范围，使操作路径更加清晰，也让不同语言背景的学生更容易进入体验。' }], images: Array.from({ length: 17 }, (_, index) => ({ src: `/assets/masters/idea9106-final/page-${String(index + 1).padStart(2, '0')}.jpg`, alt: `Make Your Choice 最终展示页面 ${String(index + 1).padStart(2, '0')}` })) },
  'mima-catenary': { lead: '这是一项围绕公共空间、光环境与共同体验展开的空间交互设计项目。作品以场地观察、概念推演、故事板与技术系统为线索，呈现从共同研究到空间方案的设计过程。', images: ['cover.jpg','title.jpg','catenary-concept.jpg','reference.jpg','storyboard-2.jpg','storyboard-3.jpg','technical-system.jpg','iteration.jpg','melody-1.jpg','melody-2.jpg','melody-3.jpg'].map((name) => ({ src: `/assets/masters/mima/${name}`, alt: `Catenary / Grove · ${name}` })) }, 'aussie-emergency': { lead: '这是一项面向澳大利亚灾害情境的应急服务设计。项目从问题研究与用户洞察出发，经过启发式评估和界面迭代，建立实时灾害地图、灾害详情、行动卡片、应急教育与家庭计划等关键路径。', link: { href: '/assets/masters/aussie-emergency/research-report.pdf', label: '查看研究与评估报告 PDF ↗' }, images: ['main.png','action.png','detail.png','map.png','emergency.png','edu.png','plan1.png','login.png','Frame.png','Frame-5.png','Frame-7.png','Frame-8.png'].map((name) => ({ src: `/assets/masters/aussie-emergency/${name}`, alt: `AussiEmergency · ${name}` })) }, 'generative-city': { lead: '这是一个以生成式网格为基础的创意编程实验。项目受到 Piet Mondrian《Broadway Boogie Woogie》和经典街机机制启发，在随机生成的城市道路中加入 Pac-Man 与 Ghost agents，并以时间驱动动画保持运动的一致性。', link: { href: '/assets/masters/coding/index.html', label: '打开可交互编程实验 ↗' }, images: [{ src: '/assets/masters/mima/title.jpg', alt: '生成式城市实验预览' }] } }; const detail = data[slug] ?? data['idea9105']; const [lightbox, setLightbox] = useState<number | null>(null); const current = lightbox === null ? null : detail.images[lightbox]; useEffect(() => { if (lightbox === null) return; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(null); if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % detail.images.length); if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? detail.images.length - 1 : (value - 1 + detail.images.length) % detail.images.length) }; window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' } }, [lightbox, detail.images.length]); return <section className="detail-page master-detail"><div className="detail-top"><button className="back-button" onClick={onBack}>← 返回目录</button><span>MASTER PROJECT / {project.number}</span><span>{project.type}</span></div><div className="detail-heading"><div><p className="kicker">MASTER’S STUDIES / {project.number}</p><h1>{project.title}</h1></div><p className="detail-lead">{detail.lead}</p></div><div className="detail-facts"><span><b>项目类型</b>{project.type}</span><span><b>项目时间</b>{project.year}</span><span><b>展示重点</b>最终成果、交互路径与迭代</span></div>{detail.story && <div className="detail-story">{detail.story.map((item) => <article key={item.kicker}><p className="kicker">{item.kicker}</p><h2>{item.title}</h2><p>{item.body}</p></article>)}</div>}{detail.link && <a className="master-report-link" href={detail.link.href} target={detail.link.href.endsWith('.pdf') ? undefined : '_blank'} rel="noreferrer">{detail.link.label}</a>}<div className="gallery master-gallery">{detail.images.map((image, index) => <button className={index === 0 ? 'gallery-item gallery-wide' : 'gallery-item'} key={image.src} onClick={() => setLightbox(index)} aria-label={`全屏查看：${image.alt}`}><PortfolioImage src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} /><span className="zoom-hint">放大 <b>↗</b></span></button>)}</div><div className="detail-end"><span>END OF MASTER PROJECT {project.number}</span><button onClick={onBack}>返回硕士作品 <span>↗</span></button></div>{current && <div className="lightbox" role="dialog" aria-modal="true" aria-label="全屏作品查看" onClick={() => setLightbox(null)}><button className="close-lightbox" onClick={() => setLightbox(null)} aria-label="关闭全屏查看">×</button><PortfolioImage src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption">{String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(detail.images.length).padStart(2, '0')} · {current.alt}<span>← → 切换　ESC 关闭</span></div></div>}</section> }
export default function Page() {
  const initialPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const initialMasterSlug = initialPath.startsWith('/work/master-') ? initialPath.slice('/work/master-'.length) : null
  const initialSlug = initialPath.startsWith('/work/') && !initialMasterSlug ? initialPath.split('/')[2] : null
  const initialRoute = initialPath === '/cv' ? 'resume' : initialMasterSlug ? 'master' : initialSlug ? 'detail' : 'home'
  const [route, setRoute] = useState(initialRoute)
  const [routeSlug, setRouteSlug] = useState(initialSlug ?? initialMasterSlug ?? '1984')
  const rememberDirectoryPosition = () => { try { sessionStorage.setItem('portfolio-directory-scroll', String(window.scrollY)) } catch {} }
  const openMaster = (slug: string) => { if (route === 'home') rememberDirectoryPosition(); window.history.pushState({}, '', `/work/master-${slug}`); setRouteSlug(slug); setRoute('master'); window.scrollTo(0, 0) }
  const openDetail = (slug: string) => { if (route === 'home') rememberDirectoryPosition(); window.history.pushState({}, '', `/work/${slug}`); setRouteSlug(slug); setRoute('detail'); window.scrollTo(0, 0) }
  const goHome = () => { let saved = 0; try { saved = Number(sessionStorage.getItem('portfolio-directory-scroll') ?? 0) } catch {} window.history.pushState({}, '', '/'); setRoute('home'); window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.scrollTo({ top: saved, behavior: 'auto' }))) }
  const navToProjects = () => { if (route === 'detail' || route === 'master' || route === 'resume') goHome() }
  useEffect(() => { const syncPath = () => { const path = window.location.pathname; const masterSlug = path.startsWith('/work/master-') ? path.slice('/work/master-'.length) : null; const slug = path.startsWith('/work/') && !masterSlug ? path.split('/')[2] : null; setRouteSlug(slug ?? masterSlug ?? '1984'); setRoute(path === '/cv' ? 'resume' : masterSlug ? 'master' : slug ? 'detail' : 'home') }; syncPath(); window.addEventListener('popstate', syncPath); return () => window.removeEventListener('popstate', syncPath) }, [])
  return <>{route !== 'resume' && <Header onProjects={navToProjects} />}<main>{route === 'resume' ? <ResumePanel onClose={goHome} /> : route === 'master' ? (routeSlug === 'idea9103' ? <MasterIdea9103 onBack={goHome} /> : routeSlug === 'idea9105' ? <MasterIdea9105 onBack={goHome} /> : routeSlug === 'idea9106' ? <MasterIdea9106 onBack={goHome} /> : routeSlug === 'arin6904' ? <MasterArin6904 onBack={goHome} /> : routeSlug === 'idea9202' ? <MasterIdea9202 onBack={goHome} /> : routeSlug === 'desn9002' ? <MasterDesn9002 onBack={goHome} /> : routeSlug === 'cmpn5006' ? <MasterCmpn5006 onBack={goHome} /> : <MasterDetail slug={routeSlug} onBack={goHome} />) : route === 'detail' ? (routeSlug === '1984' ? <ProjectDetail onBack={goHome} onSwitch={openDetail} /> : routeSlug === 'binding-design' ? <BindingDesignDetail onBack={goHome} onSwitch={openDetail} /> : <ProjectGalleryDetail slug={routeSlug} onBack={goHome} onSwitch={openDetail} />) : <Home onOpenProject={openDetail} onOpenMaster={openMaster} />}</main></>
}
