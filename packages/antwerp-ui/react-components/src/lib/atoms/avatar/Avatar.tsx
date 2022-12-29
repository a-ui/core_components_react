import { AvatarProps } from './Avatar.types';
import { classNames } from '../../../utils/dom.utils';
import { DEFAULT_AVATAR_ICON } from '../../../constants/settings';
import { Icon } from '../../base/icon';

const letterAvatar = (letter: string) => <span className="a-avatar__letter">{letter}</span>;
const imageAvatar = (image: string, alt: string) => <img src={`${image}`} alt={`${alt}`} />;
const iconAvatar = (icon: string, ariaLabel: string) => (
  <span className="a-avatar__icon" aria-label={ariaLabel}>
    <Icon name={icon} />
  </span>
);

export function Avatar({ letter, rounded, size, ariaLabel, image, imageAlt, icon, qa }: AvatarProps) {
  const renderContent = () => {
    if (image) {
      return imageAvatar(image, imageAlt);
    }
    if (letter) {
      return letterAvatar(letter);
    }
    return iconAvatar(icon || DEFAULT_AVATAR_ICON, ariaLabel);
  };
  const classes = classNames({
    'a-avatar': true,
    'a-avatar--primary': !!letter,
    'a-avatar--rounded': !!rounded,
    [`a-avatar--${(size || '')[0]}`]: !!size
  });
  return (
    <div className={classes} data-qa={qa}>
      {renderContent()}
    </div>
  );
}

Avatar.defaultProps = {
  ariaLabel: 'Gebruiker icoon',
  imageAlt: 'Avatar afbeelding'
};

export default Avatar;
