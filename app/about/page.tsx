import type { Metadata } from 'next';
import AboutResume from './AboutResume';

export const metadata: Metadata = {
  title: '关于与简历 · 刘纪元',
  description: '刘纪元的学习背景、实习经历与视觉及交互设计能力。',
};

export default function AboutPage() {
  return <AboutResume />;
}
