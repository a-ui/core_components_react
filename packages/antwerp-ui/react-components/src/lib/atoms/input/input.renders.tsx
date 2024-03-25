import { State, Theme, THEME_ICON_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { DescriptionProps, LabelProps, CharacterCounterProps } from './Input.types';

export const renderLabel = ({ label, id, required, inline }: LabelProps) => {
  const labelClasses = classNames({
    'a-input__label': true,
    'a-input__label--inline': !!inline
  });
  return label ? (
    <label className={labelClasses} htmlFor={id}>
      {label}
      {required && <span className="u-text-danger">*</span>}
    </label>
  ) : null;
};

export const renderDescription = ({ id, description, state }: DescriptionProps) => {
  const descriptionClasses = classNames({
    'a-input__description': true,
    'is-error': state === State.ERROR,
    'is-success': state === State.SUCCESS
  });
  return description ? (
    <small id={`${id}--description`} className={descriptionClasses}>
      {state === State.SUCCESS && <Icon name={THEME_ICON_MAP[Theme.SUCCESS]} />}
      {state === State.ERROR && <Icon name={THEME_ICON_MAP[Theme.DANGER]} />}
      {description}
    </small>
  ) : null;
};

export const renderCharacterCounter = ({
  id,
  charCountText,
  charCounter,
  characterCount,
  maxLength
}: CharacterCounterProps) => {
  const charLeft = maxLength ? maxLength - characterCount : 0;
  const hasCharOverflow = maxLength && charLeft <= 0;
  const countDisplayText = maxLength
    ? charCountText
        ?.replace('%max%', maxLength.toString())
        .replace('%count%', characterCount.toString())
        .replace('%left%', charLeft.toString())
    : charCountText?.replace('%count%', characterCount.toString());
  return charCounter ? (
    <small
      aria-live="polite"
      id={`${id}--counter`}
      className={`a-input__description u-text-right${hasCharOverflow ? ' u-text-danger' : ''}`}
    >
      {countDisplayText}
    </small>
  ) : null;
};
