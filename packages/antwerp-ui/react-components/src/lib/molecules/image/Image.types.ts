import { ReactElement, ReactNode } from 'react';

export interface ImageProps {
  alt?: string;
  noClass?: boolean;
  children?: ReactElement;
  src: string;
  qa?: string;
  renderImgFunction?: (src: string, alt: string) => ReactNode;
}
