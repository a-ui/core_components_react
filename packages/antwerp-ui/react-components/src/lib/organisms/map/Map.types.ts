import { ReactNode } from 'react';
import { ButtonProps } from '../../atoms/button';

export interface MapProps {
  bottomLeftControls?: ButtonProps[];
  bottomRightControls?: ButtonProps[];
  fullscreen?: boolean;
  map?: ReactNode;
  qa?: string;
  sidebar?: ReactNode;
  sidebarOpen?: boolean;
  topLeftControls?: ButtonProps[];
  topRightControls?: ButtonProps[];
}
