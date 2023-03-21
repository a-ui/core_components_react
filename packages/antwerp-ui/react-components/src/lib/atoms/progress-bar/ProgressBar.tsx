import { classNames } from '../../../utils/dom.utils';
import { ProgressBarProps } from './ProgressBar.types';

export function ProgressBar({
  label,
  labelId,
  percentage,
  ariaValueNow,
  minValue,
  maxValue,
  large,
  qa
}: ProgressBarProps) {
  const value = ariaValueNow || percentage;

  const classes = classNames({
    'a-progress': true,
    'a-progress--l': !!large
  });

  return (
    <div className={classes} data-qa={qa}>
      <div id={labelId} className="a-progress__label">
        {label}
      </div>
      <div className="a-progress__inner">
        <div
          className="a-progress__bar"
          role="progressbar"
          aria-labelledby={labelId}
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  percentage: 0,
  minValue: 0,
  maxValue: 100,
  labelId: 'aui-progress-label',
  size: ''
};

export default ProgressBar;
