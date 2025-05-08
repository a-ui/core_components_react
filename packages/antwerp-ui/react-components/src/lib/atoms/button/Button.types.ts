import { MouseEventHandler, ReactElement } from 'react';
import { IconProps } from '../../base/icon';
import { AvatarProps } from '../avatar';
import { Link } from '../../../constants/application.types';

export interface ButtonProps {
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  qa?: string;
  link?: {
    href?: string;
    target?: string;
  };
  size?: 'small' | 'medium' | 'large';
  addOn?: ButtonAddOnProps;
  theme?: 'success' | 'warning' | 'danger' | 'neutral';
  title?: string;
  emphasis?: 'high' | 'medium' | 'low';
  ['aria-expanded']?: boolean;
  ['aria-haspopup']?: boolean;
  renderLinkFunction?: (link: Link, props: Record<string, string | boolean | undefined>) => ReactElement;
}

export type ButtonAddOnProps = {
  type: 'avatar' | 'icon' | 'spinner';
  align?: 'left' | 'center' | 'right';
  iconProps?: ButtonIconProps;
  avatarProps?: ButtonAvatarProps;
};
export type ButtonAvatarProps = Omit<AvatarProps, 'rounded' | 'size'>;
export type ButtonIconProps = IconProps;
