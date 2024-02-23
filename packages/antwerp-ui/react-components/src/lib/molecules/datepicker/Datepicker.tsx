import { DatepickerProps } from './Datepicker.types';
import { DEFAULT_DATE_FORMAT } from '../../../constants/settings';
import { formatISO, set } from 'date-fns';
import { Icon } from '../../base/icon';
import { isValid as fnsIsValid, format as fnsFormat, parse as fnsParse } from 'date-fns';
import { renderDescription, renderLabel } from '../../atoms/input/input.renders';
import { TextField } from '../../atoms/input';
import { useOutsideClick } from '../../../utils/custom.hooks';
import Calendar from './Calendar';
import React, { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { isInRange } from '../../../utils/time.utils';

export function Datepicker({
  qa,
  value,
  onChange,
  format = DEFAULT_DATE_FORMAT,
  inputProps = {},
  invalidDateText = 'Ongeldige datum',
  iconButtonLabel = 'Open kalender',
  calendarProps,
  label,
  required
}: DatepickerProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const [formattedValue, setFormattedValue] = useState(value ? fnsFormat(new Date(value), format) : '');
  const [currentValue, setCurrentValue] = useState(value || '');
  const [dateInvalidError, setDateInvalidError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setErrorMessage(formattedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalidDateText]);

  const handleOutsideClick = (target: EventTarget | null) => {
    if (!iconRef.current?.contains(target as Node)) {
      setIsOpen(false);
    }
  };
  const { elementRef: datepickerRef } = useOutsideClick(handleOutsideClick);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const parsedDate = new Date(fnsParse(newValue, format, new Date()));
    setFormattedValue(newValue);
    inputProps.onChange && inputProps.onChange(e);
    if (!setErrorMessage(newValue)) {
      const result = newValue ? formatISO(parsedDate) : '';
      setDateInvalidError('');
      setCurrentValue(result);
      onChange && onChange(result);
    }
  };

  const setErrorMessage = (value: string) => {
    const newValue = value;
    const parsedDate = new Date(fnsParse(newValue, format, new Date()));
    const isValidString = !newValue || (newValue.length === format.length && fnsIsValid(parsedDate));
    if (!!newValue && !isValidString) {
      setDateInvalidError(invalidDateText ?? '');
      return true;
    } else if (
      isInRange(parsedDate, calendarProps?.unavailableFrom, calendarProps?.unavailableTo, calendarProps?.unavailable)
    ) {
      setDateInvalidError(invalidDateText ?? '');
      return true;
    }
    return false;
  };

  const handleCalendarDateChange = (value: string) => {
    setCurrentValue(value);
    onChange && onChange(value);
    setFormattedValue(fnsFormat(new Date(value), format));
    setDateInvalidError('');
    setIsOpen(false);
  };

  const handleIconKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Enter') {
      toggleOpen();
    }
  };

  return (
    <div className="a-input has-icon-right" data-qa={qa}>
      {(label || inputProps?.label) && renderLabel({ label: label || inputProps?.label, id: inputProps?.id, required })}
      {renderDescription({
        description: dateInvalidError || inputProps?.description,
        state: dateInvalidError ? 'error' : inputProps?.state
      })}
      <div className="a-input__wrapper">
        <TextField
          {...inputProps}
          label={undefined}
          description={undefined}
          type="text"
          value={formattedValue}
          onChange={handleChange}
          state={dateInvalidError ? 'error' : inputProps?.state}
        />
        <Icon
          tabIndex={0}
          screenReaderText={iconButtonLabel}
          name="calendar"
          role="button"
          onClick={toggleOpen}
          className={!inputProps?.disabled ? 'is-clickable' : ''}
          onKeyDown={handleIconKeyDown}
          ref={iconRef}
        />
        <Calendar
          ref={datepickerRef}
          className="m-datepicker--fixed"
          isOpen={isOpen}
          onChange={handleCalendarDateChange}
          onBlur={handleBlur}
          value={currentValue}
          {...calendarProps}
        />
      </div>
    </div>
  );
}

export default Datepicker;
