import { classNames } from '../../../utils/dom.utils';
import { ProgressBarProps } from './ProgressBar.types';

export function ProgressBar({
  label,
  labelId = 'aui-progress-label',
  showLabel = true,
  percentage = 0,
  ariaValueNow,
  minValue = 0,
  maxValue = 100,
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
      {showLabel ? (
        <div id={labelId} className="a-progress__label">
          {label}
        </div>
      ) : null}
      <div className="a-progress__inner">
        <div
          className="a-progress__bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
          style={{ width: `${percentage}%` }}
          {...(!showLabel ? { 'aria-label': label } : { 'aria-labelledby': labelId })}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
