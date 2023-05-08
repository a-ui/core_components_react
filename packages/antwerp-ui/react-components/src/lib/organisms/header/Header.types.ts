import { ButtonProps } from '../../atoms/button';
import { FlyoutProps } from '../../molecules/flyout';

export interface HeaderProps {
  logoHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  skipToMainLabel?: string;
  menuItems?: (ButtonProps & { label?: string; flyout?: FlyoutProps })[];
  qa?: string;
}
