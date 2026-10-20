'use client';

import PortfolioImage from './PortfolioImage';

import type { Project } from './projects';
import { editorialStories } from './editorial-stories';
import WhisperCaseStudy from './WhisperCaseStudy';
import MycoCaseStudy from './MycoCaseStudy';
import XiaoxinsiCaseStudy from './XiaoxinsiCaseStudy';
import BookEditorialCaseStudy from './BookEditorialCaseStudy';
import PortfolioMotion from './PortfolioMotion';
import PortfolioNavigation from './PortfolioNavigation';
import './portfolio-polish.css';

export default function ProjectPage({ project }: { project: Project }) {
  let content;
  if (project.id === 'mima') content = <WhisperCaseStudy />;
  else if (project.id === 'myco') content = <MycoCaseStudy />;
  else if (project.id === 'xiaoxinsi') content = <XiaoxinsiCaseStudy />;
  else if (project.id === 'ultraman' || project.id === '1984') {
    content = <BookEditorialCaseStudy story={editorialStories[project.id]} title={project.title} returnHref={`/#project-${project.id}`} />;
  } else {
    content = <div className="detail-shell">
      <a className="detail-back" href="/#work">← 返回作品</a>
      <article className={`detail accent-${project.accent}`}>
        <div className="detail-meta"><span>{project.number} · {project.type}</span><span>项目详情</span></div>
        <figure className="detail-cover"><PortfolioImage src={project.image} alt={`${project.title} 项目封面`} /></figure>
        <p className="detail-kicker">{project.subtitle}</p><h1>{project.title}</h1><p className="detail-intro">{project.intro}</p>
        {project.sections.map(section => <section className="detail-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
        <div className="detail-gallery">{project.gallery.map((image, index) => <PortfolioImage key={image} src={image} alt={`${project.title} 项目画面 ${index + 1}`} />)}</div>
        <a className="detail-end" href="/#work">返回作品索引</a>
      </article>
    </div>;
  }
  return <main className="project-page" data-project={project.slug}>
    <PortfolioNavigation detailOpen={false} page="project" />
    {content}
    <PortfolioMotion refreshKey={project.slug} />
  </main>;
}
