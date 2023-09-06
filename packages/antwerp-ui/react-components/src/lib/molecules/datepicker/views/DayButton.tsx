import { classNames } from '../../../../utils/dom.utils';
import React from 'react';
import { DayButtonProps } from '../Datepicker.types';
import { endOfMonth, format, isAfter, isBefore, isSameDay, startOfMonth } from 'date-fns';
import { isInRange } from '../../../../utils/time.utils';

export function DayButton({
  date,
  monthYear,
  unavailable,
  unavailableFrom,
  unavailableTo,
  value,
  onChange,
  ariaLabelCurrentDay
}: DayButtonProps) {
  const isUnavailable = React.useMemo(
    () => isInRange(date, unavailableFrom, unavailableTo, unavailable),
    [unavailable, unavailableFrom, unavailableTo, date]
  );

  const isSelected = React.useMemo(() => !!value && isSameDay(value, date), [value, date]);
  const isCurrent = isSameDay(date, new Date());

  const classes = classNames({
    'is-current': isCurrent,
    'is-faded': isBefore(date, startOfMonth(monthYear)) || isAfter(date, endOfMonth(monthYear)),
    'is-unavailable': isUnavailable,
    'is-selected': isSelected
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
      >
        <span>{format(date, 'd')}</span>
      </button>
    </td>
  );
}
