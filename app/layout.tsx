import type { Metadata, Viewport } from 'next';
import './globals.css';
import PortfolioLoader from './PortfolioLoader';

export const metadata: Metadata = {
  title: '刘纪元 · Visual & Interaction Designer',
  description: '刘纪元的视觉与交互设计作品集。',
  icons: { icon: '/liu-logo.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head><link rel="preload" href="/fonts/OPPOSans-4.0.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head>
      <body><PortfolioLoader />{children}<noscript><style>{`.portfolio-loader { display:none!important; }`}</style></noscript></body>
    </html>
  );
}
