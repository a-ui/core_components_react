import { MouseEventHandler, ReactNode } from 'react';
import { Title } from '../../../constants/application.types';
import { ButtonProps } from '../../atoms/button';

export interface AlertProps {
  ariaLabelClose?: string;
  cancelButton?: ButtonProps;
  children?: ReactNode;
  confirmButton?: ButtonProps;
  inline?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  qa?: string;
  theme?: 'success' | 'warning' | 'danger';
  title?: Title;
  titleId: string;
}
