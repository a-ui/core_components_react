import { AvatarProps } from './Avatar.types';
import { classNames } from '../../../utils/dom.utils';
import { DEFAULT_AVATAR_ICON } from '../../../constants/settings';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { Icon } from '../../base/icon';

const letterAvatar = (letter: string) => <span className="a-avatar__letter">{letter}</span>;
const imageAvatar = (image: string, alt: string) => <img src={`${image}`} alt={`${alt}`} />;
const iconAvatar = (icon: string, ariaLabel: string) => (
  <span className="a-avatar__icon" aria-label={ariaLabel} role="img">
    <Icon name={icon} />
  </span>
);

export function Avatar({
  className,
  letter,
  rounded,
  size,
  ariaLabel = 'Gebruiker',
  image,
  imageAlt = 'Avatar',
  icon,
  qa
}: AvatarProps) {
  const renderContent = () => {
    if (image) {
      return imageAvatar(image, imageAlt || '');
    }
    if (letter) {
      return letterAvatar(letter.slice(0, 3));
    }
    return iconAvatar(icon || DEFAULT_AVATAR_ICON, ariaLabel || '');
  };

  const classes = classNames({
    'a-avatar': true,
    'a-avatar--primary': !!letter,
    'a-avatar--rounded': !!rounded,
    [`a-avatar--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    [className || '']: !!className
  });

  return (
    <div className={classes} data-qa={qa}>
      {renderContent()}
    </div>
  );
}

export default Avatar;
