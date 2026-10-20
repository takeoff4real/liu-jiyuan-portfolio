import type { ImgHTMLAttributes } from 'react';
import { optimizedImages } from './optimized-images';

type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

export default function PortfolioImage({ src, srcSet, sizes, width, height, loading, decoding, fetchPriority, alt, ...props }: Props) {
  const image = typeof src === 'string' ? optimizedImages[src] : undefined;
  return <img
    {...props}
    src={image?.src ?? src}
    srcSet={srcSet ?? image?.srcSet}
    sizes={sizes ?? (image ? '(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 48px), 1100px' : undefined)}
    width={width ?? image?.width}
    height={height ?? image?.height}
    loading={loading ?? (fetchPriority === 'high' ? 'eager' : 'lazy')}
    decoding={decoding ?? 'async'}
    fetchPriority={fetchPriority}
    alt={alt}
  />;
}
