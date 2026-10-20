import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug, projectHref } from '../../projects';
import ProjectPage from '../../ProjectPage';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return {
    title: `${project.title} · 刘纪元作品集`,
    description: project.intro,
    alternates: { canonical: `https://ljy4realportfolio.site${projectHref(project)}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
