import { format, getDate, getMonth, getYear } from 'date-fns';
import { classNames } from '../../../../utils/dom.utils';
import { MonthsViewProps } from '../Datepicker.types';
import { titleize } from '../../../../utils/string.utils';
import { DEFAULT_LOCALE } from '../../../../constants/settings';

export function MonthsView({ onChange, value, activeYear, locale = DEFAULT_LOCALE }: MonthsViewProps) {
  const renderMonth = (month: number) => {
    const classes = classNames({
      'is-current': month === getMonth(new Date()) && activeYear === getYear(new Date()),
      'is-selected': !!(value && month === getMonth(value) && activeYear === getYear(value))
    });
    const monthValue = new Date(activeYear, month, value ? getDate(value) : 1);
    return (
      <td>
        <button type="button" className={classes} onClick={() => onChange(monthValue)}>
          {titleize(format(monthValue, 'MMMM', { locale }))}
        </button>
      </td>
    );
  };

  const renderBody = () => {
    let index = 0;
    const monthPairs = [];
    while (index < 12) {
      monthPairs.push(
        <tr key={`aui-calendar-month-pair-${index}`}>
          {renderMonth(index)}
          {renderMonth(index + 1)}
        </tr>
      );
      index += 2;
    }
    return monthPairs;
  };

  return (
    <div className="m-datepicker__list">
      <table>
        <tbody className="m-datepicker__list-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
