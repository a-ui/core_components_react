import { SpinnerProps } from './Spinner.types';
import { classNames } from '../../../utils/dom.utils';
import { SCREEN_READER_CLASS } from '../../../constants/settings';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';

export function Spinner({ label = 'Wordt geladen...', showText, size, vertical, ariaHidden, qa }: SpinnerProps) {
  const classes = classNames({
    'a-spinner': true,
    [`a-spinner--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'a-spinner--vertical': !!vertical
  });
  const labelClasses = classNames({
    'a-spinner__text': !!showText,
    [SCREEN_READER_CLASS]: !showText
  });

  return (
    <div className={classes} aria-hidden={ariaHidden} data-qa={qa}>
      <span role="alert" className="a-spinner__circle"></span>
      <span className={labelClasses}>{label}</span>
    </div>
  );
}

export default Spinner;
