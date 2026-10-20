import PortfolioImage from './PortfolioImage';
import { projects, projectHref } from './projects';
import PortfolioMotion from './PortfolioMotion';
import AmbientBreathing from './AmbientBreathing';
import PortfolioNavigation from './PortfolioNavigation';
import NameDoodle from './NameDoodle';
import IcpFiling from './IcpFiling';
import './portfolio-polish.css';
import './homepage-vertical.css';

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

export default function Home() {
  return (
    <main>
      <PortfolioNavigation detailOpen={false} />
      <div className="portfolio-home vertical-home">

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
          {showcaseProjects.filter(project => project.id !== 'ultraman' && project.id !== '1984').map(project => <a key={project.id} id={`project-${project.id}`} className={`home-project home-project-${project.id}${composedHomeIds.includes(project.id) ? ' home-project-composed' : ''}`} aria-label={`查看 ${project.title} 项目`} href={projectHref(project)}>
            <span className="home-project-image"><PortfolioImage src={project.image} alt={project.id === 'mima' ? 'Whisper Grove Corner：地图串联 Catenary 户外光影路径与 Cube 室内共享花园的概念封面' : project.id === 'xiaoxinsi' ? '小心思 IP：小王子与小狐狸角色、Logo、包装与折页主视觉' : project.id === 'ultraman' ? 'ULTRAMAN：白色背景上的闭合书册堆叠与红白封面' : `${project.title} 项目封面`} /></span>
            {!composedHomeIds.includes(project.id) && <span className="home-project-copy"><span className="home-project-type">{project.type}</span><span className="home-project-title">{project.title}</span><span className="home-project-description">{showcaseLines[project.id]}</span><span className="home-project-tags">{homeProjectDetails[project.id].tags.map(tag => <span key={tag}>{tag}</span>)}</span><span className="home-project-meta"><span>{homeProjectDetails[project.id].year}<span className="home-project-role">{homeProjectDetails[project.id].role}</span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></span></span>}
          </a>)}
        </div>
        <section className="other-projects" id="other-projects" aria-labelledby="other-projects-title">
          <div className="other-projects-heading"><span>视觉与编辑设计</span><h2 id="other-projects-title">Other Projects</h2></div>
          <div className="other-projects-grid">{editorialHomeProjects.map(project => <a key={project.id} id={`project-${project.id}`} className={`home-project other-project other-project-${project.id}`} aria-label={`查看 ${project.title} 项目`} href={projectHref(project)}>
            <span className="other-project-copy"><span className="other-project-title">{project.title}</span><span className="other-project-description">{editorialHomePresentation[project.id].description}</span><span className="other-project-tags">{homeProjectDetails[project.id].tags.map(tag => <span key={tag}>{tag}</span>)}</span></span>
            <span className="other-project-art"><span className={project.id === '1984' ? 'other-book-crop' : 'other-stack-frame'}><PortfolioImage src={editorialHomePresentation[project.id].image} alt={project.id === 'ultraman' ? 'ULTRAMAN 红白封面的闭合书册堆叠' : '1984 闭合书册，封面以光束、摄像头与奔跑人物表现监视与逃离'} /></span></span>
          </a>)}</div>
        </section>
      </section>

      <section className="firefly-about" id="about">
        <AmbientBreathing variant="about" randomized />
        <div><span className="section-tag">ABOUT / 关于</span><h2>视觉是入口，<br />理解才是目的。</h2></div>
        <div className="about-text"><p>我拥有视觉传达设计背景，目前在悉尼大学学习交互与电子艺术。我关注信息如何被理解、体验如何被记住，以及视觉系统如何跨媒介保持一致。</p><div className="skill-list"><span>视觉系统</span><span>UI/UX</span><span>编辑设计</span><span>互动体验</span></div><a className="resume-link" href="/about#resume">查看完整简历</a></div>
      </section>

      <section className="portfolio-contact" id="contact"><AmbientBreathing variant="contact" randomized /><div><span>CONTACT / 联系</span><h2>聊聊设计，<br />或下一个合作机会。</h2></div><a href="mailto:Ljy4real@foxmail.com">Ljy4real@foxmail.com <span aria-hidden="true">↗</span></a></section>

      <footer className="home-footer"><AmbientBreathing variant="contact" randomized /><p>刘纪元 · Visual &amp; Interaction Design<IcpFiling /></p><a href="#top">回到顶部</a></footer>
      </div>

      <PortfolioMotion refreshKey="home" />
    </main>
  );
}
