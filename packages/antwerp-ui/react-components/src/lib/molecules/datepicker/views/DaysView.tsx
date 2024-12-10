import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  startOfMonth,
  startOfWeek,
  isValid
} from 'date-fns';
import { DaysViewProps } from '../Datepicker.types';
import { DayButton } from './DayButton';
import { titleize } from '../../../../utils/string.utils';
import { useState } from 'react';
import { isBetween } from '../../../../utils/time.utils';

export function DaysView({
  value,
  onChange,
  activeMonth,
  activeYear,
  ariaLabelCurrentDay,
  locale,
  unavailableFrom,
  unavailableTo,
  highlight,
  unavailable,
  hoverStart
}: DaysViewProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const renderWeek = (weekDay: Date) => {
    const days: React.ReactElement[] = [];
    let index = startOfWeek(weekDay, { locale });
    const endWeek = endOfWeek(weekDay, { locale });
    while (isValid(index) && !isAfter(index, endWeek)) {
      let hoverStyle = false;
      const activeMonthYear = new Date(activeYear, activeMonth);
      if (hoverStart && hoveredDate) {
        hoverStyle = isBetween(index, hoverStart, hoveredDate.toISOString());
      }
      days.push(
        <DayButton
          key={`day_${isValid(index) ? index.toISOString() : 'invalid'}`}
          ariaLabelCurrentDay={ariaLabelCurrentDay}
          unavailableFrom={unavailableFrom}
          unavailableTo={unavailableTo}
          unavailable={unavailable}
          date={index}
          hoverStyle={hoverStyle}
          highlight={highlight}
          value={value}
          monthYear={activeMonthYear}
          onChange={onChange}
          onMouseEnter={setHoveredDate}
          onMouseLeave={() => setHoveredDate(null)}
        />
      );
      index = addDays(index, 1);
    }
    return <tr key={`aui-calendar-week-${index.toISOString()}`}>{days}</tr>;
  };

  const renderBody = () => {
    const weeks = [];
    const current = new Date(activeYear, activeMonth);
    let index = startOfWeek(startOfMonth(current), { locale });
    const end = endOfMonth(current);
    while (isValid(index) && !isAfter(index, end)) {
      weeks.push(renderWeek(index));
      index = addWeeks(index, 1);
    }
    return weeks;
  };

  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date(), { locale }),
    end: endOfWeek(new Date(), { locale })
  });

  return (
    <div className="m-datepicker__grid">
      <table>
        <thead>
          <tr className="m-datepicker__grid-head">
            {daysOfWeek.map((day) => (
              <th key={`aui-calendar-weekday-${day}`} scope="col">
                <span title={titleize(format(day, 'EEEE', { locale }))}>
                  {titleize(format(day, 'EEEEEE', { locale }))}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="m-datepicker__grid-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
