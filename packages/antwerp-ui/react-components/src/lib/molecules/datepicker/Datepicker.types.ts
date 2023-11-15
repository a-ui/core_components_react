import { FocusEvent } from 'react';
import { TextFieldProps } from '../../atoms/input';
import { Locale } from 'date-fns';

export interface DatepickerProps {
  qa?: string;
  format?: string;
  mask?: string;
  inputProps?: Pick<
    TextFieldProps,
    'id' | 'label' | 'description' | 'disabled' | 'name' | 'required' | 'size' | 'state'
  >;
  value?: string;
  label?: string;
  required?: boolean;
  invalidDateText?: string;
  iconButtonLabel?: string;
  calendarProps?: DatepickerCalendarProps;
  onChange?: (value: string) => void;
}

export interface CalendarProps {
  ariaLabel?: string;
  locale?: Locale;
  ariaLabelCurrentDay?: string;
  ariaLabelNextMonth?: string;
  ariaLabelNextYear?: string;
  ariaLabelNextYears?: string;
  ariaLabelPreviousMonth?: string;
  ariaLabelPreviousYear?: string;
  ariaLabelPreviousYears?: string;
  className?: string;
  isOpen?: boolean;
  onBlur?: (e: FocusEvent) => void;
  onChange?: (value: string) => void;
  qa?: string;
  unavailable?: string[];
  unavailableFrom?: string;
  unavailableTo?: string;
  value?: string;
}

type DatepickerCalendarProps = Pick<
  CalendarProps,
  | 'ariaLabel'
  | 'ariaLabelCurrentDay'
  | 'ariaLabelNextMonth'
  | 'ariaLabelNextYear'
  | 'ariaLabelNextYears'
  | 'ariaLabelPreviousMonth'
  | 'ariaLabelPreviousYear'
  | 'ariaLabelPreviousYears'
  | 'qa'
  | 'locale'
  | 'unavailable'
  | 'unavailableFrom'
  | 'unavailableTo'
>;

export interface MonthsViewProps {
  value?: Date;
  onChange: (value: Date) => void;
  activeYear: number;
  locale?: Locale;
}

export interface YearsViewProps {
  value?: Date;
  onChange: (value: Date) => void;
  activeMonth: number;
  yearsRowsStart: number;
}

export type DaysViewProps = Pick<
  CalendarProps,
  'ariaLabelCurrentDay' | 'locale' | 'unavailableFrom' | 'unavailableTo' | 'unavailable'
> & {
  value?: Date;
  onChange: (value: Date) => void;
  activeMonth: number;
  activeYear: number;
};

export type DayButtonProps = Pick<
  DaysViewProps,
  'ariaLabelCurrentDay' | 'unavailableFrom' | 'unavailableTo' | 'unavailable' | 'onChange' | 'value'
> & {
  date: Date;
  monthYear: Date;
};

export enum CalendarView {
  DAYS = 'd',
  MONTHS = 'm',
  YEARS = 'y'
}
