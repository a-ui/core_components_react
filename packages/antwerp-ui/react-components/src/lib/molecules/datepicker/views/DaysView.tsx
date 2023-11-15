import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import { DaysViewProps } from '../Datepicker.types';
import { DayButton } from './DayButton';
import { titleize } from '../../../../utils/string.utils';

export function DaysView({
  value,
  onChange,
  activeMonth,
  activeYear,
  ariaLabelCurrentDay,
  locale,
  unavailableFrom,
  unavailableTo,
  unavailable
}: DaysViewProps) {
  const renderWeek = (weekDay: Date) => {
    const days: React.ReactElement[] = [];
    let index = startOfWeek(weekDay, { locale });
    const endWeek = endOfWeek(weekDay, { locale });
    while (!isAfter(index, endWeek)) {
      const activeMonthYear = new Date(activeYear, activeMonth);
      days.push(
        <DayButton
          key={`day_${index.toISOString()}`}
          ariaLabelCurrentDay={ariaLabelCurrentDay}
          unavailableFrom={unavailableFrom}
          unavailableTo={unavailableTo}
          unavailable={unavailable}
          date={index}
          value={value}
          monthYear={activeMonthYear}
          onChange={onChange}
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
    while (!isAfter(index, end)) {
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
