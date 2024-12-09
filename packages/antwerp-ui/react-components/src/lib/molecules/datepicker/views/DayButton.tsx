import { classNames } from '../../../../utils/dom.utils';
import { useMemo } from 'react';
import { DayButtonProps } from '../Datepicker.types';
import { endOfMonth, format, isAfter, isBefore, isSameDay, startOfMonth } from 'date-fns';
import { isBetween, isInRange } from '../../../../utils/time.utils';

export function DayButton({
  date,
  monthYear,
  unavailable,
  unavailableFrom,
  unavailableTo,
  value,
  onChange,
  highlight,
  ariaLabelCurrentDay,
  onMouseEnter,
  onMouseLeave,
  hoverStyle
}: DayButtonProps) {
  const isUnavailable = useMemo(
    () => isInRange(date, unavailableFrom, unavailableTo, unavailable),
    [unavailable, unavailableFrom, unavailableTo, date]
  );

  const isSelected = useMemo(
    () => !!value && isSameDay(value, date) && !(highlight && (highlight[0] || highlight[1])),
    [value, date, highlight]
  );
  const isHighlighted = useMemo(
    () =>
      !!highlight &&
      ((highlight[0] && isSameDay(new Date(highlight[0]), date)) ||
        (highlight[1] && isSameDay(new Date(highlight[1]), date)) ||
        (highlight[0] && highlight[1] && isBetween(date, highlight[0], highlight[1]))),
    [highlight, date]
  );

  const isCurrent = isSameDay(date, new Date());

  const classes = classNames({
    'is-current': isCurrent,
    'is-faded': isBefore(date, startOfMonth(monthYear)) || isAfter(date, endOfMonth(monthYear)),
    'is-unavailable': isUnavailable,
    'is-selected': isSelected || !!isHighlighted,
    'is-hovered': !!hoverStyle
  });
  return (
    <td>
      <button
        className={classes}
        tabIndex={isUnavailable ? -1 : undefined}
        disabled={isUnavailable}
        type="button"
        aria-pressed={isSelected}
        aria-label={`${format(date, 'EEEE d MMMM yyyy')}${isCurrent ? `, ${ariaLabelCurrentDay}` : ''}`}
        onClick={() => {
          onChange(date);
        }}
        onMouseEnter={() => {
          onMouseEnter && onMouseEnter(date);
        }}
        onMouseLeave={() => {
          onMouseLeave && onMouseLeave(date);
        }}
      >
        <span>{format(date, 'd')}</span>
      </button>
    </td>
  );
}
