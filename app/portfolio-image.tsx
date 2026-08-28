/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import type { ImgHTMLAttributes } from 'react'

type PortfolioImageProps = ImgHTMLAttributes<HTMLImageElement>

export function PortfolioImage({ decoding = 'async', fetchPriority = 'auto', ...props }: PortfolioImageProps) {
  return (
    <img {...props} decoding={decoding} fetchPriority={fetchPriority} />
  )
}
