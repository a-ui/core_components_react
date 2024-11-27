import { useState } from 'react';
import { renderDescription, renderLabel } from '../../atoms/input/input.renders';
import Datepicker from './Datepicker';
import { DateRangePickerProps } from './Datepicker.types';
import './DateRangePicker.css';
import { addDays, parseISO, subDays } from 'date-fns';
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
  fromCalendarProps = {},
  toCalendarProps = {},
  qa
}: DateRangePickerProps) {
  const [openTo, setOpenTo] = useState(false);
  const [errors, setErrors] = useState({ from: false, to: false });
  const [currentValue, setCurrentValue] = useState(value || ['', '']);

  const fromChange = (value: string, inputValue?: string) => {
    setCurrentValue([value, currentValue[1]]);
    setErrors({ ...errors, from: !value && !!inputValue });
    setOpenTo(!!value && !inputValue);
    onChange && onChange([value, currentValue[1]]);
  };
  const toChange = (value: string, inputValue?: string) => {
    setCurrentValue([currentValue[0], value]);
    setErrors({ ...errors, to: !value && !!inputValue });
    setOpenTo(!!value && !inputValue ? false : openTo);
    onChange && onChange([currentValue[0], value]);
  };

  const unavailableFrom = currentValue[1] ? addDays(new Date(parseISO(currentValue[1])), 1).toISOString() : '';
  const unavailableTo = currentValue[0] ? subDays(new Date(parseISO(currentValue[0])), 1).toISOString() : '';
  const hasError = errors.from || errors.to;
  const errorTexts = [
    ...(errors.from ? [`Ongeldige "${fromLabel}" datum.`] : []),
    ...(errors.to ? [`Ongeldige "${toLabel}" datum.`] : [])
  ];

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
            calendarProps={{ ...fromCalendarProps, unavailableFrom, highlightDates: value }}
            onChange={fromChange}
            invalidDateText=""
            openLeft
          />
        </div>
        <div className="m-daterangepicker__full">
          <Datepicker
            format={format}
            inputProps={{ ...toInputProps, id: `${id}-to` }}
            value={value[1]}
            open={openTo}
            calendarProps={{ ...toCalendarProps, unavailableTo, highlightDates: value }}
            onChange={toChange}
            invalidDateText=""
          />
        </div>
      </div>
    </div>
  );
}
