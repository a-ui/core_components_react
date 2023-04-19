import React, { MouseEvent } from 'react';
import { getPositionValue, getSteps, lineValuesToPosition } from '../../../utils/math.utils';
import { Icon } from '../../base/icon';
import { RangeSliderProps } from './RangeSlider.types';
import { RangeSliderBar } from './RangeSliderBar';
import { RangeSliderHandle } from './RangeSliderHandle';

export function RangeSlider({
  label,
  start = RangeSlider.defaultProps.start,
  end,
  min = RangeSlider.defaultProps.min,
  max = RangeSlider.defaultProps.max,
  step = RangeSlider.defaultProps.step,
  unit = RangeSlider.defaultProps.unit,
  minRange = RangeSlider.defaultProps.minRange,
  range = RangeSlider.defaultProps.range,
  labelStart,
  labelEnd,
  iconStart,
  iconEnd,
  ariaLabelMin,
  ariaLabelMax,
  tickMarks,
  qa,
  onChange
}: RangeSliderProps) {
  const [limit, setLimit] = React.useState(0);
  const [sliderPos, setSliderPos] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (sliderRef.current) {
      const sliderPosition = sliderRef.current['offsetWidth'];
      const node = sliderRef.current as HTMLElement;
      if (node && node instanceof HTMLElement) {
        const dir = node.getBoundingClientRect().left;
        setDirection(dir);
      }
      setLimit(sliderPosition);
      setSliderPos(sliderPosition);
    }
  };

  const handleUpdateStart = (s: number) => {
    if (range && end && minRange && end - s < minRange) return;
    return onChange && onChange(s, range ? end : undefined);
  };

  const handleUpdateEnd = (e: number) => {
    if (start && minRange && e - start < minRange) return;
    return onChange && onChange(start, e);
  };

  const getPositionFromValue = (value: number) => lineValuesToPosition(value, min, max, limit);

  const position = (e: MouseEvent | React.TouchEvent) => {
    return getPositionValue(e, limit, step, min, max, min, max, direction);
  };

  const updateHandleValue = (e: MouseEvent) => {
    const newPosition = position(e);
    if (range && end && Math.abs(newPosition - end) < Math.abs(newPosition - start)) {
      handleUpdateEnd(newPosition);
      return;
    }
    handleUpdateStart(newPosition);
  };

  return (
    <div className="a-range-slider" data-qa={qa} ref={sliderRef}>
      <div className="a-range-slider__labels">
        <div className="a-range-slider__label">{label}</div>
        <div className="a-range-slider__label">
          {range ? `${start} - ${end}` : `${start}`}
          {` ${unit}`}
        </div>
      </div>
      <div className="a-range-slider__inner" onClick={updateHandleValue}>
        {tickMarks && (
          <div className="a-range-slider__tickmarks">
            {getSteps(min, max, step).map((st) => (
              <div key={st} className="a-range-slider__tickmark"></div>
            ))}
          </div>
        )}
        <RangeSliderBar start={start} end={end} getPositionFromValue={getPositionFromValue} range={!!range} min={min} />
        <RangeSliderHandle
          value={start}
          onUpdate={handleUpdateStart}
          min={min}
          max={range && minRange ? max - minRange : max}
          sliderMin={min}
          sliderMax={max}
          step={step}
          sliderPos={sliderPos}
          direction={direction}
          getPositionFromValue={getPositionFromValue}
          ariaLabel={ariaLabelMin}
        />
        {range && typeof minRange === 'number' && typeof end === 'number' && (
          <RangeSliderHandle
            value={end}
            onUpdate={handleUpdateEnd}
            min={min + minRange}
            max={max}
            sliderMin={min}
            sliderMax={max}
            step={step}
            sliderPos={sliderPos}
            direction={direction}
            getPositionFromValue={getPositionFromValue}
            ariaLabel={ariaLabelMax}
          />
        )}
      </div>
      <div className="a-range-slider__descriptions">
        <div className="a-range-slider__description small">
          {labelStart}
          {iconStart ? <Icon name={iconStart} /> : null}
        </div>
        <div className="a-range-slider__description small">
          {labelEnd}
          {iconEnd ? <Icon name={iconEnd} /> : null}
        </div>
      </div>
    </div>
  );
}

RangeSlider.defaultProps = {
  start: 0,
  min: 0,
  max: 10,
  step: 1,
  unit: '',
  minRange: 1,
  range: false,
  ariaLabelMin: 'Minimum',
  ariaLabelMax: 'Maximimum'
};

export default RangeSlider;
