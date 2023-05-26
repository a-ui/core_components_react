import { ReactNode } from 'react';
import { ButtonProps } from '../../atoms/button';

export interface MapProps {
  content?: ReactNode;
  contentOpen?: boolean;
  map?: ReactNode;
  fullscreen?: boolean;
  topLeftControls?: ButtonProps[];
  topRightControls?: ButtonProps[];
  bottomRightControls?: ButtonProps[];
  bottomLeftControls?: ButtonProps[];
  qa?: string;
}
