'use client';

import { useEffect } from 'react';
import PortfolioNavigation from '../PortfolioNavigation';
import AmbientBreathing from '../AmbientBreathing';
import AboutPhotoGallery from './AboutPhotoGallery';
import ResumeAmbient from './ResumeAmbient';
import IcpFiling from '../IcpFiling';
import './about-resume.css';

const capabilities = [
  { title: '研究与梳理', items: ['访谈与情境观察', '用户旅程与服务蓝图', '问题定义与信息架构'] },
  { title: '交互与表达', items: ['交互流程与原型', '视觉引导与界面设计', '品牌系统与编辑排版'] },
];
const tools = [
  { name: 'Figma', logo: 'figma.svg' },
  { name: 'Photoshop', logo: 'photoshop.svg' },
  { name: 'Illustrator', logo: 'illustrator.svg' },
  { name: 'InDesign', logo: 'indesign.svg' },
  { name: 'After Effects', logo: 'aftereffects.svg' },
  { name: 'Procreate', logo: 'procreate.png' },
  { name: 'Codex', logo: 'codex.png' },
  { name: 'WorkBuddy', logo: 'workbuddy.svg' },
];

export default function AboutResume() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.resume-reveal');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .05 });
    nodes.forEach(node => reduced ? node.classList.add('is-visible') : observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className="about-resume-page" id="top">
    <ResumeAmbient />
    <PortfolioNavigation detailOpen={false} page="about" />
    <a className="resume-skip" href="#resume">跳转到简历</a>
    <div className="about-resume-content">
      <section className="about-intro" id="about" aria-labelledby="about-page-title">
        <AboutPhotoGallery />
        <div className="about-intro-copy resume-reveal">
          <span className="resume-eyebrow">ABOUT ME / 关于我</span>
          <h1 id="about-page-title">你好，我是刘纪元。</h1>
          <p>我从视觉传达设计出发，目前在悉尼大学学习交互设计与电子艺术，希望让视觉表达与用户体验之间的联系更紧密。</p>
          <p>本科阶段的品牌、信息与编辑设计训练，让我学会组织内容、建立视觉层级。电商设计实习中，我进一步接触商品页面、产品图像与实际制作流程。</p>
          <p>现在，我更关注人如何理解信息、开始参与，并从互动中获得清晰的反馈。我正在寻找交互与体验设计相关机会。</p>
          <div className="about-intro-links"><a href="#resume">查看简历 <span aria-hidden="true">↓</span></a><a href="mailto:Ljy4real@foxmail.com">联系我 <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="resume-document" id="resume" aria-labelledby="resume-title">
        <header className="resume-document-header resume-reveal"><div><span className="resume-eyebrow">BACKGROUND / 我的经历</span><h2 id="resume-title">Resume</h2></div><a className="resume-download" href="/刘纪元-个人简历.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4" /></svg>下载 PDF 简历</a></header>

        <section className="resume-row resume-reveal" aria-labelledby="education-title">
          <h3 className="resume-row-label" id="education-title"><span>Education</span>教育经历</h3>
          <div className="resume-row-content">
            <article className="resume-entry"><div className="resume-school-brand"><img src="/assets/education/sydney.svg" alt="悉尼大学 Logo" width={163} height={56} loading="lazy" /></div><div className="resume-entry-top"><h4>悉尼大学</h4><span>2025 — 2027</span></div><p className="resume-entry-role">交互设计与电子艺术 · 硕士在读</p><p>学习用户体验研究、设计思维、服务与交互设计、信息架构及原型验证，并在公共空间与数字服务项目中实践。</p><ul className="resume-academic-highlights"><li>校园生态平台项目入选优秀教学案例</li></ul><details className="resume-study-note"><summary>从视觉传达到交互设计<span aria-hidden="true">＋</span></summary><p>我希望在视觉表达之外，进一步理解人为什么参与、如何操作，以及设计如何通过反馈回应不同的使用情境。</p></details></article>
            <article className="resume-entry"><div className="resume-school-brand"><img src="/assets/education/hbuas.png" alt="湖北文理学院校徽" width={56} height={56} loading="lazy" /></div><div className="resume-entry-top"><h4>湖北文理学院</h4><span>2019 — 2023</span></div><p className="resume-entry-role">视觉传达设计 · 本科</p><p>接受信息设计、视觉叙事、品牌系统与数字界面训练，逐步建立从概念到跨媒介视觉应用的设计基础。</p><ul className="resume-academic-highlights"><li>优秀毕业论文</li><li>平均分 82.5</li></ul></article>
          </div>
        </section>

        <section className="resume-row resume-reveal" aria-labelledby="experience-title">
          <h3 className="resume-row-label" id="experience-title"><span>Experience</span>实习与品牌实践</h3>
          <div className="resume-row-content">
            <article className="resume-entry"><div className="resume-experience-brand resume-brand-deo"><img src="/assets/experience/deo-coffee.jpg" alt="的欧咖啡品牌 Logo" loading="lazy" /></div><div className="resume-entry-top"><h4>UI 与品牌设计师</h4><span>2024.08 — 2025.02</span></div><p className="resume-entry-role">的欧咖啡 · 自主品牌</p><p>负责品牌视觉与 UI 设计。</p></article>
            <article className="resume-entry"><div className="resume-experience-brand resume-brand-yuggi"><img src="/assets/experience/yuggi.jpg" alt="与己 YUGGI 产品线品牌 Logo" loading="lazy" /></div><div className="resume-entry-top"><h4>平面设计师 / 摄影助理</h4><span>2023.07 — 2024.01</span></div><p className="resume-entry-role">盈馨堂（武汉）生物科技有限公司</p><p className="resume-product-line">参与产品线：与己 YUGGI</p><p>完成商品详情页、主图与界面视觉设计，整理需求和反馈，调整页面信息层级与视觉呈现。</p><p>协助摄影师进行布光、设备调试与产品拍摄，支持图像素材制作及后续页面应用。</p></article>
          </div>
        </section>

        <section className="resume-row resume-reveal" aria-labelledby="skills-title"><h3 className="resume-row-label" id="skills-title"><span>Skills</span>设计能力</h3><div className="resume-row-content resume-capabilities">{capabilities.map(group => <div key={group.title}><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

        <section className="resume-row resume-reveal" aria-labelledby="tools-title"><h3 className="resume-row-label" id="tools-title"><span>Tools</span>常用工具</h3><div className="resume-row-content"><ul className="resume-tool-list">{tools.map(tool => <li key={tool.name}><img src={`/assets/tool-logos/${tool.logo}`} alt="" width={40} height={40} loading="lazy" /><span>{tool.name}</span></li>)}</ul><p className="resume-ai-note">我也使用 ChatGPT、Codex、WorkBuddy 与图像生成工具辅助资料整理、概念探索、视觉生成和前端原型，并保留人工审核与设计判断。</p></div></section>

        <section className="resume-row resume-reveal" aria-labelledby="languages-title"><h3 className="resume-row-label" id="languages-title"><span>Languages</span>语言能力</h3><div className="resume-row-content"><p className="resume-language">中文 · 母语<span>普通话二级甲等</span></p><p className="resume-language">英语<span>PTE 63</span></p></div></section>
      </section>
    </div>

    <section className="resume-contact" id="contact"><AmbientBreathing variant="contact" /><span className="resume-eyebrow">LET’S CONNECT / 联系</span><h2>聊聊设计，或下一个机会。</h2><a href="mailto:Ljy4real@foxmail.com">Ljy4real@foxmail.com <span aria-hidden="true">↗</span></a></section>
    <footer className="resume-footer"><span>刘纪元 · Visual &amp; Interaction Design<a className="font-license-credit" href="/fonts/OPPOSans-License.txt">本网站使用 OPPO Sans 字体 · 字体许可</a><IcpFiling /></span><a href="/#work">回到作品集 <span aria-hidden="true">↗</span></a></footer>
  </main>;
}
