import { ReactElement, ReactNode } from 'react';
import { Title } from '../../../constants/application.types';
import { ButtonProps } from '../../atoms/button';

export interface ModalProps {
  appRootId: string;
  ariaCloseLabel?: string;
  cancelButton?: ButtonProps;
  children: ReactNode;
  closeButton?: boolean;
  confirmButton?: ButtonProps;
  onAfterOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
  qa?: string;
  shouldCloseOnOverlayClick?: boolean;
  size?: '' | 'large';
  title?: Title;
  trigger?: ReactElement;
}
