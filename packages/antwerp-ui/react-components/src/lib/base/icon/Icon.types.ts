import { KeyboardEventHandler, MouseEventHandler } from 'react';

export interface IconProps {
  name: string;
  thin?: boolean;
  role?: string;
  className?: string;
  screenReaderText?: string;
  qa?: string;
  tabIndex?: number;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onKeyDown?: KeyboardEventHandler<HTMLSpanElement>;
}
