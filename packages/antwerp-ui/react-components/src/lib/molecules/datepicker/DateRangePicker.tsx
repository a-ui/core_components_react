import { useEffect, useState } from 'react';
import { renderDescription, renderLabel } from '../../atoms/input/input.renders';
import Datepicker from './Datepicker';
import { DateRangePickerProps } from './Datepicker.types';
import './DateRangePicker.css';
import { parseISO, subDays } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../constants/settings';

export function DateRangePicker({
  id = 'aui-date-range-picker',
  fromLabel = 'Van',
  toLabel = 'tot en met',
  value = ['', ''],
  onChange,
  format = DEFAULT_DATE_FORMAT,
  fromInputProps = {},
  toInputProps = {},
  calendarProps = {},
  qa
}: DateRangePickerProps) {
  const [calendarOpen, setCalendarOpen] = useState({ from: false, to: false });
  const [toToggled, setToToggled] = useState(false);
  const [fromSelected, setFromSelected] = useState(false);
  const [nextIsTo, setNextIsTo] = useState(false);

  const [errors, setErrors] = useState({ from: false, to: false });
  const [currentValue, setCurrentValue] = useState(value || ['', '']);

  useEffect(() => {
    if (fromSelected) {
      setCalendarOpen({ from: true, to: false });
      setFromSelected(false);
    }
  }, [fromSelected]);

  const fromChange = (value: string, inputValue?: string) => {
    if (nextIsTo) {
      setNextIsTo(false);
      return toChange(value, inputValue);
    }
    if (value && !inputValue) {
      setFromSelected(true);
      setNextIsTo(true);
    }
    const newFrom = [value, calendarOpen.from || calendarOpen.to ? '' : currentValue[1]] as [string, string];
    setCurrentValue(newFrom);
    setErrors({ ...errors, from: !value && !!inputValue });
    onChange && onChange(newFrom);
  };

  const toChange = (value: string, inputValue?: string) => {
    let fromChange = currentValue[0];
    if (!fromChange && value) {
      const selectedDate = new Date(parseISO(value));
      const today = new Date();
      fromChange = selectedDate > today ? today.toISOString() : value;
    }
    setCurrentValue([fromChange, value]);
    setErrors({ ...errors, to: !value && !!inputValue });
    onChange && onChange([fromChange, value]);
  };

  const unavailableTo = currentValue[0] ? subDays(new Date(parseISO(currentValue[0])), 1).toISOString() : '';
  const hasError = errors.from || errors.to;
  const errorTexts = [
    ...(errors.from ? [`Ongeldige "${fromLabel}" datum.`] : []),
    ...(errors.to ? [`Ongeldige "${toLabel}" datum.`] : [])
  ];

  const setCalendarOpenFrom = (open: boolean) => {
    if (toToggled) {
      setToToggled(false);
      return;
    }
    setCalendarOpen({ from: open, to: false });
  };

  const setCalendarOpenTo = () => {
    setCalendarOpen({ from: false, to: !calendarOpen.to });
    setToToggled(true);
    setNextIsTo(true);
  };

  return (
    <div className="m-daterangepicker" data-qa={qa}>
      <div className="u-container-horizontal">
        {fromLabel &&
          renderLabel({
            noMargin: hasError,
            label: fromLabel,
            id: `${id}-from`,
            className: 'm-daterangepicker__full u-margin-right-xs'
          })}
        {toLabel &&
          renderLabel({ noMargin: hasError, label: toLabel, id: `${id}-to`, className: 'm-daterangepicker__full' })}
      </div>
      {renderDescription({
        id: `${id}`,
        description: errorTexts.join(' '),
        state: 'error'
      })}
      <div className="u-container-horizontal">
        <div className="m-daterangepicker__full u-margin-right-xs">
          <Datepicker
            format={format}
            value={value[0]}
            inputProps={{ ...fromInputProps, id: `${id}-from` }}
            calendarProps={{
              ...calendarProps,
              ...(nextIsTo ? { unavailableTo } : {}),
              highlightDates: value,
              hoverStart: value[0]
            }}
            onChange={fromChange}
            invalidDateText=""
            openLeft
            open={calendarOpen.from || calendarOpen.to}
            onCalendarToggle={setCalendarOpenFrom}
          />
        </div>
        <div className="m-daterangepicker__full">
          <Datepicker
            open={false}
            format={format}
            inputProps={{ ...toInputProps, id: `${id}-to` }}
            value={value[1]}
            calendarProps={{
              ...calendarProps,
              unavailableTo
            }}
            noCalendar
            onChange={toChange}
            invalidDateText=""
            onIconClick={setCalendarOpenTo}
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangePicker;
