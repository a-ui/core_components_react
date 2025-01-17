/* eslint-disable react-hooks/exhaustive-deps */
import { DatepickerProps } from './Datepicker.types';
import { DEFAULT_DATE_FORMAT } from '../../../constants/settings';
import { formatISO } from 'date-fns';
import { Icon } from '../../base/icon';
import { isValid as fnsIsValid, format as fnsFormat, parse as fnsParse } from 'date-fns';
import { renderDescription, renderLabel } from '../../atoms/input/input.renders';
import { TextField } from '../../atoms/input';
import { useOutsideClick } from '../../../utils/custom.hooks';
import Calendar from './Calendar';
import React, { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { formatIfValid, isInRange } from '../../../utils/time.utils';

export function Datepicker({
  qa,
  value,
  onChange,
  format = DEFAULT_DATE_FORMAT,
  inputProps = {},
  invalidDateText,
  iconButtonLabel = 'Open kalender',
  calendarProps,
  label,
  openLeft = false,
  required,
  open,
  noCalendar,
  onIconClick,
  onCalendarToggle,
  errorMsgFunction,
  onEscKey
}: DatepickerProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const [formattedValue, setFormattedValue] = useState(value ? formatIfValid(value, format) : '');
  const [currentValue, setCurrentValue] = useState(value || '');
  const [dateInvalidError, setDateInvalidError] = useState('');
  const [isOpen, setIsOpen] = useState(open || false);
  const [countClick, setCountClick] = useState(0);

  useEffect(() => {
    setErrorMessage(formattedValue);
  }, [invalidDateText]);

  useEffect(() => {
    setFormattedValue(value ? formatIfValid(value, format) : formattedValue);
    setCurrentValue(value || '');
  }, [value]);

  const calendarToggle = (open: boolean, value?: string) => {
    setIsOpen(open);
    onCalendarToggle && onCalendarToggle(open, value);
  };

  const focusInside = () => {
    setTimeout(() => {
      const buttonToFocus =
        datepickerRef.current?.querySelector('.is-selected') ||
        datepickerRef.current?.querySelector('.is-current:not(.is-unavailable)') ||
        datepickerRef.current?.querySelector('.m-datepicker__nav-title');
      if (buttonToFocus && !buttonToFocus.classList.contains('is-unavailable')) {
        buttonToFocus.focus();
      }
    }, 50);
  };

  const onEsc = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      calendarToggle(false);
      onEscKey && onEscKey();
    }
  };

  const handleOutsideClick = () => {
    setCountClick(0);
    calendarToggle(false);
  };

  const { elementRef: datepickerRef } = useOutsideClick(handleOutsideClick);

  useEffect(() => {
    if (open || isOpen) {
      datepickerRef.current?.addEventListener('keydown', onEsc);
      focusInside();
    }
    return () => datepickerRef.current?.removeEventListener('keydown', onEsc);
  }, [open, isOpen, onIconClick]);

  const handleBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      calendarToggle(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const parsedDate = new Date(fnsParse(newValue, format, new Date()));
    setFormattedValue(newValue);
    inputProps.onChange && inputProps.onChange(e);
    if (!setErrorMessage(newValue) && fnsIsValid(parsedDate)) {
      const result = formatISO(parsedDate);
      setDateInvalidError('');
      setCurrentValue(result);
      onChange && onChange(result, newValue);
    } else {
      !newValue && setCurrentValue('');
      onChange && onChange('', newValue);
    }
  };

  const setErrorMessage = (value: string | undefined) => {
    if (errorMsgFunction) {
      const message = errorMsgFunction(value);
      setDateInvalidError(message ? message : '');
      return !!message;
    }
    const newValue = value || '';
    const parsedDate = new Date(fnsParse(newValue, format, new Date()));
    const isValidString = !newValue || (newValue.length === format.length && fnsIsValid(parsedDate));
    if (!!newValue && !isValidString) {
      setDateInvalidError(invalidDateText === null ? '' : invalidDateText ?? 'Ongeldige datum');
      return true;
    } else if (
      isInRange(parsedDate, calendarProps?.unavailableFrom, calendarProps?.unavailableTo, calendarProps?.unavailable)
    ) {
      setDateInvalidError(invalidDateText === null ? '' : invalidDateText ?? 'Ongeldige datum');
      return true;
    } else if (invalidDateText) {
      setDateInvalidError(invalidDateText);
      return true;
    }
    return false;
  };

  const handleCalendarDateChange = (theValue: string) => {
    let formatted = fnsFormat(new Date(theValue), format);
    try {
      formatted = fnsFormat(new Date(value || theValue), format);
    } catch (error) {
      // Do nothing, controlled value is not a valid date
    }
    setCurrentValue(theValue);
    onChange && onChange(theValue);
    setFormattedValue(formatted);
    setDateInvalidError('');
    calendarToggle(false, theValue);
  };

  const handleIconKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Enter') {
      onIconClick ? onIconClick(true) : calendarToggle(true);
    }
  };

  const clickIcon = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (countClick === 1) {
      setCountClick(0);
      return;
    }
    setCountClick(1);
    e.preventDefault();
    e.stopPropagation();
    if (onIconClick) {
      onIconClick(!open);
    } else {
      calendarToggle(!isOpen);
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
          value={inputProps.value || formattedValue}
          onChange={handleChange}
          state={dateInvalidError ? 'error' : inputProps?.state}
        />
        <Icon
          tabIndex={0}
          screenReaderText={iconButtonLabel}
          name="calendar"
          role="button"
          onClick={clickIcon}
          className={!inputProps?.disabled ? 'is-clickable' : ''}
          onKeyDown={handleIconKeyDown}
          ref={iconRef}
        />
        {noCalendar ? null : (
          <Calendar
            ref={datepickerRef}
            className={`m-datepicker--fixed ${openLeft ? 'm-datepicker--left' : ''}`}
            isOpen={open !== undefined ? open : isOpen}
            onChange={handleCalendarDateChange}
            onBlur={handleBlur}
            value={currentValue}
            isModal
            {...calendarProps}
          />
        )}
      </div>
    </div>
  );
}

export default Datepicker;
