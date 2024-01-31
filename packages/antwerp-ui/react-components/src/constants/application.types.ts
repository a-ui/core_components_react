import { MouseEvent, KeyboardEvent } from 'react';

export interface Link {
  id?: string;
  label: string;
  href?: string;
  target?: string;
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
}

export interface Title {
  label: string;
  id?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}
