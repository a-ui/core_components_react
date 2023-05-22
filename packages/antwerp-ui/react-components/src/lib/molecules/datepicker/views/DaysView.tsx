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
import { useLocale } from '../../../../utils/time.utils';

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
  const dateFnsLocale = useLocale(locale);

  const renderWeek = (weekDay: Date) => {
    const days: React.ReactElement[] = [];
    let index = startOfWeek(weekDay, dateFnsLocale);
    const endWeek = endOfWeek(weekDay, dateFnsLocale);
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
    let index = startOfWeek(startOfMonth(current), dateFnsLocale);
    const end = endOfMonth(current);
    while (!isAfter(index, end)) {
      weeks.push(renderWeek(index));
      index = addWeeks(index, 1);
    }
    return weeks;
  };

  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date(), dateFnsLocale),
    end: endOfWeek(new Date(), dateFnsLocale)
  });

  return (
    <div className="m-datepicker__grid">
      <table>
        <thead>
          <tr className="m-datepicker__grid-head">
            {daysOfWeek.map((day) => (
              <th key={`aui-calendar-weekday-${day}`} scope="col">
                <span title={format(day, 'EEEE', dateFnsLocale)}>{format(day, 'EEEEEE', dateFnsLocale)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="m-datepicker__grid-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
