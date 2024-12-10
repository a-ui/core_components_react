import { FocusEvent } from 'react';
import { TextFieldProps } from '../../atoms/input';
import { Locale } from 'date-fns';

export interface DatepickerProps {
  qa?: string;
  format?: string;
  mask?: string;
  inputProps?: DatepickerInputProps;
  value?: string;
  label?: string;
  open?: boolean;
  noCalendar?: boolean;
  required?: boolean;
  invalidDateText?: string;
  iconButtonLabel?: string;
  openLeft?: boolean;
  calendarProps?: DatepickerCalendarProps;
  errorMsgFunction?: (value: string | undefined) => string | undefined | null;
  onIconClick?: (open: boolean) => void;
  onCalendarToggle?: (open: boolean, selection?: string) => void;
  onChange?: (value: string, inputValue?: string) => void;
}

export interface DateRangePickerProps {
  id?: string;
  fromLabel?: string;
  toLabel?: string;
  value?: [string, string];
  qa?: string;
  format?: string;
  fromInputProps?: DatepickerInputProps;
  toInputProps?: DatepickerInputProps;
  calendarProps?: DatepickerCalendarProps;
  onChange?: (value: [string, string]) => void;
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
  highlightDates?: [string, string];
  hoverStart?: string;
  onBlur?: (e: FocusEvent) => void;
  onChange?: (value: string) => void;
  qa?: string;
  unavailable?: string[];
  unavailableFrom?: string;
  unavailableTo?: string;
  value?: string;
}

type DatepickerInputProps = Pick<
  TextFieldProps,
  'id' | 'label' | 'description' | 'disabled' | 'name' | 'required' | 'size' | 'state' | 'onChange' | 'value'
>;
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
  | 'highlightDates'
  | 'hoverStart'
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
  'ariaLabelCurrentDay' | 'locale' | 'unavailableFrom' | 'unavailableTo' | 'unavailable' | 'hoverStart'
> & {
  value?: Date;
  onChange: (value: Date) => void;
  activeMonth: number;
  activeYear: number;
  highlight?: [string, string];
};

export type DayButtonProps = Pick<
  DaysViewProps,
  'ariaLabelCurrentDay' | 'unavailableFrom' | 'unavailableTo' | 'unavailable' | 'onChange' | 'value' | 'highlight'
> & {
  date: Date;
  monthYear: Date;
  hoverStyle?: boolean;
  onMouseEnter?: (date: Date) => void;
  onMouseLeave?: (date: Date) => void;
};

export enum CalendarView {
  DAYS = 'd',
  MONTHS = 'm',
  YEARS = 'y'
}
