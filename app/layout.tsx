import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '刘纪元 / Visual Communication Portfolio',
  description: '刘纪元的视觉传达设计作品集，包含书籍装帧、海报与视觉设计。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
